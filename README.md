# kb-Genetics

A bilingual (English/Korean) knowledge base for **BME333/BIO333 Genetics** at UNIST. Built as an [Obsidian](https://obsidian.md) vault, each article note summarises a key paper or review relevant to the course, structured for quick reference and cross-language study.

## Structure

```
.
├── en/                  # English notes
│   ├── article/         # Research articles (11 notes)
│   ├── review/          # Reviews, perspectives, essays (33 notes)
│   ├── population/      # Reserved for future use (.gitkeep)
│   ├── forward/         # Reserved for future use (.gitkeep)
│   ├── reverse/         # Reserved for future use (.gitkeep)
│   └── others/          # Reserved for future use (.gitkeep)
├── ko/                  # Korean notes (bilingual mirror of en/)
│   ├── article/
│   ├── review/
│   ├── population/
│   ├── forward/
│   ├── reverse/
│   └── others/
├── extract/             # Raw text extracted from source PDFs (by date)
├── pdf/                 # Source PDFs — gitignored
├── tools/               # Processing scripts (git submodule)
├── AGENT.md             # Instructions for AI agents working on this vault
└── CLAUDE.md            # Claude Code project instructions
```

## Note Types

| Folder | Scope |
|--------|-------|
| `article/` | Primary research papers (original experiments, data, results) |
| `review/` | Review articles, perspectives, essays, and historical accounts |

The `population/`, `forward/`, `reverse/`, and `others/` folders are kept empty (`.gitkeep`) as reserved space for future subdiscipline-specific content.

## Current Notes (44 papers × 2 languages = 88 notes)

### Research Articles (11)

| File | Topic |
|------|-------|
| `Beach2017_Cell_Aneuploidy-NonGeneticIndividuality` | Aneuploidy causes non-genetic individuality |
| `Bridges1916_Genetics_NonDisjunction-SexChromosome` | Non-disjunction as proof of the chromosome theory of heredity |
| `Efron1996_PNAS_Bootstrap-PhylogeneticTrees` | Bootstrap confidence levels for phylogenetic trees |
| `Felsenstein1985_Evolution_Bootstrap-PhylogeneticTrees` | Confidence limits on phylogenies: the bootstrap approach |
| `Grendler2019_Development_WoundPolyploidy` | Wound-induced polyploidization in Drosophila epithelium |
| `Lieberman-Aiden2009_Science_HiC-3DGenome` | Hi-C: comprehensive mapping of long-range chromatin interactions |
| `Quinodoz2021_Cell_RNA-SpatialCompartments` | RNA promotes the formation of spatial compartments in the nucleus |
| `Shopland2006_JCB_ChromosomeFolding` | Folding and organization of a contiguous chromosome region |
| `Sutton1903_BiolBull_Chromosomes-Heredity` | The chromosomes in heredity (Sutton 1903) |
| `Weiss2018_PLoSGenet_LastUniversal-CommonAncestor` | Last Universal Common Ancestor (LUCA) and the onset of genetics |
| `Yang2010_MBE_BranchSiteTest-PositiveSelection` | Statistical properties of the branch-site test of positive selection |

### Reviews, Perspectives & Essays (33)

| File | Topic |
|------|-------|
| `Abbott2017_ProcRSocB_SexChromosome-Evolution` | Sex chromosome evolution: historical insights and future perspectives |
| `Arendt2016_NatRevGenet_OriginEvolution-CellTypes` | Origin and evolution of cell types; core regulatory complexes (CoRC) |
| `Bachtrog2013_NatRevGenet_Y-chromosomeEvolution` | Y-chromosome degeneration — emerging insights |
| `Bachtrog2014_PLoSBiol_SexDetermination-ManyWays` | Sex determination: why so many ways of doing it? |
| `BenTabou2006_SciSTKE_SeaUrchin-GRN` | Sea urchin endomesoderm gene regulatory network |
| `Benson2001_NatRevGenet_Morgan-Chromosome` | T. H. Morgan's resistance to the chromosome theory |
| `Capel2017_NatRevGenet_VertebrateSexDetermination` | Vertebrate sex determination — evolutionary plasticity |
| `Ceballos2018_NatRevGenet_RunsOfHomozygosity` | Runs of homozygosity as a measure of inbreeding and autozygosity |
| `Charlesworth2009_NatRevGenet_EffectivePopulation-SizePatterns` | Effective population size — patterns and evolutionary consequences |
| `Comai2005_NatRevGenet_AdvantagesDisadvantages-BeingPolyploid` | Advantages and disadvantages of polyploidy |
| `Dernburg2001_JCB_HolocentricChromosomes` | Holocentric chromosomes — structure and function |
| `Doolittle2016_PLoSGenet_TreeOfLife` | What is the Tree of Life? (LGT and reticulate evolution) |
| `Furman2020_GBE_SexChromosome-ManyExceptions` | Sex chromosome evolution: so many exceptions to the rules |
| `Gartler2006_NatRevGenet_HumanChromosomeNumber` | The chromosome number in humans: a brief history |
| `Graves2015_NatRevGenet_SexChromosome-Evolution` | Evolution of vertebrate sex chromosomes and dosage compensation |
| `Harman2005_NatRevGenet_Darlington-Cytology` | Cyril Dean Darlington: the man who 'invented' the chromosome |
| `Hey2004_PLoSBiol_RecombinationHotspots` | What are recombination hotspots? |
| `Hurst2009_NatRevGenet_GeneticsUnderstanding-Selection` | Genetics and understanding the effects of natural selection |
| `Klein2020_ChromosomeRes_DNAAccessibility-Methods` | Genomic methods for profiling chromatin accessibility |
| `Mank2017_NatRevGenet_SexualConflict` | Population genetics of sexual conflict in the genomic era |
| `Matharu2015_PLoSGenet_TAD-ChromatinLoops` | Minor loops in major folds — enhancer-promoter looping and TADs |
| `Meaburn2007_Nature_ChromosomeTerritories` | Chromosome territories |
| `Misteli2020_Cell_3Dgenome-SelfOrganizing` | The self-organizing genome: principles of genome architecture |
| `Paigen2010_NatRevGenet_RecombinationHotspots-Mammals` | Mammalian recombination hot spots: properties, control and evolution |
| `Payer2019_NatRevGenet_TE-Disease` | Transposable elements in human genetic disease |
| `Pott2015_NatGenet_SuperEnhancers` | What are super-enhancers? (critical perspective) |
| `Satzinger2008_NatRevGenet_Boveri-Chromosomes` | Theodor and Marcella Boveri: chromosomes in heredity and development |
| `Schraiber2015_NatRevGenet_MethodsModels-UnravellingHuman` | Methods and models for unravelling human evolutionary history |
| `Schwartz2017_NatRevGenet_EvolutionTumour-PhylogeneticsPrinciples` | Tumour phylogenetics — principles and practice |
| `ShawWhite2022_TrendsGenet_SexChromosome-GeneRegulation` | The evolution of gene regulation on sex chromosomes |
| `Spitz2012_NatRevGenet_TF-Enhancers` | Transcription factors: from enhancer binding to developmental control |
| `Wolf2016_NatRevGenet_MakingSense-GenomicIslands` | Genomic islands of differentiation and speciation |
| `Yang2000_TrendsEcolEvol_dNdS` | Statistical methods for detecting molecular adaptation (dN/dS) |

## Note Format

Every note follows a fixed structure:

```
YAML frontmatter  (tags, date, type)
Title
Citation (NLM) + DOI
Summary
Significance in Introduction Context
Key References (with DOI links)
Future Research Directions
LLM metadata line
```

Tags follow the convention `[genetics, class, {type}, {lang}]` — e.g., `[genetics, class, article, en]` or `[genetics, class, review, ko]`.

## Workflow

Source PDFs are processed with `tools/process_pdf_class.py` to extract text, then an LLM fills the structured note skeleton. Both English and Korean versions are always created together.

```bash
# Extract text and create skeleton (CLASS format)
python3 tools/process_pdf_class.py ko/pdf/Author2024_Journal.pdf --dry-run
python3 tools/process_pdf_class.py ko/pdf/Author2024_Journal.pdf

# Place the finished note in the correct type folder
mv notes/Author2024_Journal.md en/review/Author2024_Journal.md
```

See `AGENT.md` for the full CLASS note workflow and agent operation notes.

## Setup

```bash
git clone --recurse-submodules git@github.com:taejoonlab/kb-Genetics.git
```

Open the cloned folder as an Obsidian vault. The `obsidian-git` plugin is pre-configured (auto-sync disabled; commit manually).
