---
tags: [genetics, lecture, BME333-BIO333, 2026Fall]
date: 2026-07-20
type: lecture
---

# Reverse Genetics

**Course:** BME333 / BIO333 Genetics (UNIST, 2026 Fall) · Lecture 15 · ~60 min
**Syllabus:** [← Course schedule](2026.BME333-BIO333-Syllabus.md) — Week 10, 2026-11-02 (Mon)

## Learning Objectives
By the end of this lecture, students should be able to:
- Define reverse genetics ("gene → phenotype") and contrast it with forward genetics.
- Compare the main perturbation tools: knockouts, knock-ins, RNAi, and CRISPR/Cas.
- Explain how CRISPR/Cas9 and dCas9 fusions enable targeted mutation, activation, and repression.
- Describe massively parallel / multiplexed approaches that scale reverse genetics to whole genomes.
- Interpret phenotypes from targeted perturbations, including redundancy and off-target caveats.

## Lecture Outline (~60 min)
1. **What is reverse genetics?** (~7 min) — Start from a known gene/sequence and ask what its loss or alteration does; complement to forward genetics.
2. **Making targeted mutations** (~10 min) — Homologous recombination knockouts, conditional (Cre/lox) and tissue-specific alleles, and knock-in reporters/tags.
3. **RNA interference** (~8 min) — Sequence-specific knockdown; strengths (fast, scalable) and limits (partial, off-target); feeding RNAi in *C. elegans*.
4. **CRISPR/Cas genome editing** (~12 min) — Cas9 targeting via guide RNA; NHEJ vs. HDR; base and prime editing; the leap in ease and precision.
5. **dCas9 and beyond cutting** (~8 min) — Catalytically dead Cas9 fused to effectors for CRISPRi/CRISPRa and for manipulating chromosome biology (e.g., recruiting factors to defined loci).
6. **Scaling up: multiplexed & massively parallel reverse genetics** (~10 min) — Pooled CRISPR/RNAi screens, saturation mutagenesis, and deep mutational scanning; reading genotype-phenotype maps at scale.
7. **Caveats & synthesis** (~5 min) — Genetic redundancy, incomplete penetrance, off-target effects; when to combine forward and reverse approaches.

## Textbook Reading
- **Genetics: From Genes to Genomes (8e)** — Ch. 21 Manipulating the Genomes of Eukaryotes. → [textbook ref](ref.Genetics-FromGenesToGenomes.md)

## Notes in this vault
Reviews & articles to introduce in class (each has a bilingual en/ko pair):
- [Kuhl2020_Genetics_dCas9+Ctf19+Recombination](../en/article/Kuhl2020_Genetics_dCas9+Ctf19+Recombination.md) — dCas9 fusion (Ctf19) to steer a locus-specific process; worked example of dCas9 beyond editing.
- [Kuhl2020_Genetics_dCas9+Ctf19+Recombination-McVey2022primer](../en/review/Kuhl2020_Genetics_dCas9+Ctf19+Recombination-McVey2022primer.md) — Teaching primer for the dCas9/Ctf19 study; use to unpack the design.
- [Polly2012_Stacio2012_GeneticsPrimer_LIN-35](../en/review/Polly2012_Stacio2012_GeneticsPrimer_LIN-35.md) — Primer illustrating targeted analysis of a defined gene (*lin-35*) in *C. elegans*.
- [Shendure2016_Genetics_MassiveParallelGenetics](../en/review/Shendure2016_Genetics_MassiveParallelGenetics.md) — Massively parallel assays that scale reverse genetics genome-wide.
