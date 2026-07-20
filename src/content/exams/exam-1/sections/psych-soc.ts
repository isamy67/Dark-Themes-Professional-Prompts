import type { SectionContent } from "@/lib/types";

/**
 * Full starter-exam psych/soc content: three passages (conditioned taste
 * aversion, a conformity/social-influence study, and a socioeconomic
 * status/health sociology study) plus three discrete standalone questions,
 * totaling 12 questions across FC6, FC7, and FC8.
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
    {
      id: "ps-p2",
      sectionId: "psych-soc",
      order: 1,
      kind: "passage",
      title: "Group Size and Unanimity in a Modified Line-Judgment Conformity Task",
      bodyMarkdown: `Social psychologists have long studied why individuals conform to group judgments even when those judgments are objectively incorrect. In a modified line-judgment task, a single naive participant was seated among a varying number of confederates (1, 2, 4, 8, or 16) who had been instructed to unanimously select the wrong comparison line on 12 of 18 trials. The percentage of trials on which the participant conformed to the incorrect majority answer was recorded for each group-size condition:

Group size 1: 3% conformity. Group size 2: 13%. Group size 4: 30%. Group size 8: 32%. Group size 16: 31%.

In a separate condition using 8 confederates, one confederate was instructed to break unanimity by giving the correct answer on every trial. Conformity in this "dissenter" condition fell to 5%, even though the majority (7 of 8 confederates) still gave the incorrect answer.

Post-experiment interviews revealed that some participants who conformed reported genuinely coming to doubt their own perception of the lines, while others reported privately remaining confident in the correct answer but not wanting to be the lone dissenting voice within the group.`,
      questionIds: ["ps-q3", "ps-q4", "ps-q5", "ps-q6"],
    },
    {
      id: "ps-p3",
      sectionId: "psych-soc",
      order: 2,
      kind: "passage",
      title: "Household Income and Hypertension Prevalence in a Community Health Survey",
      bodyMarkdown: `A public health team surveyed 4,000 adults across four household-income quartiles (Q1 = lowest income, Q4 = highest) and recorded the prevalence of diagnosed hypertension in each quartile: 38% in Q1, 29% in Q2, 21% in Q3, and 14% in Q4. This stepwise decline in disease prevalence with rising income persisted, though it was somewhat attenuated, after the researchers statistically controlled for participants' years of formal education, a variable known to correlate with both income and health-related behaviors.

The researchers proposed that chronic exposure to financial strain increases "allostatic load" — the cumulative physiological wear produced by repeated activation of the body's stress-response systems — thereby elevating hypertension risk through a biological pathway independent of health-insurance status or access to care. They contrasted this explanation, in which low socioeconomic status (SES) is a cause of poor health, with an alternative explanation sometimes raised in the sociological literature: that pre-existing poor health causes individuals to drift into lower income brackets by limiting their employment opportunities and earning capacity over time.`,
      questionIds: ["ps-q7", "ps-q8", "ps-q9"],
    },
    {
      id: "ps-p4",
      sectionId: "psych-soc",
      order: 3,
      kind: "passage",
      title: "Observer Sensitivity and Response Bias in a Mammography Screening Study",
      bodyMarkdown: `Signal detection theory (SDT) models how observers distinguish a genuine signal from background noise under uncertainty, and separates two components of performance: sensitivity (the observer's ability to discriminate signal from noise, often denoted d') and response criterion (the observer's tendency to say "signal present" versus "signal absent" when uncertain, sometimes described as liberal or conservative). Four outcomes are possible on any trial: a hit (correctly identifying a true signal), a miss (failing to detect a true signal), a false alarm (reporting a signal that was not present), and a correct rejection (correctly identifying the absence of a signal).

Researchers studied radiologists reading mammograms for signs of breast cancer under two manipulations. In the first, radiologists read films either early in a shift (rested) or after several consecutive hours of uninterrupted reading (fatigued), with identical standard instructions in both conditions:

Rested: hit rate 88%, false-alarm rate 10%.
Fatigued: hit rate 76%, false-alarm rate 9%.

In the second manipulation, rested radiologists read an equivalent film set under two different instruction sets. One group was told, "Above all, do not miss a cancer"; the other was told, "Above all, avoid unnecessary biopsies."

"Do not miss a cancer" instructions: hit rate 95%, false-alarm rate 22%.
"Avoid unnecessary biopsies" instructions: hit rate 80%, false-alarm rate 4%.`,
      questionIds: ["ps-q13", "ps-q14", "ps-q15", "ps-q16", "ps-q17"],
    },
    {
      id: "ps-p5",
      sectionId: "psych-soc",
      order: 4,
      kind: "passage",
      title: "Cortisol Response Patterns Across Phases of Chronic Occupational Stress",
      bodyMarkdown: `Hans Selye's general adaptation syndrome (GAS) describes the body's response to prolonged stressors as unfolding across three phases: an alarm reaction, in which the sympathetic nervous system and the hypothalamic-pituitary-adrenal (HPA) axis are rapidly activated; a resistance phase, in which the body maintains elevated but more sustainable physiological arousal while continuing to cope with the stressor; and an exhaustion phase, in which prolonged demand on stress-response systems depletes physiological resources and impairs functioning, including immune function.

Occupational health researchers tracked salivary cortisol levels and a composite immune-function marker in workers newly assigned to a high-demand manufacturing role, with repeated measures over two years:

Baseline (before role change): cortisol 12 micrograms/dL; immune marker normal.
3 months: cortisol 22 micrograms/dL; immune marker normal; workers reported feeling "on edge" and hypervigilant.
12 months: cortisol 15 micrograms/dL; immune marker normal; workers reported having "gotten used to" the pace of the role.
24 months: cortisol 8 micrograms/dL; immune marker declined 30% below baseline; workers reported chronic fatigue and had more than double the rate of upper-respiratory infections compared to baseline.

The HPA axis pathway begins when the hypothalamus releases corticotropin-releasing hormone (CRH), which stimulates the anterior pituitary to release adrenocorticotropic hormone (ACTH), which in turn stimulates the adrenal cortex to release cortisol. This is distinct from the faster sympathetic pathway, in which the adrenal medulla releases epinephrine directly into the bloodstream.`,
      questionIds: ["ps-q18", "ps-q19", "ps-q20", "ps-q21", "ps-q22"],
    },
    {
      id: "ps-p6",
      sectionId: "psych-soc",
      order: 5,
      kind: "passage",
      title: "Anchoring and the Availability Heuristic in Probability Estimation Tasks",
      bodyMarkdown: `Heuristics are mental shortcuts that allow rapid judgments under uncertainty but can systematically bias estimates away from statistically correct answers. In an anchoring study, participants first spun a wheel rigged to stop on either a low number (10) or a high number (65), were asked whether the true percentage of United Nations member countries located in Africa was higher or lower than that number, and then gave their own best estimate. The true figure is approximately 28%.

Low-anchor group (wheel stopped on 10): mean estimate = 25%.
High-anchor group (wheel stopped on 65): mean estimate = 45%.
A third group was warned in advance that the wheel number was random and irrelevant, and was offered a small cash prize for accuracy: low-anchor-warned mean estimate = 30%; high-anchor-warned mean estimate = 38%.

In a separate study, one group of participants read a week of news coverage heavily featuring a fatal shark attack, while a control group read unrelated news. Both groups then rated the relative annual risk of dying from a shark attack versus from heart disease. Despite the true lifetime risk of heart disease being tens of thousands of times greater than the risk of a fatal shark attack, the shark-coverage group rated shark attack as a comparably or more urgent risk, while the control group correctly rated heart disease as the far greater risk.`,
      questionIds: ["ps-q23", "ps-q24", "ps-q25", "ps-q26", "ps-q27"],
    },
    {
      id: "ps-p7",
      sectionId: "psych-soc",
      order: 6,
      kind: "passage",
      title: "REM Sleep Deprivation and Subsequent Sleep Architecture in a Laboratory Study",
      bodyMarkdown: `Sleep researchers monitored participants overnight using electroencephalography (EEG) across three separate nights: a baseline night of undisturbed sleep, a REM-deprivation night on which researchers woke each participant briefly at the onset of every REM period (while allowing normal amounts of non-REM sleep), and a subsequent recovery night of undisturbed sleep. The percentage of total sleep time spent in each stage was recorded:

Baseline night: Stage 1 (5%), Stage 2 (50%), slow-wave sleep (20%), REM (25%).
REM-deprivation night: Stage 1 (7%), Stage 2 (54%), slow-wave sleep (24%), REM (5%; only brief fragments before each awakening).
Recovery night: Stage 1 (4%), Stage 2 (41%), slow-wave sleep (20%), REM (35%).

The next morning after each night, participants completed a novel motor-sequence learning task. Performance (percent improvement in speed and accuracy relative to initial trials) was substantially worse following the REM-deprivation night than following the baseline or recovery nights.

EEG recordings during REM show fast, low-amplitude, desynchronized activity resembling wakefulness, while slow-wave sleep is characterized by high-amplitude, synchronized delta waves. The timing of the overall sleep-wake cycle is governed primarily by the suprachiasmatic nucleus (SCN) of the hypothalamus, which regulates melatonin release in response to light exposure.`,
      questionIds: ["ps-q28", "ps-q29", "ps-q30", "ps-q31", "ps-q32"],
    },
    {
      id: "ps-p8",
      sectionId: "psych-soc",
      order: 7,
      kind: "passage",
      title: "Extrinsic Rewards and Intrinsic Motivation in a Children's Drawing Task",
      bodyMarkdown: `Children at a preschool who regularly chose to draw with markers during free-play time, indicating high baseline intrinsic motivation for the activity, were randomly assigned to one of three conditions during a single observed drawing session:

Expected-reward group: told beforehand that they would receive a "Good Player Award" certificate for drawing.
Unexpected-reward group: not told anything beforehand, but given the same certificate afterward as a surprise.
No-reward group: given no certificate and no mention of one.

Two weeks later, observers unobtrusively recorded how many minutes each child spent drawing with markers during a free-play period in which markers were simply one of several available activities and no reward was mentioned:

Expected-reward group: 8 minutes.
Unexpected-reward group: 16 minutes.
No-reward group: 17 minutes.

Self-determination theory holds that intrinsic motivation is supported by the satisfaction of three basic psychological needs: autonomy (a sense of choice and self-direction), competence (a sense of effectiveness), and relatedness (a sense of connection to others). The researchers interpreted the expected-reward group's later drop in free-play drawing time as evidence that anticipating an external reward for an already-enjoyable activity can undermine a person's sense that they are engaging in the activity by their own choice.`,
      questionIds: ["ps-q33", "ps-q34", "ps-q35", "ps-q36", "ps-q37"],
    },
    {
      id: "ps-p9",
      sectionId: "psych-soc",
      order: 8,
      kind: "passage",
      title: "Concordance Rates for Schizophrenia in Twin and Adoption Studies",
      bodyMarkdown: `Behavioral geneticists compiled concordance rates (the percentage of twin pairs in which both members are affected, given that one is affected) for schizophrenia across several study designs:

Monozygotic (MZ) twins raised together: 48% concordance.
Monozygotic (MZ) twins raised apart from infancy: 46% concordance.
Dizygotic (DZ) twins raised together: 17% concordance.

A separate adoption study examined children born to biological mothers with schizophrenia but adopted at birth into homes with non-schizophrenic adoptive parents, compared to adopted children born to biological mothers without schizophrenia and placed in comparable adoptive homes:

Adopted-away offspring of biological mothers with schizophrenia: 13% later developed schizophrenia.
Adopted-away offspring of biological mothers without schizophrenia: 2% later developed schizophrenia.

Researchers interpret this overall pattern using a diathesis-stress model, in which a genetically transmitted predisposition (diathesis) increases vulnerability to schizophrenia but typically requires an environmental trigger, such as a significant psychosocial stressor, for the disorder to actually manifest. Clinically, schizophrenia symptoms are commonly divided into positive symptoms — hallucinations, delusions, and disorganized speech, which reflect an excess or distortion of normal functioning — and negative symptoms, such as flat affect, avolition, and social withdrawal, which reflect a diminution of normal functioning.`,
      questionIds: ["ps-q38", "ps-q39", "ps-q40", "ps-q41", "ps-q42"],
    },
    {
      id: "ps-p10",
      sectionId: "psych-soc",
      order: 9,
      kind: "passage",
      title: "Birth Rates, Death Rates, and Population Growth Across the Demographic Transition",
      bodyMarkdown: `The demographic transition model describes a historical pattern, first observed as agrarian societies industrialized, in which crude birth rates (CBR) and crude death rates (CDR, both measured per 1,000 people per year) shift in a characteristic sequence as a society develops economically. A sociology course presented population data illustrating four stages of the model:

Stage 1 (pre-industrial): CBR 35, CDR 33, annual growth approximately 0.2%.
Stage 2 (early industrial): CBR 34, CDR 15, annual growth approximately 1.9%.
Stage 3 (late industrial): CBR 18, CDR 9, annual growth approximately 0.9%.
Stage 4 (post-industrial): CBR 11, CDR 10, annual growth approximately 0.1%.

The instructor explained that the Stage 2 decline in death rate is generally attributed to improvements in sanitation, food supply, and basic medical care, which reduce mortality well before fertility norms change. The later Stage 3 decline in birth rate is generally attributed to a cluster of social changes accompanying urbanization and industrialization: increased access to education and employment for women, rising costs of raising children in urban settings, and wider availability of contraception, all of which reduce the economic and cultural incentives for large families. The instructor also noted that the model was derived from the historical experience of Western European and North American industrialization and cautioned that it may not perfectly predict the trajectory of every developing nation today, given differences in the pace of technology transfer and cultural context.`,
      questionIds: ["ps-q43", "ps-q44", "ps-q45", "ps-q46", "ps-q47"],
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
    {
      id: "ps-q3",
      passageId: "ps-p2",
      sectionId: "psych-soc",
      order: 2,
      stem: "Participants who reported after the experiment that they had genuinely come to doubt their own perception of the lines, rather than simply not wanting to stand out, were most likely influenced by:",
      choices: [
        { id: "A", text: "Normative social influence", explanation: "Normative social influence is driven by a desire for approval or fear of rejection, not by genuinely doubting one's own perception — this participant's stated reason points elsewhere." },
        { id: "B", text: "Informational social influence", explanation: "Correct. Informational social influence occurs when an ambiguous or uncertain situation leads a person to treat others' judgments as evidence about reality, producing genuine private belief change." },
        { id: "C", text: "Deindividuation", explanation: "Deindividuation refers to a loss of self-awareness and personal responsibility in crowds or anonymous groups, not to using peers as a source of information about an ambiguous stimulus." },
        { id: "D", text: "Obedience to authority", explanation: "Obedience involves complying with a direct order from a recognized authority figure; the confederates here were peers, not an authority issuing commands." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Informational social influence explains conformity that reflects genuine private belief change: when a task is ambiguous or a person becomes uncertain of their own judgment, they use others' responses as evidence about reality. This contrasts with normative social influence, which produces public compliance driven by a desire for approval rather than a real change in belief.",
      walkthrough: {
        approachNotes:
          "When a question describes why someone conformed, first classify whether the conformity is driven by wanting approval/avoiding rejection (normative) or by using others as evidence about an ambiguous reality (informational) — the participant's own reported reasoning is the key clue.",
        steps: [
          "Note the participant's stated reason: genuine doubt about their own perception, not fear of standing out.",
          "Recall that normative influence stems from a desire for social approval or avoidance of rejection — rule this out, since the participant isn't reporting fear of judgment.",
          "Recall that informational influence stems from using others' behavior as evidence when the correct answer is uncertain or one's own judgment is in doubt.",
          "Match the participant's genuine belief change to informational influence.",
          "Eliminate deindividuation and obedience, since neither describes using peers as an information source under uncertainty.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q4",
      passageId: "ps-p2",
      sectionId: "psych-soc",
      order: 3,
      stem: "Which of the following best characterizes the relationship between number of confederates and conformity rate shown in the data, and its implication for the study's model of social influence?",
      choices: [
        { id: "A", text: "Conformity increased linearly across all five group sizes, indicating each additional group member adds a constant increment of normative pressure", explanation: "The data are not linear across all five sizes — the rate rises steeply from group size 1 to 4 and then flattens, so a constant per-member increment is not supported." },
        { id: "B", text: "Conformity decreased steadily as group size increased, indicating diffusion of responsibility reduced pressure to conform", explanation: "The data show conformity increasing with group size, not decreasing, and diffusion of responsibility is a bystander-effect concept not tested by this design." },
        { id: "C", text: "Conformity rose sharply from group size 1 to 4 and then plateaued at larger group sizes, suggesting that beyond a threshold, additional group members provide diminishing increases in normative pressure", explanation: "Correct. The rate climbs from 3% to 30% across sizes 1-4 and then stays roughly flat (32%, 31%) at sizes 8 and 16, a classic plateau pattern." },
        { id: "D", text: "Conformity remained constant across all group sizes, indicating group size has no effect in this paradigm", explanation: "Conformity clearly varies, from 3% to roughly 30-32%, so group size does have a substantial effect over part of the range." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The data show a steep rise in conformity from a lone confederate up to four confederates, followed by a plateau at eight and sixteen confederates. This pattern indicates that normative pressure builds quickly with the first few additional group members but yields diminishing returns beyond a threshold group size — a classic finding in conformity research.",
      walkthrough: {
        approachNotes:
          "For data-interpretation questions, trace the actual numeric trend across conditions before evaluating each choice — look specifically for where the trend changes direction or levels off, since these passages frequently test recognition of plateau/ceiling effects rather than simple monotonic trends.",
        steps: [
          "List the conformity percentages in order of increasing group size: 3, 13, 30, 32, 31.",
          "Note the steep rise between group sizes 1 and 4, then the near-flat values from 4 through 16.",
          "Recognize this pattern as a plateau effect rather than a continued linear increase.",
          "Interpret the plateau as evidence that each additional group member beyond a certain size adds progressively less normative pressure.",
          "Eliminate choices describing a linear increase, steady decrease, or no effect, since none match the numeric pattern.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7A", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q5",
      passageId: "ps-p2",
      sectionId: "psych-soc",
      order: 4,
      stem: "The sharp drop in conformity observed when one confederate broke unanimity (5%) compared to the unanimous 8-confederate condition (32%) is best explained by which feature of normative social influence?",
      choices: [
        { id: "A", text: "The dissenting confederate reduced the total size of the group, weakening the effect described in the group-size data", explanation: "The total group size remained 8 confederates in both conditions, so the change was in unanimity, not numerosity." },
        { id: "B", text: "The dissenting confederate functioned as an authority figure whose disagreement outweighed the majority's judgment", explanation: "Nothing in the design establishes the dissenter as an authority figure — they were simply another peer confederate who broke unanimity." },
        { id: "C", text: "The dissenting confederate caused the participant to experience deindividuation, reducing self-monitoring", explanation: "Deindividuation concerns anonymity and loss of self-awareness in crowds; it does not describe the effect of a single dissenting peer on an individual's judgment." },
        { id: "D", text: "The dissenting confederate broke the group's unanimity, providing the participant social support and substantially reducing normative pressure even though the numerical majority remained incorrect", explanation: "Correct. Unanimity, not raw group size, is the critical driver of conformity pressure; a single ally sharply reduces the fear of standing alone against the group." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Classic conformity research shows that unanimity, rather than sheer numbers, is the key driver of normative pressure. A single dissenting confederate gives the participant social support and permission to disagree, so conformity drops sharply even though seven of eight confederates still give the incorrect answer.",
      walkthrough: {
        approachNotes:
          "When a manipulation involves breaking unanimity rather than changing group size, look specifically for 'social support' or 'unanimity' as the operative mechanism, since classic conformity findings show unanimity — not raw numbers — drives normative pressure most strongly.",
        steps: [
          "Compare the two conditions: 8 confederates unanimous versus 8 confederates with one dissenter.",
          "Note that total group size is unchanged in both conditions, ruling out a group-size explanation.",
          "Recall that unanimity is a critical determinant of conformity in this paradigm — any break in unanimity gives the participant an ally.",
          "Recognize that even one ally sharply reduces the participant's fear of standing alone against social disapproval.",
          "Select the choice attributing the drop to loss of unanimity/social support rather than authority or group size.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7A", skill: "concept application" },
      difficulty: "hard",
    },
    {
      id: "ps-q6",
      passageId: "ps-p2",
      sectionId: "psych-soc",
      order: 5,
      stem: "A participant conforms to the group's incorrect answer during the experiment but, when retested alone one week later, consistently gives the correct answer. This pattern is most consistent with:",
      choices: [
        { id: "A", text: "Public compliance without private acceptance", explanation: "Correct. The participant's behavior changed only while the group was present; the return to correct answers when alone shows the original conformity was a superficial, public change rather than a genuine shift in belief." },
        { id: "B", text: "Internalization of the group norm", explanation: "Internalization involves genuine private attitude change that would persist even without the group present, which contradicts the participant reverting to the correct answer once retested alone." },
        { id: "C", text: "Obedience", explanation: "Obedience requires a direct command from a recognized authority figure; this is a peer-group conformity paradigm with no such authority figure present." },
        { id: "D", text: "Cognitive dissonance reduction", explanation: "There is no indication the participant resolved an inconsistency between conflicting beliefs and actions by changing an attitude; the participant simply reverted to their original judgment once outside the group setting." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The durability of a conformity effect distinguishes compliance from internalization: compliance is a public behavior change that disappears once social pressure is removed, while internalization is a genuine private belief change that persists. Because the participant returns to the correct answer once tested alone, the original conformity reflects compliance, not internalization.",
      walkthrough: {
        approachNotes:
          "For questions about the durability of conformity, ask whether the behavior change persists once the group is removed: persistence indicates internalization (private acceptance), reversion indicates mere compliance (public behavior only).",
        steps: [
          "Identify the key clue: correct answers return once the participant is tested alone, without the group present.",
          "Recall that internalization involves a genuine, lasting private attitude change that should persist regardless of group presence.",
          "Recall that compliance describes conformity that is only public/behavioral and disappears once social pressure is removed.",
          "Match the reversion to the correct answer with compliance rather than internalization.",
          "Eliminate obedience and cognitive dissonance, neither of which fits a peer-conformity paradigm lacking an authority figure or a described attitude-behavior conflict resolution.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q7",
      passageId: "ps-p3",
      sectionId: "psych-soc",
      order: 6,
      stem: "The stepwise pattern of declining hypertension prevalence across successively higher income quartiles (Q1 through Q4) illustrates which sociological concept?",
      choices: [
        { id: "A", text: "The social gradient in health", explanation: "Correct. A social gradient describes a continuous, stepwise association between socioeconomic status and a health outcome across the entire distribution, not merely a difference between the poorest and wealthiest groups." },
        { id: "B", text: "Social stratification", explanation: "Social stratification refers broadly to the hierarchical ranking of individuals or groups by wealth, power, or prestige — it names the ranking system itself, not the graded health-outcome pattern being described here." },
        { id: "C", text: "Downward social mobility", explanation: "Downward social mobility describes movement to a lower social-class position over time, not a cross-sectional comparison of disease prevalence across income quartiles." },
        { id: "D", text: "The looking-glass self", explanation: "The looking-glass self is a symbolic-interactionist concept about self-concept forming from perceived others' judgments, unrelated to an income-health prevalence pattern." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The social gradient in health names exactly the pattern described: prevalence changes at every step of the income distribution (38% -> 29% -> 21% -> 14%), not just between the extremes. Recognizing graded, stepwise patterns versus simple threshold effects is a key skill for sociology passages presenting quartile or decile data.",
      walkthrough: {
        approachNotes:
          "When a passage presents disease or outcome rates across ordered SES categories and the rate changes at every step (not just between the extremes), that stepwise pattern is the definition of a 'social gradient' — distinguish it from stratification (the ranking system itself) and mobility (movement between ranks).",
        steps: [
          "Note that prevalence changes at every quartile boundary (38% to 29% to 21% to 14%), not just between the top and bottom groups.",
          "Recall the definition of a social gradient in health: a continuous, graded relationship between SES and health outcomes across the whole distribution.",
          "Distinguish this from social stratification, which describes the ranking system itself rather than the resulting health-outcome pattern.",
          "Rule out downward social mobility and the looking-glass self, neither of which describes a cross-sectional quartile comparison.",
          "Select the social gradient in health as the concept matching the stepwise data.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q8",
      passageId: "ps-p3",
      sectionId: "psych-soc",
      order: 7,
      stem: "The researchers' decision to statistically control for years of formal education was most likely intended to:",
      choices: [
        { id: "A", text: "Determine whether education, rather than income, was the true independent variable driving hypertension risk", explanation: "This would require redesigning the study around education as the primary predictor rather than controlling for it as a covariate alongside income." },
        { id: "B", text: "Rule out education as a confounding variable that independently correlates with both income and health outcomes, isolating the association between income and hypertension specifically", explanation: "Correct. Statistically controlling for a variable that correlates with both the predictor and outcome is a standard way to rule it out as a confound." },
        { id: "C", text: "Increase the total sample size available for analysis", explanation: "Statistically controlling for a covariate does not add participants or increase sample size." },
        { id: "D", text: "Randomly assign participants to income quartiles", explanation: "Income quartile is an observed, measured characteristic in this survey design, not something researchers can randomly assign; statistical control is not equivalent to random assignment." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Statistically controlling for a variable correlated with both the predictor (income) and the outcome (hypertension) is a standard method for ruling it out as a confound, allowing clearer attribution of the observed association to income itself. This research-methods skill — spotting and addressing confounds — is tested throughout psychology/sociology passages built around observational data.",
      walkthrough: {
        approachNotes:
          "Whenever a passage mentions researchers 'controlling for' or 'adjusting for' a variable, ask what third variable could plausibly explain away the main association — that variable is almost always being ruled out as a confound.",
        steps: [
          "Identify the two variables under study: income (predictor) and hypertension prevalence (outcome).",
          "Note that education is described as correlating with both income and health-related behaviors — the hallmark of a potential confounder.",
          "Recall that statistically controlling for a variable removes its influence, isolating the relationship between the remaining variables of interest.",
          "Match this purpose to ruling out education as a confound rather than redefining variables or increasing sample size.",
          "Eliminate options describing random assignment or sample-size changes, since statistical control does neither.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8B", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q9",
      passageId: "ps-p3",
      sectionId: "psych-soc",
      order: 8,
      stem: "The researchers' proposed allostatic-load pathway, in which low income leads to hypertension, exemplifies which explanation for the association between socioeconomic status and health, as distinguished from the alternative hypothesis mentioned in the passage?",
      choices: [
        { id: "A", text: "The health selection (social drift) hypothesis", explanation: "This is the alternative hypothesis mentioned in the passage — poor health causing downward mobility — not the mechanism the researchers proposed." },
        { id: "B", text: "The functionalist perspective on social stratification", explanation: "Functionalism concerns why stratification exists or persists for society's benefit; it is not a causal mechanism linking individual income to individual disease risk." },
        { id: "C", text: "The social causation hypothesis", explanation: "Correct. Social causation holds that socioeconomic disadvantage causally produces poor health outcomes, matching the researchers' proposed stress/allostatic-load pathway from low income to hypertension." },
        { id: "D", text: "The conflict perspective on health-care access", explanation: "Conflict theory concerns unequal power and resources between groups broadly; the passage's mechanism specifically describes a biological stress pathway, not a general theory of power struggle over access to care." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The social causation hypothesis holds that socioeconomic disadvantage causally produces poor health, here via chronic stress and allostatic load, in contrast to the health selection (social drift) hypothesis, which holds that poor health causes downward socioeconomic mobility. The passage explicitly frames the allostatic-load mechanism as the SES-causes-disease direction and contrasts it with the reverse-causation alternative.",
      walkthrough: {
        approachNotes:
          "When a sociology passage proposes a biological or behavioral mechanism by which SES produces a health outcome, and also mentions a reverse-causation alternative, that pairing is testing the social causation versus health selection (social drift) distinction — identify which direction of causality each choice describes.",
        steps: [
          "Identify the two competing explanations in the passage: low SES causing poor health (via allostatic load) versus poor health causing low SES (via limited employment).",
          "Recall that 'social causation' names the hypothesis that social conditions like income causally produce health outcomes.",
          "Recall that 'health selection' (social drift) names the reverse hypothesis, in which health status determines subsequent social position.",
          "Match the researchers' allostatic-load mechanism to the social causation direction.",
          "Eliminate the health-selection hypothesis (the passage's stated alternative), plus functionalism and conflict theory, which describe broader societal theories rather than this specific causal-direction debate.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8B", skill: "concept application" },
      difficulty: "hard",
    },
    {
      id: "ps-q10",
      passageId: null,
      sectionId: "psych-soc",
      order: 9,
      stem: "A researcher reads a list of 20 unrelated words aloud at a steady pace and then immediately asks participants to freely recall as many words as possible, in any order. Compared to words presented in the middle of the list, words presented in the last few positions are recalled disproportionately well. This advantage for the most recently presented items is best explained by the fact that:",
      choices: [
        { id: "A", text: "Middle-list items received more elaborative rehearsal and were transferred to long-term memory", explanation: "This describes why early (primacy) items are recalled well, not why the most recently presented items show an advantage." },
        { id: "B", text: "The free-recall test format itself increases retrieval accuracy equally for every serial position", explanation: "If accuracy were increased equally across positions, there would be no differential advantage for the last few items over the middle items, which contradicts the described pattern." },
        { id: "C", text: "The last few items benefit from reduced proactive interference generated by earlier list items", explanation: "Proactive interference (earlier learning disrupting new learning) is not the operative mechanism for the recency advantage in this immediate free-recall design." },
        { id: "D", text: "The last few items are still being actively maintained in short-term (working) memory at the time of recall and have not yet needed to be retrieved from long-term storage", explanation: "Correct. This is the recency effect: because recall is immediate, the most recent items are still resident in short-term/working memory, making them easy to report without retrieval from long-term storage." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "This pattern is the serial position effect. The primacy portion (better recall of early items) reflects extra rehearsal transferring those items into long-term memory, while the recency portion (better recall of the last few items) reflects those items still being held in short-term/working memory at the moment of immediate recall, requiring no retrieval from long-term storage.",
      walkthrough: {
        approachNotes:
          "For serial-position-curve questions, separately explain the primacy portion (rehearsal leading to long-term storage) and the recency portion (still resident in short-term/working memory) — most distractors misapply one end's explanation to the other end of the curve.",
        steps: [
          "Recognize the described pattern (better recall of first and last items than middle items) as the serial position effect.",
          "Recall that the primacy portion of the curve is explained by extra rehearsal transferring early items into long-term memory.",
          "Recall that the recency portion is explained by the most recent items still residing in short-term/working memory at the moment of immediate recall.",
          "Match the question's focus (the last few items) to the short-term memory retention explanation rather than a rehearsal-based account.",
          "Eliminate choices describing rehearsal (which applies to primacy) or interference (not the operative mechanism for recency in this immediate-recall design).",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6C", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q11",
      passageId: null,
      sectionId: "psych-soc",
      order: 10,
      stem: "A 34-year-old patient with multiple sclerosis has an MRI showing demyelinated plaques along axons of neurons in the central nervous system. This demyelination is most likely to have which direct effect on neuronal signaling?",
      choices: [
        { id: "A", text: "Decreased speed of action potential propagation, because loss of the myelin sheath disrupts saltatory conduction between nodes of Ranvier", explanation: "Correct. Myelin normally allows the action potential to 'jump' between nodes of Ranvier; losing this insulation forces slower, more continuous conduction along the membrane." },
        { id: "B", text: "Increased neurotransmitter synthesis in the presynaptic terminal", explanation: "Myelin surrounds the axon and does not directly affect neurotransmitter synthesis machinery located in the presynaptic terminal." },
        { id: "C", text: "Decreased number of voltage-gated sodium channels at the axon hillock", explanation: "Demyelination affects the insulation along the axon, not the density of voltage-gated sodium channels concentrated at the axon hillock/nodes." },
        { id: "D", text: "Increased threshold for graded potentials generated at the dendrites", explanation: "Graded potentials at the dendrites and soma are not a direct consequence of demyelination occurring along the axon." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Myelin enables fast, energy-efficient saltatory conduction by insulating the axon so the action potential effectively jumps between nodes of Ranvier, where voltage-gated channels are concentrated. Losing myelin removes this insulation, forcing more continuous membrane depolarization and dramatically slowing conduction velocity — the physiological basis for the sensory and motor symptoms of multiple sclerosis.",
      walkthrough: {
        approachNotes:
          "For questions on myelin or demyelination, connect the described histological change directly to its known effect on saltatory conduction speed — this is the core nervous-system mechanism tested in multiple sclerosis or Guillain-Barré-style vignettes.",
        steps: [
          "Identify the described pathology: loss of myelin sheath surrounding CNS axons.",
          "Recall the normal function of myelin: insulating the axon so the action potential jumps between nodes of Ranvier (saltatory conduction), greatly increasing conduction speed.",
          "Reason that removing this insulation forces more continuous, node-by-node depolarization along the membrane, slowing conduction velocity.",
          "Eliminate choices describing effects on neurotransmitter synthesis, channel number at the axon hillock, or dendritic graded-potential thresholds, none of which are the direct consequence of myelin loss.",
          "Select decreased conduction speed as the direct physiological effect.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q12",
      passageId: null,
      sectionId: "psych-soc",
      order: 11,
      stem: "A hiker encounters a rattlesnake on the trail. According to the James-Lange theory of emotion, which sequence correctly describes the order of events leading to the hiker's experience of fear?",
      choices: [
        { id: "A", text: "The hiker consciously appraises the snake as dangerous, which simultaneously triggers both physiological arousal (racing heart) and the subjective feeling of fear", explanation: "This describes the Cannon-Bard theory, which posits simultaneous, independent arousal and emotion, not the James-Lange sequence." },
        { id: "B", text: "The hiker's physiological arousal (racing heart, sweating) occurs, and the hiker then cognitively appraises that arousal in the context of the situation before labeling it as fear", explanation: "This describes Schachter-Singer's two-factor theory, which requires cognitive appraisal of ambiguous arousal to generate an emotion label, not James-Lange's direct sequence." },
        { id: "C", text: "The hiker perceives the snake, which directly triggers physiological arousal (racing heart, sweating), and the hiker's subsequent perception of this bodily arousal is the feeling of fear itself", explanation: "Correct. James-Lange theory holds that a stimulus triggers bodily arousal first, and the emotion is the brain's perception of that arousal — arousal causes the feeling." },
        { id: "D", text: "The hiker experiences the feeling of fear first, which then causes the physiological arousal response as a downstream effect", explanation: "This reverses the James-Lange sequence, which holds that bodily arousal precedes and causes the subjective emotional experience, not the other way around." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "James-Lange theory proposes that a stimulus triggers a physiological/bodily response first, and the emotion is the brain's interpretation of that bodily response — arousal causes the feeling, not the reverse. This is distinct from Cannon-Bard's simultaneous, independent pathways and from Schachter-Singer's two-factor model, which requires cognitive labeling of ambiguous arousal.",
      walkthrough: {
        approachNotes:
          "For emotion-theory questions, fix the order of stimulus, arousal, cognition, and feeling for each named theory before reading the choices — James-Lange: stimulus to arousal to feeling; Cannon-Bard: stimulus to simultaneous arousal and feeling; Schachter-Singer: stimulus to arousal to cognitive appraisal to feeling — then match the choice describing that exact order.",
        steps: [
          "Recall the defining sequence of James-Lange theory: the stimulus triggers bodily/physiological arousal first, and the perception of that arousal constitutes the emotion.",
          "Scan the choices for the one describing arousal occurring immediately after the stimulus and preceding the feeling.",
          "Eliminate the choice describing simultaneous, independent arousal and feeling (Cannon-Bard).",
          "Eliminate the choice requiring cognitive appraisal of arousal before an emotion label is applied (Schachter-Singer's two-factor theory).",
          "Eliminate the choice reversing the causal order (feeling before arousal), since that contradicts all three major theories.",
          "Select the choice matching the correct James-Lange order: stimulus, then arousal, then feeling.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7C", skill: "concept application" },
      difficulty: "hard",
    },
    {
      id: "ps-q13",
      passageId: "ps-p4",
      sectionId: "psych-soc",
      order: 12,
      stem: "In the terminology of signal detection theory, a radiologist correctly identifying a cancer-free mammogram as showing no cancer is an example of a:",
      choices: [
        { id: "A", text: "Hit", explanation: "A hit is correctly detecting a true signal when it is present, not correctly recognizing its absence." },
        { id: "B", text: "Miss", explanation: "A miss is failing to detect a true signal that is actually present, which does not describe correctly identifying a cancer-free film." },
        { id: "C", text: "False alarm", explanation: "A false alarm is reporting a signal (cancer) that is not actually present, the opposite of correctly recognizing its absence." },
        { id: "D", text: "Correct rejection", explanation: "Correct. A correct rejection is accurately identifying the absence of a signal — here, correctly reading a cancer-free film as cancer-free." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Signal detection theory sorts every trial into one of four outcomes based on whether a signal was truly present and whether the observer reported it. Correctly reporting 'no cancer' when no cancer is present is, by definition, a correct rejection, distinct from a hit (correctly reporting a true signal) and from the two error types (misses and false alarms).",
      walkthrough: {
        approachNotes:
          "For any signal-detection terminology question, build a 2x2 grid in your head: signal present/absent crossed with observer said yes/no. Locate the scenario in the grid before matching it to a term.",
        steps: [
          "Determine the true state of the world in the scenario: no cancer is present.",
          "Determine what the radiologist reported: no cancer.",
          "Place this combination (signal absent, reported absent) into the signal-detection grid.",
          "Match that cell to its name: correct rejection.",
          "Eliminate hit, miss, and false alarm, since each requires either a true signal present or an incorrect report.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q14",
      passageId: "ps-p4",
      sectionId: "psych-soc",
      order: 13,
      stem: "The change in hit rate and false-alarm rate between the rested and fatigued conditions is best explained by:",
      choices: [
        { id: "A", text: "A shift toward a more liberal response criterion, since both the hit rate and false-alarm rate increased", explanation: "The false-alarm rate did not increase between conditions (10% to 9%), so this does not describe a liberal criterion shift." },
        { id: "B", text: "A shift toward a more conservative response criterion, since both rates decreased by a similar amount", explanation: "The hit rate dropped by 12 percentage points while the false-alarm rate dropped by only 1 point — the two rates did not decrease by a similar amount, and a criterion shift alone would not explain such a large, selective drop in hits." },
        { id: "C", text: "A decrease in sensitivity (discriminability), since the hit rate dropped substantially while the false-alarm rate remained essentially unchanged", explanation: "Correct. When the false-alarm rate stays roughly flat but the hit rate drops sharply, the observer has become worse at distinguishing signal from noise — a loss of sensitivity, consistent with fatigue-impaired perceptual discrimination." },
        { id: "D", text: "An increase in sensitivity, since fewer total positive readings were given in the fatigued condition", explanation: "Giving fewer positive readings overall reflects fewer hits, which here reflects worse (not better) discrimination ability, so this does not indicate increased sensitivity." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Sensitivity and criterion are logically independent in signal detection theory. Because the false-alarm rate barely changed while the hit rate fell substantially, the data point to reduced sensitivity (poorer discrimination) rather than a shifted decision threshold, consistent with fatigue degrading the radiologists' underlying ability to distinguish cancerous from non-cancerous findings.",
      walkthrough: {
        approachNotes:
          "When comparing two SDT conditions, check the false-alarm rate first: if it stays roughly constant while the hit rate changes substantially, the shift is in sensitivity; if hit rate and false-alarm rate move together in the same direction, the shift is in criterion (bias).",
        steps: [
          "List the hit rate and false-alarm rate for both conditions: rested (88%, 10%) and fatigued (76%, 9%).",
          "Compare the size of the change in each rate: hit rate falls by 12 points, false-alarm rate falls by only 1 point.",
          "Recall that a stable false-alarm rate alongside a large hit-rate change indicates a change in sensitivity, not criterion.",
          "Conclude that fatigue reduced the radiologists' ability to discriminate cancer from non-cancer.",
          "Eliminate the criterion-shift choices, since criterion shifts move both rates together in the same direction.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q15",
      passageId: "ps-p4",
      sectionId: "psych-soc",
      order: 14,
      stem: "The difference in hit rate and false-alarm rate between the 'do not miss a cancer' instruction group and the 'avoid unnecessary biopsies' instruction group most likely reflects a difference in:",
      choices: [
        { id: "A", text: "Sensitivity (d'), since the two groups showed different hit rates", explanation: "Because both the hit rate and the false-alarm rate rose together from the conservative to the liberal instruction group, the pattern reflects a moving decision threshold rather than a change in the radiologists' underlying discrimination ability." },
        { id: "B", text: "Response criterion (bias), since instructions shifted radiologists toward more liberal or conservative decision thresholds even though underlying ability to discriminate cancer from non-cancer was presumably similar", explanation: "Correct. Instructions that make radiologists more willing to say 'cancer' raise both the hit rate and the false-alarm rate together, the signature of a criterion shift along a fixed sensitivity level, not a change in discrimination ability." },
        { id: "C", text: "Working memory capacity, since instructions increased cognitive load", explanation: "The manipulation was an instructional emphasis on outcome priorities, not a working-memory or cognitive-load manipulation." },
        { id: "D", text: "Absolute threshold, since instructions changed the minimum detectable stimulus intensity", explanation: "Absolute threshold refers to the minimum physical stimulus intensity detectable in the environment, not a decision rule applied to already-perceived, ambiguous findings." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "When hit rate and false-alarm rate move in the same direction together — both rising under 'do not miss a cancer' instructions and both falling under 'avoid unnecessary biopsies' instructions — the pattern reflects a shift in response criterion (how willing the observer is to say 'signal present') rather than a change in underlying sensitivity, since the same radiologists and comparable films were used in both conditions.",
      walkthrough: {
        approachNotes:
          "Distinguish criterion shifts from sensitivity shifts by checking whether hit rate and false-alarm rate move together (criterion) or whether one changes while the other stays flat (sensitivity).",
        steps: [
          "Compare hit rate and false-alarm rate across the two instruction conditions.",
          "Note that both rates rise together under liberal instructions and fall together under conservative instructions.",
          "Recall that rates moving together in the same direction is the signature of a criterion (bias) shift, not a sensitivity change.",
          "Reason that the radiologists' underlying discrimination ability was presumably unchanged by instructions alone, only their willingness to report a positive finding.",
          "Eliminate the sensitivity, working-memory, and absolute-threshold choices as inconsistent with this pattern.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "data-based reasoning" },
      difficulty: "hard",
    },
    {
      id: "ps-q16",
      passageId: "ps-p4",
      sectionId: "psych-soc",
      order: 15,
      stem: "Suppose radiologists were also given each patient's family history of breast cancer before reading a film, and that this history shaped how they interpreted ambiguous findings on the image. This use of prior knowledge to shape interpretation of sensory information is an example of:",
      choices: [
        { id: "A", text: "Bottom-up processing, since interpretation begins with the raw features of the image itself", explanation: "Bottom-up processing builds a percept from raw sensory features alone; this scenario instead describes prior knowledge shaping interpretation, the opposite emphasis." },
        { id: "B", text: "Top-down processing, since prior knowledge and expectations shape how ambiguous sensory information is interpreted", explanation: "Correct. Top-down processing occurs when existing knowledge, context, or expectations (here, family history) guide the interpretation of incoming sensory information." },
        { id: "C", text: "Sensory adaptation, since repeated exposure to similar stimuli reduces responsiveness", explanation: "Sensory adaptation describes decreased responsiveness to an unchanging stimulus over time, unrelated to using contextual knowledge to interpret a single image." },
        { id: "D", text: "Divided attention, since radiologists are attending to two sources of information at once", explanation: "The scenario describes prior knowledge biasing interpretation of a percept, not the radiologist simultaneously monitoring two separate attentional tasks." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Top-down processing describes perception guided by existing knowledge, expectations, or context rather than by the raw sensory input alone. A radiologist's interpretation of an ambiguous mammogram finding being shaped by prior knowledge of family history is a clear example of context and expectation influencing perception from the top down.",
      walkthrough: {
        approachNotes:
          "When a scenario describes prior knowledge, context, or expectation shaping how ambiguous sensory information gets interpreted, that is the definition of top-down processing; reserve bottom-up for cases built purely from raw stimulus features.",
        steps: [
          "Identify what is doing the influencing: prior knowledge (family history), not raw image features.",
          "Recall that top-down processing is perception guided by existing knowledge or expectation.",
          "Recall that bottom-up processing instead builds perception from sensory features without prior context.",
          "Match the scenario to top-down processing.",
          "Eliminate sensory adaptation and divided attention, neither of which describes using contextual knowledge to interpret ambiguous stimuli.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q17",
      passageId: "ps-p4",
      sectionId: "psych-soc",
      order: 16,
      stem: "In signal detection research generally, the minimum intensity of a stimulus that can be detected correctly on 50% of trials is known as the:",
      choices: [
        { id: "A", text: "Difference threshold", explanation: "The difference threshold (just noticeable difference) is the smallest detectable change between two stimuli, not the minimum detectable intensity of a single stimulus." },
        { id: "B", text: "Absolute threshold", explanation: "Correct. The absolute threshold is defined as the minimum stimulus intensity an observer can detect on 50% of trials." },
        { id: "C", text: "Response criterion", explanation: "Response criterion describes an observer's decision bias under uncertainty, not a fixed property of the minimum physically detectable stimulus intensity." },
        { id: "D", text: "Weber fraction", explanation: "The Weber fraction is the constant proportion relating a stimulus's baseline intensity to the size of a just-noticeable difference, not the raw absolute detection threshold." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The absolute threshold is a core psychophysics concept, defined precisely as the minimum stimulus intensity detectable on half of trials, distinguishing it from the difference threshold (smallest detectable change between two stimuli) and from decision-level SDT concepts like response criterion.",
      walkthrough: {
        approachNotes:
          "Psychophysics terminology questions are often solved by precise recall of definitions; keep absolute threshold (minimum detectable intensity), difference threshold (smallest detectable change), and Weber's law (proportional relationship) clearly separated.",
        steps: [
          "Identify the quantity being defined: minimum stimulus intensity detected 50% of the time.",
          "Recall that this is the textbook definition of the absolute threshold.",
          "Rule out difference threshold, which concerns detecting change between two stimuli, not a single minimum intensity.",
          "Rule out response criterion, a decision-bias concept rather than a stimulus-intensity concept.",
          "Rule out Weber fraction, a proportional constant rather than a raw threshold value.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "knowledge recall" },
      difficulty: "easy",
    },
    {
      id: "ps-q18",
      passageId: "ps-p5",
      sectionId: "psych-soc",
      order: 17,
      stem: "The sharp rise in cortisol at the 3-month measurement, accompanied by workers' reports of feeling 'on edge' and hypervigilant, corresponds to which phase of Selye's general adaptation syndrome?",
      choices: [
        { id: "A", text: "Resistance phase", explanation: "The resistance phase is a later, more sustained period of continued coping, not the initial sharp spike in stress hormones." },
        { id: "B", text: "Exhaustion phase", explanation: "The exhaustion phase is marked by depleted resources and declining (not rising) hormone output, the opposite of the pattern described at 3 months." },
        { id: "C", text: "Alarm reaction", explanation: "Correct. The alarm reaction is the initial phase of GAS, marked by rapid activation of the sympathetic nervous system and HPA axis, matching the sharp early cortisol spike and hypervigilance." },
        { id: "D", text: "Latency phase", explanation: "Latency phase is not a recognized stage of Selye's general adaptation syndrome." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Selye's general adaptation syndrome begins with an alarm reaction: a rapid mobilization of the sympathetic nervous system and HPA axis producing sharply elevated cortisol and a subjective sense of heightened arousal, exactly matching the 3-month data point before the more sustained resistance phase and eventual exhaustion phase.",
      walkthrough: {
        approachNotes:
          "For GAS-phase questions, anchor each phase to its hormonal trajectory: alarm = sharp initial spike, resistance = sustained elevated-but-lower plateau, exhaustion = decline below baseline with functional impairment.",
        steps: [
          "Note the cortisol trajectory: baseline 12, spiking to 22 at 3 months.",
          "Recall that GAS begins with an alarm reaction featuring rapid sympathetic/HPA activation.",
          "Match the sharp early spike and subjective hypervigilance to the alarm reaction.",
          "Eliminate resistance (a later, more stable plateau) and exhaustion (a later decline), since both occur at different time points in the data.",
          "Eliminate the distractor term not part of Selye's model.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q19",
      passageId: "ps-p5",
      sectionId: "psych-soc",
      order: 18,
      stem: "Which of the following correctly orders the hormonal cascade of the HPA axis described in the passage, from initial brain signal to final hormone release?",
      choices: [
        { id: "A", text: "Anterior pituitary releases CRH, which stimulates the hypothalamus to release ACTH, which stimulates the adrenal medulla to release cortisol", explanation: "This reverses the roles of the hypothalamus and pituitary and misassigns cortisol release to the adrenal medulla instead of the adrenal cortex." },
        { id: "B", text: "Hypothalamus releases ACTH, which stimulates the adrenal cortex to release CRH, which stimulates the pituitary to release cortisol", explanation: "This scrambles which structure releases which hormone; CRH comes from the hypothalamus and ACTH from the pituitary, not the reverse." },
        { id: "C", text: "Hypothalamus releases CRH, which stimulates the anterior pituitary to release ACTH, which stimulates the adrenal cortex to release cortisol", explanation: "Correct. This is the accurate HPA axis cascade described in the passage: hypothalamus to CRH, anterior pituitary to ACTH, adrenal cortex to cortisol." },
        { id: "D", text: "Hypothalamus releases cortisol directly, bypassing the pituitary and adrenal glands", explanation: "Cortisol is released by the adrenal cortex at the end of the cascade, not directly by the hypothalamus." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The HPA axis operates as a three-step cascade: the hypothalamus releases CRH, which triggers the anterior pituitary to release ACTH, which in turn triggers the adrenal cortex to release cortisol. Keeping each structure paired with its correct hormone is essential for correctly ordering the sequence.",
      walkthrough: {
        approachNotes:
          "For endocrine-axis sequencing questions, write out the three structures and their released hormones in a simple chain before evaluating answer choices, since distractors typically scramble the structure-hormone pairings or the order.",
        steps: [
          "List the three structures involved: hypothalamus, anterior pituitary, adrenal cortex.",
          "Pair each structure with its correct hormone: hypothalamus to CRH, anterior pituitary to ACTH, adrenal cortex to cortisol.",
          "Arrange them in the correct downstream order: hypothalamus, then pituitary, then adrenal cortex.",
          "Compare each answer choice to this correct chain.",
          "Eliminate choices that swap structures, swap hormones, or skip a step in the cascade.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "knowledge recall" },
      difficulty: "medium",
    },
    {
      id: "ps-q20",
      passageId: "ps-p5",
      sectionId: "psych-soc",
      order: 19,
      stem: "The decline in cortisol below baseline and the drop in immune function observed at 24 months most likely reflects which concept?",
      choices: [
        { id: "A", text: "Successful long-term adaptation to the stressor with no physiological cost", explanation: "A decline in immune function represents a clear physiological cost, contradicting the idea of adaptation without cost." },
        { id: "B", text: "Allostatic overload, in which prolonged activation of stress-response systems depletes physiological resources and impairs regulatory capacity, including immune function", explanation: "Correct. Chronic activation of the stress response can exhaust the body's regulatory capacity, producing the below-baseline cortisol and immune decline described — the exhaustion phase of GAS." },
        { id: "C", text: "Spontaneous recovery of the stress response", explanation: "Spontaneous recovery is a classical-conditioning term describing the reappearance of an extinguished response, unrelated to endocrine exhaustion after chronic stress." },
        { id: "D", text: "A return to the resistance phase, since cortisol changed direction again", explanation: "The resistance phase involves sustained elevated cortisol and normal immune function, not a below-baseline cortisol level paired with impaired immune function." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The 24-month data — cortisol falling below baseline alongside declining immune function and increased illness — represent allostatic overload, the exhaustion phase of Selye's general adaptation syndrome, in which chronically taxed stress-response systems can no longer maintain adequate regulatory output, leaving the body more vulnerable to illness.",
      walkthrough: {
        approachNotes:
          "When later time points in a chronic-stress dataset show a stress hormone dropping below its original baseline together with functional decline (immune, cognitive, or otherwise), that combination signals exhaustion/allostatic overload rather than successful adaptation or a return to an earlier phase.",
        steps: [
          "Note the two co-occurring findings at 24 months: below-baseline cortisol and reduced immune function.",
          "Recall that allostatic overload/exhaustion describes depleted stress-response capacity after chronic demand.",
          "Match the below-baseline hormone level and functional impairment to this exhaustion concept.",
          "Eliminate 'no physiological cost,' since immune decline is a clear cost.",
          "Eliminate resistance phase and spontaneous recovery, neither of which matches a below-baseline, functionally impaired state.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "data-based reasoning" },
      difficulty: "hard",
    },
    {
      id: "ps-q21",
      passageId: "ps-p5",
      sectionId: "psych-soc",
      order: 20,
      stem: "According to the passage, which hormone is released directly by the adrenal medulla as part of the fast sympathetic stress response, as distinct from the slower HPA-axis pathway?",
      choices: [
        { id: "A", text: "Cortisol", explanation: "Cortisol is the end product of the slower HPA-axis pathway, released by the adrenal cortex, not the adrenal medulla." },
        { id: "B", text: "ACTH", explanation: "ACTH is released by the anterior pituitary as part of the HPA-axis cascade, not by the adrenal medulla." },
        { id: "C", text: "CRH", explanation: "CRH is released by the hypothalamus at the start of the HPA-axis cascade, not by the adrenal medulla." },
        { id: "D", text: "Epinephrine", explanation: "Correct. The passage specifies that the adrenal medulla releases epinephrine directly into the bloodstream as part of the fast sympathetic pathway, distinct from the slower HPA-axis cortisol cascade." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage explicitly contrasts two stress pathways: the slower HPA axis, ending in cortisol release from the adrenal cortex, and the faster sympathetic pathway, in which the adrenal medulla releases epinephrine directly into the bloodstream for rapid fight-or-flight mobilization.",
      walkthrough: {
        approachNotes:
          "Keep the adrenal cortex (slow, cortisol, HPA axis) and adrenal medulla (fast, epinephrine, sympathetic nervous system) firmly separated when a passage or question tests both stress pathways together.",
        steps: [
          "Identify which pathway the question asks about: the fast sympathetic pathway via the adrenal medulla.",
          "Recall the passage's explicit statement that the adrenal medulla releases epinephrine.",
          "Eliminate cortisol, ACTH, and CRH, all of which belong to the separate, slower HPA-axis cascade.",
          "Select epinephrine as the hormone released directly by the adrenal medulla.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "knowledge recall" },
      difficulty: "easy",
    },
    {
      id: "ps-q22",
      passageId: "ps-p5",
      sectionId: "psych-soc",
      order: 21,
      stem: "The researchers' decision to measure the same group of workers repeatedly over 24 months, rather than comparing different workers at each time point, most directly allowed them to:",
      choices: [
        { id: "A", text: "Randomly assign workers to the high-demand role", explanation: "Random assignment is a separate design feature concerning how participants enter conditions, not a consequence of measuring the same workers repeatedly over time." },
        { id: "B", text: "Control for stable individual differences between workers by having each worker serve as their own baseline comparison", explanation: "Correct. A longitudinal, within-subjects design allows each worker's later measurements to be compared against that same worker's own baseline, controlling for stable individual differences that would confound a between-subjects comparison." },
        { id: "C", text: "Increase the total number of participants in the study", explanation: "Repeated measurement of the same group does not itself add participants; sample size is a separate consideration from study design timing." },
        { id: "D", text: "Eliminate the need for a baseline measurement", explanation: "A baseline measurement was in fact taken and is essential to a within-subjects longitudinal design, not eliminated by it." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "A longitudinal, repeated-measures design lets researchers compare each worker's later cortisol and immune values to that same worker's own baseline, controlling for stable between-person differences (such as baseline stress reactivity) that would otherwise confound a design comparing different workers at each time point.",
      walkthrough: {
        approachNotes:
          "When a passage highlights that the same participants were tracked over time, the methodological payoff being tested is almost always control of stable individual differences via within-subjects comparison — distinguish this from unrelated design features like random assignment or sample size.",
        steps: [
          "Identify the design feature: the same workers were measured at multiple time points.",
          "Recall that within-subjects/longitudinal designs let each participant serve as their own control.",
          "Reason that this controls for stable individual differences that would otherwise confound a between-subjects comparison.",
          "Eliminate random assignment, sample size, and elimination of baseline measurement, none of which follow from repeated measurement of the same group.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q23",
      passageId: "ps-p6",
      sectionId: "psych-soc",
      order: 22,
      stem: "The systematic difference in mean estimates between the low-anchor and high-anchor wheel-spin groups illustrates which cognitive heuristic?",
      choices: [
        { id: "A", text: "Representativeness heuristic", explanation: "The representativeness heuristic involves judging probability by similarity to a prototype, not adjustment insufficiently from an arbitrary starting value." },
        { id: "B", text: "Availability heuristic", explanation: "The availability heuristic involves judging frequency by ease of mental retrieval, not by insufficient adjustment from a numeric starting point." },
        { id: "C", text: "Anchoring heuristic", explanation: "Correct. Anchoring describes insufficient adjustment away from an initial reference value, exactly matching how the arbitrary wheel number shifted participants' final estimates." },
        { id: "D", text: "Affect heuristic", explanation: "The affect heuristic involves using an emotional reaction to guide judgment, not adjustment from a numeric starting value." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The wheel-spin manipulation is a classic demonstration of anchoring: an arbitrary numeric starting point systematically pulled participants' final estimates toward it, even though the number had no logical bearing on the true answer, illustrating insufficient adjustment away from an initial reference value.",
      walkthrough: {
        approachNotes:
          "When a study manipulates an arbitrary starting number and shows it pulling final numeric estimates in its direction, that is the signature of anchoring; distinguish it from availability (ease of recall) and representativeness (similarity to a prototype).",
        steps: [
          "Identify the manipulated variable: an arbitrary starting number from a rigged wheel.",
          "Note that final estimates shifted toward the arbitrary starting number (25% vs. 45%).",
          "Recall that anchoring describes exactly this pattern of insufficient adjustment from a reference value.",
          "Eliminate availability and representativeness, which do not involve a numeric starting point.",
          "Eliminate the affect heuristic, since no emotional reaction is described as driving the estimate.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q24",
      passageId: "ps-p6",
      sectionId: "psych-soc",
      order: 23,
      stem: "The shark-coverage group's inflated risk rating for shark attacks relative to heart disease is best explained by:",
      choices: [
        { id: "A", text: "The representativeness heuristic, since sharks are prototypically dangerous animals", explanation: "Representativeness concerns similarity-based category judgments, not the effect of vivid, recent media exposure on perceived frequency." },
        { id: "B", text: "The availability heuristic, since vivid, recent media coverage made shark attacks easier to mentally retrieve, inflating their perceived frequency", explanation: "Correct. The availability heuristic explains why vivid, easily recalled examples (a widely covered fatal shark attack) lead people to overestimate how frequently or likely similar events are, even against the true base rates." },
        { id: "C", text: "The anchoring heuristic, since participants were given a numeric starting estimate for shark attack risk", explanation: "No numeric anchor was provided in the shark-attack study; participants were simply exposed to news coverage, not given a starting number to adjust from." },
        { id: "D", text: "Confirmation bias, since participants sought out information confirming a preexisting belief that sharks are dangerous", explanation: "Participants passively read assigned news coverage rather than actively seeking out confirming information, so this does not describe active confirmation-seeking behavior." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The availability heuristic explains why exposure to vivid, memorable, recent examples (like a widely reported shark attack) inflates a person's perceived frequency or likelihood of similar events, even when true base rates (such as the far higher lifetime risk of heart disease) indicate otherwise.",
      walkthrough: {
        approachNotes:
          "When a scenario links vivid or heavily publicized examples to an inflated risk judgment that departs from true statistical base rates, that combination is the hallmark of the availability heuristic.",
        steps: [
          "Identify the manipulation: exposure to vivid, recent news coverage of a shark attack.",
          "Note the outcome: risk of shark attack rated as comparable to or greater than heart disease, despite true base rates showing the opposite.",
          "Recall that the availability heuristic explains judgments driven by ease of mental retrieval of vivid examples.",
          "Match the vivid-coverage-driven overestimate to the availability heuristic.",
          "Eliminate anchoring (no numeric starting value given) and confirmation bias (no active information-seeking described).",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6B", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q25",
      passageId: "ps-p6",
      sectionId: "psych-soc",
      order: 24,
      stem: "Which of the following best describes the representativeness heuristic, which is not directly illustrated by either study in the passage?",
      choices: [
        { id: "A", text: "Judging the probability that something belongs to a category based on how closely it resembles a typical member of that category, regardless of actual base rates", explanation: "Correct. This is the standard definition of the representativeness heuristic — similarity-based category judgment that can override statistical base-rate information." },
        { id: "B", text: "Adjusting insufficiently from an initial reference value when estimating an unknown quantity", explanation: "This describes anchoring, which is illustrated by the wheel-spin study, not the representativeness heuristic." },
        { id: "C", text: "Judging the frequency of an event by how easily relevant examples come to mind", explanation: "This describes the availability heuristic, which is illustrated by the shark-attack study, not the representativeness heuristic." },
        { id: "D", text: "Relying on an immediate emotional reaction to guide a judgment", explanation: "This describes the affect heuristic, which is not the concept being defined here." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The representativeness heuristic is the tendency to judge category membership or probability by resemblance to a mental prototype, often at the expense of accurate base-rate information — a distinct concept from the anchoring and availability heuristics that the passage's two studies actually demonstrate.",
      walkthrough: {
        approachNotes:
          "For heuristic-definition questions, keep the three classic heuristics distinct by their operative mechanism: anchoring (numeric starting value), availability (ease of recall), representativeness (similarity to a prototype) — and notice when a question tests recognition of a heuristic the passage did not directly demonstrate.",
        steps: [
          "Recognize that the question asks for the definition of a heuristic not directly shown in the passage's studies.",
          "Recall the defining feature of representativeness: judging by resemblance to a typical category member.",
          "Match that definition to the correct choice.",
          "Eliminate the choices describing anchoring and availability, since the question specifies those are already illustrated elsewhere in the passage.",
          "Eliminate the affect heuristic definition as unrelated to representativeness.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6B", skill: "knowledge recall" },
      difficulty: "medium",
    },
    {
      id: "ps-q26",
      passageId: "ps-p6",
      sectionId: "psych-soc",
      order: 25,
      stem: "The rapid, largely automatic use of heuristics such as anchoring and availability, described in the passage, is most closely associated with which mode of thinking in dual-process theory?",
      choices: [
        { id: "A", text: "System 2, because heuristics require deliberate, effortful calculation", explanation: "Heuristics are fast and largely automatic, the hallmark of System 1 processing, not the slow, effortful calculation characteristic of System 2." },
        { id: "B", text: "System 1, because heuristics operate quickly, automatically, and with minimal conscious effort", explanation: "Correct. System 1 thinking is fast, automatic, and intuitive, matching how heuristics like anchoring and availability operate without deliberate calculation." },
        { id: "C", text: "Convergent thinking, because heuristics narrow multiple possibilities to a single correct answer", explanation: "Convergent thinking is a distinct problem-solving concept describing narrowing toward one correct solution, not the automatic, intuitive processing described by dual-process theory's System 1." },
        { id: "D", text: "Divergent thinking, because heuristics generate many possible solutions", explanation: "Heuristics here produce a single fast estimate rather than multiple creative alternatives, so this does not match divergent thinking." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Dual-process theory distinguishes System 1 (fast, automatic, intuitive) from System 2 (slow, effortful, deliberate) thinking. Heuristics like anchoring and availability are classic examples of System 1 processing, since they generate quick judgments with minimal conscious calculation, sometimes at the cost of accuracy.",
      walkthrough: {
        approachNotes:
          "For dual-process theory questions, match the described thinking style to its defining speed/effort profile: fast and automatic maps to System 1, slow and effortful maps to System 2.",
        steps: [
          "Note the described features of heuristic use: rapid, largely automatic.",
          "Recall that System 1 in dual-process theory is defined as fast, automatic, and intuitive.",
          "Match the rapid, automatic heuristic use to System 1.",
          "Eliminate System 2, since it describes slow, deliberate processing, the opposite of what's described.",
          "Eliminate convergent and divergent thinking, which are separate problem-solving concepts unrelated to the dual-process framework.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q27",
      passageId: "ps-p6",
      sectionId: "psych-soc",
      order: 26,
      stem: "The results from the warned-and-incentivized group (30% and 38% for low and high anchors, respectively) compared to the original low- and high-anchor groups (25% and 45%) best support which conclusion?",
      choices: [
        { id: "A", text: "Warning participants and incentivizing accuracy completely eliminated the anchoring effect", explanation: "A gap between the low-anchor (30%) and high-anchor (38%) warned estimates still remains, so the effect was reduced, not eliminated." },
        { id: "B", text: "Warning participants and incentivizing accuracy reduced, but did not eliminate, the anchoring effect, since a gap between the low- and high-anchor estimates persisted", explanation: "Correct. Both warned estimates moved closer to the true value (28%) and closer to each other than the original unwarned estimates, but an 8-point gap between the two anchor conditions remained, indicating a partial, not complete, reduction." },
        { id: "C", text: "Warning participants and incentivizing accuracy reversed the direction of the anchoring effect", explanation: "The high-anchor warned group (38%) still produced a higher estimate than the low-anchor warned group (30%), so the direction of the effect was not reversed." },
        { id: "D", text: "Warning participants and incentivizing accuracy had no measurable effect on estimates", explanation: "Both estimates shifted closer to the true value and closer to each other compared to the unwarned condition, indicating the manipulation did have a measurable effect." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Comparing the warned/incentivized condition (30% vs. 38%) to the original unwarned condition (25% vs. 45%) shows the gap between anchor groups shrank substantially but did not disappear, supporting the conclusion that awareness and incentive can reduce, but not fully eliminate, anchoring bias.",
      walkthrough: {
        approachNotes:
          "For before/after manipulation data, compute the size of the effect (the gap between conditions) in both the original and modified condition, then classify the change as elimination, partial reduction, no change, or reversal based on whether the gap shrinks to zero, shrinks partially, stays the same, or flips sign.",
        steps: [
          "Calculate the original anchor gap: 45% minus 25% = 20 points.",
          "Calculate the warned/incentivized gap: 38% minus 30% = 8 points.",
          "Note that the gap shrank substantially (20 to 8 points) but did not reach zero.",
          "Conclude that the manipulation reduced, but did not eliminate, the anchoring effect.",
          "Eliminate the choices describing complete elimination, reversal, or no effect, none of which match this partial-reduction pattern.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6B", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q28",
      passageId: "ps-p7",
      sectionId: "psych-soc",
      order: 27,
      stem: "The increase in percentage of REM sleep observed on the recovery night, well above the baseline percentage, is best described as:",
      choices: [
        { id: "A", text: "REM rebound, reflecting a homeostatic drive to recover lost REM sleep", explanation: "Correct. REM rebound describes the well-documented increase in REM sleep following REM deprivation, reflecting a homeostatic pressure to recover the lost REM sleep." },
        { id: "B", text: "Sleep inertia, reflecting grogginess upon waking", explanation: "Sleep inertia refers to post-waking grogginess and impaired alertness, not a change in the proportion of a sleep stage across a night." },
        { id: "C", text: "Sundowning, a pattern of increased confusion in the evening", explanation: "Sundowning is a clinical phenomenon associated with dementia involving evening confusion, unrelated to a rebound increase in REM sleep proportion." },
        { id: "D", text: "Sleep-onset latency, reflecting the time needed to fall asleep", explanation: "Sleep-onset latency describes the time it takes to fall asleep, not the proportion of a stage once sleep has begun." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "REM rebound is a well-established homeostatic phenomenon in which, after a period of REM deprivation, the brain compensates by spending an elevated proportion of subsequent sleep in REM — exactly matching the jump from 25% at baseline to 35% on the recovery night after the REM-deprivation night.",
      walkthrough: {
        approachNotes:
          "When a sleep-deprivation passage shows an above-baseline surge in the deprived stage on the following recovery night, identify that surge as a rebound effect reflecting homeostatic sleep drive for that specific stage.",
        steps: [
          "Compare REM percentages across the three nights: baseline 25%, deprivation 5%, recovery 35%.",
          "Note that recovery-night REM exceeds even the original baseline level.",
          "Recall that this above-baseline compensatory increase after deprivation is termed REM rebound.",
          "Eliminate sleep inertia, sundowning, and sleep-onset latency, none of which describe a stage-proportion rebound.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6C", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q29",
      passageId: "ps-p7",
      sectionId: "psych-soc",
      order: 28,
      stem: "Based on the passage, which of the following correctly contrasts the EEG signature of REM sleep with that of slow-wave sleep?",
      choices: [
        { id: "A", text: "REM shows high-amplitude, synchronized delta waves, while slow-wave sleep shows fast, desynchronized activity", explanation: "This reverses the two patterns described in the passage: delta waves characterize slow-wave sleep, and fast desynchronized activity characterizes REM." },
        { id: "B", text: "REM shows fast, low-amplitude, desynchronized activity resembling wakefulness, while slow-wave sleep shows high-amplitude, synchronized delta waves", explanation: "Correct. This matches the passage's description exactly: REM EEG resembles the fast, desynchronized pattern of wakefulness, while slow-wave sleep shows high-amplitude, synchronized delta activity." },
        { id: "C", text: "Both REM and slow-wave sleep show identical high-amplitude delta-wave activity", explanation: "The passage explicitly distinguishes the two stages by different, not identical, EEG patterns." },
        { id: "D", text: "Neither REM nor slow-wave sleep produces a distinguishable EEG pattern", explanation: "Both stages are explicitly defined in the passage by distinguishable, characteristic EEG patterns." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage describes REM sleep as showing fast, low-amplitude, desynchronized EEG activity resembling wakefulness, in contrast to slow-wave sleep, characterized by high-amplitude, synchronized delta waves — a foundational distinction for identifying sleep stages from EEG tracings.",
      walkthrough: {
        approachNotes:
          "For EEG sleep-stage questions, memorize the amplitude/synchrony contrast directly: REM resembles waking EEG (fast, low-amplitude, desynchronized), while slow-wave sleep is the opposite (slow, high-amplitude, synchronized delta waves).",
        steps: [
          "Recall the passage's description of REM EEG: fast, low-amplitude, desynchronized, resembling wakefulness.",
          "Recall the passage's description of slow-wave sleep EEG: high-amplitude, synchronized delta waves.",
          "Match these two descriptions to the correct choice.",
          "Eliminate the choice that reverses the two patterns.",
          "Eliminate choices claiming no distinguishable pattern or identical patterns for both stages.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6C", skill: "knowledge recall" },
      difficulty: "easy",
    },
    {
      id: "ps-q30",
      passageId: "ps-p7",
      sectionId: "psych-soc",
      order: 29,
      stem: "The finding that motor-sequence task performance the morning after REM deprivation was worse than after baseline or recovery sleep most directly supports which conclusion?",
      choices: [
        { id: "A", text: "REM sleep plays a role in consolidating procedural motor learning", explanation: "Correct. Selectively depriving participants of REM sleep, while largely preserving non-REM sleep, impaired next-day motor-sequence performance, directly implicating REM sleep in consolidating this type of procedural learning." },
        { id: "B", text: "Slow-wave sleep is irrelevant to memory consolidation", explanation: "The study did not manipulate slow-wave sleep independently, so no conclusion about its irrelevance to memory consolidation can be drawn from this design." },
        { id: "C", text: "Total sleep time, regardless of stage composition, determines next-day motor performance", explanation: "Non-REM sleep was largely preserved (and even proportionally increased) on the deprivation night, yet performance was still impaired, arguing against a simple total-sleep-time explanation." },
        { id: "D", text: "Motor learning occurs exclusively during Stage 1 sleep", explanation: "Stage 1 percentages were similar across all three nights, and the passage provides no basis for isolating Stage 1 specifically as the site of motor learning." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Because the deprivation manipulation selectively removed REM sleep while largely preserving non-REM sleep stages, and next-day motor-sequence performance was still impaired, the results specifically implicate REM sleep — rather than total sleep time or another stage — in consolidating procedural motor learning.",
      walkthrough: {
        approachNotes:
          "For sleep-and-memory questions, check what stage was selectively manipulated and whether other stages were held roughly constant; a selective deficit tied to a selectively removed stage supports a causal role for that specific stage.",
        steps: [
          "Identify the manipulation: REM sleep selectively reduced, while non-REM stages were preserved or even slightly increased.",
          "Note the outcome: impaired next-day motor-sequence performance specifically after the REM-deprivation night.",
          "Reason that because total and non-REM sleep were not reduced, the impairment cannot be explained by less overall sleep.",
          "Conclude that REM sleep specifically contributes to consolidating procedural motor learning.",
          "Eliminate the choices about slow-wave sleep irrelevance, total sleep time, and Stage 1 exclusivity, none of which are supported by this selective-deprivation design.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6C", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q31",
      passageId: "ps-p7",
      sectionId: "psych-soc",
      order: 30,
      stem: "The structure identified in the passage as the primary regulator of the timing of the sleep-wake cycle is the:",
      choices: [
        { id: "A", text: "Amygdala", explanation: "The amygdala is primarily involved in emotional processing, particularly fear, not the circadian timing of the sleep-wake cycle." },
        { id: "B", text: "Hippocampus", explanation: "The hippocampus is primarily involved in memory consolidation, not regulating the timing of sleep and wakefulness." },
        { id: "C", text: "Suprachiasmatic nucleus", explanation: "Correct. The passage identifies the suprachiasmatic nucleus (SCN) of the hypothalamus as the structure governing the timing of the sleep-wake cycle via melatonin regulation." },
        { id: "D", text: "Reticular formation", explanation: "The reticular formation is involved in general arousal and alertness, not serving as the primary circadian pacemaker." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The suprachiasmatic nucleus of the hypothalamus functions as the body's primary circadian pacemaker, regulating the timing of the sleep-wake cycle by controlling melatonin release in response to light exposure, as explicitly stated in the passage.",
      walkthrough: {
        approachNotes:
          "For brain-structure-and-function questions, directly match the function described (here, circadian timing) to the structure named in the passage rather than to superficially similar-sounding structures with different functions.",
        steps: [
          "Identify the function in question: timing/regulation of the sleep-wake cycle.",
          "Recall the passage's explicit statement identifying the suprachiasmatic nucleus as this regulator.",
          "Eliminate the amygdala (emotion) and hippocampus (memory), which serve different functions.",
          "Eliminate the reticular formation, involved in general arousal rather than circadian timing specifically.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6C", skill: "knowledge recall" },
      difficulty: "easy",
    },
    {
      id: "ps-q32",
      passageId: "ps-p7",
      sectionId: "psych-soc",
      order: 31,
      stem: "The researchers' choice to briefly wake participants only at REM onset, rather than depriving them of sleep entirely, was most likely intended to:",
      choices: [
        { id: "A", text: "Reduce the total cost and duration of the study", explanation: "This does not address the scientific rationale for selectively targeting REM sleep rather than total sleep." },
        { id: "B", text: "Isolate the specific effects of REM loss from the confounding effects of total sleep deprivation, since non-REM sleep was largely preserved", explanation: "Correct. By waking participants only at REM onset and allowing normal non-REM sleep, the design lets researchers attribute next-day effects specifically to REM loss rather than to overall sleep loss." },
        { id: "C", text: "Increase the total amount of slow-wave sleep participants received relative to normal", explanation: "While non-REM percentages increased somewhat as a byproduct, this was not the researchers' goal in designing the selective-deprivation procedure." },
        { id: "D", text: "Make the recovery night unnecessary", explanation: "The recovery night was still conducted and provided essential data on REM rebound, so the selective-deprivation design did not make it unnecessary." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Selectively waking participants at REM onset, while preserving normal amounts of non-REM sleep, is a classic methodological strategy for isolating the specific contribution of REM sleep from the broader, confounding effects of total sleep loss on next-day functioning.",
      walkthrough: {
        approachNotes:
          "When a passage describes a selective-deprivation design targeting one specific component of a larger system while preserving the rest, recognize the purpose as isolating that component's effect from a broader confound.",
        steps: [
          "Identify the design feature: selective REM-only deprivation with preserved non-REM sleep.",
          "Consider what confound this design avoids: general sleep deprivation effects unrelated to REM specifically.",
          "Recall that isolating one variable while holding others constant is standard practice for establishing a specific causal link.",
          "Match the design choice to the goal of isolating REM-specific effects.",
          "Eliminate the choices about cost, slow-wave sleep enhancement, and eliminating the recovery night, none of which reflect the actual scientific rationale.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6C", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q33",
      passageId: "ps-p8",
      sectionId: "psych-soc",
      order: 32,
      stem: "The reduced free-play drawing time in the expected-reward group two weeks later, compared to the unexpected-reward and no-reward groups, illustrates which phenomenon?",
      choices: [
        { id: "A", text: "The overjustification effect, in which an anticipated external reward for an already-enjoyable activity undermines intrinsic motivation for that activity", explanation: "Correct. Anticipating an external reward for a task the children already found enjoyable reduced their later voluntary engagement, the defining pattern of the overjustification effect." },
        { id: "B", text: "Positive reinforcement, in which a rewarded behavior becomes more frequent", explanation: "The expected-reward group's drawing behavior became less frequent afterward, the opposite of the increased frequency predicted by straightforward positive reinforcement." },
        { id: "C", text: "Extinction, in which a previously reinforced behavior disappears after reinforcement is withheld", explanation: "No repeated reinforcement schedule was established and then withheld in this single-session design; the drop reflects a motivational shift, not classic extinction of a conditioned response." },
        { id: "D", text: "Latent learning, in which learning occurs without reinforcement and is not immediately expressed in behavior", explanation: "Latent learning concerns learning that is not behaviorally expressed until later needed, which does not match a reward undermining subsequent voluntary engagement in an already-known activity." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The overjustification effect describes how expecting an external reward for an intrinsically enjoyable activity can shift the perceived reason for engaging in that activity, reducing subsequent intrinsic motivation once the reward is no longer present — exactly the pattern shown by the expected-reward group's reduced free-play drawing time.",
      walkthrough: {
        approachNotes:
          "When a study shows that an anticipated external reward for an already-enjoyed activity leads to reduced voluntary engagement in that activity afterward, identify the overjustification effect rather than straightforward reinforcement concepts.",
        steps: [
          "Note that the children already found drawing intrinsically enjoyable before the manipulation.",
          "Note the outcome: only the expected-reward group showed reduced later engagement.",
          "Recall that anticipating an external reward for an intrinsically motivated activity can undermine that intrinsic motivation.",
          "Match this pattern to the overjustification effect.",
          "Eliminate reinforcement, extinction, and latent learning, none of which correctly characterize a reward reducing subsequent voluntary engagement.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7C", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q34",
      passageId: "ps-p8",
      sectionId: "psych-soc",
      order: 33,
      stem: "In terms of self-determination theory, the expected-reward manipulation most likely reduced later intrinsic motivation by undermining which basic psychological need?",
      choices: [
        { id: "A", text: "Competence, because the certificate signaled that the children's drawings were of poor quality", explanation: "Nothing in the design implies the reward communicated a negative competence judgment about the children's drawing ability." },
        { id: "B", text: "Relatedness, because the certificate was awarded by an adult rather than a peer", explanation: "Relatedness concerns a sense of social connection, not who specifically administers a reward for task engagement." },
        { id: "C", text: "Autonomy, because anticipating an external reward for the activity shifted the children's perceived reason for drawing from personal choice to obtaining the reward", explanation: "Correct. Self-determination theory holds that anticipated external rewards can undermine a sense of autonomy by shifting the perceived locus of causality for the behavior from internal choice to external incentive." },
        { id: "D", text: "None of the three needs, because self-determination theory does not apply to children", explanation: "Self-determination theory is applied broadly across ages, including young children, and this scenario is a standard illustration of an autonomy-undermining reward." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Self-determination theory identifies autonomy, competence, and relatedness as needs that support intrinsic motivation. Anticipating a reward for an already-enjoyable activity shifts a person's perceived reason for engaging in that activity from personal choice to external incentive, undermining autonomy specifically and thereby reducing intrinsic motivation.",
      walkthrough: {
        approachNotes:
          "For self-determination theory questions about reward effects, connect anticipated external rewards specifically to autonomy (perceived locus of causality), reserving competence for skill/effectiveness signals and relatedness for social-connection signals.",
        steps: [
          "Recall the three basic needs in self-determination theory: autonomy, competence, relatedness.",
          "Identify which need is most directly implicated by an anticipated external reward shifting perceived reason for acting.",
          "Match anticipated reward to undermined autonomy, since it changes the perceived locus of causality from internal to external.",
          "Eliminate competence and relatedness, since neither is directly implicated by reward anticipation alone.",
          "Eliminate the choice claiming the theory doesn't apply to children, since the scenario is a standard application.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7C", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q35",
      passageId: "ps-p8",
      sectionId: "psych-soc",
      order: 34,
      stem: "The fact that the unexpected-reward group's drawing time (16 minutes) did not differ meaningfully from the no-reward group's (17 minutes) is best explained by which idea?",
      choices: [
        { id: "A", text: "Because the reward was not anticipated, it could not have influenced the children's perceived reason for engaging in the activity at the time they were drawing, so their sense of autonomy was preserved", explanation: "Correct. Since the reward was a surprise given only after the activity, it could not have shifted the children's perceived motive for drawing while they were doing it, leaving their intrinsic motivation intact." },
        { id: "B", text: "Because the reward was smaller in value than expected, it had no psychological impact", explanation: "The passage gives no indication that the reward differed in value between conditions, only in whether it was anticipated beforehand." },
        { id: "C", text: "Because the unexpected-reward group contained fewer participants than the other groups", explanation: "Sample size differences are not mentioned in the passage as a distinguishing factor between groups." },
        { id: "D", text: "Because unexpected rewards always increase intrinsic motivation above baseline", explanation: "The unexpected-reward group's time was statistically indistinguishable from, not higher than, the no-reward control, so this does not describe an increase above baseline." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Because the certificate in the unexpected-reward condition was given only after the drawing session, it could not have altered the children's perceived reason for engaging in the activity while they were doing it — their sense of autonomy and intrinsic motivation remained intact, matching the no-reward control group's later behavior.",
      walkthrough: {
        approachNotes:
          "When a study includes both an expected-reward and an unexpected-reward condition, and only the expected-reward group shows a motivational effect, the key explanatory principle is timing: a reward can only undermine perceived autonomy if it is anticipated during the activity itself.",
        steps: [
          "Compare the two reward groups: expected (told beforehand) versus unexpected (surprised afterward).",
          "Note that only the expected-reward group showed reduced later engagement.",
          "Recall that overjustification requires the reward to shift perceived motivation during the activity, which requires anticipation.",
          "Reason that an unanticipated reward cannot have this effect, since it is only revealed after the activity concludes.",
          "Eliminate explanations based on reward size, sample size, or a general reward-boosting effect, none of which are supported by the passage.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7C", skill: "data-based reasoning" },
      difficulty: "hard",
    },
    {
      id: "ps-q36",
      passageId: "ps-p8",
      sectionId: "psych-soc",
      order: 35,
      stem: "A college student attends every lecture in a course purely because she finds the subject matter fascinating and wants to understand it deeply, not because attendance affects her grade. Her motivation for attending is best classified as:",
      choices: [
        { id: "A", text: "Extrinsic motivation, because attendance is an external behavior", explanation: "Extrinsic versus intrinsic motivation is defined by the source of motivation (internal interest versus external reward or consequence), not by whether the resulting behavior is externally observable." },
        { id: "B", text: "Intrinsic motivation, because she engages in the behavior for its own inherent satisfaction rather than for an external reward or consequence", explanation: "Correct. Intrinsic motivation describes engaging in an activity for the inherent satisfaction it provides, exactly matching her stated reason for attending." },
        { id: "C", text: "Negative reinforcement, because she is avoiding an unpleasant consequence", explanation: "Negative reinforcement describes a behavior strengthened by the removal of an aversive stimulus, which does not match a behavior driven by inherent interest and enjoyment." },
        { id: "D", text: "Vicarious reinforcement, because she is modeling other students' behavior", explanation: "Vicarious reinforcement involves learning by observing others being reinforced, not a personally held intrinsic interest in the subject matter." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Intrinsic motivation is defined by engaging in a behavior for the inherent enjoyment or satisfaction it provides, rather than for an external reward, grade, or consequence — precisely the case for a student attending lectures purely out of genuine interest in the material.",
      walkthrough: {
        approachNotes:
          "For motivation-classification questions, ask whether the stated reason for the behavior is internal satisfaction (intrinsic) or an external reward/consequence (extrinsic), and don't be misled by choices that redefine the terms based on the behavior's visibility.",
        steps: [
          "Identify the stated reason for the behavior: personal fascination and desire to understand the material.",
          "Recall that intrinsic motivation is defined by internal satisfaction as the driver of behavior.",
          "Match the stated reason to intrinsic motivation.",
          "Eliminate extrinsic motivation, since no external reward or grade is cited as the reason.",
          "Eliminate negative reinforcement and vicarious reinforcement, neither of which matches a personally held internal interest.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7C", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q37",
      passageId: "ps-p8",
      sectionId: "psych-soc",
      order: 36,
      stem: "The two-week delay between the reward manipulation and the measurement of free-play drawing time was most likely included to:",
      choices: [
        { id: "A", text: "Allow researchers to assess whether the reward produced a lasting change in underlying motivation, rather than merely an immediate reaction to the reward itself", explanation: "Correct. Separating the manipulation from the measurement by two weeks helps rule out an immediate, short-lived reaction and instead tests whether the reward produced a more durable shift in intrinsic motivation." },
        { id: "B", text: "Give children time to forget which condition they had been assigned to, eliminating the need for random assignment", explanation: "Random assignment and the children's memory of their condition are separate issues from the rationale for delaying the outcome measurement." },
        { id: "C", text: "Ensure that all children had reached the same stage of cognitive development", explanation: "A two-week interval is far too short to produce meaningful developmental change and is not the stated rationale for the delay." },
        { id: "D", text: "Reduce the total number of observation sessions needed", explanation: "This does not address the scientific purpose of separating the manipulation from the measurement in time." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Measuring free-play drawing time two weeks after the reward manipulation, rather than immediately afterward, allows researchers to test whether the reward produced a lasting shift in intrinsic motivation rather than simply capturing a short-lived reaction to having just received or anticipated a reward.",
      walkthrough: {
        approachNotes:
          "When a study design deliberately separates a manipulation from its outcome measurement in time, consider what confound this separation avoids — commonly, a short-lived, immediate reaction versus a genuine, lasting change.",
        steps: [
          "Identify the design feature: outcome measured two weeks after the manipulation, not immediately.",
          "Consider what an immediate measurement might fail to distinguish: lasting motivational change versus temporary reaction.",
          "Recall that delayed measurement is a common strategy for testing durability of an effect.",
          "Match the delay to the goal of assessing lasting motivational change.",
          "Eliminate the choices about random assignment, cognitive development, and reducing session count, none of which reflect the actual rationale.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7C", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q38",
      passageId: "ps-p9",
      sectionId: "psych-soc",
      order: 37,
      stem: "The higher concordance rate for schizophrenia in monozygotic twins (48%) compared to dizygotic twins (17%) raised together is best interpreted as evidence for:",
      choices: [
        { id: "A", text: "A genetic contribution to schizophrenia risk, since MZ twins share a greater proportion of their genes than DZ twins", explanation: "Correct. Because MZ twins are genetically identical while DZ twins share only about half their segregating genes on average, a substantially higher MZ concordance rate under similar shared environments points to a genetic contribution to risk." },
        { id: "B", text: "A purely environmental cause of schizophrenia, since both twin types were raised in similar households", explanation: "The higher concordance specifically tracks genetic relatedness (MZ versus DZ), not shared environment, which was comparable for both twin types, arguing against a purely environmental explanation." },
        { id: "C", text: "The health selection hypothesis", explanation: "Health selection concerns disease status causing downward socioeconomic mobility, a concept unrelated to comparing twin concordance rates by genetic relatedness." },
        { id: "D", text: "A diagnostic bias in which MZ twins are more likely to be misdiagnosed together", explanation: "This speculative bias is not supported by anything in the passage and is not the standard interpretation of twin-study concordance data." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Twin studies compare concordance rates between MZ twins (who share virtually all their genes) and DZ twins (who share about half, like ordinary siblings) raised in similarly shared environments. A substantially higher MZ concordance rate, as observed here, is classic evidence for a genetic contribution to a disorder's risk.",
      walkthrough: {
        approachNotes:
          "For twin-study logic questions, remember the core comparison: MZ versus DZ twins share the same general rearing environment but differ in genetic relatedness, so a higher MZ concordance rate isolates a genetic contribution.",
        steps: [
          "Note the genetic relatedness difference: MZ twins are genetically identical, DZ twins share about half their genes.",
          "Note that both twin types were raised together, controlling for general shared environment.",
          "Observe the concordance gap: 48% (MZ) versus 17% (DZ).",
          "Recall that this pattern, holding environment roughly constant, is standard evidence for genetic contribution to risk.",
          "Eliminate the environmental, health-selection, and diagnostic-bias explanations, none of which are supported by this design.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "data-based reasoning" },
      difficulty: "easy",
    },
    {
      id: "ps-q39",
      passageId: "ps-p9",
      sectionId: "psych-soc",
      order: 38,
      stem: "The fact that MZ twin concordance for schizophrenia is only 48%, rather than 100%, despite MZ twins sharing virtually identical genomes, most directly supports which conclusion?",
      choices: [
        { id: "A", text: "Schizophrenia is entirely environmentally caused", explanation: "The substantial concordance well above the DZ rate indicates a real genetic contribution, so a purely environmental explanation is not supported." },
        { id: "B", text: "Genes alone are not sufficient to cause schizophrenia; environmental factors must also contribute, consistent with a diathesis-stress model", explanation: "Correct. Less-than-100% concordance among genetically identical twins shows that genetic risk alone does not guarantee the disorder — environmental factors must also play a causal role, consistent with the diathesis-stress model described in the passage." },
        { id: "C", text: "Schizophrenia is not heritable at all", explanation: "The elevated MZ-versus-DZ concordance gap indicates meaningful heritability, contradicting a claim of no heritability." },
        { id: "D", text: "The twin studies must contain measurement error, since concordance should always equal either 0% or 100%", explanation: "Partial concordance is the expected and interpretable result under a diathesis-stress model, not evidence of measurement error." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "If schizophrenia were caused by genetics alone, genetically identical MZ twins should show 100% concordance. The observed 48% concordance shows that genetic predisposition is not sufficient by itself, supporting a diathesis-stress model in which environmental factors must interact with genetic vulnerability to produce the disorder.",
      walkthrough: {
        approachNotes:
          "When a passage reports less-than-100% concordance in genetically identical twins for a disorder with an established genetic component, the standard interpretation is a gene-environment interaction (diathesis-stress), not a claim of zero heritability or measurement error.",
        steps: [
          "Note that MZ twins share essentially identical genomes.",
          "Note that concordance is 48%, well below 100%.",
          "Reason that if genetics alone determined the outcome, concordance would approach 100%.",
          "Conclude that environmental factors must also contribute, consistent with a diathesis-stress model.",
          "Eliminate the choices claiming purely environmental causation, no heritability, or measurement error, none of which fit this reasoning.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q40",
      passageId: "ps-p9",
      sectionId: "psych-soc",
      order: 39,
      stem: "The adoption study data are particularly useful for isolating genetic from environmental contributions to schizophrenia because they:",
      choices: [
        { id: "A", text: "Compare biological relatives who share genes but were raised in different, unrelated households, separating genetic transmission from shared rearing environment", explanation: "Correct. By comparing biological offspring of schizophrenic versus non-schizophrenic mothers who were all raised by unrelated adoptive families, the design separates the effect of genetic inheritance from the effect of being raised by a biological parent with schizophrenia." },
        { id: "B", text: "Compare only identical twins to each other", explanation: "This describes the twin study, not the adoption study, which instead compares biological offspring placed with unrelated adoptive families." },
        { id: "C", text: "Eliminate the need for a control group", explanation: "The adoption study explicitly includes a comparison group: offspring of non-schizophrenic biological mothers placed in comparable adoptive homes." },
        { id: "D", text: "Measure concordance in the same individual over time", explanation: "The adoption study compares different individuals across groups at a single point in time, not repeated measures on the same person." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Adoption studies are especially powerful for disentangling genetic from environmental influence because they compare children who share genes with a schizophrenic biological parent but were raised in an unrelated adoptive household, effectively separating genetic transmission from the shared-environment effects that confound simple family studies.",
      walkthrough: {
        approachNotes:
          "For adoption-study logic questions, focus on what is held constant (rearing environment, via unrelated adoptive placement) and what varies (biological/genetic relatedness to an affected parent), since that separation is exactly what makes the design informative about genetic contribution.",
        steps: [
          "Identify the two groups compared: offspring of schizophrenic versus non-schizophrenic biological mothers, all adopted into unrelated homes.",
          "Recognize that rearing environment is held comparable across both groups (neither raised by their biological, schizophrenic-risk parent).",
          "Recognize that genetic relatedness to an affected biological parent is the variable that differs.",
          "Conclude that any difference in outcome rates isolates a genetic contribution from shared-environment effects.",
          "Eliminate the choices describing twin comparisons, absence of a control group, or repeated measures, none of which describe this adoption design.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q41",
      passageId: "ps-p9",
      sectionId: "psych-soc",
      order: 40,
      stem: "A young man with a strong family history of schizophrenia remains free of symptoms until, following a highly traumatic combat deployment, he experiences his first psychotic episode. This case most directly illustrates:",
      choices: [
        { id: "A", text: "The social causation hypothesis", explanation: "Social causation concerns socioeconomic status causing broad health outcomes, not the specific gene-environment interaction described in this individual case." },
        { id: "B", text: "The diathesis-stress model, in which a preexisting genetic vulnerability interacts with a significant environmental stressor to trigger onset of the disorder", explanation: "Correct. This case is a textbook illustration of the diathesis-stress model: an inherited vulnerability (family history) combines with a major environmental stressor (combat trauma) to trigger the disorder's onset." },
        { id: "C", text: "Deinstitutionalization", explanation: "Deinstitutionalization refers to a policy shift moving psychiatric care out of long-term hospital settings, unrelated to the etiology of an individual's first psychotic episode." },
        { id: "D", text: "The looking-glass self", explanation: "The looking-glass self is a symbolic-interactionist concept concerning self-concept formation from perceived social judgments, not disorder etiology." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The diathesis-stress model explains how a genetically or biologically based vulnerability (diathesis) combines with a significant environmental stressor to trigger a disorder's onset — precisely the pattern in this vignette, where family history represents the diathesis and combat trauma represents the triggering stressor.",
      walkthrough: {
        approachNotes:
          "When a vignette pairs a preexisting vulnerability (family history, genetic risk) with a specific triggering stressor that precedes symptom onset, that pairing is the signature of the diathesis-stress model.",
        steps: [
          "Identify the vulnerability factor described: strong family history of schizophrenia.",
          "Identify the triggering event described: a highly traumatic combat deployment.",
          "Recall that the diathesis-stress model explains disorder onset as vulnerability plus environmental trigger.",
          "Match the two elements in the vignette to this model.",
          "Eliminate social causation, deinstitutionalization, and the looking-glass self, none of which describe a gene-environment interaction triggering onset.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q42",
      passageId: "ps-p9",
      sectionId: "psych-soc",
      order: 41,
      stem: "According to the passage, a patient with schizophrenia who shows markedly reduced facial expressiveness and speaks very little (flat affect and alogia) is exhibiting which category of symptoms?",
      choices: [
        { id: "A", text: "Positive symptoms, because they are frequently observed", explanation: "'Positive' in this context denotes an excess or distortion of normal functioning, such as hallucinations, not how frequently a symptom occurs." },
        { id: "B", text: "Negative symptoms, reflecting a diminution of normal emotional and behavioral functioning", explanation: "Correct. Flat affect and alogia represent a reduction or absence of normal functioning, matching the passage's definition of negative symptoms." },
        { id: "C", text: "Prodromal symptoms, marking the earliest phase before diagnosis", explanation: "The prodromal phase refers to a specific early time course before full diagnosis, not the positive/negative distinction based on excess versus deficit of function." },
        { id: "D", text: "Residual symptoms, occurring only after full remission", explanation: "Residual symptoms is a temporal/diagnostic classification distinct from the positive/negative symptom-type distinction the passage describes." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage defines negative symptoms as reflecting a diminution of normal functioning, such as flat affect, avolition, and social withdrawal — directly matching reduced facial expressiveness and minimal speech, as opposed to positive symptoms, which reflect an excess or distortion of normal functioning.",
      walkthrough: {
        approachNotes:
          "For schizophrenia symptom-classification questions, sort each described symptom into 'excess/distortion of normal function' (positive) versus 'deficit/absence of normal function' (negative) rather than relying on the everyday connotations of 'positive' and 'negative.'",
        steps: [
          "Identify the described symptoms: reduced facial expressiveness (flat affect) and minimal speech (alogia).",
          "Recall the passage's definitions: positive symptoms are an excess/distortion of function, negative symptoms are a diminution of function.",
          "Classify reduced expressiveness and speech as reflecting a deficit, not an excess, of normal functioning.",
          "Match this deficit pattern to negative symptoms.",
          "Eliminate positive, prodromal, and residual, none of which correctly categorize this deficit-based symptom pattern.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q43",
      passageId: "ps-p10",
      sectionId: "psych-soc",
      order: 42,
      stem: "According to the data, population growth rate is highest during Stage 2 primarily because:",
      choices: [
        { id: "A", text: "Both birth rate and death rate are at their lowest levels", explanation: "This describes Stage 4, which has the lowest growth rate among the four stages, not Stage 2, which has the highest." },
        { id: "B", text: "The death rate has fallen substantially while the birth rate remains high, producing a large gap between births and deaths", explanation: "Correct. In Stage 2, CDR drops sharply (from 33 to 15) while CBR remains high (34), producing the largest gap between birth and death rates and thus the highest growth rate among the four stages." },
        { id: "C", text: "The birth rate has fallen while the death rate remains high", explanation: "This describes the reverse of the actual Stage 2 pattern, in which the death rate falls while the birth rate remains high." },
        { id: "D", text: "Both birth rate and death rate rose simultaneously", explanation: "The data show the death rate falling, not rising, during Stage 2, so this does not match the described pattern." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Population growth rate is driven by the gap between the birth rate and the death rate. Stage 2 shows the largest such gap in the dataset, because death rates have already fallen sharply due to improved sanitation and medicine, while birth rates have not yet begun their later decline — producing the demographic transition model's characteristic 'population explosion' stage.",
      walkthrough: {
        approachNotes:
          "For demographic transition data questions, calculate the CBR-minus-CDR gap for each stage before evaluating choices, since growth rate is directly driven by the size of that gap, not by the absolute level of either rate alone.",
        steps: [
          "Calculate the CBR-CDR gap for each stage: Stage 1 (2), Stage 2 (19), Stage 3 (9), Stage 4 (1).",
          "Identify Stage 2 as having by far the largest gap.",
          "Recall that growth rate tracks the size of this birth-death gap.",
          "Match the large Stage 2 gap to a high death rate decline paired with a still-high birth rate.",
          "Eliminate choices describing low rates for both, a falling birth rate, or a rising death rate, none of which match the Stage 2 data.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8C", skill: "data-based reasoning" },
      difficulty: "easy",
    },
    {
      id: "ps-q44",
      passageId: "ps-p10",
      sectionId: "psych-soc",
      order: 43,
      stem: "Based on the instructor's explanation, which factor is most directly responsible for the Stage 3 decline in birth rate?",
      choices: [
        { id: "A", text: "Improved sanitation and food supply", explanation: "These factors are specifically credited with the Stage 2 decline in death rate, not the later Stage 3 decline in birth rate." },
        { id: "B", text: "Increased access to education and employment for women, along with wider contraceptive availability, reducing the economic incentive for large families", explanation: "Correct. The instructor attributes the Stage 3 fertility decline to this cluster of social changes accompanying urbanization and industrialization." },
        { id: "C", text: "A sudden increase in the death rate that mechanically lowered population growth", explanation: "The data show the death rate continuing to fall (from 15 to 9) across Stage 3, not rising, so this does not match the explanation given." },
        { id: "D", text: "Government-mandated limits on family size", explanation: "This mechanism is not mentioned anywhere in the passage's explanation of the Stage 3 birth-rate decline." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage attributes the Stage 3 decline in birth rate to social changes accompanying urbanization and industrialization: greater educational and employment opportunities for women, rising costs of raising children in cities, and wider contraceptive access — distinct from the earlier, separate mechanism (sanitation and medicine) driving the Stage 2 death-rate decline.",
      walkthrough: {
        approachNotes:
          "When a demographic transition passage explains two separate mechanisms for two separate stages (death-rate decline versus birth-rate decline), keep the mechanism tied to its correct stage rather than swapping them.",
        steps: [
          "Identify which stage and which rate the question asks about: Stage 3, birth-rate decline.",
          "Recall the instructor's stated mechanism for this specific change: women's education/employment, urban child-rearing costs, contraceptive access.",
          "Distinguish this from the separate mechanism (sanitation, medicine) explaining the earlier Stage 2 death-rate decline.",
          "Match the correct mechanism to Stage 3 birth-rate decline.",
          "Eliminate the death-rate-focused, unsupported, and unmentioned-mechanism choices.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8C", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q45",
      passageId: "ps-p10",
      sectionId: "psych-soc",
      order: 44,
      stem: "The instructor's explanation that raising children becomes economically costly rather than economically advantageous as a society urbanizes and industrializes reflects which sociological perspective on the family as a social institution?",
      choices: [
        { id: "A", text: "The functionalist perspective, which examines how the family's economic and social functions shift to maintain the equilibrium of the broader society as conditions change", explanation: "Correct. Explaining how the family's economic function (the value of children as labor or economic assets) shifts alongside broader societal change is characteristic of the functionalist perspective on social institutions." },
        { id: "B", text: "The symbolic interactionist perspective, which focuses on the meanings individuals attach to face-to-face interactions", explanation: "This micro-level perspective centers on individual meaning-making in interactions, not on how an institution's broad societal function shifts with economic development." },
        { id: "C", text: "The conflict perspective, which centers explanations on competition between social classes for scarce resources", explanation: "The explanation given centers on the changing economic function of the family within society as a whole, not on class-based competition for resources." },
        { id: "D", text: "Social exchange theory, which analyzes relationships as governed by a cost-benefit calculation between two individuals", explanation: "Social exchange theory operates at the level of individual relationships between two people, not the institution-level functional shift the instructor describes." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The functionalist perspective examines how social institutions like the family serve functions that help society operate smoothly, and how those functions shift as broader conditions change. Explaining the changing economic role of children (from an asset to a cost) as society industrializes is a textbook functionalist-style institutional analysis.",
      walkthrough: {
        approachNotes:
          "When a sociological explanation focuses on how an institution's function within society shifts alongside broader economic or social change, match it to functionalism, and reserve conflict theory for explanations centered on power/class competition and symbolic interactionism for micro-level meaning-making.",
        steps: [
          "Identify the level of analysis: the family institution's broad economic role in society.",
          "Note that the explanation concerns a functional shift (children as economic asset to economic cost) tied to societal development.",
          "Recall that functionalism examines shifts in an institution's societal function as conditions change.",
          "Match the explanation to functionalism.",
          "Eliminate symbolic interactionism (micro-level meaning), conflict theory (class competition), and social exchange theory (individual relationship cost-benefit), none of which match this institutional-level functional explanation.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8A", skill: "concept application" },
      difficulty: "hard",
    },
    {
      id: "ps-q46",
      passageId: "ps-p10",
      sectionId: "psych-soc",
      order: 45,
      stem: "Based on the Stage 2 data (CBR 34, CDR 15), a population pyramid for a Stage 2 society would most likely show:",
      choices: [
        { id: "A", text: "A narrow base and a wide top, reflecting few young people and many elderly people", explanation: "A narrow base would indicate a low birth rate, which contradicts the high CBR of 34 reported for Stage 2." },
        { id: "B", text: "A roughly equal number of people in every age group, forming a rectangular shape", explanation: "A rectangular pyramid reflects low, stable birth and death rates typical of Stage 4, not the high-birth-rate pattern of Stage 2." },
        { id: "C", text: "A wide base that narrows only gradually moving up the age groups, reflecting a high birth rate and a growing share of young people relative to older people", explanation: "Correct. A high CBR with a declining CDR produces a large, rapidly growing young population, which appears as a wide-based, pyramid-shaped age structure." },
        { id: "D", text: "A wide top and a narrow base, reflecting an aging population", explanation: "This pattern would require a low birth rate, which contradicts the high CBR reported for Stage 2." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "A high birth rate combined with a falling death rate, as in Stage 2, produces rapid growth concentrated in the youngest age groups, which shows up on a population pyramid as a wide base that narrows gradually moving upward — the classic expanding-population pyramid shape.",
      walkthrough: {
        approachNotes:
          "To infer a population pyramid shape from birth/death rate data, connect a high birth rate to a wide base and a low birth rate to a narrow base, then connect overall growth rate to how sharply the pyramid narrows moving up through older age groups.",
        steps: [
          "Note the Stage 2 data: high CBR (34) and declining CDR (15).",
          "Recall that a high birth rate produces a large youngest age cohort, appearing as a wide pyramid base.",
          "Recall that rapid growth produces a gradually narrowing (rather than abruptly narrowing or rectangular) shape moving up the age groups.",
          "Match this reasoning to the wide-base, gradually narrowing pyramid choice.",
          "Eliminate the narrow-base and rectangular choices, both of which require a low birth rate inconsistent with the Stage 2 data.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8C", skill: "data-based reasoning" },
      difficulty: "medium",
    },
    {
      id: "ps-q47",
      passageId: "ps-p10",
      sectionId: "psych-soc",
      order: 46,
      stem: "The instructor's caution that the demographic transition model may not perfectly predict the trajectory of every developing nation today most directly illustrates which limitation of the model?",
      choices: [
        { id: "A", text: "It was derived from a specific historical context (Western industrialization) and may not generalize perfectly to societies industrializing under different technological and cultural conditions", explanation: "Correct. The instructor explicitly grounds this caution in the model's origin from Western European and North American industrialization, noting that differing technology transfer speed and cultural context can alter the trajectory elsewhere." },
        { id: "B", text: "It cannot be applied to any society outside of Europe", explanation: "This overstates the limitation; the model is still commonly applied more broadly, just with caution about the precision of fit, not blanket inapplicability." },
        { id: "C", text: "It has never been tested against real population data", explanation: "The model was explicitly derived from and illustrated using real historical birth- and death-rate data, contradicting this claim." },
        { id: "D", text: "It applies only to birth rates and provides no information about death rates", explanation: "The model explicitly tracks both birth rates and death rates across all four stages, contradicting this claim." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "A key limitation of the demographic transition model is that it was built from the historical experience of Western industrialization, so applying it to predict outcomes in nations industrializing under different technological, economic, and cultural conditions today may not hold with the same precision — exactly the caution raised by the instructor.",
      walkthrough: {
        approachNotes:
          "For questions asking about a stated limitation of a sociological model, connect the caution directly to the model's origin or scope as described in the passage, rather than choosing an overly broad or unsupported version of the critique.",
        steps: [
          "Identify the specific caution raised: the model may not perfectly predict every developing nation's trajectory today.",
          "Recall the passage's stated reason: the model was derived from Western industrialization history.",
          "Match the caution to a limitation about generalizing beyond the original historical context.",
          "Eliminate the overstated claim that the model is inapplicable outside Europe entirely.",
          "Eliminate claims that the model lacks empirical grounding or ignores death rates, both contradicted by the passage.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8C", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q48",
      passageId: null,
      sectionId: "psych-soc",
      order: 47,
      stem: "After a coworker snaps angrily during a meeting, an observer concludes that the coworker 'must just be a hostile, short-tempered person,' without considering that the coworker had just received distressing personal news that morning. This judgment illustrates:",
      choices: [
        { id: "A", text: "The fundamental attribution error, an overemphasis on dispositional (personality-based) explanations for another person's behavior relative to situational explanations", explanation: "Correct. The observer attributes the coworker's outburst entirely to a stable personality trait while ignoring an obvious situational cause, the defining pattern of the fundamental attribution error." },
        { id: "B", text: "The actor-observer bias in its self-referential direction, where the observer attributes their own behavior to the situation", explanation: "This scenario describes judging someone else's behavior, not the observer's own behavior, so the self-referential half of actor-observer bias is not what's illustrated here." },
        { id: "C", text: "The self-serving bias, in which successes are attributed internally and failures externally", explanation: "Self-serving bias concerns attributions people make about their own outcomes, not judgments made about another person's behavior." },
        { id: "D", text: "Learned helplessness, a state of passivity following repeated uncontrollable negative events", explanation: "Learned helplessness describes a motivational deficit following repeated lack of control, unrelated to explaining a single instance of someone else's behavior." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The fundamental attribution error describes the common tendency to overweight dispositional (personality) explanations and underweight situational explanations when interpreting other people's behavior. Concluding a coworker is simply 'hostile' while ignoring that morning's distressing news is a clear example of this bias.",
      walkthrough: {
        approachNotes:
          "For attribution questions, first identify whether the explanation given is dispositional (about the person's character) or situational (about their circumstances), and check whether an obvious situational factor was ignored — that combination signals the fundamental attribution error.",
        steps: [
          "Identify the explanation the observer settled on: a stable personality trait ('hostile, short-tempered').",
          "Identify the situational factor available but ignored: distressing personal news that morning.",
          "Recall that overweighting dispositional explanations while discounting situational ones defines the fundamental attribution error.",
          "Match the scenario to this bias.",
          "Eliminate actor-observer bias, self-serving bias, and learned helplessness, none of which fit a single dispositional judgment about another person's one-time behavior.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q49",
      passageId: null,
      sectionId: "psych-soc",
      order: 48,
      stem: "A longtime smoker who is well aware of the serious health risks of smoking begins telling herself that 'the stress relief from smoking probably offsets most of the health risk anyway.' This shift in belief is best explained by:",
      choices: [
        { id: "A", text: "Classical conditioning, since the belief change was triggered by pairing two neutral stimuli", explanation: "No pairing of two neutral stimuli is described; the belief shift instead reflects reasoning about a conflict between an existing belief and ongoing behavior." },
        { id: "B", text: "Cognitive dissonance reduction, in which she adjusts a belief to reduce the psychological discomfort caused by the inconsistency between her behavior (smoking) and her prior belief (smoking is harmful)", explanation: "Correct. Generating a new belief that minimizes the perceived harm of smoking is a classic way of resolving the discomfort caused by inconsistency between behavior and existing beliefs, the defining pattern of cognitive dissonance reduction." },
        { id: "C", text: "Stimulus discrimination, since she is learning to distinguish smoking from other harmful behaviors", explanation: "Stimulus discrimination involves learning to respond differently to distinct stimuli, not reconciling a behavior with a conflicting personal belief." },
        { id: "D", text: "The mere exposure effect, in which repeated exposure to smoking increased her liking for it", explanation: "The mere exposure effect describes increased liking purely from repeated neutral exposure, not a motivated belief change aimed at reducing psychological discomfort." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Cognitive dissonance theory holds that people are motivated to reduce the psychological discomfort created by holding inconsistent beliefs and behaviors, often by adjusting one of the beliefs. Rationalizing that stress relief offsets health risk allows the smoker to reduce the dissonance between knowing smoking is harmful and continuing to smoke.",
      walkthrough: {
        approachNotes:
          "For cognitive dissonance questions, look for a behavior that conflicts with a known belief, followed by the person generating a new justification that makes the behavior seem more acceptable — that justification-generation pattern is the signature of dissonance reduction.",
        steps: [
          "Identify the existing belief: smoking is seriously harmful to health.",
          "Identify the conflicting ongoing behavior: continuing to smoke.",
          "Note the new rationalization generated: stress relief offsets the health risk.",
          "Recall that generating a justifying belief to resolve behavior-belief conflict defines cognitive dissonance reduction.",
          "Eliminate classical conditioning, stimulus discrimination, and mere exposure, none of which describe resolving a belief-behavior conflict.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7A", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q50",
      passageId: null,
      sectionId: "psych-soc",
      order: 49,
      stem: "A 16-year-old is actively trying out different friend groups, hobbies, and possible career interests in an effort to figure out 'who she really is.' According to Erikson's theory of psychosocial development, she is in the midst of the crisis characteristic of which stage?",
      choices: [
        { id: "A", text: "Trust versus mistrust", explanation: "This is Erikson's infancy-stage crisis, concerned with developing basic trust in caregivers, not adolescent identity exploration." },
        { id: "B", text: "Industry versus inferiority", explanation: "This is Erikson's middle-childhood-stage crisis, concerned with developing competence through mastering skills, not exploring identity." },
        { id: "C", text: "Identity versus role confusion", explanation: "Correct. This is Erikson's adolescent-stage crisis, in which individuals explore different roles, values, and social groups in order to form a coherent sense of identity." },
        { id: "D", text: "Generativity versus stagnation", explanation: "This is Erikson's middle-adulthood-stage crisis, concerned with contributing to future generations, not adolescent self-exploration." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Erikson's identity versus role confusion stage, typically spanning adolescence, centers on exploring different roles, values, and affiliations in order to consolidate a coherent sense of personal identity — precisely the process described in this 16-year-old's exploration of friend groups, hobbies, and career interests.",
      walkthrough: {
        approachNotes:
          "For Erikson's-stages questions, match the age given in the vignette to its corresponding crisis, then confirm that the described behavior fits that crisis's central theme (trust, competence, identity, generativity, etc.).",
        steps: [
          "Note the age given: 16 years old, placing her in adolescence.",
          "Note the described behavior: exploring roles, groups, and interests to determine 'who she really is.'",
          "Recall that Erikson's adolescent-stage crisis is identity versus role confusion.",
          "Match the behavior and age to this stage.",
          "Eliminate the infancy, middle-childhood, and middle-adulthood stages, none of which match this age or behavior.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q51",
      passageId: null,
      sectionId: "psych-soc",
      order: 50,
      stem: "A slot machine pays out after an unpredictable number of lever pulls, averaging one payout per 20 pulls but varying widely from one payout to the next. This reinforcement schedule, known for producing high, steady rates of responding that are highly resistant to extinction, is a:",
      choices: [
        { id: "A", text: "Fixed-ratio schedule", explanation: "A fixed-ratio schedule delivers reinforcement after a constant, predictable number of responses, not a varying, unpredictable number." },
        { id: "B", text: "Fixed-interval schedule", explanation: "A fixed-interval schedule delivers reinforcement after a constant amount of time has passed, not after a number of responses at all." },
        { id: "C", text: "Variable-interval schedule", explanation: "A variable-interval schedule delivers reinforcement after unpredictable amounts of time, not after an unpredictable number of responses." },
        { id: "D", text: "Variable-ratio schedule", explanation: "Correct. A variable-ratio schedule delivers reinforcement after an unpredictable number of responses averaging around a set value, producing the high, steady, extinction-resistant responding characteristic of slot machines." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "A variable-ratio schedule reinforces behavior after an unpredictable number of responses centered on some average, which produces high and steady response rates and unusually strong resistance to extinction — the classic explanation for the persistence of slot-machine gambling behavior.",
      walkthrough: {
        approachNotes:
          "For reinforcement-schedule questions, separate the two dimensions independently: ratio (based on number of responses) versus interval (based on elapsed time), and fixed (constant, predictable) versus variable (unpredictable, averaging around a value).",
        steps: [
          "Determine what triggers reinforcement: a number of lever pulls (responses), not elapsed time — ruling out interval schedules.",
          "Determine whether that number is constant or unpredictable: unpredictable, varying around an average of 20 — indicating 'variable,' not 'fixed.'",
          "Combine these two features: variable-ratio schedule.",
          "Recall that variable-ratio schedules are associated with high, steady responding and strong resistance to extinction.",
          "Eliminate fixed-ratio, fixed-interval, and variable-interval, none of which match an unpredictable number-of-responses trigger.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q52",
      passageId: null,
      sectionId: "psych-soc",
      order: 51,
      stem: "A patient with Parkinson's disease has progressive loss of dopamine-producing neurons in the substantia nigra. Which of the following best describes the primary neurotransmitter-related consequence of this cell loss?",
      choices: [
        { id: "A", text: "Excess dopamine signaling in the mesolimbic reward pathway, producing heightened motivation", explanation: "The neuron loss described produces a deficit, not an excess, of dopamine, and Parkinson's disease is characterized by motor symptoms rather than heightened reward-pathway motivation." },
        { id: "B", text: "Reduced dopamine availability, contributing to the motor symptoms (tremor, rigidity, bradykinesia) characteristic of Parkinson's disease", explanation: "Correct. Loss of dopaminergic neurons in the substantia nigra reduces dopamine available to motor circuits, directly producing the characteristic tremor, rigidity, and slowed movement of Parkinson's disease." },
        { id: "C", text: "Increased serotonin release that fully compensates for the loss of dopaminergic neurons", explanation: "The scenario describes a dopamine-specific pathology, and serotonin does not substitute for dopamine's distinct role in motor control." },
        { id: "D", text: "A selective loss of GABA receptors throughout the cortex", explanation: "The described pathology is loss of dopamine-producing neurons in the substantia nigra, not a cortex-wide loss of GABA receptors." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The substantia nigra supplies dopamine to motor circuits in the basal ganglia; progressive loss of these dopaminergic neurons, as occurs in Parkinson's disease, reduces available dopamine and directly produces the disorder's characteristic motor symptoms of tremor, rigidity, and bradykinesia.",
      walkthrough: {
        approachNotes:
          "For neurotransmitter-and-disorder questions, connect the specific neuron population and neurotransmitter named in the vignette directly to its well-established downstream functional consequence, rather than considering unrelated neurotransmitter systems.",
        steps: [
          "Identify the affected neurons: dopamine-producing neurons in the substantia nigra.",
          "Recall the normal role of these neurons: supplying dopamine to motor control circuits.",
          "Reason that their progressive loss reduces dopamine availability to these circuits.",
          "Connect reduced dopamine availability to the classic Parkinson's motor symptoms.",
          "Eliminate choices describing excess dopamine, serotonin compensation, or an unrelated GABA receptor loss.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q53",
      passageId: null,
      sectionId: "psych-soc",
      order: 52,
      stem: "A designer arranges a series of dots so that dots close together in space are automatically perceived by viewers as belonging to a single group, distinct from dots that are farther apart. This organizing tendency is an example of the Gestalt principle of:",
      choices: [
        { id: "A", text: "Similarity", explanation: "Similarity groups elements that share visual features like shape or color, not elements grouped specifically by spatial closeness." },
        { id: "B", text: "Proximity", explanation: "Correct. Proximity is the Gestalt principle describing the tendency to perceive objects that are close together in space as belonging to the same group." },
        { id: "C", text: "Closure", explanation: "Closure describes the tendency to perceive an incomplete figure as a complete whole, not grouping elements based on spatial distance." },
        { id: "D", text: "Continuity", explanation: "Continuity describes the tendency to perceive smooth, continuous lines or patterns rather than abrupt changes, not grouping by nearness." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The Gestalt principle of proximity holds that elements positioned close together in space are automatically perceived as belonging to a single group, distinct from similarity (grouping by shared features), closure (perceiving incomplete figures as whole), and continuity (perceiving smooth, continuous patterns).",
      walkthrough: {
        approachNotes:
          "For Gestalt-principle questions, identify the specific visual cue driving the grouping (spatial closeness, shared features, implied completion, or smooth continuation) and match it precisely to its named principle.",
        steps: [
          "Identify the visual cue described: spatial closeness between dots.",
          "Recall that proximity is defined as grouping based on spatial closeness.",
          "Match the described cue to proximity.",
          "Eliminate similarity (shared features), closure (perceived completion), and continuity (smooth continuation), none of which describe grouping by distance.",
        ],
      },
      category: { foundationalConcept: "FC6", contentCategory: "6A", skill: "knowledge recall" },
      difficulty: "easy",
    },
    {
      id: "ps-q54",
      passageId: null,
      sectionId: "psych-soc",
      order: 53,
      stem: "According to George Herbert Mead's theory of the social self, a child's ability to imagine and internalize the combined expectations and attitudes of society as a whole, rather than just those of one specific person, reflects the development of the:",
      choices: [
        { id: "A", text: "Looking-glass self", explanation: "The looking-glass self is Cooley's concept, describing self-concept formed from imagining how specific others perceive and judge oneself, not the internalized attitudes of society broadly." },
        { id: "B", text: "Id", explanation: "The id is a psychoanalytic structure representing primitive drives, unrelated to Mead's sociological theory of self-development." },
        { id: "C", text: "Generalized other", explanation: "Correct. Mead's concept of the generalized other describes the internalized sense of the attitudes and expectations of society as a whole, developed as children mature beyond taking the perspective of specific individuals." },
        { id: "D", text: "False consciousness", explanation: "False consciousness is a Marxist concept describing a subordinate class's failure to recognize its own exploitation, unrelated to Mead's account of self-development." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Mead's concept of the generalized other describes a developmental milestone in which a child moves beyond taking the perspective of specific individuals (a parent, a playmate) to internalizing the combined attitudes and expectations of society or a broader social group as a whole, guiding self-regulation of behavior.",
      walkthrough: {
        approachNotes:
          "For symbolic-interactionist self-development questions, distinguish Mead's generalized other (society's combined perspective) from Cooley's looking-glass self (imagined judgment of specific others) — both concern the social construction of self but at different scopes.",
        steps: [
          "Identify the key feature described: internalizing the combined expectations of society as a whole, not one specific person.",
          "Recall Mead's concept of the generalized other as matching this broader, societal-level internalization.",
          "Distinguish this from Cooley's looking-glass self, which concerns imagining specific others' judgments.",
          "Eliminate the id and false consciousness, neither of which is a sociological concept of self-development matching this description.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8A", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q55",
      passageId: null,
      sectionId: "psych-soc",
      order: 54,
      stem: "An anthropologist studying a foreign culture's marriage customs makes a deliberate effort to understand those customs on their own terms, within their own cultural context, rather than judging them against the standards of her own culture. This approach reflects:",
      choices: [
        { id: "A", text: "Ethnocentrism, judging another culture by the standards of one's own", explanation: "This is the opposite of the deliberate, non-judgmental approach the anthropologist is described as taking." },
        { id: "B", text: "Cultural relativism, evaluating a culture's practices within its own context rather than by an external standard", explanation: "Correct. Cultural relativism is the deliberate practice of understanding and evaluating a culture's practices on its own terms, exactly matching the anthropologist's approach." },
        { id: "C", text: "Assimilation, the process by which a minority group adopts the customs of a dominant culture", explanation: "Assimilation describes a group adopting another culture's practices, not a researcher's interpretive stance toward a culture she is studying." },
        { id: "D", text: "Xenocentrism, the belief that another culture is inherently superior to one's own", explanation: "Xenocentrism specifically involves preferring another culture as superior, not neutrally interpreting it on its own terms without judgment either way." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Cultural relativism is the deliberate practice of understanding and evaluating a culture's beliefs and practices within their own cultural context, rather than judging them against an outside standard — precisely the interpretive stance the anthropologist adopts toward the marriage customs she studies.",
      walkthrough: {
        approachNotes:
          "For culture-concept questions, determine whether the described stance judges another culture by one's own standards (ethnocentrism), views another culture as superior (xenocentrism), or evaluates a culture on its own terms (cultural relativism).",
        steps: [
          "Identify the described stance: understanding customs within their own cultural context, without judging by outside standards.",
          "Recall that cultural relativism is defined as exactly this non-judgmental, context-based evaluation.",
          "Match the stance to cultural relativism.",
          "Eliminate ethnocentrism (judging by one's own standards) and xenocentrism (viewing another culture as superior), both of which involve a value judgment the anthropologist is avoiding.",
          "Eliminate assimilation, which describes a different phenomenon (adoption of another culture's practices by a group), not an observer's interpretive stance.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8C", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q56",
      passageId: null,
      sectionId: "psych-soc",
      order: 55,
      stem: "A sociologist argues that public schooling primarily exists to sort students into future occupational roles that keep the broader economy and social order functioning smoothly, teaching both academic skills and shared cultural norms. This argument reflects which theoretical perspective on education as a social institution?",
      choices: [
        { id: "A", text: "Conflict theory, which would instead emphasize that schooling reproduces existing class inequalities across generations", explanation: "The argument as described emphasizes schooling's contribution to overall social stability and functioning, not the reproduction of class-based inequality that conflict theory would highlight." },
        { id: "B", text: "Functionalism, which emphasizes how social institutions like education contribute to the stability and smooth operation of society", explanation: "Correct. Explaining schooling's role in sorting students into occupational roles and transmitting shared norms to keep society functioning smoothly is a textbook functionalist analysis of education." },
        { id: "C", text: "Symbolic interactionism, which emphasizes micro-level meaning-making in classroom interactions", explanation: "The argument concerns education's broad societal role, not the small-scale interpersonal meanings exchanged within a single classroom." },
        { id: "D", text: "Feminist theory, which emphasizes how gender shapes and is shaped by social institutions", explanation: "The argument as described makes no reference to gender, focusing instead on education's role in broader social and economic stability." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Functionalism analyzes social institutions, including education, in terms of the functions they serve in maintaining social stability — here, sorting students into occupational roles and transmitting shared cultural norms, both of which keep the broader social and economic system operating smoothly.",
      walkthrough: {
        approachNotes:
          "For sociological-perspective questions on an institution, identify the underlying emphasis: societal stability and function points to functionalism, power and inequality points to conflict theory, micro-level meaning points to symbolic interactionism.",
        steps: [
          "Identify the core claim: schooling functions to sort students and maintain smooth societal operation.",
          "Recall that functionalism examines how institutions contribute to overall social stability.",
          "Match the claim's emphasis on societal function to functionalism.",
          "Eliminate conflict theory, since the argument does not emphasize class-based inequality reproduction.",
          "Eliminate symbolic interactionism and feminist theory, neither of which matches the argument's macro-level, function-oriented focus.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8A", skill: "concept application" },
      difficulty: "medium",
    },
    {
      id: "ps-q57",
      passageId: null,
      sectionId: "psych-soc",
      order: 56,
      stem: "A rural county has only one primary care clinic for 40,000 residents, while a nearby urban county of similar population has over twenty clinics. Residents of the rural county have measurably worse chronic disease outcomes. This pattern most directly illustrates the concept of:",
      choices: [
        { id: "A", text: "Health disparities driven by unequal access to health-care resources", explanation: "Correct. A measurable gap in health outcomes tied directly to unequal availability of health-care infrastructure between two comparably sized populations is a direct illustration of a health disparity rooted in unequal access." },
        { id: "B", text: "The health selection hypothesis", explanation: "Health selection concerns individuals' health status causing their socioeconomic mobility over time, not a geographic difference in the density of available health-care infrastructure." },
        { id: "C", text: "The hidden curriculum", explanation: "The hidden curriculum is an education-sociology concept about implicitly taught social norms in schools, unrelated to clinic access or health outcomes." },
        { id: "D", text: "Cultural capital", explanation: "Cultural capital refers to non-financial social assets, such as education and knowledge, that promote social mobility, not the physical availability of health-care facilities in a region." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "Health disparities describe measurable differences in health outcomes linked to social, economic, or geographic disadvantage. A rural county with far fewer clinics per capita than a comparable urban county, and correspondingly worse chronic disease outcomes, is a direct illustration of a disparity driven by unequal access to health-care resources.",
      walkthrough: {
        approachNotes:
          "For health-disparity questions, look for a measurable outcome gap tied to an identifiable structural or resource difference (access, income, education) between comparable populations, and match that pattern to 'health disparity' rather than to unrelated sociological terms that merely sound related.",
        steps: [
          "Identify the resource gap: one clinic per 40,000 residents in the rural county versus over twenty clinics in the comparable urban county.",
          "Identify the outcome gap: measurably worse chronic disease outcomes in the rural county.",
          "Recall that a measurable health-outcome gap tied to unequal resource access defines a health disparity.",
          "Match the scenario to this concept.",
          "Eliminate health selection, the hidden curriculum, and cultural capital, none of which describe a resource-access-driven health-outcome gap.",
        ],
      },
      category: { foundationalConcept: "FC8", contentCategory: "8B", skill: "concept application" },
      difficulty: "easy",
    },
    {
      id: "ps-q58",
      passageId: null,
      sectionId: "psych-soc",
      order: 57,
      stem: "An employee who is consistently organized, dependable, and disciplined in completing tasks, and who plans carefully before acting, would score highest on which dimension of the Five Factor (Big Five) personality model?",
      choices: [
        { id: "A", text: "Openness to experience", explanation: "Openness reflects curiosity and a preference for novelty and variety, not organization and dependability in completing tasks." },
        { id: "B", text: "Neuroticism", explanation: "Neuroticism reflects emotional instability and a tendency toward negative emotion, not disciplined, organized task completion." },
        { id: "C", text: "Conscientiousness", explanation: "Correct. Conscientiousness is the Big Five dimension defined by organization, dependability, self-discipline, and careful planning, exactly matching the described employee." },
        { id: "D", text: "Agreeableness", explanation: "Agreeableness reflects cooperativeness and warmth toward others, not a person's organization or discipline in completing tasks." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Conscientiousness is the Big Five personality dimension defined by organization, dependability, self-discipline, and careful, deliberate planning — precisely the traits described in this employee, distinguishing it from openness, neuroticism, and agreeableness, which capture different aspects of personality.",
      walkthrough: {
        approachNotes:
          "For Big Five trait-identification questions, match the specific behaviors described in the vignette to the trait's core definition rather than to a superficially similar-sounding trait.",
        steps: [
          "List the described traits: organized, dependable, disciplined, plans carefully.",
          "Recall the definition of conscientiousness: organization, dependability, self-discipline, deliberate planning.",
          "Match the described traits to conscientiousness.",
          "Eliminate openness (curiosity/novelty), neuroticism (emotional instability), and agreeableness (cooperativeness/warmth), none of which describe organization or discipline.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7B", skill: "knowledge recall" },
      difficulty: "easy",
    },
    {
      id: "ps-q59",
      passageId: null,
      sectionId: "psych-soc",
      order: 58,
      stem: "A student who is overwhelmed by a heavy course load responds by making a detailed study schedule, dropping one elective course, and meeting with a tutor twice a week. This response is best classified as:",
      choices: [
        { id: "A", text: "Emotion-focused coping, aimed at reducing the distress caused by the stressor without changing the stressor itself", explanation: "The student is directly altering the source of stress (the course load itself) rather than only managing her emotional reaction to it, so this is not emotion-focused coping." },
        { id: "B", text: "Problem-focused coping, aimed at directly addressing and reducing the stressor itself", explanation: "Correct. Making a study schedule, dropping a course, and getting tutoring are all concrete actions aimed at directly reducing the academic stressor itself, the defining feature of problem-focused coping." },
        { id: "C", text: "Repression, an unconscious defense mechanism that pushes distressing thoughts out of awareness", explanation: "The student's response is a conscious, deliberate, active strategy, not an unconscious defense mechanism that hides distressing thoughts from awareness." },
        { id: "D", text: "Learned helplessness, a passive response reflecting a perceived lack of control over the stressor", explanation: "The student is taking active, effective steps to change her situation, the opposite of the passivity that defines learned helplessness." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Problem-focused coping involves taking direct, active steps to address and reduce a stressor itself, as opposed to emotion-focused coping, which manages the emotional reaction to a stressor without changing it. Scheduling, dropping a course, and seeking tutoring are all concrete actions targeting the academic stressor directly.",
      walkthrough: {
        approachNotes:
          "For coping-strategy questions, ask whether the response targets the stressor itself (problem-focused) or targets the person's emotional reaction to the stressor (emotion-focused), then check that the response is active and deliberate rather than passive or unconscious.",
        steps: [
          "List the student's actions: study schedule, dropping a course, tutoring sessions.",
          "Note that each action directly reduces the academic workload or improves her ability to manage it.",
          "Recall that actions targeting the stressor itself define problem-focused coping.",
          "Match the student's actions to problem-focused coping.",
          "Eliminate emotion-focused coping, repression, and learned helplessness, none of which describe active, deliberate steps aimed at the stressor itself.",
        ],
      },
      category: { foundationalConcept: "FC7", contentCategory: "7C", skill: "concept application" },
      difficulty: "medium",
    },
  ],
};

export default psychSocContent;
