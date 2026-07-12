---
tags: [genetics, class, reverse, en]
date: 2026-07-12
type: class
---

# The Evolution of Tumour Phylogenetics: Principles and Practice

## Citation (NLM)
Schwartz R, Schäffer AA. The evolution of tumour phylogenetics: principles and practice. Nat Rev Genet. 2017 Apr;18(4):213-229. doi:10.1038/nrg.2016.170

**DOI:** [https://doi.org/10.1038/nrg.2016.170](https://doi.org/10.1038/nrg.2016.170)

---

## Summary

Cancer is an evolutionary process driven by the progressive accumulation of genomic abnormalities. Nowell's clonal evolution theory, proposed in the 1970s, provided the conceptual foundation for understanding cancer cell populations as advancing according to the evolutionary principles of diversification and selection. With the advent of next-generation sequencing, applying these principles through phylogenetic tools — "tumour phylogenetics" — has grown into an independent research discipline. However, tumour evolution differs from species evolution in four fundamental ways: the types of mutations (hypermutator phenotypes including chromosomal instability, microsatellite instability, and APOBEC-driven deamination), mutation rates (far higher than in normal cells), the strength and extent of selection (which changes dramatically under therapeutic pressure), and the degree of intra-tumour heterogeneity.

Tumour phylogenetic methods fall into three categories based on study design. First, cross-sectional methods treat tumours collected from many patients as though they were species and construct oncogenetic trees that describe common progression pathways. Following the initial application by Desper et al. of Fearon-Vogelstein's linear colorectal cancer progression model, the field advanced toward probabilistic models (Mtreemix, Rtreemix, etc.). However, this approach ignores intra-tumour heterogeneity, which has driven a shift toward single-patient studies. Second, regional bulk methods reconstruct clonal evolution in individual patients using bulk samples from multiple tumour sites or regions. Tools including TuMult, MEDICC, PhyloWGS, SPRUCE, and Canopy fall into this category, with a general tendency to combine SNV and CNV data to increase analytical power. Methods that integrate clonal deconvolution with phylogenetics (cITUP, LICHeE, etc.) are particularly important. Third, single-cell methods construct phylogenetic trees at the level of individual cells. As scSeq technology has advanced, these methods provide the highest resolution view of clonal architecture. OncoNEM, SCITE, and related tools were developed for scSeq-based SNV analysis, though most studies still rely on general phylogenetic tools such as neighbour joining.

The three core components of phylogenetic analysis are data, models, and algorithms. Data types include CGH, FISH, SNP arrays, DNA-seq (SNV and CNV), RNA-seq, DNA methylation, and single-cell sequencing. Evolutionary models include maximum parsimony (assuming mutations are rare), minimum evolution, probabilistic methods (maximum likelihood and Bayesian), and weighted least squares. Algorithms include combinatorial optimization, heuristic search, neighbour joining, UPGMA, and MCMC. Critically, if any one of these three components fails to conform to biological reality, results will be distorted. For CNV data in particular, complex mutational events — duplications, deletions, copy-neutral LOH — commonly violate the assumptions of standard models.

The major applications of tumour phylogenetics include distinguishing driver from passenger mutations, determining the order and timing of driver mutation emergence, characterising linear versus branching clonal progression, predicting prognosis, and identifying therapy-resistant clones. The role of selection is currently debated: some studies present evidence that pre-treatment tumours evolve through substantially neutral processes (the "big bang model"), while others report evidence of Darwinian selection. These conflicting conclusions arise partly from differences in marker types (SNV versus CNV) and methodological choices.

---

## Significance in Introduction Context

- By systematically organising the principles and methods of a new field that analyses cancer evolution from a phylogenetic perspective, the review provides the educational foundation that cancer genomics researchers need to correctly understand and apply phylogenetic methods.
- While emphasising the importance of alignment among the three components — data, models, and algorithms — the review specifically warns against errors that arise when tools from standard phylogenetics software are adopted wholesale without accounting for biological reality (complexity of CNV events, high mutation rates).
- By explaining in a phylogenetic context how intra-tumour heterogeneity relates to therapy resistance and prognosis, the review highlights the clinical importance of multi-clonal architecture analysis in precision medicine.
- The review demonstrates that tumour phylogenetics using single-cell sequencing can provide the highest-resolution clonal structural information, and predicts how advances in scSeq technology are transforming this field.
- By analysing from a methodological perspective why conflicting conclusions (linear versus branching evolution; Darwinian selection versus neutral evolution) appear across studies, the review raises the need for standardisation of study design and method selection.

---

## Key References

1. **Nowell (1976)** — [https://doi.org/10.1126/science.959840](https://doi.org/10.1126/science.959840) — Proposed clonal evolution theory, laying the conceptual foundation for understanding cancer as an evolutionary process
2. **Desper et al. (1999)** — [https://doi.org/10.1089/cmb.1999.6.37](https://doi.org/10.1089/cmb.1999.6.37) — First application of phylogenetic methods to CGH data, introducing the oncogenetic tree concept
3. **Alexandrov et al. (2013)** — [https://doi.org/10.1038/nature12477](https://doi.org/10.1038/nature12477) — Characterised dozens of mutational signatures across cancer types and linked them to environmental and endogenous mutational causes
4. **Navin et al. (2011)** — [https://doi.org/10.1038/nature09807](https://doi.org/10.1038/nature09807) — First application of single-cell sequencing to tumour phylogenetics, characterising clonal architecture in breast cancer
5. **Beerenwinkel et al. (2007)** — [https://doi.org/10.1073/pnas.0703503104](https://doi.org/10.1073/pnas.0703503104) — Probabilistic oncogenetic tree inference using Mtreemix, advancing cross-sectional methods
6. **Schwarz et al. (2015)** — [https://doi.org/10.1038/ng.3374](https://doi.org/10.1038/ng.3374) — Applied MEDICC to ovarian cancer, showing that relapse tumours diverge early from primary tumours
7. **Sottoriva et al. (2015)** — [https://doi.org/10.1038/ng.3214](https://doi.org/10.1038/ng.3214) — Proposed the "big bang" model for colorectal cancer: early clonal expansion followed by neutral evolution without selection
8. **Ross & Markowetz (2016)** — [https://doi.org/10.1038/nmeth.3800](https://doi.org/10.1038/nmeth.3800) — Developed OncoNEM, refining Bayesian inference for tumour phylogenetics from single-cell data

---

## Future Research Directions

- Integrated analytical frameworks combining bulk sequencing with single-cell sequencing are needed. Computational tools that exploit the complementary strengths of each approach (bulk: high coverage and sensitivity; single-cell: clone-level resolution) are required.
- Longitudinal sampling across the full course of treatment — tracking clonal dynamics before, during, and after therapy — should be expanded, enabling development of models that predict the evolutionary trajectories of therapy-resistant clones.
- Beyond SNV and CNV, methods for integrating epigenomic data (DNA methylation, histone modifications, chromatin accessibility) into tumour phylogenetic analysis must be developed.
- Translational research integrating phylogenetic diversity metrics into clinical decision-making for prognosis prediction, optimal treatment selection, and progression monitoring is needed.
- To resolve the problem of conflicting conclusions across methodologies, simulation-based benchmarking and methodological standardisation are required — with particular emphasis on validating method robustness under conditions of high intra-tumour heterogeneity.

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-12*
