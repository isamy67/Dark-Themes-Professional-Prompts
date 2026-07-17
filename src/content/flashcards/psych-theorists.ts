import type { FlashcardDeck } from "@/lib/types";

/**
 * Psych/Soc deck: major theories and the theorists behind them (FC7,
 * psych-soc). Original content.
 */
export const psychTheoristsDeck: FlashcardDeck = {
  id: "psych-theorists",
  title: "Psychology Theories & Theorists",
  description:
    "Match the major psychologists and sociologists to their signature theories.",
  sectionKey: "psych-soc",
  foundationalConcept: "fc7",
  cards: [
    {
      id: "pt-maslow",
      deckId: "psych-theorists",
      front:
        "Whose theory arranges needs in a pyramid from physiological up to self-actualization?",
      back: "Abraham Maslow's hierarchy of needs. Lower needs (physiological, safety) must be reasonably met before higher needs (love/belonging, esteem, self-actualization) strongly motivate behavior.",
      hint: "It's a pyramid.",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-piaget",
      deckId: "psych-theorists",
      front:
        "Who proposed the four-stage theory of cognitive development (sensorimotor → preoperational → concrete operational → formal operational)?",
      back: "Jean Piaget. Object permanence develops in the sensorimotor stage; abstract reasoning appears in the formal operational stage.",
      hint: "Object permanence and conservation are his ideas.",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-erikson",
      deckId: "psych-theorists",
      front:
        "Whose theory describes eight psychosocial stages, each with a central conflict (e.g., trust vs. mistrust)?",
      back: "Erik Erikson. His stages span the whole lifespan; adolescence centers on identity vs. role confusion.",
      hint: "Identity vs. role confusion is one stage.",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-pavlov",
      deckId: "psych-theorists",
      front:
        "Who demonstrated classical conditioning, and what was the classic example?",
      back: "Ivan Pavlov. Dogs learned to salivate to a bell (conditioned stimulus) after it was repeatedly paired with food (unconditioned stimulus).",
      hint: "Bell and salivating dogs.",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-skinner",
      deckId: "psych-theorists",
      front:
        "Who developed operant conditioning, shaping behavior through reinforcement and punishment?",
      back: "B. F. Skinner. Behavior followed by reinforcement becomes more frequent; behavior followed by punishment becomes less frequent. He also described schedules of reinforcement.",
      hint: "Think the 'Skinner box.'",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-bigfive",
      deckId: "psych-theorists",
      front:
        "Name the five trait dimensions of the Big Five (Five-Factor) model of personality.",
      back: "Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (mnemonic: OCEAN). It's the most empirically supported trait model.",
      hint: "OCEAN.",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-freud-structure",
      deckId: "psych-theorists",
      front:
        "In Freud's structural model, what are the roles of the id, ego, and superego?",
      back: "The id seeks immediate gratification (pleasure principle); the superego holds internalized morals/ideals; the ego mediates between them and reality (reality principle).",
      hint: "Impulse, morality, and the mediator.",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-festinger",
      deckId: "psych-theorists",
      front:
        "Who described the discomfort of holding conflicting attitudes/behaviors, motivating attitude change?",
      back: "Leon Festinger — cognitive dissonance theory. People reduce dissonance by changing an attitude, adding consonant cognitions, or minimizing the conflict.",
      hint: "The term is 'cognitive dissonance.'",
      foundationalConcept: "fc7",
    },
    {
      id: "pt-kohlberg",
      deckId: "psych-theorists",
      front:
        "Whose theory describes moral development in preconventional, conventional, and postconventional levels?",
      back: "Lawrence Kohlberg. Preconventional morality is based on rewards/punishments; conventional on social approval and law; postconventional on abstract ethical principles.",
      hint: "Studied moral reasoning with dilemmas (e.g., the Heinz dilemma).",
      foundationalConcept: "fc7",
    },
  ],
};
