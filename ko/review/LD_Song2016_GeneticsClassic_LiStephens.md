---
tags: [genetics, class, review, ko]
date: 2026-07-13
type: class
---

# Na Li and Matthew Stephens on Modeling Linkage Disequilibrium

## Citation (NLM)
Song YS. Na Li and Matthew Stephens on Modeling Linkage Disequilibrium. Genetics. 2016 Jul;203(3):1005-1006. doi:10.1534/genetics.116.191817.

원본 논문: Li N, Stephens M. Modeling linkage disequilibrium and identifying recombination hotspots using single-nucleotide polymorphism data. Genetics. 2003 Dec;165(4):2213-2233.

**DOI:** [https://doi.org/10.1534/genetics.116.191817](https://doi.org/10.1534/genetics.116.191817)

---

## Summary

이 Genetics Classic 논평은 Yun S. Song이 Li and Stephens (2003) 논문의 역사적 의의를 정리한 것이다. Li와 Stephens의 원 논문은 연쇄 불평형(linkage disequilibrium, LD) 모델링과 재조합 핫스팟(recombination hotspot) 추론에 혁명적인 접근법을 제시하여, 집단유전학 통계 추론의 패러다임 전환을 이끌었다.

**핵심 계산 문제**: 집단유전학에서 재조합을 포함하는 모델의 우도(likelihood)를 계산하는 것은 극도로 어렵다. 재조합은 다른 유전자 좌위들이 서로 다른 진화적 역사를 가지게 만들고, 이로 인해 모델의 차원이 폭발적으로 증가한다. 기존 접근법들은 연산 비용이 너무 커서 실제 집단유전체 데이터에 적용하기 어려웠다.

**Li-Stephens 모델의 핵심 아이디어**: Li와 Stephens는 **조건부 표본 확률(conditional sampling probability, CSP)**을 근사하는 우아한 방법을 제안했다. 다음 단상형(haplotype) hk를 이전에 관찰된 k-1개의 단상형들 중 하나를 "불완전하게 복사(imperfect copying)"한 것으로 모델링하는 것이다. 이때 복사 오류는 돌연변이에 해당하고, 어떤 단상형으로부터 복사할지 전환하는 것은 재조합에 해당한다. 이 "복사 모델(copying model)"은 숨겨진 마르코프 모델(Hidden Markov Model, HMM)로 효율적으로 계산되며, 연산 비용이 극적으로 감소했다.

**영향**: Li-Stephens 모델은 이후 집단유전학의 광범위한 문제들에 적용되었다: 재조합률의 세밀한 지도 작성, 혼합 집단에서의 재조합률 추론, 인간 이주 역사 추론, 세밀한 집단 구조 분석, 혼합 집단에서의 국소 조상 추론, 그리고 GWAS(전장유전체 연관 분석)의 핵심 기반이 되는 단상형 위상 분석(haplotype phasing)과 유전형 대입(genotype imputation)에 이르기까지. BEAGLE, IMPUTE2, SHAPEIT2 등 현재 널리 사용되는 도구들이 모두 이 모델을 기반으로 한다.

**이론적 발전**: Li-Stephens 모델은 더 정확한 CSP 근사를 위한 이론 연구를 촉발했으며, 복잡한 집단 인구통계(가변 집단 크기, 분기 시간, 유전자 흐름)를 추론하는 방법으로 발전했다.

---

## Significance in Introduction Context

- 연쇄 불평형(LD) 개념의 계산적 모델링이 현대 집단유전학과 GWAS의 기반이 됨을 이해하게 한다
- HMM 기반 근사 추론이 불가능해 보이던 계산 문제를 어떻게 해결했는지 보여주는 탁월한 사례이다
- Li-Stephens 모델은 직접 실험 없이 순수한 수리·통계 모델만으로도 강력한 생물학적 추론이 가능함을 증명한다
- 수업에서 이 논문을 읽어야 하는 이유: LD, 재조합 핫스팟, GWAS, 단상형 분석 등 현대 집단유전학의 핵심 개념과 방법의 기반을 이해하기 위해

---

## Key References

1. **Li N, Stephens M (2003)** — [https://doi.org/10.1534/genetics.165.4.2213](https://doi.org/10.1534/genetics.165.4.2213) — 원 논문
2. **Fearnhead P, Donnelly P (2001)** — Genetics 159:1299–1318 — CSP 근사의 선행 연구
3. **Marchini J et al. (2007)** — [https://doi.org/10.1038/ng2051](https://doi.org/10.1038/ng2051) — Li-Stephens 기반 GWAS 유전형 대입 방법

---

## Future Research Directions

- Li-Stephens 모델을 고대 DNA 및 단일 세포 유전체 데이터에 적용하는 방법론 개발
- 더 복잡한 집단 구조(선택, 이주, 근친 교배)를 통합하는 확장 모델 개발
- 최신 딥러닝 방법과 Li-Stephens 모델의 결합을 통한 집단유전학 추론 정확도 향상

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
