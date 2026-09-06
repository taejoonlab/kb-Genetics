---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-06
type: class
---

# Telomere-to-telomere sheep genome assembly identifies variants associated with wool fineness

## Citation (NLM)
Luo LY, Wu H, Zhao LM, Zhang YH, Huang JH, Liu QY, et al. Telomere-to-telomere sheep genome assembly identifies variants associated with wool fineness. Nat Genet. 2025;57(1):218-230. doi:10.1038/s41588-024-02037-6

**DOI:** [https://doi.org/10.1038/s41588-024-02037-6](https://doi.org/10.1038/s41588-024-02037-6)

---

## Summary

Sheep (*Ovis aries*) were among the first domesticated livestock, and a good reference genome is essential for studying their evolutionary history, migration, diversity, and the variants underlying specialized traits such as wool quality. The NCBI database holds 58 sheep assemblies, but every one — including Oar_v4.0, Oar_rambouillet_v1.0, and ARS-UI_Ramb_v2.0 — suffers from gaps, misassembled regions, uneven sequencing depth, and consequent mapping failures. The Y chromosome, updated only recently in ARS-UI_Ramb_v3.0, remained structurally uncertain because it is repeat-rich.

This study reports **T2T-sheep1.0**, a **2.85-Gb gap-free telomere-to-telomere genome** of a ram of the Hu sheep breed, a highly prolific Chinese breed. It includes **all autosomes plus the X and Y chromosomes**, and the authors additionally assembled the complete Y chromosome separately and produced **haplotype-resolved parental assemblies** (paternal T2T-sheep1.0P and maternal T2T-sheep1.0M) at T2T level.

The gains over the previous best reference are concrete and quantified. T2T-sheep1.0 adds **220.05 Mb of previously unresolved sequence** and **754 new genes** relative to ARS-UI_Ramb_v3.0. It resolves **centromeric regions**, identifying four classes of repeat unit (**SatI, SatII, SatIII and CenY**) — centromeres being exactly the regions that defeated earlier assemblies. Base accuracy exceeds **99.999%** (Q50), it **corrects several structural errors** present in previous references, and it substantially **improves structural variant detection in repetitive sequence**, where short-read alignment to a gapped reference had been unreliable.

The population-genetic payoff demonstrates why a better reference matters rather than merely being tidier. Realigning whole-genome short-read data from global domestic and wild sheep against T2T-sheep1.0 identified **2,664,979 new SNPs located in previously unresolved regions** — variants that simply could not exist in earlier analyses because the sequence they lie in was absent from the reference. These additional variants improved population genetic analyses and the detection of selective signals, including for **domestication** (for example, ***ABCC4***) and for **wool fineness** (for example, ***FOXQ1***).

---

## Significance in Introduction Context

- Demonstrates concretely that **a reference genome is a tool with limitations, not ground truth** — 220 Mb and 754 genes were simply missing, and 2.66 million variants were undetectable as a result
- Directly applies the telomere-to-telomere assembly review in this vault; this is what that technology produces in a non-model species
- Introduces **centromeric satellite structure** (SatI/II/III, CenY) as sequence that can now be examined rather than assumed
- Connects assembly quality to **population genetics and selection scans** — a methodological point that generalizes to every species with an imperfect reference
- Practically relevant to animal breeding and to the domestication genetics material in the course

---

## Key References

1. **Nurk et al. (2022)** — The complete sequence of a human genome (T2T-CHM13) — The template for gap-free assembly
2. **Li and Durbin (2024)** — Genome assembly in the telomere-to-telomere era — The methodological review covering the approaches used here
3. **Davenport et al. / ARS-UI_Ramb_v2.0 and v3.0 sheep assemblies** — The prior references this work corrects and extends
4. **Cheng et al. (2021)** — hifiasm haplotype-resolved assembly — Assembly methodology enabling the parental haplotype assemblies
5. **Alberto et al. (2018); Deng et al. (sheep domestication genomics)** — Population genomic analyses of domestic and wild sheep — The comparative dataset realigned here
6. **Rhie et al. (2021)** — Vertebrate Genomes Project quality standards — Benchmarks for assembly accuracy and completeness

---

## Future Research Directions

- Functionally validate *FOXQ1* as a wool fineness determinant and *ABCC4* as a domestication target, moving from selective signal to mechanism
- Characterize the newly resolved centromeric satellite arrays across sheep breeds to study centromere evolution
- Build a sheep **pangenome** from multiple T2T assemblies, since a single reference — however complete — still cannot represent breed diversity
- Reanalyse existing sheep GWAS and selection scans against T2T-sheep1.0 to determine how many prior conclusions change
- Use the complete Y chromosome to study paternal lineages and Y-linked variation in domestication history
- Apply the same approach to other livestock species where gapped references still limit variant discovery

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
