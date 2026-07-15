"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  Layers,
  Target,
  TrendingUp,
} from "lucide-react";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import {
  accuracyByConcept,
  accuracyBySection,
  buildScoreHistory,
  flashcardTallies,
  scoreSummary,
  selectWeakAreas,
  totalQuestionsAnswered,
  type GroupAccuracy,
  type ScorePoint,
  type TutorAnswerDatum,
} from "@/lib/analytics";
import {
  getFoundationalConcept,
  getQuestionsForSection,
  listDecks,
} from "@/lib/content";
import { SECTION_KEYS } from "@/lib/types";
import type { SectionKey } from "@/lib/types";
import { useExamSessionStore } from "@/store/examSessionStore";
import { useResultsStore } from "@/store/resultsStore";
import { useSrsStore } from "@/store/srsStore";
import { useTutorProgressStore } from "@/store/tutorProgressStore";

const SECTION_KEY_SET = new Set<string>(SECTION_KEYS);

/** Flatten the tutor-progress store into the taxonomy-resolved rows analytics expects. */
function buildTutorData(
  progress: Record<string, Record<string, { choiceId: string | null; correct: boolean }>>,
): TutorAnswerDatum[] {
  const rows: TutorAnswerDatum[] = [];
  for (const [moduleId, questions] of Object.entries(progress)) {
    if (!SECTION_KEY_SET.has(moduleId)) continue;
    const sectionKey = moduleId as SectionKey;
    const byId = new Map(
      getQuestionsForSection(moduleId).map((q) => [q.id, q]),
    );
    for (const [qid, prog] of Object.entries(questions)) {
      const q = byId.get(qid);
      if (!q) continue;
      let conceptKey: string;
      let conceptLabel: string;
      if (q.category.foundationalConcept) {
        const raw = q.category.foundationalConcept; // e.g. "FC4"
        conceptKey = raw.toLowerCase();
        const fc = getFoundationalConcept(conceptKey);
        conceptLabel = fc ? `${raw} · ${fc.title}` : raw;
      } else if (q.category.skill) {
        conceptKey = `skill:${q.category.skill.toLowerCase().replace(/\s+/g, "-")}`;
        conceptLabel = q.category.skill;
      } else {
        conceptKey = `${sectionKey}:general`;
        conceptLabel = "General";
      }
      rows.push({ sectionKey, conceptKey, conceptLabel, correct: prog.correct });
    }
  }
  return rows;
}

