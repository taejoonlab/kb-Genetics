---
tags: [genetics, lecture, BME333-BIO333, 2026Fall, ko]
date: 2026-07-20
type: lecture
---
# 생명의 나무, 오솔로지와 파랄로지

**강의:** BME333 / BIO333 유전학 (UNIST, 2026 가을) · 2강 · ~60분
**강의계획서:** [← 강의계획서](../../lectures/2026.BME333-BIO333-Syllabus.md) — 1주차 수, 2026-09-02

## 학습 목표
이 강의를 마치면 학생들은 다음을 할 수 있어야 한다:
- 계통수(phylogenetic tree)를 올바르게 읽고(노드, 가지, 뿌리, 위상 대 가지 길이), 생명의 나무 개념과 그 한계(수평적 유전자 이동, LUCA)를 기술한다.
- 상동성(homology), 오솔로지(orthology), 파랄로지(paralogy)를 구별하고, 이 구별이 기능 추론과 유전체 주석(annotation)에 왜 중요한지 설명한다.
- 나무가 어떻게 구축되며 노드 지지도(node support)를 부트스트랩(bootstrap)으로 어떻게 평가하는지 설명한다.
- dN/dS (Ka/Ks)를 정화선택(purifying), 중립(neutral), 양성선택(positive selection)의 신호로 해석하고, 가지-부위(branch-site) 검정을 기술한다.
- 분자시계(molecular clock)와 신생(de novo) 유전자 탄생 개념을 설명한다.

## 강의 개요 (~60분)
1. **생명의 나무** (~10분) — 다윈의 단일 그림이 어떻게 하나의 연구 프로그램이 되었는가; 나무 읽기; 수평적 유전자 이동과 세포내공생(endosymbiosis)이 왜 뿌리 근처에서 "나무"를 네트워크로 만드는가. 세포성 생명의 추정된 뿌리로서의 LUCA.
2. **상동성, 오솔로지, 파랄로지** (~12분) — 공통 조상(상동성); 오솔로그(종분화로 갈라짐) 대 파랄로그(중복으로 갈라짐); 유전체 간 기능 주석 전이를 위한 "오솔로그 추측(ortholog conjecture)" (Genetics 8e 11장).
3. **나무 구축과 노드 지지도** (~12분) — 거리 기반 대 형질 기반 방법 개관; 한 분기군(clade)에 대한 신뢰도를 정량화하는 재표집(resampling)으로서의 부트스트랩; 부트스트랩 값이 의미하는 것과 의미하지 않는 것.
4. **서열에 대한 선택: dN/dS** (~12분) — 동의(synonymous) 대 비동의(nonsynonymous) 치환; dN/dS < 1 (정화), ≈ 1 (중립), > 1 (양성); 특정 계통의 특정 코돈에서 일시적 양성선택을 탐지하는 가지-부위 검정.
5. **분자시계와 신생 유전자 탄생** (~10분) — 속도 일정성 가정과 보정(calibration); 분화 시점을 추정하는 데 시계 사용하기; 비암호화(non-coding) 서열로부터 진정으로 새로운 유전자가 어떻게 생겨나는가.
6. **종합 및 마무리** (~4분) — 계통학적 사고를 유전체 주석 및 이후의 집단유전학 강의와 연결한다.

## 교재 참고
- **Evolution: Making Sense of Life (4e)** — 4장 The Tree of Life (계통); 8장 The History in Our Genes. → [textbook ref](../../lectures/ref.Evolution-MakeSenseOfLife.md)
- **Genetics: From Genes to Genomes (8e)** — 11장 Genome Annotation. → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)

## 이 저장소의 노트
수업에서 소개할 리뷰 및 논문(각각 en/ko 이중 언어 쌍이 있음):
- [Doolittle2016_PLoSGenet_TreeOfLife](../review/Doolittle2016_PLoSGenet_TreeOfLife.md) — "생명의 나무"가 무엇을 의미하며 왜 HGT가 그것을 복잡하게 만드는가; 도입부의 틀로 사용.
- [Weiss2018_PLoSGenet_LastUniversal-CommonAncestor](../article/Weiss2018_PLoSGenet_LastUniversal-CommonAncestor.md) — LUCA의 유전자 구성 재구성; 나무의 뿌리.
- [Felsenstein1985_Evolution_Bootstrap-PhylogeneticTrees](../article/Felsenstein1985_Evolution_Bootstrap-PhylogeneticTrees.md) — 계통학에 부트스트랩을 도입한 창시 논문.
- [Efron1996_PNAS_Bootstrap-PhylogeneticTrees](../article/Efron1996_PNAS_Bootstrap-PhylogeneticTrees.md) — 부트스트랩 지지값의 통계적 해석.
- [Edwards2009_Genetics_Perspectives-EvolutionaryTreeStatistics](../review/Edwards2009_Genetics_Perspectives-EvolutionaryTreeStatistics.md) — 진화 나무 통계학에 대한 역사적 관점.
- [Yang2000_TrendsEcolEvol_dNdS](../review/Yang2000_TrendsEcolEvol_dNdS.md) — dN/dS를 추정하고 해석하는 방법; 선택 부분의 기준점.
- [Yang2010_MBE_BranchSiteTest-PositiveSelection](../article/Yang2010_MBE_BranchSiteTest-PositiveSelection.md) — 특정 부위/계통에서 양성선택을 탐지하는 가지-부위 검정.
- [Takahata2007_Genetics_MolecularClock](../review/Takahata2007_Genetics_MolecularClock.md) — 분자시계 개념과 그 가정들.
- [Abrusan2013_Genetics_DeNovoGeneBirth](../article/Abrusan2013_Genetics_DeNovoGeneBirth.md) — 비암호화 DNA로부터 신생 유전자가 어떻게 생겨나는가.
- [Abrusan2013_Genetics_DeNovoGeneBirth-Frietze2014primer](../review/Abrusan2013_Genetics_DeNovoGeneBirth-Frietze2014primer.md) — 신생 유전자 탄생 연구에 대한 학생 친화적 입문서.
