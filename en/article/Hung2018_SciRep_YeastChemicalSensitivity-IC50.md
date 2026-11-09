---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# A Simple and Inexpensive Quantitative Technique for Determining Chemical Sensitivity in Saccharomyces cerevisiae

## Citation (NLM)
Hung CW, Martinez-Marquez JY, Javed FT, Duncan MC. A simple and inexpensive quantitative technique for determining chemical sensitivity in Saccharomyces cerevisiae. Sci Rep. 2018;8:11919. doi:10.1038/s41598-018-30305-z

**DOI:** [https://doi.org/10.1038/s41598-018-30305-z](https://doi.org/10.1038/s41598-018-30305-z)

---

## Summary

Chemical sensitivity (growth inhibition by a compound) is a classic phenotype for probing gene function, and yeast is an especially good platform for it. Most labs, however, rely on the "traditional plating assay" (spotting or replica pinning dilutions onto agar with a chemical and scoring colony presence, number or size), which is poorly quantitative: results depend on dilution and plating errors, colony size plateaus through nutrient depletion, each plate tests only one concentration, colonies need 2-4 days or more (chemicals may degrade), and chemical distribution in molten or top-spread agar varies. Quantitative alternatives need deep sequencing, microarrays, robots or plate readers with multimodal shaking. Hung et al. provide a roadmap for a 96-well liquid assay that yields half maximal inhibitory concentration (IC50) using a standard plate reader (or even an end-point spectrophotometer reading).

Key technical optimizations: continuous or intermittent shaking made cells clump and gave variable readings, so plates are grown without agitation. A low starting inoculum produced individual micro-colonies on the well bottom (variable), whereas a higher starting OD600 of 0.01 in 200 uL formed a uniform lawn and reproducible curves (lower volumes also caused clumping), working in both YPD and SD. Cells are diluted into 100 uL per well and chemicals added at 2x in 100 uL with even mixing; OD is read every 15-30 min for ~20-24 h. Dose-response curves are fit with a sigmoidal (Hill) equation in GraphPad Prism. Using growth rate during log phase excluded concentrations with little growth and obscured differences (e.g., ent3 ent5 chs6 and ent5-ABCB ent3 chs6 appeared similar), so the authors instead use the OD at the time wild-type untreated cells exit exponential phase, normalized to untreated OD. An end-point variant (plates grown in a regular incubator and read once, e.g., 18 h) gave IC50 values for wild type and art1 not significantly different from plate-reader values, allowing high throughput and teaching-lab use.

Applications: (1) Calcofluor white (CFW): chs6 cells are resistant because chitin synthase Chs3 is trapped at the TGN/endosomes by clathrin-dependent traffic; defects restore sensitivity. The liquid assay showed that deleting ENT3 alone reduced the CFW IC50 of chs6 cells ~2-fold (about 103 to 41 ug/mL by OD), suggesting a non-redundant role for Ent3 contrary to earlier plating results, and quantitatively ranked ENT5 point alleles (lipid-binding CR, clathrin-binding CB, adaptor-binding AB, ABCB): ent5-AB was mildest and ent5-CR was close to the null, and the liquid assay detected differences the plating assay missed (ent3 and ent5-AB). Liquid assays were more sensitive, plausibly because cells are bathed in the chemical rather than only surface cells being exposed on agar. (2) Canavanine (toxic arginine analog entering via the Can1 permease): art1 (alpha-arrestin) cells were about 3-fold more sensitive than wild type, visible in 24 h in liquid versus 5 days on plates, and normalizing to untreated growth compensates for art1's slower growth. (3) Myriocin and sertraline, used to distinguish AP-1 (apm1/apm2) trafficking: the liquid assay needed lower doses (1 uM myriocin, 6 uM sertraline completely inhibited wild type, whereas wild type grew on plates at those or higher levels), also revealed apm2 sensitivity to myriocin earlier, but failed to detect apm1 resistance to sertraline, which needed >=4 days on 20 uM plates, a limit of the short assay for small growth advantages. (4) Rapamycin-induced dimerization (tor1-1 background) to activate the spindle assembly checkpoint by anchoring Mps1-FRB to kinetochore proteins: Mtw1 (inner) strongly inhibited growth, Ask1 (outer) did not, and Dad2 (intermediate) gave ~5-fold higher sensitivity than Ask1, quantifying graded checkpoint activation. The authors note limitations (oxygen/nutrient depletion without shaking, starting cell number needs optimization for different uses).

Discussion. Advantages are cost, time and above all quantitation over plating and earlier quantitative approaches. The end-point format lets one plate reader serve many students, since absorbance readers without incubation or shaking suffice (even a cuvette spectrophotometer could be used), and it can be combined with 96-well viability (colony-forming unit) and propidium iodide cell-death assays. IC50 is more sensitive and accurate than growth rate at a single concentration, which can mask differences: for calcofluor white, the *ent3 chs6* difference appeared only at 50 ug/mL, at which the other mutants barely grew. Practical cautions: a uniform lawn needs a much higher starting cell density than other plate-reader methods, at least 200 uL per well (smaller volumes slosh and mound cells at the centre and edge), and gentle even mixing when chemical is added; without shaking oxygen or nutrients may become limiting, so pilot comparisons with agitated cultures are advised for chemicals or genotypes that may be incompatible, and short assays cannot capture small growth advantages (as with sertraline).

Methods and troubleshooting. Log-phase cells diluted to OD600 0.01 (in YPD, or SD for canavanine) are dispensed at 100 uL per well, chemicals diluted to 2x in media are added at 100 uL and mixed, and plates are read at 30 degC without shaking (OD600 every 30 min on a SpectraMax 340PC) or, for end-point reads, incubated for 16-20 h in a humid box (damp paper towels in a slightly ajar Styrofoam box) and read once, with optional gentle remixing under packing tape. OD need not be corrected to 1 cm path length so long as all wells are read at the same time point. The troubleshooting section addresses mounding (disable mixing, larger volume, less frequent reads), micro-colonies (starting OD too low; pilot with several cell densities), hollowed centers (add chemical in half volumes and mix six times), evaporation (humid chamber), and recommends a 10-step two-fold dilution series starting at twice the plating concentration to capture a sigmoidal curve. Further pitfalls: chemical precipitation, inactivation by media (ammonium sulfate in particular; monosodium glutamate can substitute as nitrogen source), need for aeration, competitive inhibitors in media (toxic amino acids), vehicle (DMSO, ethanol) toxicity, general stress responses, and genetic drift or suppressors (use fresh cells from frozen stocks, never previously treated cells). IC50 is computed either from log-phase growth rate (slope of a 4-parameter sigmoid fit) or, as used here, from OD at the time wild-type untreated cells exit exponential growth, normalized to untreated controls and fit with a four-parameter variable-slope dose-response curve in GraphPad Prism; an Excel alternative fits y = A ln(x) + B to the linear range and solves for y = 50%. Strains are listed in Table 3 (deletions made by standard PCR-based methods; CID strains from Aravamudhan et al.).

---

## Significance in Introduction Context

- Chemical genetics and chemical-genetic profiling: how growth inhibition phenotypes (IC50) connect genotype to gene function and pathways such as membrane traffic and cell-cycle checkpoints.
- Quantitative phenotyping and dose-response analysis in a model organism; contrasts qualitative plating with quantitative liquid growth assays.
- Practical for teaching labs: a low-cost yeast genetics method using ordinary equipment.

---

## Key References

1. **Parsons AB, et al. (2006)** — Exploring the mode-of-action of bioactive compounds by chemical-genetic profiling in yeast. Cell 126:611-625 — large-scale chemical-genetic profiling
2. **Giaever G, et al. (2004)** — Chemogenomic profiling: identifying the functional interactions of small molecules in yeast. PNAS 101:793-798 — quantitative pooled approach
3. **Hillenmeyer ME, et al. (2008)** — The chemical genomic portrait of yeast: uncovering a phenotype for all genes. Science 320:362-365
4. **Hung CW, Duncan MC (2016)** — Clathrin binding by the adaptor Ent5 promotes late stages of clathrin coat maturation. Mol Biol Cell 27:1143-1153 — source of the *ENT5* alleles
5. **Lin CH, MacGurn JA, Chu T, Stefan CJ, Emr SD (2008)** — Arrestin-related ubiquitin-ligase adaptors regulate endocytosis and protein turnover at the cell surface. Cell 135:714-725 — alpha-arrestins (Art1) and Can1
6. **Whitfield ST, et al. (2016)** — The alternate AP-1 adaptor subunit Apm2 interacts with the Mil1 regulatory protein and confers differential cargo sorting. Mol Biol Cell 27:588-598 — *APM1/APM2* myriocin and sertraline phenotypes
7. **Aravamudhan P, Goldfarb AA, Joglekar AP (2015)** — The kinetochore encodes a mechanical switch to disrupt spindle assembly checkpoint signalling. Nat Cell Biol 17:868-879 — rapamycin-induced Mps1 anchoring
8. **Rainey MM, Korostyshevsky D, Lee S, Perlstein EO (2010)** — The antidepressant sertraline targets intracellular vesiculogenic membranes in yeast. Genetics 185:1221-1233

---

## Future Research Directions

- Adapting the assay to other chemicals and mutant collections for large-scale chemical-genetic profiling, since four disparate assays suggest many chemicals will be amenable; optimizing starting cell concentration case by case.
- Pilot comparisons with agitated cultures for chemicals or genotypes incompatible with static growth, and longer or more sensitive readouts to detect small growth advantages (as with *apm1* sertraline resistance).
- Combining the assay with viability (colony forming units) and cell death (propidium iodide) assays in the 96-well format for deeper phenomics; use with chemical induced dimerization and in teaching labs, including high schools, using end-point reads.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