export function DashboardClient() {
  const [now] = useState(() => Date.now());
  const examHydrated = useExamSessionStore((s) => s.hasHydrated);
  const srsHydrated = useSrsStore((s) => s.hasHydrated);
  const results = useResultsStore((s) => s.results);
  const tutorProgress = useTutorProgressStore((s) => s.progress);
  const srsProgress = useSrsStore((s) => s.progress);

  // Both flags flip after their IndexedDB reads resolve; results hydrate on the
  // same tick, so gating on these two avoids a flash of empty-state charts.
  if (!examHydrated || !srsHydrated) return <LoadingScreen />;

  const tutorData = buildTutorData(tutorProgress);
  const tutorAnswered = tutorData.length;
  const sectionAccuracy = accuracyBySection(tutorData);
  const conceptAccuracy = accuracyByConcept(tutorData);
  const weakAreas = selectWeakAreas(conceptAccuracy, { limit: 3 });
  const history = buildScoreHistory(results);
  const { latest, best } = scoreSummary(history);
  const questionsAnswered = totalQuestionsAnswered(tutorAnswered, results);

  const cards = listDecks().flatMap((deck) =>
    deck.cards.map((card) => ({ state: srsProgress[deck.id]?.[card.id] })),
  );
  const fc = flashcardTallies(cards, now);

  const hasAnyData =
    tutorAnswered > 0 || results.length > 0 || fc.seen > 0;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16">
      <div>
        <p className="font-mono text-sm tracking-wide text-muted-foreground">
          YOUR PROGRESS
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Performance Dashboard
        </h1>
      </div>

      {!hasAnyData && (
        <Card className="flex flex-col items-center gap-4 p-10 text-center">
          <BarChart3 size={28} strokeWidth={1.5} className="text-accent" />
          <p className="max-w-sm text-sm text-muted-foreground">
            No practice data yet. Take a full exam, work through Tutor Mode, or
            review some flashcards — your accuracy trends and weak areas will
            show up here.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/exam/exam-1">
              <Button size="sm">Start an Exam</Button>
            </Link>
            <Link href="/tutor/exam-1/exam-1-chem-phys">
              <Button size="sm" variant="secondary">
                Try Tutor Mode
              </Button>
            </Link>
          </div>
        </Card>
      )}

      {/* KPI tiles */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatTile
          icon={<Target size={16} strokeWidth={1.5} />}
          label="Best Score"
          value={best !== null ? String(best) : "—"}
          hint={best !== null ? "Estimated" : "No exams yet"}
        />
        <StatTile
          icon={<TrendingUp size={16} strokeWidth={1.5} />}
          label="Latest Score"
          value={latest !== null ? String(latest) : "—"}
          hint={latest !== null ? "Estimated" : "No exams yet"}
        />
        <StatTile
          icon={<GraduationCap size={16} strokeWidth={1.5} />}
          label="Questions"
          value={String(questionsAnswered)}
          hint="answered"
        />
        <StatTile
          icon={<Layers size={16} strokeWidth={1.5} />}
          label="Flashcards Due"
          value={String(fc.dueToday)}
          hint="today"
        />
      </div>

      {/* Score over time */}
      <section className="flex flex-col gap-3">
        <SectionHeading>Score over time</SectionHeading>
        <Card className="p-6">
          {history.length >= 2 ? (
            <ScoreLineChart history={history} />
          ) : (
            <EmptyHint>
              {history.length === 1
                ? "Complete another full exam to see your score trend."
                : "Complete a full exam to start tracking your total score (472–528)."}
            </EmptyHint>
          )}
        </Card>
      </section>

      {/* Accuracy by section */}
      <section className="flex flex-col gap-3">
        <SectionHeading>Tutor accuracy by section</SectionHeading>
        <Card className="p-6">
          {tutorAnswered > 0 ? (
            <div className="flex flex-col gap-3">
              {sectionAccuracy.map((g) => (
                <AccuracyBar key={g.key} group={g} />
              ))}
            </div>
          ) : (
            <EmptyHint>
              Answer questions in Tutor Mode to see per-section accuracy.
            </EmptyHint>
          )}
        </Card>
      </section>

      {/* Accuracy by foundational concept */}
      {conceptAccuracy.length > 0 && (
        <section className="flex flex-col gap-3">
          <SectionHeading>Accuracy by foundational concept</SectionHeading>
          <Card className="p-6">
            <div className="flex flex-col gap-3">
              {conceptAccuracy.map((g) => (
                <AccuracyBar
                  key={g.key}
                  group={g}
                  weak={weakAreas.some((w) => w.key === g.key)}
                />
              ))}
            </div>
          </Card>
        </section>
      )}

      {/* Weak-area callout */}
      {weakAreas.length > 0 && (
        <Card highlighted className="flex flex-col gap-3 p-6">
          <div className="flex items-center gap-2">
            <Target size={16} strokeWidth={1.5} className="text-accent" />
            <h2 className="font-display text-sm font-semibold text-foreground">
              Focus areas
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Your lowest-accuracy topics so far. Drilling these in Tutor Mode or
            the lessons will move your score the most.
          </p>
          <div className="flex flex-wrap gap-2">
            {weakAreas.map((w) => (
              <Badge key={w.key} tone="danger">
                {w.label} · {w.pct}%
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/learn">
              <Button size="sm" variant="secondary">
                <BookOpen size={14} strokeWidth={1.5} /> Review lessons
              </Button>
            </Link>
          </div>
        </Card>
      )}

      {/* Flashcards summary */}
      <section className="flex flex-col gap-3">
        <SectionHeading>Flashcards</SectionHeading>
        <Card className="flex flex-col gap-4 p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <MiniStat label="Due now" value={fc.due} tone="accent" />
            <MiniStat label="New" value={fc.unseen} tone="muted" />
            <MiniStat label="Learning" value={fc.learning} tone="muted" />
            <MiniStat label="Mature" value={fc.mature} tone="success" />
          </div>
          <div>
            <Link href="/flashcards">
              <Button size="sm" variant="secondary">
                <Layers size={14} strokeWidth={1.5} /> Review flashcards
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      <div className="pt-2">
        <Link href="/">
          <Button variant="ghost">← Back to home</Button>
        </Link>
      </div>
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

function EmptyHint({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

function StatTile({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <Card className="flex flex-col gap-1 p-4">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        {icon}
        <span className="font-mono text-[10px] uppercase tracking-wide">
          {label}
        </span>
      </div>
      <span className="font-display text-2xl font-semibold tabular-nums text-foreground">
        {value}
      </span>
      <span className="text-xs text-muted-foreground">{hint}</span>
    </Card>
  );
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "accent" | "success" | "muted";
}) {
  return (
    <div className="rounded-lg border border-border p-3 text-center">
      <p
        className={clsx(
          "font-display text-xl font-semibold tabular-nums",
          tone === "accent" && "text-accent",
          tone === "success" && "text-success",
          tone === "muted" && "text-foreground",
        )}
      >
        {value}
      </p>
      <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

/** Color a percentage by performance band — always paired with the numeric label (never color-only). */
function pctColor(pct: number): string {
  if (pct >= 75) return "var(--success)";
  if (pct >= 50) return "var(--accent)";
  return "var(--danger)";
}

function AccuracyBar({ group, weak }: { group: GroupAccuracy; weak?: boolean }) {
  const pct = group.pct;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span
          className={clsx(
            "truncate",
            weak ? "font-medium text-danger" : "text-foreground",
          )}
        >
          {group.label}
        </span>
        <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
          {pct === null ? "—" : `${pct}%`}
          <span className="ml-1 opacity-60">({group.answered})</span>
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-muted"
        role="meter"
        aria-valuenow={pct ?? 0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${group.label} accuracy ${pct === null ? "not attempted" : `${pct} percent`}`}
      >
        {pct !== null && (
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, background: pctColor(pct) }}
          />
        )}
      </div>
    </div>
  );
}

function ScoreLineChart({ history }: { history: ScorePoint[] }) {
  const W = 640;
  const H = 200;
  const padX = 40;
  const padY = 24;
  const min = 472;
  const max = 528;
  const n = history.length;

  const x = (i: number) =>
    padX + (i / Math.max(1, n - 1)) * (W - padX * 2);
  const y = (score: number) =>
    padY + (1 - (score - min) / (max - min)) * (H - padY * 2);

  const points = history.map((h, i) => `${x(i)},${y(h.total)}`).join(" ");
  const gridScores = [472, 500, 528];

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full min-w-[420px]"
        role="img"
        aria-label={`Total scaled score over ${n} exams, latest ${history[n - 1].total}`}
      >
        {gridScores.map((s) => (
          <g key={s}>
            <line
              x1={padX}
              x2={W - padX}
              y1={y(s)}
              y2={y(s)}
              stroke="var(--border)"
              strokeWidth={1}
            />
            <text
              x={padX - 8}
              y={y(s) + 4}
              textAnchor="end"
              className="fill-[var(--muted-foreground)] font-mono text-[10px]"
            >
              {s}
            </text>
          </g>
        ))}
        <polyline
          points={points}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {history.map((h, i) => (
          <circle
            key={h.attemptId}
            cx={x(i)}
            cy={y(h.total)}
            r={3.5}
            fill="var(--accent)"
          />
        ))}
        <text
          x={x(n - 1)}
          y={y(history[n - 1].total) - 10}
          textAnchor="end"
          className="fill-[var(--foreground)] font-mono text-[11px] font-semibold"
        >
          {history[n - 1].total}
        </text>
      </svg>
    </div>
  );
}
