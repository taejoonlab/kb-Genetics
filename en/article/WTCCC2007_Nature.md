---
tags: [genetics, class, article, en]
date: 2026-07-13
type: class
---

# Genome-wide association study of 14,000 cases of seven common diseases and 3,000 shared controls

## Citation (NLM)
The Wellcome Trust Case Control Consortium. Genome-wide association study of 14,000 cases of seven common diseases and 3,000 shared controls. Nature. 2007;447(7145):661-678. doi:10.1038/nature05911

**DOI:** [https://doi.org/10.1038/nature05911](https://doi.org/10.1038/nature05911)

---

## Summary

This landmark paper by the Wellcome Trust Case Control Consortium (WTCCC) represents the first large-scale, systematic genome-wide association study (GWAS) conducted simultaneously across seven common complex diseases in the British population.

**Study Design:** Approximately 2,000 cases per disease and 3,000 shared controls (totaling ~17,000 individuals) were genotyped using the Affymetrix GeneChip 500K Mapping Array Set (~500,568 SNPs). The seven diseases studied were bipolar disorder (BD), coronary artery disease (CAD), Crohn's disease (CD), hypertension (HT), rheumatoid arthritis (RA), type 1 diabetes (T1D), and type 2 diabetes (T2D). Controls came from two sources: the 1958 British Birth Cohort (58C) and UK Blood Services donors.

**Quality Control:** A new genotyping algorithm (CHIAMO) was developed, achieving an error rate below 0.2%. Of 500,568 SNPs, 469,557 (93.8%) passed quality filters with an average call rate of 99.63%. 809 samples were excluded for contamination, non-Caucasian ancestry, or relatedness.

**Key Results:** At a threshold of P < 5×10⁻⁷, 25 strong association signals were identified across the seven diseases:
- **Crohn's disease (CD):** 9 loci including IL23R, ATG16L1, and NOD2 — implicating immune regulation pathways
- **Rheumatoid arthritis (RA):** PTPN22 (1p13) and the MHC region (6p21), with P < 5×10⁻⁷⁶ at the MHC
- **Type 1 diabetes (T1D):** 7 loci including MHC (P < 10⁻¹³⁴), PTPN22, and CTLA4
- **Type 2 diabetes (T2D):** 3 loci including TCF7L2 (10q25) and FTO (16q12)
- **Coronary artery disease (CAD):** Novel locus on chromosome 9p21.3 (rs1333049, P = 1.8×10⁻¹⁴) near CDKN2A/CDKN2B
- **Bipolar disorder (BD):** One signal at 16p12 (rs420259)

Effect sizes were modest at most loci (odds ratios 1.2–2.0), consistent with a polygenic model of disease architecture. An additional 58 sub-threshold signals (P between 10⁻⁵ and 5×10⁻⁷) were identified as candidates for future follow-up.

**Population Structure:** After excluding 153 individuals with non-European ancestry, genomic inflation factors (λ) ranged from 1.03 to 1.11, confirming minimal confounding by population stratification. Thirteen genomic regions showing strong geographic variation within Britain were identified, including loci at LCT, TLR1, and IRF4, suggesting prior natural selection.

**Statistical Framework:** The paper includes a notable discussion of significance thresholds in GWAS, arguing against simple Bonferroni correction and instead proposing a Bayesian framework incorporating prior probabilities and statistical power, settling on P < 5×10⁻⁷ as a practical threshold.

---

## Significance in Introduction Context

- **Proof-of-concept for GWAS:** This study demonstrated for the first time at scale that combining HapMap reference data with dense SNP chips could reliably discover genuine disease-associated variants across the genome, establishing GWAS as the dominant paradigm in complex disease genetics.
- **Shared control design validation:** By demonstrating that a single shared control group can be safely used across multiple disease case sets, this study established an economical and statistically sound design strategy that became standard in subsequent consortia.
- **Reality of effect sizes:** By showing that most discovered loci have modest effect sizes (OR 1.2–1.5), the study provided strong empirical support for the polygenic, common-disease-common-variant model, shifting expectations away from the hope of finding a few large-effect variants.
- **Why read this in class:** This paper introduces all core GWAS concepts — SNP association testing, linkage disequilibrium, multiple testing correction, population stratification, Manhattan plots, and Q-Q plots — in a concrete, large-scale setting.

---

## Key References

Key references cited in the paper (with DOI URLs):

1. **International HapMap Consortium (2005)** — [https://doi.org/10.1038/nature04226](https://doi.org/10.1038/nature04226) — HapMap database providing genome-wide SNP variation and LD patterns used in GWAS design
2. **Duerr et al. (2006)** — [https://doi.org/10.1126/science.1133609](https://doi.org/10.1126/science.1133609) — First discovery of IL23R association with Crohn's disease, replicated in this study
3. **Klein et al. (2005)** — [https://doi.org/10.1126/science.1109557](https://doi.org/10.1126/science.1109557) — Pioneer GWAS success for age-related macular degeneration, inspiring the field
4. **Grant et al. (2006)** — [https://doi.org/10.1038/ng1732](https://doi.org/10.1038/ng1732) — TCF7L2 association with type 2 diabetes, a major prior positive control

---

## Future Research Directions

- **Role of rare variants:** This study focused on common variants (MAF > 5%); whole-genome sequencing studies are needed to determine the contribution of rare variants to disease heritability, addressing the "missing heritability" problem.
- **Causal variant identification:** GWAS identifies tag SNPs in LD with functional variants; fine-mapping and functional genomics are needed to pinpoint the causal variants and understand the underlying molecular mechanisms.
- **Cross-disease shared genetics:** Shared risk loci observed among RA, T1D, and CD indicate partially overlapping genetic architectures among autoimmune diseases; deeper investigation into shared pathways could reveal novel therapeutic targets.
- **Extension to non-European populations:** Findings were restricted to British (European-ancestry) individuals; replication and discovery in diverse ancestral populations are necessary to understand global disease genetics and improve PRS transferability.
- **Larger sample sizes:** Many more susceptibility loci remain to be discovered; studies of tens to hundreds of thousands of individuals using meta-analysis would uncover additional loci with smaller effect sizes.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
