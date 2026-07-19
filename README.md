# kb-Genetics

A bilingual (English/Korean) knowledge base for **BME333/BIO333 Genetics** at UNIST. Built as an [Obsidian](https://obsidian.md) vault, each note summarises a key paper, review, or historical commentary relevant to the course, structured for quick reference and cross-language study.

## Structure

```
.
├── en/                  # English notes
│   ├── article/         # Research articles (43 notes)
│   ├── review/          # Reviews, perspectives, primers, essays (168 notes)
│   └── (population/ forward/ reverse/ others/  — legacy, empty)
├── ko/                  # Korean notes (bilingual mirror of en/)
│   ├── article/
│   ├── review/
│   └── (legacy category folders)
├── extract/             # Raw text extracted from source PDFs (by date, one entry per paper, 50k-char cap)
├── pdf/                 # Source PDFs — gitignored
│   └── dup/             # Duplicate PDFs moved aside (same paper, redundant copy)
├── tools/               # Processing scripts (git submodule)
├── AGENT.md             # Instructions for AI agents working on this vault
└── CLAUDE.md            # Claude Code project instructions
```

Notes are organised by **type** (`article` / `review`), not subdiscipline. The legacy `population/`, `forward/`, `reverse/`, and `others/` folders remain from an earlier layout and are now empty.

## Note Types

| Folder | Scope |
|--------|-------|
| `article/` | Primary research papers (original experiments, data, results) |
| `review/` | Review articles, perspectives, essays, historical/critical commentaries, and educational primers |

## Special Series Tags

Two educational series from the journal *GENETICS* are cross-referenced and tagged:

- **`GeneticsPrimer`** — *GENETICS* "Educational Primer" articles that review a specific paper for teaching and pose discussion questions. Each primer is wiki-linked to its original paper (`Original paper` ↔ `Educational primer`). 13 primer notes + 10 linked original articles are tagged.
- **`GeneticsClassic`** — tribute/commentary articles honouring a classic paper (e.g. Nielsen on Tajima 1983), without discussion questions.

## Current Notes (211 papers in English, mirrored in Korean)

### Research Articles (43)

| File | Title | Series |
|------|-------|--------|
| `Abbott2016_Genetics_MendelHybridPaper` | Experiments on Plant Hybrids by Gregor Mendel |  |
| `Abrusan2013_Genetics_DeNovoGeneBirth` | De Novo Gene Birth: Origin of New Genes from Noncoding Sequences | Genetics Primer |
| `Andres2013_Genetics_FieldCricket` | Transcriptome Divergence in Field Cricket Accessory Glands: Testing the Seminal Fluid Protein Hypothesis | Genetics Primer |
| `Beach2017_Cell_Aneuploidy-NonGeneticIndividuality` | Aneuploidy Causes Non-genetic Individuality |  |
| `Beye2003_Cell_Honeybee-SexDetermination` | The Gene csd Is the Primary Signal for Sexual Development in the Honeybee and Encodes an SR-Type Protein |  |
| `Bridges1916_Genetics_NonDisjunction-SexChromosome` | Non-Disjunction as Proof of the Chromosome Theory of Heredity |  |
| `Collins2014_Genetics_Meiosis+Corolla` | Corolla Is a Novel Protein That Contributes to the Architecture of the Synaptonemal Complex of Drosophila | Genetics Primer |
| `East1916_Genetics_SizeInheritance` | Studies on Size Inheritance in Nicotiana |  |
| `Efron1996_PNAS_Bootstrap-PhylogeneticTrees` | Bootstrap confidence levels for phylogenetic trees |  |
| `Felsenstein1985_Evolution_Bootstrap-PhylogeneticTrees` | Confidence limits on phylogenies: an approach using the bootstrap |  |
| `Feng2025_Nature_MendelsMissingTraits` | Genomic and Genetic Insights into Mendel's Pea Genes |  |
| `Gempe2009_PLoSBiol_Honeybee-SexDetermination` | Sex Determination in Honeybees: Two Separate Mechanisms Induce and Maintain the Female Pathway |  |
| `Grendler2019_Development_WoundPolyploidy` | Wound-induced polyploidization is driven by Myc and supports tissue repair in the presence of DNA damage |  |
| `Hasselmann2008_Nature_Honeybee-SexDetermination` | Evidence for the Evolutionary Nascence of a Novel Sex Determination Pathway in Honeybees |  |
| `Hekman2019_G3_APtx+Fox` | Anterior Pituitary Transcriptome Suggests Differences in ACTH Release in Tame and Aggressive Foxes | Genetics Primer |
| `Hubby1966_Genetics_PopulationHeterogeneity1` | A Molecular Approach to the Study of Genic Heterozygosity in Natural Populations. I. The Number of Alleles at Different Loci in Drosophila pseudoobscura |  |
| `Jaramillo-Lambert2016_Genetics_top2` | Rapid Identification of Paternal-Effect Lethal Mutations in C. elegans Using Hawaiian SNP Mapping | Genetics Primer |
| `Kankel2020_Genetics_Drosophila-ALS-modifier` | Genome-wide Drosophila Screen for ALS Disease Modifiers | Genetics Primer |
| `Kreplak2019_NatGenet_PeaGenome` | A Reference Genome for Pea Provides Insight into Legume Genome Evolution |  |
| `Kuhl2020_Genetics_dCas9+Ctf19+Recombination` | A dCas9-Based System Identifies a Central Role for Ctf19 in Kinetochore-Derived Suppression of Meiotic Recombination | Genetics Primer |
| `LanderBotstein1989_Genetics_QTL` | Mapping Mendelian Factors Underlying Quantitative Traits Using RFLP Linkage Maps |  |
| `Lawson2018_NatComm_STRUCTRE+tutorial` | A Tutorial on How Not to Over-Interpret STRUCTURE and ADMIXTURE Bar Plots |  |
| `Lewontin1966_Genetics_PopulationHeterogeneity2` | A Molecular Approach to the Study of Genic Heterozygosity in Natural Populations. II. Amount of Variation and Degree of Heterozygosity in Natural Populations of Drosophila pseudoobscura |  |
| `Li2003_Genetics_LD+Modeling` | Modeling Linkage Disequilibrium and Identifying Recombination Hotspots Using Single-Nucleotide Polymorphism Data |  |
| `Lieberman-Aiden2009_Science_HiC-3DGenome` | Comprehensive Mapping of Long-Range Interactions Reveals Folding Principles of the Human Genome |  |
| `LuriaDelbruck1943_Genetics_VirusResistance` | Mutations of Bacteria from Virus Sensitivity to Virus Resistance | Genetics Primer |
| `Nissen2012_Genetics_Honeybee-SexDetermination` | The Am-tra2 Gene Is an Essential Regulator of Female Splice Regulation at Two Levels of the Sex Determination Hierarchy of the Honeybee | Genetics Primer |
| `Nurse1980_Genetics_Wee+Spombe` | Regulatory Genes Controlling Mitosis in the Fission Yeast Schizosaccharomyces pombe |  |
| `Oliver2025_NatGenet_SomaticMutation-CancerIndependent` | Cancer-Independent Somatic Mutation of the Wild-Type NF1 Allele in Normal Tissues in Neurofibromatosis Type 1 |  |
| `Plassais2019_NatComm_DogGenomes+GWAS` | Whole Genome Sequencing of Canids Reveals Genomic Regions under Selection and Variants Influencing Morphology |  |
| `Plassais2022_CurrBiol_DogBodySize-NonCodingVariant` | Natural and Human-Driven Selection of a Single Non-Coding Body Size Variant in Ancient and Modern Canids |  |
| `Pritchard2000_Genetics_STRUCTURE` | Inference of Population Structure Using Multilocus Genotype Data |  |
| `Quinodoz2021_Cell_RNA-SpatialCompartments` | RNA promotes the formation of spatial compartments in the nucleus |  |
| `Rimbault2013_GenomeRes_DogSizeReduction` | Derived Variants at Six Genes Explain Nearly Half of Size Reduction in Dog Breeds |  |
| `Sakaue2021_NatGenet_BiobankJapan` | A Cross-Population Atlas of Genetic Associations for 220 Human Phenotypes |  |
| `Shopland2006_JCB_ChromosomeFolding` | Folding and organization of a contiguous chromosome region according to the gene distribution pattern in primary genomic sequence |  |
| `Sutton1903_BiolBull_Chromosomes-Heredity` | The Chromosomes in Heredity |  |
| `Tsukamoto2017_Genetics_CelegansOocyeMaturation` | LIN-41 and OMA Ribonucleoprotein Complexes Mediate a Translational Repression-to-Activation Switch Controlling Oocyte Meiotic Maturation and the Oocyte-to-Embryo Transition in Caenorhabditis elegans | Genetics Primer |
| `Weiss2018_PLoSGenet_LastUniversal-CommonAncestor` | The Last Universal Common Ancestor Between Ancient Earth Chemistry and the Onset of Genetics |  |
| `Wooding2006_Genetics_PhenylThioCarbamide` | Phenylthiocarbamide: A 75-Year Adventure in Genetics and Natural Selection |  |
| `WTCCC2007_Nature` | Genome-wide association study of 14,000 cases of seven common diseases and 3,000 shared controls |  |
| `Yang2010_MBE_BranchSiteTest-PositiveSelection` | Statistical Properties of the Branch-Site Test of Positive Selection |  |
| `Yang2022_NatGenet_PeaGenome2` | Improved Pea Reference Genome and Pan-Genome Highlight Genomic Features and Evolutionary Characteristics |  |

### Reviews, Perspectives, Primers & Essays (168)

| File | Title | Series |
|------|-------|--------|
| `Abbott2017_ProcRSocB_SexChromosome-Evolution` | Sex chromosome evolution: historical insights and future perspectives |  |
| `Abrusan2013_Genetics_DeNovoGeneBirth-Frietze2014primer` | Educational Primer: De Novo Gene Birth (Frietze & Leatherman 2014) | Genetics Primer |
| `Allen2003_Endeavour_Mendel` | Mendel's Legacy: Revisionist History and the Misinterpretation of the Unit-Character Concept |  |
| `Allison2004_Genetics_GeneticsMedicine-TwoLessons` | Two Lessons From the Interface of Genetics and Medicine |  |
| `Andres2013_Genetics_FieldCricket-Wittkopp2013primer` | Educational Primer for Field Cricket Speciation Study (Wittkopp 2013) | Genetics Primer |
| `Arendt2016_NatRevGenet_OriginEvolution-CellTypes` | The origin and evolution of cell types |  |
| `Bachtrog2013_NatRevGenet_Y-chromosomeEvolution` | Y-chromosome evolution: emerging insights into processes of Y-chromosome degeneration |  |
| `Bachtrog2014_PLoSBiol_SexDetermination-ManyWays` | Sex determination: why so many ways of doing it? |  |
| `Badano2002_NatRevGenet_BeyondMendel` | Beyond Mendel: Oligogenic Inheritance in Human Genetic Disease |  |
| `Baker2009_Genetics-Perspective-FlyLeg` | Drosophila Leg Proximodistal Patterning: From Polar Coordinate Model to Boundary Model (Baker 2011) |  |
| `Barton2002_NatRevGenet_QTL` | Understanding Quantitative Genetic Variation |  |
| `Benson2001_NatRevGenet_Morgan-Chromosome` | T. H. Morgan's Resistance to the Chromosome Theory |  |
| `BenTabou2006_SciSTKE_SeaUrchin-GRN` | Deciphering the Underlying Mechanism of Specification and Differentiation: The Sea Urchin Gene Regulatory Network |  |
| `Bonini2017_Genetics_ModelOrganism` | The Sustained Impact of Model Organisms—in Genetics and Epigenetics |  |
| `Brenner2009_Genetics_Celegans` | In the Beginning Was the Worm . . . |  |
| `Campbell1993_Genetics_ProphageInsertion` | Thirty Years Ago in Genetics: Prophage Insertion Into Bacterial Chromosomes |  |
| `Capel2017_NatRevGenet_VertebrateSexDetermination` | Vertebrate sex determination: evolutionary plasticity of a fundamental switch |  |
| `Cavalli-Sforza2005_NatRevGenet_HGDP` | The Human Genome Diversity Project: past, present and future |  |
| `Ceballos2018_NatRevGenet_RunsOfHomozygosity` | Runs of homozygosity: windows into population history and trait architecture |  |
| `Charlesworth2009_Genetics_Perspective-DarwinGenetics` | Darwin and Genetics |  |
| `Charlesworth2009_NatRevGenet_EffectivePopulation-SizePatterns` | Effective population size and patterns of molecular evolution and variation |  |
| `Charlesworth2022_NatGenet_MendelPerspectives` | From Mendel to Quantitative Genetics in the Genome Era: The Scientific Legacy of W. G. Hill |  |
| `Cobb2006_NatRevGenet_HeredityBeforeGenetics` | Heredity before Genetics: A History |  |
| `Collins2014_Ables2014_GeneticsPrimer_Meiosis+Corolla` | Drosophila Oocytes as a Model for Understanding Meiosis: An Educational Primer | Genetics Primer |
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
| `Doolittle2016_PLoSGenet_TreeOfLife` | What Is the Tree of Life? |  |
| `Dove1987_Genetics_MouseMolecularGenetics` | Molecular Genetics of *Mus musculus*: Point Mutagenesis and Millimorgans |  |
| `Dove1988_Genetics_YearOfTheFly` | The Year of the Fly |  |
| `Dove2016_Genetics_PerspectivesSeries-Tapestry` | Weaving a Tapestry from Threads Spun by Geneticists: The Series Perspectives on Genetics, 1987–2008 |  |
| `Dugatkin2007_Genetics_InclusiveFitness-DarwinHamilton` | Inclusive Fitness Theory from Darwin to Hamilton |  |
| `DunnCharles1937_Schimenti2016_GeneticsClassic_MouseQTL` | L. C. Dunn and Donald Charles on Quantitative Traits in the Mouse |  |
| `East1916_Turelli2016_GeneticsClassic` | Edward East on the Mendelian Basis of Quantitative Trait Variation |  |
| `Eddy2004_NatureBiotechPrimer_BLOSUM62` | Where Did the BLOSUM62 Alignment Score Matrix Come From? |  |
| `Eddy2004_NatureBiotechPrimer_DynamicProgramming` | What Is Dynamic Programming? |  |
| `Edwards2007_Genetics_Fisher-RhesusBloodGroup` | R. A. Fisher's 1943 Unravelling of the Rhesus Blood-Group System |  |
| `Edwards2008_Genetics_HWE` | G. H. Hardy (1908) and Hardy–Weinberg Equilibrium |  |
| `Edwards2009_Genetics_Perspectives-EvolutionaryTreeStatistics` | Statistical Methods for Evolutionary Trees |  |
| `Emdin2017_JAMA_MendelianRandomization` | Mendelian Randomization |  |
| `Fairbank2016_Genetics_Darwin+Mendel` | Darwin's Influence on Mendel: Evidence from a New Translation of Mendel's Paper |  |
| `Falk1993_Genetics_Morgan-GeneticControlDevelopment` | Morgan's Hypothesis of the Genetic Control of Development |  |
| `Falk2010_Genetics_Mutagenesis-ResearchStrategy` | Mutagenesis as a Genetic Research Strategy |  |
| `Feng2025_Nature_MendelsMissingTraits-Briefing` | Answers to a 160-Year-Old Riddle about the Genetics of Mendel's Pea Traits (Research Briefing) |  |
| `Feng2025_Nature_MendelsMissingTraits-NV` | Century-Old Genetics Mystery of Mendel's Peas Finally Solved (News & Views) |  |
| `Fischer2007_Genetics_MaxDelbruck` | Max Delbrück |  |
| `Fitzgerald2019_PLoSgenet_WhatIsMutation` | What Is Mutation? Making Sense of Random and Non-Random Mutation |  |
| `Furman2020_GBE_SexChromosome-ManyExceptions` | Sex chromosome evolution: so many exceptions to the rules |  |
| `Garen1992_Genetics_Homunculus` | Looking for the Homunculus in Drosophila |  |
| `Gartler2006_NatRevGenet_HumanChromosomeNumber` | The chromosome number in humans: a brief history |  |
| `GeneDosage_Wolfner2016_Genetics_ClassicLindseySandler` | Lindsley and Sandler et al. on Gene Dosage and the Drosophila Genome |  |
| `GeneticsClassic_Meuwissen_GenomicSelection` | Meuwissen et al. on Genomic Selection |  |
| `GeneticsClassic_SydneyBrennder_Celegans` | Sydney Brenner on the Genetics of Caenorhabditis elegans |  |
| `Gilbert2012_MolEcol_STRUCTUREopinion` | Recommendations for Utilizing and Reporting Population Genetic Analyses: The Reproducibility of Genetic Clustering Using the Program STRUCTURE |  |
| `Goldman2016_PLoSgenet_WhatIsGenome` | What Is a Genome? |  |
| `Goodson-Gregg2009_Genetics_AmesTest` | Reinventing the Ames Test as a Quantitative Lab That Connects Classical and Molecular Genetics |  |
| `Gould2009_Genetics_ComparativeGenetics-BreastCancer` | The Utility of Comparative Genetics to Inform Breast Cancer Prevention Strategies |  |
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
| `Kankel2020_Genetics_Drosophila-ALS-modifier.Banerjee2020primer` | Using Drosophila melanogaster To Discover Human Disease Genes: An Educational Primer to Accompany Kankel et al. (2020) | Genetics Primer |
| `Keightley1996_Genetics_Dominance-Recessivity` | A Metabolic Basis for Dominance and Recessivity |  |
| `Kerfeld2011_PLoSBiol_BLAST` | Using BLAST to Teach "E-value-tionary" Concepts |  |
| `Klein2020_ChromosomeRes_DNAAccessibility-Methods` | Genomic methods in profiling DNA accessibility and factor localization |  |
| `Kottler1979_AnnSci_deVries-MendelRediscovery` | Hugo de Vries and the Rediscovery of Mendel's Laws |  |
| `Kuhl2020_Genetics_dCas9+Ctf19+Recombination-McVey2022primer` | Beyond Editing: CRISPR/Cas9 for Protein Localization Studies — An Educational Primer | Genetics Primer |
| `LanderBotstein1989_Churchill2016_GeneticsClassic` | Eric Lander and David Botstein on Mapping Quantitative Traits |  |
| `Laurie1997_Genetics_Haldane+Heterogametic` | The Weaker Sex Is Heterogametic: 75 Years of HALDANE'S Rule |  |
| `LD_Song2016_GeneticsClassic_LiStephens` | Na Li and Matthew Stephens on Modeling Linkage Disequilibrium |  |
| `Lederberg1987_Genetics_EcoliRecombination` | Gene recombination and linked segregations in Escherichia coli |  |
| `Lederberg1994_Genetics_AveryMacLeodMcCarty` | The Transformation of Genetics by DNA: An Anniversary Celebration of Avery, MacLeod and McCarty (1944) |  |
| `Lenski2017_PLoSgenet_WhatIsAdaptation` | What Is Adaptation by Natural Selection? Perspectives of an Experimental Microbiologist |  |
| `Lewontin1997_Genetics_Dobzhansky-StillRelevant` | Dobzhansky's Genetics and the Origin of Species: Is It Still Relevant? |  |
| `LuriaDelbruck1943_Meneely2016_GeneticsClassic` | Pick Your Poisson: An Educational Primer for Luria and Delbrück's Classic Paper | Genetics Primer |
| `Makani2022_NatRevGenet_MendelianDisorder` | From Mendel to a Mendelian Disorder: Towards a Cure for Sickle Cell Disease |  |
| `Mank2017_NatRevGenet_SexualConflict` | Population genetics of sexual conflict in the genomic era |  |
| `Matharu2015_PLoSGenet_TAD-ChromatinLoops` | Minor Loops in Major Folds: Enhancer-Promoter Looping, Chromatin Restructuring, and Their Association with Transcriptional Regulation and Disease |  |
| `Mauricio2001_NatRevGenet_QTL` | Mapping Quantitative Trait Loci in Plants: Uses and Caveats for Evolutionary Biology |  |
| `McClintock1953_Halpene2016_GeneticsClassic` | Barbara McClintock on Defining the Unstable Genome |  |
| `Meaburn2007_Nature_ChromosomeTerritories` | Chromosome territories |  |
| `Miller1997_Genetics_ChromosomeChangesCellDivision` | Chromosome Changes in Cell Differentiation |  |
| `Misteli2020_Cell_3Dgenome-SelfOrganizing` | The Self-Organizing Genome: Principles of Genome Architecture and Function |  |
| `Monaghan1986_JHeredity_Tschermak-2` | Tschermak: A Non-Discoverer of Mendelism. II. A Critique |  |
| `MonaghanCorcos1984_JHeredity_MendelsLaw` | On the Origins of the Mendelian Laws |  |
| `Morton1995_Genetics_LODs` | LODs Past and Present |  |
| `Murray2016_Genetics_Nurse+Thuriaux+Wee+CellCycle` | Paul Nurse and Pierre Thuriaux on wee Mutants and Cell Cycle Control |  |
| `Nasmyth2022_NatRevGenet_Mendel` | The Magic and Meaning of Mendel's Miracle |  |
| `NeutralDiversity_Wright2016_GeneticsClassic_Charlesworth` | Charlesworth et al. on Background Selection and Neutral Diversity |  |
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
| `Polly2012_Stacio2012_GeneticsPrimer_LIN-35` | Suppressors, Screens, and Genes: An Educational Primer for LIN-35 and Reverse Genetics in C. elegans | Genetics Primer |
| `Pott2015_NatGenet_SuperEnhancers` | What are super-enhancers? |  |
| `Powell1987_Genetics_Dobzhansky-GeneticsAndTheOriginOfSpecies` | "In the Air" — Theodosius Dobzhansky's Genetics and the Origin of Species |  |
| `Preer1997_Genetics_ParameciumGenetics` | Whatever Happened to *Paramecium* Genetics? |  |
| `Provine1991_Genetics_Sturtevant-Drosophila` | Alfred Henry Sturtevant and crosses between Drosophila melanogaster and Drosophila simulans |  |
| `Provine2004_Genetics_ErnstMayr-Speciation` | Ernst Mayr: Genetics and Speciation |  |
| `Reay2021_NatRevGenet_GWAS-DrugRepurposing` | Advancing the use of genome-wide association studies for drug repurposing |  |
| `ReidRoss2011_Genetics_MendelsGenes` | Mendel's Genes: Toward a Full Molecular Characterization |  |
| `Ross2025_NatPlants_Feng2025-NV` | Beyond the Identification of Mendel's Genes |  |
| `Sanderson2022_NatRevMethodsPrimer_MendelianRandomization` | Mendelian randomization |  |
| `Sarkar1991_Genetics_LuriaDelbruck+Haldane` | Haldane's Solution of the Luria-Delbrück Distribution |  |
| `Sarkar1996_Genetics_LancelotHogben` | Lancelot Hogben, 1895–1975 |  |
| `Satzinger2008_NatRevGenet_Boveri-Chromosomes` | Theodor and Marcella Boveri: chromosomes and cytoplasm in heredity and development |  |
| `Schraiber2015_NatRevGenet_MethodsModels-UnravellingHuman` | Methods and Models for Unravelling Human Evolutionary History |  |
| `Schwartz2017_NatRevGenet_EvolutionTumour-PhylogeneticsPrinciples` | The Evolution of Tumour Phylogenetics: Principles and Practice |  |
| `Shapiro2009_Genetics_Perspective-Ecoli-GenomeEng` | Shapiro 2009 — Natural Genetic Engineering: Retrospective on E. coli Genome Engineering |  |
| `Shapiro2016_PLoSgenet_WhatIsSpeciation` | Shapiro et al. 2016 — What Is Speciation? A Genomic Perspective |  |
| `ShawWhite2022_TrendsGenet_SexChromosome-GeneRegulation` | The evolution of gene regulation on sex chromosomes |  |
| `Shendure2016_Genetics_MassiveParallelGenetics` | Shendure & Fields 2016 — Massively Parallel Genetics |  |
| `Simpson2019_Genetics_FearAndFoxes-Primer` | Simpson 2020 — Fear and Foxes: An Educational Primer on Behavioral Genetics | Genetics Primer |
| `Singh2013_Heil2013_GeneticsPrimer_Recombination` | Heil & Noor 2013 — Genetics Primer: Meiotic Recombination | Genetics Primer |
| `Sleister-The Case of the Missing Strawberries-RFLP analysis_1` | Sleister 2014 — The Case of the Missing Strawberries: RFLP Analysis Lesson |  |
| `Smith2016_Genetics_TeachingGenetics` | Smith & Wood 2016 — Teaching Genetics: Past, Present, and Future |  |
| `Smithies1995_Genetics_GelElectrophoresis` | Early days of gel electrophoresis |  |
| `Song2016_Genetics_Li+Stephens+LD` | Na Li and Matthew Stephens on Modeling Linkage Disequilibrium |  |
| `Spitz2012_NatRevGenet_TF-Enhancers` | Transcription factors: from enhancer binding to developmental control |  |
| `Spradling2006_Genetics_LearningGenetics` | Spradling 2006 — Learning the Common Language of Genetics |  |
| `Stahl1992_Genetics_UnicornsRevisited` | Unicorns Revisited |  |
| `Stahl1995_Genetics_AmberMutants-PhageT4` | The Amber Mutants of Phage T4 |  |
| `Stearns2010_Genetics_Perspective-Pleiotropy` | Stearns 2010 — One Hundred Years of Pleiotropy: A Retrospective |  |
| `Tajima1983_Nielsen2016_GeneticsClassic` | Nielsen 2016 — Fumio Tajima and the Origin of Modern Population Genetics | Genetics Classic |
| `Takahata2007_Genetics_MolecularClock` | Molecular clock: an anti-neo-Darwinian legacy |  |
| `Trapnell2009_NatBiotech_ShortReadMapping-primer` | How to Map Billions of Short Reads onto Genomes |  |
| `Tsukamoto2017_Thurtle-Schmidt2018_GeneticsPrimer_CelegansOocyteMaturation` | Thurtle-Schmidt & Lo 2018 — Bioinformat-Eggs: C. elegans Oocyte Maturation Primer | Genetics Primer |
| `Uffelmann2021_NatRevMethodsPrimer_GWAS` | Genome-wide association studies |  |
| `Uller2018_Genetics_DevelopmentalBias` | Uller et al. 2018 — Developmental Bias and Evolution: A Regulatory Network Perspective |  |
| `vanDijk2016_Genetics_MendelsGenetics` | The Full Breadth of Mendel's Genetics |  |
| `vanDijk2022_NatGenet_MendelPerspective` | How Did Mendel Arrive at His Discoveries? |  |
| `Visscher2019_Genetics_Fisher1918GWAS` | From R.A. Fisher's 1918 Paper to GWAS a Century Later |  |
| `Wilkins2009_Genetics_MeiosisFromMitosis` | Wilkins & Holliday 2009 — The Evolution of Meiosis From Mitosis |  |
| `Wolf2016_NatRevGenet_MakingSense-GenomicIslands` | Making Sense of Genomic Islands of Differentiation in Light of Speciation |  |
| `Yang2000_TrendsEcolEvol_dNdS` | Statistical methods for detecting molecular adaptation |  |
| `Yanofsky2005_Genetics_TryptophanSynthase-OneGeneOneEnzyme` | The Favorable Features of Tryptophan Synthase for Proving Beadle and Tatum's One Gene–One Enzyme Hypothesis |  |
| `Zinder1992_Genetics_BacterialTransduction` | Forty Years Ago: The Discovery of Bacterial Transduction |  |
| `Zschocke2022_NatRevGenet_Mendel+Dominance` | Zschocke et al. 2022 — Gregor Mendel and the Concepts of Dominance and Recessiveness |  |

### Korean-only notes (English pending: 4)

The bilingual mirror is complete except for these papers, which currently have a Korean note but no English counterpart:

- `Barbash2010_Genetics_DrosophilaHybrid`
- `Dobzhansky1936_Coyne2016_GeneticsClassic`
- `Hardy1908_Science_HardyWeinberg`
- `Pritchard2000_Genetics_STRUCTURE-Novembre2016classic`

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
