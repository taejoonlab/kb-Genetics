# AGENT.md — kb-Genetics 에이전트 참고 문서

> 이 파일은 미래 AI 에이전트가 이 vault에서 작업할 때 참고하는 운영 노트입니다.
> 프로젝트 규칙·구조 등 기본 정보는 **CLAUDE.md** 를 우선 참조하세요.

---

## 현재 상태 (2026-07-12 기준)

### 완료된 작업
- `tools/` submodule 설치 (`git@github.com:taejoonlab/kb-tools.git`)
- `.gitignore` 설정: `*.pdf`, `*.PDF`, `pdf/`, `*.base`, Obsidian 임시 파일 제외
- `tools/process_pdf_class.py` — CLASS용 PDF 처리 스크립트 (키워드 자동 추출, `others` 카테고리 고정)
- `tools/SKILL_CLASS.md` — CLASS 워크플로우 문서 (`extract/` 디렉토리 포함)
- `tools/SKILLS.md` — 전체 SKILL 인덱스
- `ko/pdf/` 아래 40개 PDF 배치 처리 완료 (60초 타임아웃 적용):
  - 추출 텍스트: `ko/pdf/notes/*_extracted.txt` (gitignored)
  - 처리 로그: `ko/pdf/notes/00_processing_log.md`
  - 타임아웃 목록: `ko/pdf/notes/pending_later.txt` (4편)
- **한국어 노트 41편**: `ko/population/` (21편), `ko/reverse/` (8편), `ko/others/` (14편), `ko/forward/` (1편) — 기존 10편 포함
- **영문 mirror 41편**: 동일 구성
- **날짜 태그**: 전체 노트 frontmatter에 `2026-07-12` 태그 포함

### 현재 노트 목록

#### forward/ (1편)

| 파일 | 분야 |
|------|------|
| `Bridges1916_Genetics_NonDisjunction-SexChromosome` | 비분리·염색체 이론 증명 |

#### population/ (17편)

| 파일 | 분야 |
|------|------|
| `Bachtrog2013_NatRevGenet_Y-chromosomeEvolution` | Y 염색체 퇴화 메커니즘 |
| `Bachtrog2014_PLoSBiol_SexDetermination-ManyWays` | 성 결정 시스템 다양성 |
| `Capel2017_NatRevGenet_VertebrateSexDetermination` | 척추동물 성 결정 진화적 가소성 |
| `Ceballos2018_NatRevGenet_RunsOfHomozygosity` | ROH·근친교배 집단유전학 |
| `Charlesworth2009_NatRevGenet_EffectivePopulation-SizePatterns` | 유효 집단 크기 (Ne) |
| `Efron1996_PNAS_Bootstrap-PhylogeneticTrees` | 계통수 부트스트랩 신뢰 구간 |
| `Felsenstein1985_Evolution_Bootstrap-PhylogeneticTrees` | 계통수 부트스트랩 (원논문) |
| `Furman2020_GBE_SexChromosome-ManyExceptions` | 성염색체 진화의 예외 사례들 |
| `Graves2015_NatRevGenet_SexChromosome-Evolution` | 척추동물 성염색체·용량 보상 진화 |
| `Hey2004_PLoSBiol_RecombinationHotspots` | 재조합 핫스팟 개념 |
| `Hurst2009_NatRevGenet_GeneticsUnderstanding-Selection` | 자연선택 이론 |
| `Paigen2010_NatRevGenet_RecombinationHotspots-Mammals` | 포유류 재조합 핫스팟·PRDM9 |
| `Schraiber2015_NatRevGenet_MethodsModels-UnravellingHuman` | 인류 진화 집단유전체학 방법론 |
| `ShawWhite2022_TrendsGenet_SexChromosome-GeneRegulation` | 성염색체 유전자 발현 조절 진화 |
| `Weiss2018_PLoSGenet_LastUniversal-CommonAncestor` | LUCA·생명 기원 |
| `Wolf2016_NatRevGenet_MakingSense-GenomicIslands` | 종분화·유전체 섬 |
| `Yang2000_TrendsEcolEvol_dNdS` | dN/dS 분자 적응 통계 방법론 |
| `Abbott2017_ProcRSocB_SexChromosome-Evolution` | 성염색체 진화 역사·전망 리뷰 |
| `Doolittle2016_PLoSGenet_TreeOfLife` | 생명의 나무(TOL) 개념 재검토 |
| `Mank2017_NatRevGenet_SexualConflict` | 성적 갈등의 집단유전체학 |
| `Yang2010_MBE_BranchSiteTest-PositiveSelection` | Branch-site test 통계적 특성 |

