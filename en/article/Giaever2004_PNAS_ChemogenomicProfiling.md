---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# Chemogenomic Profiling: Identifying the Functional Interactions of Small Molecules in Yeast

## Citation (NLM)
Giaever G, Flaherty P, Kumm J, Proctor M, Nislow C, Jaramillo DF, Chu AM, Jordan MI, Arkin AP, Davis RW. Chemogenomic profiling: identifying the functional interactions of small molecules in yeast. Proc Natl Acad Sci U S A. 2004;101(3):793-798. doi:10.1073/pnas.0307490100

**DOI:** [https://doi.org/10.1073/pnas.0307490100](https://doi.org/10.1073/pnas.0307490100)

---

## Summary

This paper scales up haploinsufficiency profiling (HIP), a chemical-genomic assay in *Saccharomyces cerevisiae*, from the 233-strain proof of concept of Giaever et al. 1999 to the complete collection of roughly 6,000 molecularly bar-coded heterozygous deletion strains (5,918 strains were analyzed in the profiles shown). The premise is that halving the dosage of a gene (two copies to one) sensitizes the strain to a compound that inhibits that gene's product, so the most drug-sensitive heterozygotes often carry a deletion in the drug target. All heterozygous strains are grown together in one culture with a compound; after about 20 generations (cells robotically re-diluted every five generations in 48-well plates) the 20-mer bar codes are PCR-amplified from genomic DNA and hybridized to a high-density oligonucleotide array carrying the tag complements. Because each strain has four tags, a mixture factor analysis model combines them into one abundance estimate. A fitness defect (FD) score, based on the log-likelihood of the observed abundance under a Gaussian fitted to 36 control arrays (21 for the homozygous pool), ranks strains; those at least 3 SD above the control mean are called significantly sensitive.

The authors report 80 genome-wide experiments covering 10 compounds at several concentrations. The anticancer agent methotrexate (250 uM) identified the known target DFR1 plus the upstream folate-synthesis genes FOL1 and FOL2 and the transport-related YBT1 and YOR072w, all in eight of nine replicates. 5-Fluorouracil did not score thymidylate synthase or DNA-processing genes; instead the 22 sensitive genes were enriched for rRNA processing and ribosome biogenesis (P about 4 x 10^-9), suggesting that RNA misincorporation is the main growth-inhibitory mechanism in yeast. Cisplatin, which has no protein target, gave no consistent heterozygous hits, but screening the homozygous pool (125 uM) revealed DNA-repair genes, consistent with DNA as the primary target. For the statins atorvastatin and lovastatin, only HMG1 (which supplies about 83% of HMG-CoA reductase activity) was sensitive in the HIP assay, with HMG2 haploinsufficiency detectable only at the highest atorvastatin dose (250 uM). PDR5 and ERG13 were also sensitive.

For antifungals, miconazole identified ERG11 but the profile was dominated by compound-availability genes (PDR5, SET6), and at the highest dose (0.2 uM, about 70% inhibition) target specificity was lost, a general trend. Fluconazole scored ERG11 at only one concentration. Fenpropimorph at 2.3 uM scored ERG24 but not ERG2, supporting ERG24 as the principal growth-limiting target. Notably, alverine citrate (an antispasmodic) and dyclonine (an anesthetic) gave HIP profiles with ERG24 as the top hit, similar to fenpropimorph. Overexpression of yeast ERG24 or the human homolog LBR conferred resistance to alverine citrate, and the three compounds share a common chemical core structure, suggesting that HIP profiles can inform structure-activity relationships. The authors conclude that the assay finds two classes of genes: dosage-limiting direct interactors and genes affecting bioavailability (transport, efflux, metabolism), and that it is useful for prioritizing compounds, and for identifying on- and off-target effects in vivo. Extraction was limited to the first 50,000 characters, but this paper (about 38,000 characters) appears to have been captured nearly in full; the supporting tables were not included.

---

## Significance in Introduction Context

- Shows gene dosage (heterozygosity, haploinsufficiency) used as a quantitative genetic tool: a concept from dominance and dosage in introductory genetics becomes a drug-target discovery method.
- Illustrates systematic use of a genome-wide deletion collection with DNA bar codes, a prime example of "reverse genetics at genome scale" and of pooled competitive-growth screens.
- Demonstrates that genetic information (which mutant is sensitive) can reveal a drug's mechanism, including indirect effects such as transporters and pathway rate-limiting steps.
- Highlights the connection between pharmacogenomics, variable drug response and genotype.

---

## Key References

1. **Giaever G et al. (1999)** — Genomic profiling of drug sensitivities via induced haploinsufficiency (Nat Genet 21:278-283) — the original HIP concept and 233-strain pilot. [https://doi.org/10.1038/6791](https://doi.org/10.1038/6791)
2. **Shoemaker DD et al. (1996)** — Quantitative phenotypic analysis of yeast deletion mutants using a highly parallel molecular bar-coding strategy (Nat Genet 14:450-456) — the bar-code pooled-growth method.
3. **Winzeler EA et al. (1999)** — Functional characterization of the *S. cerevisiae* genome by gene deletion and parallel analysis (Science 285:901-906) — the deletion collection.
4. **Rine J et al. (1983)** — Targeted selection of recombinant clones through gene dosage effects (PNAS 80:6750-6754) — gene dosage and drug resistance.
5. **Dolinski K et al.** — Saccharomyces Genome Database / GO Term Finder — used for the 5-FU enrichment analysis.

---

## Future Research Directions

- Pair HIP with homozygous deletion profiling (HOP) to distinguish targets from buffering pathways, as later done at larger scale.
- Use the profile-similarity idea to cluster compounds by mode of action across thousands of molecules and to compare with genetic interaction networks.
- Extend to pathogenic fungi and to organisms lacking heterozygous diploid genetics, and to human cell CRISPR screens.
- Study the common drug-availability genes (e.g., PDR5, SET6) as determinants of multidrug resistance.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
