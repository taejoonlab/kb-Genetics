---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Na Li and Matthew Stephens on Modeling Linkage Disequilibrium

## Citation (NLM)
Song YS. Na Li and Matthew Stephens on Modeling Linkage Disequilibrium. Genetics. 2016;203(3):1005–1006. doi:10.1534/genetics.116.191817

**DOI:** [https://doi.org/10.1534/genetics.116.191817](https://doi.org/10.1534/genetics.116.191817)

---

## Summary

This short commentary, published in the "CLASSIC" section of Genetics, is written by Yun S. Song to assess the lasting impact of Li and Stephens (2003) on the field of population genetics.

**Core contribution of Li & Stephens (2003)**: Li and Stephens proposed a simple and elegant probabilistic model that captures the essential features of a genealogical process with recombination while achieving dramatic computational speed-ups. Their key methodological insight was to construct an approximate conditional sampling probability (CSP) — the probability of a new haplotype given the previously observed haplotypes. Building on Stephens and Donnelly (2000), who approximated the next haplotype as an imperfect copy of one of the existing haplotypes (mutation only), and Fearnhead and Donnelly (2001), who incorporated recombination (haplotype as a mosaic of existing haplotypes, with copying switches at recombination events), Li and Stephens simplified the FD approximation and showed how CSPs could be combined to approximate the likelihood of the full haplotype dataset under a model of spatially variable recombination rates. This enabled, for the first time, efficient inference of fine-scale recombination rate variation — including hotspots — from population SNP data.

**Breadth of impact**: Over the following ~13 years, the Li and Stephens "copying model" was extended and applied across a remarkable range of problems:

- *Recombination-related inference*: estimating gene conversion parameters (Gay et al. 2007; Yin et al. 2009); recombination rates in admixed populations (Hinch et al. 2011; Wegmann et al. 2011)
- *Human evolutionary history*: inferring human colonization history (Hellenthal et al. 2008); fine-scale population structure via haplotype "painting" (Lawson et al. 2012); local ancestry inference in admixed individuals (Sundquist et al. 2008; Price et al. 2009)
- *GWAS methodology*: haplotype phasing (Stephens & Scheet 2005); genotype imputation in GWAS (Marchini et al. 2007; Howie et al. 2009; Li et al. 2010) — substantially increasing statistical power by filling in ungenotyped variants

**Theoretical legacy**: Li and Stephens also stimulated theoretical research on improving CSP approximations directly from underlying population genetic models (Griffiths et al. 2008; Paul & Song 2010), producing genealogically interpretable approximations applicable to more complex models including variable effective population sizes, divergence times, and gene flow (Sheehan et al. 2013; Steinrücken et al. 2013, 2015). A recent extension by Rasmussen et al. (2014) developed a Monte Carlo algorithm for sampling genealogical histories, with applications in association mapping and detecting natural selection.

**Overall assessment**: Song characterizes Li and Stephens as groundbreaking work employing biologically motivated approximations to allow efficient statistical inference from genomic data. The innovative modeling approach has facilitated development of numerous analytical tools that scale to whole genomes while capturing important features of realistic population genetic models. It is essential reading for anyone developing inference methods in population genetics and computational biology.

---

## Significance in Introduction Context

- Demonstrates the downstream impact of a single methodological paper, showing how one elegant model can transform a field across more than a decade and across multiple sub-disciplines
- Makes explicit the path from basic population genetics theory (coalescent, recombination) to clinical genomics applications (GWAS imputation), illustrating why methods development matters for translational genetics
- Serves as a companion piece to Li & Stephens (2003), helping readers quickly understand which aspects of the original paper are most important before reading the full methods paper

---

## Key References

Key references cited in the text (with DOI where identifiable):

1. **Li N, Stephens M (2003)** — Genetics 165:2213–2233 — The original paper being reviewed; LD modeling and recombination hotspot detection
2. **Stephens M, Donnelly P (2000)** — [https://doi.org/10.1111/1467-9868.00254](https://doi.org/10.1111/1467-9868.00254) — Prototype of the copying approximation for completely linked loci
3. **Fearnhead P, Donnelly P (2001)** — [https://doi.org/10.1093/genetics/159.3.1299](https://doi.org/10.1093/genetics/159.3.1299) — Extension incorporating recombination; the FD approximation that Li & Stephens simplified
4. **Hellenthal G et al. (2008)** — [https://doi.org/10.1371/journal.pgen.1000078](https://doi.org/10.1371/journal.pgen.1000078) — Applying the copying model to infer human colonization history
5. **Hinch AG et al. (2011)** — [https://doi.org/10.1038/nature10336](https://doi.org/10.1038/nature10336) — Recombination landscape in African Americans using ancestry-based copying model inference
6. **Marchini J et al. (2007)** — [https://doi.org/10.1038/ng2088](https://doi.org/10.1038/ng2088) — Multipoint genotype imputation for GWAS based on the copying model framework (IMPUTE)

---

## Future Research Directions

- Developing improved CSP approximations that account for more realistic demographic histories (variable effective population sizes, structured populations, multiple migration events) to reduce bias in recombination rate estimation
- Scaling ancestral recombination graph (ARG) inference algorithms to biobank-scale data (millions of SNPs, thousands of individuals) to enable genome-wide genealogical inference
- Extending the copying model framework to jointly analyze ancient DNA and modern population data, enabling simultaneous inference of population divergence times, selective sweeps, and admixture events

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
