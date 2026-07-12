# AGENT.md — kb-Genetics 에이전트 참고 문서

> 이 파일은 미래 AI 에이전트가 이 vault에서 작업할 때 참고하는 운영 노트입니다.
> 프로젝트 규칙·구조 등 기본 정보는 **CLAUDE.md** 를 우선 참조하세요.

---

## 현재 상태 (2026-07-12 기준)

### 완료된 작업
- `tools/` submodule 설치 (`git@github.com:taejoonlab/kb-tools.git`)
- `.gitignore` 설정: `*.pdf`, `*.PDF`, `pdf/`, `*.base`, Obsidian 임시 파일 제외
- `tools/process_pdf_class.py` — CLASS용 PDF 처리 스크립트 (키워드 자동 추출, `others` 카테고리 고정)
- `tools/SKILL_CLASS.md` — CLASS 워크플로우 문서
- `tools/SKILLS.md` — 전체 SKILL 인덱스
- `ko/pdf/` 아래 10개 PDF 처리 완료:
  - 추출 텍스트: `ko/pdf/notes/*_extracted.txt` (gitignored)
  - 통합 추출본: `extract/2026-07-12.md` (tracked)
  - CLASS 노트 스켈레톤 → 내용 채움 → `ko/others/` 에 배치 완료

### ko/others/ 현재 파일 (10편)

| 파일 | 분야 |
|------|------|
| `Arendt2016_NatRevGenet_OriginEvolution-CellTypes.md` | 세포 유형 진화 |
| `Ceballos2018_NatRevGenet_RunsOfHomozygosity.md` | 집단유전학 (ROH) |
| `Charlesworth2009_NatRevGenet_EffectivePopulation-SizePatterns.md` | 집단유전학 (Ne) |
| `Comai2005_NatRevGenet_AdvantagesDisadvantages-BeingPolyploid.md` | 배수성 진화 |
| `Hurst2009_NatRevGenet_GeneticsUnderstanding-Selection.md` | 자연선택 이론 |
| `Payer2019_NatRevGenet_TE-Disease.md` | 전위인자·유전 질환 |
| `Schraiber2015_NatRevGenet_MethodsModels-UnravellingHuman.md` | 인류 진화 방법론 |
| `Schwartz2017_NatRevGenet_EvolutionTumour-PhylogeneticsPrinciples.md` | 종양 계통유전학 |
| `Weiss2018_PLoSGenet_LastUniversal-CommonAncestor.md` | LUCA·생명 기원 |
| `Wolf2016_NatRevGenet_MakingSense-GenomicIslands.md` | 종분화 유전체학 |

### 남은 작업 (우선순위 순)

1. **카테고리 분류**: 각 노트를 `population/`, `forward/`, `reverse/` 중 하나로 이동
   - frontmatter `tags` 에서 `others` → 해당 카테고리로 변경
   - `mv ko/others/XXX.md ko/{category}/XXX.md`
2. **en/ bilingual mirror 생성**: ko/ 각 노트의 영문 버전을 `en/{category}/`에 생성
   - frontmatter `tags` 의 `ko` → `en` 변경
3. **Ceballos2018 처리 로그 확인**: `00_processing_log.md` 에 Ceballos 항목 누락됨 (수동 처리했기 때문) — 필요 시 로그에 추가

---

## 카테고리 분류 제안 (향후 작업 참고)

노트 내용 기반으로 한 카테고리 제안 (최종 결정은 사용자 검토 후):

| 파일 | 제안 카테고리 | 이유 |
|------|-------------|------|
| Ceballos2018 ROH | `population` | 집단 역사, 근친 교배, 인구 유전학 |
| Charlesworth2009 Ne | `population` | 유효 집단 크기, 중립 이론 |
| Hurst2009 Selection | `population` | 자연선택, 중립 이론, 거의 중립 이론 |
| Schraiber2015 Human Evo | `population` | 인류 집단유전체학 방법론 |
| Wolf2016 Speciation | `population` | 종분화, FST, 유전자 흐름 |
| Comai2005 Polyploidy | `forward` | 게놈 중복, 표현형 기반 분류 가능하나 reverse도 해당 |
| Arendt2016 Cell Types | `reverse` | 세포 유형 기원, 분자 기전 (CoRC) |
| Payer2019 TE Disease | `reverse` | TE 삽입 기전, 역유전학적 접근 |
| Schwartz2017 Tumour | `reverse` | 종양 진화, 유전체 분석 기반 |
| Weiss2018 LUCA | `population` | 계통발생, 진화 기원 (others 유지도 가능) |

