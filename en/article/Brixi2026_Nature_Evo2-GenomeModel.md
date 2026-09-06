---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-07
type: class
---

# Genome modelling and design across all domains of life with Evo 2

## Citation (NLM)
Brixi G, Durrant MG, Ku J, Naghipourfar M, Poli M, Sun G, et al. Genome modelling and design across all domains of life with Evo 2. Nature. 2026;652(8104):1349-1360. doi:10.1038/s41586-026-10176-5

**DOI:** [https://doi.org/10.1038/s41586-026-10176-5](https://doi.org/10.1038/s41586-026-10176-5)

---

## Summary

**Evo 2** is a genome-scale foundation model trained on DNA sequence spanning **all domains of life** — bacteria, archaea, eukaryotes, and viruses. It is a **generative** model: trained to predict sequence, it can both evaluate existing sequences and generate new ones. This distinguishes it from supervised predictors such as AlphaGenome, which map sequence to specific functional measurements. Evo 2 learns the statistical structure of genomes themselves, and functional understanding emerges from that objective rather than from labelled training data.

Two properties follow from the design. Because it was trained across **all domains of life**, the model captures sequence features shared across billions of years of evolution as well as lineage-specific patterns, and can be applied to organisms with no functional genomics data of their own. Because it is **generative**, it can be used for **design** — producing novel sequences with desired properties rather than only scoring natural ones.

The scientific application is variant effect prediction without supervision. A model trained to predict sequence assigns a **likelihood** to any sequence; a variant that makes a sequence less likely under the model is one that evolution has avoided, which is a proxy for functional constraint. This recovers something like a learned, genome-wide conservation measure — but one that captures context-dependent constraint rather than treating each position independently, as alignment-based conservation scores do. The same logic applies across coding and non-coding sequence, which is valuable because non-coding constraint is exactly where existing methods are weakest.

The design capability raises the question the paper must address directly, and the involvement of biosecurity-focused authors reflects it: a model that can generate functional genomic sequence across all domains of life, including viruses, is dual-use. Responsible development of such models includes deciding what to exclude from training and what capabilities to release.

---

## Significance in Introduction Context

- Introduces **foundation models** for DNA and distinguishes generative from supervised approaches — an increasingly necessary literacy in genomics
- Explains how **sequence likelihood** under a generative model becomes a measure of functional constraint, connecting machine learning to the classical concept of conservation
- The **all-domains** training set is itself a statement about the unity of molecular biology — the same model handles bacterial, viral, and human sequence
- Raises **dual-use and biosecurity** questions concretely, which belongs in a genetics curriculum alongside the technical material
- Read alongside AlphaGenome in this vault: two different machine learning strategies applied to overlapping problems

---

## Key References

1. **Nguyen et al. (2024)** — Sequence modeling and design from molecular to genome scale with Evo — The direct predecessor model
2. **Avsec et al. (2021, 2026)** — Enformer and AlphaGenome — The supervised sequence-to-function alternative
3. **Rives et al. (2021); Lin et al. (2023)** — Protein language models (ESM) — The protein analogue of this approach
4. **Benegas, Batra and Song (2023)** — DNA language models are powerful predictors of genome-wide variant effects — Establishes likelihood-based variant scoring
5. **Poli et al. (StripedHyena / long-context architectures)** — The architectural basis for megabase-scale sequence modelling
6. **Biosecurity frameworks for AI-enabled biology** — The governance context the authors engage with

---

## Future Research Directions

- Benchmark unsupervised likelihood-based variant scores against supervised predictors and experimental measurements to establish where each is preferable
- Determine whether the model has learned genuine regulatory grammar or is capturing composition and repeat statistics, using controlled in silico tests
- Validate designed sequences experimentally, since generation is only meaningful if the output functions as predicted
- Establish evaluation standards for genome foundation models, which currently lack agreed benchmarks
- Develop and test safeguards for generative genomic models, including training data exclusion and output screening

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-07*
