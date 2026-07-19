---
tags: [genetics, lecture, BME333-BIO333, 2026Fall, ko]
date: 2026-07-20
type: lecture
---
# 인간 유전학 — 전장유전체 연관분석(GWAS)

**강의:** BME333 / BIO333 유전학 (UNIST, 2026 가을) · 25강 · ~60분
**Syllabus:** [← 강의계획서](../../lectures/2026.BME333-BIO333-Syllabus.md) — 15주차 월, 2026-12-07

## 학습 목표
이 강의를 마치면 학생들은 다음을 할 수 있어야 한다:
- GWAS의 논리를 설명한다: 형질 또는 질병과의 연관성을 전장유전체에 걸쳐 흔한 SNP에 대해 검정하며, 태그 SNP(tag SNP)가 원인 변이를 지목할 수 있는 이유로서 연관불균형(linkage disequilibrium, LD)을 활용한다.
- 맨해튼 플롯(Manhattan plot)과 QQ 플롯을 해석하고, 전장유전체 유의성 역치(p < 5×10⁻⁸)와 유전체 대조(genomic control)/집단구조 보정의 필요성을 정당화한다.
- 연관성과 인과성을 구별하고, 멘델 무작위화(Mendelian randomization, MR)가 유전 변이를 도구변수(instrumental variable)로 사용하여 인과적 노출–결과 가설을 검정하는 방법을 기술한다.
- GWAS를 가능하게 하면서도 제한하는 집단유전학적 기초(대립유전자 빈도, LD, 다유전자성/Fisher의 무한소 모형)를 요약한다.
- 중개적 활용(다유전자 점수, 바이오뱅크, 약물 표적 우선순위 선정)과 GWAS 발견의 이식성(portability)/다양성 한계를 논의한다.

## 강의 개요 (~60분)
1. **왜 GWAS인가? 가족 연관에서 집단 연관으로** (~8분) — 연관 지도작성은 가족 내에서 드물고 높은 침투도를 가진 변이를 찾는다; 흔한 복합 질환은 집단적 접근이 필요하다. 흔한질환/흔한변이(common-disease/common-variant) 가설과, 약 100만 개의 유전형 분석 SNP가 대부분의 흔한 변이를 태그할 수 있게 하는 HapMap/LD 구조를 소개한다.
2. **GWAS의 해부** (~12분) — 환자-대조군(case/control) 또는 정량적 설계, 유전형 분석 어레이 + 대치(imputation), 공변량을 포함한 SNP별 회귀분석. 맨해튼 플롯과 QQ 플롯을 단계적으로 살펴본다; 5×10⁻⁸ 역치(약 100만 개의 독립 검정에 걸친 다중검정)와 효과크기/대립유전자 빈도 간의 상충관계를 설명한다.
3. **교란요인과 품질관리** (~10분) — 집단 층화(population stratification), 주성분/혼합모형 보정, 근연관계, 배치 효과(batch effect), 그리고 승자의 저주(winner's curse). WTCCC2007을 현대 QC 체계를 확립한 본보기로 활용한다.
4. **다유전자적 실체** (~8분) — 대부분의 복합 형질은 변이당 효과가 미미한 고도의 다유전자성을 띤다(Fisher의 1918년 무한소 모형의 실현); 설명된 유전율, 잃어버린 유전율(missing heritability), 다유전자 점수(polygenic score)를 소개한다.
5. **연관에서 인과로: 멘델 무작위화** (~12분) — 유전자형은 수정 시 무작위로 배정되며 질병에 선행하므로, 유전적 도구를 통해 수정 가능한 노출이 결과에 인과적으로 영향을 미치는지 검정할 수 있다. 세 가지 IV 가정, 다면발현(pleiotropy)의 함정, 그리고 GWAS 요약통계를 이용한 2표본 MR을 다룬다.
6. **중개, 바이오뱅크 및 다양성** (~10분) — 바이오뱅크 규모 및 교차인종(cross-ancestry) GWAS, 약물 표적 재활용, 그리고 다유전자 점수의 이식성을 제한하는 유럽 중심 편향 문제. 마무리 및 토론.

## 교재 참고
- **Genetics: From Genes to Genomes (8e)** — 24장 Variation and Selection in Populations. → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)
- **Genetics: From Genes to Genomes (8e)** — 25장 Genetic Analysis of Complex Traits. → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)

## 이 저장소의 노트
수업에서 소개할 리뷰 및 논문(각각 en/ko 이중언어 쌍이 있음):
- [Uffelmann2021_NatRevMethodsPrimer_GWAS](../review/Uffelmann2021_NatRevMethodsPrimer_GWAS.md) — GWAS 작동 원리를 다룬 핵심 입문서; 그 워크플로 그림을 2번 부분의 골격으로 활용한다.
- [Pearson2008_JAMA_InterpretingGWAS](../review/Pearson2008_JAMA_InterpretingGWAS.md) — GWAS 결과를 읽고 비판적으로 해석하는 법; 맨해튼/QQ 논의에 적합.
- [WTCCC2007_Nature](../article/WTCCC2007_Nature.md) — 지금도 사용되는 QC 및 유의성 관례를 정립한 획기적인 7개 질환 Wellcome Trust 연구.
- [Sakaue2021_NatGenet_BiobankJapan](../article/Sakaue2021_NatGenet_BiobankJapan.md) — 다수 형질에 걸친 교차집단 바이오뱅크 GWAS; 다양성/이식성 논점을 뒷받침한다.
- [Reay2021_NatRevGenet_GWAS-DrugRepurposing](../review/Reay2021_NatRevGenet_GWAS-DrugRepurposing.md) — 발견 결과를 약물 표적으로 전환; 6번 부분의 "왜 중요한가".
- [Visscher2019_Genetics_Fisher1918GWAS](../review/Visscher2019_Genetics_Fisher1918GWAS.md) — GWAS의 다유전자성을 Fisher의 무한소 모형과 연결(4번 부분).
- [Emdin2017_JAMA_MendelianRandomization](../review/Emdin2017_JAMA_MendelianRandomization.md) — MR에 대한 간결한 임상 입문; IV 논리에 활용.
- [Davies2018_BMJ_MendelianRandomization-overview](../review/Davies2018_BMJ_MendelianRandomization-overview.md) — MR의 가정과 함정에 대한 실무자용 안내서.
- [Sanderson2022_NatRevMethodsPrimer_MendelianRandomization](../review/Sanderson2022_NatRevMethodsPrimer_MendelianRandomization.md) — 형식적 취급을 원하는 학생을 위한 MR 방법론 입문서.
