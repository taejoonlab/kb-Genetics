---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Genome-wide association studies

## Citation (NLM)
Uffelmann E, Huang QQ, Munung NS, de Vries J, Okada Y, Martin AR, Martin HC, Lappalainen T, Posthuma D. Genome-wide association studies. Nat Rev Methods Primers. 2021;1:59. doi:10.1038/s43586-021-00056-9

**DOI:** [https://doi.org/10.1038/s43586-021-00056-9](https://doi.org/10.1038/s43586-021-00056-9)

---

## Summary

This comprehensive primer in Nature Reviews Methods Primers systematically covers the entire GWAS workflow — from study design to post-GWAS functional follow-up — drawing on 15+ years of GWAS development. Written at a moment when more than 5,700 GWAS have been conducted for more than 3,300 traits and sample sizes have exceeded one million participants, this primer addresses both foundational methods and current challenges.

**GWAS Experimental Workflow:** A GWAS proceeds through these key steps:
1. Data collection from cohorts or biobanks, with careful attention to recruitment biases (e.g., collider bias in volunteer-based cohorts)
2. Genotyping via microarrays (common variants) or next-generation sequencing (also captures rare variants)
3. Quality control: removing monomorphic variants, Hardy-Weinberg equilibrium testing, call-rate filtering, sex check, relatedness pruning, principal component analysis for ancestry
4. Phasing and imputation of untyped variants using reference panels (1000 Genomes Project, TOPMed)
5. Association testing via linear (continuous traits) or logistic (binary traits) regression, with covariates for age, sex, and genetic ancestry principal components
6. Meta-analysis (optional) combining results across cohorts using tools like METAL
7. Independent replication in an external cohort
8. Post-GWAS analyses to interpret results biologically

**Multiple Testing:** With approximately 1 million independent common genetic variants genome-wide, the Bonferroni-corrected significance threshold is P < 5×10⁻⁸. The appropriate threshold may need to be more stringent for populations with larger effective sizes or lower MAF thresholds.

**Study Population Types:**
- **Population-based GWAS:** Most common; assumes random draws from the population
- **Family-based GWAS:** Immune to population stratification but requires larger sample sizes; renewed interest for within-family analyses
- **Isolated populations:** Founder effects may elevate rare variant frequencies, improving power for certain variant classes
- **Biobanks:** Large-scale resources (UK Biobank ~500,000; BioBank Japan; China Kadoorie Biobank) enabling well-powered GWAS for hundreds of traits

**Post-GWAS Analyses:**
- **Statistical fine-mapping:** Prioritizing likely causal variants within identified loci using Bayesian methods (CAVIAR, FINEMAP, SuSIE)
- **SNP-to-gene mapping:** Linking associated variants to genes via positional proximity, eQTLs, chromatin interactions
- **Gene-to-function mapping:** Gene-based and gene-set analyses (MAGMA, DEPICT) to identify enriched biological pathways
- **Genetic correlation analysis:** LD score regression (LDSC) to estimate shared genetic architecture between traits
- **Mendelian randomization:** Testing causal relationships between traits using GWAS summary statistics
- **Polygenic risk scores (PRS):** Aggregating genome-wide effect sizes into individual risk prediction scores

**Population Diversity Challenges:** The field's heavy reliance on European-ancestry cohorts creates issues of PRS transferability, population-specific LD patterns, and reduced statistical power in non-European populations. Biobanks such as H3Africa and the Million Veteran Program are beginning to address this gap.

**Software Overview:** The paper provides a comprehensive table of open-access tools for each GWAS stage — PLINK/PLINK2 (QC and association), REGENIE and SAIGE (large-scale binary traits), FUMA (functional annotation), LDSC (heritability and genetic correlations), LDPred/PRSice (polygenic risk scores), and many others.

---

## Significance in Introduction Context

- **Methodological synthesis:** This Primer consolidates the full GWAS workflow as it stands in 2021, providing the most current and comprehensive reference for understanding GWAS from study design through biological interpretation.
- **Software landscape:** The systematized software table enables researchers to identify appropriate tools for each stage of a GWAS pipeline, making this paper a practical reference for anyone implementing GWAS analysis.
- **Current challenges articulated:** The paper clearly identifies the key unsolved problems — causal variant identification, population diversity, polygenic architecture interpretation — providing a roadmap for the field's next decade.
- **Why read this in class:** This primer covers all core GWAS concepts — LD, imputation, association testing, multiple testing, fine-mapping, PRS, Mendelian randomization — in a single, structured document with the most current methods and applications.

---

## Key References

Key references cited in the paper (with DOI URLs):

1. **Visscher et al. (2017)** — [https://doi.org/10.1016/j.ajhg.2017.06.005](https://doi.org/10.1016/j.ajhg.2017.06.005) — 10 years of GWAS discovery: biology, function, and translation
2. **1000 Genomes Project Consortium (2015)** — [https://doi.org/10.1038/nature15393](https://doi.org/10.1038/nature15393) — Reference panel for imputation of untyped variants
3. **Purcell et al. (2007) — PLINK** — [https://doi.org/10.1086/519795](https://doi.org/10.1086/519795) — Core software for genetic association analysis and quality control
4. **Bulik-Sullivan et al. (2015) — LDSC** — [https://doi.org/10.1038/ng.3406](https://doi.org/10.1038/ng.3406) — LD score regression for heritability partitioning and genetic correlations

---

## Future Research Directions

- **Transition to whole-genome sequencing:** As WGS costs fall, the field is shifting from microarray-based GWAS toward comprehensive sequence-based studies that capture rare variants, structural variants, and other non-SNP variation.
- **Ancestral diversity expansion:** The European-ancestry bias in GWAS must be actively addressed through coordinated investment in diverse biobanks across Africa, Asia, Latin America, and other underrepresented regions.
- **Causal variant and gene identification:** Thousands of GWAS loci remain to be resolved to their causal variants and effector genes; integrated functional genomics — eQTLs, chromatin conformation, CRISPR screens — are needed at scale.
- **Multitrait GWAS methods:** Leveraging pleiotropic effects and genetic correlations among traits through multivariate GWAS frameworks will improve discovery power and biological interpretation.
- **Clinical PRS implementation:** Validating polygenic risk scores in diverse populations and integrating them with traditional clinical risk factors to demonstrate improved patient outcomes is the key step toward clinical translation.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
