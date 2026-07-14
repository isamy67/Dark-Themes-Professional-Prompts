import type { SectionContent } from "@/lib/types";

/**
 * Full ~10-question CARS starter set: three original passages (humanities,
 * art history, and social science) spanning all three AAMC CARS skill
 * categories.
 */
const carsContent: SectionContent = {
  sectionId: "cars",
  passages: [
    {
      id: "cars-p1",
      sectionId: "cars",
      order: 0,
      kind: "passage",
      title: "On the Uses of Forgetting",
      bodyMarkdown: `Historians of science have long treated forgetting as a failure of the archive: a document lost, a technique untransmitted, a discovery rediscovered a generation later at needless cost. This framing is not wrong, exactly, but it is incomplete. It assumes that the value of knowledge is self-evident at the moment of its creation, and that any subsequent loss represents pure subtraction. A closer look at how communities of practice actually behave suggests something more paradoxical: that selective forgetting is sometimes a precondition for a discipline's advancement rather than an obstacle to it.

Consider the case of a craft guild whose members transmit technique almost entirely through apprenticeship rather than written record. Such a system looks, from the outside, dangerously fragile — one interrupted generation and the knowledge is gone. Yet this fragility is coupled to a kind of adaptive discipline. Because nothing is preserved except what a master judges worth demonstrating to a pupil, techniques that no longer serve the craft's evolving standards are quietly dropped rather than accumulating as inert clutter in an ever-expanding manual. The absence of a permanent record forces each generation to re-justify its inherited methods in practice, not merely in principle.

This is not an argument for destroying archives, nor a romantic case for oral tradition over written knowledge. Written records have their own considerable virtues, chief among them the capacity to preserve exactly the sort of unfashionable or inconvenient finding that a living community might be tempted to quietly let lapse. The point is narrower: that any account of intellectual progress which treats forgetting only as loss, and never as a filtering mechanism with its own logic, has mistaken one edge case — the tragic loss of something valuable — for the whole phenomenon.`,
      questionIds: ["cars-q1", "cars-q2"],
    },
    {
      id: "cars-p2",
      sectionId: "cars",
      order: 1,
      kind: "passage",
      title: "The Persistence of the Eye: Connoisseurship in an Age of Science",
      bodyMarkdown: `Since the mid-twentieth century, the attribution of paintings to particular hands has increasingly been treated as a problem for laboratories rather than for connoisseurs. Pigment analysis, dendrochronology, and infrared reflectography can date a panel, reveal underdrawing, and rule out anachronistic materials with a precision no trained eye can claim. It has become fashionable, accordingly, to regard the traditional connoisseur — the expert who attributes a work on the strength of stylistic intuition alone — as a romantic relic, soon to be rendered obsolete by instruments that do not tire, flatter, or hold professional loyalties. This view mistakes what scientific analysis can establish for what an attribution actually requires.

Consider what a technical report can and cannot tell us. Chemical dating can confirm that a canvas was painted within a given master's lifetime and workshop; it cannot tell us whether the brush was held by the master himself, by a senior assistant executing his design, or by a talented pupil emulating his manner — a distinction that determines whether a canvas is worth thousands or millions, and that turns entirely on qualities of touch, rhythm, and decision that no chemical assay registers. The connoisseur's trained eye, cultivated through years of close looking at securely attributed works, remains the only instrument capable of discriminating among these possibilities, because the relevant evidence is stylistic rather than material.

None of this licenses a return to attribution by pure intuition, unaccountable to any check. Connoisseurs have been wrong, sometimes spectacularly, and their judgments are notoriously vulnerable to market pressures and reputational stakes that laboratories do not share. The more defensible position is that science and connoisseurship answer different questions, and that a sound attribution today requires both: technical analysis to establish what is materially possible, and trained visual judgment to establish what is stylistically probable within that possibility. To treat either as sufficient on its own is to mistake a necessary contribution for a complete one.`,
      questionIds: ["cars-q3", "cars-q4", "cars-q5", "cars-q6"],
    },
    {
      id: "cars-p3",
      sectionId: "cars",
      order: 2,
      kind: "passage",
      title: "The Gift Reconsidered",
      bodyMarkdown: `Economists who first encountered ethnographic accounts of gift exchange in small-scale societies were often tempted to translate the practice into terms their own discipline could readily process: the gift, they suggested, was simply a primitive or inefficient form of trade, awkwardly disguising what amounted to barter under a veneer of generosity. On this reading, a tribal chief presenting an elaborately decorated ornament to a trading partner was engaged in an exchange functionally identical to a merchant swapping cloth for grain, differing only in ceremonial dress. This translation, however convenient, effaces precisely what made the anthropological puzzle interesting in the first place.

What ethnographers actually recorded was a system of obligation that a simple exchange model cannot capture. A gift received placed its recipient under a compulsion to give something back, but not immediately, and not of calculably equivalent value; to reciprocate too quickly, or too precisely, was itself a breach of etiquette, converting a social bond into something more like a completed commercial transaction and thereby extinguishing it. The gift's value lay not in what it transferred materially but in the relationship of ongoing indebtedness it created between giver and receiver, a debt that a market exchange, complete and self-terminating at the moment of payment, could never sustain. The apparent inefficiency of gift-giving relative to market exchange was not a design flaw but the entire point: the system was optimized for producing enduring social ties, not for the fast, impersonal circulation of goods.

This does not mean gift-givers were indifferent to their own advantage, as a purely sentimental reading of these societies sometimes assumes. Prestige, alliance, and political standing were often demonstrably at stake in a well-judged gift, and generosity could be, and frequently was, a calculated strategy for accumulating influence. The relevant claim is narrower and more defensible: that the logic governing these exchanges cannot be reduced to the price-setting mechanisms of a market, even where self-interest is present, because the obligations gifts generate are binding in a social and moral register that market contracts do not require and do not produce.`,
      questionIds: ["cars-q7", "cars-q8", "cars-q9", "cars-q10"],
    },
  ],
  questions: [
    {
      id: "cars-q1",
      passageId: "cars-p1",
      sectionId: "cars",
      order: 0,
      stem: "Which of the following best captures the author's main point?",
      choices: [
        { id: "A", text: "Written archives are inferior to oral apprenticeship traditions for transmitting technical knowledge.", explanation: "The author explicitly disclaims this position, calling written records' preservation of unfashionable findings a 'considerable virtue.'" },
        { id: "B", text: "Forgetting is sometimes a functional filtering process for a discipline, not simply a loss to be lamented.", explanation: "Correct. This is the passage's central, explicitly stated thesis, illustrated by the guild example and reaffirmed in the final paragraph." },
        { id: "C", text: "Craft guilds historically produced more reliable technique than modern written scientific disciplines.", explanation: "The passage never compares reliability across disciplines; the guild is offered only as an illustrative case, not a claim of superiority." },
        { id: "D", text: "Historians of science have been entirely mistaken in treating forgetting as a failure of the archive.", explanation: "Too strong — the author says this framing 'is not wrong, exactly, but incomplete,' not entirely mistaken." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage opens by complicating, not rejecting, the conventional view of forgetting as pure loss, develops a specific mechanism (the guild example) for how forgetting can filter out obsolete technique, and closes by generalizing that thesis while carefully limiting its scope. Choice B tracks that exact structure; the other choices each overstate or mislocate the claim.",
      walkthrough: {
        approachNotes:
          "This is a 'main point' question — the right answer must be broad enough to cover the whole passage's arc (complication of a view → supporting case → careful generalization), not just one paragraph's detail. Watch for choices that are true of a piece of the passage but too strong or too narrow to be the main point.",
        steps: [
          "Identify the passage's structure: paragraph 1 complicates a conventional view, paragraph 2 gives a supporting case, paragraph 3 narrows and generalizes the claim.",
          "State the thesis in your own words before reading choices: forgetting can function as a useful filter, not only a loss.",
          "Eliminate A: contradicted directly by the third paragraph's praise of written records.",
          "Eliminate C: an unsupported comparison the passage never makes.",
          "Eliminate D: overstates the author's actual, hedged claim ('not wrong, exactly, but incomplete').",
          "B matches the thesis at the right level of generality.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q2",
      passageId: "cars-p1",
      sectionId: "cars",
      order: 1,
      stem: "The author's discussion of the craft guild is best understood as:",
      choices: [
        { id: "A", text: "A counterexample intended to refute the conventional view of forgetting entirely.", explanation: "The guild example supports a qualification of the conventional view, not a wholesale refutation — the author never claims the conventional view is entirely wrong." },
        { id: "B", text: "An illustrative case supporting the claim that forgetting can act as an adaptive filter.", explanation: "Correct. The author explicitly frames the guild as a case that shows how the absence of a permanent record 'forces each generation to re-justify its inherited methods.'" },
        { id: "C", text: "A historical account presented as factually established rather than illustrative.", explanation: "The passage introduces the guild with 'Consider the case of,' signaling a hypothetical or illustrative device, not a documented historical claim." },
        { id: "D", text: "An example of a discipline the author believes modern science should imitate.", explanation: "The author explicitly disclaims romanticizing oral tradition over written knowledge, ruling out an imitation argument." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The guild example is explicitly introduced as an illustration ('Consider the case of...') to demonstrate the mechanism by which forgetting can filter out obsolete technique. It functions in service of the passage's larger, hedged thesis rather than as a stand-alone historical claim or a prescriptive model.",
      walkthrough: {
        approachNotes:
          "Questions about the function of a specific example are asking 'why did the author include this,' not 'what does this example literally say.' Locate the sentence right before and after the example to see what point it's being used to support.",
        steps: [
          "Find where the guild example begins ('Consider the case of...') and note this signals a hypothetical/illustrative device.",
          "Read the sentence following the example: it draws out the mechanism — no permanent record forces re-justification each generation.",
          "Match that function to the choices: it illustrates the filtering-mechanism claim, so eliminate choices about refutation, factual history, or imitation.",
          "Confirm B aligns with both the example's role and the passage's overall hedged thesis.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q3",
      passageId: "cars-p2",
      sectionId: "cars",
      order: 2,
      stem: "Which of the following best states the author's main point?",
      choices: [
        { id: "A", text: "Scientific techniques have made traditional connoisseurship obsolete.", explanation: "Contradicted by the passage — the author explicitly argues connoisseurship remains indispensable, not that it has been superseded." },
        { id: "B", text: "Connoisseurs' stylistic judgments are more reliable than scientific dating methods.", explanation: "Too strong and an unsupported comparison — paragraph 3 concedes connoisseurs 'have been wrong, sometimes spectacularly,' so the passage never ranks one method above the other." },
        { id: "C", text: "Attribution today requires both technical analysis and connoisseurial judgment, since each addresses a different question.", explanation: "Correct. This is the passage's explicit thesis, stated directly in the final paragraph and supported throughout: science and connoisseurship 'answer different questions.'" },
        { id: "D", text: "Technical analysis is useful only for ruling out forgeries, not for establishing attribution.", explanation: "Too narrow and unsupported — the passage says technical analysis establishes material facts (e.g., dating a canvas to a workshop), which is part of attribution, not limited to forgery detection." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage opens by complicating the fashionable view that science has rendered connoisseurship obsolete, supports that complication with a specific limitation of technical analysis (it cannot distinguish a master's hand from an assistant's), and closes by explicitly stating that attribution requires both methods together. Choice C matches that full arc; the others either overstate one side or invent a claim the passage never makes.",
      walkthrough: {
        approachNotes:
          "For main-point questions, the correct choice must summarize the passage's full argumentative arc — including any qualification in the final paragraph — rather than just its opening claim. Distractors often take one paragraph's point and stretch it into an absolute.",
        steps: [
          "Restate the thesis in your own words after reading: attribution needs both science and connoisseurship, because they answer different questions.",
          "Eliminate A: directly contradicted by the passage's stated purpose of defending connoisseurship's continued role.",
          "Eliminate B: an unsupported ranking the passage never makes, and undercut by paragraph 3's admission of connoisseurial error.",
          "Eliminate D: too narrow — invents a limitation on technical analysis not stated in the passage.",
          "Confirm C restates the explicit final-paragraph conclusion at the right level of generality.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q4",
      passageId: "cars-p2",
      sectionId: "cars",
      order: 3,
      stem: "The author's discussion of what a technical report 'can and cannot tell us' (paragraph 2) primarily serves to:",
      choices: [
        { id: "A", text: "Show that scientific tools can establish material facts but not the stylistic distinctions attribution ultimately depends on.", explanation: "Correct. The passage uses the master/assistant/pupil distinction specifically to show a gap chemical dating cannot close, which only stylistic judgment can address." },
        { id: "B", text: "Demonstrate that chemical dating techniques are frequently inaccurate.", explanation: "Misreads the passage — the author never claims the techniques are inaccurate, only that they answer a different question than attribution ultimately requires." },
        { id: "C", text: "Argue that the value of a painting should not depend on which member of a workshop painted it.", explanation: "Reverses the author's point — the passage says this distinction 'determines whether a canvas is worth thousands or millions,' treating it as a real and important fact, not something that shouldn't matter." },
        { id: "D", text: "Provide historical background on how workshop practices operated among old-master painters.", explanation: "Too narrow — workshop practice is mentioned only in service of the epistemic point about what science can and cannot establish, not as historical background for its own sake." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage introduces this example immediately after asserting that science-only attribution is incomplete, and uses it to pinpoint exactly what technical analysis misses: the difference between a master's hand and an imitator's. That gap is what makes connoisseurship, per the author, still necessary — which is the function choice A captures.",
      walkthrough: {
        approachNotes:
          "Function questions ask why a detail appears where it does, not what it literally says. Read the sentence introducing the detail and the sentence drawing its conclusion — the function usually sits in that frame, not in the detail's content alone.",
        steps: [
          "Locate the detail: the contrast between what chemical dating confirms versus what it cannot distinguish.",
          "Check the sentence immediately before it: it sets up the claim that connoisseurship's role is being defended, not that science is being criticized as unreliable.",
          "Check the sentence immediately after: it credits the 'trained eye' with resolving exactly the gap just described.",
          "Eliminate B and D as mismatched in scope or content to that framing sentence.",
          "Eliminate C as a reversal of the passage's actual claim about why the distinction matters.",
          "Select A, which matches the detail's role in the surrounding argument.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q5",
      passageId: "cars-p2",
      sectionId: "cars",
      order: 4,
      stem: "Based on the passage, the author would most likely agree with which of the following statements?",
      choices: [
        { id: "A", text: "Connoisseurs should be granted final authority over attribution disputes, regardless of laboratory findings.", explanation: "Too strong — the passage explicitly warns that connoisseurs are 'vulnerable to market pressures and reputational stakes,' which rules out granting them unchecked final authority." },
        { id: "B", text: "Dendrochronology and pigment analysis will eventually be refined to the point of settling all attribution questions.", explanation: "An unsupported prediction the passage never makes — the author frames the limitation as a difference in kind (material vs. stylistic evidence), not as a temporary technical shortfall that future refinement could close." },
        { id: "C", text: "Most attributed paintings currently in museums are misattributed to the wrong artist.", explanation: "An unsupported quantitative claim — the passage discusses the logic of attribution, not the accuracy rate of existing museum attributions." },
        { id: "D", text: "An attribution based solely on technical analysis, without any stylistic judgment, would be incomplete.", explanation: "Correct. This directly follows from the passage's stated conclusion that 'to treat either as sufficient on its own is to mistake a necessary contribution for a complete one.'" },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage's final sentence states almost exactly this claim in general form: neither science nor connoisseurship alone is sufficient for a sound attribution. Choice D is the most direct, least speculative restatement of that stated conclusion, while the other choices each require assumptions the passage does not support.",
      walkthrough: {
        approachNotes:
          "For 'would most likely agree' questions, prefer the choice that follows most directly from an explicit sentence in the passage over one that requires speculation, prediction, or an unstated quantitative claim.",
        steps: [
          "Locate the passage's most explicit general claim: the closing sentence about treating either method as sufficient on its own.",
          "Paraphrase it: technical analysis alone is not enough for attribution.",
          "Eliminate A and C as stronger or more specific claims than anything stated.",
          "Eliminate B as a prediction about future technology the passage never makes.",
          "Match D to the paraphrased closing sentence.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q6",
      passageId: "cars-p2",
      sectionId: "cars",
      order: 5,
      stem: "Suppose a new technology could analyze the pressure pattern of a painter's individual brushstrokes and, from that data alone, perfectly distinguish one painter's hand from another's with total accuracy. This discovery would most directly:",
      choices: [
        { id: "A", text: "Strengthen the author's argument, since it confirms that stylistic distinctions are ultimately physical facts a machine can register.", explanation: "This reverses the effect — if a machine could fully replicate what the trained eye does, it would undercut, not confirm, the author's claim that this discrimination requires connoisseurial judgment." },
        { id: "B", text: "Weaken the author's central claim that connoisseurship performs an epistemic function no scientific method can replicate.", explanation: "Correct. The author's argument for connoisseurship's necessity rests on science's inability to distinguish among hands stylistically; a technology that does exactly this undermines that premise." },
        { id: "C", text: "Have no bearing on the author's argument, since it does not concern the market value of paintings.", explanation: "Incorrect — the scenario concerns exactly what the passage identifies as the key unresolved question (distinguishing hands), which the passage itself ties to market value, so it is directly relevant." },
        { id: "D", text: "Strengthen the author's argument by providing further evidence of science's inherent limitations.", explanation: "Reverses the scenario's implication — a technology that succeeds at this task demonstrates an expansion of science's capability, not a further limitation." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The author's case for connoisseurship rests on a specific gap: 'no chemical assay registers' the qualities that distinguish one hand from another. A hypothetical technology that closes exactly that gap would directly undermine the passage's stated reason for connoisseurship's continued necessity, making this a weakening scenario.",
      walkthrough: {
        approachNotes:
          "For 'new information' questions, first identify the specific premise the author's conclusion depends on, then ask whether the new scenario removes or reinforces that exact premise — not just whether it's thematically related to the passage.",
        steps: [
          "Identify the load-bearing premise: science cannot register the stylistic qualities that distinguish one painter's hand from another's.",
          "Compare the hypothetical: a technology that does register exactly this, with total accuracy.",
          "Recognize this removes the stated reason connoisseurship is necessary, which weakens rather than strengthens the argument.",
          "Eliminate A and D, which misread the scenario as supporting the author when it undercuts the author's key premise.",
          "Eliminate C, since the scenario is directly on-topic for the passage's central question.",
          "Select B as the choice that correctly identifies the weakening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q7",
      passageId: "cars-p3",
      sectionId: "cars",
      order: 6,
      stem: "Which of the following best expresses the author's main point?",
      choices: [
        { id: "A", text: "Gift exchange creates a form of binding social obligation that cannot be reduced to market exchange logic, even though self-interest can be present.", explanation: "Correct. This is the passage's explicit thesis, stated in the final paragraph and supported by the discussion of deferred, non-equivalent reciprocation in paragraph 2." },
        { id: "B", text: "Gift exchange in small-scale societies is simply a primitive, inefficient form of barter.", explanation: "This is the view the author explicitly rejects in paragraph 1 as a translation that 'effaces precisely what made the anthropological puzzle interesting.'" },
        { id: "C", text: "Participants in gift economies are entirely indifferent to their own prestige or advantage.", explanation: "Contradicted by paragraph 3, which states prestige and alliance 'were often demonstrably at stake' and that generosity could be a calculated strategy." },
        { id: "D", text: "Market exchange is a morally inferior practice compared to traditional gift-giving.", explanation: "An unsupported value judgment — the passage describes a functional difference between gift and market exchange, but never claims one is morally superior to the other." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage rejects the reduction of gift exchange to disguised barter, builds a positive case that gift exchange functions through deferred and non-equivalent reciprocation to sustain relationships, and closes by explicitly limiting the claim to acknowledge self-interest without abandoning the core thesis. Choice A is the only option that captures this full, qualified argument.",
      walkthrough: {
        approachNotes:
          "Main-point choices for a passage with a concluding qualification (like this one's 'even though self-interest is present') must include that qualification — an answer that is too absolute in either direction is usually a distractor.",
        steps: [
          "Track the argument's shape: paragraph 1 rejects a reductive view, paragraph 2 builds the positive account, paragraph 3 qualifies it.",
          "State the thesis with its qualification: gift exchange is socially binding in a way markets aren't, but this doesn't mean self-interest is absent.",
          "Eliminate B as the rejected view, not the author's own.",
          "Eliminate C and D as unsupported absolutes the passage does not state.",
          "Confirm A includes both the core claim and the qualification.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q8",
      passageId: "cars-p3",
      sectionId: "cars",
      order: 7,
      stem: "The author's point that reciprocating a gift 'too quickly, or too precisely' would constitute 'a breach of etiquette' (paragraph 2) primarily serves to:",
      choices: [
        { id: "A", text: "Show that gift-giving societies lack clear rules governing exchange.", explanation: "Reverses the point — the existence of a specific etiquette rule about timing and precision shows these societies have clear, if unwritten, rules, not an absence of them." },
        { id: "B", text: "Demonstrate that immediate reciprocation was culturally regarded as rude behavior in general.", explanation: "Too narrow — the detail is offered to support a larger claim about how gift exchange sustains relationships, not as a free-standing observation about etiquette or rudeness." },
        { id: "C", text: "Illustrate the mechanism by which gift exchange sustains an ongoing social bond rather than functioning like a completed market transaction.", explanation: "Correct. The passage explicitly ties this rule to the claim that quick, precise reciprocation would convert the exchange into 'something more like a completed commercial transaction and thereby extinguish it.'" },
        { id: "D", text: "Prove that gift-givers were unconcerned with the value of what they gave.", explanation: "Contradicted by paragraph 3, which states prestige and calculated strategy were 'demonstrably at stake' in a well-judged gift." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "This detail is introduced to explain why gift exchange cannot be modeled as a simple transaction: the deliberate delay and inexactness of reciprocation is what keeps the relationship of indebtedness alive. The sentence immediately following the detail draws exactly this conclusion, which is what choice C captures.",
      walkthrough: {
        approachNotes:
          "As with any function question, isolate the sentence that states what the detail is doing in the argument, rather than treating the detail as a claim to be evaluated on its own.",
        steps: [
          "Locate the etiquette detail and read the clause that follows it directly.",
          "Note the stated consequence: quick, exact reciprocation would 'extinguish' the social bond by turning it into a transaction.",
          "Match that consequence to the choices: it's about sustaining relationships, not about rules in general or indifference to value.",
          "Eliminate A (reverses the point), B (too narrow), and D (contradicted elsewhere in the passage).",
          "Select C as the choice matching the stated function.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q9",
      passageId: "cars-p3",
      sectionId: "cars",
      order: 8,
      stem: "The passage most strongly suggests that the author would agree with which of the following?",
      choices: [
        { id: "A", text: "Self-interest played no genuine role in decisions about how or when to give gifts.", explanation: "Directly contradicted by paragraph 3, which states generosity 'could be, and frequently was, a calculated strategy for accumulating influence.'" },
        { id: "B", text: "Anthropologists before this reassessment were correct that gifts were simply disguised barter.", explanation: "This is the view the author is arguing against, not one the author endorses." },
        { id: "C", text: "Gift exchange systems were economically more efficient than market systems at circulating goods.", explanation: "Reverses the passage's claim — the author calls gift exchange comparatively 'inefficient' relative to market exchange, while arguing that inefficiency served a different purpose." },
        { id: "D", text: "A gift exchange that is reciprocated instantly, with an item of precisely equivalent value, would function more like a market transaction than a gift.", explanation: "Correct. This follows directly from paragraph 2's claim that reciprocating 'too quickly, or too precisely' converts the exchange into 'something more like a completed commercial transaction.'" },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Paragraph 2 draws a direct line between the timing/precision of reciprocation and whether an exchange functions as a gift or a market transaction. Choice D is a close paraphrase of that stated claim, while the other options either invert or contradict positions the passage takes explicitly.",
      walkthrough: {
        approachNotes:
          "When a passage states a conditional relationship explicitly (here: instant, exact reciprocation → market-like transaction), the correct inference choice is often a near-paraphrase of that conditional rather than a new claim.",
        steps: [
          "Find the explicit conditional in paragraph 2 about quick, precise reciprocation.",
          "Paraphrase it: fast and exact repayment behaves like a market transaction, not a gift.",
          "Eliminate A and C as direct contradictions of statements elsewhere in the passage.",
          "Eliminate B as the rejected view from paragraph 1, not the author's position.",
          "Match D to the paraphrased conditional from paragraph 2.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q10",
      passageId: "cars-p3",
      sectionId: "cars",
      order: 9,
      stem: "Suppose researchers documented a gift-giving society in which every gift was reciprocated within a fixed, publicly announced time period with an item of formally assessed equal value, and where failure to do so carried no social consequence beyond repayment of the debt itself. This finding would most directly:",
      choices: [
        { id: "A", text: "Strengthen the author's claim that gift exchange creates enduring relationships of indebtedness.", explanation: "Reverses the effect — a fixed schedule and formally equal value are exactly the features paragraph 2 identifies as converting a gift relationship into a market-like transaction, so this would not support the author's claim." },
        { id: "B", text: "Weaken the author's argument, since such a system would lack the deferred, non-equivalent reciprocation the author identifies as central to gift exchange's distinct social function.", explanation: "Correct. The author's account depends on reciprocation being deferred and inexact; a system with fixed timing and formally equal value removes exactly those features." },
        { id: "C", text: "Be irrelevant to the author's argument, since the passage does not discuss the timing of reciprocation.", explanation: "Factually incorrect — the passage explicitly discusses timing and precision of reciprocation as central to its argument in paragraph 2." },
        { id: "D", text: "Strengthen the author's argument by showing that gift economies can be more precisely regulated than markets.", explanation: "An unsupported claim about regulation that the passage never makes or implies, and misreads the scenario's relevance to the author's actual argument about social bonding." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The author's argument depends on gift reciprocation being deferred and inexact, since that ambiguity is what sustains an ongoing social bond rather than closing out a transaction. A hypothetical society with fixed-schedule, formally equal reciprocation removes precisely those defining features, which weakens rather than strengthens the author's account.",
      walkthrough: {
        approachNotes:
          "As with any weaken/strengthen scenario, isolate the specific mechanism the author's conclusion relies on, then check whether the hypothetical scenario removes that mechanism (weakens) or reinforces it (strengthens) — don't just check for surface-level topical overlap.",
        steps: [
          "Identify the mechanism the argument depends on: deferred, non-equivalent reciprocation sustains social bonds.",
          "Compare the hypothetical: fixed timing and formally equal value, i.e., the opposite of that mechanism.",
          "Recognize the scenario describes something closer to the market transaction the author explicitly contrasts gift exchange with.",
          "Eliminate A and D, which misread the scenario as supporting the author's account.",
          "Eliminate C, since timing and precision are explicitly discussed in the passage.",
          "Select B as correctly identifying the weakening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
  ],
};

export default carsContent;
