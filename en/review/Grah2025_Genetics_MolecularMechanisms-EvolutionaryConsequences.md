---
tags: [genetics, class, review, en, 2025-2026]
date: 2026-09-06
type: class
---

# Linking molecular mechanisms to their evolutionary consequences: a primer

## Citation (NLM)
Grah R, Guet CC, Tkačik G, Lagator M. Linking molecular mechanisms to their evolutionary consequences: a primer. Genetics. 2025;229(2):iyae191. doi:10.1093/genetics/iyae191

**DOI:** [https://doi.org/10.1093/genetics/iyae191](https://doi.org/10.1093/genetics/iyae191)

---

## Summary

Can evolution be predicted? The obstacle is not that we lack theory but that biological systems are complex: to forecast what selection will do to a sequence, you would seem to need a complete genotype → phenotype → fitness map, and such maps are only available for the very simplest systems. This paper asks a sharper and more useful question — **how much of that mechanistic detail actually matters?** — and answers it by building a fully specified model system and then deliberately throwing detail away to see what breaks.

The authors enumerate five distinct sources of complexity that stand between a mutation and its evolutionary fate: (1) the mechanisms determining mutational effects and the epistatic interactions among them; (2) the astronomically large mutational sequence space, which can be explored neither experimentally nor computationally, so that predicting evolution requires understanding what *constrains* that space; (3) the relationship between random sequences and their phenotypes, which is what governs *de novo* origination of new biological function; (4) the fact that the distribution of mutational effects itself changes as a sequence evolves — the map is not static; and (5) the complicated way populations actually traverse fitness landscapes, which determines which mutants fix.

For constitutive bacterial promoters — sequences that only bind RNA polymerase — predictive genotype–phenotype–fitness mapping at steady-state expression already exists. The authors' innovation is to move one step up in complexity: a **mechanistic model of a bacterial promoter regulated by two proteins**. This system is still small enough to be fully enumerated, but rich enough to be genuinely regulatory. Crucially, they do not reduce the phenotype to a single number. Instead, every promoter genotype is mapped to **six phenotypes describing the dynamics of gene expression after an environmental switch** — not just how much protein, but how fast, with what delay, to what new level. This captures what a regulated promoter is actually *for*.

The central result is reassuring for anyone who wants to model evolution tractably. Several of the key evolutionary properties — the **distribution of phenotypic effects of mutations**, the **distribution of fitness effects (DFE)**, and the **evolutionary trajectories observed under selection for regulation** — can be predicted accurately *without* accounting for all, or even most, of the system's mechanistic parameters. Complexity is real, but much of it is evolutionarily inert: many mechanistic details cancel out or are invisible to selection. At the same time, the authors argue this is an argument *for* mechanistic modeling, not against it. Only by first building the full model could they identify which simplifications are safe. A purely phenomenological approach cannot tell you which details you are allowed to ignore.

---

## Significance in Introduction Context

- Makes the abstract phrase **"genotype–phenotype map"** concrete and computable: here it is an actual function from promoter sequence to six measurable dynamic phenotypes
- Introduces the **distribution of fitness effects (DFE)** and epistasis as quantities that emerge from mechanism rather than being assumed
- Excellent bridge between the gene-regulation lecture (promoters, repressors, activators, operons) and the evolution lecture — the same promoter is simultaneously a molecular device and an evolving sequence
- Teaches an important methodological habit: build the complete model first, then find out which parts you can discard. Simplification is a conclusion, not an assumption
- Shows students that "phenotype" need not be a single number — dynamics (speed, delay, overshoot) are phenotypes too, and they are what selection often acts on

---

## Key References

1. **Jacob (1977)** — *Evolution and tinkering* — The classic statement that evolution is constrained by what mechanism makes accessible
2. **Kinney et al. (2010)** — Sequence-to-expression mapping of a bacterial promoter — Established that quantitative genotype–phenotype mapping is achievable for constitutive promoters
3. **Lagator et al. (2017, 2022)** — Promoter mutational effects, epistasis, and random-sequence promoters — The empirical foundation the model generalizes
4. **de Visser and Krug (2014)** — Empirical fitness landscapes — Framework for how populations navigate landscapes
5. **Eyre-Walker and Keightley (2007)** — Distribution of fitness effects of new mutations — Defines the central quantity the model reproduces
6. **Payne and Wagner (2014)** — Accessibility of genotype networks — On how mutational space constrains what evolution can reach

---

## Future Research Directions

- Test the simplification claim experimentally: engineer promoter libraries in *E. coli*, measure the six dynamic phenotypes directly, and check whether the reduced model still predicts the observed DFE
- Extend the framework upward in complexity — three or more regulators, feedback loops, sigma-factor competition — and find where the "detail doesn't matter" result finally fails
- Apply the same logic to eukaryotic enhancers, where combinatorial regulation and chromatin add layers that may or may not be evolutionarily inert
- Ask whether the identity of the *dispensable* parameters is itself predictable from network topology, which would give a general rule for model reduction
- Connect to *de novo* regulatory evolution: use the random-sequence branch of the model to predict how often a random genomic sequence becomes a functional regulated promoter

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
