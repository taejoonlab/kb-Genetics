---
tags: [genetics, class, article, ko]
date: 2026-07-13
type: class
---

# Inference of Population Structure Using Multilocus Genotype Data

## Citation (NLM)
Pritchard JK, Stephens M, Donnelly P. Inference of population structure using multilocus genotype data. Genetics. 2000;155(2):945-959.

**DOI:** [https://doi.org/10.1093/genetics/155.2.945](https://doi.org/10.1093/genetics/155.2.945)

---

## Summary

집단유전학의 근본적인 과제 중 하나는 다수의 개체로 이루어진 표본을 이용해 집단 구조를 추정하는 것이다. Pritchard, Stephens, Donnelly(2000)는 다중 유전자좌 유전형 데이터를 활용하여 집단 구조를 추론하는 베이지안 군집화 방법론을 제시하였으며, 이 방법론을 구현한 소프트웨어 STRUCTURE는 집단유전학 분야에서 가장 널리 인용되는 도구 중 하나가 되었다.

이 연구의 핵심 아이디어는 다음과 같다. K개의 집단이 존재한다고 가정할 때, 각 집단은 각 유전자좌에서의 대립유전자 빈도로 특성화된다. 표본 내 개체들은 그 유전형을 바탕으로 각 집단에 확률적으로 배정된다. 방법론은 크게 두 가지 모형을 포함한다. 첫 번째는 혼합 없는 모형(no-admixture model)으로, 각 개체가 오직 하나의 집단에서 유래했다고 가정한다. 두 번째는 혼합 모형(admixture model)으로, 개체의 유전체가 복수의 집단에서 비롯될 수 있으며 각 집단으로부터 유래한 비율을 추정한다.

통계적으로 이 방법론은 마르코프 연쇄 몬테카를로(MCMC) 방법, 특히 깁스 샘플링(Gibbs sampling)을 이용하여 사후 분포 Pr(Z, P|X)에서 표본을 추출한다. 여기서 X는 관측된 유전형, Z는 개체의 집단 출처, P는 각 집단의 대립유전자 빈도이다. 모형은 집단 내 하디-바인베르크 평형(Hardy-Weinberg equilibrium)과 유전자좌 간 연관 평형(linkage equilibrium)을 가정한다.

집단 수 K의 추정은 어려운 문제로, 저자들은 Pr(X|K)에 대한 근사 추정량을 이용한 사후 분포 Pr(K|X)를 계산하는 대략적인 방법을 제안하였다. 이 추정은 정확한 통계적 근거가 부족하지만 실제 자료에서 합리적인 결과를 제공한다.

저자들은 시뮬레이션 자료와 실제 자료 두 종류에 방법론을 적용하였다. 시뮬레이션 자료에서는 K = 1(단일 집단), K = 2(두 이산 집단), 그리고 두 집단의 혼합으로 이루어진 세 가지 모형을 사용하였으며, 방법론이 집단 구조를 정확하게 탐지하고 개체를 올바른 집단에 배정함을 확인하였다. 실제 자료로는 케냐의 멸종 위기 조류인 타이타 개똑새(Taita thrush, Turdus helleri)의 7개 마이크로위성 유전자좌 자료와, 아프리카인 및 유럽인의 30개 이중 대립 제한 부위 다형성 자료가 사용되었다.

타이타 개똑새 자료에서는 K = 3이 최적으로 추정되었으며, 세 지리적 그룹(차와, 음볼롤로, 응강가오)이 유전적으로 뚜렷한 집단을 형성함을 보여주었다. 또한, 지리 정보를 사전 분포에 통합함으로써 이민자(migrants)를 탐지하는 능력이 향상됨을 보였다.

인간 자료에서는 K = 2가 아프리카인과 유럽인을 명확하게 구분하였으나, 더 높은 K 값이 대륙 내 세부 집단 구조를 포착할 가능성도 제시하였다. 거리 기반 군집화 방법과의 비교를 통해, STRUCTURE 방법론이 명확한 확률 모형에 기반함으로써 통계적 불확실성 평가와 정보의 통합에 있어서 우월함을 보여주었다.

이 논문은 집단 구조 분석의 표준 방법론을 제시하여 인간 유전학, 진화 유전학, 분자 생태학에 광범위한 영향을 미쳤으며, 혼합 모형은 기계학습 분야의 잠재적 디리클레 할당(LDA) 모형과 동일한 구조를 가지고 있어 학제간 파급효과도 컸다.

---

## Significance in Introduction Context

- 다중 유전자좌 데이터로부터 집단 구조를 추론하는 최초의 모형 기반 베이지안 방법론을 제시하여, 이후 GWAS, 집단 진화, 혼혈 분석 등의 기반이 됨
- 거리 기반 방법(neighbor-joining 등)의 한계를 극복하고, 확률 모형을 통한 불확실성 정량화라는 패러다임 전환을 이끔
- 수업에서 이 논문을 읽어야 하는 이유: 베이지안 통계, MCMC, 집단유전학의 기본 개념(HWE, LE)이 어떻게 실질적 분석 도구로 통합되는지 보여주는 대표적 사례

---

## Key References

1. **Rannala B, Mountain JL (1997)** — [https://doi.org/10.1073/pnas.94.17.9197](https://doi.org/10.1073/pnas.94.17.9197) — 다중 유전자좌 유전형을 이용한 이민자 탐지, STRUCTURE의 전신
2. **Falush D et al. (2003)** — [https://doi.org/10.1534/genetics.164.4.1567](https://doi.org/10.1534/genetics.164.4.1567) — 연관 유전자좌와 상관 대립유전자 빈도를 포함한 STRUCTURE 확장
3. **Novembre J (2016)** — [https://doi.org/10.1534/genetics.116.195164](https://doi.org/10.1534/genetics.116.195164) — Genetics 클래식 논평: 이 논문의 역사적 의의 정리

---

## Future Research Directions

- K 추정의 통계적 엄밀성 개선: 현재의 근사 방법을 대체하는 정보 이론적 접근법 개발
- 대규모 SNP 데이터(수백만 변이체, 수천 개체)에서의 계산 효율화 — fastSTRUCTURE, ADMIXTURE 등의 후속 연구 필요
- 지리적 연속성을 가진 집단(격리에 의한 거리, IBD)에서의 방법론 적용 한계 극복

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
