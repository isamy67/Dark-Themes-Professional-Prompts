import type { Passage, Question } from "@/lib/types";

export const passages: Passage[] = [
  {
    id: "bb-p8",
    sectionId: "bio-biochem",
    order: 7,
    kind: "passage",
    title: "Antibody Responses to a Protein Subunit Vaccine",
    bodyMarkdown: `Researchers evaluated a recombinant protein subunit vaccine (antigen X plus an alum adjuvant) in three groups of mice: wild-type (WT), mice lacking CD40 ligand (*Cd40lg*-null), and mice lacking β2-microglobulin (*B2m*-null), which cannot display functional MHC class I on the cell surface and therefore fail to develop CD8⁺ T cells. All mice were immunized on day 0 and boosted on day 42. Serum was collected on days 7, 21, and 49, and antigen X-specific antibody titers (the reciprocal of the highest serum dilution giving a positive ELISA signal) were determined for IgM and IgG.

**Table 1.** Antigen X-specific serum titers

| Group | Day 7 IgM | Day 7 IgG | Day 21 IgM | Day 21 IgG | Day 49 IgM | Day 49 IgG |
|---|---|---|---|---|---|---|
| WT | 400 | <10 | 200 | 1,600 | 250 | 25,600 |
| *Cd40lg*-null | 400 | <10 | 350 | <10 | 380 | 20 |
| *B2m*-null | 400 | <10 | 220 | 1,600 | 240 | 25,600 |

Flow cytometry performed on day 21 showed that *Cd40lg*-null mice had normal numbers of B cells and CD4⁺ T cells, and that *B2m*-null mice had normal numbers of B cells and CD4⁺ T cells but essentially no CD8⁺ T cells. Antigen-specific B cells in *Cd40lg*-null mice were readily detected by tetramer staining at day 21, indicating that they had been activated and had expanded.`,
    questionIds: ["bb-q37", "bb-q38", "bb-q39", "bb-q40", "bb-q41"],
  },
  {
    id: "bb-p9",
    sectionId: "bio-biochem",
    order: 8,
    kind: "passage",
    title: "Pharmacological Dissection of Neuronal Signaling",
    bodyMarkdown: `A neurophysiologist studied signaling in cultured neurons using whole-cell patch-clamp recording. In an isolated axon, a brief depolarizing current was injected under three conditions, and the resulting membrane potential ($V_m$) was recorded. The resting potential was −70 mV and the threshold was approximately −55 mV. Tetrodotoxin (TTX) is a pore-blocking toxin specific for voltage-gated Na⁺ channels; tetraethylammonium (TEA) blocks voltage-gated K⁺ channels.

**Table 1.** Action potential parameters after identical current injection

| Condition | Peak $V_m$ (mV) | Minimum $V_m$ after spike (mV) | Spike duration (ms) |
|---|---|---|---|
| Control | +40 | −80 | 1.0 |
| TTX (100 nM) | −52 | none | n/a |
| TEA (10 mM) | +42 | −68 | 4.5 |

In a second experiment, conduction velocity was measured along myelinated axons from control cultures and from cultures in which myelin had been enzymatically stripped. Velocity was 50 m/s in myelinated axons and 6 m/s after demyelination, even though axon diameter and membrane Na⁺-channel density at the nodes of Ranvier were unchanged.

In a third experiment, a presynaptic glutamatergic neuron was stimulated while a postsynaptic neuron was recorded. A stimulus normally produced an excitatory postsynaptic potential (EPSP) of 8 mV from the resting potential. After application of ω-conotoxin, a blocker of presynaptic voltage-gated Ca²⁺ channels, the same stimulus produced no EPSP, but direct application of glutamate to the postsynaptic membrane still produced an 8 mV depolarization. The glutamate-gated channels are nonselective cation channels with a reversal potential near 0 mV.`,
    questionIds: ["bb-q42", "bb-q43", "bb-q44", "bb-q45", "bb-q46"],
  },
];

