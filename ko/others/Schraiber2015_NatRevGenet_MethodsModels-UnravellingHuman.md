---
tags: [genetics, class, others, ko]
date: 2026-07-12
type: class
---

# Methods and Models for Unravelling Human Evolutionary History

## Citation (NLM)
Schraiber JG, Akey JM. Methods and models for unravelling human evolutionary history. Nat Rev Genet. 2015 Dec;16(12):727-740. doi:10.1038/nrg4005

**DOI:** [https://doi.org/10.1038/nrg4005](https://doi.org/10.1038/nrg4005)

---

## Summary

현대 인간 집단의 유전체에는 우리 종의 진화적 역사가 DNA 서열 변이 패턴으로 기록되어 있다. 해부학적 현대인은 약 20만 년 전 동아프리카에서 출현했으며, 약 7만 년 전의 아프리카 탈출(out-of-Africa) 사건과 그에 수반된 집단 병목 현상, 그 이후 전 세계 모든 거주 가능한 지역으로의 이주와 정착이라는 일반적 윤곽이 이미 확립되어 있다. 그러나 대규모 병렬 시퀀싱 기술의 등장으로 생성되는 전장유전체 데이터는 이보다 훨씬 복잡하고 세밀한 인류 역사 모델을 추론할 수 있는 기회를 제공하는 동시에, 방대한 데이터를 올바르게 해석하기 위한 방법론적 도전을 제기한다.

고품질 유전형 데이터를 확보하기 위한 품질관리(QC)와 탐색적 데이터 분석(EDA)은 모든 집단유전체 분석의 필수적 첫 단계이다. 이는 리드 매핑, 유전형 호출(genotype calling), 하디-바인베르크 평형 이탈 필터링, 분절 중복 지역 제거 등을 포함한다. 특히 저피복도(low coverage) 데이터에서는 이형접합 부위를 동형접합으로 잘못 판정하는 문제가 발생할 수 있어, 불확실성을 명시적으로 모델링하는 유전형 가능도(genotype likelihood) 기반 방법이 권장된다. 주성분 분석(PCA)은 집단 구조를 시각화하는 데 있어 핵심 탐색 도구이지만, 인구 확장 모델에서는 직관에 반하는 결과가 나올 수 있어 해석에 주의가 필요하다.

집단 구조와 혼합(admixture) 추론을 위한 방법들은 크게 PCA 기반, STRUCTURE 계열(ADMIXTURE, fastSTRUCTURE 등), 그리고 염색체 페인팅(chromosome painting) 기반으로 분류된다. STRUCTURE 계열 방법에서 집단 수(K) 결정은 과적합 문제 때문에 신중해야 하며, 교차검증 오류 최소화나 주변 가능도 비교 등의 방법이 활용된다. 혼합 개체에서 각 염색체 구간의 조상 집단을 파악하는 국소 조상 해독(local ancestry deconvolution, 염색체 페인팅)은 Li-Stephens 근사 모델에 기반한 HMM을 주로 사용하며, HAPMIX, fineSTRUCTURE, GLOBETROTTER 등이 대표적 도구이다.

복잡한 인구통계학적 역사를 추론하기 위한 방법은 크게 세 가지 데이터 유형에 기반한다. 첫째, 대립유전자 빈도 스펙트럼(SFS, site frequency spectrum) 기반 방법이다. SFS는 표본 내 파생 대립유전자가 각 빈도로 존재하는 부위 수를 집계한 것으로, 인구 성장은 희귀 변이의 과잉으로, 병목 현상도 유사하게 희귀 변이 과잉으로 반영된다. Poisson 임의장(PRF) 프레임워크 하에서 dadi, fastsimcoal2, fastNeutrino 등의 소프트웨어가 최대우도 추정으로 인구통계 매개변수를 추론한다. 둘째, 일치구간(IBD/IBS) 길이 분포를 활용하는 방법이다. IBD 구간은 재조합으로 끊기지 않은 채 공통 조상으로부터 전달된 게놈 구간으로, 그 길이 분포는 집단 크기 변화와 이주의 역사를 반영한다. 셋째, 전장유전체 일배체형 데이터에 기반한 방법으로, PSMC(Pairwise Sequentially Markovian Coalescent)와 MSMC가 대표적이며, 시간적 심도 있는 유효집단 크기 변화를 추론할 수 있다.

각 방법은 고유한 강점과 한계를 갖는다. SFS 기반 방법은 연결되지 않은 변이 부위를 가정하지만, 복합 가능도를 사용하면 편향은 없어도 표준오차가 과소평가될 수 있다. 일배체형 기반 방법은 더 많은 정보를 활용하지만 계산 비용이 높고 위상 정보가 필요하다. 선택의 교란 효과를 최소화하기 위해 기능 서열에서 먼 중립 영역을 선택하는 것이 중요하며, ENCODE, Roadmap Epigenomics 프로젝트의 기능유전체 데이터를 활용하여 선택의 영향을 받지 않는 중립 영역을 정의하는 것이 점점 더 중요해지고 있다.

---

## Significance in Introduction Context

- 전장유전체 시퀀싱 데이터에서 인류의 진화적 역사를 추론하기 위한 방법론들을 체계적으로 분류·비교함으로써, 집단유전체학 연구자들이 자신의 연구 질문에 적합한 방법을 선택하는 데 실용적인 지침을 제공한다.
- 데이터 품질관리의 중요성을 강조하면서, 분석 전 단계에서의 편향(기술적 노이즈, 기준 유전체 매핑 편향)이 이후 추론에 미치는 영향을 구체적으로 설명한다.
- 대립유전자 빈도 스펙트럼(SFS)의 정보 내용과 한계(통계적 식별가능성 문제)를 명확히 함으로써, 단순 SFS 분석만으로는 구별할 수 없는 인구통계 시나리오가 존재함을 교육한다.
- 중립 영역 선택의 중요성을 강조하며, 기능유전체 데이터(ENCODE 등)와의 통합을 통해 선택의 교란을 최소화하는 전략을 제시한다.
- 복잡 인구통계 모델 피팅에서 다중 시작점으로부터의 최적화, 단순 모델에서 복잡 모델로의 점진적 구축 등 실용적 모범 사례(best practices)를 제시한다.

---

## Key References

1. **Reich et al. (2009)** — [https://doi.org/10.1038/nature08365](https://doi.org/10.1038/nature08365) — 고대 아시아계 조상 집단인 Ancestral North Indian과 Ancestral South Indian의 혼합을 전장유전체 데이터로 규명
2. **Gutenkunst et al. (2009)** — [https://doi.org/10.1371/journal.pgen.1000695](https://doi.org/10.1371/journal.pgen.1000695) — dadi 소프트웨어를 이용한 확산 근사 기반 복잡 인구통계 추론 방법 제시
3. **Li & Durbin (2011)** — [https://doi.org/10.1038/nature10231](https://doi.org/10.1038/nature10231) — PSMC를 이용하여 단일 개체의 이배체 유전체에서 유효 집단 크기의 역사를 추론하는 방법 개발
4. **Schiffels & Durbin (2014)** — [https://doi.org/10.1038/ng.3015](https://doi.org/10.1038/ng.3015) — 복수 개체의 전장유전체 일배체형 데이터를 이용한 MSMC로 집단 분기와 크기 변화 동시 추론
5. **Lawson et al. (2012)** — [https://doi.org/10.1371/journal.pgen.1002453](https://doi.org/10.1371/journal.pgen.1002453) — fineSTRUCTURE 기반 염색체 페인팅으로 영국 집단 내 미세한 구조와 역사적 혼합 이벤트 탐지
6. **Pickrell & Pritchard (2012)** — [https://doi.org/10.1371/journal.pgen.1002967](https://doi.org/10.1371/journal.pgen.1002967) — Treemix를 이용한 집단 계통수와 혼합 그래프 동시 추론
7. **Price et al. (2006)** — [https://doi.org/10.1038/ng1847](https://doi.org/10.1038/ng1847) — 주성분 분석을 이용한 집단 층화 보정 방법(EIGENSTRAT) 개발
8. **Excoffier et al. (2013)** — [https://doi.org/10.1093/molbev/mst010](https://doi.org/10.1093/molbev/mst010) — fastsimcoal2를 이용한 SFS 기반 다집단 인구통계 추론

---

## Future Research Directions

- 선택과 인구통계를 동시에 모델링하는 방법론의 개발이 시급하다. 현재의 방법들은 대부분 이 두 힘을 분리하여 분석하는데, 이는 선택의 존재가 인구통계 추론을 편향시킬 수 있다는 근본적인 문제를 해결하지 못한다.
- 지리적으로 다양한 집단, 특히 아프리카 내 다양한 인구집단과 오세아니아, 아메리카 토착민 집단에 대한 전장유전체 데이터의 확보와 분석이 인류 이주사의 공백을 채우는 데 필수적이다.
- 고대 DNA와 현대 집단 데이터를 통합하여 시간적 심도를 가진 인구통계 추론을 수행하는 통합 방법론 개발이 요구된다.
- 근사 베이즈 계산(ABC), 딥러닝, 요약 통계 기반 추론 등 계산 효율성이 높은 방법들이 극히 복잡한 인구통계 모델(다수의 집단, 복잡한 이주 패턴)에 적용될 수 있도록 발전해야 한다.
- 개인 수준의 완전한 배위상(phased) 전장유전체 데이터를 경제적으로 생성할 수 있게 됨에 따라, 일배체형 기반 방법의 적용 범위를 넓히고 이들이 제공하는 시간적 해상도를 더욱 높이는 방향으로 방법론이 발전해야 한다.

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-12*
