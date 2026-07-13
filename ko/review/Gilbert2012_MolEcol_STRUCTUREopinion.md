---
tags: [genetics, class, review, ko]
date: 2026-07-13
type: class
---

# Recommendations for Utilizing and Reporting Population Genetic Analyses: The Reproducibility of Genetic Clustering Using the Program STRUCTURE

## Citation (NLM)
Gilbert KJ, Andrew RL, Bock DG, Franklin MT, Kane NC, et al. Recommendations for utilizing and reporting population genetic analyses: the reproducibility of genetic clustering using the program STRUCTURE. Mol Ecol. 2012;21(20):4925-4930. doi:10.1111/j.1365-294X.2012.05754.x

**DOI:** [https://doi.org/10.1111/j.1365-294X.2012.05754.x](https://doi.org/10.1111/j.1365-294X.2012.05754.x)

---

## Summary

이 논문은 분자생태학 분야에서 가장 널리 사용되는 집단 구조 분석 소프트웨어 STRUCTURE의 재현성(reproducibility)을 체계적으로 평가하고, 향후 사용 및 보고 기준을 권장하는 의견서(News and Views: Opinion)이다.

STRUCTURE는 다중 유전자좌 유전형 데이터를 이용하여 개체들을 유전적으로 유사한 클러스터(집단)로 나누는 베이지안 클러스터링 프로그램으로, 2012년 기준 Web of Science에서 5000건 이상 인용되었다. 이 프로그램은 마코프 연쇄 몬테카를로(MCMC) 시뮬레이션을 이용하여 각 개체의 집단 소속 확률을 추정하며, Hardy-Weinberg 평형 및 집단 내 연관 평형을 가정한다. MCMC의 확률론적(stochastic) 특성으로 인해 동일한 데이터와 파라미터로도 실행마다 결과가 다를 수 있다.

저자들은 2011년에 발표된 논문 23편의 데이터를 재분석하여 재현성을 검증했다. 최적 집단 수(K)를 같은 방식으로 추론할 수 있었던 30개 분석 중 70%(21개)만이 재현 가능했다. 재현 실패의 주요 원인은: (1) 보관된 데이터의 불완전성 또는 부정확한 설명, (2) 방법론 보고의 불충분함, (3) MCMC의 본질적 확률성이었다. 특히 60개 데이터셋 중 35%는 저자의 설명과 맞지 않는 데이터(다른 개체수나 좌위수)를 포함하고 있었다.

저자들은 세 가지 핵심 권장사항을 제시한다:

1. **데이터 보관**: 최종 버전의 유전형 파일과 파라미터 파일 모두를 보관해야 한다. 분석에 사용된 개체의 부분집합을 명확히 표시하고, GUI 버전을 사용했더라도 파라미터 파일을 내보내 보관해야 한다.

2. **충분한 번인(burn-in)과 실행 길이**: 최소 100,000회의 번인 반복과 MCMC 반복을 권장하며, 일부 데이터셋은 훨씬 더 긴 실행이 필요하다. 재현성을 위해 Evanno 방법 사용 시 최소 20회의 독립적 반복 실행을 권장한다.

3. **K 선택 방법 명시**: Pritchard 방법(로그 가능도 플롯)이나 Evanno 방법(ΔK 플롯) 중 어느 것을 사용했는지 명확히 기술하고, 결과를 ln Pr(X|K) 그래프, ΔK 그래프, 개체별 소속 계수(Q) 바 플롯 형태로 보고해야 한다.

논문은 STRUCTURE가 가장 일반적으로 사용되는 프로그램이지만 경우에 따라 PCA, INSTRUCT, TESS, BAPS 등 다른 방법이 더 적합할 수 있음도 언급한다.

---

## Significance in Introduction Context

- 집단 유전학 분석의 재현성 문제를 실증적으로 보여주며, 현대 생물통계학 소프트웨어 사용의 책임에 대한 인식을 높인다
- STRUCTURE의 작동 원리(베이지안 클러스터링, MCMC, Hardy-Weinberg 가정)를 이해함으로써 집단 구조 개념과 그 분석 방법론을 교육한다
- 재현 가능한 과학(reproducible science)과 데이터 공유의 중요성을 집단 유전학 맥락에서 구체적으로 제시한다

---

## Key References

1. **Pritchard et al. (2000)** — https://doi.org/10.1093/genetics/155.2.945 — STRUCTURE 프로그램 원논문; 집단 구조 추론을 위한 베이지안 클러스터링 방법
2. **Evanno et al. (2005)** — https://doi.org/10.1111/j.1365-294X.2005.02553.x — ΔK 방법을 이용한 최적 K 결정 방법
3. **Falush et al. (2003)** — https://doi.org/10.1093/genetics/164.4.1567 — STRUCTURE의 연관 좌위 및 상관 대립유전자 빈도 처리를 위한 확장

---

## Future Research Directions

- MCMC 기반 집단 구조 분석의 재현성을 향상시키기 위한 표준화된 파이프라인 개발
- 전장 유전체 SNP 데이터에 적합한 확장 가능한 집단 구조 추론 방법 연구
- 교육 목적의 STRUCTURE 실습 가이드라인 및 교수학습 자료 개발

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
