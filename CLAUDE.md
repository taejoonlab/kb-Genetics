# kb-Genetics — LLM Wiki Obsidian Vault

## Project Overview

Bilingual (en/ko) Obsidian vault for **Genetics** (BME333/BIO333 @ UNIST). Each paper has structured study notes in both languages, organized by **note type** (`article/` for research papers, `review/` for reviews, perspectives, historical/critical commentaries, and educational primers).

> The vault was restructured (2026-07) from subdiscipline categories (`population/`, `forward/`, `reverse/`, `others/`) to the type-based `article/` `review/` layout. The old category folders have been removed.

## Repository Structure

```
.
├── en/
│   ├── article/      # Research articles (English)
│   └── review/       # Reviews / perspectives / primers / commentaries (English)
├── ko/
│   ├── article/      # Research articles (Korean — bilingual mirror)
│   └── review/       # Reviews etc. (Korean)
├── lectures/         # Course lecture material — textbook references (basic info + ToC)
├── extract/          # Raw extracted PDF text, archived by date (tracked; 50k-char cap per paper)
├── pdf/              # Source PDFs — gitignored (note: actual PDFs live in ko/pdf/)
│   └── dup/          # Duplicate PDFs moved aside (same paper, redundant copy)
├── tools/            # Git submodule (git@github.com:taejoonlab/kb-tools.git)
└── .obsidian/        # Obsidian config (tracked, except workspace.json)
```

## Note Types

| Folder | Scope |
|--------|-------|
| `article/` | Primary research papers (original experiments, data, results) |
| `review/`  | Review articles, perspectives, essays, historical/critical commentaries (e.g. *GENETICS* "Perspectives"), and educational primers |

Assign type by the paper itself; ask only if genuinely ambiguous. Do **not** re-introduce the legacy subdiscipline folders.

## Note Format

Notes use the **CLASS study-note format** (not a generic Background/Methods/Results template). **YAML frontmatter is required** for GitJournal.

```markdown
---
tags: [genetics, class, {type}, {lang}]
date: YYYY-MM-DD
type: class
---

# Title

## Citation (NLM)
Author1 AB, Author2 CD, et al. Article title. Journal. Year;Vol(Issue):Pages. doi:10.XXXX/...

**DOI:** [https://doi.org/10.XXXX/...](https://doi.org/10.XXXX/...)

---

## Summary

{Substantive, accurate multi-paragraph summary grounded in the paper's actual content.}

---

## Significance in Introduction Context

- {why it matters for an introductory genetics course; what concept it illustrates}

---

## Key References

1. **Author (Year)** — work — one-line relevance

---

## Future Research Directions

- {open questions / modern connections}

---

*Processed by **{LLM_MODEL}** ({TOOL}) on {YYYY-MM-DD}*
```

Use `Powell1987_Genetics_Dobzhansky-GeneticsAndTheOriginOfSpecies.md` as the canonical template example.

### Tag conventions

- Base tags: `[genetics, class, {type}, {lang}]` where `{type}` = `article` or `review`, `{lang}` = `en` or `ko`
- Example: `tags: [genetics, class, review, en]`
- **Series tags** (append when applicable):
  - `GeneticsPrimer` — *GENETICS* "Educational Primer" articles that review a specific paper for teaching **and pose discussion questions**. Tag BOTH the primer note and its original paper, and cross-link them (see below).
  - `GeneticsClassic` — tribute/commentary honouring a classic paper, **without** discussion questions (e.g. Nielsen 2016 on Tajima 1983).

### Cross-linking Genetics Primer pairs

When both the primer and its original paper have notes, add language-consistent, path-qualified wiki-links right after the `**DOI:**` line:

- In the primer note:   `**Original paper:** [[en/article/{OriginalStem}]]`  (and `ko/...` in the Korean note)
- In the original note:  `**Educational primer:** [[en/review/{PrimerStem}]]`

Path-qualified links (`[[en/article/Stem]]`) are used because `en/` and `ko/` share filenames; this keeps each link within its own language.

## Filename Convention

`{FirstAuthor}{Year}_{Journal}_{Topic}.md` (ASCII only, no spaces).

| Type | Example |
|------|---------|
| Research article | `Andres2013_Genetics_FieldCricket.md` |
| Review / perspective | `Crow1990_Genetics_Fisher-CentennialView.md` |
| Educational primer | `Nissen2012_Genetics_Honeybee-SexDetermination-Primer.md` |

