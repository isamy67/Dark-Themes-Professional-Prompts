import { getExam, getQuestionsForSection } from "@/lib/content";
import { scoreSections, type SectionRawScore } from "@/lib/scoring";
import type { ExamAttempt, ExamResult, SectionKey, SectionScore } from "@/lib/types";

/** Composes an attempt's answers with content + scoring into a persistable ExamResult. */
export function buildExamResult(attempt: ExamAttempt, voided: boolean): ExamResult {
  const exam = getExam(attempt.examId);

  const rawSections: (SectionRawScore & { sectionId: string })[] =
    attempt.sections.map((sectionAttempt) => {
      const config = exam.sections.find(
        (s) => s.id === sectionAttempt.sectionId,
      );
      if (!config) {
        throw new Error(
          `Attempt references unknown section id "${sectionAttempt.sectionId}"`,
        );
      }
      const questions = getQuestionsForSection(config.contentModuleId);
      const correctCount = questions.filter(
        (q) => sectionAttempt.answers[q.id]?.choiceId === q.correctChoiceId,
      ).length;
      return {
        sectionId: config.id,
        sectionKey: config.key,
        correctCount,
        totalCount: questions.length,
      };
    });

  const { sections: scoredSections, totalScaledScore } =
    scoreSections(rawSections);

  const sectionScores: SectionScore[] = scoredSections.map((s, i) => ({
    sectionId: rawSections[i].sectionId,
    sectionKey: s.sectionKey as SectionKey,
    correctCount: s.correctCount,
    totalCount: s.totalCount,
    scaledScore: s.scaledScore,
  }));

  return {
    attemptId: attempt.id,
    examId: attempt.examId,
    mode: attempt.mode,
    completedAt: new Date().toISOString(),
    voided,
    sectionScores,
    totalScaledScore: voided ? undefined : totalScaledScore,
  };
}
