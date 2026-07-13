---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Na Li and Matthew Stephens on Modeling Linkage Disequilibrium

## Citation (NLM)
Song YS. Na Li and Matthew Stephens on Modeling Linkage Disequilibrium. Genetics. 2016 Jul;203(3):1005-1006. doi:10.1534/genetics.116.191817.

Original paper: Li N, Stephens M. Modeling linkage disequilibrium and identifying recombination hotspots using single-nucleotide polymorphism data. Genetics. 2003 Dec;165(4):2213-2233.

**DOI:** [https://doi.org/10.1534/genetics.116.191817](https://doi.org/10.1534/genetics.116.191817)

---

## Summary

This Genetics Classic commentary by Yun S. Song summarizes the historical significance of Li and Stephens (2003), a paper that revolutionized statistical inference in population genetics by introducing a computationally tractable model for linkage disequilibrium (LD) and recombination rate estimation.

**The computational challenge**: Computing likelihoods under models that incorporate recombination is extremely difficult. Recombination means that different loci have different evolutionary histories, causing dimensionality to explode. Prior methods were too computationally expensive for realistic population genomic datasets.

**The Li-Stephens insight**: Li and Stephens proposed an elegant approximation to the **conditional sampling probability (CSP)**—the probability of observing the next haplotype given those already observed. They modeled the next haplotype hk as an "imperfect copy" of one of the k-1 previously observed haplotypes. In their copying model: copying errors represent mutations; switching between haplotypes to copy from represents recombination events. This model can be computed efficiently using a **Hidden Markov Model (HMM)**, producing a dramatic computational speedup while preserving the key biological features of the genealogical process with recombination.

**Applications and impact**: The Li-Stephens copying model has been extended and applied across a remarkable breadth of population genetics problems: fine-scale recombination rate mapping and identification of recombination hotspots; recombination rate inference in admixed populations; reconstruction of human colonization history; fine-scale population structure analysis; local ancestry inference in admixed populations; and—critically for genomic medicine—**haplotype phasing** and **genotype imputation** that underpin GWAS power. Major tools in current widespread use (BEAGLE, IMPUTE2, SHAPEIT2) are all built on the Li-Stephens framework.

**Theoretical development**: The model also stimulated theoretical work deriving improved CSP approximations, leading to genealogically interpretable methods that can infer complex demographic histories (variable population sizes, divergence times, gene flow between populations).

---

## Significance in Introduction Context

- Illustrates how computational modeling of linkage disequilibrium (LD) underlies the entire infrastructure of modern GWAS and population genomics
- A landmark example of how an elegant mathematical approximation can make previously intractable biological inference feasible
- Demonstrates that purely statistical/mathematical models—without new experiments—can produce profound biological insights
- Essential for this course because it underpins the concepts of LD, recombination hotspots, haplotype analysis, and imputation that students encounter in GWAS-related genetics

---

## Key References

1. **Li N, Stephens M (2003)** — [https://doi.org/10.1534/genetics.165.4.2213](https://doi.org/10.1534/genetics.165.4.2213) — original paper
2. **Fearnhead P, Donnelly P (2001)** — Genetics 159:1299–1318 — foundational prior work on CSP approximation
3. **Marchini J et al. (2007)** — [https://doi.org/10.1038/ng2051](https://doi.org/10.1038/ng2051) — GWAS genotype imputation method based on Li-Stephens

---

## Future Research Directions

- Extend Li-Stephens framework to ancient DNA and single-cell genomic data
- Develop models incorporating more complex population structures (selection, migration, inbreeding)
- Integrate Li-Stephens probabilistic framework with deep learning approaches for improved population genetic inference

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
