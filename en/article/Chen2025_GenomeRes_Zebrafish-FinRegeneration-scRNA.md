---
tags: [genetics, class, article, en, 2025-2026]
date: 2026-09-06
type: class
---

# Common and specific gene regulatory programs in zebrafish caudal fin regeneration at single-cell resolution

## Citation (NLM)
Chen Y, Hou Y, Zeng Q, Wang I, Shang M, Shin K, et al. Common and specific gene regulatory programs in zebrafish caudal fin regeneration at single-cell resolution. Genome Res. 2025;35(1):1-17. doi:10.1101/gr.279372.124

**DOI:** [https://doi.org/10.1101/gr.279372.124](https://doi.org/10.1101/gr.279372.124)

---

## Summary

Zebrafish (*Danio rerio*) regenerate an amputated caudal fin completely. The process is well described cellularly: the wound closes by epidermal migration, differentiated cells at the proximal stump **dedifferentiate**, migrate, and proliferate (joined by a few resident progenitors), and then redifferentiate in a **lineage-restricted** manner — a bone cell makes bone again, it does not become a nerve. What has been missing is the regulatory logic: which enhancers open, in which cell types, at which stage, and how much of the program is shared across cell types versus specific to one.

Prior genomic work on regeneration used **bulk tissue** or focused on a single lineage, which averages away exactly the cell-type-specific signal of interest. Regeneration-responsive *cis*-elements — variously called **tissue regeneration enhancer elements (TREEs)** or **regeneration-responsive enhancers (RREs)** — were known from individual examples such as the enhancers upstream of *lepb* and *inhbaa*, which respond to injury in fin and heart. Transcription factors such as *fosl1a* and *vdra* were known to be required. But no map existed.

The authors applied **paired single-nucleus RNA-seq and single-nucleus ATAC-seq from the same nuclei** (10x Genomics multiome) to uninjured and regenerating fins across multiple stages. Measuring transcriptome and chromatin accessibility in the *same* cell removes the usual need to computationally align two separate datasets, and it is what makes the enhancer-to-gene inferences credible.

The central finding is a **decoupling of chromatin and transcriptional dynamics**. Chromatin accessibility shows a sharp, coordinated **increase at 1 day post-amputation (dpa)** at regions associated with regenerative and developmental processes, followed by **gradual closing** across all major cell types at later stages — essentially one wave. Transcription behaves differently: several successive **waves of up- and downregulation**. So chromatin opening is not simply a readout of transcription; the genome first becomes broadly permissive, and then transcriptional programs are executed within that window and progressively locked down again.

From this map the authors identified **cell-type-specific and position-specific regeneration-responsive enhancers** and **validated them in vivo** — an important step, since accessibility alone does not prove function. "Position-specific" is notable: enhancers differ along the proximodistal axis, meaning the regenerating tissue knows not only what cell type it is but where it is. Finally they constructed **regulatory networks by cell type and stage**, providing a community resource linking transcription factors, enhancers, and target genes throughout regeneration.

---

## Significance in Introduction Context

- Shows what **gene regulation** looks like when measured genome-wide in a real developmental process: enhancers, chromatin accessibility, transcription factors, and their temporal ordering
- The **chromatin-opens-once, transcription-happens-in-waves** result is a memorable, concrete demonstration that accessibility and expression are distinct regulatory layers
- Explains why **single-cell** resolution is not a fashion but a necessity — bulk measurement of a tissue containing many cell types actively averages away the answer
- Reinforces the zebrafish model-organism lecture with its defining biological advantage: regeneration that mammals cannot perform
- **Lineage-restricted dedifferentiation** is a clean conceptual contrast to pluripotency and reprogramming, useful when discussing cell identity

---

## Key References

1. **Gemberling et al. (2013)** — Zebrafish as a model for tissue regeneration — Establishes the system's advantages
2. **Knopf et al. (2011); Tu and Johnson (2011)** — Lineage restriction during fin regeneration — Demonstrated that regenerating cells retain their identity
3. **Kang et al. (2016)** — Modulation of tissue repair by regeneration enhancer elements — Identified the *lepb* enhancer; origin of the TREE concept
4. **Goldman and Poss (2020)** — Gene regulatory programs of tissue regeneration — Review framing the genetic/epigenetic interplay
5. **Thompson et al. (2020); Wang et al. (2020)** — Regeneration-responsive enhancers in zebrafish — Prior bulk-level enhancer characterization
6. **Lee et al. (2020); Chen et al. (2021)** — *fosl1a* and *vdra* in regeneration — Transcription factors whose roles this map contextualizes
7. **Hou et al. (2020); Jiang et al. (2021); Tang et al. (2022)** — Single-cell transcriptomics of fin regeneration — Transcriptome-only predecessors that this study extends with chromatin

---

## Future Research Directions

- Test whether the 1 dpa accessibility wave is *required* for regeneration or merely permissive — block chromatin opening pharmacologically or genetically and ask whether the transcriptional waves still occur
- Delete validated regeneration-responsive enhancers individually and in combination to determine which are necessary rather than merely responsive
- Ask why mammals fail: are orthologous enhancer sequences present but not activated, or absent altogether?
- Explore the positional information encoded in position-specific enhancers — what upstream signal tells a cell its proximodistal address?
- Use the regulatory networks to nominate transcription factor combinations that could induce a regenerative response in a non-regenerating system

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
