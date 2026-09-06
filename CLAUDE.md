# kb-Genetics — LLM Wiki Obsidian Vault

## Project Overview

Bilingual (en/ko) Obsidian vault for **Genetics** (BME333/BIO333 @ UNIST). Each paper has structured study notes in both languages, organized by **note type** (`article/` for research papers, `review/` for reviews, perspectives, historical/critical commentaries, and educational primers).

> The vault was restructured (2026-07) from subdiscipline categories (`population/`, `forward/`, `reverse/`, `others/`) to the type-based `article/` `review/` layout. The old category folders have been removed.

## Repository Structure

```
.
├── en/
│   ├── article/      # Research articles (English)
│   ├── review/       # Reviews / perspectives / primers / commentaries (English)
│   └── lectures/     # Per-lecture notes lecNN_*.md (English)
├── ko/
│   ├── article/      # Research articles (Korean — bilingual mirror)
│   ├── review/       # Reviews etc. (Korean)
│   └── lectures/     # Per-lecture notes lecNN_*.md (Korean — bilingual mirror)
├── lectures/         # Course syllabus + textbook references (ref.*) — language-neutral
├── extract/          # Raw extracted PDF text, archived by date (tracked; 50k-char cap per paper)
├── pdf/              # Source PDFs — gitignored (note: actual PDFs live in ko/pdf/)
│   ├── notes/        # Per-PDF `{stem}_extracted.txt` + 00_processing_log.md (work artefacts)
│   ├── done/         # PDFs whose notes are written, renamed to the note stem
│   │   └── review/   # …for papers whose note lives in review/
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
  - `GeneticsClassic` — the *GENETICS* **"Classics"** series (2016 GSA centennial): a commentary revisiting **one specific landmark paper**, without discussion questions. House title form is `<Commentator> on <Topic>` (e.g. Nielsen 2016 on Tajima 1983; Churchill 2016 on Lander & Botstein).
  - `GeneticsPerspectives` — the *GENETICS* **"Perspectives: Anecdotal, Historical and Critical Commentaries on Genetics"** series (Crow & Dove, 1987–). Historical, biographical or retrospective essays about a person, an era or a topic — **not** about a single paper. Free-form titles ("Max Delbrück", "The Year of the Fly", "Hogness at one hundred").

> These two are different series and must not be conflated. Decide by the **section label printed on the article's first page**, which is preserved in the `extract/` archive — see below.
- **Session tags** (append when a batch of papers is processed together): a reading-list or course-cycle label such as `2025-2026`, applied to every note in that batch so the batch can be filtered in Obsidian. Order is base tags → series tag → session tag, e.g. `tags: [genetics, class, review, en, GeneticsClassic, 2025-2026]`.

> ⚠️ When counting or detecting series tags, match the **`^tags:` line only**. Several note *filenames* contain `GeneticsClassic`/`GeneticsPrimer` and are cited inside other notes' bodies, so a whole-file `grep -l GeneticsClassic` over-counts. A filename is not evidence of type either: `LuriaDelbruck1943_Meneely2016_GeneticsClassic` was in fact an Educational Primer and had to be renamed.

> ⚠️ **To decide which series a paper belongs to, read `extract/`, not PubMed.** The archived first page carries the journal's own section label (`PERSPECTIVES`, `Investigation`, `Selfish Elements`, …); PubMed does not record it, and a note's own prose is a summary, not evidence. Allow for OCR damage when matching — the Perspectives masthead has appeared as `Per spec tives` and as `| PERSPECTIVES`. Use PubMed for the complementary job: authoritative author / DOI / PMID when a byline is missing or a companion piece needs its own DOI.

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
4. **Check duplicates — by DOI, not by filename.** Before writing anything, resolve the paper's DOI and search the vault for a note that already carries it:
   ```bash
   grep -l "^\*\*DOI:\*\* \[https://doi.org/<doi>\]" en/article/*.md en/review/*.md
   ```
   A filename-collision check alone will **not** catch an existing note filed under a different stem — that is how a second note for Oliver 2025 (`10.1038/s41588-025-02097-2`) was created. If a note already exists, update it instead of writing a second one. Separately, for the PDFs themselves compare first-page content fingerprints and move redundant copies to `ko/pdf/dup/` (keep the note-matching canonical file). Never delete PDFs.
5. **Write notes** — fill the CLASS template for BOTH `en/{type}/` and `ko/{type}/`.
6. **Archive extracts** — consolidate `_extracted.txt` into a dated `extract/YYYY-MM-DD*.md`, split into `_pNN` parts at roughly 2 MB. Introduce each paper's block with the anchor `===== <note-stem> =====` so a note can be traced back to its source text. Each entry is capped at 50,000 chars. `_extracted.txt` are gitignored (under `pdf/`); the `extract/` archive is tracked. Archives are a record of what was processed on a date — **do not rewrite them** when a note is later renamed or removed.
7. **File the PDF** — move it to `ko/pdf/done/` (or `ko/pdf/done/review/` when the note lives in `review/`), renamed to the note stem. Append the batch to `ko/pdf/notes/00_processing_log.md`.
8. **Refresh `README.md`** — see below.

### Keeping README.md current

`README.md` carries the vault state: the per-folder counts in the `## Structure` block, the `## Current Notes (N papers …)` heading, and the two index tables `### Research Articles (N)` / `### Reviews, Perspectives, Primers & Essays (N)`. `AGENT.md` points here for state; it holds none itself.

Regenerate the tables from the notes on disk rather than editing them by hand, so the README cannot drift:

- one row per note in `en/`, formatted `` | `stem` | <first H1 line> | <series> | ``
- sorted case-insensitively by stem
- series column read from the `^tags:` line (`GeneticsPrimer` → `Genetics Primer`, `GeneticsClassic` → `Genetics Classic`)

Do this after every batch, and after any note is added, renamed or removed.

> ⚠️ Auto-extraction of author/journal is unreliable — always verify. Never batch-rename without checking for conflicts.

### Tooling caveats

- **Auto-named filenames are often wrong.** `tools/process_pdf*.py` may emit `Unknown2024_Unknown_*` or garbled bylines (e.g. `Journal2001_Unknown_*` from Dernburg2001). Always confirm from the extracted text / PubMed and rename the PDF **and** its `_extracted.txt` together.
- **CrossRef lookups can hang** on DOI-less papers. Prefer PubMed citation lookup; if a script stalls on "DOI 조회 중…", interrupt and fall back to regex/manual identification — don't block the batch.
- **50,000-char cap**: `_extracted.txt` and each `extract/` archive entry keep only the first 50,000 chars; long papers may lose later sections — note this when summarizing.
- **`ko/pdf/notes/00_processing_log.md` can be stale/incomplete** — reconcile against the actual file list, don't trust it as authoritative.
- `tools/` is a **submodule** — read its scripts, never edit them here.

## Lecture Materials

Course teaching materials for BME333/BIO333, kept separate from the paper notes. Per-lecture notes are **bilingual** (like the paper notes): `en/lectures/` and `ko/lectures/` mirror each other. The syllabus and textbook references are language-neutral and stay in the top-level `lectures/` folder.

- `lectures/2026.BME333-BIO333-Syllabus.md` — course objective/description, the weekly-schedule table, and a per-lecture objective/description list. Each week links to its **English** lecture note (`../en/lectures/lecNN_*.md`) with a trailing `[ko]` link to the Korean mirror (`../ko/lectures/lecNN_*.md`).
- `{en,ko}/lectures/lecNN_*.md` — one note per lecture (~60 min), written as a **self-contained teaching document** (a student can follow the whole lecture without opening any paper). Structure: frontmatter tags `[genetics, lecture, BME333-BIO333, 2026Fall, {lang}]` + `type: lecture` → `# Title` → Course/Syllabus/Languages header lines → `## Learning Objectives` → `## Lecture` (one `### N. Title (~N min)` subheading per outline segment, each full explanatory prose) → `## Key Takeaways` → `## Textbook Reading` → `## Notes in this vault` → (`## Additional reading (PubMed)` for note-thin lectures) → `## Discussion Questions`.
  - **Figures required**: several per lecture (≈4–6), placed inline with a bold caption — mermaid diagrams (```mermaid fenced; ASCII-only labels, wrap any label with `()`/`:`/`,` in double quotes), markdown tables, Punnett squares, ASCII diagrams. Copy mermaid blocks **verbatim** between the en/ko pair (do not translate diagram labels) so both render identically.
  - **Dual-language links**: every vault-note reference uses explicit `[en](../../en/{article|review}/Stem.md) · [ko](../../ko/…)` links (these resolve from BOTH language files); the "Notes in this vault" list shows the filename in backticks + the two language links. Each note has a language-switch header line (`**Languages:** English · [한국어](../../ko/lectures/…)` / `**언어:** [English](../../en/lectures/…) · 한국어`). Do NOT use bare same-language `../review/`/`../article/` links. Reference standard note: `en/lectures/lec03_Mendel-Principles.md`.
- `lectures/ref.*.md` — reference textbooks (title/edition/authors/publisher/year/ISBN + table of contents).

Conventions: keep the `en`/`ko` lecture pair in sync (create/update both together, same filename); link lecture↔note↔syllabus with **relative markdown links** (not wiki-links) so they render on GitHub; keep the syllabus topic links and the lecture-note filenames (`lecNN_...`) in sync.

## Git & Submodule Setup

```bash
git clone --recurse-submodules git@github.com:taejoonlab/kb-Genetics.git
git submodule update --init --recursive   # if cloned without submodules
```

- **Before starting any work, ALWAYS check `tools/` for updates first** and fast-forward if behind:
  ```bash
  git -C tools fetch --quiet && git -C tools rev-list --left-right --count HEAD...@{u}
  git -C tools merge --ff-only origin/main   # if behind; then `git add tools` to bump the pointer
  ```
  The submodule holds the PDF→note processing scripts and SKILL docs, which evolve; work against a stale copy risks using outdated conventions.
- Submodule URL uses **SSH** — ensure SSH key is configured
- `.gitignore`: `*.pdf`, `*.PDF`, `*.base`, `pdf/`, `.obsidian/workspace.json`, `.obsidian/cache/`, obsidian-git askpass
- `.gitattributes`: `* text=auto eol=lf` — repository **and** working tree both use LF. This checkout normally sits on a Windows drive reached from WSL2, where `core.autocrlf` is unset; without this a Windows editor rewrites a note as CRLF and produces a whole-file diff in which no content changed (58 lecture/slide files once did exactly that).
  - `extract/** -text` is a deliberate exception: archived PDF-extracted text can contain CR characters as part of the text itself and must stay byte-exact. **Do not remove that line.**
  - If a clone on another machine still shows CRLF diffs, run `git rm --cached -r . && git reset --hard` there once to re-checkout under the new attributes.
- `filemode = false` (cross-platform, WSL2-safe)
- Commit message format: `{action}: {lang} {description}` (e.g. `add: en,ko review — ...`, `edit: en,ko — ...`)

## Obsidian / GitJournal

- Community plugin **obsidian-git** pre-configured; auto-save/push/pull **disabled**
- `tools/` and `pdf/` excluded from the Obsidian file explorer via `userIgnoreFilters` in `.obsidian/app.json`
- YAML frontmatter (`tags`, `date`) on every note — GitJournal filters/displays by these
- Wiki-links `[[...]]` for cross-references (supported by Obsidian and GitJournal); prefer standard markdown image syntax over `![[...]]` embeds
- Keep filenames URL-safe (ASCII, no spaces)

## AI Agent Rules

0. **Before starting any task, check `tools/` for updates first** (`git -C tools fetch && git -C tools merge --ff-only origin/main` if behind; then `git add tools`) — the processing scripts/SKILL docs there evolve.
1. **Bilingual mirror**: always create/update both `en/{type}/` and `ko/{type}/` for every paper.
2. Filename: `FirstAuthorYYYY_Journal_Topic.md`; use the actual publication year.
3. Always include YAML frontmatter with correct `tags`, `date`, `type: class`.
4. Assign the correct **type** (`article` vs `review`) — ask if ambiguous.
5. Use the CLASS format sections: Title → Citation → DOI → (cross-link if primer) → Summary → Significance in Introduction Context → Key References → Future Research Directions → LLM metadata line.
6. Tag Genetics Primer / Genetics Classic pieces and cross-link primer↔original as described above.
7. Verify identity via PubMed when a byline is missing; cite PubMed and include DOI links when using it.
8. Do **not** modify files under `tools/` (separate submodule) or `.obsidian/workspace.json` (per-machine, gitignored).
9. Never delete source PDFs — move duplicates to `ko/pdf/dup/`, and processed ones to `ko/pdf/done/`.
10. Commit only when asked; keep `en/` and `ko/` in sync in the same commit.
11. **Check by DOI before writing a note** — a filename check alone will not catch an existing note filed under a different stem.
12. After a batch, regenerate the `README.md` index and counts from the notes on disk; leave `AGENT.md` alone unless one of its links breaks.
13. Detect series tags from the `^tags:` line, never from the filename or a whole-file grep.
