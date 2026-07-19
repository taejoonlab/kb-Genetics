---
tags: [genetics, lecture, BME333-BIO333, 2026Fall]
date: 2026-07-20
type: lecture
---

# Human Genetics — Genome-Wide Association Studies (GWAS)

**Course:** BME333 / BIO333 Genetics (UNIST, 2026 Fall) · Lecture 25 · ~60 min
**Syllabus:** [← Course schedule](2026.BME333-BIO333-Syllabus.md) — Week 15 Mon, 2026-12-07

## Learning Objectives
By the end of this lecture, students should be able to:
- Explain the logic of a GWAS: testing common SNPs genome-wide for association with a trait or disease, exploiting linkage disequilibrium (LD) as the reason a tag SNP can flag a causal variant.
- Interpret a Manhattan plot and a QQ plot, and justify the genome-wide significance threshold (p < 5×10⁻⁸) and the need for genomic-control / population-structure correction.
- Distinguish association from causation, and describe how Mendelian randomization (MR) uses genetic variants as instrumental variables to test causal exposure–outcome hypotheses.
- Summarize the population-genetics foundations (allele frequencies, LD, polygenicity/Fisher's infinitesimal model) that make and limit GWAS.
- Discuss translational uses (polygenic scores, biobanks, drug-target prioritization) and the portability/diversity limitations of GWAS findings.

## Lecture Outline (~60 min)
1. **Why GWAS? From family linkage to population association** (~8 min) — Linkage mapping finds rare high-penetrance variants in families; common complex disease needs a population approach. Introduce the common-disease/common-variant hypothesis and the HapMap/LD architecture that lets ~1M genotyped SNPs tag most common variation.
2. **Anatomy of a GWAS** (~12 min) — Case/control or quantitative design, genotyping arrays + imputation, per-SNP regression with covariates. Walk through a Manhattan plot and QQ plot; explain the 5×10⁻⁸ threshold (multiple testing across ~1M independent tests) and effect-size/allele-frequency tradeoffs.
3. **Confounders and quality control** (~10 min) — Population stratification, principal-components/mixed-model correction, relatedness, batch effects, and winner's curse. Use WTCCC2007 as the template that established the modern QC framework.
4. **The polygenic reality** (~8 min) — Most complex traits are highly polygenic with tiny per-variant effects (Fisher's 1918 infinitesimal model realized); introduce heritability explained, missing heritability, and polygenic scores.
5. **From association to causation: Mendelian randomization** (~12 min) — Genotype is randomized at conception and precedes disease, so genetic instruments can test whether a modifiable exposure causally affects an outcome. Cover the three IV assumptions, pleiotropy pitfalls, and two-sample MR using GWAS summary stats.
6. **Translation, biobanks & diversity** (~10 min) — Biobank-scale and cross-ancestry GWAS, drug-target repurposing, and the Eurocentric-bias problem that limits polygenic-score portability. Wrap-up and discussion.

## Textbook Reading
- **Genetics: From Genes to Genomes (8e)** — Ch. 24 Variation and Selection in Populations. → [textbook ref](ref.Genetics-FromGenesToGenomes.md)
- **Genetics: From Genes to Genomes (8e)** — Ch. 25 Genetic Analysis of Complex Traits. → [textbook ref](ref.Genetics-FromGenesToGenomes.md)

## Notes in this vault
Reviews & articles to introduce in class (each has a bilingual en/ko pair):
- [Uffelmann2021_NatRevMethodsPrimer_GWAS](../en/review/Uffelmann2021_NatRevMethodsPrimer_GWAS.md) — the primary how-GWAS-works primer; use its workflow figure as the backbone of segment 2.
- [Pearson2008_JAMA_InterpretingGWAS](../en/review/Pearson2008_JAMA_InterpretingGWAS.md) — how to read and critically interpret a GWAS result; good for the Manhattan/QQ discussion.
- [WTCCC2007_Nature](../en/article/WTCCC2007_Nature.md) — the landmark 7-disease Wellcome Trust study that set the QC and significance conventions still in use.
- [Sakaue2021_NatGenet_BiobankJapan](../en/article/Sakaue2021_NatGenet_BiobankJapan.md) — cross-population biobank GWAS across many traits; anchors the diversity/portability point.
- [Reay2021_NatRevGenet_GWAS-DrugRepurposing](../en/review/Reay2021_NatRevGenet_GWAS-DrugRepurposing.md) — translating hits into drug targets; the "why we care" for segment 6.
- [Visscher2019_Genetics_Fisher1918GWAS](../en/review/Visscher2019_Genetics_Fisher1918GWAS.md) — ties GWAS polygenicity back to Fisher's infinitesimal model (segment 4).
- [Emdin2017_JAMA_MendelianRandomization](../en/review/Emdin2017_JAMA_MendelianRandomization.md) — concise clinical intro to MR; use for the IV logic.
- [Davies2018_BMJ_MendelianRandomization-overview](../en/review/Davies2018_BMJ_MendelianRandomization-overview.md) — practitioner's guide to MR assumptions and pitfalls.
- [Sanderson2022_NatRevMethodsPrimer_MendelianRandomization](../en/review/Sanderson2022_NatRevMethodsPrimer_MendelianRandomization.md) — the MR methods primer for students who want the formal treatment.
