import type { ExamAttempt } from "@/lib/types";

/**
 * The single source of truth mapping attempt state -> route. Used both to
 * redirect a user forward when they land on a stale/already-submitted
 * screen (browser back button, a bookmarked URL) and to navigate after
 * store actions that change attempt.status. Locked-navigation is therefore
 * "free": there is no page a submitted section's URL can resolve to except
 * wherever the attempt actually is now.
 */
export function getCanonicalExamPath(attempt: ExamAttempt): string {
  const base = `/exam/${attempt.examId}`;
  switch (attempt.status) {
    case "tutorial":
      return `${base}/tutorial`;
    case "section-intro":
      return base;
    case "in-section":
      return `${base}/section/${attempt.currentSectionIndex}`;
    case "reviewing-section":
      return `${base}/review/${attempt.currentSectionIndex}`;
    case "on-break":
      return `${base}/break`;
    case "void-decision":
      return `${base}/void`;
    case "completed":
    case "voided":
      return `${base}/results`;
    case "not-started":
    default:
      return "/";
  }
}
