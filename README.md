# kb-Genetics

A bilingual (English/Korean) knowledge base for **BME333/BIO333 Genetics** at UNIST. Built as an [Obsidian](https://obsidian.md) vault, each note summarises a key paper, review, or historical commentary relevant to the course, structured for quick reference and cross-language study.

## Structure

```
.
├── en/                  # English notes
│   ├── article/         # Research articles (123 notes)
│   ├── review/          # Reviews, perspectives, primers, essays (194 notes)
│   └── lectures/        # Per-lecture notes (lecNN_*.md, 26 notes)
├── ko/                  # Korean notes (bilingual mirror of en/)
│   ├── article/
│   ├── review/
│   └── lectures/        # Per-lecture notes (Korean mirror, 26 notes)
├── lectures/            # Course syllabus and textbook references (language-neutral)
├── extract/             # Raw text extracted from source PDFs (by date, one entry per paper, 50k-char cap)
├── pdf/                 # Source PDFs — gitignored
│   └── dup/             # Duplicate PDFs moved aside (same paper, redundant copy)
├── tools/               # Processing scripts (git submodule)
├── AGENT.md             # Instructions for AI agents working on this vault
└── CLAUDE.md            # Claude Code project instructions
```

Notes are organised by **type** (`article` / `review`), not subdiscipline. (An earlier layout used subdiscipline folders — `population/`, `forward/`, `reverse/`, `others/` — which have since been removed.)

## Note Types

| Folder | Scope |
|--------|-------|
| `article/` | Primary research papers (original experiments, data, results) |
| `review/` | Review articles, perspectives, essays, historical/critical commentaries, and educational primers |

## Special Series Tags

Two educational series from the journal *GENETICS* are cross-referenced and tagged:

- **`GeneticsPrimer`** — *GENETICS* "Educational Primer" articles that review a specific paper for teaching and pose discussion questions. Each primer is wiki-linked to its original paper (`Original paper` ↔ `Educational primer`). 12 primer notes + 10 linked original articles are tagged.
- **`GeneticsClassic`** — tribute/commentary articles honouring a classic paper (e.g. Nielsen on Tajima 1983), without discussion questions.

## Course Materials

Teaching materials for the course live in [`lectures/`](lectures/) (syllabus + textbook references) and in the bilingual `en/lectures/` and `ko/lectures/` folders (per-lecture notes).

- **Syllabus:** [2026.BME333-BIO333-Syllabus.md](lectures/2026.BME333-BIO333-Syllabus.md) — course objective/description, weekly schedule, and per-lecture objective/description (each week links to its English lecture note, with a `ko` link to the Korean mirror).
- **Lecture notes:** 26 lectures, each as a bilingual pair — `en/lectures/lecNN_*.md` and `ko/lectures/lecNN_*.md`. Each is a **self-contained ~60-min teaching document** (a student can follow the whole lecture without opening any paper): full explanatory prose grounded in the linked vault notes, **80 mermaid diagrams** plus tables/Punnett squares/ASCII figures, learning objectives, Key Takeaways, and Discussion Questions (note-thin lectures add PubMed references).
- **Cross-language navigation:** every lecture has a language-switch line (English ↔ 한국어), and every vault-note reference carries explicit dual-language `[en]` / `[ko]` links, so any note can be opened in either language from either side.
- **Reference textbooks:**

| Textbook | Edition · Authors · Year |
|----------|--------------------------|
| [Evolution: Making Sense of Life](lectures/ref.Evolution-MakeSenseOfLife.md) | 4th Edition · Carl Zimmer, Douglas J. Emlen · © 2026 |
| [Genetics: From Genes to Genomes](lectures/ref.Genetics-FromGenesToGenomes.md) | 8th Edition · Michael L. Goldberg, Janice Fischer, Leroy Hood, Leland Hartwell · © 2024 (published September 5, 2023) |

## Current Notes (317 papers in English, mirrored in Korean)

### Research Articles (123)

| File | Title | Series |
|------|-------|--------|
| `Abbott2016_Genetics_MendelHybridPaper` | Experiments on Plant Hybrids by Gregor Mendel |  |
| `Abrusan2013_Genetics_DeNovoGeneBirth` | De Novo Gene Birth: Origin of New Genes from Noncoding Sequences | Genetics Primer |
| `Akbari2026_Nature_AncientDNA-DirectionalSelection` | Ancient DNA reveals pervasive directional selection across West Eurasia |  |
| `Andres2013_Genetics_FieldCricket` | Transcriptome Divergence in Field Cricket Accessory Glands: Testing the Seminal Fluid Protein Hypothesis | Genetics Primer |
| `Asakawa2025_NatCommun_Zebrafish-ALS-MotorNeuron` | Intrinsically accelerated cellular degradation is amplified by TDP-43 loss in ALS-vulnerable motor neurons in a zebrafish model |  |
| `Avsec2026_Nature_AlphaGenome-VariantEffectPrediction` | Advancing regulatory variant effect prediction with AlphaGenome |  |
| `Barbash2010_Genetics_DrosophilaHybrid` | Ninety Years of Drosophila Hybrid Sterility: From Sturtevant to the Hmr/Lhr Genes |  |
| `Beach2017_Cell_Aneuploidy-NonGeneticIndividuality` | Aneuploidy Causes Non-genetic Individuality |  |
| `Bergstrom2026_Nature_EarlyDogs-Europe` | Genomic history of early dogs in Europe |  |
| `Bernabeu2026_Nature_GeneAncestries-Eukaryogenesis` | Gene ancestries reveal diverse microbial associations during eukaryogenesis |  |
| `Beye2003_Cell_Honeybee-SexDetermination` | The Gene csd Is the Primary Signal for Sexual Development in the Honeybee and Encodes an SR-Type Protein |  |
| `Bower2025_Nature_RangeExtender-Enhancer` | Range extender mediates long-distance enhancer activity |  |
| `Bower2026_Nature_NANOG-HumanEmbryogenesis` | Base editing reveals an essential role for NANOG in human embryogenesis |  |
| `Bracewell2024_PLoSGenet_Beetle-NeoSexChromosome` | Sex and neo-sex chromosome evolution in beetles |  |
| `Bridges1916_Genetics_NonDisjunction-SexChromosome` | Non-Disjunction as Proof of the Chromosome Theory of Heredity |  |
| `Brixi2026_Nature_Evo2-GenomeModel` | Genome modelling and design across all domains of life with Evo 2 |  |
| `Calabria2024_Nature_HSC-GeneTherapy-LineageCommitment` | Long-term lineage commitment in haematopoietic stem cell gene therapy |  |
| `Calvet2025_Nature_Bladder-SomaticSelection-SexSmoking` | Sex and smoking bias in the selection of somatic mutations in human bladder |  |
| `Carioscia2026_Nature_MeiosisGenes-Recombination-Aneuploidy` | Common variation in meiosis genes shapes human recombination and aneuploidy |  |
| `Carrington2025_GenomeBiol_Human-ReplicationInitiation-SingleMolecule` | Most human DNA replication initiation is dispersed throughout the genome with only a minority within previously identified initiation zones |  |
| `Chang2026_Genetics_SegregationDistorter-Suppressors` | Pervasive suppressors halt the spread of selfish Segregation Distorter in a natural population |  |
| `Chen2025_GenomeRes_Zebrafish-FinRegeneration-scRNA` | Common and specific gene regulatory programs in zebrafish caudal fin regeneration at single-cell resolution |  |
| `Collins2014_Genetics_Meiosis+Corolla` | Corolla Is a Novel Protein That Contributes to the Architecture of the Synaptonemal Complex of Drosophila | Genetics Primer |
| `Cridland2025_Genetics_Drosophila-DeNovoGenes` | New perspectives on Drosophila melanogaster de novo gene origination revealed by investigation of ancient African genetic variation |  |
| `Dorkenwald2024_Nature_FlyWire-Connectome` | Neuronal wiring diagram of an adult brain |  |
| `East1916_Genetics_SizeInheritance` | Studies on Size Inheritance in Nicotiana |  |
| `Efron1996_PNAS_Bootstrap-PhylogeneticTrees` | Bootstrap confidence levels for phylogenetic trees |  |
| `Everitt2025_GenomeRes_Termite-RecombinationHotspots` | Unexpectedly low recombination rates and presence of hotspots in termite genomes |  |
| `Fallahshahroudi2025_Nature_Avian-DosageCompensation-miRNA` | A male-essential miRNA is key for avian sex chromosome dosage compensation |  |
| `Felsenstein1985_Evolution_Bootstrap-PhylogeneticTrees` | Confidence limits on phylogenies: an approach using the bootstrap |  |
| `Feltes2025_PLoSGenet_Zebrafish-WGS-PhenotypeToGenotype` | Phenotype to genotype: A new and rapid approach using whole-genome sequencing |  |
| `Feng2025_Nature_MendelsMissingTraits` | Genomic and Genetic Insights into Mendel's Pea Genes |  |
| `Flannery2026_PLoSGenet_Zebrafish-MuscularDystrophy-MaternalCompensation` | Impact of maternal compensation on developmental phenotypes in a zebrafish model of severe congenital muscular dystrophy |  |
| `Foley2026_Nature_RecombinationDesert-SpeciationSupergene` | An ancient recombination desert is a speciation supergene in placental mammals |  |
| `Fusca2025_PLoSGenet_Caenorhabditis-SpeciationClock` | Phylogenomic timetree-calibrated speciation clocks for Caenorhabditis nematodes reveal slow but disproportionate accumulation of post-zygotic reproductive isolation |  |
| `Galambos2026_NatCommun_Celegans-tDR-EpigeneticInheritance` | tRNA-derived RNA processing in sperm transmits non-genetically inherited phenotypes to offspring in C. elegans |  |
| `Gempe2009_PLoSBiol_Honeybee-SexDetermination` | Sex Determination in Honeybees: Two Separate Mechanisms Induce and Maintain the Female Pathway |  |
| `Grendler2019_Development_WoundPolyploidy` | Wound-induced polyploidization is driven by Myc and supports tissue repair in the presence of DNA damage |  |
| `Guan2025_NatCommun_Celegans-MorphologicalMap` | Cell lineage-resolved embryonic morphological map reveals signaling associated with cell fate and size asymmetry |  |
| `Hardy1908_Science_HardyWeinberg` | Mendelian Proportions in a Mixed Population |  |
| `Hasselmann2008_Nature_Honeybee-SexDetermination` | Evidence for the Evolutionary Nascence of a Novel Sex Determination Pathway in Honeybees |  |
| `Hatzikotoulas2025_Nature_Osteoarthritis-TranslationalGenomics` | Translational genomics of osteoarthritis in 1,962,069 individuals |  |
| `Hekman2019_G3_APtx+Fox` | Anterior Pituitary Transcriptome Suggests Differences in ACTH Release in Tame and Aggressive Foxes | Genetics Primer |
| `Holley2026_Nature_IcelandicPangenome` | An Icelandic pangenome reference |  |
| `Huang2024_Nature_CommonVariants-NeurodevelopmentalConditions` | Examining the role of common variants in rare neurodevelopmental conditions |  |
| `Hubby1966_Genetics_PopulationHeterogeneity1` | A Molecular Approach to the Study of Genic Heterozygosity in Natural Populations. I. The Number of Alleles at Different Loci in Drosophila pseudoobscura |  |
| `Hunter2025_Science_InVivo-CART` | In vivo CAR T cell generation to treat cancer and autoimmune disease |  |
| `Jaramillo-Lambert2016_Genetics_top2` | Rapid Identification of Paternal-Effect Lethal Mutations in C. elegans Using Hawaiian SNP Mapping | Genetics Primer |
| `Jee2025_NatCommun_Korean-GWAS-QuantitativeTraits` | Genome-wide association studies in a large Korean cohort identify quantitative trait loci for 36 traits and illuminate their genetic architectures |  |
| `Jena2025_Genetics_Ecoli-Spectinomycin-Adaptation` | Alternate genetic paths of adaptation to spectinomycin in Escherichia coli |  |
| `Jiang2026_Nature_OTOF-GeneTherapy-Deafness` | Multicentre gene therapy for OTOF-related deafness followed up to 2.5 years |  |
| `Kankel2020_Genetics_Drosophila-ALS-modifier` | Genome-wide Drosophila Screen for ALS Disease Modifiers | Genetics Primer |
| `Karczewski2025_NatGenet_PanUKBB-GWAS` | Pan-UK Biobank genome-wide association analyses enhance discovery and resolution of ancestry-enriched effects |  |
| `Kashko2025_PLoSGenet_Yeast-mtDNA-InheritanceBias` | Inheritance bias of deletion-harbouring mtDNA in yeast: the role of copy number and intracellular selection |  |
| `Kay2026_Nature_GeneDuplications-Eukaryogenesis` | Dated gene duplications elucidate the evolutionary assembly of eukaryotes |  |
| `Kieffer2025_Science_Integrons-PhageDefence` | Mobile integrons encode phage defense systems |  |
| `Kreplak2019_NatGenet_PeaGenome` | A Reference Genome for Pea Provides Insight into Legume Genome Evolution |  |
| `Kuhl2020_Genetics_dCas9+Ctf19+Recombination` | A dCas9-Based System Identifies a Central Role for Ctf19 in Kinetochore-Derived Suppression of Meiotic Recombination | Genetics Primer |
| `Kumon2026_NatCommun_Drosophila-SatelliteDNA-MeioticDrive` | Defective transcription of AAGAG satellite DNA causes sex-ratio meiotic drive in Drosophila |  |
| `Kunz2026_NatCommun_Wheat-Pm3e-MildewResistance` | Dual recognition of structurally unrelated mildew effectors underlies the broad-spectrum resistance of Pm3e in wheat |  |
| `Kwakye2026_NatCommun_Stickleback-JackpotAdaptation` | Rare jackpot individuals drive rapid adaptation in Threespine Stickleback |  |
| `Lai2026_Nature_BaseEditing-BetaThalassaemia` | Clinical application of base editing for treating β-thalassaemia |  |
| `LanderBotstein1989_Genetics_QTL` | Mapping Mendelian Factors Underlying Quantitative Traits Using RFLP Linkage Maps |  |
| `Lawson2018_NatComm_STRUCTRE+tutorial` | A Tutorial on How Not to Over-Interpret STRUCTURE and ADMIXTURE Bar Plots |  |
| `Lawson2025_Nature_SomaticMutation-PopulationScale` | Somatic mutation and selection at population scale |  |
| `Lewontin1966_Genetics_PopulationHeterogeneity2` | A Molecular Approach to the Study of Genic Heterozygosity in Natural Populations. II. Amount of Variation and Degree of Heterozygosity in Natural Populations of Drosophila pseudoobscura |  |
| `Li2003_Genetics_LD+Modeling` | Modeling Linkage Disequilibrium and Identifying Recombination Hotspots Using Single-Nucleotide Polymorphism Data |  |
| `Li2025_NatCommun_Nondisjunction-DownSyndrome-MeiHMM` | Inferring chromosome segregation error stage and crossover in trisomic disorders with application to Down syndrome |  |
| `Lieberman-Aiden2009_Science_HiC-3DGenome` | Comprehensive Mapping of Long-Range Interactions Reveals Folding Principles of the Human Genome |  |
| `Litman2025_NatGenet_Autism-PhenotypicHeterogeneity` | Decomposition of phenotypic heterogeneity in autism reveals underlying genetic programs |  |
| `Liu2024_NatGenet_PeaGenome-MendelianTraits` | Reference genome sequence and population genomic analysis of peas provide insights into the genetic basis of Mendelian and other agronomic traits |  |
| `Lourenco2026_Nature_DriverDecay-IntestinalTransformation` | Decay of driver mutations shapes the landscape of intestinal transformation |  |
| `Luo2025_NatGenet_SheepT2TGenome-WoolFineness` | Telomere-to-telomere sheep genome assembly identifies variants associated with wool fineness |  |
| `LuriaDelbruck1943_Genetics_VirusResistance` | Mutations of Bacteria from Virus Sensitivity to Virus Resistance | Genetics Primer |
| `Mullis2025_Genetics_DiversityOutbredMouse-Lifespan` | Analysis of lifespan across diversity outbred mouse studies identifies multiple longevity-associated loci |  |
| `MummeMonheit2025_NatCommun_PhenotypeSeverity-Variation` | A quadratic paradigm describes the relationship between phenotype severity and variation |  |
| `Nadig2025_NatGenet_TRADE-PerturbationAtlas` | Transcriptome-wide analysis of differential expression in perturbation atlases |  |
| `Nemoto2025_NatCommun_PraderWilli-EpigenomeEditing` | Rescue of imprinted genes by epigenome editing in human cellular models of Prader-Willi syndrome |  |
| `Neville2025_Nature_SpermSequencing-PositiveSelection` | Sperm sequencing reveals extensive positive selection in the male germline |  |
| `Nissen2012_Genetics_Honeybee-SexDetermination` | The Am-tra2 Gene Is an Essential Regulator of Female Splice Regulation at Two Levels of the Sex Determination Hierarchy of the Honeybee | Genetics Primer |
| `Nunes2025_Science_Brazilian-Admixture` | Admixture's impact on Brazilian population evolution and health |  |
| `Nurse1980_Genetics_Wee+Spombe` | Regulatory Genes Controlling Mitosis in the Fission Yeast Schizosaccharomyces pombe |  |
| `Okashita2025_Nature_IronDeficiency-SexReversal` | Maternal iron deficiency causes male-to-female sex reversal in mouse embryos |  |
| `Oliver2025_NatGenet_SomaticMutation-CancerIndependent` | Cancer-Independent Somatic Mutation of the Wild-Type NF1 Allele in Normal Tissues in Neurofibromatosis Type 1 |  |
| `Opmeer2025_PLoSGenet_KooikerDog-Polymyositis` | Polymyositis in Kooiker dogs is associated with a 39 kb deletion upstream of the canine IL21/IL2 locus |  |
| `Palsson2025_Nature_CompleteRecombinationMaps` | Complete human recombination maps |  |
| `Panja2025_NatGenet_LungAdenocarcinoma-PassengerMutations` | Passenger mutations link cellular origin and transcriptional identity in human lung adenocarcinomas |  |
| `Plassais2019_NatComm_DogGenomes+GWAS` | Whole Genome Sequencing of Canids Reveals Genomic Regions under Selection and Variants Influencing Morphology |  |
| `Plassais2022_CurrBiol_DogBodySize-NonCodingVariant` | Natural and Human-Driven Selection of a Single Non-Coding Body Size Variant in Ancient and Modern Canids |  |
| `Poliacikova2024_SciAdv_Antennapedia-FlightMuscle` | The Hox protein Antennapedia orchestrates Drosophila adult flight muscle development |  |
| `Porubsky2025_Nature_DeNovoMutationRate-FourGenerationPedigree` | Human de novo mutation rates from a four-generation pedigree reference |  |
| `Pritchard2000_Genetics_STRUCTURE` | Inference of Population Structure Using Multilocus Genotype Data |  |
| `Pulupa2025_Nature_GenomeFolding-PhaseTransition` | Solid phase transitions as a solution to the genome folding paradox |  |
| `Quinodoz2021_Cell_RNA-SpatialCompartments` | RNA promotes the formation of spatial compartments in the nucleus |  |
| `Rimbault2013_GenomeRes_DogSizeReduction` | Derived Variants at Six Genes Explain Nearly Half of Size Reduction in Dog Breeds |  |
| `Robertson2025_Science_Ecoli-57Codon-GeneticCode` | Escherichia coli with a 57-codon genetic code |  |
| `Sakaue2021_NatGenet_BiobankJapan` | A Cross-Population Atlas of Genetic Associations for 220 Human Phenotypes |  |
| `Scherer2025_NatGenet_Metabolomics-ExomeSequencing-Heterozygotes` | Coupling metabolomics and exome sequencing reveals graded effects of rare damaging heterozygous variants on gene function and human traits |  |
| `Seplyarskiy2025_Nature_MutationHotspots-Spermatogonia` | Hotspots of human mutation point to clonal expansions in spermatogonia |  |
| `Shenhar2026_Science_Lifespan-Heritability` | Heritability of intrinsic human life span is about 50% when confounding factors are addressed |  |
| `Shoag2025_NatCommun_MaleGermline-MutationRate-Sperm` | Direct measurement of the male germline mutation rate in individuals using sequential sperm samples |  |
| `Shopland2006_JCB_ChromosomeFolding` | Folding and organization of a contiguous chromosome region according to the gene distribution pattern in primary genomic sequence |  |
| `Shu2026_Nature_CRISIS-AntiPhageDefence` | CRISPR–Cas regulates expression of embedded anti-phage defence systems |  |
| `Simkhada2025_Genetics_Drosophila-MPSIIIB-Model` | A Drosophila model of mucopolysaccharidosis IIIB |  |
| `Sutton1903_BiolBull_Chromosomes-Heredity` | The Chromosomes in Heredity |  |
| `Tajima2025_NatCommun_NOVA1-Humanized-Vocalization` | A humanized NOVA1 splicing factor alters mouse vocal communications |  |
| `Tobiasson2026_Nature_AsgardArchaea-Eukaryogenesis` | Dominant contribution of Asgard archaea to eukaryogenesis |  |
| `Tsukamoto2017_Genetics_CelegansOocyeMaturation` | LIN-41 and OMA Ribonucleoprotein Complexes Mediate a Translational Repression-to-Activation Switch Controlling Oocyte Meiotic Maturation and the Oocyte-to-Embryo Transition in Caenorhabditis elegans | Genetics Primer |
| `Wallis2025_Science_Dog-GWAS-DENND1B-Obesity` | Canine genome-wide association study identifies DENND1B as an obesity gene in dogs and humans |  |
| `Wang2026_NatCommun_PolygenicScore-Portability` | Three open questions in polygenic score portability |  |
| `Weiss2018_PLoSGenet_LastUniversal-CommonAncestor` | The Last Universal Common Ancestor Between Ancient Earth Chemistry and the Onset of Genetics |  |
| `Wooding2006_Genetics_PhenylThioCarbamide` | Phenylthiocarbamide: A 75-Year Adventure in Genetics and Natural Selection |  |
| `Wotton2025_PLoSGenet_Mouse-Retina-KnockoutScreen` | Identifying genetic determinants of outer retinal function in mice using a large-scale gene-targeted screen |  |
| `WTCCC2007_Nature` | Genome-wide association study of 14,000 cases of seven common diseases and 3,000 shared controls |  |
| `Wu2026_Science_Arabidopsis-OutdoorEvolution` | Rapid adaptation and extinction in synchronized outdoor evolution experiments of Arabidopsis |  |
| `Xiao2025_Genetics_Sorghum-EMS-MaleSterility` | Targeted seed EMS mutagenesis reveals a basic helix–loop–helix transcription factor underlying male sterility in sorghum |  |
| `Yang2010_MBE_BranchSiteTest-PositiveSelection` | Statistical Properties of the Branch-Site Test of Positive Selection |  |
| `Yang2022_NatGenet_PeaGenome2` | Improved Pea Reference Genome and Pan-Genome Highlight Genomic Features and Evolutionary Characteristics |  |
| `Yang2024_Nature_Zebrafish-PlaceCells` | A population code for spatial representation in the zebrafish telencephalon |  |
| `Zebell2025_Nature_CrypticVariation-HierarchicalEpistasis` | Cryptic variation fuels plant phenotypic change through hierarchical epistasis |  |
| `Zhang2025_GenomeBiol_Dog-DeNovoMutation` | Determinants of de novo mutations in extended pedigrees of 43 dog breeds |  |
| `Zhu2026_Nature_WGD-CellTypeEvolution-Brain` | Whole-genome duplication shaped cell-type evolution in the vertebrate brain |  |
| `Zillich2025_NatCommun_LIS1-Lissencephaly-Organoids` | Capturing disease severity in LIS1-lissencephaly reveals proteostasis dysregulation in patient-derived forebrain organoids |  |

### Reviews, Perspectives, Primers & Essays (194)

| File | Title | Series |
|------|-------|--------|
| `Abbott2017_ProcRSocB_SexChromosome-Evolution` | Sex chromosome evolution: historical insights and future perspectives |  |
| `Abrusan2013_Genetics_DeNovoGeneBirth-Frietze2014primer` | Educational Primer: De Novo Gene Birth (Frietze & Leatherman 2014) | Genetics Primer |
| `Allen2003_Endeavour_Mendel` | Mendel's Legacy: Revisionist History and the Misinterpretation of the Unit-Character Concept |  |
| `Allison2004_Genetics_GeneticsMedicine-TwoLessons` | Two Lessons From the Interface of Genetics and Medicine |  |
| `Andres2013_Genetics_FieldCricket-Wittkopp2013primer` | Educational Primer for Field Cricket Speciation Study (Wittkopp 2013) | Genetics Primer |
| `Arendt2016_NatRevGenet_OriginEvolution-CellTypes` | The origin and evolution of cell types |  |
| `Ascensao2026_NatRevGenet_ExperimentalEvolution` | Experimental evolution in an era of molecular manipulation |  |
| `Bachtrog2013_NatRevGenet_Y-chromosomeEvolution` | Y-chromosome evolution: emerging insights into processes of Y-chromosome degeneration |  |
| `Bachtrog2014_PLoSBiol_SexDetermination-ManyWays` | Sex determination: why so many ways of doing it? |  |
| `Badano2002_NatRevGenet_BeyondMendel` | Beyond Mendel: Oligogenic Inheritance in Human Genetic Disease |  |
| `Baker2009_Genetics-Perspective-FlyLeg` | Drosophila Leg Proximodistal Patterning: From Polar Coordinate Model to Boundary Model (Baker 2011) |  |
| `Barton2002_NatRevGenet_QTL` | Understanding Quantitative Genetic Variation |  |
| `Benson2001_NatRevGenet_Morgan-Chromosome` | T. H. Morgan's Resistance to the Chromosome Theory |  |
| `BenTabou2006_SciSTKE_SeaUrchin-GRN` | Deciphering the Underlying Mechanism of Specification and Differentiation: The Sea Urchin Gene Regulatory Network |  |
| `Bhattacharyya2025_NatGenet_GenomeIndia` | Mapping genetic diversity with the GenomeIndia project |  |
| `Bicknell2025_NatRevGenet_HumanHeight-Genetics` | The genetic basis of human height |  |
| `Bonini2017_Genetics_ModelOrganism` | The Sustained Impact of Model Organisms—in Genetics and Epigenetics |  |
| `Braendle2024_Genetics_Celegans-LifeHistory` | Life history in Caenorhabditis elegans: from molecular genetics to evolutionary ecology |  |
| `Brenner2009_Genetics_Celegans` | In the Beginning Was the Worm . . . |  |
| `BruhnOlszewska2025_NatRevGenet_LossOfY-MaleHealth` | The effects of loss of Y chromosome on male health |  |
| `Campbell1993_Genetics_ProphageInsertion` | Thirty Years Ago in Genetics: Prophage Insertion Into Bacterial Chromosomes |  |
| `Capel2017_NatRevGenet_VertebrateSexDetermination` | Vertebrate sex determination: evolutionary plasticity of a fundamental switch |  |
| `Cavalli-Sforza2005_NatRevGenet_HGDP` | The Human Genome Diversity Project: past, present and future |  |
| `Ceballos2018_NatRevGenet_RunsOfHomozygosity` | Runs of homozygosity: windows into population history and trait architecture |  |
| `Charlesworth2009_Genetics_Perspective-DarwinGenetics` | Darwin and Genetics |  |
| `Charlesworth2009_NatRevGenet_EffectivePopulation-SizePatterns` | Effective population size and patterns of molecular evolution and variation |  |
| `Charlesworth2022_NatGenet_MendelPerspectives` | From Mendel to Quantitative Genetics in the Genome Era: The Scientific Legacy of W. G. Hill |  |
| `Cobb2006_NatRevGenet_HeredityBeforeGenetics` | Heredity before Genetics: A History |  |
| `Collins2014_Ables2014_GeneticsPrimer_Meiosis+Corolla` | Drosophila Oocytes as a Model for Understanding Meiosis: An Educational Primer | Genetics Primer |
| `Collins2025_NatRevGenet_StructuralVariation-HumanGenome` | Diversity and consequences of structural variation in the human genome |  |
| `Comai2005_NatRevGenet_AdvantagesDisadvantages-BeingPolyploid` | The advantages and disadvantages of being polyploid |  |
| `Corcos1985_JHeredity_deVries-1` | Role of de Vries in the Recovery of Mendel's Work I. Was de Vries Really an Independent Discoverer of Mendel? |  |
| `Corcos1987_JHeredity_Correns-1` | Correns, an Independent Discoverer of Mendelism? I. An Historical/Critical Note |  |
| `Corcos1987_JHeredity_Correns-2` | Correns, an Independent Discoverer of Mendelism? II. Was Correns a Real Interpreter of Mendel's Paper? |  |
| `Corcos1987_JHeredity_deVries-2` | Role of de Vries in the Rediscovery of Mendel's Paper II. Did de Vries Really Understand Mendel's Paper? |  |
| `Crow1987_Genetics_Kimura-MolecularEvolution` | Twenty-Five Years Ago in Genetics: Motoo Kimura and Molecular Evolution |  |
| `Crow1988_Genetics_PopulationGenetics-Beginnings` | Eighty Years Ago: The Beginnings of Population Genetics |  |
| `Crow1990_Genetics_Fisher-CentennialView` | R. A. Fisher, a Centennial View |  |
| `Crow1997_Genetics_Mutation-BecomesExperimental` | Seventy Years Ago: Mutation Becomes Experimental |  |
| `Crow2006_Genetics_Muller+CompetitionHoax` | H. J. Muller and the "Competition Hoax" |  |
| `CrowBender2014_Genetics_EdLewis` | Edward B. Lewis, 1918–2004 |  |
| `Davies2018_BMJ_MendelianRandomization-overview` | Reading Mendelian randomisation studies: a guide, glossary, and checklist for clinicians |  |
| `Denell1994_Genetics_AntennapediaComplex` | Discovery and Genetic Definition of the Drosophila Antennapedia Complex |  |
| `Dernburg2001_JCB_HolocentricChromosomes` | Here, There, and Everywhere: Kinetochore Function on Holocentric Chromosomes |  |
| `Dobzhansky1936_Coyne2016_GeneticsClassic` | Theodosius Dobzhansky on Hybrid Sterility and Speciation (GeneticsClassic) | Genetics Classic |
| `Donertas2026_NatRevGenet_Ageing-EvolutionaryGenetics` | Evolutionary genetics of ageing |  |
| `Doolittle2016_PLoSGenet_TreeOfLife` | What Is the Tree of Life? |  |
| `Dove1987_Genetics_MouseMolecularGenetics` | Molecular Genetics of *Mus musculus*: Point Mutagenesis and Millimorgans |  |
| `Dove1988_Genetics_YearOfTheFly` | The Year of the Fly |  |
| `Dove2016_Genetics_PerspectivesSeries-Tapestry` | Weaving a Tapestry from Threads Spun by Geneticists: The Series Perspectives on Genetics, 1987–2008 |  |
| `Dugatkin2007_Genetics_InclusiveFitness-DarwinHamilton` | Inclusive Fitness Theory from Darwin to Hamilton |  |
| `DunnCharles1937_Schimenti2016_GeneticsClassic_MouseQTL` | L. C. Dunn and Donald Charles on Quantitative Traits in the Mouse | Genetics Classic |
| `East1916_Turelli2016_GeneticsClassic` | Edward East on the Mendelian Basis of Quantitative Trait Variation | Genetics Classic |
| `Eddy2004_NatureBiotechPrimer_BLOSUM62` | Where Did the BLOSUM62 Alignment Score Matrix Come From? |  |
| `Eddy2004_NatureBiotechPrimer_DynamicProgramming` | What Is Dynamic Programming? |  |
| `Edwards2007_Genetics_Fisher-RhesusBloodGroup` | R. A. Fisher's 1943 Unravelling of the Rhesus Blood-Group System |  |
| `Edwards2008_Genetics_HWE` | G. H. Hardy (1908) and Hardy–Weinberg Equilibrium |  |
| `Edwards2009_Genetics_Perspectives-EvolutionaryTreeStatistics` | Statistical Methods for Evolutionary Trees |  |
| `Emdin2017_JAMA_MendelianRandomization` | Mendelian Randomization |  |
| `Fairbank2016_Genetics_Darwin+Mendel` | Darwin's Influence on Mendel: Evidence from a New Translation of Mendel's Paper |  |
| `Falk1993_Genetics_Morgan-GeneticControlDevelopment` | Morgan's Hypothesis of the Genetic Control of Development |  |
| `Falk2010_Genetics_Mutagenesis-ResearchStrategy` | Mutagenesis as a Genetic Research Strategy |  |
| `Feschotte2026_NatRevGenet_TransposableElements-Innovation` | Transposable elements as catalysts of evolutionary innovation |  |
| `Fischer2007_Genetics_MaxDelbruck` | Max Delbrück |  |
| `Fitzgerald2019_PLoSgenet_WhatIsMutation` | What Is Mutation? Making Sense of Random and Non-Random Mutation |  |
| `Freedman2026_NatRevGenet_SomaticGenomeEditing-Monitoring` | Monitoring biological effects of somatic cell genome editing |  |
| `Furman2020_GBE_SexChromosome-ManyExceptions` | Sex chromosome evolution: so many exceptions to the rules |  |
| `Garen1992_Genetics_Homunculus` | Looking for the Homunculus in Drosophila |  |
| `Gartler2006_NatRevGenet_HumanChromosomeNumber` | The chromosome number in humans: a brief history |  |
| `GeneDosage_Wolfner2016_Genetics_ClassicLindseySandler` | Lindsley and Sandler et al. on Gene Dosage and the Drosophila Genome | Genetics Classic |
| `GeneticsClassic_Meuwissen_GenomicSelection` | Meuwissen et al. on Genomic Selection | Genetics Classic |
| `GeneticsClassic_SydneyBrennder_Celegans` | Sydney Brenner on the Genetics of Caenorhabditis elegans | Genetics Classic |
| `Gilbert2012_MolEcol_STRUCTUREopinion` | Recommendations for Utilizing and Reporting Population Genetic Analyses: The Reproducibility of Genetic Clustering Using the Program STRUCTURE |  |
| `Goldman2016_PLoSgenet_WhatIsGenome` | What Is a Genome? |  |
| `Goodson-Gregg2009_Genetics_AmesTest` | Reinventing the Ames Test as a Quantitative Lab That Connects Classical and Molecular Genetics |  |
| `Gould2009_Genetics_ComparativeGenetics-BreastCancer` | The Utility of Comparative Genetics to Inform Breast Cancer Prevention Strategies |  |
| `Grah2025_Genetics_MolecularMechanisms-EvolutionaryConsequences` | Linking molecular mechanisms to their evolutionary consequences: a primer |  |
| `Graves2015_NatRevGenet_SexChromosome-Evolution` | Evolution of vertebrate sex chromosomes and dosage compensation |  |
| `Green2010_Genetics_WhiteGene-DrosophilaCentury` | 2010: A century of Drosophila genetics through the prism of the white gene |  |
| `Griffing1991_Genetics_Arabidopsis-GeneticStudies` | Qualitative and Quantitative Genetic Studies of Arabidopsis thaliana |  |
| `Harman2005_NatRevGenet_Darlington-Cytology` | Cyril Dean Darlington: the man who 'invented' the chromosome |  |
| `Hartl1992_Genetics_MendelThinking` | What Did GREGOR MENDEL Think He Discovered? |  |
| `Hartl2007_Genetics_MendelData-Falsification` | Mud Sticks: On the Alleged Falsification of Mendel's Data |  |
| `Hawley1993_Genetics_MeioticMutants-Drosophila` | Meiosis as an "M" Thing: Twenty-Five Years of Meiotic Mutants in Drosophila |  |
| `Hegreness2007_Genetics_Sutton+ChromosomeTheory` | What Did Sutton See?: Thirty Years of Confusion Over the Chromosomal Basis of Mendelism |  |
| `Hekman2019_G3_FearAndFoxes-GeneticsPrimer` | Fear and Foxes: An Educational Primer to Accompany Hekman et al. (2018) | Genetics Primer |
| `Hey2004_PLoSBiol_RecombinationHotspots` | What's So Hot about Recombination Hotspots? |  |
| `Hobert2010_Genetics_WholeGenomeSequencing` | The Impact of Whole Genome Sequencing on Model System Genetics: Get Ready for the Ride |  |
| `Horowitz1991_Genetics_Neurospora-Revolution` | Fifty Years Ago: The Neurospora Revolution |  |
| `Horowitz1996_Genetics_BiochemGenetics` | The Sixtieth Anniversary of Biochemical Genetics |  |
| `Huddleston2016_Genetics_IncompleteHumanQTL` | Incomplete Human Genome Impedes QTL Research |  |
| `Hurst2009_NatRevGenet_GeneticsUnderstanding-Selection` | Genetics and the understanding of selection |  |
| `Jaramillo-Lambert2016_Boeteng2018_GeneticsPrimer_top2` | Genetics Primer: C. elegans top-2 Meiotic Topoisomerase Study | Genetics Primer |
| `Joseph2026_PLoSGenet_RecombinationHotspots` | Why recombination hotspots? |  |
| `Kankel2020_Genetics_Drosophila-ALS-modifier.Banerjee2020primer` | Using Drosophila melanogaster To Discover Human Disease Genes: An Educational Primer to Accompany Kankel et al. (2020) | Genetics Primer |
| `Keightley1996_Genetics_Dominance-Recessivity` | A Metabolic Basis for Dominance and Recessivity |  |
| `Kerfeld2011_PLoSBiol_BLAST` | Using BLAST to Teach "E-value-tionary" Concepts |  |
| `Kingsley2025_Genetics_Hogness-Centennial` | Hogness at one hundred | Genetics Classic |
| `Klein2020_ChromosomeRes_DNAAccessibility-Methods` | Genomic methods in profiling DNA accessibility and factor localization |  |
| `Kottler1979_AnnSci_deVries-MendelRediscovery` | Hugo de Vries and the Rediscovery of Mendel's Laws |  |
| `Kuhl2020_Genetics_dCas9+Ctf19+Recombination-McVey2022primer` | Beyond Editing: CRISPR/Cas9 for Protein Localization Studies — An Educational Primer | Genetics Primer |
| `Kullo2026_NatRevGenet_PolygenicRiskScores-Clinical` | Clinical use of polygenic risk scores: current status, barriers and future directions |  |
| `LanderBotstein1989_Churchill2016_GeneticsClassic` | Eric Lander and David Botstein on Mapping Quantitative Traits | Genetics Classic |
| `Laurie1997_Genetics_Haldane+Heterogametic` | The Weaker Sex Is Heterogametic: 75 Years of HALDANE'S Rule |  |
| `Lederberg1987_Genetics_EcoliRecombination` | Gene recombination and linked segregations in Escherichia coli |  |
| `Lederberg1994_Genetics_AveryMacLeodMcCarty` | The Transformation of Genetics by DNA: An Anniversary Celebration of Avery, MacLeod and McCarty (1944) |  |
| `Lenski2017_PLoSgenet_WhatIsAdaptation` | What Is Adaptation by Natural Selection? Perspectives of an Experimental Microbiologist |  |
| `Leung2025_NatRevGenet_CancerMetastasis-ModelSystems` | Integrating model systems and genomic insights to decipher mechanisms of cancer metastasis |  |
| `Lewontin1997_Genetics_Dobzhansky-StillRelevant` | Dobzhansky's Genetics and the Origin of Species: Is It Still Relevant? |  |
| `Li2024_NatRevGenet_GenomeAssembly-T2T` | Genome assembly in the telomere-to-telomere era |  |
| `LuriaDelbruck1943_Meneely2016_GeneticsClassic` | Pick Your Poisson: An Educational Primer for Luria and Delbrück's Classic Paper | Genetics Primer |
| `Mackay2024_NatRevGenet_Pleiotropy-Epistasis-QuantitativeTraits` | Pleiotropy, epistasis and the genetic architecture of quantitative traits |  |
| `Makani2022_NatRevGenet_MendelianDisorder` | From Mendel to a Mendelian Disorder: Towards a Cure for Sickle Cell Disease |  |
| `Mank2017_NatRevGenet_SexualConflict` | Population genetics of sexual conflict in the genomic era |  |
| `Matharu2015_PLoSGenet_TAD-ChromatinLoops` | Minor Loops in Major Folds: Enhancer-Promoter Looping, Chromatin Restructuring, and Their Association with Transcriptional Regulation and Disease |  |
| `Mauricio2001_NatRevGenet_QTL` | Mapping Quantitative Trait Loci in Plants: Uses and Caveats for Evolutionary Biology |  |
| `McClintock1953_Halpene2016_GeneticsClassic` | Barbara McClintock on Defining the Unstable Genome | Genetics Classic |
| `Meaburn2007_Nature_ChromosomeTerritories` | Chromosome territories |  |
| `Miller1997_Genetics_ChromosomeChangesCellDivision` | Chromosome Changes in Cell Differentiation |  |
| `Misteli2020_Cell_3Dgenome-SelfOrganizing` | The Self-Organizing Genome: Principles of Genome Architecture and Function |  |
| `Monaghan1986_JHeredity_Tschermak-2` | Tschermak: A Non-Discoverer of Mendelism. II. A Critique |  |
| `MonaghanCorcos1984_JHeredity_MendelsLaw` | On the Origins of the Mendelian Laws |  |
| `Morton1995_Genetics_LODs` | LODs Past and Present |  |
| `Murray2016_Genetics_Nurse+Thuriaux+Wee+CellCycle` | Paul Nurse and Pierre Thuriaux on wee Mutants and Cell Cycle Control |  |
| `Nasmyth2022_NatRevGenet_Mendel` | The Magic and Meaning of Mendel's Miracle |  |
| `NeutralDiversity_Wright2016_GeneticsClassic_Charlesworth` | Charlesworth et al. on Background Selection and Neutral Diversity | Genetics Classic |
| `Nissen2012_Genetics_Honeybee-SexDetermination-Primer` | To "Bee or Not to Bee" Male or Female? An Educational Primer for Use with "The Am-tra2 Gene Is an Essential Regulator of Female Splice Regulation at Two Levels of the Sex Determination Hierarchy of the Honeybee" | Genetics Primer |
| `Nogler2006_Genetics_Perspective-MendelHieracium` | The Lesser-Known Mendel: His Experiments on Hieracium |  |
| `Novick2019_PLoSGenet_MicrobesModernSynthesis` | How microbes "jeopardize" the modern synthesis |  |
| `Olby2000_NatRevGenet_Horticulture` | Horticulture: The Font for the Baptism of Genetics |  |
| `Orr1996_Genetics_Dobzhansky-Bateson-Speciation` | Dobzhansky, Bateson, and the Genetics of Speciation |  |
| `Orr2009_Genetics_Darwin-SocialImplications` | Darwin and Darwinism: The (Alleged) Social Implications of The Origin of Species |  |
| `Paigen2010_NatRevGenet_RecombinationHotspots-Mammals` | Mammalian recombination hot spots: properties, control and evolution |  |
| `Parkinson1987_Genetics_BehavioralGenetics-Bacteria` | Doing Behavioral Genetics with Bacteria |  |
| `Payer2019_NatRevGenet_TE-Disease` | Transposable Elements in Human Genetic Disease |  |
| `Pearson2008_JAMA_InterpretingGWAS` | How to Interpret a Genome-wide Association Study |  |
| `Perkins1992_Genetics_Neurospora-Organism` | Neurospora: The Organism Behind the Molecular Revolution |  |
| `Poeschla2026_NatRevGenet_Haematopoiesis-Genetics` | Genetic influences on haematopoiesis |  |
| `Polly2012_Stacio2012_GeneticsPrimer_LIN-35` | Suppressors, Screens, and Genes: An Educational Primer for LIN-35 and Reverse Genetics in C. elegans | Genetics Primer |
| `Poole2024_Genetics_Celegans-Neurogenesis` | Neurogenesis in Caenorhabditis elegans |  |
| `Pott2015_NatGenet_SuperEnhancers` | What are super-enhancers? |  |
| `Powell1987_Genetics_Dobzhansky-GeneticsAndTheOriginOfSpecies` | "In the Air" — Theodosius Dobzhansky's Genetics and the Origin of Species |  |
| `Preer1997_Genetics_ParameciumGenetics` | Whatever Happened to *Paramecium* Genetics? |  |
| `Pritchard2000_Genetics_STRUCTURE-Novembre2016classic` | Pritchard et al. 2000 and Structure: A 15-Year Retrospective (Genetics Classic Commentary) | Genetics Classic |
| `Provine1991_Genetics_Sturtevant-Drosophila` | Alfred Henry Sturtevant and crosses between Drosophila melanogaster and Drosophila simulans |  |
| `Provine2004_Genetics_ErnstMayr-Speciation` | Ernst Mayr: Genetics and Speciation |  |
| `Reay2021_NatRevGenet_GWAS-DrugRepurposing` | Advancing the use of genome-wide association studies for drug repurposing |  |
| `ReidRoss2011_Genetics_MendelsGenes` | Mendel's Genes: Toward a Full Molecular Characterization |  |
| `Ross2025_NatPlants_Feng2025-NV` | Beyond the Identification of Mendel's Genes |  |
| `Sanderson2022_NatRevMethodsPrimer_MendelianRandomization` | Mendelian randomization |  |
| `Santinha2025_NatRevGenet_InVivo-CRISPRScreening` | Methods and applications of in vivo CRISPR screening |  |
| `Sarkar1991_Genetics_LuriaDelbruck+Haldane` | Haldane's Solution of the Luria-Delbrück Distribution |  |
| `Sarkar1996_Genetics_LancelotHogben` | Lancelot Hogben, 1895–1975 |  |
| `Satzinger2008_NatRevGenet_Boveri-Chromosomes` | Theodor and Marcella Boveri: chromosomes and cytoplasm in heredity and development |  |
| `Schraiber2015_NatRevGenet_MethodsModels-UnravellingHuman` | Methods and Models for Unravelling Human Evolutionary History |  |
| `Schwartz2017_NatRevGenet_EvolutionTumour-PhylogeneticsPrinciples` | The Evolution of Tumour Phylogenetics: Principles and Practice |  |
| `Scotti2025_NatRevGenet_GeneCellTherapy-Sustainability` | Challenges and solutions to the sustainability of gene and cell therapies |  |
| `Shapiro2009_Genetics_Perspective-Ecoli-GenomeEng` | Shapiro 2009 — Natural Genetic Engineering: Retrospective on E. coli Genome Engineering |  |
| `Shapiro2016_PLoSgenet_WhatIsSpeciation` | Shapiro et al. 2016 — What Is Speciation? A Genomic Perspective |  |
| `ShawWhite2022_TrendsGenet_SexChromosome-GeneRegulation` | The evolution of gene regulation on sex chromosomes |  |
| `Shendure2016_Genetics_MassiveParallelGenetics` | Shendure & Fields 2016 — Massively Parallel Genetics |  |
| `Singh2013_Heil2013_GeneticsPrimer_Recombination` | Heil & Noor 2013 — Genetics Primer: Meiotic Recombination | Genetics Primer |
| `Sleister-The Case of the Missing Strawberries-RFLP analysis_1` | Sleister 2014 — The Case of the Missing Strawberries: RFLP Analysis Lesson |  |
| `Smith2016_Genetics_TeachingGenetics` | Smith & Wood 2016 — Teaching Genetics: Past, Present, and Future |  |
| `Smith2025_NatRevGenet_DNAMethylation-Development-Disease` | DNA methylation in mammalian development and disease |  |
| `Smithies1995_Genetics_GelElectrophoresis` | Early days of gel electrophoresis |  |
| `Song2016_Genetics_Li+Stephens+LD` | Na Li and Matthew Stephens on Modeling Linkage Disequilibrium | Genetics Classic |
| `Spitz2012_NatRevGenet_TF-Enhancers` | Transcription factors: from enhancer binding to developmental control |  |
| `Spradling2006_Genetics_LearningGenetics` | Spradling 2006 — Learning the Common Language of Genetics |  |
| `Sreenivasan2025_NatRevGenet_StructuralVariants-3DGenome` | Structural variants in the 3D genome as drivers of disease |  |
| `Stahl1992_Genetics_UnicornsRevisited` | Unicorns Revisited |  |
| `Stahl1995_Genetics_AmberMutants-PhageT4` | The Amber Mutants of Phage T4 |  |
| `Stearns2010_Genetics_Perspective-Pleiotropy` | Stearns 2010 — One Hundred Years of Pleiotropy: A Retrospective |  |
| `Stewart2026_NatGenet_CRISPR-OffTargets` | Measurement and clinical interpretation of CRISPR off-targets |  |
| `Tajima1983_Nielsen2016_GeneticsClassic` | Nielsen 2016 — Fumio Tajima and the Origin of Modern Population Genetics | Genetics Classic |
| `Takahata2007_Genetics_MolecularClock` | Molecular clock: an anti-neo-Darwinian legacy |  |
| `Tautz2026_Genetics_BeyondMendel-GenotypePhenotypeMap` | Beyond Mendel: a call to revisit the genotype–phenotype map through new experimental paradigms |  |
| `Trapnell2009_NatBiotech_ShortReadMapping-primer` | How to Map Billions of Short Reads onto Genomes |  |
| `Tsukamoto2017_Thurtle-Schmidt2018_GeneticsPrimer_CelegansOocyteMaturation` | Thurtle-Schmidt & Lo 2018 — Bioinformat-Eggs: C. elegans Oocyte Maturation Primer | Genetics Primer |
| `Uffelmann2021_NatRevMethodsPrimer_GWAS` | Genome-wide association studies |  |
| `Uller2018_Genetics_DevelopmentalBias` | Uller et al. 2018 — Developmental Bias and Evolution: A Regulatory Network Perspective |  |
| `vanDijk2016_Genetics_MendelsGenetics` | The Full Breadth of Mendel's Genetics |  |
| `vanDijk2022_NatGenet_MendelPerspective` | How Did Mendel Arrive at His Discoveries? |  |
| `Visscher2019_Genetics_Fisher1918GWAS` | From R.A. Fisher's 1918 Paper to GWAS a Century Later |  |
| `Visscher2025_Nature_HeritablePolygenicEditing` | Heritable polygenic editing: the next frontier in genomic medicine? |  |
| `Vogan2025_NatGenet_ResearchHighlight-Pea-MendelTraits` | Mendel's pea traits pinned down (Nature Genetics Research Highlight) |  |
| `Wilkins2009_Genetics_MeiosisFromMitosis` | Wilkins & Holliday 2009 — The Evolution of Meiosis From Mitosis |  |
| `Wolf2016_NatRevGenet_MakingSense-GenomicIslands` | Making Sense of Genomic Islands of Differentiation in Light of Speciation |  |
| `Wright2024_NatGenet_Penetrance-Estimation-Guidance` | Guidance for estimating penetrance of monogenic disease-causing variants in population cohorts |  |
| `Yang2000_TrendsEcolEvol_dNdS` | Statistical methods for detecting molecular adaptation |  |
| `Yanofsky2005_Genetics_TryptophanSynthase-OneGeneOneEnzyme` | The Favorable Features of Tryptophan Synthase for Proving Beadle and Tatum's One Gene–One Enzyme Hypothesis |  |
| `Zhang2025_NatRevGenet_SynonymousMutations` | Functional synonymous mutations and their evolutionary consequences |  |
| `Zinder1992_Genetics_BacterialTransduction` | Forty Years Ago: The Discovery of Bacterial Transduction |  |
| `Zschocke2022_NatRevGenet_Mendel+Dominance` | Zschocke et al. 2022 — Gregor Mendel and the Concepts of Dominance and Recessiveness |  |

> The English/Korean mirror is complete — every note exists in both languages.

## Note Format

Every note follows a fixed structure:

```
YAML frontmatter  (tags, date, type)
Title
Citation (NLM) + DOI
[Original paper / Educational primer wiki-link, for Genetics Primer pairs]
Summary
Significance in Introduction Context
Key References (with DOI links)
Future Research Directions
LLM metadata line
```

Tags follow the convention `[genetics, class, {type}, {lang}]` — e.g. `[genetics, class, article, en]` or `[genetics, class, review, ko]` — with an optional `GeneticsPrimer` or `GeneticsClassic` series tag appended.

## Workflow

Source PDFs in `ko/pdf/` are processed to extract text (PyMuPDF), identified (author/year/journal, verified against PubMed when the byline is missing), renamed to `FirstAuthorYYYY_Journal_Topic`, then an LLM fills the structured note skeleton. English and Korean versions are always created together. Raw extracted text is archived under `extract/` (gitignored source, tracked archive). Duplicate PDFs (same paper, redundant copy) are moved to `ko/pdf/dup/`.

See `AGENT.md` for the full note workflow and agent operation notes.

## Setup

```bash
git clone --recurse-submodules git@github.com:taejoonlab/kb-Genetics.git
```

Open the cloned folder as an Obsidian vault. The `obsidian-git` plugin is pre-configured (auto-sync disabled; commit manually).
