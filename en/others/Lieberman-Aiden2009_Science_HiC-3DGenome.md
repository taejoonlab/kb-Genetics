---
tags: [genetics, class, others, en]
date: 2026-07-12
type: class
---

# Comprehensive Mapping of Long-Range Interactions Reveals Folding Principles of the Human Genome

## Citation (NLM)
Lieberman-Aiden E, van Berkum NL, Williams L, Imakaev M, Ragoczy T, Telling A, Amit I, Lajoie BR, Sabo PJ, Dorschner MO, Sandstrom R, Bernstein B, Bender MA, Groudine M, Gnirke A, Stamatoyannopoulos J, Mirny LA, Lander ES, Dekker J. Comprehensive mapping of long-range interactions reveals folding principles of the human genome. Science. 2009;326(5950):289-293. doi:10.1126/science.1181369

**DOI:** [https://doi.org/10.1126/science.1181369](https://doi.org/10.1126/science.1181369)

---

## Summary

This landmark paper introduces Hi-C, a genome-wide method that probes three-dimensional chromatin architecture by coupling proximity-based ligation with massively parallel sequencing. The method works by crosslinking cells with formaldehyde, digesting DNA with a restriction enzyme, filling the resulting 5' overhangs with a biotinylated nucleotide, ligating crosslinked fragments under dilute conditions, shearing the resulting DNA, capturing biotinylated junctions with streptavidin beads, and sequencing the paired-end library. Applied to a human lymphoblastoid cell line at 1-Mb resolution, Hi-C generated 6.7 million long-range contacts and produced the first genome-wide contact map of the human genome.

The Hi-C data confirmed previously hypothesized chromosome territories: intrachromosomal contact probability decreases monotonically with genomic distance, always exceeding the baseline of interchromosomal interactions. Small, gene-rich chromosomes (16, 17, 19, 20, 21, 22) preferentially interact with one another, consistent with their known clustering near the nuclear center. In contrast, gene-poor chromosome 18, despite its small size, avoids this cluster and remains peripheral — matching earlier fluorescence in situ hybridization (FISH) results.

A key discovery was the identification of two genome-wide spatial compartments, labeled A and B, revealed by a plaid pattern in the normalized Hi-C contact matrix. Principal component analysis assigned each 1-Mb locus to one compartment. Compartment A correlates strongly with gene density, higher transcription, DNaseI-accessible chromatin, and activating histone marks (H3K36me3). Compartment B is denser, exhibits higher interaction frequencies at a given distance, and corresponds to closed, repressed chromatin. 3D-FISH experiments confirmed that loci in the same compartment are spatially closer than equidistant loci in opposite compartments, validating the compartment model.

Within compartments, the paper examined the scaling of contact probability with genomic distance. The observed power-law scaling of s^-1 between 500 kb and 7 Mb is inconsistent with an equilibrium globule model (which predicts s^-3/2) but matches a fractal globule — a non-equilibrium, knot-free polymer conformation theorized by Grosberg et al. In a fractal globule, regions that are contiguous along the linear sequence remain contiguous in 3D space, forming monochromatic spatial sectors. Monte Carlo simulations of fractal and equilibrium globules confirmed these distinct scaling behaviors. The fractal globule model is attractive because it lacks knots and would allow efficient unfolding and refolding during gene activation and repression.

Together, these findings reveal a hierarchical genome architecture: at the largest scale, chromosomes occupy territories; within territories, chromosomes alternate between two spatial compartments corresponding to open and closed chromatin; and at the megabase scale, chromatin is organized as fractal globules. The Hi-C methodology established a new paradigm for studying 3D genome architecture, directly enabling subsequent discoveries of TADs, chromatin loops, and other structural features.

---

## Significance in Introduction Context

- Hi-C was the first method capable of unbiased, genome-wide mapping of chromatin interactions, overcoming the targeted-locus limitations of 3C, 4C, and 5C technologies
- The identification of two genome-wide spatial compartments (A/B) provided molecular evidence for the long-observed cytological distinction between euchromatin and heterochromatin
- The fractal globule model offered a physically motivated explanation for how ~2 meters of DNA can be efficiently packed in the nucleus while remaining accessible for transcription and replication
- The confirmation of chromosome territories at genome-wide scale connected prior microscopy observations to biochemical contact data
- This paper established Hi-C as a foundational tool in the 3D genomics field, directly leading to the discovery of topologically associating domains (TADs) and cohesin/CTCF-mediated loop extrusion

---

## Key References

1. **Dekker et al. (2002)** — https://doi.org/10.1126/science.1067799 — Original 3C (chromosome conformation capture) method that established proximity ligation for studying chromatin interactions
2. **Cremer & Cremer (2001)** — https://doi.org/10.1038/35066075 — Comprehensive review of chromosome territories and nuclear architecture established by microscopy
3. **Grosberg et al. (1988)** — J. Phys. France 49:2095 — Theoretical basis for the fractal globule polymer model applied to chromatin packing
4. **Zhao et al. (2006)** — https://doi.org/10.1038/ng1966 — 4C method for circular chromosome conformation capture; predecessor to Hi-C
5. **Dostie et al. (2006)** — https://doi.org/10.1101/gr.5571506 — 5C method for chromosome conformation capture carbon copy; enabled multiplexed ligation-mediated amplification
6. **Mikkelsen et al. (2007)** — https://doi.org/10.1038/nature06008 — Genome-wide chromatin state maps using histone modifications, providing epigenomic context for Hi-C compartments
7. **Dixon et al. (2012)** — https://doi.org/10.1038/nature11082 — Discovery of topologically associating domains (TADs), directly building on the Hi-C methodology introduced here

---

## Future Research Directions

- Increasing Hi-C resolution (now achieved in later in situ Hi-C protocols at 1-kb resolution) to map individual enhancer-promoter loops and insulator elements genome-wide
- Determining the molecular mechanisms that establish and maintain the A/B compartment boundary, including the roles of cohesin, CTCF, and phase separation
- Extending Hi-C to single-cell resolution to understand cell-to-cell variability in 3D genome organization
- Testing the functional consequences of compartment switching — whether forced repositioning of genomic regions between A and B compartments alters gene expression
- Combining Hi-C contact maps with polymer physics simulations to create predictive models of how sequence changes (mutations, SVs) alter 3D genome structure

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
