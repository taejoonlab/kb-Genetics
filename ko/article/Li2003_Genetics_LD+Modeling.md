---
tags: [genetics, class, article, ko]
date: 2026-07-13
type: class
---

# Modeling Linkage Disequilibrium and Identifying Recombination Hotspots Using Single-Nucleotide Polymorphism Data

## Citation (NLM)
Li N, Stephens M. Modeling linkage disequilibrium and identifying recombination hotspots using single-nucleotide polymorphism data. Genetics. 2003;165(4):2213–2233.

**DOI:** DOI 미확인 (Genetics 2003년 12월호; 원본 텍스트에서 DOI 추출 불가)

---

## Summary

연결불균형(linkage disequilibrium, LD)은 집단에서 서로 다른 유전체 위치의 대립유전자들이 독립적으로 분리되지 않는 현상으로, 재조합(recombination), 돌연변이, 유전적 부동, 집단의 인구통계학적 역사가 복합적으로 작용한 결과이다. Li와 Stephens는 집단 표본의 SNP 데이터를 이용하여 LD 패턴을 모델링하고 재조합 핫스팟을 확인하는 새로운 통계 모델을 제시한다.

**기존 방법의 한계**: 당시 LD 분석의 대부분은 세 가지 한계를 지녔다. (1) 위치 쌍(pair)에 대해서만 LD를 계산하여 여러 위치를 동시에 고려하지 못함, (2) LD가 블록 형태의 구조를 갖는다고 가정하여 모든 영역에 적용하기 어려움, (3) LD 패턴을 재조합률 등 생물학적 메커니즘과 직접 연결하지 못함.

**새로운 모델 (PAC 모델)**: Li와 Stephens는 "Product of Approximate Conditionals(PAC)" 모델을 제안했다. 핵심 아이디어는, 새로운 단상형(haplotype)은 이미 관찰된 단상형들의 불완전한 모자이크로 볼 수 있다는 것이다. 구체적으로, 새로운 단상형은 마르코프 과정으로 각 단상형을 "복사(copy)"하는데, 복사 원본이 바뀌는 전환(jump) 속도가 재조합률(ρ = 4Nc)과 비례한다. 전환이 빈번할수록 재조합률이 높은 영역임을 시사한다. 이 모델은 숨겨진 마르코프 모델(hidden Markov model, HMM)을 이용해 계산적으로 효율적으로 구현된다.

**추정 성능**: 시뮬레이션 연구에서 PAC-B(바이어스를 수정한 모델)은 Hudson의 pairwise composite-likelihood 추정법(ˆCL)과 동등하거나 더 나은 성능을 보였다. 특히 마커 수가 많을수록(SNP ≥ 12개) PAC-B가 ˆCL보다 변동성이 낮고 더 정확했다. 반면 완전한 코알레센트 기반 MCMC 방법(infs, Recombine)은 계산 시간이 대폭 길었으며(PAC-B 30초 vs. 30시간), 비슷한 지역에서도 정확도가 낮은 경우가 있었다.

**재조합 핫스팟 탐지**: PAC 모델은 영역별로 재조합률이 다를 수 있도록 확장된다. 단순 핫스팟 모델(배경 재조합률 c와 핫스팟 강도 η의 두 파라미터)과, 더 일반적인 모델(마커 간 구간마다 독립적인 재조합률 배수 γ_j)을 모두 제시한다. 일반 모델에서는 γ_j의 사전 분포(log10(γ_j) ~ N(0, 0.5²))를 활용한 베이즈적 접근을 통해 과적합을 방지한다. 인구 팽창, 섬 모델, 선택적 사이트 제거 등 다양한 인구통계학적 시나리오에서 핫스팟 탐지 검정력은 90% 내외를 보였다(핫스팟 강도 η = 10 기준).

**한계 및 향후 방향**: PAC 모델은 집단의 인구통계학적 역사(팽창, 이주, 구조)를 단순화된 중립 집단 가정으로 근사한다. 단상형 순서에 따라 우도가 달라지는 문제가 있어, 20개의 무작위 순서로 평균을 낸다. 저자들은 이 모델이 LD 매핑, 단상형 위상 결정(phasing), 결측 유전자형 대체(imputation) 등 다양한 응용에 활용될 수 있음을 제안한다.

---

## Significance in Introduction Context

이 논문이 해당 분야의 도입부에서 갖는 의미:
- 집단의 재조합 역사로부터 LD 패턴을 모델링한다는 개념적 전환을 보여주며, LD 분석이 단순한 통계 요약을 넘어 집단 역사와 생물학적 메커니즘을 연결하는 도구임을 제시한다
- "복사 모델(copying model)"이라는 직관적인 틀을 통해, 이후 단상형 추정, 유전자형 대체(imputation), 집단 구조 추정, 조상 유전체 추론(local ancestry) 등 수많은 현대 집단유전학 도구의 기초가 되었다
- 계산 효율성과 생물학적 해석 가능성을 동시에 갖춘 방법론 개발의 모범 사례로서, 수업에서 방법론 논문을 어떻게 평가해야 하는지를 가르치는 데 적합하다

---

## Key References

본문에서 인용된 핵심 참고문헌 (DOI URL 포함):

1. **Fearnhead P, Donnelly P (2001)** — [https://doi.org/10.1093/genetics/159.3.1299](https://doi.org/10.1093/genetics/159.3.1299) — 집단 데이터에서 재조합률 추정; Li & Stephens가 확장한 FD 근사법 원형
2. **Stephens M, Donnelly P (2000)** — [https://doi.org/10.1111/1467-9868.00254](https://doi.org/10.1111/1467-9868.00254) — 분자 집단유전학 추론; 복사 모델의 초기 형태 제안
3. **Hudson RR (2001)** — [https://doi.org/10.1093/genetics/159.4.1805](https://doi.org/10.1093/genetics/159.4.1805) — 쌍별 복합 우도 기반 재조합률 추정법 제안; Li & Stephens 비교 기준선
4. **Jeffreys AJ et al. (2001)** — [https://doi.org/10.1038/35073100](https://doi.org/10.1038/35073100) — 정자 유형 분석을 통한 MHC 영역의 재조합 핫스팟 실험적 확인

---

## Future Research Directions

이 논문에서 제기된 미해결 질문과 향후 연구 아이디어:

- 인구통계학적 역사(집단 팽창, 병목 현상, 이주)가 PAC 모델의 재조합률 추정 정확도에 미치는 영향을 정량화하고, 이를 보정하는 개선된 근사 조건부 표본 분포(CSP) 개발
- 유전자 전환(gene conversion)과 재조합 간섭(interference)을 모델에 통합하여, 미세 재조합 구조 추정의 정확도를 높이는 연구
- 전체 게놈 규모에서 재조합 핫스팟의 서열 특성을 파악하고, PRDM9 등 핫스팟을 결정하는 유전적 요소와 PAC 모델 추정 결과를 비교하는 연구

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
