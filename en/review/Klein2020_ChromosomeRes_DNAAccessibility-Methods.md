---
tags: [genetics, class, review, en]
date: 2026-07-12
type: class
---

# Genomic methods in profiling DNA accessibility and factor localization

## Citation (NLM)
Klein DC, Hainer SJ. Genomic methods in profiling DNA accessibility and factor localization. Chromosome Res. 2020;28(1):69-85. doi:10.1007/s10577-019-09619-9

**DOI:** [https://doi.org/10.1007/s10577-019-09619-9](https://doi.org/10.1007/s10577-019-09619-9)

---

## Summary

Eukaryotic genomes are packaged into chromatin, a repeating array of nucleosomes in which 147 bp of DNA wraps around a histone octamer. The accessibility of chromatin — whether a given genomic region is "open" or "closed" — is a primary determinant of gene regulatory activity. Accessible regions coincide with enhancers, promoters, and insulators, while nucleosome-occluded regions are generally transcriptionally inert. This review by Klein and Hainer systematically catalogs the principal next-generation sequencing methods used to measure either DNA accessibility or the genomic localization of chromatin-bound proteins, providing comparative protocols, advantages, and limitations for each.

For measuring chromatin accessibility, the review covers four major techniques. DNase-seq exploits the preferential cleavage of unprotected DNA by DNase I, producing DNase I hypersensitive sites (DHSs) that serve as gold-standard proxies for active regulatory regions; the ENCODE project used this approach to identify over 2.9 million DHSs across human tissues. FAIRE-seq relies on formaldehyde crosslinking of histone-bound DNA and phenol-chloroform extraction to recover nucleosome-free DNA, though its lower signal-to-noise ratio has limited its adoption. MNase-seq uses micrococcal nuclease to digest unprotected linker DNA, leaving behind nucleosome-protected fragments that precisely map nucleosome positioning and occupancy; it can also detect smaller transcription factor (TF) footprints at sub-nucleosomal resolution. ATAC-seq uses a hyperactive Tn5 transposase that inserts sequencing adapters preferentially into accessible chromatin, offering a fast two-step protocol that has been successfully miniaturized to single cells.

For profiling chromatin-bound proteins, three major approaches are reviewed. ChIP-seq is the foundational method, coupling formaldehyde crosslinking, chromatin shearing, antibody-based immunoprecipitation, and deep sequencing to map the genome-wide binding of any protein with a quality antibody; it remains the most widely used technique with over 23,000 PubMed entries. DamID fuses E. coli DNA adenine methyltransferase (Dam) to a protein of interest, marking nearby GATC sequences with adenine methylation that is detected by restriction digestion and sequencing; it avoids the need for a high-quality antibody but suffers from limited resolution (~5 kb) and requires genetic manipulation. CUT&RUN, developed in 2017, uses a recombinant Protein A-MNase fusion directed by a primary antibody to cleave DNA specifically at factor binding sites within intact nuclei, yielding near-base-pair resolution with very low background and requiring as few as 1,000 cells.

The review frames these methods in the context of an evolving need to profile heterogeneous cell populations and precious biological samples. Each technique represents a trade-off among resolution, cell-input requirements, antibody dependence, and propensity for technical artifacts. A comparative table summarizes typical cell inputs, sequencing depth requirements, and key advantages and disadvantages. Advances such as scDNase-seq, single-cell ATAC-seq, and single-cell CUT&RUN have pushed the frontier of chromatin profiling toward individual cells, enabling studies of cell-type-specific regulatory states in complex tissues, patient biopsies, and early embryos previously inaccessible by conventional methods.

Together, these complementary methods have produced an unprecedented picture of chromatin architecture and have enabled mechanistic dissection of gene regulatory networks. The authors conclude that future progress will require integrating accessibility and factor-localization data to understand how transcriptional and cellular networks cooperate to shape the functional genome.

---

## Significance in Introduction Context

- Chromatin accessibility is the gatekeeper of gene regulation: only open chromatin regions permit transcription factor binding, making accessibility profiling the first step in reverse-genetic dissection of regulatory elements such as enhancers and promoters.
- The suite of methods reviewed (DNase-seq, FAIRE-seq, MNase-seq, ATAC-seq, ChIP-seq, DamID, CUT&RUN) provides the experimental foundation for genome-wide reverse genetics — allowing researchers to infer which genomic regions are functionally active in any cell type without prior knowledge of specific factors.
- Single-cell adaptations of these techniques are critical for reverse genetics in complex tissues, where cell-type heterogeneity would otherwise obscure regulatory signals; this has enabled regulatory profiling of rare progenitor populations and early embryos.
- ChIP-seq and CUT&RUN are indispensable tools for validating the binding of gene-editing-targeted factors (e.g., CRISPR dCas9 fusions) and verifying the chromatin consequences of reverse-genetic perturbations.
- The ENCODE project's systematic DNase-seq mapping of ~3 million DHSs across cell types provides the regulatory annotation framework within which loss-of-function and gain-of-function experiments in reverse genetics are interpreted.

---

## Key References

1. **Crawford et al. (2006)** — https://doi.org/10.1038/nmeth1183 — First genome-wide DNase-seq, establishing DHSs as the standard for regulatory element identification.
2. **Buenrostro et al. (2013)** — https://doi.org/10.1038/nmeth.2688 — Original ATAC-seq paper introducing Tn5 transposase-based accessibility profiling.
3. **Skene & Henikoff (2017)** — https://doi.org/10.7554/eLife.21856 — Development of CUT&RUN as a high-resolution, low-input alternative to ChIP-seq.
4. **Thurman et al. (2012)** — https://doi.org/10.1038/nature11232 — ENCODE DNase-seq atlas identifying 2.9 million DHSs and 45 million TF occupancy events in the human genome.
5. **Gilmour & Lis (1984)** — https://doi.org/10.1073/pnas.81.14.4275 — Original ChIP method using radioactive labeling to detect protein-DNA interactions at single loci.
6. **van Steensel & Henikoff (2000)** — https://doi.org/10.1038/35002528 — Development of DamID for genome-wide protein localization without antibodies.
7. **Hainer et al. (2019)** — https://doi.org/10.1016/j.cell.2019.04.027 — First single-cell CUT&RUN, profiling pluripotency factors in individual mouse embryonic stem cells and early blastocysts.

---

## Future Research Directions

- Integrating accessibility data (ATAC-seq) with factor-localization data (ChIP-seq/CUT&RUN) in the same single cell will be essential to understand causal relationships between chromatin state and transcription factor binding during cell fate transitions.
- Developing antibody-independent factor-localization methods with higher resolution than DamID (e.g., proximity-labeling approaches like CUT&RUN.Split or APEX-based ChIP) will enable profiling of uncharacterized or low-abundance regulators.
- Applying these methods to in vivo tissues and patient-derived biopsies — rather than cultured cell lines — will reveal disease-associated regulatory changes in their native chromatin context.
- Improving computational methods for integrating multi-modal chromatin datasets (accessibility + TF binding + histone modification + 3D genome organization) will be necessary to build mechanistic models of gene regulatory networks.
- Extension of CUT&Tag and related transposase-based methods to simultaneous profiling of multiple histone marks in single cells will allow high-throughput mapping of cell-type-specific epigenetic states in complex tissues.

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
