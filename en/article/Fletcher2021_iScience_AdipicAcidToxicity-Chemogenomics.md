---
tags: [genetics, class, article, en]
date: 2026-11-09
type: class
---

# A Yeast Chemogenomic Screen Identifies Pathways that Modulate Adipic Acid Toxicity

## Citation (NLM)
Fletcher E, Mercurio K, Walden EA, Baetz K. A yeast chemogenomic screen identifies pathways that modulate adipic acid toxicity. iScience. 2021;24(4):102327. doi:10.1016/j.isci.2021.102327

**DOI:** [https://doi.org/10.1016/j.isci.2021.102327](https://doi.org/10.1016/j.isci.2021.102327)

---

## Summary

Adipic acid is the key precursor of nylon-6,6 and is currently made from benzene by a chemical process; production by engineered yeast fermentation would be renewable, but adipic acid is toxic to yeast and limits titers. Its mechanism of toxicity was unknown. The likely general mechanism for organic acids is that, below the pKa (adipic acid pKa1 4.41, pKa2 5.41), the protonated acid diffuses into the cell and dissociates in the neutral cytosol, and the anion accumulates unless it is exported by pumps. The authors used a chemogenomic screen to find specific genetic determinants of tolerance.

They pinned the haploid *S. cerevisiae* deletion mutant array (DMA; about 4,200 BY4741-derived mutants, arrayed in duplicate at 1,536 colonies per plate, screen done in triplicate) onto YPD agar with 80 mM adipic acid (pH 4.0), compared with pH-4.0-buffered solvent controls to separate the acid effect from the low-pH effect, and scored colony sizes with SGAtools after 48 h (cutoff of average growth score beyond -0.3 or +0.3). The screen found 77 sensitive mutants and one mutant with improved growth. Validation by liquid growth (PRECOG scores; a score of 2 or more meaning more than 50% growth inhibition) confirmed 43 sensitive mutants and a single suppressor. There was no overlap with the 129 genes from a previous screen for low-pH toxicity, so the hits are specific to adipic acid, and the screen picked up *pdr12*, consistent with the known benefit of PDR12 overexpression. GO enrichment highlighted ergosterol biosynthesis (p = 1.1 x 10^-5) and, most strongly, protein transport and trafficking (p = 3.8 x 10^-11), including ESCRT-I, -II and -III components, Bro1, the GARP complex and the COG complex. ESCRT mutants and *erg2*, *erg3*, *erg4* deletions failed to grow in 120 mM adipic acid.

The only suppressor was *KGD1*, encoding alpha-ketoglutarate dehydrogenase of the TCA cycle: *kgd1*-deleted cells grew better than wild type in adipic acid and in catechol (a toxic precursor in the adipic acid biosynthesis pathway; 12 mM), but not in cis,cis-muconic acid. Other TCA mutants behaved like wild type except *sdh1*, which was hypersensitive, so the effect is specific to *KGD1* rather than the TCA cycle as a whole. Among nine non-essential ergosterol-pathway deletions, the last steps (*erg2*, *erg3*, *erg4*, mildly *erg5*) were required. Ergosterol enzyme levels were not induced by adipic acid, but Erg24-GFP and Erg4-GFP (and Hmg1-GFP, per Fig. 4) changed localisation, with Erg24-GFP and Erg4-GFP moving from the ER to the cytosol and puncta, with Erg4-GFP co-localizing with fragmented mitochondria (Cit1-RFP). Pdr12-GFP, by contrast, was rapidly induced (about 12-fold at 30 min) and went to the plasma membrane, independently of *erg2*/*erg4*, and the *erg4* *pdr12* double mutant showed synergistic sensitivity, so ergosterol and Pdr12 efflux act in non-overlapping ways.

Finally, adipic acid disrupted the Membrane Compartment of Can1 (MCC): filipin-stained ergosterol patches were lost in wild-type cells, and Can1-GFP left the plasma membrane for vacuoles with free GFP appearing, indicating endocytosis; FM4-64 uptake confirmed induced endocytosis. The authors propose that ergosterol and trafficking are needed to maintain membrane organization and to remove or regulate transporters under adipic acid stress, and that *KGD1* and these pathways are candidates for engineering tolerant production strains.

Discussion. The authors discuss three questions. (1) Why does *KGD1* deletion help? It is the first report of a TCA gene raising tolerance to adipic acid and catechol, yet the effect is specific to *KGD1* (not *KGD2*, the other subunit of the alpha-ketoglutarate dehydrogenase complex, nor other TCA genes). One possibility is that loss of Kgd1 redirects flux toward acetyl-CoA and raises acetate, which is known to activate Pdr12; priming with acetic acid should be tested, and redundancy or a non-TCA function of Kgd1 are alternatives. Intracellular acetate was not measured. (2) How does ergosterol act? The last steps (Erg2, Erg3, Erg4, Erg5) are promiscuous, so mutants accumulate mixtures of non-ergosterol sterols (e.g. fecosterol, episterol) whose bent structure changes bilayer packing; membrane organisation may limit diffusion of undissociated adipic acid into the cell, and sterol composition may affect membrane proteins (ergosterol is reported to be needed for Pdr5 and Pdr12 function). The synergistic *erg4* *pdr12* phenotype shows that ergosterol has roles beyond Pdr12 regulation, including organising the MCC, a site of endocytosis. (3) Why is trafficking essential? Nearly half of the genes in the chemogenomic profile concern protein trafficking and vacuolar transport, mostly ESCRT components. The authors suggest adipic acid triggers endocytosis (Can1 internalised and degraded, FM4-64 reaching the vacuole in 15 min versus up to 120 min in untreated cells) as a survival mechanism to remove non-specific transporters that might import adipic acid (analogous to Jen1 and Acy1 for other organic acids), so ESCRT-mediated vacuolar degradation must be intact.

Conclusions and limitations. Adipic acid toxicity involves ergosterol-dependent plasma membrane and MCC integrity, endocytosis and trafficking, while *KGD1* deletion is a candidate engineering target (including for the toxic precursor catechol). The authors state two limitations: whether overexpressing or otherwise modulating the ergosterol pathway improves growth in adipic acid remains untested, and all work was done in the laboratory S288c background, so transfer to industrial strains is unproven. Methods (supplement): liquid validation in a BioScreen C at 120 mM adipic acid for 72 h with PRECOG doubling-time ratios (>2 sensitive, <0.8 tolerant), GO analysis with FunSpec (p < 0.01 cutoff), GFP-tagged strains from the yeast GFP collection, quantitative western blots (TCA extraction, anti-GFP), and filipin, CMAC and FM4-64 staining with fluorescence microscopy.

---

## Significance in Introduction Context

- A clear example of a forward-style chemogenomic screen using the deletion collection, with controls to separate the specific compound effect from pH.
- Shows that deletion can improve fitness (a suppressor/hypertolerant allele), that genes act in parallel (ergosterol and Pdr12 are non-overlapping), and the value of GFP tagging libraries for follow-up.
- Links classical genetics to metabolic engineering and industrial biotechnology.

---

## Key References

1. **Wagih O et al. (2013)** — SGAtools: one-stop analysis and visualization of array-based genetic interaction screens, Nucleic Acids Res 41:W591-W596 — colony-size scoring used here
2. **Fernandez-Ricaud L et al. (2016)** — PRECOG: a tool for automated extraction and visualization of fitness components in microbial growth phenomics, BMC Bioinformatics 17:249 — growth-based PRECOG scores
3. **Pereira R et al. (2019)** — Adaptive laboratory evolution of tolerance to dicarboxylic acids in *Saccharomyces cerevisiae* — prior work showing PDR12 and QDR3 overexpression improves adipic acid tolerance
4. **Shin JJ et al. (2016)** — Systematic identification of genes involved in metabolic acid stress resistance in yeast and their potential as cancer targets, Dis Model Mech 9:1039-1049 — low-pH chemogenomic dataset used for comparison
5. **Grossmann G et al. (2008)** — Plasma membrane microdomains regulate turnover of transport proteins in yeast, J Cell Biol — MCC, Can1 and ergosterol
6. **Abe F, Hiraki T (2009)** — Mechanistic role of ergosterol in membrane rigidity and cycloheximide resistance in *Saccharomyces cerevisiae*, Biochim Biophys Acta 1788:743-752 — sterol accumulation in late-pathway *erg* mutants
7. **Piper P et al. (1998)** — The pdr12 ABC transporter is required for the development of weak organic acid resistance in yeast, EMBO J 17:4257-4265 — Pdr12 as the weak-acid anion efflux pump
8. **Jarboe LR, Royce LA, Liu P (2013)** — Understanding biocatalyst inhibition by carboxylic acids, Front Microbiol 4:272 — general mechanism of organic acid toxicity

---

## Future Research Directions

- Testing whether *KGD1* deletion or ergosterol/ESCRT engineering raises adipic acid titers in production strains, including industrial backgrounds beyond S288c.
- Testing whether overexpressing or otherwise modulating the ergosterol pathway improves growth in adipic acid.
- Measuring intracellular acetate in *kgd1* cells and testing whether acetic acid priming increases tolerance (possibly via Pdr12), and why only *KGD1* among TCA genes has this effect.
- Identifying the non-specific transporters that may import adipic acid and how their endocytic degradation is regulated; defining how adipic acid disrupts the MCC.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
