---
tags: [genetics, class, reverse, en]
date: 2026-07-12
type: class
---

# What are super-enhancers?

## Citation (NLM)
Pott S, Lieb JD. What are super-enhancers? Nat Genet. 2015;47(1):8-12. doi:10.1038/ng.3167

**DOI:** [https://doi.org/10.1038/ng.3167](https://doi.org/10.1038/ng.3167)

---

## Summary

The term "super-enhancer" was introduced to describe clusters of putative enhancers with unusually high levels of Mediator (Med1) co-activator binding as measured by ChIP-seq. The original definition, applied to mouse embryonic stem cells (mESCs), proceeded in three steps: (1) enhancer loci were identified by ChIP-seq peaks for master transcription factors (Oct4, Sox2, Nanog); (2) enhancers within 12.5 kb of each other were stitched together into single genomic entities; and (3) stitched regions were ranked by total Med1 signal, with those above an inflection-point threshold (fewer than 3% of all regions) designated super-enhancers. Pott and Lieb critically evaluate whether this operational definition captures a genuinely novel class of regulatory element or merely identifies quantitatively strong, but mechanistically conventional, enhancers.

The authors summarize the reported properties of super-enhancers: they span large genomic regions (median ~8,667 bp versus ~703 bp for normal enhancers in mESCs), show enrichment for RNA Pol II, eRNA transcription, p300/CBP acetyltransferases, cohesin, and the histone marks H3K27ac and H3K4me1, and are enriched for DNase I hypersensitive sites. In mESCs, super-enhancers are found near pluripotency genes (Oct4, Sox2, Nanog) and are enriched for binding motifs of additional ESC transcription factors (Klf4, Esrrb, Prdm14). Super-enhancers can be defined in any cell type using lineage-specific master TFs, and are typically cell type-specific; they are also enriched at oncogenes in cancer cells, particularly in the MYC locus, and are enriched for disease-associated SNPs in a cell-type-specific manner.

The critical analysis presented in this perspective challenges the notion that super-enhancers represent a fundamentally new paradigm. The authors raise five concerns. First, the definition of super-enhancers is inherently circular because the very criteria used to identify them (high Mediator binding) are the same ones used to attribute functional significance to them. Second, enhancer clustering is neither necessary nor sufficient: 15% of super-enhancers in mESCs are single, non-stitched enhancers, and only 15% of stitched enhancer regions qualify as super-enhancers. Third, the threshold separating super-enhancers from normal enhancers has no biological grounding — it is an arbitrary inflection point on a continuous distribution of Med1 enrichment. Fourth, the constituent enhancers within super-enhancers have stronger individual activating activity in reporter assays than normal enhancers, consistent with previously known features of enhancer cooperativity. Fifth, super-enhancers overlap substantially with previously defined regulatory domains such as locus control regions (LCRs), clusters of open regulatory elements (COREs), and stretch enhancers.

Despite these criticisms, the authors acknowledge that the super-enhancer concept is operationally useful: the definition consistently identifies regulatory regions near genes important for cell fate specification, and CRISPR-Cas9-based deletion of super-enhancer constituent elements offers a powerful experimental framework for testing enhancer cooperativity in vivo. The paper concludes that the super-enhancer term is a practical tool for cataloging strong regulatory regions, but the claim that they constitute a mechanistically novel entity is not yet supported by available evidence.

---

## Significance in Introduction Context

- Super-enhancers illustrate how quantitative ChIP-seq data can be used to prioritize regulatory regions for reverse-genetic dissection, even before mechanistic understanding is established — a common paradigm in genomic reverse genetics.
- The critical analysis of the super-enhancer concept demonstrates the importance of distinguishing operational definitions (high Mediator enrichment) from mechanistic claims (cooperative, emergent regulatory behavior) — a distinction central to rigorous reverse-genetic interpretation.
- The enrichment of super-enhancers at oncogenes and disease-associated SNPs makes them high-value targets for therapeutic reverse genetics, including CRISPR-based enhancer disruption strategies.
- The overlap of super-enhancers with locus control regions and other previously characterized large regulatory domains shows that genomic methods often rediscover phenomena first identified by classical reverse genetics, underscoring the value of historical context.
- The call for CRISPR-Cas9 deletion experiments to test super-enhancer function demonstrates how reverse genetics (gene-first, sequence perturbation-first) is essential for validating genome-wide associative findings from ChIP-seq studies.

---

## Key References

1. **Whyte et al. (2013)** — https://doi.org/10.1016/j.cell.2013.03.035 — Original paper defining super-enhancers in mESCs using master TF and Med1 ChIP-seq.
2. **Hnisz et al. (2013)** — https://doi.org/10.1016/j.cell.2013.09.053 — Extended super-enhancer definition across 86 tissue types; linked super-enhancers to disease SNPs.
3. **Loven et al. (2013)** — https://doi.org/10.1016/j.cell.2013.03.036 — Identified super-enhancers at oncogenes in cancer cells; showed selective sensitivity to BRD4 inhibition.
4. **Parker et al. (2013)** — https://doi.org/10.1073/pnas.1317023110 — Defined stretch enhancers as an independently identified class of large regulatory domains overlapping with super-enhancers.
5. **Kagey et al. (2010)** — https://doi.org/10.1038/nature09380 — Showed Mediator and cohesin connect enhancers to promoters and are essential for gene expression in mESCs.
6. **Thurman et al. (2012)** — https://doi.org/10.1038/nature11232 — ENCODE accessible chromatin atlas providing the DHS reference framework used to characterize super-enhancers.
7. **Shalem et al. (2014)** — https://doi.org/10.1126/science.1247005 — Genome-scale CRISPR-Cas9 screening; cited as the methodological basis for proposed super-enhancer deletion experiments.

---

## Future Research Directions

- Systematic CRISPR-Cas9 deletion of individual constituent enhancers within super-enhancers in relevant cell types is needed to test whether cooperativity between constituent elements is a defining functional feature or merely a correlate of high Med1 signal.
- Distinguishing whether super-enhancer activity depends on the clustering of multiple weak enhancers or on a single dominant constituent element requires careful, locus-specific reverse-genetic perturbation with precise transcriptional readouts.
- Characterizing the molecular basis of super-enhancer sensitivity to BRD4/BET inhibitors (relative to normal enhancers) at the mechanistic level — beyond descriptive ChIP-seq correlation — is a key unresolved question with direct therapeutic implications.
- Assessing whether super-enhancer-associated SNPs causally alter gene expression in a cell-type-specific manner, using allele-specific CRISPR base editing combined with single-cell transcriptomics, would establish a mechanistic link between regulatory variation and disease.
- Determining whether phase-separated transcriptional condensates preferentially form at super-enhancers, and testing whether condensate disruption specifically ablates super-enhancer-driven transcription, would provide a mechanistic model for the high levels of activator enrichment observed.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
