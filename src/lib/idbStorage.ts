import type { StateStorage } from "zustand/middleware";

/**
 * Minimal promise-based key/value wrapper over the raw IndexedDB API, exposed
 * as an async `StateStorage` for Zustand's persist middleware. We hand-roll it
 * (rather than pulling in the `idb` package) to avoid a new dependency: the
 * surface we need is tiny — a single object store keyed by the persist `name`.
 *
 * Values are the exact JSON strings zustand hands us, so this is a drop-in
 * async replacement for the previous localStorage adapter. It is SSR-safe:
 * on the server (no `window`/`indexedDB`), getItem resolves to null and
 * set/remove resolve to no-ops, matching the old synchronous adapter's
 * behaviour so hydration still starts from default state.
 */

const DB_NAME = "mcat-prep";
const STORE_NAME = "keyval";
const DB_VERSION = 1;

/** True only in a browser that actually exposes IndexedDB. */
function idbAvailable(): boolean {
  return typeof window !== "undefined" && typeof indexedDB !== "undefined";
}

// Cache the open request so concurrent store hydrations share one connection.
let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return dbPromise;
}

/** Run a single request inside a transaction and resolve with its result. */
function withStore<T>(
  mode: IDBTransactionMode,
  run: (store: IDBObjectStore) => IDBRequest,
): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, mode);
        const request = run(tx.objectStore(STORE_NAME));
        request.onsuccess = () => resolve(request.result as T);
        request.onerror = () => reject(request.error);
      }),
  );
}

async function idbGet(key: string): Promise<string | null> {
  const value = await withStore<string | undefined>("readonly", (store) =>
    store.get(key),
  );
  return value ?? null;
}

async function idbSet(key: string, value: string): Promise<void> {
  await withStore("readwrite", (store) => store.put(value, key));
}

async function idbDel(key: string): Promise<void> {
  await withStore("readwrite", (store) => store.delete(key));
}

/**
 * The read used by getItem, factored out (with its dependencies injected) so
 * the one-time localStorage -> IndexedDB migration can be unit-tested without
 * a real IndexedDB. On the first read for a key: if IndexedDB has no value but
 * the old localStorage key does, copy it into IndexedDB and return it, so
 * existing users keep in-progress exam attempts, results history, and tutor
 * progress. The localStorage copy is intentionally left in place — it is
 * harmless dead data, and keeping it avoids any risk of data loss should the
 * IndexedDB write above fail after localStorage has been cleared.
 */
export async function readWithMigration(
  key: string,
  idb: {
    get: (key: string) => Promise<string | null>;
    set: (key: string, value: string) => Promise<void>;
  },
  local: Pick<Storage, "getItem">,
): Promise<string | null> {
  const existing = await idb.get(key);
  if (existing !== null) return existing;

  const legacy = local.getItem(key);
  if (legacy !== null) {
    await idb.set(key, legacy);
    return legacy;
  }
  return null;
}

export const idbStorage: StateStorage = {
  getItem: async (name) => {
    if (!idbAvailable()) return null;
    return readWithMigration(
      name,
      { get: idbGet, set: idbSet },
      window.localStorage,
    );
  },
  setItem: async (name, value) => {
    if (!idbAvailable()) return;
    await idbSet(name, value);
  },
  removeItem: async (name) => {
    if (!idbAvailable()) return;
    await idbDel(name);
  },
};
