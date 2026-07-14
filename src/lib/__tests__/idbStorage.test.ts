import { describe, expect, it, vi } from "vitest";
import { readWithMigration } from "@/lib/idbStorage";

/**
 * Exercises the one-time localStorage -> IndexedDB migration in isolation by
 * injecting in-memory stand-ins for IndexedDB and localStorage, so we don't
 * need a real IndexedDB implementation to cover the branching logic.
 */
function makeIdb(initial: Record<string, string> = {}) {
  const map = new Map(Object.entries(initial));
  return {
    map,
    get: vi.fn(async (key: string) => map.get(key) ?? null),
    set: vi.fn(async (key: string, value: string) => {
      map.set(key, value);
    }),
  };
}

function makeLocal(initial: Record<string, string> = {}): Pick<
  Storage,
  "getItem"
> {
  const map = new Map(Object.entries(initial));
  return { getItem: (key) => map.get(key) ?? null };
}

describe("readWithMigration", () => {
  const KEY = "mcat-prep.exam-session.v1";

  it("returns the IndexedDB value when present and ignores localStorage", async () => {
    const idb = makeIdb({ [KEY]: "idb-value" });
    const local = makeLocal({ [KEY]: "legacy-value" });

    const result = await readWithMigration(KEY, idb, local);

    expect(result).toBe("idb-value");
    // No migration write should happen when IDB already has the key.
    expect(idb.set).not.toHaveBeenCalled();
  });

  it("copies the legacy localStorage value into IndexedDB and returns it", async () => {
    const idb = makeIdb();
    const local = makeLocal({ [KEY]: "legacy-value" });

    const result = await readWithMigration(KEY, idb, local);

    expect(result).toBe("legacy-value");
    expect(idb.set).toHaveBeenCalledWith(KEY, "legacy-value");
    expect(idb.map.get(KEY)).toBe("legacy-value");
  });

  it("returns null when neither store has the key", async () => {
    const idb = makeIdb();
    const local = makeLocal();

    const result = await readWithMigration(KEY, idb, local);

    expect(result).toBeNull();
    expect(idb.set).not.toHaveBeenCalled();
  });

  it("preserves a falsy-but-present empty string from IndexedDB", async () => {
    const idb = makeIdb({ [KEY]: "" });
    const local = makeLocal({ [KEY]: "legacy-value" });

    const result = await readWithMigration(KEY, idb, local);

    // An empty string is a real stored value, not a cache miss.
    expect(result).toBe("");
    expect(idb.set).not.toHaveBeenCalled();
  });
});
