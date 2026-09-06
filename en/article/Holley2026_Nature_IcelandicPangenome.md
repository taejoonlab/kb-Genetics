---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-07
type: class
---

# An Icelandic pangenome reference

## Citation (NLM)
Holley G, Eggertsson HP, Kristmundsdottir S, Beyter D, Skuladottir ATh, Moore KHS, et al. An Icelandic pangenome reference. Nature. 2026. doi:10.1038/s41586-026-10924-7

**DOI:** [https://doi.org/10.1038/s41586-026-10924-7](https://doi.org/10.1038/s41586-026-10924-7)

---

## Summary

**Reference bias** affects most genomic studies that map short reads to a single linear reference genome. Reads carrying alleles absent from the reference align poorly or not at all, so variation is systematically underdetected precisely where an individual differs most from the reference — in structural variants, repeats, and highly diverged haplotypes. The problem is worst for the variants that matter most and for individuals whose ancestry is least represented in the reference. The accepted solution is a **pangenome**: mapping to a graph representing **multiple haplotypes** rather than to one sequence.

This paper contributes both methods and a resource. The methods are two. **Emblask** is a **hybrid long- and short-read haplotype-resolved dual assembly pipeline for parent–offspring trio data** — using trios to phase, long reads for contiguity, and short reads for accuracy, producing both parental haplotypes as separate assemblies rather than one collapsed consensus. **Weaver** addresses the downstream problem of **mapping to pangenomes at scale**, since graph alignment is computationally far harder than linear alignment and has been a practical barrier to pangenome adoption.

Using Emblask, the authors assembled **698 Icelandic haplotypes** and added them to the **Human Pangenome Reference**. The Icelandic contribution is distinctive for reasons that go beyond adding numbers: the deCODE resource provides extensive **genealogical records and trio structure**, which is what makes haplotype-resolved assembly at this scale feasible, and Iceland's population history means these haplotypes are well characterized in their genealogical and phenotypic context.

The broader significance is the shift from **reference genome to reference pangenome**. A single linear reference was always a convenient fiction — no individual has that sequence — and the field is now able to replace it. What remains is tooling, coordinate systems, and analytical conventions, which is exactly what Weaver addresses.

---

## Significance in Introduction Context

- Makes **reference bias** concrete: the reference genome is not neutral, and what you can detect depends on what it contains
- Introduces the **pangenome** as the successor to the single linear reference, a shift students entering genomics now will work within
- Explains **haplotype-resolved assembly** and why trios make it tractable, connecting to the phasing material elsewhere in the course
- Demonstrates that methods and resources advance together — a pangenome is useless without tools that can map to it
- Complements the T2T genome assembly review and the sheep T2T genome in this vault

---

## Key References

1. **Liao et al. (2023)** — A draft human pangenome reference (HPRC) — The resource this work extends
2. **Li and Durbin (2024)** — Genome assembly in the telomere-to-telomere era — Methodological review, also in this vault
3. **Garrison et al. (2018); Hickey et al. (2020)** — Variation graph toolkit and pangenome mapping — Prior graph alignment approaches Weaver improves on
4. **Koren et al. (2018)** — Trio binning for haplotype-resolved assembly — The trio-based phasing principle underlying Emblask
5. **Gudbjartsson et al. (2015)** — Large-scale whole-genome sequencing of the Icelandic population — The deCODE resource providing the haplotypes
6. **Nurk et al. (2022)** — The complete sequence of a human genome — The T2T reference context

---

## Future Research Directions

- Quantify how much variant discovery improves with the expanded pangenome, particularly for structural variants and in repetitive regions
- Extend haplotype contributions to globally diverse populations, since a pangenome dominated by any one population reproduces the bias it aims to remove
- Establish stable coordinate systems and annotation conventions for graph references, which remain unresolved
- Reanalyse existing association studies against the pangenome to determine how many findings change
- Integrate pangenome mapping into clinical sequencing pipelines, where reference bias currently causes missed diagnoses

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-07*
