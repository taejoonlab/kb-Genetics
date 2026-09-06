---
tags: [genetics, class, article, en]
date: 2026-09-06
type: class
---

# Pan-UK Biobank genome-wide association analyses enhance discovery and resolution of ancestry-enriched effects

## Citation (NLM)
Karczewski KJ, Gupta R, Kanai M, Lu W, Tsuo K, Wang Y, et al. Pan-UK Biobank genome-wide association analyses enhance discovery and resolution of ancestry-enriched effects. Nat Genet. 2025;57(10):2408-2417. doi:10.1038/s41588-025-02335-7

**DOI:** [https://doi.org/10.1038/s41588-025-02335-7](https://doi.org/10.1038/s41588-025-02335-7)

---

## Summary

Biobanks with paired genetic and phenotypic data have produced more than 275,000 reported associations between loci and human traits. But GWAS remains overwhelmingly **Eurocentric**, which limits how well findings generalize. The primary cause is imbalanced data generation, but there is a second, more remediable cause: even when diverse participants *are* enrolled, analysts routinely **analyze only the largest genetic ancestry group and discard the rest**, because population stratification can generate false positive associations. Data that already exist go unused.

This is doubly wasteful, because underrepresented populations contribute disproportionately to discovery. The authors note that people of African and Hispanic/Latin American genetic ancestry make up only 2.4% and 1.3% of the GWAS Catalog respectively, yet contribute 7% and 4.3% of the associations — greater genetic diversity, shorter linkage disequilibrium blocks, and ancestry-enriched variants all raise the discovery yield per participant.

The **Pan-UK Biobank** analysis addresses the analytic exclusion directly. The authors ran **mixed model association analyses within genetic ancestry groups and then meta-analysed across them**, including a larger fraction of UK Biobank participants than previous efforts. Mixed models handle relatedness and residual structure; within-group analysis followed by meta-analysis handles the stratification concern without throwing data away. They built a **quality control and analysis framework informed by genetic architecture**, and released freely available summary statistics for **7,266 traits**.

The gain is substantial and quantified: **14,676 significant loci (P < 5 × 10⁻⁸) in the meta-analysis that were not found in the European-ancestry group alone**, including entirely new associations such as ***CAMK2D* with triglycerides**. They also highlight associations driven by **ancestry-enriched variation** — variants common in some ancestries and rare or absent in others — including a known pleiotropic missense variant in ***G6PD*** associated with several biomarker traits. G6PD deficiency variants are at appreciable frequency in African and Mediterranean populations because of historical malaria selection, and are essentially invisible in a European-only analysis.

The authors released the results publicly alongside **frequently asked questions describing caveats for interpretation** — an unusually responsible move, since summary statistics stratified by genetic ancestry can be misused if the meaning of "genetic ancestry group" is misunderstood.

---

## Significance in Introduction Context

- Shows that the diversity problem in GWAS is partly an **analysis choice**, not only a recruitment problem — data already collected were being discarded
- Explains **population stratification** and why it causes false positives, and demonstrates the standard solution (within-group analysis plus meta-analysis)
- The ***G6PD*** example ties population genetics (malaria selection, ancestry-enriched allele frequencies) directly to biomarker genetics
- Illustrates that **statistical power per participant is higher in diverse samples** — a scientific argument for diversity, alongside the equity argument
- Complements the GenomeIndia comment and the polygenic risk score review in this vault, which address the same bias from other angles

---

## Key References

1. **Bycroft et al. (2018)** — The UK Biobank resource with deep phenotyping and genomic data — The underlying cohort
2. **Martin et al. (2019)** — Clinical use of current polygenic risk scores may exacerbate health disparities — Statement of the portability consequence of Eurocentric GWAS
3. **Popejoy and Fullerton (2016)** — Genomics is failing on diversity — The framing of the representation problem
4. **Zhou et al. (2018)** — SAIGE: efficient mixed model association for biobank-scale data — Methodological basis for the mixed model analyses
5. **Peterson et al. (2019)** — Genome-wide association studies in ancestrally diverse populations: opportunities, methods, pitfalls — Methodological guidance for cross-ancestry analysis
6. **Sollis et al. (GWAS Catalog)** — The association resource from which the representation statistics are drawn
7. **Luzzatto et al. (G6PD deficiency and malaria)** — The selective history behind the ancestry-enriched *G6PD* variant

---

## Future Research Directions

- Apply the same within-group-plus-meta-analysis framework to other biobanks so that diverse participants are analysed rather than excluded by default
- Use ancestry-enriched variants systematically for fine-mapping, since differing LD structures across ancestries can resolve causal variants that a single population cannot
- Develop and validate polygenic scores using the multi-ancestry summary statistics released here, and test portability improvement
- Improve the definition and communication of "genetic ancestry group" so that summary statistics are not misinterpreted as describing social categories
- Extend deep phenotyping and recruitment in underrepresented populations so that analytic inclusion is matched by data generation

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
