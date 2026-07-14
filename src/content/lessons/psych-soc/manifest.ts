import type { ComponentType } from "react";
import type { FoundationalConcept, LessonTopic } from "@/lib/types";

export const foundationalConcepts: FoundationalConcept[] = [
  {
    id: "fc6",
    sectionKey: "psych-soc",
    number: 6,
    title: "Behavior and the Nervous System",
    description:
      "How the nervous system produces sensation and perception, and how organisms learn and remember through experience.",
    topicIds: [
      "fc6-sensation-perception-nervous-system",
      "fc6-learning-memory",
    ],
  },
  {
    id: "fc7",
    sectionKey: "psych-soc",
    number: 7,
    title: "Individual Influences on Behavior",
    description:
      "How personality, motivation, emotion, and psychological disorders shape individual behavior.",
    topicIds: ["fc7-personality-motivation-emotion", "fc7-psychological-disorders"],
  },
  {
    id: "fc8",
    sectionKey: "psych-soc",
    number: 8,
    title: "Social Structures and Demographics",
    description:
      "How social structures, stratification, and demographic factors shape behavior and health outcomes at a population level.",
    topicIds: [
      "fc8-social-structures-stratification",
      "fc8-demographics-population-health",
    ],
  },
];

export const lessonTopics: LessonTopic[] = [
  {
    id: "fc6-sensation-perception-nervous-system",
    sectionKey: "psych-soc",
    foundationalConceptId: "fc6",
    slug: "sensation-perception-nervous-system",
    title: "Sensation, Perception & the Nervous System",
    summary:
      "How neurons transmit signals, and how sensory input is transformed into perception via thresholds and processing.",
    highYield: [
      "Action potentials are all-or-nothing; intensity is coded by firing FREQUENCY, not amplitude.",
      "Saltatory conduction (jumping between nodes of Ranvier on myelinated axons) speeds signal transmission.",
      "Absolute threshold = minimum stimulus detectable 50% of the time; difference threshold (JND) follows Weber's law.",
      "Sensation (raw detection) is distinct from perception (interpretation) — top-down processing shapes perception using prior expectation.",
    ],
    mdxPath: "psych-soc/fc6/sensation-perception-nervous-system.mdx",
    clinicalCorrelation: {
      title: "Why this matters: multiple sclerosis and demyelination",
      vignette:
        "In multiple sclerosis, the immune system attacks myelin in the central nervous system. Losing myelin disrupts saltatory conduction, so action potentials propagate much more slowly (or fail entirely) along affected axons.",
      tieIn:
        "This directly explains MS symptoms like sensory disturbances and weakness, and is a common way MCAT passages test whether you understand that myelin's role is to speed conduction, not to generate the action potential itself.",
    },
    expandable: true,
  },
  {
    id: "fc6-learning-memory",
    sectionKey: "psych-soc",
    foundationalConceptId: "fc6",
    slug: "learning-memory",
    title: "Learning & Memory",
    summary:
      "Classical and operant conditioning as models of learning, and the encoding-storage-retrieval model of memory.",
    highYield: [
      "Classical conditioning: a neutral stimulus (CS) paired with an unconditioned stimulus (US) comes to elicit a conditioned response (CR).",
      "Operant conditioning: behavior is shaped by reinforcement (increases behavior) or punishment (decreases behavior).",
      "Variable-ratio reinforcement schedules produce the highest, most extinction-resistant response rates.",
      "Memory has three stages: encoding, storage, retrieval; the serial position effect shows better recall for items at the start (primacy) and end (recency) of a list.",
    ],
    mdxPath: "psych-soc/fc6/learning-memory.mdx",
    clinicalCorrelation: {
      title: "Why this matters: conditioned taste aversion in chemotherapy",
      vignette:
        "Cancer patients who eat a novel food shortly before a nauseating chemotherapy infusion often develop a lasting aversion to that food — even though they know intellectually the food didn't cause the nausea — because taste-illness associations are biologically prepared to form rapidly and resist extinction.",
      tieIn:
        "Oncology teams sometimes have patients eat a deliberately unimportant 'scapegoat' food before treatment so any conditioned aversion attaches there instead of to a nutritionally important staple food — a real clinical use of classical-conditioning principles.",
    },
    expandable: true,
  },
  {
    id: "fc7-personality-motivation-emotion",
    sectionKey: "psych-soc",
    foundationalConceptId: "fc7",
    slug: "personality-motivation-emotion",
    title: "Personality, Motivation & Emotion",
    summary:
      "Major personality theories (trait, psychodynamic), theories of motivation, and competing theories of emotion.",
    highYield: [
      "The Big Five (OCEAN) trait model: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
      "Maslow's hierarchy of needs: physiological needs must be largely met before higher needs (esteem, self-actualization) motivate behavior.",
      "James-Lange theory: physiological arousal → emotion (body first). Cannon-Bard: arousal and emotion occur simultaneously, independently.",
      "Schachter-Singer two-factor theory: emotion = physiological arousal + cognitive labeling of that arousal based on context.",
    ],
    mdxPath: "psych-soc/fc7/personality-motivation-emotion.mdx",
    clinicalCorrelation: {
      title: "Why this matters: misattribution of arousal in panic disorder",
      vignette:
        "A patient with panic disorder experiences a racing heart (e.g., from caffeine or mild exertion) and cognitively labels that arousal as an impending panic attack, which itself increases anxiety and physiological arousal further — a vicious cycle.",
      tieIn:
        "This is a clinical illustration of the Schachter-Singer two-factor theory: the same physiological arousal can be labeled very differently (excitement vs. panic) depending on cognitive appraisal — a concept cognitive-behavioral therapy for panic disorder directly targets.",
    },
    expandable: true,
  },
  {
    id: "fc7-psychological-disorders",
    sectionKey: "psych-soc",
    foundationalConceptId: "fc7",
    slug: "psychological-disorders",
    title: "Psychological Disorders",
    summary:
      "Major categories of psychological disorders (mood, anxiety, psychotic, personality) and the biopsychosocial model of their causes.",
    highYield: [
      "The biopsychosocial model explains disorders via interacting biological, psychological, and social factors — rarely one cause alone.",
      "Major depressive disorder requires ≥2 weeks of depressed mood/anhedonia plus associated symptoms impairing function.",
      "Schizophrenia's positive symptoms (hallucinations, delusions) reflect excess/distorted function; negative symptoms (flat affect, avolition) reflect diminished function.",
      "The diathesis-stress model: a predisposition (diathesis) plus a triggering stressor together produce a disorder.",
    ],
    mdxPath: "psych-soc/fc7/psychological-disorders.mdx",
    clinicalCorrelation: {
      title: "Why this matters: the dopamine hypothesis of schizophrenia",
      vignette:
        "Antipsychotic medications that block D2 dopamine receptors reduce positive symptoms of schizophrenia (hallucinations, delusions), which is part of the evidence behind the dopamine hypothesis — that excess dopaminergic activity in certain brain pathways contributes to psychotic symptoms.",
      tieIn:
        "This is a direct biological component of the biopsychosocial model in this lesson: a disorder with real psychosocial dimensions still has a testable, treatable neurochemical basis, and MCAT passages often ask you to reason about a drug's mechanism relative to a disorder's proposed biology.",
    },
    expandable: true,
  },
  {
    id: "fc8-social-structures-stratification",
    sectionKey: "psych-soc",
    foundationalConceptId: "fc8",
    slug: "social-structures-stratification",
    title: "Social Structures & Stratification",
    summary:
      "How societies organize into groups and hierarchies, and the major sociological perspectives on why stratification persists.",
    highYield: [
      "Functionalism: social structures exist because they serve a stabilizing function for society.",
      "Conflict theory: social structures persist because they serve the interests of a dominant group at others' expense.",
      "Symbolic interactionism: society is built from everyday, small-scale interactions and the shared meanings people construct.",
      "Social stratification = a society's division into hierarchical layers (class, status) with unequal access to resources.",
    ],
    mdxPath: "psych-soc/fc8/social-structures-stratification.mdx",
    clinicalCorrelation: {
      title: "Why this matters: how stratification shapes access to care",
      vignette:
        "Patients in lower socioeconomic strata often face compounding structural barriers to care — transportation, insurance, work schedules that penalize missed shifts — independent of any individual health behavior.",
      tieIn:
        "Recognizing stratification as a structural, not purely individual, phenomenon is central to the social-determinants-of-health framework the MCAT increasingly tests, and connects directly to the income-hypertension studies common in psych/soc passages.",
    },
    expandable: true,
  },
  {
    id: "fc8-demographics-population-health",
    sectionKey: "psych-soc",
    foundationalConceptId: "fc8",
    slug: "demographics-population-health",
    title: "Demographics & Population Health",
    summary:
      "Key demographic measures (incidence, prevalence, life expectancy) and how social gradients produce disparities in population health.",
    highYield: [
      "Incidence = new cases over a time period; prevalence = total existing cases at a point in time.",
      "A disease can have high prevalence but low incidence if it's chronic and rarely fatal (e.g., a well-managed condition).",
      "The social gradient in health: health outcomes improve stepwise with each increase in socioeconomic status, not just at poverty's extreme.",
      "Social causation (low SES → poor health) and social selection/drift (poor health → low SES) are competing, non-exclusive explanations for the SES-health correlation.",
    ],
    mdxPath: "psych-soc/fc8/demographics-population-health.mdx",
    clinicalCorrelation: {
      title: "Why this matters: distinguishing social causation from health selection",
      vignette:
        "A researcher observes that hypertension prevalence falls in a stepwise pattern across income quartiles, even after adjusting for education. This could reflect low income causing worse health (chronic stress, allostatic load) — social causation — or poor health limiting earning capacity over time — social selection/drift.",
      tieIn:
        "Real health-policy decisions hinge on distinguishing these mechanisms, and MCAT CARS-adjacent psych/soc passages frequently present exactly this kind of correlational data and ask you to evaluate which causal story it does or doesn't support.",
    },
    expandable: true,
  },
];

export const mdxRegistry: Record<string, ComponentType> = {};
