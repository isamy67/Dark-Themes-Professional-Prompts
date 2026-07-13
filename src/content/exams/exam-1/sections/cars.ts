import type { SectionContent } from "@/lib/types";

/**
 * FIXTURE CONTENT — placeholder questions used to build/test the exam engine
 * before the full starter-exam authoring pass. Replaced with the full
 * ~10-question CARS set in that pass; do not treat as final content.
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
  ],
};

export default carsContent;