- Use the paper's **actual publication year** (e.g. a piece titled "…1987–2008" republished in 2016 is `Dove2016`, not `Dove2008`).
- Never trust auto-extracted author/journal blindly — verify against the text and, when the byline is missing, against PubMed.

## PDF → Note Workflow

Actual PDFs live in `ko/pdf/` (gitignored). Pipeline:

1. **Extract** text with PyMuPDF (`pip install pymupdf`) into `ko/pdf/notes/{stem}_extracted.txt`.
2. **Identify** first author / year / journal from the extracted text. If the byline is absent (common in older *GENETICS* "Perspectives"), look up by citation via PubMed (`Genetics`, vol, first page) → get authoritative author/DOI.
3. **Rename** the PDF and its `_extracted.txt` to `FirstAuthorYYYY_Journal_Topic`.
4. **Check duplicates** — compare first-page content fingerprints; move redundant copies to `ko/pdf/dup/` (keep the note-matching canonical file). Never delete PDFs.
5. **Write notes** — fill the CLASS template for BOTH `en/{type}/` and `ko/{type}/`.
6. **Archive extracts** — consolidate `_extracted.txt` into a dated `extract/YYYY-MM-DD*.md` (each entry capped at 50,000 chars). `_extracted.txt` are gitignored (under `pdf/`); the `extract/` archive is tracked.

> ⚠️ Auto-extraction of author/journal is unreliable — always verify. Never batch-rename without checking for conflicts.

### Tooling caveats

- **Auto-named filenames are often wrong.** `tools/process_pdf*.py` may emit `Unknown2024_Unknown_*` or garbled bylines (e.g. `Journal2001_Unknown_*` from Dernburg2001). Always confirm from the extracted text / PubMed and rename the PDF **and** its `_extracted.txt` together.
- **CrossRef lookups can hang** on DOI-less papers. Prefer PubMed citation lookup; if a script stalls on "DOI 조회 중…", interrupt and fall back to regex/manual identification — don't block the batch.
- **50,000-char cap**: `_extracted.txt` and each `extract/` archive entry keep only the first 50,000 chars; long papers may lose later sections — note this when summarizing.
- **`ko/pdf/notes/00_processing_log.md` can be stale/incomplete** — reconcile against the actual file list, don't trust it as authoritative.
- `tools/` is a **submodule** — read its scripts, never edit them here.

## Git & Submodule Setup

```bash
git clone --recurse-submodules git@github.com:taejoonlab/kb-Genetics.git
git submodule update --init --recursive   # if cloned without submodules
```

- Submodule URL uses **SSH** — ensure SSH key is configured
- `.gitignore`: `*.pdf`, `*.PDF`, `*.base`, `pdf/`, `.obsidian/workspace.json`, `.obsidian/cache/`, obsidian-git askpass
- `filemode = false` (cross-platform, WSL2-safe)
- Commit message format: `{action}: {lang} {description}` (e.g. `add: en,ko review — ...`, `edit: en,ko — ...`)

## Obsidian / GitJournal

- Community plugin **obsidian-git** pre-configured; auto-save/push/pull **disabled**
- `tools/` and `pdf/` excluded from the Obsidian file explorer via `userIgnoreFilters` in `.obsidian/app.json`
- YAML frontmatter (`tags`, `date`) on every note — GitJournal filters/displays by these
- Wiki-links `[[...]]` for cross-references (supported by Obsidian and GitJournal); prefer standard markdown image syntax over `![[...]]` embeds
- Keep filenames URL-safe (ASCII, no spaces)

## AI Agent Rules

1. **Bilingual mirror**: always create/update both `en/{type}/` and `ko/{type}/` for every paper.
2. Filename: `FirstAuthorYYYY_Journal_Topic.md`; use the actual publication year.
3. Always include YAML frontmatter with correct `tags`, `date`, `type: class`.
4. Assign the correct **type** (`article` vs `review`) — ask if ambiguous.
5. Use the CLASS format sections: Title → Citation → DOI → (cross-link if primer) → Summary → Significance in Introduction Context → Key References → Future Research Directions → LLM metadata line.
6. Tag Genetics Primer / Genetics Classic pieces and cross-link primer↔original as described above.
7. Verify identity via PubMed when a byline is missing; cite PubMed and include DOI links when using it.
8. Do **not** modify files under `tools/` (separate submodule) or `.obsidian/workspace.json` (per-machine, gitignored).
9. Never delete source PDFs — move duplicates to `ko/pdf/dup/`.
10. Commit only when asked; keep `en/` and `ko/` in sync in the same commit.
