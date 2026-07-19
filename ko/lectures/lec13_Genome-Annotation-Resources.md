---
tags: [genetics, lecture, BME333-BIO333, 2026Fall, ko]
date: 2026-07-20
type: lecture
---
# 실제 세계의 유전학 — 유전체 주석과 자원

**강의:** BME333 / BIO333 유전학 (UNIST, 2026 가을) · 13강 · ~60분
**Syllabus:** [← 강의계획서](../../lectures/2026.BME333-BIO333-Syllabus.md) — 9주차, 2026-10-26 (월)

## 학습 목표
이 강의를 마치면 학생은 다음을 할 수 있어야 한다:
- "유전체(genome)"가 무엇인지 정의하고, 서열(sequence)·어셈블리(assembly)·주석(annotation)을 구분할 수 있다.
- 짧은 읽기(short read)가 어떻게 생성되어 참조 유전체(reference genome)에 정렬(mapping)되는지 설명할 수 있다.
- 유전자와 기능 요소가 어떻게 주석되는지(ab initio, 상동성homology, 증거 기반 접근법) 기술할 수 있다.
- 서열 유사성 검색(BLAST)을 사용하고 그 점수화 기제(동적 계획법dynamic programming, BLOSUM62 같은 치환 행렬)를 이해할 수 있다.
- 주요 공개 유전체 자원(NCBI, Ensembl, UCSC)을 탐색하고 현재 주석의 한계를 인식할 수 있다.

## 강의 개요 (~60분)
1. **유전체란 실제로 무엇인가?** (~8분) — 유전체 대 유전자 함량 정의; 코딩 대 비코딩 비율; "유전체"가 물리적 실체가 아니라 모형/어셈블리인 이유. 주석이 지속적 과정인 까닭을 동기화한다.
2. **읽기에서 참조 서열로: 시퀀싱과 어셈블리** (~10분) — Sanger 대 대규모 병렬(짧은 읽기) 시퀀싱; 커버리지/깊이; 콘티그(contig), 스캐폴드(scaffold), 갭(gap); 참조 대 de novo 어셈블리.
3. **읽기 정렬(read mapping)** (~8분) — 참조 서열에 대한 정렬이 계산적 병목인 이유; 씨앗-확장(seed-and-extend), 인덱싱(Burrows-Wheeler), 그리고 스플라이스 매퍼(spliced mapper)가 RNA-seq 읽기를 다루는 방법.
4. **서열 정렬의 기초** (~10분) — 동적 계획법에 의한 쌍별 정렬(전역/지역); 갭 페널티; BLOSUM62를 이용한 치환 점수화; 편집 거리(edit distance)와 생물학적으로 가중된 점수의 차이.
5. **BLAST와 상동성 검색** (~8분) — 휴리스틱 단어 기반 검색, E-값과 비트 점수, 그리고 BLAST가 어떻게 데이터베이스 검색을 주석을 위한 다루기 쉬운 문제로 바꾸는지.
6. **주석 파이프라인과 공개 자원** (~10분) — 유전자 예측(ab initio, 상동성, RNA-seq 증거); 기능 주석(도메인, GO); NCBI/Ensembl/UCSC에서의 탐색; 어셈블리와 좌표의 버전 관리.
7. **한계와 미해결 문제** (~6분) — 불완전하거나 오류가 있는 주석, 정렬이 어려운 영역, 구조 변이, 그리고 "완성된" 유전체가 여전히 바뀌는 이유.

## 교재 참고
- **Genetics: From Genes to Genomes (8e)** — 10장 DNA의 디지털 분석(Digital Analysis of DNA); 11장 유전체 주석(Genome Annotation). → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)

## 이 저장소의 노트
수업에서 소개할 리뷰 및 논문 (각각 en/ko 이중언어 쌍이 있음):
- [Goldman2016_PLoSgenet_WhatIsGenome](../review/Goldman2016_PLoSgenet_WhatIsGenome.md) — 틀을 잡는 글: "유전체"가 실제로 무엇을 뜻하는가; 강의 도입에 사용한다.
- [Hobert2010_Genetics_WholeGenomeSequencing](../review/Hobert2010_Genetics_WholeGenomeSequencing.md) — 일상적 도구로서의 전장 유전체 시퀀싱; 시퀀싱과 유전자 동정을 연결한다.
- [Shendure2016_Genetics_MassiveParallelGenetics](../review/Shendure2016_Genetics_MassiveParallelGenetics.md) — 대규모 병렬 시퀀싱/분석; 현대 주석의 바탕이 되는 기술.
- [Trapnell2009_NatBiotech_ShortReadMapping-primer](../review/Trapnell2009_NatBiotech_ShortReadMapping-primer.md) — 짧은 읽기 정렬(스플라이스 정렬 포함)에 대한 입문서; 읽기에서 참조로의 단계를 예시한다.
- [Eddy2004_NatureBiotechPrimer_DynamicProgramming](../review/Eddy2004_NatureBiotechPrimer_DynamicProgramming.md) — 동적 계획법 정렬에 대한 접근하기 쉬운 입문서; 정렬 부분의 핵심 알고리즘.
- [Eddy2004_NatureBiotechPrimer_BLOSUM62](../review/Eddy2004_NatureBiotechPrimer_BLOSUM62.md) — 치환 점수가 어디서 오는지; 동적 계획법 입문서와 함께 다룬다.
- [Kerfeld2011_PLoSBiol_BLAST](../review/Kerfeld2011_PLoSBiol_BLAST.md) — BLAST 실행과 해석에 대한 실용적 안내; 상동성 검색 부분의 실습 동반 자료.
- [Huddleston2016_Genetics_IncompleteHumanQTL](../review/Huddleston2016_Genetics_IncompleteHumanQTL.md) — 참조 유전체와 주석이 여전히 불완전함을 상기시킴; "한계" 부분에 사용한다.
