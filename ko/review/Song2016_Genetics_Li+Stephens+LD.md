---
tags: [genetics, class, review, ko]
date: 2026-07-13
type: class
---

# Na Li and Matthew Stephens on Modeling Linkage Disequilibrium

## Citation (NLM)
Song YS. Na Li and Matthew Stephens on Modeling Linkage Disequilibrium. Genetics. 2016;203(3):1005–1006. doi:10.1534/genetics.116.191817

**DOI:** [https://doi.org/10.1534/genetics.116.191817](https://doi.org/10.1534/genetics.116.191817)

---

## Summary

이 논문은 Genetics 저널의 "CLASSIC" 섹션에 게재된 짧은 논평(commentary)으로, Yun S. Song이 Li & Stephens(2003)의 LD 모델링 논문이 집단유전학 분야에 미친 영향을 평가하는 글이다.

**Li & Stephens (2003)의 핵심 기여**: Li와 Stephens의 2003년 논문은 재조합이 있는 계보 과정의 본질적 특성을 근사하는 확률적 모델을 제시하여, 대규모 유전체 데이터에서 통계적 추론의 패러다임 전환을 이끌었다. 이들의 핵심 방법론적 통찰은 다음 단상형 hₖ가 이미 관찰된 단상형 h₁, …, hₖ₋₁의 불완전한 복사(imperfect copy)로 근사되는 조건부 표본 확률(conditional sampling probability, CSP)을 구성한다는 것이다. 이 접근법은 Stephens & Donnelly(2000)가 완전 연결 유전좌에 대해 제안한 근사법과, Fearnhead & Donnelly(2001)가 재조합을 포함하도록 이를 확장한 연구를 기반으로 한다. Li & Stephens는 이를 더욱 단순화하면서도, 재조합률이 짧은 거리에 걸쳐 변동할 수 있도록 하는 모델로 발전시킴으로써 재조합 핫스팟의 미세 구조 추론을 가능하게 했다.

**분야에 미친 영향**: Li & Stephens의 "복사 모델"은 그 후 15년 이상에 걸쳐 극히 다양한 집단유전학 문제에 적용되고 확장되었다.

- *재조합 관련 응용*: 유전자 전환 파라미터 추정(Gay et al. 2007; Yin et al. 2009), 혼혈 집단에서의 재조합률 추정(Hinch et al. 2011; Wegmann et al. 2011)
- *집단 역사 복원*: 인류 이주 역사 추론(Hellenthal et al. 2008), 미세 집단 구조 분석(Lawson et al. 2012), 혼혈 집단에서의 지역 조상 추정(Sundquist et al. 2008; Price et al. 2009)
- *GWAS 응용*: 단상형 위상 결정(phasing, Stephens & Scheet 2005), 유전자형 대체(genotype imputation, Marchini et al. 2007; Howie et al. 2009; Li et al. 2010) — 이는 GWAS의 통계적 검정력을 크게 향상시켰다

**이론적 기여**: Li & Stephens의 작업은 CSP의 이론적 개선을 위한 후속 연구도 촉진했다(Griffiths et al. 2008; Paul & Song 2010). 이러한 연구는 가변 집단 크기, 분기 시간, 집단 간 유전자 흐름 등 더 복잡한 집단 역사를 포함하는 모델에서 인구통계학적 역사 추론을 가능하게 했다(Sheehan et al. 2013; Steinrücken et al. 2013, 2015). 최근 확장(Rasmussen et al. 2014)은 연관 조상 그래프(ancestral recombination graph)를 표본화하는 몬테카를로 알고리즘을 개발하여 연관 매핑과 자연 선택 신호 탐지에 응용했다.

**결론**: Li & Stephens의 논문은 생물학적으로 동기화된 근사법을 사용하여 유전체 규모의 대용량 데이터에서 효율적인 통계적 추론을 가능하게 한 획기적인 연구로 평가된다. 집단유전학에서 추론 방법론을 개발하는 데 관심 있는 모든 연구자가 필독해야 할 논문이다.

---

## Significance in Introduction Context

이 논문이 해당 분야의 도입부에서 갖는 의미:
- 단일 방법론 논문(Li & Stephens 2003)이 이후 15년에 걸쳐 집단유전학의 다양한 하위 분야를 어떻게 변화시켰는지를 보여주는 구체적인 사례로, 방법론 혁신의 파급력을 이해하는 데 도움을 준다
- 복사 모델이 GWAS의 유전자형 대체(imputation)에서 핵심 역할을 함으로써, 기초 집단유전학 이론이 임상 응용에 직접 연결되는 경로를 명확히 보여준다
- 원래 논문(Li & Stephens 2003)을 읽기 전에 먼저 읽으면, 해당 논문의 어떤 부분이 가장 중요한지를 빠르게 파악하는 데 도움이 되는 길잡이 역할을 한다

---

## Key References

본문에서 인용된 핵심 참고문헌 (DOI URL 포함):

1. **Li N, Stephens M (2003)** — Genetics 165:2213–2233 — 원본 논문; LD 모델링 및 재조합 핫스팟 탐지
2. **Stephens M, Donnelly P (2000)** — [https://doi.org/10.1111/1467-9868.00254](https://doi.org/10.1111/1467-9868.00254) — 복사 모델의 원형; 완전 연결 유전좌에 대한 CSP 근사
3. **Fearnhead P, Donnelly P (2001)** — [https://doi.org/10.1093/genetics/159.3.1299](https://doi.org/10.1093/genetics/159.3.1299) — 재조합을 포함한 CSP 근사; Li & Stephens가 단순화한 FD 근사법
4. **Hellenthal G et al. (2008)** — [https://doi.org/10.1371/journal.pgen.1000078](https://doi.org/10.1371/journal.pgen.1000078) — 복사 모델을 이용한 인류 이주 역사 추론
5. **Hinch AG et al. (2011)** — [https://doi.org/10.1038/nature10336](https://doi.org/10.1038/nature10336) — 아프리카계 미국인에서의 재조합 지형도; 복사 모델 응용
6. **Marchini J et al. (2007)** — [https://doi.org/10.1038/ng2088](https://doi.org/10.1038/ng2088) — 복사 모델 기반 GWAS 유전자형 대체 방법(IMPUTE)

---

## Future Research Directions

이 논문에서 제기된 미해결 질문과 향후 연구 아이디어:

- 더 복잡한 인구통계학적 역사(가변 집단 크기, 구조화된 집단, 다중 이주)를 포함하는 개선된 CSP 근사법 개발로, 재조합률 추정 편향을 줄이는 연구
- 전체 게놈 조상 재조합 그래프(ancestral recombination graph, ARG) 표본화 알고리즘의 계산 효율을 향상시켜, 수백만 개의 SNP와 수천 명의 개체로 구성된 biobank 규모 데이터에 적용하는 연구
- 복사 모델의 틀을 고대 DNA와 현대 집단 데이터를 통합하여 집단 분기 시간, 선택 스윕, 유전자 흐름을 동시에 추론하는 방향으로 확장하는 연구

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
