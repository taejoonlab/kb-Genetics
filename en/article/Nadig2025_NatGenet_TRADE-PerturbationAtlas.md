---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-06
type: class
---

# Transcriptome-wide analysis of differential expression in perturbation atlases

## Citation (NLM)
Nadig A, Replogle JM, Pogson AN, Murthy M, McCarroll SA, Weissman JS, Robinson EB, O'Connor LJ. Transcriptome-wide analysis of differential expression in perturbation atlases. Nat Genet. 2025;57(5):1228-1237. doi:10.1038/s41588-025-02169-3

**DOI:** [https://doi.org/10.1038/s41588-025-02169-3](https://doi.org/10.1038/s41588-025-02169-3)

---

## Summary

**Perturb-seq** combines a pooled high-throughput CRISPR screen with single-cell RNA sequencing, so thousands of genetic perturbations can be tested in one pool of cells and the transcriptional consequence of each read out. The design has an inherent limitation: the number of cells per perturbation — effectively the sample size — is small, so measurements are noisy and many true differential expression effects fall below any significance threshold and are simply never reported.

The authors point out that human geneticists faced exactly this problem in GWAS. Even when few associations reach genome-wide significance, statistical methods can estimate **SNP heritability** — the total genetic effect — and characterize genetic architecture without identifying individual variants. They propose the analogous move for Perturb-seq: instead of counting significant genes, **estimate the distribution of true differential expression effects**, including those missed at the chosen threshold.

**TRADE** (transcriptome-wide analysis of differential expression) is a statistical model for that distribution which explicitly accounts for **estimation error**, so that noise is not mistaken for signal. Its headline output is the **"transcriptome-wide impact"**, a single quantity summarizing the total effect of a perturbation across the entire transcriptome — the Perturb-seq counterpart of heritability.

Applying TRADE to several large Perturb-seq datasets produced results invisible to standard analysis. **Many transcriptional effects undetected individually emerge in aggregate.** A typical gene perturbation affects an estimated **45 genes**, whereas a typical **essential gene affects over 500** — quantifying the intuition that essential genes are network hubs. The authors also found **moderate consistency of perturbation effects across cell types**, meaning transcriptional consequences are neither universal nor entirely cell-type-specific. They identified perturbations whose transcriptional response changes **qualitatively with dosage level**, not just in magnitude — a non-linear genotype–phenotype relationship at the molecular level. Finally, they used TRADE to **clarify the relationship between genetic and transcriptomic correlations across neuropsychiatric disorders**, connecting perturbation biology to human disease genetics.

---

## Significance in Introduction Context

- Shows how a statistical idea transfers between fields: **SNP heritability logic applied to perturbation screens**, which is worth pointing out as an example of how methods propagate
- Demonstrates that **absence of significant hits is not absence of effect** — a lesson that applies to every underpowered experiment students will encounter
- Provides a quantitative answer to "how many genes does knocking out one gene affect?" — 45 typically, 500+ for essential genes
- The **dosage-dependent qualitative change** result is a molecular illustration of non-linearity, connecting to dominance and haploinsufficiency
- Bridges functional genomics (Perturb-seq) and human genetics (neuropsychiatric disorder architecture)

---

## Key References

1. **Dixit et al. (2016); Adamson et al. (2016)** — Perturb-seq — The assay this method analyses
2. **Replogle et al. (2022)** — Mapping information-rich genotype–phenotype landscapes with genome-scale Perturb-seq — The large atlas dataset analysed here
3. **Yang et al. (2010); Bulik-Sullivan et al. (2015)** — SNP heritability estimation and LD score regression — The conceptual template for TRADE
4. **Zhu and Stephens / iDEA** — Point-normal models for differential expression effect distributions — Prior methods capturing aspects of this distribution
5. **Peidli et al. (energy distance for perturbation strength)** — Alternative summary statistics for perturbation effect — Methods TRADE is compared against
6. **Boyle, Li and Pritchard (2017)** — An expanded view of complex traits: from polygenic to omnigenic — The network-propagation framing that TRADE's effect counts inform

---

## Future Research Directions

- Apply TRADE across many more Perturb-seq atlases and cell types to build a systematic map of transcriptome-wide impact per gene
- Use transcriptome-wide impact as a functional constraint metric and test whether it predicts intolerance to loss-of-function in human populations
- Investigate the perturbations with dosage-dependent qualitative responses mechanistically — what network property produces them?
- Extend the framework to in vivo Perturb-seq, where sample sizes per perturbation are even smaller and the method should help most
- Test whether transcriptome-wide impact estimated in cell lines predicts organismal phenotype severity, which would connect molecular and clinical scales

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
