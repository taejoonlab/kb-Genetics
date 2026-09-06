---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-07
type: class
---

# Human de novo mutation rates from a four-generation pedigree reference

## Citation (NLM)
Porubsky D, Dashnow H, Sasani TA, Logsdon GA, Hallast P, Noyes MD, et al. Human de novo mutation rates from a four-generation pedigree reference. Nature. 2025;643(8071):427-436. doi:10.1038/s41586-025-08922-2

**DOI:** [https://doi.org/10.1038/s41586-025-08922-2](https://doi.org/10.1038/s41586-025-08922-2)

---

## Summary

Estimates of the human *de novo* mutation rate are almost entirely based on **short-read sequencing of parent–offspring trios**. That design has two structural limitations. First, short reads cannot resolve **repetitive and structurally complex regions**, so entire mutation classes — tandem repeat expansions, structural variants, mutations in segmental duplications and satellite arrays — are systematically undercounted or invisible. Second, a trio gives one transmission per child, so a *de novo* variant call cannot be independently confirmed by observing whether it is passed on.

This study addresses both by combining a **four-generation pedigree** with **long-read and multi-platform sequencing**. The multi-generation design is the key methodological advance: a variant that arises in generation II and is genuinely germline should be **transmitted to generation III and observed again in generation IV**. Transmission across generations therefore serves as independent validation, distinguishing true germline *de novo* mutations from somatic mosaicism, post-zygotic events, and sequencing artifacts — the three things that most inflate trio-based estimates. It also allows **phasing**, so each mutation can be assigned to the parental haplotype and thus to maternal or paternal origin.

Long reads and complementary technologies extend the measurement into genome regions that short reads cannot access. This matters because the mutation rate is not uniform: repeat-rich sequence mutates by different mechanisms and at very different rates than unique sequence, and a genome-wide rate estimated only from accessible regions is not the genome-wide rate. The authors quantify *de novo* mutation across variant classes — single-nucleotide variants, indels, **tandem repeats**, and **structural variants** — producing a more complete accounting than trio short-read studies allow.

The resulting resource functions as a **reference pedigree** for the field: a deeply characterized family in which mutation calls have been validated by transmission, against which new methods can be benchmarked.

---

## Significance in Introduction Context

- Shows that a textbook number — the human mutation rate — depends heavily on **what the sequencing technology can see**
- Demonstrates the power of **multi-generation pedigrees**: transmission is the only definitive validation that a variant is germline rather than somatic or artefactual
- Extends the mutation lecture beyond point mutations to **tandem repeats and structural variants**, which have distinct mutational mechanisms and rates
- Explains **phasing** and parent-of-origin assignment concretely
- Complements the Shoag sperm-sequencing study and the dog de novo mutation study in this vault — three different designs for the same quantity

---

## Key References

1. **Kong et al. (2012)** — Rate of de novo mutations and the importance of father's age — The canonical trio-based estimate
2. **Rahbari et al. (2016)** — Timing, rates and spectra of human germline mutation — Trio-based spectrum characterization
3. **Nurk et al. (2022)** — The complete sequence of a human genome (T2T-CHM13) — The reference enabling analysis of previously inaccessible regions
4. **Sasani et al. (2019)** — Large, three-generation human families reveal post-zygotic mosaicism and variability in germline mutation accumulation — The multi-generation precedent
5. **Logsdon, Vollger and Eichler (2020)** — Long-read human genome sequencing and its applications — Technology framing
6. **Gymrek et al. (tandem repeat mutation)** — Repeat instability and its rate — Background for the repeat mutation class

---

## Future Research Directions

- Apply the multi-generation, long-read design to additional families to establish how much the rate varies among individuals and populations
- Determine mutation rates specific to satellite arrays and segmental duplications, which remain the least characterized regions
- Use validated calls from this pedigree as a truth set to benchmark and improve *de novo* variant callers
- Investigate whether tandem repeat and structural variant mutation rates show the same paternal age effect as single-nucleotide variants
- Extend to ancestrally diverse pedigrees, since almost all high-quality mutation rate estimates derive from a small number of families

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-07*
