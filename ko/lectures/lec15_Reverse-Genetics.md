---
tags: [genetics, lecture, BME333-BIO333, 2026Fall, ko]
date: 2026-07-20
type: lecture
---
# 역유전학 (Reverse Genetics)

**강의:** BME333 / BIO333 유전학 (UNIST, 2026 가을) · 15강 · ~60분
**Syllabus:** [← 강의계획서](../../lectures/2026.BME333-BIO333-Syllabus.md) — 10주차, 2026-11-02 (월)

## 학습 목표
이 강의를 마치면 학생은 다음을 할 수 있어야 한다:
- 역유전학("유전자 → 표현형")을 정의하고 순유전학과 대비할 수 있다.
- 주요 교란 도구를 비교할 수 있다: 녹아웃(knockout), 녹인(knock-in), RNAi, CRISPR/Cas.
- CRISPR/Cas9와 dCas9 융합체가 어떻게 표적 돌연변이, 활성화, 억제를 가능하게 하는지 설명할 수 있다.
- 역유전학을 전장 유전체 규모로 확장하는 대규모 병렬/다중화(multiplexed) 접근법을 기술할 수 있다.
- 중복성과 표적 이탈(off-target) 유의점을 포함하여, 표적 교란으로부터 얻은 표현형을 해석할 수 있다.

## 강의 개요 (~60분)
1. **역유전학이란 무엇인가?** (~7분) — 알려진 유전자/서열에서 시작해 그것의 소실 또는 변형이 무엇을 하는지 묻는다; 순유전학의 상보물.
2. **표적 돌연변이 만들기** (~10분) — 상동 재조합 녹아웃, 조건부(Cre/lox) 및 조직 특이적 대립유전자, 그리고 녹인 리포터/태그.
3. **RNA 간섭(RNA interference)** (~8분) — 서열 특이적 녹다운; 강점(빠르고 확장 가능) 및 한계(부분적, 표적 이탈); *C. elegans*에서의 사료 급이 RNAi.
4. **CRISPR/Cas 유전체 편집** (~12분) — 가이드 RNA를 통한 Cas9 표적화; NHEJ 대 HDR; 염기 편집과 프라임 편집; 용이성과 정밀도의 도약.
5. **dCas9와 절단을 넘어서** (~8분) — CRISPRi/CRISPRa를 위해, 그리고 염색체 생물학을 조작하기 위해(예: 특정 유전자좌에 인자를 모집) 효과기(effector)에 융합된 촉매 불활성 Cas9.
6. **규모 확대: 다중화 및 대규모 병렬 역유전학** (~10분) — 풀링된(pooled) CRISPR/RNAi 스크리닝, 포화 돌연변이 유발, 심층 돌연변이 스캐닝(deep mutational scanning); 유전자형–표현형 지도를 대규모로 읽기.
7. **유의점과 종합** (~5분) — 유전적 중복성, 불완전 침투도(incomplete penetrance), 표적 이탈 효과; 순유전학과 역유전학 접근을 결합해야 할 때.

## 교재 참고
- **Genetics: From Genes to Genomes (8e)** — 21장 진핵생물 유전체 조작(Manipulating the Genomes of Eukaryotes). → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)

## 이 저장소의 노트
수업에서 소개할 리뷰 및 논문 (각각 en/ko 이중언어 쌍이 있음):
- [Kuhl2020_Genetics_dCas9+Ctf19+Recombination](../article/Kuhl2020_Genetics_dCas9+Ctf19+Recombination.md) — 유전자좌 특이적 과정을 유도하기 위한 dCas9 융합체(Ctf19); 편집을 넘어선 dCas9의 실제 사례.
- [Kuhl2020_Genetics_dCas9+Ctf19+Recombination-McVey2022primer](../review/Kuhl2020_Genetics_dCas9+Ctf19+Recombination-McVey2022primer.md) — dCas9/Ctf19 연구에 대한 교육용 입문서; 설계를 풀어내는 데 사용한다.
- [Polly2012_Stacio2012_GeneticsPrimer_LIN-35](../review/Polly2012_Stacio2012_GeneticsPrimer_LIN-35.md) — *C. elegans*의 특정 유전자(*lin-35*)에 대한 표적 분석을 예시하는 입문서.
- [Shendure2016_Genetics_MassiveParallelGenetics](../review/Shendure2016_Genetics_MassiveParallelGenetics.md) — 역유전학을 유전체 전반으로 확장하는 대규모 병렬 분석.