#### reverse/ (8편)

| 파일 | 분야 |
|------|------|
| `Arendt2016_NatRevGenet_OriginEvolution-CellTypes` | 세포 유형 기원·진화 (CoRC) |
| `BenTabou2006_SciSTKE_SeaUrchin-GRN` | 성게 유전자 조절 네트워크 |
| `Grendler2019_Development_WoundPolyploidy` | 상처 유도 배수성 (Drosophila) |
| `Klein2020_ChromosomeRes_DNAAccessibility-Methods` | 크로마틴 접근성 분석법 리뷰 |
| `Payer2019_NatRevGenet_TE-Disease` | 전위인자·유전 질환 |
| `Pott2015_NatGenet_SuperEnhancers` | 슈퍼인핸서 개념 비판적 검토 |
| `Schwartz2017_NatRevGenet_EvolutionTumour-PhylogeneticsPrinciples` | 종양 계통유전학 |
| `Spitz2012_NatRevGenet_TF-Enhancers` | 전사인자·인핸서 결합 및 발생 제어 |

#### others/ (14편)

| 파일 | 분야 |
|------|------|
| `Beach2017_Cell_Aneuploidy-NonGeneticIndividuality` | 이수성·비유전적 개체 다양성 |
| `Benson2001_NatRevGenet_Morgan-Chromosome` | Morgan의 염색체 이론 저항 역사 |
| `Comai2005_NatRevGenet_AdvantagesDisadvantages-BeingPolyploid` | 배수성 진화 |
| `Dernburg2001_JCB_HolocentricChromosomes` | 동원점 분산 염색체 |
| `Gartler2006_NatRevGenet_HumanChromosomeNumber` | 인간 염색체 수 발견의 역사 |
| `Harman2005_NatRevGenet_Darlington-Cytology` | Cyril Dean Darlington 세포유전학 역사 |
| `Lieberman-Aiden2009_Science_HiC-3DGenome` | Hi-C 기법·3D 게놈 |
| `Matharu2015_PLoSGenet_TAD-ChromatinLoops` | TAD·인핸서-프로모터 루프 |
| `Meaburn2007_Nature_ChromosomeTerritories` | 염색체 영역 (Chromosome territories) |
| `Misteli2020_Cell_3Dgenome-SelfOrganizing` | 자기조직화 게놈 원리 |
| `Quinodoz2021_Cell_RNA-SpatialCompartments` | RNA가 핵 내 공간 구획 형성에 미치는 역할 |
| `Satzinger2008_NatRevGenet_Boveri-Chromosomes` | Theodor·Marcella Boveri 역사 |
| `Shopland2006_JCB_ChromosomeFolding` | 연속 염색체 영역의 3D 접힘 구조 |
| `Sutton1903_BiolBull_Chromosomes-Heredity` | 유전에서 염색체의 역할 (원논문) |

### 남은 작업

- 없음 (2026-07-13 기준 모든 PDF 처리 완료)

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
├── README.md          # 영문 저장소 개요 (구조·노트 목록)
├── extract/
│   └── 2026-07-12.md  # 10편 논문 추출 텍스트 통합본
├── en/
│   ├── forward/       # 영문 노트 1편
│   ├── population/    # 영문 노트 17편
│   ├── reverse/       # 영문 노트 8편
│   └── others/        # 영문 노트 11편
├── ko/
│   ├── forward/       # 한국어 노트 1편
│   ├── population/    # 한국어 노트 17편
│   ├── reverse/       # 한국어 노트 8편
│   ├── others/        # 한국어 노트 11편
│   └── pdf/notes/     # PDF 처리 로그 및 스켈레톤 (gitignored)
└── tools/             # git submodule (kb-tools)
    ├── process_pdf_class.py
    ├── SKILL_CLASS.md
    └── SKILLS.md
```
