# SNAPSHOT

## Project
MCAT practice-exam simulator (Next.js static export, client-only, IndexedDB-persisted) living in a repo that also still holds an unrelated dark-theme prompt library; read /home/user/Dark-Themes-Professional-Prompts/README.md and /tmp/claude-0/-home-user-Dark-Themes-Professional-Prompts/a6dc8887-ea6c-587e-b6b3-028ee4695331/scratchpad/mcat-simulator/README.md.

## Verbatim-critical
- Working branch: `claude/mcat-practice-tutoring-site-1j7xax` (pushed, in sync with origin)
- Second repo `isamy67/mcat-sim` is a **separate git history**, not a remote of this repo. Its only local clone is at `/tmp/claude-0/-home-user-Dark-Themes-Professional-Prompts/a6dc8887-ea6c-587e-b6b3-028ee4695331/scratchpad/mcat-simulator`, remote `http://local_proxy@127.0.0.1:41729/git/isamy67/mcat-sim`, main tip `4d07dd7`. That scratchpad path is the ONLY copy — losing it means re-staging the split.
- `mcat-sim` static export requires `NEXT_PUBLIC_BASE_PATH=/mcat-sim`; the original repo's export uses `/Dark-Themes-Professional-Prompts`. Wrong value silently ships broken asset URLs.
- Live: https://isamy67.github.io/Dark-Themes-Professional-Prompts/ returns 200. https://isamy67.github.io/mcat-sim/ returns 404 (Pages never enabled).

## Running state
none — no dev servers, builds, or containers. Listening ports 2024/2025/36587/41729/34033 are session infrastructure (git proxy, agent), not project processes. `out/` has been deleted.

## Decisions made
- Split the MCAT app into a new standalone repo `isamy67/mcat-sim` and force-pushed over its auto-generated initial commit. The original repo was deliberately left untouched and still serves the live site, so nothing has been migrated away yet.
- All exam/lesson/flashcard content is ORIGINAL, written to AAMC format and difficulty. Copying real AAMC or UWorld items was ruled out as copyright infringement; do not "improve" the content by importing real questions.
- `actions/configure-pages` with `enablement: true` was tried on both repos and fails with `Resource not accessible by integration`; it was reverted in the original repo's workflow. Pages must be enabled by hand in repo settings — do not re-add that flag.
- Scaled scores are presented as ESTIMATES (AAMC equating tables are not public). Every score surface carries that label intentionally.
- exam-1 is at full AAMC length, 59/53/59/59 = 230 questions, with real 95/90/95/95-minute timers (`EXAM_1_USES_FULL_AAMC_DURATIONS = true`). Chem/Phys and Bio/Biochem are composed from a starter set plus four files in /home/user/Dark-Themes-Professional-Prompts/src/content/exams/exam-1/sections/parts/, each owning a fixed id/order range.

## Pick up here
Sync the full-length exam into the separate `mcat-sim` repo: copy /home/user/Dark-Themes-Professional-Prompts/src/content/exams/exam-1/sections/ (including parts/) and /home/user/Dark-Themes-Professional-Prompts/src/lib/examConfig.ts into the clone at /tmp/claude-0/-home-user-Dark-Themes-Professional-Prompts/a6dc8887-ea6c-587e-b6b3-028ee4695331/scratchpad/mcat-simulator (re-clone from https://github.com/isamy67/mcat-sim if that path is gone), build with `NEXT_PUBLIC_BASE_PATH=/mcat-sim npm run build`, commit, and push to its `main`. Its site stays 404 until the owner enables Pages at https://github.com/isamy67/mcat-sim/settings/pages (Source = GitHub Actions).
