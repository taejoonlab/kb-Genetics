# kb-Genetics

A bilingual (English/Korean) knowledge base for **BME333/BIO333 Genetics** at UNIST. Built as an [Obsidian](https://obsidian.md) vault, each article note summarises a key paper or review relevant to the course, structured for quick reference and cross-language study.

## Structure

```
.
├── en/                  # English notes
│   ├── population/      # Population genetics
│   ├── forward/         # Forward genetics
│   ├── reverse/         # Reverse genetics
│   └── others/          # Uncategorised / ambiguous
├── ko/                  # Korean notes (bilingual mirror of en/)
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

## Categories

| Folder | Scope |
|--------|-------|
| `population/` | Allele frequencies, Hardy-Weinberg, genetic drift, selection, phylogenetics, GWAS |
| `forward/` | Phenotype-first screens, mutant isolation, positional cloning, EMS/ENU mutagenesis |
| `reverse/` | Gene-first approaches, knockouts, RNAi, CRISPR, transgenic models, TE biology, tumour evolution |
| `others/` | Does not fit cleanly into one category (e.g., polyploidy) |

## Current Notes

### Population Genetics (6)

| File | Topic |
|------|-------|
| `Ceballos2018_NatRevGenet_RunsOfHomozygosity` | Runs of homozygosity as a measure of inbreeding and autozygosity |
| `Charlesworth2009_NatRevGenet_EffectivePopulation-SizePatterns` | Effective population size — patterns and evolutionary consequences |
| `Hurst2009_NatRevGenet_GeneticsUnderstanding-Selection` | Genetics and understanding the effects of natural selection |
| `Schraiber2015_NatRevGenet_MethodsModels-UnravellingHuman` | Methods and models for unravelling human evolutionary history |
| `Weiss2018_PLoSGenet_LastUniversal-CommonAncestor` | Last Universal Common Ancestor (LUCA) and the onset of genetics |
| `Wolf2016_NatRevGenet_MakingSense-GenomicIslands` | Genomic islands of differentiation and speciation |

### Reverse Genetics (3)

| File | Topic |
|------|-------|
| `Arendt2016_NatRevGenet_OriginEvolution-CellTypes` | Origin and evolution of cell types; core regulatory complexes |
| `Payer2019_NatRevGenet_TE-Disease` | Transposable elements in human genetic disease |
| `Schwartz2017_NatRevGenet_EvolutionTumour-PhylogeneticsPrinciples` | Tumour phylogenetics — principles and practice |

### Others (1)

| File | Topic |
|------|-------|
| `Comai2005_NatRevGenet_AdvantagesDisadvantages-BeingPolyploid` | Advantages and disadvantages of polyploidy |

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

Tags follow the convention `[genetics, {type}, {category}, {lang}]` — e.g., `[genetics, class, population, en]`.

## Workflow

Source PDFs are processed with `tools/process_pdf.py` to extract text, then an LLM fills the structured note skeleton. Both English and Korean versions are always created together.

```bash
# Extract text from a PDF
python3 tools/process_pdf.py pdf/Author2024_Journal.pdf

# Place the finished note in the correct category
mv notes/Author2024_Journal.md en/population/Author2024_Journal.md
```

See `AGENT.md` for the full CLASS note workflow and category decision rules.

## Setup

```bash
git clone --recurse-submodules git@github.com:taejoonlab/kb-Genetics.git
```

Open the cloned folder as an Obsidian vault. The `obsidian-git` plugin is pre-configured (auto-sync disabled; commit manually).
