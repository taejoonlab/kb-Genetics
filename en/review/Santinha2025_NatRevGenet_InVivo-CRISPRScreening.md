---
tags: [genetics, class, review, en]
date: 2026-09-06
type: class
---

# Methods and applications of in vivo CRISPR screening

## Citation (NLM)
Santinha AJ, Strano A, Platt RJ. Methods and applications of in vivo CRISPR screening. Nat Rev Genet. 2025;26(10):702-718. doi:10.1038/s41576-025-00873-8

**DOI:** [https://doi.org/10.1038/s41576-025-00873-8](https://doi.org/10.1038/s41576-025-00873-8)

---

## Summary

A fundamental goal of genetics is to connect genotype to phenotype. **Pooled genetic screens** — perturbing dozens to thousands of genetic elements simultaneously in a mixed population and reading out which perturbations change a phenotype — generate large-scale, unbiased genotype–phenotype maps. Almost all CRISPR screening has been done *in vitro*, in cultured cells, because pooled screening needs a large, uniform, accessible population under a clean selective readout. But cultured cells lack the tissue architecture, cell–cell interactions, immune system, vasculature, and systemic physiology that determine most phenotypes of interest. **In vivo CRISPR screening** brings pooled perturbation into the intact animal.

**Types of screen.** The review distinguishes **ex vivo** screens (cells perturbed in culture, then transplanted — most established for haematopoietic and immune cells) from **direct in vivo** screens (perturbation delivered into the animal itself, using AAV or lentiviral vectors, often in Cas9-transgenic mice so only the guide RNA needs delivering). Direct screens can address tissues that cannot be transplanted, notably the brain.

**Design.** This is where in vivo screening is genuinely hard, and the review is practical about it. **Library size is constrained by delivery**: only a limited number of cells are transduced, so representation per guide is low and screens must be far smaller than *in vitro* equivalents. **Bottlenecks and drift** are severe — a small founding population plus stochastic clonal expansion produces noise that mimics selection. The number of animals, the multiplicity of infection, and the choice of a targeted rather than genome-wide library all follow from this.

**Interpretation.** Because drift is large, statistical inference must distinguish it from real effects, and non-targeting and safe-harbour controls carry more weight than *in vitro*. The review also covers single-cell readouts (Perturb-seq applied in vivo), which give a rich transcriptional phenotype per perturbation rather than only survival or enrichment.

**Applications and future.** In vivo screens have identified regulators of tumour growth and immune evasion, neuronal survival and function, tissue regeneration, and immune cell differentiation — phenotypes that simply do not exist in a dish. The authors close on where the field is heading: larger libraries as delivery improves, base and prime editing rather than knockouts, and screens in more tissues and disease models.

---

## Significance in Introduction Context

- The current state of the art in **reverse genetics** — the natural continuation of the reverse genetics lecture beyond single-gene knockouts
- Explains why **context matters**: the same gene knockout can have opposite consequences in culture and in an animal with an immune system
- Introduces practical experimental design constraints (library representation, bottlenecks, statistical power) that make abstract screening logic concrete
- Complements the IMPC mouse retina knockout screen in this vault: that is one gene per animal, this is thousands of perturbations per animal — two ends of the reverse-genetics spectrum
- Connects CRISPR mechanism to a research application at genome scale

---

## Key References

1. **Shalem et al. (2014); Wang et al. (2014)** — Genome-scale CRISPR–Cas9 knockout screening — Founding pooled screening papers
2. **Platt et al. (2014)** — CRISPR–Cas9 knock-in mice for genome editing and cancer modelling — The Cas9-transgenic mouse enabling direct in vivo screens
3. **Chen et al. (2015)** — Genome-wide CRISPR screen in a mouse model of tumour growth and metastasis — Early in vivo screen
4. **Dixit et al. (2016); Adamson et al. (2016)** — Perturb-seq — Single-cell transcriptomic readout of pooled perturbations
5. **Jaitin et al. (2016)** — CRISPR pooled screening with single-cell RNA-seq — Parallel development of the same concept
6. **Anzalone et al. (2019)** — Prime editing — The editing modality the review identifies as the future of screening
7. **Santinha et al. (2023)** — Transcriptional linkage analysis with in vivo AAV-Perturb-seq — The authors' own methodological contribution

---

## Future Research Directions

- Improve delivery efficiency and tissue tropism so that in vivo library sizes approach genome scale
- Develop statistical frameworks that properly model bottleneck-induced drift, so that in vivo screens achieve reliable power with realistic animal numbers
- Extend beyond knockouts to base and prime editing, enabling screens of specific variants rather than gene loss
- Combine in vivo screening with spatial transcriptomics to determine where in a tissue a perturbation acts
- Apply in vivo screens systematically to disease models where the relevant phenotype requires an intact organism — neurodegeneration, immunity, regeneration

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
