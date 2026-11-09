---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# Growth Dynamics of 3,909 Escherichia coli Single-Gene Knockouts in Rich and Minimal Media

## Citation (NLM)
Lao Z, Ying BW. Growth dynamics of 3,909 Escherichia coli single-gene knockouts in rich and minimal media. Sci Data. 2026;13:717. doi:10.1038/s41597-026-07075-9

**DOI:** [https://doi.org/10.1038/s41597-026-07075-9](https://doi.org/10.1038/s41597-026-07075-9)

---

## Summary

This Scientific Data Data Descriptor releases a standardised time-series resource: growth curves for 3,909 single-gene knockout *Escherichia coli* strains of the Keio collection (derived from wild-type BW25113, obtained from the National BioResource Project, Japan) in rich (LB) and minimal (M63 with 22 mM glucose) medium. The motivation is that although many genome-scale strain collections exist, complete, standardised, time-resolved growth trajectories for them have not been broadly available; most work reduces a growth curve to a single growth rate, even though growth rate, carrying capacity and lag are distinct and trade off, and capture different eco-evolutionary properties.

Strains were arrayed in 96-well format (>40 plates), frozen as glycerol stocks, and inoculated into fresh 200 uL medium by a "touch-and-dip" method that avoids repeated freeze-thaw. Growth was recorded in a BioTek EPOCH2 plate reader at 37 degrees C with shaking (567 cpm) as OD600 every 15 min for 24-48 h. Three independent plates per stock plate and medium gave biological triplicates, so the dataset comprises 3,909 strains x 2 media x 3 replicates = 23,454 trajectories (11,727 per medium). Processing subtracts a plate-specific optical background (the mean of the 96 time-zero readings). Two parameters are derived without smoothing: carrying capacity K (the mean of five consecutive OD600 readings centred on the maximum) and maximum growth rate r (the mean of three consecutive log-slopes around the steepest one), using a modified Python program from earlier work.

Data (figshare, doi 10.6084/m9.figshare.28342043) are Excel sheets: growth curves for LB and M63, annotation linking each curve to gene ID, name and gene category, and a parameter table with validation flags (0 validated; 1 possible incomplete growth phase biasing K; 2 possible improper slope selection biasing r; 3 replicate outlier beyond mean +/- 1 SD). Genes fall into 22 functional categories derived from an E. coli K-12 annotation snapshot, the largest being enzyme (931 genes), unknown function (459), predicted enzyme (383), transporter (326), predicted transporter (251) and regulator (234). Technical validation uses the coefficient of variation of K and r across triplicates and plate blanks; K and r are generally higher in LB than in M63. Usage notes warn that OD600 reflects light scattering as well as biomass, so mutants with altered morphology (filamentation, aggregation) may be misrepresented, and that minimal-medium curves may not capture full growth phases within the window. The data are positioned for gene-environment interaction analysis, benchmarking time-series preprocessing and growth-parameter extraction (e.g. logistic or Gompertz fits), and machine-learning models predicting dynamic phenotypes from gene function. The extract covers essentially the full text, with the final figure legends and references truncated or absent.

---

## Significance in Introduction Context

- A concrete example of reverse genetics at scale: a near-complete set of non-essential single-gene deletions phenotyped quantitatively, linking genotype to growth.
- Introduces the point that a phenotype such as "growth" is multidimensional (growth rate r, carrying capacity K, lag) and environment dependent: the same gene can matter in minimal but not rich medium (gene-environment interaction and conditional essentiality).
- Demonstrates data-descriptor practice: replicates, background correction, quality flags and open deposition so others can reuse or re-analyse the data.

---

## Key References

1. **Baba T et al. (2006)** — construction of the Keio single-gene knockout collection (ref. 14 in the paper) — the strain resource underlying the dataset (DOI not verified from the text)
2. **Lao Z, Ying BW — figshare dataset (2025)** — growth curves, parameters and annotations, [doi:10.6084/m9.figshare.28342043](https://doi.org/10.6084/m9.figshare.28342043) — the deposited data described by this paper
3. **Earlier Ying-lab growth-assay studies (refs 2, 20, 26 in the paper)** — standardised microplate protocol and the Python growth-parameter program reused here (citations not verified)
4. **Related Tn-seq fitness resources** — e.g. [[en/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]] — pooled-library fitness as the complementary approach to arrayed knockout phenotyping
5. **Genome-scale E. coli gene-essentiality and fitness surveys** — compared qualitatively with Keio growth phenotypes (cited in the paper as refs 17-18, 22-23; DOIs not verified)

---

## Future Research Directions

- Alternative parameter extraction (logistic or Gompertz fits) and time-series methods applied to the released trajectories.
- Machine-learning prediction of dynamic growth phenotypes from gene function, annotation or metabolic-network features.
- Extending the same pipeline to more environments, to pooled-library fitness comparisons, and to orthogonal readouts (cell counts, morphology) where OD600 is unreliable.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
