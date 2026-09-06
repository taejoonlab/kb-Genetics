---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-07
type: class
---

# Neuronal wiring diagram of an adult brain

## Citation (NLM)
Dorkenwald S, Matsliah A, Sterling AR, Schlegel P, Yu SC, McKellar CE, et al.; The FlyWire Consortium. Neuronal wiring diagram of an adult brain. Nature. 2024;634(8032):124-138. doi:10.1038/s41586-024-07558-y

**DOI:** [https://doi.org/10.1038/s41586-024-07558-y](https://doi.org/10.1038/s41586-024-07558-y)

---

## Summary

Connections between neurons can be mapped by acquiring and analysing electron microscope images of brain tissue. Until recently this approach had only been applied to **chunks** of brains — a region, a circuit, a developmental stage — because reconstructing neurons across a whole adult brain requires tracing hundreds of thousands of processes through millions of images without losing track of any of them. This paper reports the **complete synapse-resolution wiring diagram of an adult *Drosophila melanogaster* brain**, produced by the **FlyWire** project.

The reconstruction covers the entire adult fly brain: roughly **140,000 neurons** and **tens of millions of chemical synapses**, with every neuron reconstructed, proofread, and annotated with cell type, neurotransmitter prediction, and connectivity. Two things made it possible. Automated segmentation by machine learning produced a first-pass reconstruction; **large-scale distributed proofreading**, including a substantial citizen-science community credited in the author list, corrected the errors that automation could not. The consortium authorship model is itself notable — this is a scale of work no single laboratory could complete.

What makes a connectome different from a wiring parts list is annotation. Neurons are assigned to **cell types**, and because *Drosophila* neuroanatomy has been studied for a century with genetic driver lines, many reconstructed cells can be matched to types with known function and known genetic access. That correspondence is what makes the connectome usable: a circuit identified in the wiring diagram can be manipulated experimentally, because there is a *Gal4* line that labels those neurons.

The resource enables analyses that were previously impossible — tracing complete sensory-to-motor pathways, identifying all inputs and outputs of any neuron, finding recurrent motifs, and comparing circuit architecture across brain regions. Importantly, the connectome is a **structural** map: it says which neurons are connected and how strongly, but not what the circuit computes. Physiology and perturbation remain necessary.

---

## Significance in Introduction Context

- The culmination of the argument for *Drosophila* as a model organism: a complete adult brain wiring diagram, in an animal with genetic tools to manipulate any cell in it
- Illustrates how **genetic access** (Gal4/UAS driver lines) converts an anatomical resource into an experimental one — a genetics point, not just a neuroscience one
- Demonstrates **consortium- and community-scale science**, including citizen scientists as credited contributors
- Provides the direct comparison for the *C. elegans* connectome covered elsewhere in this vault: 302 neurons versus ~140,000, and what changes at that scale
- A concrete example of machine learning as an enabling tool in biology, with the limits of automation made explicit by the proofreading requirement

---

## Key References

1. **White et al. (1986)** — The structure of the nervous system of *C. elegans* — The first complete connectome and the precedent for this work
2. **Zheng et al. (2018)** — A complete electron microscopy volume of the brain of adult *Drosophila melanogaster* (FAFB) — The imaging dataset that FlyWire reconstructed
3. **Scheffer et al. (2020)** — A connectome and analysis of the adult *Drosophila* central brain (hemibrain) — The partial-brain predecessor
4. **Schlegel et al. (2024)** — Whole-brain annotation and multi-connectome cell typing of *Drosophila* — The companion annotation paper
5. **Brand and Perrimon (1993)** — Targeted gene expression as a means of altering cell fates (Gal4/UAS) — The genetic access system that makes the connectome actionable
6. **Januszewski et al. (2018)** — Flood-filling networks for automated neuron segmentation — Machine learning methodology underlying reconstruction

---

## Future Research Directions

- Connect structure to function: pair connectome-derived circuit hypotheses with physiological recording and optogenetic manipulation of the identified neurons
- Determine how much of the wiring is genetically specified versus variable, by comparing connectomes from multiple individuals
- Compare male and female brains to map the circuit basis of sexually dimorphic behaviour
- Use the connectome to guide interpretation of single-cell transcriptomic atlases, linking cell type, gene expression, and connectivity
- Extend whole-brain connectomics to larger brains, where current methods do not yet scale

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-07*