export const questions: Question[] = [
  {
    id: "bb-q37",
    passageId: "bb-p8",
    sectionId: "bio-biochem",
    order: 36,
    stem: "Which conclusion is best supported by the IgM and IgG titers of the Cd40lg-null mice compared with the WT mice?",
    choices: [
      { id: "A", text: "Cd40lg-null B cells cannot undergo V(D)J recombination and therefore cannot produce antibodies of any class.", explanation: "Cd40lg-null mice produced IgM titers equal to or higher than WT, so their B cells rearranged immunoglobulin genes and secreted functional antibody. The defect lies in switching to IgG." },
      { id: "B", text: "Class switching from IgM to IgG requires CD40L on activated helper T cells to engage CD40 on B cells.", explanation: "Correct. B cells and CD4⁺ T cells were normal in number, and IgM was produced, but IgG was absent. The CD40-CD40L interaction is the contact-dependent signal that drives isotype switching and germinal center formation." },
      { id: "C", text: "Class switching from IgM to IgG depends on cytotoxic killing of antigen-bearing cells by CD8⁺ T cells.", explanation: "B2m-null mice lack CD8⁺ T cells but made WT-level IgG, so CD8⁺ T cells are not required for switching." },
      { id: "D", text: "Cd40lg-null mice have too few B cells to mount any antigen-specific response.", explanation: "Flow cytometry showed normal B cell numbers, and tetramer staining detected expanded antigen-specific B cells. The IgM response also shows B cells were functional." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Cd40lg-null mice mounted a normal IgM response but made essentially no IgG, even with normal numbers of B and CD4⁺ T cells. This pattern indicates that primary IgM production can occur without contact-dependent T cell help, whereas class switching requires CD40L-CD40 signaling from helper T cells to B cells.",
    walkthrough: {
      approachNotes:
        "When a knockout shows one isotype preserved and another lost, ask what step lies between them. Here the step between IgM and IgG is class switch recombination, which is classically driven by CD4⁺ T cell help.",
      steps: [
        "Compare rows in Table 1: Cd40lg-null IgM matches WT, but IgG is <10 at day 21 and 20 at day 49.",
        "Use the flow cytometry data to rule out missing cell populations: B cells and CD4⁺ T cells are present.",
        "Conclude the defect is in B cell isotype switching, not antibody production per se.",
        "Recall that CD40L on activated CD4⁺ helper T cells binds CD40 on B cells to license switching and memory formation.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "bb-q38",
    passageId: "bb-p8",
    sectionId: "bio-biochem",
    order: 37,
    stem: "The B2m-null mice produced IgG titers equal to WT mice. Which statement is the most valid interpretation of this result?",
    choices: [
      { id: "A", text: "Antigen presentation to CD4⁺ T cells is MHC class I-dependent, but β2-microglobulin-independent.", explanation: "CD4⁺ T cells recognize peptide on MHC class II, not class I. The result does not show any class I involvement in CD4⁺ activation." },
      { id: "B", text: "B cells in B2m-null mice must have been activated without any T cell help, since MHC molecules were absent.", explanation: "Only MHC class I is lost. MHC class II does not incorporate β2-microglobulin, so CD4⁺ T cell help remains intact, and the IgG response is T-dependent (it was lost in Cd40lg-null mice)." },
      { id: "C", text: "β2-microglobulin is an essential subunit of MHC class II, so CD4⁺ T cells in these mice were still activated through an alternative pathway.", explanation: "β2-microglobulin is the invariant light chain of MHC class I only. MHC class II is an α/β heterodimer, so this premise is false." },
      { id: "D", text: "MHC class I-restricted CD8⁺ T cells are dispensable for the IgG response to this vaccine.", explanation: "Correct. Mice without CD8⁺ T cells still generated normal IgG titers at days 21 and 49, indicating CD4⁺ T cell help via MHC class II is sufficient for this antibody response." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "β2-microglobulin pairs with the MHC class I heavy chain, so B2m-null mice lack surface MHC I and CD8⁺ T cells but retain MHC II and CD4⁺ T cells. Because IgG titers matched WT, CD8⁺ T cells are not needed for this protein-vaccine antibody response.",
    walkthrough: {
      approachNotes:
        "Knockout interpretation questions test whether you know exactly what is lost. Identify the molecule, the pathway it belongs to, and then what remains.",
      steps: [
        "Recall that β2-microglobulin is part of MHC class I only; the passage states CD8⁺ T cells are absent.",
        "Note that B cells and CD4⁺ T cells are normal, so MHC II-CD4 help is intact.",
        "Compare IgG titers: B2m-null equals WT at both time points.",
        "Conclude CD8⁺ T cells are not required for this antibody response, and reject choices that misassign MHC classes.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q39",
    passageId: "bb-p8",
    sectionId: "bio-biochem",
    order: 38,
    stem: "In WT mice, the day 49 IgG titer was 16-fold higher than the day 21 titer, even though the day 49 sample was collected only 7 days after the boost. This rapid increase is best explained by:",
    choices: [
      { id: "A", text: "reactivation of memory B and T cells formed during the primary response, which quickly differentiate into IgG-secreting plasma cells.", explanation: "Correct. Memory cells are already class-switched and antigen-experienced, so a secondary challenge elicits a faster, larger IgG response than the primary response, which took about 3 weeks to reach 1,600." },
      { id: "B", text: "recruitment of naive B cells that switch directly from IgM to IgG within 7 days without T cell help.", explanation: "Naive B cells require T cell help to switch (the Cd40lg-null mice show this), and the primary response was much slower than the secondary response." },
      { id: "C", text: "a rise in IgM-secreting plasma cells that convert their secreted antibody to IgG by proteolytic cleavage.", explanation: "Isotype is determined by DNA recombination of the heavy-chain constant region in the B cell, not by proteolysis of secreted antibody. IgM titers also did not rise appreciably." },
      { id: "D", text: "innate immune cells that carry antigen-specific memory by rearranging their own receptor genes.", explanation: "Gene rearrangement and antigen-specific memory are features of adaptive lymphocytes, not classical innate cells." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "A secondary response is faster and larger because long-lived memory B cells (already class-switched and often affinity-matured) and memory CD4⁺ T cells respond quickly to the boost. The unchanged IgM titer at day 49 fits this: the responding cells are producing IgG, not IgM.",
    walkthrough: {
      approachNotes:
        "Primary versus secondary response comparisons almost always point to memory cells. Check the timeline for speed and magnitude, and the isotype for clues.",
      steps: [
        "Calculate the fold change: $25{,}600 / 1{,}600 = 16$.",
        "Notice the speed: the boost produced this rise in 7 days, whereas the primary IgG response took about 3 weeks.",
        "Notice IgM stayed near 250, so the expansion is of already-switched cells.",
        "Match these features to memory B and T cell reactivation.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q40",
    passageId: "bb-p8",
    sectionId: "bio-biochem",
    order: 39,
    stem: "A student proposes that the IgG deficiency in Cd40lg-null mice is caused by missing helper T cell function rather than an intrinsic B cell defect. Which experiment would best test this hypothesis?",
    choices: [
      { id: "A", text: "Transfer WT CD8⁺ T cells into Cd40lg-null mice, immunize, and measure IgG.", explanation: "CD8⁺ T cells do not express CD40L-mediated help in this system (B2m-null mice are unaffected), so this would not test the helper T cell hypothesis." },
      { id: "B", text: "Immunize Cd40lg-null mice with a T cell-independent antigen and measure IgM.", explanation: "A normal IgM response to a T-independent antigen would not distinguish between a T cell defect and a B cell defect in switching, since IgM was already normal." },
      { id: "C", text: "Transfer WT CD4⁺ T cells into Cd40lg-null mice, immunize with antigen X, and measure IgG.", explanation: "Correct. If restoring CD40L-expressing CD4⁺ T cells rescues IgG production in the otherwise unchanged host, the defect lies in T cell help. If IgG remains absent, an intrinsic B cell problem would be suggested." },
      { id: "D", text: "Measure serum IgG in Cd40lg-null mice before immunization.", explanation: "Baseline IgG reflects environmental antigen exposure and does not test whether T cell help is the missing component." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "A rescue experiment is the strongest design: add back the missing function in the proper cell type and see whether the phenotype is reversed. Transferring WT CD4⁺ T cells supplies CD40L from the helper compartment while leaving the host B cells unchanged.",
    walkthrough: {
      approachNotes:
        "To distinguish cell-intrinsic from cell-extrinsic defects, look for an adoptive transfer or rescue design that changes only one cell population.",
      steps: [
        "State the hypothesis: missing CD40L on helper T cells, not B cell dysfunction.",
        "Identify the cell type that normally expresses CD40L: activated CD4⁺ T cells.",
        "Choose the design that restores that cell type in the knockout host and measures the lost readout (IgG).",
        "Reject designs that measure IgM, baseline levels, or add the wrong cell type.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "scientific inquiry and reasoning" },
    difficulty: "hard",
  },
  {
    id: "bb-q41",
    passageId: "bb-p8",
    sectionId: "bio-biochem",
    order: 40,
    stem: "How is the recombinant protein antigen in the vaccine most likely presented to naive CD4⁺ T cells?",
    choices: [
      { id: "A", text: "It is degraded by the proteasome, transported into the ER by TAP, and loaded onto MHC class I.", explanation: "This is the pathway for endogenous cytosolic antigens presented to CD8⁺ T cells, not for an exogenous protein presented to CD4⁺ T cells." },
      { id: "B", text: "It is endocytosed by an antigen-presenting cell, degraded in endolysosomal compartments, and the resulting peptides are loaded onto MHC class II.", explanation: "Correct. Exogenous protein taken up by dendritic cells, macrophages, or B cells is processed in acidified endosomes, where peptides replace the invariant chain fragment (CLIP) in MHC II for display to CD4⁺ T cells." },
      { id: "C", text: "It is cleaved extracellularly and the peptides are loaded onto MHC class I, which is recognized by the CD4 co-receptor.", explanation: "The CD4 co-receptor binds MHC class II, whereas CD8 binds MHC class I." },
      { id: "D", text: "It binds intact to MHC class II on the surface of the APC without any processing.", explanation: "MHC II presents short processed peptides, not intact folded proteins." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "Exogenous antigens are taken up by antigen-presenting cells and processed in the endosomal pathway, with peptides loaded onto MHC class II and presented to CD4⁺ T cells. Endogenous cytosolic antigens follow the proteasome-TAP-MHC I pathway to CD8⁺ T cells.",
    walkthrough: {
      approachNotes:
        "Match the antigen source to the MHC class: exogenous goes to MHC II and CD4⁺, endogenous goes to MHC I and CD8⁺.",
      steps: [
        "Classify the antigen: a recombinant protein delivered as an injected vaccine is exogenous.",
        "Recall that exogenous antigen is taken up by endocytosis or phagocytosis.",
        "Link endosomal processing to MHC II loading and CD4 co-receptor binding.",
        "Eliminate the proteasome/TAP pathway and the answers that mismatch CD4 with MHC I.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "knowledge of scientific concepts" },
    difficulty: "easy",
  },
  {
    id: "bb-q42",
    passageId: "bb-p9",
    sectionId: "bio-biochem",
    order: 41,
    stem: "The TTX data in Table 1 are best explained by which of the following?",
    choices: [
      { id: "A", text: "TTX blocks voltage-gated K⁺ channels, preventing repolarization so the neuron remains near −52 mV.", explanation: "If K⁺ channels were blocked, a full-sized spike would still occur (as with TEA); the lack of a spike points to Na⁺ channels." },
      { id: "B", text: "TTX hyperpolarizes the membrane so that the injected current can never reach threshold.", explanation: "The stimulus did depolarize the cell to −52 mV, which is above the −55 mV threshold; the problem is that no regenerative Na⁺ current followed, not that threshold was unreachable." },
      { id: "C", text: "Opening of voltage-gated Na⁺ channels, which is blocked by TTX, produces the regenerative depolarization that forms the upstroke of the spike.", explanation: "Correct. Without Na⁺ influx through voltage-gated channels, the stimulus produces only a small passive depolarization and no all-or-none action potential." },
      { id: "D", text: "TTX activates the Na⁺/K⁺ ATPase, which restores the membrane to rest before the threshold is reached.", explanation: "The ATPase is slow and electrogenic by only a small amount; it does not rapidly repolarize the membrane on the millisecond time scale of a spike." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "In TTX, the injected current depolarized the membrane only passively to about −52 mV (just above threshold, but no regenerative response occurred). Na⁺ channel opening provides the positive-feedback upstroke of the action potential, so blocking it abolishes the spike.",
    walkthrough: {
      approachNotes:
        "Link each toxin to the phase of the action potential it affects: Na⁺ channels for the upstroke, K⁺ channels for repolarization.",
      steps: [
        "Read the TTX row: peak is −52 mV, with no spike duration or after-potential.",
        "Recall that TTX blocks voltage-gated Na⁺ channels.",
        "Connect Na⁺ influx to the upstroke and positive feedback of the action potential.",
        "Reject answers that assign TTX to K⁺ channels or pump effects.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3A", skill: "data-based reasoning" },
    difficulty: "easy",
  },
  {
    id: "bb-q43",
    passageId: "bb-p9",
    sectionId: "bio-biochem",
    order: 42,
    stem: "In the TEA condition, spike duration lengthened and the after-spike minimum rose from −80 mV to −68 mV. These findings best indicate that:",
    choices: [
      { id: "A", text: "voltage-gated K⁺ efflux normally speeds repolarization and produces the undershoot (hyperpolarization) following the spike.", explanation: "Correct. The delayed K⁺ current drives the membrane back toward E_K (about −90 mV), producing both fast repolarization and the afterhyperpolarization. Blocking it slows repolarization and eliminates the undershoot." },
      { id: "B", text: "voltage-gated Na⁺ channels are responsible for repolarization by closing immediately after the peak.", explanation: "Na⁺ channel inactivation contributes, but the strong effect of K⁺ channel blockade shows that K⁺ efflux is required for rapid repolarization and the undershoot." },
      { id: "C", text: "TEA increases Na⁺ influx, which prolongs the spike and raises the resting potential.", explanation: "TEA does not target Na⁺ channels, and the peak (+42 mV) was essentially unchanged, so Na⁺ influx during the upstroke was not enhanced." },
      { id: "D", text: "K⁺ influx through voltage-gated channels normally hyperpolarizes the cell after the spike.", explanation: "K⁺ flows out of the neuron (down its electrochemical gradient) during repolarization. Influx would depolarize the cell." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Because the extracellular K⁺ concentration is low relative to intracellular, opening K⁺ channels at depolarized potentials drives K⁺ out and returns the membrane to rest, overshooting toward E_K. Blocking these channels with TEA leaves the peak intact but slows repolarization and removes most of the afterhyperpolarization.",
    walkthrough: {
      approachNotes:
        "For channel-blocker data, change one variable at a time: note which parameters moved (duration, minimum) and which did not (peak).",
      steps: [
        "Compare the TEA row to control: peak is about the same, duration rises from 1.0 to 4.5 ms, minimum rises from −80 to −68 mV.",
        "Recall that TEA blocks voltage-gated K⁺ channels, so the unchanged peak is expected because the upstroke depends on Na⁺.",
        "Link K⁺ efflux to repolarization and to the undershoot toward E_K.",
        "Eliminate the answers misassigning direction of K⁺ flow or the target channel.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3A", skill: "data-based reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q44",
    passageId: "bb-p9",
    sectionId: "bio-biochem",
    order: 43,
    stem: "Which explanation best accounts for the drop in conduction velocity from 50 m/s to 6 m/s after demyelination?",
    choices: [
      { id: "A", text: "Myelin supplies additional voltage-gated Na⁺ channels along the internodes, and these are lost on demyelination.", explanation: "Na⁺ channels are concentrated at the nodes of Ranvier, not along the internodal membrane, and the passage states node channel density was unchanged." },
      { id: "B", text: "Myelin actively pumps Na⁺ out of the axon, so removing myelin raises intracellular Na⁺ and slows spikes.", explanation: "Myelin is an insulating membrane wrapping and does not pump ions. This also conflicts with the concept of saltatory conduction." },
      { id: "C", text: "Myelin increases axon diameter, which lowers axial resistance, and this is lost on demyelination.", explanation: "The passage states axon diameter was unchanged, and myelin is a wrapping around the axon rather than a change in its cross-section." },
      { id: "D", text: "Myelin raises membrane resistance and lowers capacitance, allowing current to spread quickly between nodes so the action potential is regenerated only at nodes.", explanation: "Correct. Insulation reduces current leak and charge storage across the internodal membrane, so depolarization at one node efficiently reaches the next (saltatory conduction). Without myelin, the entire membrane must be recharged, which slows conduction." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Myelin produced by oligodendrocytes (CNS) and Schwann cells (PNS) insulates the axon, increasing membrane resistance and decreasing capacitance. Depolarization spreads passively and rapidly along the internode and regenerates at the Na⁺ channel-rich nodes of Ranvier. Loss of myelin forces slow, continuous conduction, as in multiple sclerosis.",
    walkthrough: {
      approachNotes:
        "Use the controlled variables the passage gives you: if diameter and node channel density are unchanged, the explanation must involve the one thing that changed, the insulation.",
      steps: [
        "List what was held constant: axon diameter and node Na⁺ channel density.",
        "Identify the variable that changed: myelin insulation.",
        "Recall that insulation raises membrane resistance and lowers capacitance, enabling saltatory conduction.",
        "Eliminate options that contradict the passage or give myelin an ion-pumping role.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3A", skill: "knowledge of scientific concepts" },
    difficulty: "medium",
  },
  {
    id: "bb-q45",
    passageId: "bb-p9",
    sectionId: "bio-biochem",
    order: 44,
    stem: "The ω-conotoxin experiment most directly supports which conclusion?",
    choices: [
      { id: "A", text: "Postsynaptic glutamate-gated channels require presynaptic Ca²⁺ channels in order to open.", explanation: "Direct glutamate application still depolarized the postsynaptic membrane by 8 mV, so postsynaptic channels do not depend on presynaptic Ca²⁺ channels." },
      { id: "B", text: "Ca²⁺ entry through presynaptic voltage-gated channels is required for neurotransmitter release, while postsynaptic receptors remain functional.", explanation: "Correct. Blocking presynaptic Ca²⁺ channels abolished the EPSP, yet direct glutamate still worked. The deficit therefore lies upstream of the receptors, in Ca²⁺-triggered vesicle fusion and release." },
      { id: "C", text: "Glutamate is released from the presynaptic terminal through voltage-gated Na⁺ channels, which conotoxin also blocks.", explanation: "Neurotransmitter is released by Ca²⁺-triggered exocytosis of vesicles, not through Na⁺ channels." },
      { id: "D", text: "The presynaptic action potential fails to propagate to the terminal in the presence of conotoxin.", explanation: "Conotoxin targets Ca²⁺ channels, not the Na⁺ channels responsible for propagation. The data do not show failure of the presynaptic spike." },
    ],
    correctChoiceId: "B",
    explanationOverall:
      "The key control is the direct glutamate application: it shows the postsynaptic cell can still respond. Because stimulating the presynaptic neuron no longer produced an EPSP after conotoxin, the missing step must be neurotransmitter release, which depends on Ca²⁺ influx through presynaptic voltage-gated Ca²⁺ channels triggering SNARE-mediated vesicle fusion.",
    walkthrough: {
      approachNotes:
        "Look for the control that localizes a defect. If the downstream cell still responds to the transmitter itself, the problem is upstream.",
      steps: [
        "Note that stimulation alone fails after conotoxin (no EPSP).",
        "Note that direct glutamate application still produces an 8 mV depolarization, so postsynaptic receptors are intact.",
        "Localize the defect to presynaptic release and connect it to Ca²⁺-dependent exocytosis.",
        "Reject choices that blame postsynaptic channels or propagation.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3A", skill: "scientific inquiry and reasoning" },
    difficulty: "medium",
  },
  {
    id: "bb-q46",
    passageId: "bb-p9",
    sectionId: "bio-biochem",
    order: 45,
    stem: "If the postsynaptic membrane were held at −20 mV by current injection rather than at −70 mV, the EPSP evoked by the same presynaptic stimulus would most likely be:",
    choices: [
      { id: "A", text: "larger, because the cell is closer to threshold.", explanation: "The size of a postsynaptic current depends on the driving force on the permeant ions, not on proximity to threshold." },
      { id: "B", text: "unchanged, because the same number of channels open in response to glutamate.", explanation: "The same number of channels open, but the current through each depends on driving force, which has changed." },
      { id: "C", text: "smaller, because the driving force $(V_m - E_{rev})$ falls from 70 mV to 20 mV in magnitude.", explanation: "Correct. With a reversal potential near 0 mV, the driving force at −70 mV is −70 mV, while at −20 mV it is only −20 mV, so the net inward current and resulting depolarization are smaller." },
      { id: "D", text: "reversed in polarity, because the cell is held at a depolarized potential.", explanation: "Reversal would occur only if the cell were held above the reversal potential (about 0 mV). At −20 mV the current is still inward." },
    ],
    correctChoiceId: "C",
    explanationOverall:
      "Synaptic current is proportional to the driving force, $V_m - E_{rev}$, times conductance. Moving the holding potential from −70 mV to −20 mV reduces driving force toward the 0 mV reversal potential, shrinking the EPSP, and the response would reverse sign only above 0 mV.",
    walkthrough: {
      approachNotes:
        "Synaptic potential questions often reduce to driving force. Identify the reversal potential, then compare how far the holding potential is from it.",
      steps: [
        "Extract the reversal potential from the passage: near 0 mV.",
        "Compute driving force at each holding potential: $|{-70} - 0| = 70$ mV versus $|{-20} - 0| = 20$ mV.",
        "Recognize current scales with driving force at fixed conductance.",
        "Conclude the response is smaller but still depolarizing, since −20 mV is below the reversal potential.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3A", skill: "data-based reasoning" },
    difficulty: "hard",
  },
  {
    id: "bb-q47",
    passageId: null,
    sectionId: "bio-biochem",
    order: 46,
    stem: "A patient has taken high-dose oral prednisone, a synthetic glucocorticoid, for 6 months. Compared with a healthy individual, which hormone profile is expected for this patient's own hypothalamic-pituitary-adrenal axis?",
    choices: [
      { id: "A", text: "Decreased CRH, decreased ACTH, decreased endogenous cortisol", explanation: "Correct. Exogenous glucocorticoid exerts negative feedback on both the hypothalamus and anterior pituitary, suppressing CRH and ACTH. Without ACTH stimulation, the adrenal cortex atrophies and endogenous cortisol falls." },
      { id: "B", text: "Increased CRH, decreased ACTH, decreased endogenous cortisol", explanation: "CRH would not increase; the glucocorticoid suppresses CRH release along with ACTH." },
      { id: "C", text: "Decreased CRH, increased ACTH, increased endogenous cortisol", explanation: "Elevated ACTH would require loss of negative feedback, which is opposite to what a glucocorticoid provides." },
      { id: "D", text: "Increased CRH, increased ACTH, increased endogenous cortisol", explanation: "This pattern would suggest a loss of feedback or an overactive hypothalamus, not suppression by an exogenous steroid." },
    ],
    correctChoiceId: "A",
    explanationOverall:
      "Cortisol and synthetic glucocorticoids inhibit CRH release from the hypothalamus and ACTH release from the anterior pituitary. Chronic exogenous steroid therefore suppresses the entire axis, leading to adrenal atrophy and low endogenous cortisol, which is why steroids must be tapered rather than stopped abruptly.",
    walkthrough: {
      approachNotes:
        "Trace the axis: hypothalamus (CRH) to anterior pituitary (ACTH) to adrenal cortex (cortisol). A downstream product, or a drug that mimics it, inhibits the upstream levels.",
      steps: [
        "Write the axis: CRH leads to ACTH, which leads to cortisol.",
        "Treat prednisone as a cortisol mimic that supplies negative feedback.",
        "Predict suppressed CRH and ACTH.",
        "Without ACTH trophic support, the adrenal cortex atrophies and endogenous cortisol falls.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3A", skill: "knowledge of scientific concepts" },
    difficulty: "easy",
  },
  {
    id: "bb-q48",
    passageId: null,
    sectionId: "bio-biochem",
    order: 47,
    stem: "A child is found to have congenital deficiency of enteropeptidase, an enzyme of the duodenal brush border. Which of the following is the most likely consequence?",
    choices: [
      { id: "A", text: "Impaired fat digestion only, because enteropeptidase is required for bile salt secretion from the gallbladder.", explanation: "Bile release is triggered by cholecystokinin, and bile salts are not activated by enteropeptidase." },
      { id: "B", text: "Impaired carbohydrate digestion only, because pancreatic amylase is secreted as a zymogen.", explanation: "Pancreatic amylase is secreted in active form, so carbohydrate digestion is not primarily affected." },
      { id: "C", text: "Premature activation of trypsinogen within pancreatic acinar cells, causing pancreatitis.", explanation: "Enteropeptidase is located in the duodenum, so its absence reduces rather than increases trypsinogen activation. Premature intracellular activation is a different pathology." },
      { id: "D", text: "Impaired protein digestion, because trypsinogen cannot be converted to trypsin to activate the other pancreatic proteases.", explanation: "Correct. Enteropeptidase cleaves trypsinogen to trypsin; trypsin then activates chymotrypsinogen, proelastase, and procarboxypeptidases (and more trypsinogen). Without it, the proteolytic cascade is largely blocked." },
    ],
    correctChoiceId: "D",
    explanationOverall:
      "Pancreatic proteases are secreted as inactive zymogens to protect the pancreas from autodigestion. In the duodenal lumen, enteropeptidase converts trypsinogen to trypsin, which then activates the other zymogens. A deficiency therefore causes protein malabsorption, with failure to thrive and hypoproteinemia.",
    walkthrough: {
      approachNotes:
        "For zymogen questions, draw the cascade and find where the missing enzyme sits. Everything downstream of it is affected.",
      steps: [
        "Identify enteropeptidase as the initiator of the cascade in the duodenum.",
        "Recall that it converts trypsinogen to trypsin.",
        "List the zymogens trypsin activates: chymotrypsinogen, proelastase, and procarboxypeptidase.",
        "Conclude protein digestion is impaired, while lipase, amylase, and bile functions largely persist.",
      ],
    },
    category: { foundationalConcept: "FC3", contentCategory: "3B", skill: "knowledge of scientific concepts" },
    difficulty: "medium",
  },
];
