import type { SectionContent } from "@/lib/types";

/**
 * FIXTURE CONTENT — placeholder questions used to build/test the exam engine
 * before the full starter-exam authoring pass. Replaced with the full
 * ~12-question psych-soc set in that pass; do not treat as final content.
 */
const psychSocContent: SectionContent = {
  sectionId: "psych-soc",
  passages: [
    {
      id: "ps-p1",
      sectionId: "psych-soc",
      order: 0,
      kind: "passage",
      title: "Conditioned Taste Aversion in Clinical Chemotherapy Patients",
      bodyMarkdown: `Conditioned taste aversion (CTA) is a form of associative learning in which an organism comes to avoid a taste after that taste is paired, even a single time, with subsequent nausea — regardless of the true cause of the nausea. CTA is notable among learned associations for how easily it forms across a long delay between the conditioned stimulus (the taste) and the unconditioned stimulus (the illness), and for how resistant it is to extinction.

Oncology researchers observed an unintended clinical instance of CTA: patients who ate a distinctively flavored food shortly before receiving chemotherapy infusions often developed a strong, lasting aversion to that food, even though they understood intellectually that the food itself had not caused their nausea. Clinicians began recommending that patients eat a "scapegoat" food — a novel, unimportant item — before treatment sessions, so that any conditioned aversion would attach to that expendable food rather than to a nutritionally important staple in the patient's regular diet.`,
      questionIds: ["ps-q1", "ps-q2"],
    },
  ],
  questions: [
    {
      id: "ps-q1",
      passageId: "ps-p1",
      sectionId: "psych-soc",
      order: 0,
      stem: "In the scapegoat-food strategy described in the passage, the novel food functions as the:",
      choices: [
        { id: "A", text: "Unconditioned stimulus", explanation: "The unconditioned stimulus is the chemotherapy-induced nausea itself, which produces a reaction (illness) without any prior learning." },
        { id: "B", text: "Unconditioned response", explanation: "The unconditioned response is the nausea reaction itself, not the food — responses are what the organism does, not the stimulus it encounters." },
        { id: "C", text: "Conditioned stimulus", explanation: "Correct. The novel food is a previously neutral stimulus that, once paired with nausea, comes to elicit an aversion response on its own — the definition of a conditioned stimulus." },
        { id: "D", text: "Conditioned response", explanation: "The conditioned response is the aversion/avoidance behavior the food comes to elicit, not the food itself." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "In classical conditioning terms: the chemotherapy drug produces nausea directly and unconditionally (unconditioned stimulus → unconditioned response). The food, initially neutral, is paired with that nausea and comes to elicit an aversion response on its own — making it the conditioned stimulus, and the resulting learned aversion the conditioned response.",
      walkthrough: {
        approachNotes:
          "Any classical-conditioning question can be solved by sorting the passage's concrete details into the four-term framework: US (naturally causes a response), UR (the natural response), CS (a neutral stimulus paired with the US), CR (the learned response to the CS). Do this sorting before looking at answer choices.",
        steps: [
          "Identify what naturally, unconditionally causes nausea: the chemotherapy drug — this is the unconditioned stimulus (US).",
          "Identify the natural nausea reaction itself: the unconditioned response (UR).",
          "Identify the previously neutral stimulus that gets paired with the US: the food — this is the conditioned stimulus (CS).",
          "Identify the learned reaction to that food after pairing: the aversion — the conditioned response (CR).",
          "Match the question's target ('the novel food') to CS.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q2",
      passageId: "ps-p1",
      sectionId: "psych-soc",
      order: 1,
      stem: "The passage notes that CTA forms readily across a long delay between taste and illness, and is unusually resistant to extinction. This combination of features is best explained by which concept?",
      choices: [
        { id: "A", text: "Stimulus generalization", explanation: "Stimulus generalization describes responding to stimuli similar to the CS, not the readiness of learning across a delay or resistance to extinction." },
        { id: "B", text: "Biological preparedness", explanation: "Correct. Biological preparedness holds that organisms are evolutionarily predisposed to form certain associations (like taste–illness) rapidly and durably, because such learning historically had high survival value, even when the stimuli are separated by a long delay." },
        { id: "C", text: "Spontaneous recovery", explanation: "Spontaneous recovery refers to the reappearance of an extinguished response after a rest period, not to how readily an association initially forms or resists extinction." },
        { id: "D", text: "Higher-order conditioning", explanation: "Higher-order conditioning describes a new neutral stimulus becoming associated with an already-established CS, which isn't what the passage is describing here." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Biological preparedness explains exactly this pattern: because associating a taste with subsequent illness was adaptively important for avoiding poisoned food throughout evolutionary history, organisms are 'prepared' to learn taste–illness associations unusually quickly, across unusually long delays, and to retain them unusually strongly — distinguishing CTA from ordinary classical conditioning, which typically requires close temporal pairing and extinguishes more readily.",
      walkthrough: {
        approachNotes:
          "When a passage highlights that a learned association is unusually fast-forming, delay-tolerant, or extinction-resistant compared to 'ordinary' conditioning, that is almost always pointing at biological/evolutionary preparedness rather than a generic conditioning term.",
        steps: [
          "Note the two unusual features flagged by the passage: long-delay learning and extinction resistance.",
          "Recall that standard classical conditioning normally needs close temporal pairing and extinguishes with repeated unpaired exposure — so these features are exceptions needing explanation.",
          "Recall biological preparedness: evolution predisposes organisms toward certain adaptive associations (taste-aversion learning being the classic textbook example), explaining both unusual features at once.",
          "Eliminate stimulus generalization, spontaneous recovery, and higher-order conditioning, since none address rapid formation across a delay or resistance to extinction specifically.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "medium",
    },
  ],
};

export default psychSocContent;
