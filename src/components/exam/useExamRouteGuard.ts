"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getCanonicalExamPath } from "@/lib/examRouting";
import { useExamSessionStore } from "@/store/examSessionStore";

/**
 * Redirects away from any exam route that doesn't match where the current
 * attempt actually is. This is what makes a submitted section "locked":
 * a stale URL (back button, bookmark, direct nav) always bounces forward
 * to the canonical current screen rather than re-entering old state.
 */
export function useExamRouteGuard(examId: string) {
  const router = useRouter();
  const pathname = usePathname();
  const attempt = useExamSessionStore((s) => s.attempt);
  const hasHydrated = useExamSessionStore((s) => s.hasHydrated);

  useEffect(() => {
    if (!hasHydrated) return;
    if (!attempt || attempt.examId !== examId) {
      router.replace("/");
      return;
    }
    const canonical = getCanonicalExamPath(attempt);
    if (canonical !== pathname) {
      router.replace(canonical);
    }
  }, [hasHydrated, attempt, examId, pathname, router]);

  return { attempt, hasHydrated };
}