---

## 도구 운영 노트

### process_pdf_class.py 사용 시 주의사항

1. **CrossRef API 타임아웃**: 일부 DOI가 없는 논문에서 CrossRef API 호출이 무한 대기할 수 있음
   - 증상: 스크립트가 "DOI 조회 중..." 상태에서 멈춤
   - 해결: `Ctrl+C` 중단 후 `--dry-run` 없이 재실행하면 regex fallback으로 처리됨
   - Ceballos2018 처리 시 이 문제가 발생했음 (4분 이상 대기 후 수동 처리)

2. **DOI 없는 PDF 파일명 자동 오류**: CrossRef에서 저자/저널을 찾지 못하면 파일명이 `Unknown2024_Unknown_Keyword.pdf`로 생성됨
   - 예시: `Payer2019_NatRevGenet_TE-Disease.pdf` → `Lindsay2019_Unknown_MuchHuman-GenomeSequence.pdf`로 잘못 추출됨
   - 해결: 추출된 텍스트에서 DOI를 grep으로 찾아 수동으로 파일명 수정 후 MD/txt 파일도 함께 rename

3. **50,000자 상한**: `_extracted.txt` 파일은 PDF 원문의 처음 50,000자만 저장함
   - 긴 논문은 후반부 내용이 누락될 수 있으므로 LLM 노트 작성 시 참고

4. **배치 처리 후 검증**: 처리 결과는 `ko/pdf/notes/00_processing_log.md` 에서 확인
   - 스크립트 오류로 로그가 누락되는 경우가 있으므로 실제 파일 목록과 대조할 것

### doi_journal_map.json 추가 항목 (이번 세션에서 추가)

```json
"10.1038/nrg": "NatRevGenet",
"10.1038/s41576": "NatRevGenet",
"10.1371/journal.pgen": "PLoSGenet",
"10.1371/journal.pbio": "PLoSBiol",
"10.1371/journal.pcbi": "PLoSComputBiol"
```

### extract/ 디렉토리

- **목적**: `ko/pdf/notes/*_extracted.txt` 파일들은 gitignored라 `ko/pdf/` 폴더에서 관리되지 않음
- **용도**: 추출 텍스트를 git에 보관하고 나중에 검색 가능하도록 날짜별로 통합 저장
- **파일 형식**: `extract/YYYY-MM-DD.md` — 해당 날짜에 처리한 모든 논문의 추출 텍스트 포함
- **현재 파일**: `extract/2026-07-12.md` — 10편 논문 통합 (~505KB)

---

## 에이전트 작업 패턴

### CLASS 노트 단건 처리

```bash
# 1. PDF 처리
python3 tools/process_pdf_class.py ko/pdf/PAPER.pdf --dry-run
python3 tools/process_pdf_class.py ko/pdf/PAPER.pdf

# 2. 추출 텍스트 확인
wc -c ko/pdf/notes/*_extracted.txt

# 3. 추출 텍스트 기반으로 LLM이 MD 내용 생성
#    (ko/pdf/notes/STEM_extracted.txt 읽기 → ko/others/STEM.md 작성)

# 4. 카테고리 이동
mv ko/others/STEM.md ko/{category}/STEM.md
# frontmatter tags 수정: others → {category}

# 5. en/ mirror 생성
cp ko/{category}/STEM.md en/{category}/STEM.md
# frontmatter tags 수정: ko → en

# 6. commit
git add ko/ en/
git commit -m "add: ko/{category} STEM"
git push
```

### 에이전트 파일 쓰기 권한

- 백그라운드 에이전트는 기본적으로 파일 쓰기 권한이 없음 (사용자 승인 필요)
- 대용량 콘텐츠 생성 시: 에이전트가 텍스트로 반환 → 메인 세션에서 `Write` 도구로 저장
- 또는 사용자가 에이전트에 명시적으로 쓰기 권한 부여

---

## 저장소 상태 스냅샷

```
kb-Genetics/
├── CLAUDE.md          # 프로젝트 규칙 (이 파일보다 우선)
├── AGENT.md           # 에이전트 운영 노트 (이 파일)
├── extract/
│   └── 2026-07-12.md  # 10편 논문 추출 텍스트 통합본
├── ko/
│   └── others/        # CLASS 노트 10편 (카테고리 분류 전)
│       └── *.md
└── tools/             # git submodule (kb-tools)
    ├── process_pdf_class.py
    ├── SKILL_CLASS.md
    └── SKILLS.md
```

**en/ 노트**: 아직 생성되지 않음 (bilingual mirror 작업 미완료)
