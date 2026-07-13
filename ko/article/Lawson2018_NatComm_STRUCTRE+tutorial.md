---
tags: [genetics, class, article, ko]
date: 2026-07-13
type: class
---

# STRUCTURE 및 ADMIXTURE 막대 그래프를 과잉 해석하지 않는 방법에 대한 튜토리얼

## Citation (NLM)
Lawson DJ, van Dorp L, Falush D. A tutorial on how not to over-interpret STRUCTURE and ADMIXTURE bar plots. Nat Commun. 2018;9(1):3258. doi:10.1038/s41467-018-05257-7

**DOI:** [https://doi.org/10.1038/s41467-018-05257-7](https://doi.org/10.1038/s41467-018-05257-7)

---

## Summary

STRUCTURE와 ADMIXTURE는 유전 데이터를 기반으로 개인과 집단을 특성화하는 데 널리 사용되는 모델 기반 군집화 알고리즘이다. 이 프로그램들은 각 개체가 K개의 유전적으로 구분되는 조상 집단으로부터 혈통을 가진다고 가정하는 '혼합 모델(admixture model)'을 사용하여, 조상 집단의 대립유전자 빈도와 각 개체의 혼합 비율을 동시에 추정한다. 아프리카계 미국인의 유전적 역사(서아프리카 및 유럽 조상의 혼합)와 같이 모델 가정이 충족되는 경우에는 결과 해석이 생물학적으로 타당하다.

그러나 저자들은 매우 다른 인구학적 역사를 가진 세 가지 시나리오—'최근 혼합(Recent Admixture)', '유령 혼합(Ghost Admixture)', '최근 병목(Recent Bottleneck)'—가 거의 동일한 ADMIXTURE 막대 그래프를 생성할 수 있음을 시뮬레이션을 통해 보여준다. 표준 해석 프로토콜을 그대로 따를 경우, 후자 두 시나리오에서는 잘못된 인구 역사가 추론될 수 있다.

이를 해결하기 위해 저자들은 badMIXTURE라는 새로운 도구를 개발했다. badMIXTURE는 CHROMOPAINTER로 생성된 '염색체 채색 팔레트(chromosome painting palettes)'를 활용하여 STRUCTURE/ADMIXTURE 모델의 적합도를 평가한다. 핵심 원리는, 진정한 최근 혼합 시나리오에서는 혼합된 개체의 팔레트가 조상 집단 팔레트의 혼합 비율에 의해 잘 예측될 수 있어야 한다는 것이다. 잔차 패턴이 체계적으로 나타난다면 모델이 데이터에 잘 맞지 않음을 시사한다.

네 가지 실제 사례 연구를 통해 이 방법의 유용성이 검증되었다. 에티오피아 Ari 집단 사례에서는 대장장이(Blacksmith)와 경작자(Cultivator) 집단이 서로 다른 조상 기원을 가진다는 이전의 ADMIXTURE 기반 해석이, 사실은 대장장이 집단의 최근 유전적 부동(병목 효과)에 의한 것임이 badMIXTURE 분석으로 밝혀졌다. 전 세계 인간 데이터 분석에서는 표본 편향이 K=2에서 K=9까지 매우 오해를 불러일으키는 결과를 초래할 수 있음을 보여주었다—예를 들어 프랑스인이 동아시아인과 파푸아 고지대인의 혼합으로 추론되는 식으로. 인도 데이터 분석에서는 ASI 집단에서 높은 잔차가 나타나며, 최근 유전적 부동을 보정한 후 4개 조상 구성 요소의 증거가 확인되었다.

저자들의 결론은, STRUCTURE/ADMIXTURE는 데이터 요약 도구로서는 유용하지만 결코 분석의 끝이 되어서는 안 되며, badMIXTURE를 이용한 적합도 검정과 다른 가설 검정 방법들을 함께 적용해야 한다는 것이다.

---

## Significance in Introduction Context

- 집단유전학 분석에서 가장 널리 사용되는 도구 중 하나인 STRUCTURE/ADMIXTURE의 근본적인 한계와 오용 사례를 체계적으로 제시함으로써, 방법론적 비판적 사고의 필요성을 교육함
- 동일한 시각적 출력이 전혀 다른 인구 역사 시나리오에서 나타날 수 있다는 '모델 비식별성(model non-identifiability)' 문제를 실증적으로 보여주는 핵심 사례
- 수업에서 이 논문을 읽어야 하는 이유: 집단구조 분석 도구의 통계적 가정과 한계를 이해하고, 결과를 비판적으로 해석하는 능력을 기르기 위함; GWAS 및 집단유전체학 연구에서 흔히 전제로 제시되는 조상 추정 결과의 신뢰성을 평가하는 데 직접적으로 필요한 배경 지식 제공

---

## Key References

1. **Pritchard et al. (2000)** — [https://doi.org/10.1093/genetics/155.2.945](https://doi.org/10.1093/genetics/155.2.945) — STRUCTURE 알고리즘 원논문; 다중 유전자좌 유전형 데이터를 이용한 집단 구조 추론
2. **Alexander et al. (2009)** — [https://doi.org/10.1101/gr.094052.109](https://doi.org/10.1101/gr.094052.109) — ADMIXTURE; 비관련 개체의 혈통 비율 고속 추정
3. **van Dorp et al. (2015)** — [https://doi.org/10.1371/journal.pgen.1005397](https://doi.org/10.1371/journal.pgen.1005397) — 에티오피아 Ari 대장장이/경작자 집단의 공통 기원에 대한 증거

---

## Future Research Directions

- badMIXTURE를 연계 정보 없이도 더 안정적으로 작동하도록 개선하여 소규모 마커 세트에도 적용 가능하게 확장
- 고대 DNA 분석에서 ADMIXTURE 결과의 신뢰성 평가 방법론 개발; 고대 샘플은 현대 집단의 혼합으로 추론되는 경향이 있어 바이어스 교정이 중요

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
