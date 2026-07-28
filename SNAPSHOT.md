# SNAPSHOT

## Project
MCAT practice-exam simulator (Next.js static export, client-only, IndexedDB-persisted) living in a repo that also still holds an unrelated dark-theme prompt library; read /home/user/Dark-Themes-Professional-Prompts/README.md and /tmp/claude-0/-home-user-Dark-Themes-Professional-Prompts/a6dc8887-ea6c-587e-b6b3-028ee4695331/scratchpad/mcat-simulator/README.md.

## Verbatim-critical
- Working branch: `claude/mcat-practice-tutoring-site-1j7xax` (pushed, in sync with origin)
- Second repo `isamy67/mcat-sim` is a **separate git history**, not a remote of this repo. Its only local clone is at `/tmp/claude-0/-home-user-Dark-Themes-Professional-Prompts/a6dc8887-ea6c-587e-b6b3-028ee4695331/scratchpad/mcat-simulator`, remote `http://local_proxy@127.0.0.1:41729/git/isamy67/mcat-sim`, main tip `4d07dd7`. That scratchpad path is the ONLY copy — losing it means re-staging the split.
- `mcat-sim` static export requires `NEXT_PUBLIC_BASE_PATH=/mcat-sim`; the original repo's export uses `/Dark-Themes-Professional-Prompts`. Wrong value silently ships broken asset URLs.
- `stash@{0}` on this repo = partial chem-phys/bio-biochem expansion (new passages written, questions NOT written). Applying it re-breaks schema validation until the matching questions exist.
- Live: https://isamy67.github.io/Dark-Themes-Professional-Prompts/ returns 200. https://isamy67.github.io/mcat-sim/ returns 404 (Pages never enabled).

## Running state
none — no dev servers, builds, or containers. Listening ports 2024/2025/36587/41729/34033 are session infrastructure (git proxy, agent), not project processes. `out/` has been deleted.

## Decisions made
- Split the MCAT app into a new standalone repo `isamy67/mcat-sim` and force-pushed over its auto-generated initial commit. The original repo was deliberately left untouched and still serves the live site, so nothing has been migrated away yet.
- All exam/lesson/flashcard content is ORIGINAL, written to AAMC format and difficulty. Copying real AAMC or UWorld items was ruled out as copyright infringement; do not "improve" the content by importing real questions.
- `actions/configure-pages` with `enablement: true` was tried on both repos and fails with `Resource not accessible by integration`; it was reverted in the original repo's workflow. Pages must be enabled by hand in repo settings — do not re-add that flag.
- Scaled scores are presented as ESTIMATES (AAMC equating tables are not public). Every score surface carries that label intentionally.
- CARS (53 Q) and Psych/Soc (59 Q) were expanded to real AAMC counts and committed; `src/lib/examConfig.ts` `EXAM_1_QUESTION_COUNTS` was updated to match actual content, so config and content stay consistent at every intermediate state.

## Pick up here
Expand /home/user/Dark-Themes-Professional-Prompts/src/content/exams/exam-1/sections/chem-phys.ts from 12 questions to 59, then do the same for bio-biochem.ts (also 12 → 59). Four prior subagent attempts died on session usage limits mid-write; the partial passage work is in `stash@{0}` but is easier to redo than to reconcile. Match the structure of the existing questions in the file (4 choices with a per-choice `explanation`, `explanationOverall`, `walkthrough.approachNotes` + `walkthrough.steps`, `category.foundationalConcept` FC4/FC5 for chem-phys and FC1/FC2/FC3 for bio-biochem). Validate each file in isolation without a full build:

`cd /home/user/Dark-Themes-Professional-Prompts && npx tsx -e "import c from './src/content/exams/exam-1/sections/chem-phys'; import {sectionContentSchema} from './src/lib/types'; const r=sectionContentSchema.parse(c); console.log('OK', r.questions.length);"`

It must print `OK 59`. Then update `EXAM_1_QUESTION_COUNTS` in /home/user/Dark-Themes-Professional-Prompts/src/lib/examConfig.ts to 59/53/59/59, and only then consider flipping `EXAM_1_USES_FULL_AAMC_DURATIONS` to true for real 95/90/95/95-minute timing.
