---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-06
type: class
---

# Pervasive suppressors halt the spread of selfish Segregation Distorter in a natural population

## Citation (NLM)
Chang CH, Handler T, Fuda NJ, Pascua D, Mouton T, Larracuente AM. Pervasive suppressors halt the spread of selfish Segregation Distorter in a natural population. Genetics. 2026;233(4):iyag108. doi:10.1093/genetics/iyag108

**DOI:** [https://doi.org/10.1093/genetics/iyag108](https://doi.org/10.1093/genetics/iyag108)

---

## Summary

Mendel's first law says the two alleles of a heterozygote are transmitted equally. **Meiotic drivers** are selfish genetic elements that break this rule, biasing their own transmission among viable gametes. The paradox is that despite this enormous transmission advantage, drivers are almost always **rare**. *Segregation Distorter* (SD) in *Drosophila melanogaster* is the best-studied case: it is present in most populations worldwide yet segregates at **under 10%** in each. Why does something that cheats meiosis not sweep to fixation?

The SD system is autosomal and has two essential parts. The driver, on chromosome 2L, is **Sd-RanGAP** — a partial tandem duplication of *Ran GTPase Activating Protein*. Its target, **Responder (*Rsp*)**, sits in pericentromeric heterochromatin on chromosome 2R and consists of a large block of tandemly repeated ~120-bp satellite DNA. **Sensitivity scales with copy number**: chromosomes carrying fewer than about 100 *Rsp* repeats are resistant. During spermatogenesis, SD kills sperm carrying a sensitive *Rsp* homolog — so an SD/+ male transmits SD to nearly all his functional sperm. Because killing sperm reduces male fertility, SD imposes strong selection on the host genome to evolve **resistance** (deleting *Rsp* repeats) or **suppression** (unlinked modifiers that block drive).

Untangling these two defences has been hard because *Rsp* is a repeat array that short-read sequencing handles poorly. The authors solved this by working with the **Drosophila Genome Reference Panel (DGRP)** — 90 sequenced inbred strains from a natural population in Raleigh, North Carolina — and characterizing *Rsp* **copy-number variation** molecularly, so that *Rsp* insensitivity could be measured separately from unlinked suppression.

The result overturns the intuitive expectation. **Rsp deletion is not the population's defence**: nearly all strains carry semi-sensitive or sensitive *Rsp* alleles, and truly insensitive alleles are rare in non-SD chromosomes. Instead, **more than half of the strains carry unlinked suppressors**, located on the X chromosome or the autosomes but **not** the Y. Suppression is so widespread that it actually defeated the authors' genome-wide association mapping — when a suppressing genotype is common, GWAS loses power to localize it. They fell back on classical **recombination mapping** in a DGRP strain and narrowed one strong X-linked suppressor to a **~300 kb interval**.

The evolutionary interpretation is elegant. Deleting *Rsp* repeats is favoured only while suppressors are absent, and *Rsp* deletions themselves carry a fitness cost. Once suppressors become common, the advantage of losing *Rsp* disappears and repeat copy number can be restored by unequal crossing over. This churn — driver arises, target contracts, suppressors spread, target expands again — is a plausible engine for the **rapid turnover of satellite repeats** seen across species. Pervasive, multilocus suppression, combined with SD's known fitness costs, explains why SD stays rare.

---

## Significance in Introduction Context

- The clearest possible demonstration that **Mendel's law of segregation is a rule with exceptions**, and that the exceptions are biologically informative rather than trivia
- Introduces **intragenomic conflict**: the genome is not a cooperative unit but a population of elements with partly conflicting interests
- Shows two mechanistically different routes to the same outcome — **resistance** (change the target) versus **suppression** (block the mechanism elsewhere) — and explains why the population chose one over the other
- Illustrates a real limitation of GWAS: when a causal allele is at high frequency, association mapping fails and **classical linkage/recombination mapping** is the right tool. An excellent counterweight to GWAS-only thinking
- Links **satellite DNA and heterochromatin** — usually presented as inert filler — to an active evolutionary process with measurable dynamics

---

## Key References

1. **Sandler et al. (1959); Sandler and Hiraizumi (1959)** — Discovery and characterization of *Segregation Distorter* — Founding papers of the system
2. **Merrill et al. (1999)** — *Sd-RanGAP* as the driver — Molecular identification of the distorter locus
3. **Wu et al. (1989); Pimpinelli and Dimitri (1989)** — *Rsp* satellite copy number and sensitivity — Establishes the <100-repeat resistance threshold
4. **Larracuente and Presgraves (2012)** — Review of the *Segregation Distorter* system — Synthesis of drive strength determinants
5. **Mackay et al. (2012)** — The *Drosophila* Genetic Reference Panel — The sequenced inbred population used here
6. **Lindholm et al. (2016)** — The ecology and evolutionary dynamics of meiotic drive — General framework for driver rarity
7. **Hartl and Hartung (1975); Temin and Marthas (1984)** — Frequencies of insensitive second chromosomes in North America — Historical estimates this study revises

---

## Future Research Directions

- Identify the causal gene within the ~300 kb X-linked suppressor interval and determine how it blocks drive mechanistically
- Test whether the multiple suppressors segregating in this population are the same locus or independent origins — a question about the repeatability of host counter-adaptation
- Measure *Rsp* copy-number dynamics directly across generations to test the proposed expand/contract turnover model
- Sample additional populations worldwide to ask whether suppressor prevalence, rather than *Rsp* insensitivity, is generally what keeps SD rare
- Use long-read assemblies to characterize *Rsp* arrays at base-pair resolution and relate array structure, not just copy number, to sensitivity
- Explore whether the same conflict dynamics drive satellite turnover in other species with known meiotic drivers

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
