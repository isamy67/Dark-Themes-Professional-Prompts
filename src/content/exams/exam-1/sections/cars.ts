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
    {
      id: "cars-p4",
      sectionId: "cars",
      order: 3,
      kind: "passage",
      title: "The Unreliable Narrator and the Ethics of Reading",
      bodyMarkdown: `Literary critics have traditionally treated narrative unreliability as a technical puzzle: a novel's narrator misrepresents events, and the reader's task is to reconstruct, through careful inference, what "actually" happened beneath the distortion. On this view, unreliability is a species of literary sudoku, and readers who successfully decode it have essentially completed the interpretive work required. This framing, though not false, obscures what many unreliable narrators are actually doing to their readers, which is considerably more demanding than detection.

Consider a narrator who recounts, in scrupulous and self-justifying detail, a decision that harmed someone else, while subtly minimizing his own responsibility at every turn — never lying outright, but consistently framing his choices as forced, his victims as complicit, his regrets as proof of his essential decency. A reader who merely decodes this narrator, concluding "he did more harm than he admits," has correctly solved the puzzle but has not yet done the harder work the text invites: weighing how much harm, measured against how much self-deception, and on what evidential basis, since the very account we must judge by is the compromised testimony of the person being judged. The novel supplies no authoritative alternative narrative to check the narrator's account against; it supplies only gaps, inconsistencies, and the reader's own moral attention. In this mode, unreliability functions less as a puzzle with a hidden solution than as a rehearsal space for the kind of judgment we are regularly forced to exercise outside of fiction, where we likewise never have access to an unmediated account of another person's motives.

This ethical account should not be extended to every instance of narrative unreliability, however. A narrator whose unreliability arises from comic naivety, or from a deliberately fragmented, dreamlike style meant to unsettle a reader's sense of narrative coherence itself, is not necessarily inviting the same kind of moral adjudication; such devices may aim at defamiliarization or humor rather than ethical rehearsal. The claim advanced here is narrower: that wherever a narrator's distortions concern their own moral culpability, and no corrective account is supplied, the reader is doing more than detective work, whether or not every unreliable narrator serves that particular function.`,
      questionIds: ["cars-q11", "cars-q12", "cars-q13", "cars-q14", "cars-q15", "cars-q16"],
    },
    {
      id: "cars-p5",
      sectionId: "cars",
      order: 4,
      kind: "passage",
      title: "On the Practice of Promising",
      bodyMarkdown: `Moral philosophers disagree about where the obligation to keep a promise comes from. One influential account treats promise-keeping as obligatory chiefly because breaking a promise typically harms the person to whom it was made — they relied on it, planned around it, and are worse off when it is broken. On this view, the wrongness of promise-breaking is essentially a special case of the wrongness of causing harm, and the "promise" itself adds little beyond a particularly clear signal of what the other party is relying on. This account is attractively simple, but it struggles to explain some of the ways we actually treat promises.

Consider a promise made to a person who has since died, with no one else aware that it was made and no one who would be harmed, materially or emotionally, by its being broken. Most people continue to feel bound by such a promise, and regard breaking it — say, quietly failing to fulfill a dying request once it can no longer be discovered — as a real wrong, not merely as an act with no victim and therefore no moral weight. If the obligation to keep a promise were simply a proxy for the harm that breaking it causes, this residual sense of obligation would be difficult to explain, since by hypothesis no one is harmed by the breach. What survives the removal of harm, on this analysis, is something that attached to the act of promising itself: the deliberate invocation of a specific kind of trust, which appears to generate an obligation independent of its downstream consequences.

None of this requires denying that harm matters to how we judge broken promises. A broken promise that devastates someone's finances is typically judged more harshly than a broken promise that merely disappoints, and this gradation in blame tracks harm quite closely. The more limited claim is that harm explains the degree of wrongness in many cases without explaining the existence of the underlying obligation in the first place — a distinction the simple harm-based account tends to collapse.`,
      questionIds: ["cars-q17", "cars-q18", "cars-q19", "cars-q20", "cars-q21", "cars-q22"],
    },
    {
      id: "cars-p6",
      sectionId: "cars",
      order: 5,
      kind: "passage",
      title: "Ritual and the Problem of Meaning",
      bodyMarkdown: `When anthropologists ask participants in a ritual to explain what a given action means, they frequently receive shrugs, contradictory answers, or a flat "it is simply what is done." Faced with this frustrating opacity, some scholars have concluded that many rituals are essentially empty of meaning — formal, patterned behavior preserved by habit and social pressure rather than by any content it communicates or embodies. On this reading, the search for ritual "meaning" is largely a projection of the anthropologist's own expectation that symbolic action must be legible as a text, an expectation many participants simply do not share or need. This conclusion, however, moves too quickly from an absence of articulated interpretation to an absence of significance.

The mistake becomes clearer through analogy. A fluent speaker of a language can produce and recognize a virtually unlimited number of grammatical sentences without being able to state the grammatical rules she is following; asked to explain why a given sentence sounds wrong, she may simply say "it just does," despite the fact that her judgment tracks real, systematic structure. It would be strange to conclude from her inability to articulate the rule that no rule is operating. Ritual efficacy may work similarly: what matters for a rite's social function may be the precision of its performance — correct sequence, correct participants, correct timing — carried out by a community that has internalized these constraints without holding, or needing to hold, an explicit propositional theory of what each element "stands for." The rite binds and coordinates its participants through the shared discipline of the performance itself, independent of any individual's capacity to decode it verbally.

This is not a claim that rituals never carry symbolic content, or that participants' interpretations, when offered, should be dismissed as irrelevant — many rites plainly do encode articulable symbolism, and such interpretations, where available, are valuable evidence. The narrower point is that requiring an informant to supply a decoded meaning before granting a ritual any significance imposes a documentary standard — legibility as text — that mistakes one possible form of depth for the only form, and risks discarding genuine social function simply because it resists articulation.`,
      questionIds: ["cars-q23", "cars-q24", "cars-q25", "cars-q26", "cars-q27", "cars-q28"],
    },
    {
      id: "cars-p7",
      sectionId: "cars",
      order: 6,
      kind: "passage",
      title: "Photography and the Question of Authorship",
      bodyMarkdown: `Since photography's earliest decades, critics have debated whether it deserves to be called an authored art in the same sense as painting. A recurring objection holds that the camera, unlike the brush, merely records what is physically present before it; the photographer selects a moment and a frame, but does not construct the image element by element the way a painter builds a canvas from nothing. On this view, photography's mechanical, indexical relationship to its subject — the fact that a photograph, unlike a painting, could not exist without the actual prior existence of what it depicts — places real limits on how much authorial credit a photographer can claim for the resulting image. This objection captures something true about photography's distinctive relationship to its subject, but it has often been pressed into a stronger claim than the evidence supports: that photographs are therefore not meaningfully authored at all, but merely captured.

The stronger claim founders on a simple observation: place two skilled photographers before the identical scene, with identical equipment, and they will typically produce two recognizably different images. One frames tightly, isolating a single figure against negative space; the other includes the surrounding crowd, changing the image's implied narrative entirely. One waits for a passing cloud to soften the light; the other shoots at midday for hard shadow and contrast. None of these choices — framing, timing, focus, exposure — involves inventing content that was not physically present, yet all of them shape what the resulting image communicates as decisively as a painter's choice of color or composition shapes a canvas. If two people looking at the same subject can produce meaningfully different works through such choices, authorship cannot be reduced to the invention of content from nothing; it must also include the selective, interpretive shaping of content that already exists.

None of this erases the real difference between photography and painting that motivated the original objection. A documentary photographer genuinely cannot add a building to a skyline that is not there, in the way a painter freely can, and this constraint is neither trivial nor irrelevant to how we evaluate photographic work. The more defensible position is not that photography and painting involve identical kinds of authorship, but that photography's authorship, though operating under a distinctive indexical constraint, is not thereby absent — the dispute is better framed as one of degree and kind, not of presence versus absence.`,
      questionIds: ["cars-q29", "cars-q30", "cars-q31", "cars-q32", "cars-q33", "cars-q34"],
    },
    {
      id: "cars-p8",
      sectionId: "cars",
      order: 7,
      kind: "passage",
      title: "The Uses of Anachronism",
      bodyMarkdown: `Historians are trained early to regard anachronism as a cardinal methodological sin. To describe medieval peasants as possessing "human rights," or to explain a seventeenth-century financial crisis using a modern economic vocabulary its participants never had, is to commit the error historians call presentism: reading the present back into a past that did not think in those terms. The prohibition is salutary and well-earned, guarding against a genuine and common failure of historical imagination. Taken as an absolute rule against any use of present-day concepts in historical writing, however, it would rule out forms of inquiry that historians in practice rely on and that few would actually wish to abandon.

The needed distinction is between anachronistic description and anachronistic analysis. To claim that seventeenth-century merchants understood their crisis using the concept of "inflation," as though the term and its associated theory were available to their own understanding, is a clear case of the error the prohibition rightly targets: it falsely attributes a present-day category to past minds that did not possess it. But a historian who instead uses the modern concept of inflation as her own analytic tool — clearly her retrospective framework, not a claim about how contemporaries understood their situation — to explain why prices rose and wages failed to keep pace, is doing something different and defensible: applying a present-day category to organize and explain past events, without claiming the past actors held that category themselves. The same distinction holds for moral evaluation: a historian who judges a historical practice unjust by present standards, while being explicit that this is her own retrospective judgment rather than a claim about how contemporaries saw it, has not committed the error the presentism critique is meant to prevent.

None of this license should be mistaken for a general defense of anachronism, and the failure mode the original prohibition targets remains genuinely common: historians do sometimes blur the line, sliding from "by our lights, this was unjust" into an unstated and false assumption that people at the time must have experienced it the same way, or that dissenting voices at the time must have shared modern moral vocabulary when the evidence does not support this. The point is not that anachronism is safe in general, but that the blanket prohibition conflates two distinct practices — a legitimate, clearly marked retrospective tool, and a genuine error of attribution — and that responsible historical writing depends on keeping these two apart rather than avoiding retrospection altogether.`,
      questionIds: ["cars-q35", "cars-q36", "cars-q37", "cars-q38", "cars-q39", "cars-q40"],
    },
    {
      id: "cars-p9",
      sectionId: "cars",
      order: 8,
      kind: "passage",
      title: "The Moral Economy of Debt",
      bodyMarkdown: `Standard economic histories often treat debt as functionally continuous with an ordinary purchase, differing only in the timing of payment: a loan is simply a sale in which delivery of goods and delivery of payment have been separated in time, with interest compensating the lender for the wait. This "neutral deferral" framing has the appeal of parsimony, folding debt into the same analytic category as any other market exchange. But it sits uneasily beside how debt has actually been treated, historically and across a wide range of documented societies, where falling into debt and defaulting on it have carried a moral charge that a merely delayed sale never acquires.

Consider how differently legal and social systems across many historical societies have treated a completed sale gone wrong versus an unpaid debt. A merchant who delivers defective goods disappoints a customer, but rarely incurs the kind of enduring social stain that falls on a debtor. Debt, by contrast, has repeatedly been the occasion for punishments and social consequences — bondage, loss of civic standing, public shaming rituals — with no clear equivalent in the aftermath of an ordinary botched trade. This asymmetry is difficult to explain if debt is simply a variant of sale with delayed timing, since nothing about mere delay obviously warrants treating the debtor as having committed a distinct kind of wrong. What the asymmetry suggests instead is that debt has typically been understood not as a neutral financial arrangement but as the creation of a state of dependency in the debtor, one that borrows its emotional and moral weight from something closer to servitude or obligation than from ordinary trade.

This does not mean every debt relationship in every documented society has carried equal moral weight, or that market thinking played no role in how debts were assessed and enforced; interest rates, collateral, and negotiated terms show that calculative, market-like reasoning was very much present alongside the moral dimension. The narrower claim is that the "neutral deferral" model, by treating debt as reducible to a timing difference within an otherwise ordinary market exchange, cannot on its own account for the distinct moral and social weight debt has so consistently carried, a weight that a merely delayed sale does not generate.`,
      questionIds: ["cars-q41", "cars-q42", "cars-q43", "cars-q44", "cars-q45", "cars-q46"],
    },
    {
      id: "cars-p10",
      sectionId: "cars",
      order: 9,
      kind: "passage",
      title: "Translation and the Question of Loss",
      bodyMarkdown: `The common lament that something is always "lost in translation" captures a real and familiar experience: a pun that depends on a specific pair of homophones in the source language simply has no equivalent in the target language, and a poem's rhythm, built from the particular stress patterns of one language's syllables, cannot survive intact when rendered into a language with different phonological rules. This experience has hardened, in much popular and even some scholarly discussion, into a general model of translation as an inherently subtractive process: an original is understood as a fixed store of meaning, and a translation is judged by how much of that original store it manages to preserve, with the remainder simply and irrecoverably gone. This subtraction-only model, while accurately describing certain features of what translation loses, badly mischaracterizes what translation, considered as a whole practice, actually does.

Consider what a skilled translator does when confronted with an untranslatable pun central to a passage's comic effect. Rather than simply omitting the joke and accepting a diminished text, translators routinely invent a compensatory device — a different pun, built on wordplay available only in the target language, placed at a point in the text where the source contains no joke at all — in order to preserve the passage's overall comic rhythm and effect for the reader. This is not merely damage control; it is a genuinely creative act, drawing on resources specific to the target language that the source language may not have possessed in the same form. A reader of this translation experiences a comic effect that a reader of the original, in a strict sense, cannot access from the source text alone, since the specific joke exists only in the translation. The translation, in other words, is not merely a lossy subset of the original's content; at specific points, it can be an independently constructed text bringing its own resources to bear.

None of this should be mistaken for a claim that translations are typically equal to or better than their originals, or that the ordinary sense of loss is illusory; a great deal is indeed lost in most translations, often irrecoverably, and few translators would claim otherwise. The narrower point is that describing translation purely as a subtractive copying process, judged solely by fidelity to a fixed original, obscures the compensatory and sometimes additive work translation also performs — work that makes a translation, at its best, a distinct construction in its own right rather than a diminished shadow of its source.`,
      questionIds: ["cars-q47", "cars-q48", "cars-q49", "cars-q50", "cars-q51", "cars-q52", "cars-q53"],
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
    {
      id: "cars-q11",
      passageId: "cars-p4",
      sectionId: "cars",
      order: 10,
      stem: "Which of the following best captures the author's main point?",
      choices: [
        { id: "A", text: "Unreliable narration is best understood purely as a puzzle for readers to solve by inferring the true sequence of events.", explanation: "This is the traditional framing the author complicates, not the author's own thesis; the passage argues this view 'obscures' something important." },
        { id: "B", text: "Where a narrator's distortions concern their own moral culpability and no corrective account exists, reading requires ethical judgment beyond simple detection.", explanation: "Correct. This is the passage's central thesis, developed through the self-justifying narrator example and explicitly restated, with its scope narrowed, in the final paragraph." },
        { id: "C", text: "All unreliable narrators demand the same kind of ethical judgment from their readers.", explanation: "Too strong — paragraph 3 explicitly excludes narrators whose unreliability serves comic or defamiliarizing purposes from this ethical account." },
        { id: "D", text: "Readers can never determine the truth behind an unreliable narrator's account.", explanation: "Overstated — the passage discusses degrees of ethical weighing, not a claim that the truth is categorically unknowable." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage opens by complicating the 'puzzle' view of unreliable narration, develops its alternative through an extended example of a self-justifying narrator, and closes by explicitly limiting that alternative's scope to cases involving moral culpability with no corrective account. Choice B is the only option that reflects this full, qualified thesis.",
      walkthrough: {
        approachNotes:
          "For main-point questions, the correct choice must match the passage's argument at the right level of generality — broad enough to cover the whole arc, but not so broad that it ignores the qualification in the final paragraph.",
        steps: [
          "Track the structure: paragraph 1 complicates a conventional view, paragraph 2 builds the author's alternative, paragraph 3 narrows its scope.",
          "State the thesis in your own words: distortions about a narrator's own culpability, absent a corrective account, demand more than puzzle-solving.",
          "Eliminate A as the rejected conventional view, not the author's conclusion.",
          "Eliminate C and D as overgeneralizations the passage explicitly disclaims.",
          "Confirm B matches the thesis's actual scope.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q12",
      passageId: "cars-p4",
      sectionId: "cars",
      order: 11,
      stem: "The extended example of the narrator who frames his harmful decision as 'forced' (paragraph 2) primarily serves to:",
      choices: [
        { id: "A", text: "Illustrate why merely decoding what 'really happened' is insufficient, since no corrective account exists to check the narrator's testimony against.", explanation: "Correct. The passage explicitly states the novel 'supplies no authoritative alternative narrative,' which is why the reader must weigh harm and self-deception rather than simply solve a puzzle." },
        { id: "B", text: "Demonstrate that all unreliable narrators eventually tell outright lies.", explanation: "Contradicted directly — the passage specifies this narrator is 'never lying outright.'" },
        { id: "C", text: "Prove that readers can reliably determine the objective truth from a compromised narrator's account.", explanation: "Reverses the point — the passage stresses that no corrective account is supplied, making objective determination impossible, not reliable." },
        { id: "D", text: "Provide comic relief within an otherwise serious argument.", explanation: "Misreads tone and purpose — the example is presented as a serious illustration of an interpretive difficulty, not for comic effect." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The example is introduced immediately after the claim that unreliable narration involves more than detection, and the passage draws its conclusion directly from the example: because no corrective account exists, the reader must weigh harm against self-deception using only compromised testimony. Choice A captures this function precisely.",
      walkthrough: {
        approachNotes:
          "Function questions ask why a detail was included, not what it literally describes. Read the sentence that introduces the example and the sentence that follows it to find the point it is being used to support.",
        steps: [
          "Locate the example and note what it establishes: a narrator who distorts responsibility without lying outright.",
          "Read the following sentences: they emphasize the absence of any corrective account.",
          "Match that emphasis to the choices, eliminating B (contradicted) and C (reversed).",
          "Eliminate D as a misread of the passage's serious, argumentative tone.",
          "Select A as matching the example's stated function.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q13",
      passageId: "cars-p4",
      sectionId: "cars",
      order: 12,
      stem: "Based on the passage, the author would most likely agree that a novel using an unreliable narrator solely for comic misunderstanding, with no moral culpability at stake, would:",
      choices: [
        { id: "A", text: "Not actually qualify as an example of unreliable narration.", explanation: "Unsupported — paragraph 3 treats comic unreliability as a real category of the device, not as a disqualifying case." },
        { id: "B", text: "Represent a lesser or inferior use of the technique compared to ethically freighted unreliability.", explanation: "An unsupported value judgment the passage never makes; it treats the two uses as different in function, not in quality." },
        { id: "C", text: "Not necessarily require the same kind of ethical judgment the passage describes in paragraph 2.", explanation: "Correct. Paragraph 3 explicitly states that comic or defamiliarizing unreliability 'is not necessarily inviting the same kind of moral adjudication.'" },
        { id: "D", text: "Be impossible to write convincingly.", explanation: "Unsupported and unrelated to any claim in the passage." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Paragraph 3 draws a direct distinction between ethically freighted unreliability and unreliability used for comic or defamiliarizing purposes, stating explicitly that the latter does not necessarily require the same moral adjudication. Choice C is the most direct paraphrase of that qualification.",
      walkthrough: {
        approachNotes:
          "When a passage explicitly narrows its own claim in the final paragraph, inference questions often test whether you registered that narrowing rather than over-applying the passage's main thesis.",
        steps: [
          "Locate the qualification in paragraph 3 regarding comic or defamiliarizing unreliability.",
          "Paraphrase it: this type of unreliability doesn't necessarily invite the same moral judgment.",
          "Eliminate A, B, and D as claims the passage does not support.",
          "Match C to the explicit qualification.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q14",
      passageId: "cars-p4",
      sectionId: "cars",
      order: 13,
      stem: "The author's attitude toward the traditional 'puzzle' view of unreliable narration (paragraph 1) is best described as:",
      choices: [
        { id: "A", text: "Dismissive, regarding the puzzle view as entirely mistaken.", explanation: "Too strong — the passage says this framing 'is not wrong, exactly,' explicitly stopping short of dismissal." },
        { id: "B", text: "Measured, regarding the puzzle view as capturing something real but ultimately incomplete.", explanation: "Correct. The passage grants that readers 'who successfully decode it have essentially completed' one form of interpretive work, while arguing this framing 'obscures' something more demanding." },
        { id: "C", text: "Uncertain, taking no clear position on the puzzle view's merits.", explanation: "Incorrect — the passage clearly argues a position throughout, rather than remaining neutral." },
        { id: "D", text: "Enthusiastic, endorsing the puzzle view as fully sufficient.", explanation: "Contradicted — the author argues the view 'obscures' the more demanding ethical work many unreliable narrators require." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The author's opening move — 'not false, obscures' — signals partial agreement paired with a substantive objection, which is a measured rather than dismissive or fully endorsing stance. Choice B captures this precisely.",
      walkthrough: {
        approachNotes:
          "Tone questions require attention to hedging language ('not wrong, exactly,' 'though not false'). Such phrases usually signal a qualified rather than absolute attitude.",
        steps: [
          "Find the hedging language describing the puzzle view in paragraph 1.",
          "Note that it grants partial validity while identifying a limitation.",
          "Eliminate A and D as unhedged extremes contradicted by that language.",
          "Eliminate C, since the passage clearly does take a position.",
          "Select B as matching the measured, qualified tone.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q15",
      passageId: "cars-p4",
      sectionId: "cars",
      order: 14,
      stem: "Suppose a novel's narrator describes a car accident she caused, and her account is accompanied by a later-verified police report that corroborates her account in every detail. According to the passage's logic, this narrator's account would most likely:",
      choices: [
        { id: "A", text: "Exemplify the ethical function described in paragraph 2, since accidents involve genuine moral culpability.", explanation: "Misses the passage's actual condition — the ethical function depends specifically on the absence of any corrective account, which this scenario supplies." },
        { id: "B", text: "Prove that unreliable narration is impossible without an outright lie.", explanation: "Unsupported and not addressed by the scenario or the passage." },
        { id: "C", text: "Be irrelevant to the passage's argument, since the passage never discusses accidents specifically.", explanation: "Misreads relevance — the scenario tests the structural condition (presence or absence of a corrective account) the passage's argument depends on, regardless of the specific content." },
        { id: "D", text: "Not exemplify the ethical function described in paragraph 2, since a corroborating account removes the interpretive gap the passage identifies as essential.", explanation: "Correct. The passage's account depends on the novel supplying 'no authoritative alternative narrative'; a verified police report is exactly such an alternative, closing the gap the ethical reading requires." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage's ethical account of unreliable narration rests specifically on the absence of any corrective account against which to check the narrator's testimony. A hypothetical scenario that supplies exactly such a corrective account removes the premise the argument depends on, meaning the described function would not apply.",
      walkthrough: {
        approachNotes:
          "For apply-to-new-context questions, isolate the specific condition the passage's claim depends on, then check whether the new scenario satisfies or removes that condition — not just whether it's topically similar.",
        steps: [
          "Identify the load-bearing condition: no corrective account exists against which to check the narrator.",
          "Compare the hypothetical: a verified police report that corroborates the account in full.",
          "Recognize this supplies exactly the corrective account the passage says is absent in its ethical cases.",
          "Eliminate A as ignoring this condition, and C as misjudging relevance.",
          "Eliminate B as an unsupported overstatement.",
          "Select D as correctly tracking the passage's stated condition.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q16",
      passageId: "cars-p4",
      sectionId: "cars",
      order: 15,
      stem: "Suppose studies of readers of self-justifying unreliable narrators found that readers consistently reach identical, highly confident conclusions about the narrator's true culpability, with almost no variation in judgment. This finding would most directly:",
      choices: [
        { id: "A", text: "Strengthen the passage's claim that such narration functions as a rehearsal space for genuinely uncertain moral judgment.", explanation: "Reverses the effect — convergent, confident judgment is evidence against genuine interpretive uncertainty, not for it." },
        { id: "B", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the finding speaks directly to whether the kind of uncertain, effortful judgment the passage describes is actually occurring." },
        { id: "C", text: "Weaken the passage's suggestion that such narration involves genuine interpretive uncertainty, since convergent and confident judgment suggests otherwise.", explanation: "Correct. The passage's account depends on readers facing genuine difficulty weighing harm against self-deception; near-universal, confident agreement undercuts that premise." },
        { id: "D", text: "Strengthen the passage's argument by confirming that puzzle-solving alone resolves these narratives.", explanation: "Misreads the passage — the 'puzzle-solving' framing is the view the author argues is insufficient, not the author's own account." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage's central claim depends on genuine, effortful uncertainty in weighing a self-justifying narrator's account. A finding of consistent, confident, convergent reader judgment is evidence against that premise, which weakens rather than strengthens the argument.",
      walkthrough: {
        approachNotes:
          "For strengthen/weaken questions built on empirical findings, identify the psychological or interpretive premise the argument relies on, then check whether the finding is consistent with or contrary to that premise.",
        steps: [
          "Identify the premise: readers face genuine uncertainty weighing harm against self-deception.",
          "Compare the finding: readers converge confidently and consistently.",
          "Recognize this is inconsistent with genuine uncertainty, weakening the argument.",
          "Eliminate A and D, which misread the finding as supportive.",
          "Eliminate B, since the finding is directly on-topic.",
          "Select C as correctly identifying the weakening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q17",
      passageId: "cars-p5",
      sectionId: "cars",
      order: 16,
      stem: "Which of the following best expresses the author's main point?",
      choices: [
        { id: "A", text: "The obligation to keep a promise cannot be fully explained by the harm that breaking it would cause, since the obligation persists even when no harm would result.", explanation: "Correct. This is the passage's explicit thesis, illustrated by the deceased-recipient example and reaffirmed with its proper scope in the final paragraph." },
        { id: "B", text: "Harm is irrelevant to how broken promises are morally judged.", explanation: "Too strong — paragraph 3 states harm affects 'the degree of wrongness in many cases.'" },
        { id: "C", text: "Promises made to people who have since died carry no real moral weight.", explanation: "The opposite of the author's view — the passage treats breaking such a promise as 'a real wrong.'" },
        { id: "D", text: "The harm-based account fully and correctly explains why promises are binding.", explanation: "This is the view the passage argues against, not the author's conclusion." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage introduces the harm-based account, then uses a case with no harm to show the account cannot explain persistent obligation, and finally clarifies that harm still affects the degree, not the existence, of wrongness. Choice A is the only option matching this full argument.",
      walkthrough: {
        approachNotes:
          "Main-point choices should reflect both the passage's central objection and any qualification offered afterward — watch for distractors that state either an unqualified rejection or the rejected view itself.",
        steps: [
          "Identify the thesis: obligation persists without harm, so harm-based accounts are incomplete.",
          "Note the qualification: harm still affects degree of blame.",
          "Eliminate B as too strong given that qualification.",
          "Eliminate C and D as contradicting or restating the rejected view.",
          "Confirm A matches the thesis with its proper scope.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q18",
      passageId: "cars-p5",
      sectionId: "cars",
      order: 17,
      stem: "The example of a promise made to someone now deceased, undiscoverable by anyone else, primarily serves to:",
      choices: [
        { id: "A", text: "Show that promises to the dead are legally enforceable.", explanation: "Unsupported — the passage discusses moral obligation, not legal enforceability, and never raises this point." },
        { id: "B", text: "Illustrate a situation the author considers morally trivial.", explanation: "Contradicted — the passage treats breaking this promise as 'a real wrong,' the opposite of trivial." },
        { id: "C", text: "Isolate a case where harm is absent, testing whether the harm-based account can explain the persistence of obligation.", explanation: "Correct. The passage explicitly constructs this example to remove harm from the equation and observe whether obligation still holds." },
        { id: "D", text: "Demonstrate that secrecy negates a promise's moral force.", explanation: "Reverses the point — the example shows obligation persists despite secrecy, not that secrecy negates it." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "This example is constructed specifically to strip away harm — no one else knows of the promise, and no one is affected by its breach — so that the passage can test whether obligation survives. Choice C correctly identifies this diagnostic function.",
      walkthrough: {
        approachNotes:
          "For function questions about a hypothetical case, ask what variable the passage is deliberately controlling for and what conclusion it draws once that variable is removed.",
        steps: [
          "Identify what the example removes: any possibility of harm to another party.",
          "Note the conclusion drawn: obligation persists despite this removal.",
          "Eliminate A, B, and D as claims the passage does not make or reverses of its actual point.",
          "Select C as matching the example's diagnostic role.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q19",
      passageId: "cars-p5",
      sectionId: "cars",
      order: 18,
      stem: "According to the passage, the author would most likely agree that:",
      choices: [
        { id: "A", text: "Harm has no bearing whatsoever on how blameworthy a broken promise is judged to be.", explanation: "Contradicted by paragraph 3, which states harm tracks the 'gradation in blame ... quite closely.'" },
        { id: "B", text: "The severity of harm caused by breaking a promise can affect how blameworthy the breach is, even though it does not fully explain the underlying obligation.", explanation: "Correct. This is a direct paraphrase of paragraph 3's distinction between degree of wrongness and existence of obligation." },
        { id: "C", text: "Promises made with no possibility of being discovered are not truly binding.", explanation: "Contradicted — the deceased-recipient example shows undiscoverable promises are still treated as binding." },
        { id: "D", text: "The harm-based account is useful only for promises involving financial matters.", explanation: "Unsupported — the passage never restricts the harm-based account's relevance to financial promises." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "Paragraph 3 explicitly states that harm explains 'the degree of wrongness in many cases' without explaining 'the existence of the underlying obligation.' Choice B is the closest paraphrase of this stated distinction.",
      walkthrough: {
        approachNotes:
          "When a passage draws an explicit distinction (here: degree of wrongness versus existence of obligation), the correct inference choice usually restates that exact distinction rather than introducing a new claim.",
        steps: [
          "Locate the explicit distinction in paragraph 3.",
          "Paraphrase it: harm affects degree of blame, not whether the obligation exists at all.",
          "Eliminate A and C as contradicted by the passage.",
          "Eliminate D as an unsupported restriction.",
          "Match B to the paraphrased distinction.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q20",
      passageId: "cars-p5",
      sectionId: "cars",
      order: 19,
      stem: "The author's attitude toward the harm-based account of promising is best described as:",
      choices: [
        { id: "A", text: "Harshly dismissive, treating the account as simplistic and unworthy of consideration.", explanation: "Too strong — the passage calls the account 'attractively simple,' granting it real appeal." },
        { id: "B", text: "Fully accepting, endorsing the account without reservation.", explanation: "Contradicted — the passage argues the account 'struggles to explain' key cases." },
        { id: "C", text: "Neutral, expressing no clear evaluation of the account.", explanation: "Incorrect — the passage takes a clear critical position throughout." },
        { id: "D", text: "Measured, acknowledging the account's appeal while ultimately judging it incomplete.", explanation: "Correct. The passage calls the account 'attractively simple' before showing it cannot explain a case central to how promises are actually treated." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage grants the harm-based account genuine appeal ('attractively simple') before mounting a specific objection to its completeness, which is a measured rather than a dismissive or fully accepting stance.",
      walkthrough: {
        approachNotes:
          "Look for concessive language ('attractively simple, but...') as a signal of a measured, qualified attitude rather than an absolute one.",
        steps: [
          "Find the concessive phrase describing the harm-based account.",
          "Note the objection that follows it.",
          "Eliminate A and B as unhedged extremes.",
          "Eliminate C, since the passage clearly argues a position.",
          "Select D as matching the concession-plus-objection structure.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q21",
      passageId: "cars-p5",
      sectionId: "cars",
      order: 20,
      stem: "Suppose a person promises a stranger, whom they will never see again and who will immediately and permanently forget the promise due to a rare memory condition, that they will mail a letter for them. If the person fails to mail the letter, the passage's logic most directly implies that this failure:",
      choices: [
        { id: "A", text: "Still constitutes a real wrong, since the obligation attaches to the act of promising rather than to any resulting harm.", explanation: "Correct. This follows the same logic as the deceased-recipient example: obligation is generated by the act of promising itself, independent of harm or discovery." },
        { id: "B", text: "Is not wrong, since no one is harmed by the omission.", explanation: "This is precisely the harm-based conclusion the passage's argument is constructed to reject." },
        { id: "C", text: "Is wrong only if the stranger might somehow remember the promise later.", explanation: "Misreads the hypothetical, which stipulates guaranteed, permanent forgetting, leaving no such possibility." },
        { id: "D", text: "Cannot be evaluated without knowing the letter's contents.", explanation: "Irrelevant under the passage's logic, which locates the obligation in the act of promising, not in the content of what was promised." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "This scenario mirrors the passage's own deceased-recipient example: harm and discovery are both eliminated by the hypothetical, yet the passage's argument holds that the obligation persists because it derives from the act of promising, not from anticipated harm.",
      walkthrough: {
        approachNotes:
          "Apply-to-new-context questions often present a scenario structurally identical to one already in the passage. Recognize the parallel structure before evaluating the choices.",
        steps: [
          "Compare the new scenario to the passage's deceased-recipient example: both eliminate harm and discovery.",
          "Recall the passage's conclusion for that parallel case: obligation persists regardless.",
          "Eliminate B, which restates the rejected harm-based view.",
          "Eliminate C and D as irrelevant complications not supported by the passage's stated logic.",
          "Select A as the direct application of the passage's reasoning.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q22",
      passageId: "cars-p5",
      sectionId: "cars",
      order: 21,
      stem: "Suppose researchers found that, across many cultures, people who make secret promises to the deceased and later break them privately report no more guilt than people who never made any such promise. This finding would most directly:",
      choices: [
        { id: "A", text: "Strengthen the passage's argument that obligation persists independent of harm.", explanation: "Reverses the effect — the passage's argument relies on people feeling bound by such promises, which this finding contradicts." },
        { id: "B", text: "Weaken the passage's claim that people generally continue to feel bound by such promises, since it contradicts the passage's premise about persistent felt obligation.", explanation: "Correct. The passage's central example depends on people regarding breach of such a promise as 'a real wrong'; a finding of equal guilt levels directly undercuts that empirical premise." },
        { id: "C", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the finding speaks directly to the empirical premise the passage's central example relies on." },
        { id: "D", text: "Support the harm-based account the passage argues against.", explanation: "Overstates the finding's implication — it undercuts the passage's specific example, but does not on its own establish that harm explains promise obligation generally." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage's argument for obligation surviving the absence of harm rests on the claim that people 'continue to feel bound' by such promises. A finding that breaking them produces no elevated guilt directly undermines that premise, weakening the argument.",
      walkthrough: {
        approachNotes:
          "Identify the specific empirical premise a philosophical argument relies on, then check whether new data confirms or contradicts that premise, rather than the argument's conclusion in the abstract.",
        steps: [
          "Locate the premise: people continue to feel bound by secret promises to the deceased.",
          "Compare the finding: broken secret promises produce no elevated guilt.",
          "Recognize the finding directly contradicts the premise.",
          "Eliminate A as reversing the effect.",
          "Eliminate C as ignoring direct relevance, and D as overreaching beyond what the finding shows.",
          "Select B as correctly identifying the weakening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q23",
      passageId: "cars-p6",
      sectionId: "cars",
      order: 22,
      stem: "Which of the following best captures the author's main point?",
      choices: [
        { id: "A", text: "Rituals never carry any symbolic content that can be articulated by participants.", explanation: "Contradicted — paragraph 3 states many rites 'plainly do encode articulable symbolism.'" },
        { id: "B", text: "Anthropologists should stop asking ritual participants what their rituals mean.", explanation: "Too strong — the passage values such interpretations 'where available' rather than urging that the question be abandoned." },
        { id: "C", text: "The absence of an articulated interpretation does not mean a ritual lacks significance, since meaning or function can reside in the performance itself.", explanation: "Correct. This is the passage's explicit thesis, developed through the grammar analogy and reaffirmed with its scope clarified in the final paragraph." },
        { id: "D", text: "All rituals are governed by rules as strict and systematic as the grammar of a language.", explanation: "Overreads the grammar comparison, which is offered as an illustrative analogy, not a literal claim of identical structure." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage argues against equating an uninterpreted ritual with a meaningless one, using the grammar analogy to show competent, rule-governed behavior can occur without explicit articulation, and closes by clarifying this doesn't deny symbolism exists where offered. Choice C matches this full argument.",
      walkthrough: {
        approachNotes:
          "Check whether a main-point choice reflects the passage's central move (performance can carry significance without articulated meaning) without overextending into claims the passage explicitly limits.",
        steps: [
          "State the thesis: uninterpreted ritual isn't necessarily meaningless ritual.",
          "Eliminate A as contradicted by the final paragraph's concession.",
          "Eliminate B as an overly strong prescriptive claim not made.",
          "Eliminate D as overreading the analogy's function.",
          "Confirm C matches the thesis's actual scope.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q24",
      passageId: "cars-p6",
      sectionId: "cars",
      order: 23,
      stem: "The comparison to a fluent speaker who cannot state grammatical rules primarily functions to:",
      choices: [
        { id: "A", text: "Illustrate how competent, meaningful behavior can occur without the practitioner being able to articulate an explicit rule governing it.", explanation: "Correct. The passage draws this analogy specifically to show that inability to articulate a rule doesn't mean no rule, or structure, is operating." },
        { id: "B", text: "Prove that ritual and language are governed by literally identical cognitive mechanisms.", explanation: "Overreads the analogy — the passage uses it illustratively, not to claim an identical underlying mechanism." },
        { id: "C", text: "Show that language is a more meaningful system than ritual.", explanation: "Not a comparison the passage makes; the analogy is used to support a point about ritual, not to rank the two systems." },
        { id: "D", text: "Demonstrate that grammatical rules do not really exist.", explanation: "Contradicted — the passage states the speaker's judgment 'tracks real, systematic structure.'" },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage introduces the fluent-speaker case immediately after questioning the inference from unarticulated interpretation to absent meaning, and explicitly draws the parallel to ritual performance in the sentences that follow. Choice A captures this illustrative function.",
      walkthrough: {
        approachNotes:
          "For analogies, identify the specific inferential gap the analogy is meant to bridge, then match the choice that states that bridging function rather than a literal identity claim.",
        steps: [
          "Locate the analogy and the claim it follows: inability to articulate doesn't mean absence of structure.",
          "Read the sentence applying the analogy to ritual performance.",
          "Eliminate B as overreading the analogy into identity.",
          "Eliminate C and D as claims the passage does not make.",
          "Select A as matching the analogy's illustrative role.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q25",
      passageId: "cars-p6",
      sectionId: "cars",
      order: 24,
      stem: "Based on the passage, the author would most likely agree that:",
      choices: [
        { id: "A", text: "A ritual's social function depends entirely on participants holding an explicit symbolic interpretation.", explanation: "The opposite of the passage's argument, which holds that performance alone can carry the function." },
        { id: "B", text: "Anthropologists' interpretations of ritual meaning are generally unreliable.", explanation: "Unsupported — the passage never evaluates the reliability of anthropologists' interpretations." },
        { id: "C", text: "Rituals that lack an articulated interpretation should be considered inauthentic.", explanation: "Unsupported and contrary to the passage's core argument, which defends the significance of such rituals." },
        { id: "D", text: "A ritual's social function can depend more on precise, correctly executed performance than on any explicit symbolic content held in participants' minds.", explanation: "Correct. This directly follows from paragraph 2's claim that '[w]hat matters for a rite's social function may be the precision of its performance.'" },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Paragraph 2 states explicitly that ritual efficacy may depend on precise performance rather than on an explicit propositional theory participants hold. Choice D is the closest paraphrase of this stated claim.",
      walkthrough: {
        approachNotes:
          "For 'would agree' questions, prefer the choice closest to an explicit sentence in the passage over choices requiring unsupported extrapolation.",
        steps: [
          "Locate the explicit claim in paragraph 2 about performance versus explicit theory.",
          "Paraphrase it: performance precision, not explicit belief, can carry the function.",
          "Eliminate A, B, and C as unsupported or contrary to the passage.",
          "Match D to the paraphrased claim.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q26",
      passageId: "cars-p6",
      sectionId: "cars",
      order: 25,
      stem: "The author's attitude toward scholars who conclude that many rituals are 'essentially empty of meaning' is best described as:",
      choices: [
        { id: "A", text: "Fully sympathetic, sharing their conclusion.", explanation: "The opposite of the passage's position, which argues this conclusion 'moves too quickly.'" },
        { id: "B", text: "Critical, viewing the conclusion as a hasty inference from an absence of articulated interpretation.", explanation: "Correct. The passage explicitly states this conclusion 'moves too quickly from an absence of articulated interpretation to an absence of significance.'" },
        { id: "C", text: "Indifferent, expressing no view on the matter.", explanation: "Incorrect — the passage takes a clear critical position." },
        { id: "D", text: "Admiring of the rigor of their methodology.", explanation: "Not indicated anywhere in the passage." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage directly characterizes this conclusion as moving 'too quickly,' a clear marker of critical, skeptical disagreement rather than sympathy or indifference.",
      walkthrough: {
        approachNotes:
          "Locate the sentence directly evaluating the view in question — evaluative verbs and adverbs ('too quickly') are strong signals of the author's attitude.",
        steps: [
          "Find the sentence directly assessing the 'essentially empty of meaning' conclusion.",
          "Note the critical language used ('moves too quickly').",
          "Eliminate A and D as unsupported by that language.",
          "Eliminate C, since the passage clearly takes a position.",
          "Select B as matching the critical tone.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q27",
      passageId: "cars-p6",
      sectionId: "cars",
      order: 26,
      stem: "Suppose ethnographers documented a community whose members, when asked about a harvest rite, unanimously and fluently articulated an elaborate symbolic interpretation, yet whose actual performance of the rite was routinely sloppy, with steps skipped or reordered without apparent concern. According to the passage's logic, this finding would most directly:",
      choices: [
        { id: "A", text: "Complicate the passage's suggestion that ritual efficacy depends primarily on precise performance, since here articulated interpretation is rich while performance precision is largely absent.", explanation: "Correct. This is the reverse of the pattern the passage emphasizes, in which precision without articulation carries the function; a case of rich articulation without precision cuts against generalizing that pattern." },
        { id: "B", text: "Straightforwardly confirm the passage's argument about performance and meaning.", explanation: "Misreads the scenario, which presents the opposite pattern from the one the passage emphasizes." },
        { id: "C", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the scenario bears directly on the passage's claim about the relationship between performance and articulated interpretation." },
        { id: "D", text: "Prove that this particular rite has no social function at all.", explanation: "Overreads the scenario — the passage's framework does not support drawing this strong a conclusion from the case alone." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage's argument emphasizes cases where precise performance carries significance despite an absence of articulated interpretation. A scenario with the reverse pattern — rich articulation, sloppy performance — does not fit that emphasis neatly and complicates any attempt to generalize it as the typical case.",
      walkthrough: {
        approachNotes:
          "For apply-to-new-context questions, check whether the hypothetical matches, reverses, or is orthogonal to the specific pattern the passage emphasizes, rather than just checking topical relevance.",
        steps: [
          "Identify the pattern the passage emphasizes: precision without articulation carrying function.",
          "Compare the scenario: articulation without precision.",
          "Recognize this is the reverse pattern, which complicates rather than confirms the emphasis.",
          "Eliminate B as misreading the scenario as confirmatory.",
          "Eliminate C and D as under- or over-stating the scenario's relevance.",
          "Select A as correctly capturing the complicating effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q28",
      passageId: "cars-p6",
      sectionId: "cars",
      order: 27,
      stem: "Suppose it were shown that in numerous documented cultures, when a ritual's precise sequence is disrupted, the community treats the rite as having failed and repeats it entirely, regardless of whether any participant can articulate the rite's symbolic meaning. This finding would most directly:",
      choices: [
        { id: "A", text: "Weaken the passage's claim that performance precision can matter independent of articulated interpretation.", explanation: "Reverses the effect — a community insisting on precise repetition regardless of articulated meaning is evidence for, not against, the passage's claim." },
        { id: "B", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the finding directly addresses the relationship between precision, articulation, and ritual function." },
        { id: "C", text: "Strengthen the passage's claim that ritual efficacy can depend on precise performance independent of an articulated interpretation.", explanation: "Correct. This finding shows communities treating precision as essential to a rite's success even without regard to articulated meaning, directly supporting the passage's central claim." },
        { id: "D", text: "Support the view that such rituals are meaningless formalism.", explanation: "Misreads the finding — a community's insistence on correct repetition indicates the performance carries real functional weight, the opposite of meaninglessness." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage argues that a ritual's social function can hinge on precise performance independent of explicit articulation. A finding that disrupted sequences are treated as failures requiring repetition — regardless of articulated meaning — directly supports that claim.",
      walkthrough: {
        approachNotes:
          "For strengthen scenarios, check whether the new evidence directly instantiates the mechanism the passage proposes, rather than merely being thematically related.",
        steps: [
          "Identify the proposed mechanism: precision of performance can carry ritual function independent of articulation.",
          "Compare the finding: disrupted precision leads to treating the rite as failed, regardless of articulated meaning.",
          "Recognize this is a direct instance of the proposed mechanism.",
          "Eliminate A and D as misreading the finding's direction.",
          "Eliminate B as ignoring direct relevance.",
          "Select C as correctly identifying the strengthening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q29",
      passageId: "cars-p7",
      sectionId: "cars",
      order: 28,
      stem: "Which of the following best states the author's main point?",
      choices: [
        { id: "A", text: "Photography and painting involve identical kinds of authorship.", explanation: "Contradicted — the passage explicitly states the two do not involve 'identical kinds' of authorship." },
        { id: "B", text: "Photography's indexical, mechanical relationship to its subject constrains but does not eliminate the photographer's claim to authorship.", explanation: "Correct. This is the passage's explicit thesis, developed through the two-photographers example and restated with its proper scope in the final paragraph." },
        { id: "C", text: "Photographs are merely mechanical recordings with no meaningful authorial input.", explanation: "This is the strong claim the passage argues against, not the author's own conclusion." },
        { id: "D", text: "Painting is a superior art form to photography.", explanation: "An unsupported value judgment never made in the passage." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage grants the indexical objection some validity, then shows through the two-photographers example that authorial choice still operates within that constraint, and finally clarifies that the dispute is one of degree and kind, not presence versus absence. Choice B is the only option matching this full argument.",
      walkthrough: {
        approachNotes:
          "Watch for main-point distractors that state either the rejected strong claim or an unsupported reversal of it — the correct choice usually preserves the passage's careful middle position.",
        steps: [
          "State the thesis: indexical constraint limits but doesn't eliminate authorship.",
          "Eliminate C as the rejected strong claim.",
          "Eliminate A as overstating the passage's actual, qualified conclusion.",
          "Eliminate D as an unsupported value judgment.",
          "Confirm B matches the thesis's qualified scope.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "medium",
    },
    {
      id: "cars-q30",
      passageId: "cars-p7",
      sectionId: "cars",
      order: 29,
      stem: "The example of two skilled photographers producing different images of the identical scene primarily serves to:",
      choices: [
        { id: "A", text: "Prove that all photographers possess equal technical skill.", explanation: "Not the point of the example, which concerns differences in choices, not equality of skill." },
        { id: "B", text: "Show that photography is an easier art form to master than painting.", explanation: "Not a comparison the passage makes." },
        { id: "C", text: "Establish that photographs of the same subject are generally indistinguishable from one another.", explanation: "The opposite of the example's point, which is that the two photographers 'produce two recognizably different images.'" },
        { id: "D", text: "Demonstrate that choices like framing, timing, and exposure produce meaningfully different images without inventing content, supporting the claim that authorship includes selective shaping.", explanation: "Correct. The passage draws this example specifically to show that authorial choice operates through selection and framing, not only through invention of content." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "This example immediately follows the claim that the strong anti-authorship view 'founders,' and it is used to demonstrate that meaningful differences arise entirely from choices about existing content, supporting the passage's expanded conception of authorship.",
      walkthrough: {
        approachNotes:
          "Identify what specific claim an example is positioned to defend by reading the sentence that introduces it and the sentence that draws its conclusion.",
        steps: [
          "Locate the example and the claim it follows: the strong anti-authorship view 'founders on a simple observation.'",
          "Read the concluding sentence: authorship must include selective shaping of existing content.",
          "Eliminate A, B, and C as mismatched with this stated function.",
          "Select D as matching the example's role.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q31",
      passageId: "cars-p7",
      sectionId: "cars",
      order: 30,
      stem: "Based on the passage, the author would most likely agree that:",
      choices: [
        { id: "A", text: "A photographer's authorial contribution can be significant even without adding content that was not physically present before the camera.", explanation: "Correct. This follows directly from the passage's claim that choices like framing and timing shape meaning without inventing content." },
        { id: "B", text: "A photograph's value is determined solely by the technical quality of the camera used.", explanation: "Not discussed anywhere in the passage." },
        { id: "C", text: "Photographers who use identical equipment will always produce identical images.", explanation: "Directly contradicted by the passage's central example." },
        { id: "D", text: "Authorship in photography is impossible under any circumstances.", explanation: "Contradicted — this is the strong claim the passage rejects." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage's central argument is that authorial choices shaping existing content — without inventing new content — still constitute meaningful authorship. Choice A is a direct restatement of that claim.",
      walkthrough: {
        approachNotes:
          "For inference questions, favor the choice that restates the passage's stated conclusion over ones introducing unsupported claims about topics the passage never addresses.",
        steps: [
          "Identify the passage's core claim about authorship without invention.",
          "Paraphrase it: significant authorship can occur through selection alone.",
          "Eliminate B as an unaddressed topic.",
          "Eliminate C and D as directly contradicted.",
          "Match A to the paraphrased claim.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q32",
      passageId: "cars-p7",
      sectionId: "cars",
      order: 31,
      stem: "The author's attitude toward the objection that photography lacks authorship because it is indexical is best described as:",
      choices: [
        { id: "A", text: "A total rejection of the objection's premise as false.", explanation: "Too strong — the passage says the objection 'captures something true about photography's distinctive relationship to its subject.'" },
        { id: "B", text: "Complete agreement with the objection's conclusion.", explanation: "Contradicted — the passage argues against the strong conclusion that photographs lack meaningful authorship." },
        { id: "C", text: "A partial concession to the premise combined with disagreement about the strong conclusion drawn from it.", explanation: "Correct. The passage grants the indexical premise real validity while rejecting the conclusion that authorship is therefore absent." },
        { id: "D", text: "Indifference, taking no clear position.", explanation: "Incorrect — the passage argues a clear position throughout." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage explicitly grants that the objection 'captures something true' while arguing it has been 'pressed into a stronger claim than the evidence supports.' This concession-plus-rejection structure is what choice C describes.",
      walkthrough: {
        approachNotes:
          "Look for a two-part structure — concession followed by objection — as the marker of a measured attitude rather than total agreement or rejection.",
        steps: [
          "Find the concessive language about the indexical objection.",
          "Find the objection to its overextension into a stronger claim.",
          "Eliminate A and B as unhedged extremes.",
          "Eliminate D, since the passage clearly argues a position.",
          "Select C as matching the concession-plus-objection structure.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q33",
      passageId: "cars-p7",
      sectionId: "cars",
      order: 32,
      stem: "Suppose a documentary-photography contest required entrants to use a fixed camera position, fixed exposure, and fixed framing set by organizers, leaving entrants only the choice of the exact instant of the shutter click. According to the passage's logic, the range of meaningfully different, authored images producible under these constraints would most likely be:",
      choices: [
        { id: "A", text: "Unaffected, since photography is never genuinely authored regardless of constraints.", explanation: "Contradicts the passage's actual thesis, which defends photographic authorship." },
        { id: "B", text: "Wider than in ordinary photography, since a fixed setup ensures fairness and thus more creativity.", explanation: "Unsupported — the passage never links fairness of setup to increased creativity, and this reverses the expected effect of removing choices." },
        { id: "C", text: "Reduced to zero, since removing framing and exposure choices eliminates authorship entirely.", explanation: "Too strong — the passage's own example shows timing alone, such as waiting for a passing cloud, can itself be an authorial choice." },
        { id: "D", text: "Narrower than in ordinary photography, since most of the authorial choices the passage identifies — framing, exposure, and timing beyond the instant — have been removed, leaving only one degree of freedom.", explanation: "Correct. The passage identifies framing, timing, focus, and exposure as the relevant authorial choices; removing all but one narrows, without eliminating, the space for authored variation." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage identifies several specific choices — framing, timing, focus, exposure — as the source of photographic authorship. Restricting a photographer to only one of these (timing of the shutter click) narrows the space of possible authored variation without eliminating it entirely, since the passage's own logic treats even timing alone as authorially significant.",
      walkthrough: {
        approachNotes:
          "For apply-to-new-context questions involving a change in available choices, enumerate exactly which choices the passage identifies as meaningful, then evaluate what happens as those choices are removed one by one.",
        steps: [
          "List the choices the passage identifies as authorial: framing, timing, focus, exposure.",
          "Note which the hypothetical removes: framing, exposure, and most timing choices, leaving shutter-click timing.",
          "Recognize this narrows rather than eliminates the space for authored variation, since the passage treats timing alone as meaningful.",
          "Eliminate A as contradicting the passage's thesis and C as too strong given the timing example.",
          "Eliminate B as an unsupported reversal.",
          "Select D as correctly reflecting a narrowed, not eliminated, range.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q34",
      passageId: "cars-p7",
      sectionId: "cars",
      order: 33,
      stem: "Suppose professional photo editors, shown pairs of images taken by different photographers of the same static scene under near-identical conditions, could not reliably distinguish which photographer took which image or identify any meaningful stylistic difference between them. This finding would most directly:",
      choices: [
        { id: "A", text: "Strengthen the passage's argument about photographic authorship.", explanation: "Reverses the effect — this finding is contrary to, not supportive of, the passage's central claim." },
        { id: "B", text: "Weaken the passage's argument, since it undercuts the claim that skilled photographers' choices produce recognizably different, individually authored images.", explanation: "Correct. The passage's central example depends on skilled photographers producing 'recognizably different images'; a finding that expert editors cannot distinguish them directly undermines that premise." },
        { id: "C", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the finding directly bears on the passage's key empirical premise about photographers producing distinguishable images." },
        { id: "D", text: "Support only the passage's concession about indexical constraints, without affecting its main argument.", explanation: "Understates the impact — the finding undercuts the central evidentiary claim supporting authorship, not merely a peripheral concession." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage's argument for expanded authorship rests on the empirical claim that skilled photographers, given identical scenes, produce recognizably different images. A finding that trained editors cannot distinguish such images directly undermines that claim, weakening the passage's argument.",
      walkthrough: {
        approachNotes:
          "Locate the specific empirical claim an argument depends on, then assess whether new evidence is consistent with or contradicts that specific claim, rather than the passage's broader theme.",
        steps: [
          "Identify the premise: skilled photographers produce recognizably different images from the same scene.",
          "Compare the finding: expert editors cannot distinguish such images or identify stylistic differences.",
          "Recognize this directly contradicts the premise.",
          "Eliminate A as reversing the effect.",
          "Eliminate C as ignoring direct relevance, and D as understating the finding's impact.",
          "Select B as correctly identifying the weakening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q35",
      passageId: "cars-p8",
      sectionId: "cars",
      order: 34,
      stem: "Which of the following best captures the author's main point?",
      choices: [
        { id: "A", text: "Presentism is not actually an error historians need to guard against.", explanation: "Contradicted — the passage calls the prohibition 'salutary and well-earned.'" },
        { id: "B", text: "Historians should always describe past events using modern vocabulary.", explanation: "Too strong and unsupported — the passage defends a narrow, clearly marked use of modern concepts, not unrestricted use." },
        { id: "C", text: "Historians should never evaluate past practices using present-day moral standards.", explanation: "Contradicted — the passage defends clearly marked retrospective moral evaluation as legitimate." },
        { id: "D", text: "The blanket prohibition on anachronism conflates a legitimate retrospective analytic tool with the genuine error of attributing present concepts to past actors' own understanding.", explanation: "Correct. This is the passage's explicit thesis, developed through the inflation example and restated directly in the final paragraph." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage affirms the value of the presentism critique, then distinguishes anachronistic description (an error) from anachronistic analysis (a defensible tool), and closes by stating that the blanket prohibition conflates these two practices. Choice D is the only option capturing this full distinction.",
      walkthrough: {
        approachNotes:
          "Main-point choices for a passage built around a key distinction (here: description versus analysis) should reflect that distinction, not collapse it into an absolute rule in either direction.",
        steps: [
          "Identify the central distinction: anachronistic description (error) versus anachronistic analysis (defensible tool).",
          "Eliminate A as contradicting the passage's respect for the presentism critique.",
          "Eliminate B and C as absolute claims the passage does not make.",
          "Confirm D reflects the passage's actual, distinction-based thesis.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "medium",
    },
    {
      id: "cars-q36",
      passageId: "cars-p8",
      sectionId: "cars",
      order: 35,
      stem: "The example involving the modern concept of 'inflation' primarily serves to:",
      choices: [
        { id: "A", text: "Prove that inflation did not actually occur in the seventeenth century.", explanation: "Not the point of the example, which concerns how the concept is used analytically, not whether the underlying economic event occurred." },
        { id: "B", text: "Show that economic history is more methodologically rigorous than other historical subfields.", explanation: "Not a comparison the passage makes." },
        { id: "C", text: "Demonstrate that modern economic theory is fundamentally flawed.", explanation: "Not addressed anywhere in the passage." },
        { id: "D", text: "Illustrate the distinction between falsely attributing a modern concept to past actors' own understanding and applying it as the historian's own retrospective analytic tool.", explanation: "Correct. The passage uses this example specifically to contrast the erroneous attribution with the legitimate retrospective use of the same concept." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage introduces the inflation example immediately after announcing 'the needed distinction' and uses it to show precisely how the same concept can be misused (attributed to past minds) or properly used (as a historian's retrospective tool). Choice D captures this function.",
      walkthrough: {
        approachNotes:
          "When an example is introduced right after a stated distinction, its function is almost always to illustrate that exact distinction — read the surrounding sentences to confirm.",
        steps: [
          "Locate the sentence announcing 'the needed distinction' just before the example.",
          "Trace how the example splits into two cases: false attribution versus retrospective tool.",
          "Eliminate A, B, and C as unrelated to this distinction.",
          "Select D as matching the example's illustrative role.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q37",
      passageId: "cars-p8",
      sectionId: "cars",
      order: 36,
      stem: "Based on the passage, the author would most likely agree that:",
      choices: [
        { id: "A", text: "Any historian who uses modern vocabulary to describe the past has committed the error of presentism.", explanation: "Too strong — the passage explicitly defends a clearly marked, non-attributing use of modern vocabulary as legitimate." },
        { id: "B", text: "Moral evaluation of the past by present standards is always illegitimate.", explanation: "Contradicted — the passage defends clearly marked retrospective moral evaluation." },
        { id: "C", text: "A historian who explicitly marks a moral judgment as her own retrospective view, rather than attributing it to historical actors, has not committed the error the presentism critique targets.", explanation: "Correct. This directly restates the passage's claim about moral evaluation in the second paragraph." },
        { id: "D", text: "Historians rarely, if ever, actually commit the error of anachronistic description.", explanation: "Contradicted — the passage states this failure mode 'remains genuinely common.'" },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Paragraph 2 explicitly states that a historian who marks a moral judgment as her own retrospective view, rather than attributing it to contemporaries, 'has not committed the error the presentism critique is meant to prevent.' Choice C is a direct paraphrase of this claim.",
      walkthrough: {
        approachNotes:
          "When a passage extends a distinction from one domain (descriptive concepts) to another (moral evaluation), expect an inference question testing whether that extension was registered.",
        steps: [
          "Locate the extension of the description/analysis distinction to moral evaluation.",
          "Paraphrase it: marking a judgment as retrospective avoids the presentism error.",
          "Eliminate A, B, and D as contradicted by the passage.",
          "Match C to the paraphrased claim.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q38",
      passageId: "cars-p8",
      sectionId: "cars",
      order: 37,
      stem: "The author's attitude toward the traditional prohibition on anachronism is best described as:",
      choices: [
        { id: "A", text: "The author considers the prohibition entirely misguided and without merit.", explanation: "Too strong — the passage calls the prohibition 'salutary and well-earned.'" },
        { id: "B", text: "Respectful of its underlying purpose while arguing against its application as an absolute, blanket rule.", explanation: "Correct. The passage affirms the prohibition's value while arguing its blanket, absolute form would exclude legitimate historical practices." },
        { id: "C", text: "Fully accepting of the prohibition without any qualification.", explanation: "Contradicted — the passage explicitly argues against its unqualified, absolute application." },
        { id: "D", text: "Indifferent to the debate over anachronism.", explanation: "Incorrect — the passage takes a clear, argued position." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage affirms the prohibition is 'salutary and well-earned' while arguing that, 'taken as an absolute rule,' it would exclude valuable historical practices. This combination of respect and qualified disagreement is what choice B describes.",
      walkthrough: {
        approachNotes:
          "Look for a two-part structure of endorsement followed by a limiting qualification as the signal of a respectful-but-qualified attitude.",
        steps: [
          "Find the endorsing language about the prohibition's value.",
          "Find the qualification about its absolute application.",
          "Eliminate A and C as unhedged extremes.",
          "Eliminate D, since the passage clearly argues a position.",
          "Select B as matching the endorsement-plus-qualification structure.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q39",
      passageId: "cars-p8",
      sectionId: "cars",
      order: 38,
      stem: "A historian writes: 'Ancient Roman writers on friendship were, without realizing it, grappling with what we would now call attachment theory.' According to the passage's distinction, this sentence is best classified as:",
      choices: [
        { id: "A", text: "An instance of the error the presentism critique targets, since it attributes engagement with a modern conceptual framework to the ancient writers' own understanding rather than presenting it as the historian's retrospective tool.", explanation: "Correct. The phrase 'grappling with ... without realizing it' claims the ancient writers themselves were engaging with the modern framework, which is exactly the false attribution the passage identifies as the error." },
        { id: "B", text: "A legitimate use of a retrospective analytic tool, since it is clearly the historian's own framework.", explanation: "Incorrect — the sentence attributes actual engagement with the framework to the ancient writers, not merely to the historian's own analytic lens." },
        { id: "C", text: "A moral evaluation rather than a descriptive claim.", explanation: "Incorrect — the sentence makes a conceptual/descriptive claim about what the writers were doing, not a moral judgment." },
        { id: "D", text: "An example the passage explicitly discusses.", explanation: "Incorrect — the passage never mentions attachment theory; this is a new scenario requiring the passage's distinction to be applied." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage's key distinction is between attributing a modern concept to past actors' own understanding (an error) and applying it as the historian's clearly marked retrospective tool (legitimate). Because this sentence claims the ancient writers were themselves 'grappling with' the modern framework, it falls on the error side of that distinction.",
      walkthrough: {
        approachNotes:
          "For apply-to-new-context questions built on a passage's central distinction, isolate exactly which side of the distinction the new example falls on by checking who is doing the conceptualizing — the past actors or the historian.",
        steps: [
          "Recall the passage's distinction: attributing a concept to past minds versus applying it as the historian's own tool.",
          "Check who the sentence attributes the conceptual engagement to: the ancient writers themselves.",
          "Recognize this matches the error side of the distinction, not the legitimate side.",
          "Eliminate B as misreading who is doing the conceptualizing.",
          "Eliminate C and D as mismatched with the sentence's content.",
          "Select A as correctly classifying the sentence.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q40",
      passageId: "cars-p8",
      sectionId: "cars",
      order: 39,
      stem: "Suppose textual evidence showed that seventeenth-century merchants explicitly recorded a concept indistinguishable from modern inflation theory, including price-level reasoning nearly identical to modern economic analysis, and self-consciously reasoned about their crisis in these terms. This finding would most directly:",
      choices: [
        { id: "A", text: "Strengthen the passage's chosen example of anachronistic description.", explanation: "Reverses the effect — the example depended specifically on contemporaries lacking the concept, which this finding removes." },
        { id: "B", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the finding bears directly on the specific example the passage uses to illustrate its distinction." },
        { id: "C", text: "Undercut the passage's chosen example, since describing those merchants as understanding their crisis via inflation theory would no longer be anachronistic description but an accurate account of their own thinking.", explanation: "Correct. The passage's example relies on the premise that contemporaries did not possess the concept; if they did, attributing it to them would no longer be an anachronistic error." },
        { id: "D", text: "Support the general prohibition against all anachronism.", explanation: "Overreads the finding — it concerns this specific example, not the passage's broader distinction between description and analysis." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage's inflation example depends on the premise that seventeenth-century merchants did not possess the concept of inflation. A finding that they did, in fact, reason in these terms would remove that premise, undercutting the example's use as an instance of anachronistic description.",
      walkthrough: {
        approachNotes:
          "For weaken/strengthen questions targeting a specific example rather than the passage's whole argument, check whether the new evidence removes a premise the example itself depends on.",
        steps: [
          "Identify the premise the inflation example depends on: contemporaries lacked the concept.",
          "Compare the finding: contemporaries explicitly possessed and used the concept.",
          "Recognize this removes the premise the example relies on.",
          "Eliminate A as reversing the effect, and D as overextending to the passage's broader argument.",
          "Eliminate B as ignoring direct relevance to the specific example.",
          "Select C as correctly identifying the undercutting effect on this example.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q41",
      passageId: "cars-p9",
      sectionId: "cars",
      order: 40,
      stem: "Which of the following best expresses the author's main point?",
      choices: [
        { id: "A", text: "Debt was purely a moral or religious matter, with no market logic involved.", explanation: "Contradicted — paragraph 3 states calculative, market-like reasoning 'was very much present alongside the moral dimension.'" },
        { id: "B", text: "The 'neutral deferred payment' view of debt fails to explain the distinct moral weight debt has carried across many historical societies.", explanation: "Correct. This is the passage's explicit thesis, supported by the sale-versus-debt comparison and reaffirmed with its proper scope in the final paragraph." },
        { id: "C", text: "A completed sale and an unpaid debt were treated identically across most documented societies.", explanation: "Contradicted — this is precisely the asymmetry the passage argues against, not a claim it makes." },
        { id: "D", text: "The neutral deferral model is the most accurate account of how debt has historically functioned.", explanation: "This is the view the passage argues against, not its conclusion." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage introduces the neutral deferral model, shows through the sale-versus-debt comparison that it cannot explain a consistent historical asymmetry, and closes by stating that the model 'cannot on its own account for the distinct moral and social weight debt has so consistently carried.' Choice B matches this thesis.",
      walkthrough: {
        approachNotes:
          "Confirm the main-point choice reflects both the objection to the neutral model and the qualification that market reasoning still played a role — avoid choices that eliminate one side of that balance.",
        steps: [
          "State the thesis: the neutral deferral model can't explain debt's distinct moral weight.",
          "Eliminate A as too strong given the passage's concession about market reasoning.",
          "Eliminate C as contradicting the asymmetry the passage documents.",
          "Eliminate D as the rejected view.",
          "Confirm B matches the thesis.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q42",
      passageId: "cars-p9",
      sectionId: "cars",
      order: 41,
      stem: "The comparison between a merchant who delivers defective goods and a debtor who defaults primarily serves to:",
      choices: [
        { id: "A", text: "Highlight an asymmetry in social and legal consequences that the neutral-deferral model cannot easily explain.", explanation: "Correct. The passage draws this comparison specifically to show a difference in consequences that mere timing of payment does not obviously justify." },
        { id: "B", text: "Prove that merchants were historically treated more harshly than debtors.", explanation: "Reverses the passage's claim, which is that debtors historically faced harsher consequences." },
        { id: "C", text: "Show that historical legal systems were arbitrary and inconsistent.", explanation: "Not the point of the comparison, which highlights a consistent asymmetry rather than arbitrariness." },
        { id: "D", text: "Establish that debt bondage no longer exists in any society.", explanation: "Not discussed — an unsupported addition not found in the passage." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage draws this comparison immediately after introducing the neutral deferral model, specifically to show that the model's premise — debt as merely delayed sale — cannot account for the differing consequences the two cases have historically carried.",
      walkthrough: {
        approachNotes:
          "For comparison-based function questions, identify what specific gap in the preceding claim the comparison is meant to expose.",
        steps: [
          "Locate the comparison and the claim it follows: debt as functionally continuous with delayed sale.",
          "Note the asymmetry described: debt carries consequences a botched sale does not.",
          "Eliminate B, C, and D as mismatched with this function.",
          "Select A as matching the comparison's role.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q43",
      passageId: "cars-p9",
      sectionId: "cars",
      order: 42,
      stem: "Based on the passage, the author would most likely agree that:",
      choices: [
        { id: "A", text: "Calculative, market-like reasoning played no role in how historical debts were assessed.", explanation: "Contradicted directly by paragraph 3." },
        { id: "B", text: "Debt's moral weight is a modern invention with no basis in earlier documented societies.", explanation: "Contradicted — the passage discusses this moral weight as a consistent historical pattern, not a modern invention." },
        { id: "C", text: "Every documented society attached identical moral weight to debt.", explanation: "Too strong — the passage never claims uniformity across every society, only a consistent general pattern." },
        { id: "D", text: "Calculative, market-like reasoning could coexist with debt's distinct moral charge, rather than being excluded by it.", explanation: "Correct. This is a direct paraphrase of paragraph 3's claim that market-like reasoning was 'very much present alongside the moral dimension.'" },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "Paragraph 3 explicitly states that interest rates, collateral, and negotiated terms show market-like reasoning coexisting with debt's moral dimension. Choice D is the closest paraphrase of this stated coexistence claim.",
      walkthrough: {
        approachNotes:
          "When a passage explicitly reconciles two seemingly opposed elements (moral weight and market reasoning), expect an inference question testing whether that reconciliation was registered.",
        steps: [
          "Locate the reconciling claim in paragraph 3.",
          "Paraphrase it: market reasoning and moral weight coexisted, rather than excluding one another.",
          "Eliminate A, B, and C as contradicted or overstated relative to the passage.",
          "Match D to the paraphrased claim.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q44",
      passageId: "cars-p9",
      sectionId: "cars",
      order: 43,
      stem: "The author's attitude toward the 'neutral deferral' model of debt is best described as:",
      choices: [
        { id: "A", text: "Fully persuaded, endorsing the model as accurate.", explanation: "Contradicted — the passage argues the model 'sits uneasily beside how debt has actually been treated.'" },
        { id: "B", text: "Contemptuous, dismissing the model as having no merit whatsoever.", explanation: "Too strong — the passage grants the model 'the appeal of parsimony.'" },
        { id: "C", text: "Critical, viewing the model as too simple to account for the historical evidence, while granting it some intuitive appeal.", explanation: "Correct. The passage credits the model's parsimony before arguing it cannot explain a consistent historical asymmetry." },
        { id: "D", text: "Neutral, offering no evaluation of the model.", explanation: "Incorrect — the passage takes a clear critical stance." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "The passage grants the neutral deferral model 'the appeal of parsimony' before mounting a sustained objection to its explanatory adequacy, which is a measured, critical attitude rather than total dismissal or full endorsement.",
      walkthrough: {
        approachNotes:
          "Look for the concession-plus-objection pattern as the marker of a critical-but-measured attitude, distinguishing it from outright dismissal.",
        steps: [
          "Find the concessive phrase describing the model's appeal.",
          "Find the objection to its explanatory adequacy that follows.",
          "Eliminate A and D as failing to register the objection.",
          "Eliminate B as overstating the tone beyond the concession granted.",
          "Select C as matching the concession-plus-objection structure.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q45",
      passageId: "cars-p9",
      sectionId: "cars",
      order: 44,
      stem: "Suppose historians discovered a large historical society in which defaulting debtors faced no social stigma or punishment beyond simple repossession of collateral, treated procedurally in the same way as a botched sale. According to the passage's argument, this society would most likely:",
      choices: [
        { id: "A", text: "Perfectly confirm the passage's thesis.", explanation: "Reverses the effect — this scenario is a counterexample to, not a confirmation of, the passage's claimed pattern." },
        { id: "B", text: "Be irrelevant to the passage's claims.", explanation: "Incorrect — the scenario bears directly on the generality of the pattern the passage documents." },
        { id: "C", text: "Prove that debt never carries moral weight in any society.", explanation: "Overreads a single counterexample into a universal claim the passage never makes or requires." },
        { id: "D", text: "Represent a case that does not fit the pattern the passage describes, since the argument depends on debt generally carrying a distinctive moral charge beyond ordinary transactional consequences.", explanation: "Correct. The passage's argument rests on debt generally carrying more weight than a mere botched sale; a society where the two are treated identically does not fit that generalization." },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage's central claim depends on a consistent asymmetry between debt and ordinary transactional failure across documented societies. A society in which the two are treated identically represents a case that does not fit the pattern the argument relies on, without necessarily disproving the pattern's generality elsewhere.",
      walkthrough: {
        approachNotes:
          "For apply-to-new-context questions, distinguish between a scenario that fully refutes a general claim and one that simply doesn't fit the pattern — the more precise, less overreaching characterization is usually correct.",
        steps: [
          "Identify the general pattern the passage relies on: debt typically carries more social weight than a botched sale.",
          "Compare the scenario: debt and botched sale treated identically.",
          "Recognize this doesn't fit the pattern, without proving the pattern never holds anywhere.",
          "Eliminate A as reversing the effect, and C as overreaching.",
          "Eliminate B as ignoring direct relevance.",
          "Select D as the precise characterization.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q46",
      passageId: "cars-p9",
      sectionId: "cars",
      order: 45,
      stem: "Suppose comparative legal historians found that across most documented societies with written legal codes, penalties for defaulting on debt were, without exception, of the same type and severity as penalties for other unfulfilled contractual obligations, such as a builder failing to complete a commissioned structure. This finding would most directly:",
      choices: [
        { id: "A", text: "Strengthen the passage's argument about debt's distinct moral weight.", explanation: "Reverses the effect — uniform penalties across obligation types would undercut, not support, the claimed asymmetry." },
        { id: "B", text: "Weaken the passage's argument, since it would undercut the claimed asymmetry between debt and ordinary transactional failure that the argument relies on.", explanation: "Correct. The passage's central evidence is the asymmetry between debt and other failed transactions; uniform treatment across most documented societies directly contradicts that evidence." },
        { id: "C", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the finding speaks directly to the passage's central evidentiary claim." },
        { id: "D", text: "Support the neutral deferral model only on a minor point, without affecting the passage's broader claim.", explanation: "Understates the impact — this finding directly undercuts the central evidence for the passage's broader claim, not merely a minor point." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage's argument depends on a documented asymmetry between the consequences of debt default and those of other failed transactions. A finding that most documented societies treated these consequences identically directly undermines that asymmetry, weakening the passage's argument.",
      walkthrough: {
        approachNotes:
          "Identify the specific comparative claim (asymmetry between debt and other transactional failures) the passage's evidence rests on, then check whether new comparative data confirms or erases that asymmetry.",
        steps: [
          "Locate the asymmetry the passage relies on: debt versus botched sale/contractual failure.",
          "Compare the finding: uniform penalties across most documented societies.",
          "Recognize this erases the asymmetry the argument depends on.",
          "Eliminate A as reversing the effect, and D as understating the impact.",
          "Eliminate C as ignoring direct relevance.",
          "Select B as correctly identifying the weakening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q47",
      passageId: "cars-p10",
      sectionId: "cars",
      order: 46,
      stem: "Which of the following best captures the author's main point?",
      choices: [
        { id: "A", text: "Translation is not purely a subtractive process; it can involve compensatory or additive creative work, even though genuine loss also occurs.", explanation: "Correct. This is the passage's explicit thesis, developed through the untranslatable-pun example and restated with its proper scope in the final paragraph." },
        { id: "B", text: "Translation never truly loses anything present in the original.", explanation: "Contradicted — paragraph 3 states 'a great deal is indeed lost in most translations, often irrecoverably.'" },
        { id: "C", text: "Translations are generally superior to the originals they are based on.", explanation: "Too strong — the passage explicitly disclaims this reading in the final paragraph." },
        { id: "D", text: "Untranslatable wordplay should simply be omitted from a translated text.", explanation: "Contradicted — the passage praises compensatory invention as a creative alternative to omission." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage validates the common experience of loss in translation, then argues through the compensatory-pun example that translation also performs creative, additive work, and closes by explicitly denying that this makes translations generally superior. Choice A is the only option matching this full, balanced thesis.",
      walkthrough: {
        approachNotes:
          "For a passage that both validates a common view and complicates it, the correct main-point choice must include both halves — validation and complication — rather than only one.",
        steps: [
          "State the thesis: translation isn't purely subtractive, though loss is real.",
          "Eliminate B and C as overstatements the passage explicitly disclaims.",
          "Eliminate D as contradicting the passage's praise of compensatory invention.",
          "Confirm A matches the balanced thesis.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "medium",
    },
    {
      id: "cars-q48",
      passageId: "cars-p10",
      sectionId: "cars",
      order: 47,
      stem: "The example of the untranslatable pun primarily serves to:",
      choices: [
        { id: "A", text: "Prove that most jokes cannot be translated under any circumstances.", explanation: "Misstates the example's point, which is that compensation, not impossibility, is the typical response." },
        { id: "B", text: "Show that comic writing is inherently harder to translate than other genres.", explanation: "Not a comparative claim the passage makes." },
        { id: "C", text: "Demonstrate that translators frequently fail to preserve a text's tone.", explanation: "The opposite of what the example shows, which is a successful compensatory strategy." },
        { id: "D", text: "Illustrate how a translator's compensatory invention can add a genuinely new effect not present in the source, supporting the claim that translation is not purely subtractive.", explanation: "Correct. The passage uses this example specifically to show a reader can experience an effect 'a reader of the original ... cannot access from the source text alone.'" },
      ],
      correctChoiceId: "D",
      explanationOverall:
        "The passage introduces this example right after stating that the subtraction-only model 'badly mischaracterizes' translation, and uses it to show a case where translation adds an effect unavailable in the source. Choice D matches this function.",
      walkthrough: {
        approachNotes:
          "Trace an example back to the specific claim it was introduced to support — here, the claim that translation is not merely subtractive.",
        steps: [
          "Locate the claim just before the example: the subtraction-only model mischaracterizes translation.",
          "Read the example's conclusion: the translation offers an effect unavailable in the source.",
          "Eliminate A, B, and C as mismatched with this function.",
          "Select D as matching the example's illustrative role.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q49",
      passageId: "cars-p10",
      sectionId: "cars",
      order: 48,
      stem: "Based on the passage, the author would most likely agree that:",
      choices: [
        { id: "A", text: "A translation can never be legitimately judged by its fidelity to the original.", explanation: "Too strong and unsupported — the passage critiques judging translation solely by fidelity, not the relevance of fidelity altogether." },
        { id: "B", text: "Compensatory invention is required in every translation, regardless of content.", explanation: "Overgeneralizes — the passage discusses compensatory invention as a response to specific untranslatable elements, not a universal requirement." },
        { id: "C", text: "A translation can, at specific points, produce an effect that is genuinely unavailable to a reader relying on the original text alone.", explanation: "Correct. This directly restates the passage's claim that a reader of the compensated translation experiences an effect a reader of the original 'cannot access from the source text alone.'" },
        { id: "D", text: "Readers of translations are typically unaware that any compensation has occurred.", explanation: "Not discussed — the passage makes no claim about readers' awareness of the translator's process." },
      ],
      correctChoiceId: "C",
      explanationOverall:
        "Paragraph 2 states directly that a reader of the compensated translation experiences an effect unavailable from the source text alone. Choice C is the closest paraphrase of this explicit claim.",
      walkthrough: {
        approachNotes:
          "For inference questions, prefer the choice closest to an explicit sentence over one requiring speculation about unaddressed topics like reader awareness.",
        steps: [
          "Locate the explicit claim about the reader's experience of the compensated translation.",
          "Paraphrase it: some effects in translation are genuinely unavailable from the source alone.",
          "Eliminate A, B, and D as unsupported or overstated.",
          "Match C to the paraphrased claim.",
        ],
      },
      category: { skill: "Reasoning Within the Text" },
      difficulty: "medium",
    },
    {
      id: "cars-q50",
      passageId: "cars-p10",
      sectionId: "cars",
      order: 49,
      stem: "The author's attitude toward the popular lament that something is always 'lost in translation' is best described as:",
      choices: [
        { id: "A", text: "Entirely dismissive, denying that anything is genuinely lost.", explanation: "Too strong — the passage calls this lament 'a real and familiar experience' and affirms real loss occurs." },
        { id: "B", text: "Partially validating, acknowledging a real experience while arguing it has hardened into an incomplete general model.", explanation: "Correct. The passage affirms the experience behind the lament while arguing the resulting subtraction-only model 'badly mischaracterizes' translation as a whole." },
        { id: "C", text: "Fully accepting of the subtraction-only model as a complete account of translation.", explanation: "Contradicted — the passage explicitly says this model 'badly mischaracterizes' translation." },
        { id: "D", text: "Indifferent, offering no clear evaluation.", explanation: "Incorrect — the passage takes a clear, argued position." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage validates the lament as capturing 'a real and familiar experience' before arguing that the general model built from it mischaracterizes translation as a whole practice. This validation-plus-objection structure is what choice B describes.",
      walkthrough: {
        approachNotes:
          "Look for the validation-plus-objection pattern: the author agrees with a specific experience while rejecting the broader model built on it.",
        steps: [
          "Find the validating language about the lament's basis in real experience.",
          "Find the objection to the general model built from that experience.",
          "Eliminate A and C as unhedged extremes.",
          "Eliminate D, since the passage clearly argues a position.",
          "Select B as matching the validation-plus-objection structure.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q51",
      passageId: "cars-p10",
      sectionId: "cars",
      order: 50,
      stem: "According to the passage, the compensatory pun a translator invents differs from the source text's original joke in that:",
      choices: [
        { id: "A", text: "It is placed at a point in the text where the source contains no joke at all, drawing on wordplay resources specific to the target language.", explanation: "Correct. The passage explicitly describes the compensatory device as 'placed at a point in the text where the source contains no joke at all.'" },
        { id: "B", text: "It always appears at exactly the same point in the text as the original joke.", explanation: "Contradicted directly by the passage's description of its placement." },
        { id: "C", text: "It is typically regarded as mere damage control rather than genuine creativity.", explanation: "Contradicted — the passage states it 'is not merely damage control; it is a genuinely creative act.'" },
        { id: "D", text: "It usually fails to preserve the passage's overall comic effect.", explanation: "Contradicted — the passage states it is invented 'in order to preserve the passage's overall comic rhythm and effect.'" },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage's description of the compensatory pun is explicit on this point: it is placed where the source has no joke, using target-language-specific wordplay. Choice A is a direct restatement of this detail.",
      walkthrough: {
        approachNotes:
          "For detail-retrieval questions, locate the exact descriptive sentence in the passage and check each choice against it word by word, since distractors often invert a specific stated detail.",
        steps: [
          "Locate the sentence describing the compensatory pun's placement and origin.",
          "Note it is placed where the source has no joke, using target-language resources.",
          "Eliminate B as a direct inversion of this placement detail.",
          "Eliminate C and D as direct contradictions of the passage's stated description.",
          "Select A as matching the passage's exact description.",
        ],
      },
      category: { skill: "Foundations of Comprehension" },
      difficulty: "easy",
    },
    {
      id: "cars-q52",
      passageId: "cars-p10",
      sectionId: "cars",
      order: 51,
      stem: "A translator working on a novel encounters a source-language proverb built on a culturally specific metaphor with no equivalent in the target culture. Rather than inventing a substitute image, the translator provides a literal, word-for-word rendering with a footnote explaining the original metaphor's background. According to the passage's argument, this choice would most likely be characterized as:",
      choices: [
        { id: "A", text: "Closer to the subtractive, fidelity-focused approach the passage complicates, rather than the compensatory, creative approach the passage highlights.", explanation: "Correct. A literal rendering with an explanatory footnote preserves informational content but does not invent a compensatory effect for the reader, aligning it with the fidelity-focused approach the passage argues is incomplete." },
        { id: "B", text: "An example of the same compensatory invention described in paragraph 2.", explanation: "Incorrect — a footnoted literal rendering explains the original rather than creating a substitute effect, unlike the invented pun described in paragraph 2." },
        { id: "C", text: "Proof that translation is generally impossible.", explanation: "Overreads the scenario — the passage never suggests translation is impossible, only that it involves more than subtraction." },
        { id: "D", text: "Irrelevant to the passage's argument.", explanation: "Incorrect — the scenario is directly relevant as a contrasting case to the compensatory approach the passage highlights." },
      ],
      correctChoiceId: "A",
      explanationOverall:
        "The passage distinguishes compensatory invention, which creates a new effect elsewhere in the target-language text, from a fidelity-focused approach that simply preserves and explains the original content. A literal rendering with an explanatory footnote falls on the fidelity-focused side of that distinction, not the compensatory side.",
      walkthrough: {
        approachNotes:
          "When applying a passage's central distinction to a new scenario, check which side of the distinction the new case's specific mechanism resembles, rather than whether it involves translation in general.",
        steps: [
          "Recall the passage's distinction: compensatory invention versus fidelity-focused subtraction.",
          "Examine the scenario's mechanism: literal rendering plus explanatory footnote, not an invented substitute effect.",
          "Recognize this matches the fidelity-focused side, not the compensatory side.",
          "Eliminate B as misapplying the compensatory-invention label.",
          "Eliminate C and D as overreaching or dismissing relevance.",
          "Select A as the correct classification.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
    {
      id: "cars-q53",
      passageId: "cars-p10",
      sectionId: "cars",
      order: 52,
      stem: "Suppose a large study of bilingual readers found that, across many translated comic novels, readers of translations using compensatory invented wordplay rated the text's humor no differently, on average, than readers of flat, literal translations with no compensatory jokes. This finding would most directly:",
      choices: [
        { id: "A", text: "Strengthen the passage's suggestion that compensatory invention meaningfully recreates a text's comic effect.", explanation: "Reverses the effect — a lack of measurable difference is evidence against, not for, the claimed benefit of compensatory invention." },
        { id: "B", text: "Weaken the passage's suggestion that compensatory invention meaningfully preserves or recreates a text's comic effect for readers, since it shows no measurable difference in the effect the passage attributes to such invention.", explanation: "Correct. The passage's argument depends on compensatory invention producing a real comic effect for readers; a finding of no measurable difference in humor ratings directly undercuts that claim." },
        { id: "C", text: "Be irrelevant to the passage's argument.", explanation: "Incorrect — the finding directly tests the empirical effect the passage attributes to compensatory invention." },
        { id: "D", text: "Confirm that translators should stop attempting compensatory invention.", explanation: "Overreads the finding — this normative conclusion goes beyond what a single empirical finding about humor ratings alone establishes." },
      ],
      correctChoiceId: "B",
      explanationOverall:
        "The passage's argument for translation's creative, additive capacity rests on the claim that compensatory invention produces a genuine comic effect for readers. A finding that readers rate humor no differently with or without such invention directly undercuts that empirical claim, weakening the argument.",
      walkthrough: {
        approachNotes:
          "For strengthen/weaken questions based on reader-response data, isolate the specific effect the passage claims occurs, then check whether the data shows that effect occurring or failing to occur.",
        steps: [
          "Identify the claimed effect: compensatory invention meaningfully preserves or recreates comic effect for readers.",
          "Compare the finding: no measurable difference in humor ratings.",
          "Recognize this is evidence against the claimed effect actually occurring.",
          "Eliminate A as reversing the effect, and D as an overreaching normative conclusion.",
          "Eliminate C as ignoring direct relevance.",
          "Select B as correctly identifying the weakening effect.",
        ],
      },
      category: { skill: "Reasoning Beyond the Text" },
      difficulty: "hard",
    },
  ],
};

export default carsContent;
