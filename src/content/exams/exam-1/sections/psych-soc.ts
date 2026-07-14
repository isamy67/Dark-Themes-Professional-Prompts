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
  ],
};

export default psychSocContent;
