---
tags: [genetics, class, article, en]
date: 2026-07-13
type: class
---

# Mapping Mendelian Factors Underlying Quantitative Traits Using RFLP Linkage Maps

## Citation (NLM)
Lander ES, Botstein D. Mapping Mendelian Factors Underlying Quantitative Traits Using RFLP Linkage Maps. Genetics. 1989 Jan;121(1):185-199.

**DOI:** (not available — pre-DOI publication)

---

## Summary

This landmark paper establishes the systematic methodology for mapping quantitative trait loci (QTL) using RFLP linkage maps, introducing three key methodological innovations that defined the field for decades.

**Cross design optimization**: Using Wright's classical formula k = D²/16σ²G, the authors showed how to select inbred strains likely to segregate for QTLs with large phenotypic effects, enabling the experimental geneticist to predict in advance whether a given cross will yield detectable QTLs. A small effective factor count (k) guarantees the presence of at least one QTL with a large effect, quantitatively bounding the minimum detectable effect size.

**Interval mapping**: The paper's central contribution overcomes four limitations of traditional single-marker analysis: (i) underestimation of QTL effects when the QTL is not at a marker; (ii) inability to distinguish tight linkage to a weak QTL from loose linkage to a strong one; (iii) poor QTL position localization; and (iv) elevated false-positive rates from multi-marker testing. Interval mapping computes LOD scores at every position in every inter-marker interval using the method of maximum likelihood, treating the unknown individual QTL genotypes as missing data (handled by the EM algorithm). The authors wrote the MAPMAKER-QTL software package to implement this. The resulting QTL likelihood maps show the evidence for QTL presence at all genomic positions simultaneously, with one-LOD support intervals indicating position uncertainty.

**Genome-wide LOD threshold**: The paper proves that under the null (no QTLs), the LOD score varies across the genome as the square of an Ornstein-Uhlenbeck diffusion process. This result yields analytically justified genome-wide significance thresholds that depend on genome size and marker density. For the domestic tomato genome with a 20 cM RFLP map, the required LOD threshold is ~2.4 (equivalent to a per-marker nominal significance of ~0.001). Using the naive LOD > 0.83 threshold (nominal α = 0.05 per test) would yield >90% probability of at least one false positive genome-wide.

**Selective genotyping**: By growing a larger population but genotyping only the top/bottom 5% phenotypic extremes (±2 SD from the mean), the same total linkage information can be obtained from ~5.5-fold fewer genotyped individuals, at the cost of growing ~3.6-fold more progeny. This approach requires missing-data maximum likelihood methods (not standard linear regression) to produce unbiased effect estimates.

---

## Significance in Introduction Context

- The founding paper of modern QTL mapping—direct prerequisite for understanding complex trait genetics and GWAS
- Introduces LOD scores, maximum likelihood estimation, and genome-wide multiple testing correction in a concrete genetic mapping context
- The conceptual bridge between classical linkage analysis (one gene, one marker) and modern GWAS
- Essential for this course because reading the original paper teaches students to understand statistical power, experimental design, and significance thresholds in quantitative genetics from first principles

---

## Key References

1. **Botstein D et al. (1980)** — Am. J. Hum. Genet. 32:314–331 — RFLP marker proposal
2. **Paterson AH et al. (1988)** — Nature 335:721–726 — first application of interval mapping to tomato fruit QTLs
3. **Churchill GA, Doerge RW (1994)** — Genetics 138:963–971 — empirical threshold values for QTL mapping

---

## Future Research Directions

- Develop integrated QTL-GWAS methodologies suited to modern high-density SNP arrays and whole-genome sequencing
- Improve multi-QTL models for systematic detection of epistatic interactions
- Combine single-cell RNA-seq data with QTL analysis for cell-type-specific eQTL mapping

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
