---
tags: [genetics, class, review, en]
date: 2026-07-13
type: class
---

# Advancing the use of genome-wide association studies for drug repurposing

## Citation (NLM)
Reay WR, Cairns MJ. Advancing the use of genome-wide association studies for drug repurposing. Nat Rev Genet. 2021;22(10):658-671. doi:10.1038/s41576-021-00387-z

**DOI:** [https://doi.org/10.1038/s41576-021-00387-z](https://doi.org/10.1038/s41576-021-00387-z)

---

## Summary

This Nature Reviews Genetics review by William R. Reay and Murray J. Cairns (University of Newcastle, Australia) systematically catalogues approaches that leverage common variant genetics — particularly GWAS — to identify drug repurposing opportunities. Drug repurposing (also called drug repositioning) re-deploys approved compounds for new clinical indications, offering a faster and less expensive development path than de novo drug discovery.

**Background — Why drug repurposing?** Complex disorders account for the largest share of global disease burden and are driven by polygenic genetic architectures and environmental risk factors. Novel drug development requires years of clinical trials and regulatory approval, with declining overall success rates. In contrast, repurposing exploits already-approved compounds whose safety profiles are established, enabling faster clinical translation. GWAS have identified thousands of variants rigorously associated with clinically relevant phenotypes, generating insights into the genes and pathways underlying human disease that can directly inform repurposing strategies.

**Approach 1 — Mapping GWAS signals to drug targets:** The most straightforward approach maps genome-wide significant variants (P < 5×10⁻⁸) to genes encoding drug targets. The most complete example is Crohn's disease and IL-23:
- A missense variant in IL23R (rs11209026, p.Arg381Gln, allele frequency ~5%) is robustly associated with Crohn's disease and exerts a protective effect by disrupting IL-23 receptor function
- IL-23 is a pro-inflammatory cytokine essential for T helper 17 (TH17) cell lymphocyte differentiation; its receptor is pharmacologically targetable
- The protective direction of the GWAS signal implies that pharmacological inhibition of IL-23 would be clinically beneficial
- Two monoclonal antibodies targeting IL-23 signaling, originally approved for psoriasis, were proposed as Crohn's disease repurposing candidates:
  - **Ustekinumab:** targets the p40 subunit shared by IL-12 and IL-23; now approved for moderate-to-severe Crohn's disease in the US, Europe, and Australia
  - **Risankizumab:** targets the IL-23-specific p19 subunit; in ongoing trials for Crohn's disease
- This case study — from a single GWAS signal to regulatory approval — is the most complete example of GWAS-informed drug repurposing to date

**Limitations of single-locus GWAS repurposing:** Most common variant GWAS signals have small effect sizes that may not translate to therapeutic benefit; most signals lie in intronic or intergenic regions making causal gene assignment uncertain; assuming the nearest gene is causal is not always valid; LD patterns are complex, often implicating multiple genes within a haplotype; and understanding the direction of pharmacological intervention (activation vs. inhibition) requires knowledge of the functional mechanism.

**Approach 2 — Transcriptome-Wide Association Studies (TWAS):** TWAS integrate GWAS data with gene expression data by constructing models of genetically regulated expression (GReX) using cis-acting eQTL variants. The GReX model predicts gene expression from SNP weights, which are then correlated with GWAS trait effect sizes to estimate the genetic covariance between gene expression and the trait. If higher genetically predicted expression of a gene correlates with disease risk, an antagonist of that gene may be therapeutic; if lower expression correlates with disease risk, an agonist may be beneficial. This provides transcriptomic rationale for repurposing existing compounds that modulate expression of TWAS-prioritized genes.

**Approach 3 — Gene-set association analysis:** For highly polygenic complex traits, cumulative association across sets of genes (biological pathways, protein complexes, tissue-specific expression clusters) may better capture the genetic architecture than single-locus approaches. Gene-set enrichment analysis examines whether drug target gene sets are significantly enriched for GWAS signals, thereby flagging entire drug classes whose mechanism may benefit a particular disorder, even when no single variant is genome-wide significant.

**Approach 4 — Mendelian randomization (MR):** Using GWAS variants as instrumental variables, MR enables causal inference about whether pharmacologically modulating a drug target (exposure) would affect a disease outcome. This is particularly powerful for validating drug targets before costly RCTs: genetic variants associated with a protein's circulating level can serve as instruments to estimate what would happen if that protein were pharmacologically raised or lowered. MR can also identify potential adverse effects of drug targets, complementing the efficacy assessment.

**Approach 5 — Polygenic risk scoring (PRS) for precision medicine:** PRS aggregates the effects of many common variants to quantify an individual's genetic risk. Pharmacologically oriented PRS — constructed specifically from variants in or near drug target genes — can help stratify patients likely to benefit most from a repurposed compound, enabling more precise clinical trial enrichment strategies and moving toward pharmacogenomics-guided prescribing.

---

## Significance in Introduction Context

- **Roadmap from GWAS to clinic:** This review provides the first comprehensive synthesis of the five complementary approaches (locus mapping, TWAS, gene-set association, MR, PRS) that translate GWAS data into drug repurposing, serving as a roadmap for post-GWAS translational research.
- **IL-23/Crohn's disease case study:** The detailed account of how the IL23R GWAS signal (rs11209026) motivated ustekinumab repurposing — from genetic association through trial evidence to regulatory approval — provides a concrete, end-to-end illustration of GWAS-driven drug development.
- **Polygenic and precision medicine integration:** By extending beyond single-variant signals to TWAS, gene-set analysis, and PRS, this review demonstrates how the full polygenic architecture of complex diseases can be harnessed for drug discovery and precision deployment.
- **Why read this in class:** After learning GWAS methodology, this review connects the dots between GWAS signals and real clinical outcomes, illustrating how population genetics research translates into actionable pharmaceutical strategies.

---

## Key References

Key references cited in the paper (with DOI URLs):

1. **Duerr et al. (2006) — IL23R GWAS** — [https://doi.org/10.1126/science.1131480](https://doi.org/10.1126/science.1131480) — First discovery of IL23R association with Crohn's disease, the key signal motivating ustekinumab repurposing
2. **Gusev et al. (2016) — FUSION TWAS** — [https://doi.org/10.1038/ng.3506](https://doi.org/10.1038/ng.3506) — Development of the FUSION framework for TWAS and genetically regulated expression (GReX) models
3. **Buniello et al. (2019) — GWAS Catalog** — [https://doi.org/10.1093/nar/gky1120](https://doi.org/10.1093/nar/gky1120) — GWAS Catalog compiling thousands of GWAS signals for exploration of drug repurposing opportunities
4. **Davey Smith & Ebrahim (2003) — MR** — [https://doi.org/10.1093/ije/dyg070](https://doi.org/10.1093/ije/dyg070) — Foundational Mendelian randomization paper enabling causal inference for drug target validation

---

## Future Research Directions

- **Clinical validation of GWAS-based repurposing candidates:** Beyond the Crohn's disease/IL-23 success story, hundreds of GWAS-derived repurposing candidates remain untested in clinical trials. Reducing economic and regulatory barriers to validating these candidates is a major challenge.
- **Advances in fine-mapping:** Accurately identifying causal variants within GWAS loci is essential for determining which gene is causally affected and in which direction pharmacological intervention should be directed. Improved statistical fine-mapping integrating functional annotation with population-level LD patterns is needed.
- **Pharmacologically oriented PRS in trial design:** Developing clinical trial designs that use pharmacologically oriented PRS to pre-select patients most likely to respond to a repurposed drug would accelerate precision medicine translation.
- **Multi-omics integration:** Integrating GWAS signals with epigenomic, proteomic, and metabolomic datasets to triangulate drug target validity and mechanism will improve the biological plausibility assessment of GWAS-informed repurposing candidates.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
