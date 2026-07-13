---
tags: [genetics, class, review, ko]
date: 2026-07-13
type: class
---

# Luria-Delbrück 분포에 대한 Haldane의 해법

## Citation (NLM)
Sarkar S. Haldane's solution of the Luria-Delbrück distribution. Genetics. 1991;127(2):257-261.

**DOI:** [https://genetics.org/content/127/2/257](https://genetics.org/content/127/2/257)

---

## Summary

보스턴대학교 과학철학·역사학 센터의 Sahotra Sarkar가 쓴 이 Genetics Perspectives 논문은, J.B.S. Haldane이 1946년 Luria-Delbrück 분포의 첫 번째 해법을 손으로 작성한 미발표 원고를 복원하고 그 역사적·수학적 의의를 논한다.

배경—Luria & Delbrück의 변동 시험(fluctuation test): 1940년대에 세균 돌연변이가 환경 자극에 반응하여 발생하는지(directed/adaptive mutation), 아니면 자발적으로 일어나는지(random, spontaneous mutation)가 논쟁의 핵심이었다. Luria와 Delbrück(1943)은 이를 검증하기 위한 "변동 시험"을 고안했다. 여러 세균 배양관을 동일 초기 세포에서 독립적으로 키운 후, 각 배양관의 세균을 파지를 함유한 플레이트에 도말하여 저항성 집락 수를 센다. 만약 저항성 돌연변이가 자발적으로 일어난다면: 일부 배양관에서는 초기 세대에 돌연변이가 발생하여 기하급수적으로 증식하여 많은 저항성 세포를 만들고, 다른 배양관에서는 전혀 돌연변이가 없다. 따라서 배양관 간 집락 수의 분산이 매우 크다. 반대로, 돌연변이가 파지에 노출된 후 유발된다면: 각 배양관에서 플레이팅 후 마지막 세대에만 돌연변이가 발생하므로 분산이 포아송 분포처럼 작다. 이 핵심 원리—두 가설이 예측하는 분산의 차이—가 변동 시험의 근거다. Luria & Delbrück는 평균과 분산의 근사식을 유도했지만, "수학적 어려움"을 이유로 분포 자체를 구하지는 못했다.

Haldane의 미발표 기여: Luria & Delbrück의 결과에 주목한 Haldane(런던대 생물계량학 교수)은 분포 자체를 구하는 조합론적(combinatorial) 방법을 개발했다. 핵심 아이디어: x개의 돌연변이체를 얻는 방법의 수는 x를 2의 거듭제곱의 합으로 분해하는 방법(partitions)의 수에 대응한다. 각 분해는 특정 세대에 각각의 돌연변이가 발생했음을 의미하며, 각 경우의 확률을 계산하고 합산하면 P_x를 얻는다. Haldane은 또한 이상적 실험 조건에서 벗어나는 네 가지 경우—(1) 일부만 플레이팅; (2) 비동기 분열; (3) 세균 사망; (4) 돌연변이체의 낮은 성장률—를 체계적으로 분석했다. 그의 결론 중 중요한 것: 이 비이상적 조건들은 모두 분포의 분산을 감소시킨다. 따라서 분산 감소 자체만으로는 지향적 돌연변이(directed mutation)의 증거가 될 수 없다.

왜 Haldane은 발표하지 않았는가? Sarkar는 1948년 Lea & Coulson이 미분방정식 방법으로 유사한 수치적 해법을 제출하여 저널(당시 Haldane이 편집장이던 Journal of Genetics)에 제출했을 때, Haldane이 자신의 원고를 부록으로 추가하려 했지만 Coulson의 촉박한 일정과 Haldane 자신의 폭넓은 관심사로 인해 결국 출판하지 못한 것으로 분석한다. 역사적 아이러니로, R.A. Fisher도 1946년 Crow가 같은 문제를 제시했을 때 "등받이에 기대어 약 1분 생각한 후 생성함수를 종이에 썼다"고 하지만 그 종이는 분실되었다.

이 논문의 중요성: 현재까지도 Luria-Delbrück 분포의 닫힌 해석적 해(closed analytic solution)는 존재하지 않는데, Haldane의 방법이 근사적이나마 가장 명시적인 해에 가장 근접한다. 또한 Haldane이 1946년에 이미 예견했던 비이상적 조건들의 효과가, 1988년 Cairns et al.의 "지향적 돌연변이" 논쟁에서 다시 핵심 문제로 부각되었다.

---

## Significance in Introduction Context

- Luria-Delbrück 변동 시험의 논리—자발적 돌연변이 대 유도 돌연변이를 분포의 분산으로 구별하는 아이디어—가 세균 유전학과 돌연변이 연구의 초석임을 역사적으로 보여줌
- Haldane의 미발표 원고 복원을 통해 과학 지식이 발표되지 않은 채 제한적으로 유통되는 경우에도 후속 연구에 영향을 미칠 수 있음을 보여주는 과학사 사례
- 수업에서 이 논문을 읽어야 하는 이유: 변동 시험의 수학적 기반과 그 생물학적 의의—돌연변이가 환경에 반응하는가, 자발적으로 일어나는가—를 이해하고, Haldane의 조합론적 접근법을 통해 고전 유전학에서의 통계적 사고를 배우기 위함

---

## Key References

1. **Luria & Delbrück (1943)** — Genetics 28:491-511 — 변동 시험의 원논문; 세균에서 바이러스 저항성 돌연변이가 자발적으로 발생한다는 것을 처음 실험적으로 증명
2. **Lea & Coulson (1949)** — J. Genet. 49:264-285 — Haldane이 발표를 포기한 후 게재된, Luria-Delbrück 분포의 최초 발표 수치 해법
3. **Cairns, Overbaugh & Miller (1988)** — Nature 335:142-145 — 세균에서 "지향적 돌연변이" 가능성을 제시; 변동 시험과 Haldane의 비이상적 조건 분석이 다시 논쟁의 핵심으로 부상

---

## Future Research Directions

- Luria-Delbrück 분포의 닫힌 해석적 해를 구하는 수학적 방법론 개발
- Cairns et al.(1988)이 제안한 지향적 돌연변이 개념을 현대적 분자 기법으로 재검증하고, 적응적 돌연변이 발생의 분자 메커니즘 규명

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
