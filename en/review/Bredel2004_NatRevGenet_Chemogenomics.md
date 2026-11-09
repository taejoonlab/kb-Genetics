---
tags: [genetics, class, review, en]
date: 2026-11-09
type: class
---

# Chemogenomics: An Emerging Strategy for Rapid Target and Drug Discovery

## Citation (NLM)
Bredel M, Jacoby E. Chemogenomics: an emerging strategy for rapid target and drug discovery. Nat Rev Genet. 2004;5(4):262-275. doi:10.1038/nrg1317

**DOI:** [https://doi.org/10.1038/nrg1317](https://doi.org/10.1038/nrg1317)

---

## Summary

Bredel and Jacoby review chemogenomics as a discipline that merges genomics with chemistry to attack the bottleneck of target identification. They note that over five decades pharmacological compounds have been found to act on the products of roughly 400-500 genes, yet only about 120 of these genes are targets of marketed drugs, whereas the Human Genome Project suggested several thousand disease-associated and several thousand drug-susceptible genes. Chemogenomics is defined broadly as the study of the genomic or proteomic response of an intact biological system (cells or whole organisms) to chemical compounds, or of the ability of isolated targets to interact with them, read out by phenotypes and high-throughput assays. Box 1 clarifies the terminology: "chemical genetics" and "chemical genomics" focus on using small molecules to study cell function, whereas "chemogenomics" historically meant the target-family approach (pioneered by Glaxo Wellcome and Vertex), in which a ligand for one gene-family member is used to probe homologous members.

The core of the review parallels classical genetics. Reverse chemogenomics starts from a cloned and expressed target protein and screens a compound library against it in a cell-free high-throughput binding or activity assay (fluorescence polarization, ligand-induced conformational stabilization, mass spectrometry); it is essentially target-based drug discovery, enhanced by parallel screening across a gene family and the SAR homology concept that similar targets bind similar ligands. Forward chemogenomics begins with a desired phenotype of unknown molecular basis, screens a ligand panel in cells or organisms (yeast, fly, worm, zebrafish, mouse) using functional, marker/reporter or imaging assays, and then identifies the target of active compounds by affinity matrix purification, phage display, or transcriptional and proteomic profiling. Combining the two is powerful: targets found in a forward screen can be used to optimize analogues in a reverse screen. A third mode, predictive chemogenomics, collects genomic responses (microarrays) and pharmacological responses (growth inhibition) across many drugs to derive drug signatures and gene-drug relationships; it overlaps with pharmacogenomics but treats thousands of drugs simultaneously.

The article then covers practical issues: compound libraries (natural-product versus synthetic; combinatorial chemistry, diversity sets, privileged structures), the move away from ultra-high-throughput screening of huge libraries towards smaller focused or targeted libraries designed from target structure or known ligands, lead optimization and QSAR (Box 2 traces compound to hit to lead to drug), and in silico methods (pharmacophore searching, high-throughput docking, 3D binding-site comparison, ligand and target ontologies; Table 1). Applications include identifying targets of known bioactive molecules, discovering new ligands, and elucidating mechanisms of action. Examples: FK-506 and calcineurin; radicicol and HSP90; rapamycin and wortmannin profiled with homozygous and heterozygous yeast deletion collections (a deletion in the gene encoding the target confers resistance or altered sensitivity); and the sequential forward-then-reverse path to HDAC inhibitors (depsipeptide, SAHA and others) now in clinical trials for cancers. Cancer is highlighted as the area most likely to benefit because of its many defined molecular alterations.

Additional applications and examples from the full text. Table 2 and the Applications section group chemogenomic work into three uses: identifying new targets (forward screens; FK-506 discovered in 1987 and calcineurin as its target, radicicol with HSP90 and ATP citrate lyase, TNP-470 with MetAP2 via yeast deletion strains), discovering new ligands for known targets (hundreds of drug-like ligands from reverse, in silico and forward screens for cancer, asthma, neuroinflammation and hyperthyroidism, including Ref1/AP1 as an asthma target), and understanding mechanisms of action, including genetic markers of susceptibility. Box 3 gives a reverse-chemogenomics case study: a focused tertiary-amine (TAM) library designed for the 50 monoamine-related GPCRs, which share a conserved binding residue (D3.32) in the 7-transmembrane domain; searching with 5HT1A reference ligands gave a 10% hit rate for 5HT7 antagonists (arylpiperazines). Cancer is argued to be the field most affected because tumours carry many genetic and epigenetic alterations and intratumour heterogeneity, so a panel of targeted drugs rather than one is likely needed, and selective kinase inhibitors can still hit additional targets, which chemogenomic profiling could reveal.

Predictive chemogenomics in cancer is illustrated by the NCI60: 60 cancer cell lines screened against about 140,000 compounds from the NCI library, with response patterns used for pattern-recognition and mechanism assignment; integrating NCI60 expression profiles with the activity of more than 70,000 compounds from the Developmental Therapeutics Program database predicts genes underlying compound susceptibility (Fig. 2 describes the three-database information-intensive model of Weinstein et al.). Relevance-network analysis links genes, compounds and phenotypes into chemical-genetic networks (Fig. 3), and extension with structure-based descriptors identified compound classes worth experimental follow-up. The authors caution that mRNA and protein abundance correlate imperfectly, so linking genomic and compound-activity data may miss information. Industrial analogues include the Iconix Drugmatrix and the Cerep BioPrint matrix.

Challenges and limitations (final sections). The authors argue that reduced drug output suggests genomics may so far be hindering as much as helping discovery. HTS generates many noisy hits with false positives and negatives; the real bottleneck is the slow optimisation and validation of hits (ADMET properties, reversing a disease state) rather than hit identification, and for many new targets there is too little biological information for validation, while libraries grow in size but not in diversity. Front-end computational tools are needed: QC and pattern-detection for pipetting artefacts, recursive partitioning, phylogenetic-like tree algorithms and binary QSAR. Data integration is also difficult: integration platforms (biochemoinformatics) must combine library diversity, chemical structure, protein structure, annotation and HTS data; linking ligands to targets needs joined ontologies of protein structure and function, with a molecular-interaction-based classification (each protein described by its probability of binding various ligands) seen as a promising direction. Knowledge-based companies are building information systems for GPCRs, kinases, ion channels and proteases, and further databases cover adverse-reaction and ADMET targets and pathways. In the Conclusions the authors say that how effective chemogenomics will be at producing new treatments remains to be seen, since the data explosion has not yet raised drug-discovery efficacy; progress needs better informatics for data integration, more thorough hit validation and diversity-enriched compound libraries from chemists, within realistic budgets, and any candidate must still pass costly clinical trials.

---

## Significance in Introduction Context

- Maps the forward versus reverse genetics distinction onto drug discovery (phenotype to target vs. target to phenotype).
- Shows how yeast deletion collections give a genetic route to drug-target identification (haploinsufficiency-style sensitivity profiling).
- Connects genome sequence and gene-family homology to pharmacology; relates to pharmacogenomics.
- Useful for discussing why only a small fraction of genes is "druggable".

---

## Key References

1. **Hopkins AL, Groom CR (2002)** — The druggable genome, Nat Rev Drug Discov 1:727-730 — estimate of the number of druggable targets (ref. 1)
2. **Human Genome Sequencing Consortium (2001)** — Initial sequencing and analysis of the human genome, Nature 409:860-921 — the genome context for target discovery (ref. 4)
3. **Giaever G et al. (2004)** — Chemogenomic profiling: identifying the functional interactions of small molecules in yeast, Proc Natl Acad Sci USA 101:793-798 — genome-wide yeast on- and off-target identification (ref. 35; vault note [[en/article/Giaever2004_PNAS_ChemogenomicProfiling]])
4. **Marton MJ et al. (1998)** — Drug target validation and identification of secondary drug target effects using DNA microarrays, Nat Med 4:1293-1301 — expression signatures to find the pathways altered by a drug (ref. 21)
5. **Frye SV (1999)** — Structure-activity relationship homology (SARAH): a conceptual framework for drug discovery in the genomic era, Chem Biol 6:R3-R7 — the SAR homology concept behind target-family reverse chemogenomics (ref. 116)
6. **Weinstein JN et al. (1997)** — An information-intensive approach to the molecular pharmacology of cancer, Science 275:343-349 — the NCI60 predictive model (ref. 73)
7. **Butte AJ et al. (2000)** — Discovering functional relationships between RNA expression and chemotherapeutic susceptibility using relevance networks, Proc Natl Acad Sci USA 97:12182-12186 — chemical-genetic networks (ref. 76)
8. **Stockwell BR (2000)** — Chemical genetics: ligand-based discovery of gene function, Nat Rev Genet 1:116-125 — chemical-genetic screening framework (ref. 8)

---

## Future Research Directions

- Tighter integration of bioinformatics and chemoinformatics data (integration platforms, joined ligand-target and structure-function ontologies, interaction-based protein classification).
- More rational selection from the almost infinite space of synthetic compounds and focused or targeted libraries (realized later in chemogenomic libraries; see Jones and Bunnage 2017).
- Faster and more reliable hit selection and validation (front-end computational QC, SAR mining, ADMET), since optimisation and validation rather than hit finding are the bottleneck.
- Chemogenomic profiling of candidate anticancer compounds against their intended targets and thousands of related targets to expose off-target activity, and panels of targeted drugs for heterogeneous cancers.
- Linking genomic and compound-activity data despite imperfect mRNA-protein correlation, for example combining chemogenomic profiles with genetic interaction maps and CRISPR screens for mechanism of action.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
