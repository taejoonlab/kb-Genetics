---
tags: [genetics, class, review, en]
date: 2026-07-19
type: class
---

# LODs Past and Present

## Citation (NLM)
Morton NE. LODs past and present. Genetics. 1995;140(1):7-12.

**DOI:** [https://genetics.org/content/140/1/7](https://genetics.org/content/140/1/7)

---

## Summary

Newton E. Morton — the statistician who introduced the sequential LOD-score method to human linkage analysis — here surveys, in a *Genetics* "Perspectives" piece, the intellectual history of measuring genetic linkage in humans, from the pre-LOD era through the DNA revolution. His thesis is that the LOD (logarithm of odds) score, devised forty years earlier when the human gene map "was only a dream," has "proven its fitness to survive in a changed environment," remaining the best vehicle for summarizing linkage data across unlimited numbers of pedigrees, formats, and datasets.

Morton begins with linkage *before* LODs. Felix Bernstein first realized (1931) that linkage could be detected in human pedigrees by taking products of coupling/repulsion frequencies; Fisher (1935) and Finney (1940) refined this into maximum-likelihood *u* scores. But *u* scores were hard to compute, poorly suited to close linkage, and gave no good estimate of the recombination fraction — and crucially, they ignored the low prior probability that two random loci are linked. For these reasons the approach was abandoned in the 1950s, an era in which only three autosomal linkages had been found (Lutheran–secretor, elliptocytosis–Rhesus, and nail-patella–ABO), all using highly penetrant blood-group markers.

The core of the essay explains the logic of LODs. Since Neyman and Pearson (1928), the likelihood ratio has been the optimal basis for statistical decisions; because independent-sample probabilities multiply, Barnard (1949) took logarithms of the ratio and called the quantity a LOD, additive across samples (Z = Σzᵢ). Morton lays out three key properties: LODs give a conservative significance estimate, they connect to the chi-square distribution in large samples, and — with a correctly specified prior — they yield the posterior probability of linkage. He ties the method to Abraham Wald's wartime sequential analysis (published 1947, the same year Haldane and Smith first applied LODs to linkage): linkage detection often depends on a *succession* of samples, after each of which linkage can be accepted, rejected, or tested further — exactly a sequential sampling rule (accept linkage for Z > 3, reject for Z < −2). His own 1955 thesis derived LOD tables for two-generation families and, addressing the low prior of synteny (~0.05 for two random autosomal loci), justified the now-standard threshold of Z > 3 (odds > 1000:1) so that most significant results would be genuine.

Morton then traces the method's expansion: sex-specific recombination (Smith, Renwick), tests for linkage heterogeneity across families (Smith's *a* test), the British computing handicap of the 1950s-70s that forced researchers abroad, and Ott's portable LIPED program (1974). The DNA revolution — Southern blotting, RFLPs (Botstein et al. 1980), then PCR markers and the CEPH family resource — generated linkage data on thousands of markers and multilocus programs, though Morton argues that accumulated pairwise LODs in a location database still cope better with typing errors and heterogeneous data than consensus maps do. He closes by noting the resurrection of nonparametric affected-sib-pair methods for polygenic (complex) disease, which are robust to ascertainment bias but less reliable in small samples — and observes that the more complex-trait mapping relies on replicate samples, the more closely it returns to the sequential sampling logic that LODs were built on.

---

## Significance in Introduction Context

- Explains, from the person who invented it, the reasoning behind the LOD score and the famous Z > 3 threshold — bedrock concepts of human linkage mapping.
- Introduces recombination fraction (θ), likelihood ratios, prior probability of linkage, and sequential analysis in an accessible historical narrative.
- Bridges classical genetics (blood groups, elliptocytosis pedigrees) and the genomic era (RFLPs, PCR, the Human Genome Initiative), showing how one statistical idea adapted across a technological revolution.
- Illustrates why prior probability and multiple-testing corrections matter — a lesson directly transferable to modern GWAS significance thresholds.

---

## Key References

1. **Morton (1955)** — Sequential tests for the detection of linkage — the founding paper introducing LOD scores and the synteny prior to human genetics.
2. **Barnard (1949)** — Statistical inference — coined "LOD" as the logarithm of the likelihood ratio and noted its additivity.
3. **Wald (1947)** — *Sequential Analysis* — the wartime statistical framework Morton adapted for accumulating linkage evidence.
4. **Botstein, White, Skolnick, Davis (1980)** — Genetic linkage map using RFLPs — launched the DNA-marker era of human mapping.
5. **Haldane and Smith (1947)** — Linkage of haemophilia and colour-blindness — first application of LODs to human linkage.

---

## Future Research Directions

- Morton's closing discussion of nonparametric sib-pair methods for polygenic inheritance anticipated the shift toward complex-trait genetics and, ultimately, genome-wide association studies with their own genome-wide significance thresholds.
- His argument for a location database integrating accumulated LODs with physical data foreshadowed modern integrated genome browsers and meta-analytic linkage/association resources.

---

*Processed by **Claude Fable 5** (Claude Code) on 2026-07-19*
