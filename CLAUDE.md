# kb-Genetics — LLM Wiki Obsidian Vault

## Project Overview

Bilingual (en/ko) Obsidian vault for **Genetics** (BME333/BIO333 @ UNIST). Each article has structured notes in both languages, organized under three subdiscipline categories: `population/`, `forward/`, `reverse/`.

## Repository Structure

```
.
├── en/
│   ├── population/   # Population genetics notes (English)
│   ├── forward/      # Forward genetics notes (English)
│   ├── reverse/      # Reverse genetics notes (English)
│   └── others/       # Uncategorized — review and move to above
├── ko/
│   ├── population/   # Population genetics notes (Korean)
│   ├── forward/      # Forward genetics notes (Korean)
│   ├── reverse/      # Reverse genetics notes (Korean)
│   └── others/       # Uncategorized — review and move to above
├── pdf/              # Source PDFs — gitignored, excluded from Obsidian
├── tools/            # Git submodule (git@github.com:taejoonlab/kb-tools.git)
└── .obsidian/        # Obsidian config (tracked, except workspace.json)
```

## Category Definitions

| Folder | Scope |
|--------|-------|
| `population/` | Population genetics: allele frequencies, Hardy-Weinberg, genetic drift, natural selection, phylogenetics, GWAS |
| `forward/` | Forward genetics: phenotype-first screens, mutant isolation, positional cloning, EMS/ENU mutagenesis |
| `reverse/` | Reverse genetics: gene-first approaches, knockouts, RNAi, CRISPR screens, transgenic models |
| `others/` | Uncategorized — initial landing zone; review note and move to the correct category above |

## Note Format

Every article note follows this structure — **YAML frontmatter is required** for GitJournal compatibility:

```markdown
---
tags: [genetics, {category}, {lang}]
date: YYYY-MM-DD
---

# Title

## Citation (NLM)
Author1 AB, Author2 CD, et al. Article title. Journal. Year;Vol(Issue):Pages. doi:10.XXXX/...

**DOI:** [https://doi.org/10.XXXX/...](https://doi.org/10.XXXX/...)

---

## Background

---

## Key Experiment Methods

1. Method one
2. Method two

---

## Results

---

## Perspective

---

*Processed by **{LLM_MODEL}** ({TOOL}) on {YYYY-MM-DD}*
```

### Tag conventions

- `{category}`: `population`, `forward`, or `reverse`
- `{lang}`: `en` or `ko`
- Example: `tags: [genetics, population, en]`

## Filename Convention

`{FirstAuthor}{Year}_{Journal}.md` — same as kb-chondro:

| Type | Filename |
|------|----------|
| Research article | `Lewontin1972_Genetics.md` |
| Review paper | `Nielsen2005_NatRevGenet-review.md` |
| Textbook chapter | `HardyWeinberg_iGenetics.md` |

## Git & Submodule Setup

```bash
# First clone
git clone --recurse-submodules git@github.com:taejoonlab/kb-Genetics.git

# If already cloned without submodules
git submodule update --init --recursive

# Add tools submodule (first-time repo setup only)
git submodule add git@github.com:taejoonlab/kb-tools.git tools
```

- Submodule URL uses **SSH** — ensure SSH key is configured
- `.gitignore` entries: `pdf/`, `.obsidian/workspace.json`, `.obsidian/cache/`, `.obsidian/plugins/obsidian-git/obsidian_askpass.sh`
- `filemode = false` in git config (cross-platform, WSL2-safe)
- Commit message format: `{action}: {lang}/{category} {description}`
  - Examples: `add: en/population Lewontin1972_Genetics`, `edit: ko/reverse Kim2023_Cell`

## PDF Processing Workflow

```bash
# Install dependency
pip install pymupdf

# Step 1: dry-run to check proposed filename
python3 tools/process_pdf.py pdf/paper.pdf --dry-run

# Step 2: verify author/journal from extracted text, then rename manually
mv "pdf/Unknown2024_Unknown.pdf" "pdf/Kim2024_Nature.pdf"

# Step 3: run for real (creates notes/Kim2024_Nature_extracted.txt + MD skeleton)
python3 tools/process_pdf.py pdf/Kim2024_Nature.pdf

# Step 4: have LLM fill the MD skeleton using the extracted text
# Step 5: place final MD in the correct category folder
mv notes/Kim2024_Nature.md en/reverse/Kim2024_Nature.md
```

> ⚠️ Auto-extraction of author/journal is unreliable — always verify with `--dry-run` and correct manually. Never batch-rename without checking for conflicts.

## Obsidian Setup

1. Open the cloned folder as an Obsidian vault
2. Community plugin **obsidian-git** pre-configured; auto-save/push/pull **disabled** (interval 0)
3. `tools/` and `pdf/` excluded from Obsidian file explorer via `userIgnoreFilters` in `.obsidian/app.json`

## GitJournal Compatibility

- YAML frontmatter (`tags`, `date`) on every note — GitJournal uses these for filtering and display
- Prefer standard markdown image syntax over Obsidian embeds (`![[...]]`) when images are referenced
- Wiki-links `[[...]]` for cross-references are supported by both Obsidian and GitJournal
- Keep filenames URL-safe (ASCII only, no spaces)

## AI Agent Rules

1. **Bilingual mirror**: always create/update both `en/{category}/` and `ko/{category}/` for every article
2. Filename: `FirstAuthorYYYY_Journal.md` (research) or `FirstAuthorYYYY_Journal-review.md` (review)
3. Always include YAML frontmatter with correct `tags` and `date`
4. Assign the correct category (`population`, `forward`, or `reverse`) — ask if ambiguous
5. Do **not** modify files under `tools/` — that is a separate submodule repository
6. Do **not** modify `.obsidian/workspace.json` (per-machine state, gitignored)
7. Section order: Title → Citation → Background → Key Experiment Methods → Results → Perspective → LLM metadata line
8. Commit messages: `{action}: {lang}/{category} {description}`
