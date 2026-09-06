---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-07
type: class
---

# Advancing regulatory variant effect prediction with AlphaGenome

## Citation (NLM)
Avsec Ž, Latysheva N, Cheng J, Novati G, Taylor KR, Ward T, et al. Advancing regulatory variant effect prediction with AlphaGenome. Nature. 2026;649(8088):1206-1216. doi:10.1038/s41586-025-10014-0

**DOI:** [https://doi.org/10.1038/s41586-025-10014-0](https://doi.org/10.1038/s41586-025-10014-0)

---

## Summary

Deep learning models that predict functional genomic measurements directly from DNA sequence have become central tools for deciphering the regulatory code. The persistent obstacle is a **trade-off between input sequence length and prediction resolution**. A model can look at a long stretch of sequence — necessary because regulatory elements act over hundreds of kilobases — or it can predict at fine resolution, but existing architectures could not do both. That trade-off restricted which molecular modalities could be predicted and limited performance.

**AlphaGenome** is a **unified DNA sequence model** that takes **1 megabase of input sequence** and predicts a wide range of functional genomic measurements. Two features distinguish it. The **1 Mb context** is long enough to contain distal enhancers and topological domain structure, so the model can in principle learn genuinely long-range regulation rather than only promoter-proximal effects. Being **unified** means one model predicts many modalities — expression, chromatin accessibility, splicing, and others — rather than requiring a separate specialized model per assay, which allows shared regulatory logic to be learned once and applied across readouts.

The application that motivates the work is **regulatory variant effect prediction**. Most disease- and trait-associated variants from GWAS lie in **non-coding sequence**, and interpreting them is the central bottleneck in human genetics. Unlike coding variants, where the genetic code makes consequences largely legible, a non-coding variant's effect depends on whether it disrupts a regulatory element active in a relevant cell type. A model that predicts functional measurements from sequence can be queried *in silico*: feed in the reference sequence and the alternate sequence, and the predicted difference estimates the variant's regulatory effect — for any variant, including ones never observed.

The paper's contribution is therefore both a model and a demonstration that longer context plus multi-modal training improves variant effect prediction. It is worth stating clearly what such models do not do: they predict measurements correlated with regulatory activity, not causal disease mechanisms, and predictions require experimental validation.

---

## Significance in Introduction Context

- Directly addresses the central unsolved problem of the GWAS era: **interpreting non-coding variants**
- Introduces **sequence-to-function deep learning** as a genomics tool and explains the context/resolution trade-off that shaped the field
- Reinforces why **long-range regulation** matters — the model needs a megabase because biology uses a megabase
- Useful for discussing what a prediction is and is not: a computational estimate of a molecular readout, not a demonstration of causality
- Complements the range extender and 3D genome papers in this vault, which supply the biology such models must capture

---

## Key References

1. **Zhou and Troyanskaya (2015)** — Predicting effects of noncoding variants with deep learning (DeepSEA) — The first major sequence-to-function model
2. **Kelley et al. (2018)** — Sequential regulatory activity prediction with deep convolutional networks (Basenji) — Extended context modelling
3. **Avsec et al. (2021)** — Effective gene expression prediction from sequence by integrating long-range interactions (Enformer) — The direct predecessor by the same lead author
4. **Jaganathan et al. (2019)** — Predicting splicing from primary sequence with deep learning (SpliceAI) — Modality-specific precedent that AlphaGenome unifies
5. **Karollus, Mauermeier and Gagneur (2023)** — Current sequence-based models capture gene expression determinants in promoters but mostly ignore distal enhancers — The critique motivating longer context
6. **ENCODE Project Consortium** — The functional genomics data used for training and evaluation

---

## Future Research Directions

- Benchmark predictions against experimental variant effect measurements such as MPRA and CRISPR perturbation data, which remain the ground truth
- Determine whether the model has genuinely learned distal enhancer logic or is exploiting proximal correlates, using targeted in silico perturbation
- Extend to cell types and tissues underrepresented in training data, where clinical interpretation is most needed
- Integrate predictions into clinical variant interpretation frameworks with calibrated confidence, rather than as unqualified scores
- Test whether predictions transfer across species, which would indicate the model has learned regulatory grammar rather than memorized human-specific patterns

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-07*
