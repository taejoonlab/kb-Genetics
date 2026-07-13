---
tags: [genetics, class, article, en]
date: 2026-07-13
type: class
---

# A Cross-Population Atlas of Genetic Associations for 220 Human Phenotypes

## Citation (NLM)
Sakaue S, Kanai M, Tanigawa Y, Karjalainen J, Kurki M, Koshiba S, Narita A, Konuma T, Yamamoto K, Akiyama M, Ishigaki K, Suzuki A, Suzuki K, Obara W, Yamaji K, Takahashi K, Asai S, Takahashi Y, Suzuki T, Shinozaki N, Yamaguchi H, Minami S, Murayama S, Yoshimori K, Nagayama S, Obata D, Higashiyama M, Masumoto A, Koretsune Y, Ito K, Terao C, Yamauchi T, Komuro I, Kadowaki T, Tamiya G, Yamamoto M, Nakamura Y, Kubo M, Murakami Y, Yamamoto K, Kamatani Y, Palotie A, Rivas MA, Daly MJ, Matsuda K, Okada Y. A cross-population atlas of genetic associations for 220 human phenotypes. Nat Genet. 2021;53(10):1415-1424. doi:10.1038/s41588-021-00931-x

**DOI:** [https://doi.org/10.1038/s41588-021-00931-x](https://doi.org/10.1038/s41588-021-00931-x)

---

## Summary

This paper expands the atlas of human genetic associations by conducting 220 deep-phenotype GWASs in BioBank Japan (BBJ, n ≈ 179,000), followed by cross-population meta-analyses with UK Biobank (UKB) and FinnGen (total n = 628,000). The study addresses three critical gaps in existing GWAS research: (1) European population dominance, (2) limited phenotype scope, and (3) lack of systematic biological interpretation frameworks.

**Data and phenotype construction:**
- BBJ: a disease-diagnosis-based nationwide Japanese biobank
- Phenotypes: 159 binary disease endpoints (38 original BBJ target diseases + 121 novel endpoints curated from past medical history (PMH) and electronic medical record (EMR) text-mining), 38 biomarkers, 23 medication usage categories = 220 total phenotypes
- Genotyping: imputed using 1000 Genomes Project Phase 3 (n = 2,504) and Japanese-specific WGS data (n = 1,037) as reference panels
- GWASs run using SAIGE (v.0.37) for binary traits and BOLT (v.2.3.4) for quantitative traits

**BBJ GWAS results:**
- 159 diseases: 519 genome-wide significant loci (113 new)
- 38 biomarkers: 2,249 loci (281 new)
- 23 medication usages: 215 loci
- East Asian-specific discovery example: rs140780894 at the MHC locus in pulmonary tuberculosis (OR = 1.2, P = 2.9 × 10^-23, MAF_EAS = 0.24; MAC_EUR = 0 — completely absent in Europeans)
- EMR-derived case expansion: PTB case count increased from 549 to 7,800 by incorporating past medical history

**Cross-population meta-analysis:**
- ~5,000 new loci identified (disease: 571, biomarkers: 4,471, medication: 301)
- 94.2% of BBJ-significant loci validated in the same effect direction in European data
- Median genetic correlation (rg) between BBJ and European GWASs = 0.82, supporting broadly shared genetic architecture across populations

**Landscape of pleiotropy:**
- Most pleiotropic variant in Japanese: rs671 at ALDH2 (missense; 47 traits) — a well-known East Asian-specific variant affecting alcohol metabolism
- Most pleiotropic in Europeans: rs9265949 at MHC (46 traits)
- More pleiotropic loci show stronger signatures of recent positive selection (quantified by SDS metric) — consistent across both populations

**MHC and ABO PheWAS:**
- MHC fine-mapping: 75 and 129 independent signals in BBJ and UKB, respectively; HLA-B (class I) and HLA-DRB1 (class II) harbor the most associations
- HLA-DRβ1 Ser57 associated with pulmonary tuberculosis, Graves' disease, Hashimoto's disease, and Sjögren's syndrome — notably in the same effect direction for both hyper- and hypothyroidism
- ABO PheWAS: blood type A associated with increased gastric cancer risk; blood type O associated with increased gastric ulcer risk; multiple blood cell and lipid biomarkers associated across both biobanks

**Matrix decomposition analysis (DeGAs/TSVD):**
- Truncated singular value decomposition (TSVD) applied to a sparse Z-score matrix of 22,980 variants × 159 diseases × 2 populations; 40 latent components derived explaining 36.7% of variance
- Component 1 (diabetes component): associated with abnormal pancreas size (enrichment P = 7.7 × 10^-19), pancreas-specific gene expression, glucose/HbA1c biomarker projection
- Component 2 (cardiovascular component): associated with xanthelasma (P = 3.0 × 10^-10), aorta-specific gene expression, blood pressure/lipid projection
- Allergic disease subtyping: Axis 1 (components 3+16) = Type I hypersensitivity (asthma, allergic rhinitis; IgE/Th2 cell biology) vs. Axis 2 (components 26+34) = Type IV hypersensitivity (contact dermatitis, metal allergy; IL-13/IFN biology) — genetics-driven classification recapitulates historical clinical classification

---

## Significance in Introduction Context

The significance of this paper in the context of course introduction:
- **Addressing population equity in GWAS:** The vast majority of GWAS participants have been of European ancestry; this study demonstrates that non-European biobanks discover population-specific and novel variants that expand the genetic map of human disease, underscoring why diverse populations are essential for comprehensive genetic characterization
- **EMR-based deep phenotyping:** Demonstrates that incorporating past medical history and text-mining of clinical records can multiply phenotype scope dramatically (121 novel disease phenotypes) without additional data collection — a paradigm shift in biobank utilization
- **Why read this in class:** Integrates large-scale multi-trait GWAS methodology (cross-population meta-analysis, LD score regression, SAIGE/BOLT linear mixed models), the relationship between pleiotropy and natural selection, and matrix decomposition (TSVD/DeGAs) as a next-generation strategy for hypothesis-free interpretation of genotype-phenotype associations

---

## Key References

Key references cited in the text (with DOI URLs):

1. **Ishigaki et al. (2020)** — [https://doi.org/10.1038/s41588-020-0640-3](https://doi.org/10.1038/s41588-020-0640-3) — Large-scale GWAS in Japanese population identifying novel susceptibility loci
2. **Tanigawa et al. (2019)** — [https://doi.org/10.1038/s41467-019-11953-9](https://doi.org/10.1038/s41467-019-11953-9) — DeGAs: decomposition of genetic associations across 2,138 UK Biobank phenotypes
3. **Bulik-Sullivan et al. (2015)** — [https://doi.org/10.1038/ng.3211](https://doi.org/10.1038/ng.3211) — LD score regression for distinguishing confounding from polygenicity in GWASs
4. **Zhou et al. (2018)** — [https://doi.org/10.1038/s41588-018-0184-y](https://doi.org/10.1038/s41588-018-0184-y) — SAIGE: efficient mixed-model for large-scale case-control GWASs with relatedness
5. **Denny et al. (2013)** — [https://doi.org/10.1038/nbt.2749](https://doi.org/10.1038/nbt.2749) — PheWAS with phecode system for EMR-based phenome-wide association studies
6. **Martin et al. (2019)** — [https://doi.org/10.1038/s41588-019-0379-x](https://doi.org/10.1038/s41588-019-0379-x) — Warning that European-biased polygenic risk scores may exacerbate health disparities

---

## Future Research Directions

Unresolved questions and future research ideas raised by this paper:

- Comprehensive statistical fine-mapping for all identified loci: the current study did not fine-map every locus, leaving uncertainty about whether observed pleiotropy reflects true shared variants vs. LD tagging artifacts
- Extending cross-population analyses to African, South Asian, and Latin American populations: this study compares East Asian and European populations only, leaving most global diversity uncharacterized
- External validation of DeGAs latent components: component structure is sensitive to the selection of input phenotypes; independent cohort validation is needed before using components for clinical disease reclassification
- Connecting medication-usage GWASs to actual drug response phenotypes (pharmacogenomics): medication prescription as a surrogate phenotype may capture treatment efficacy or adverse effects, but direct pharmacogenomic interpretation requires additional data
- Systematic analysis of ascertainment bias introduced by disease-based biobank recruitment: BBJ recruited participants based on at least one of 47 target diseases, which may create allele frequency biases compared to population-based biobanks like UKB

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
