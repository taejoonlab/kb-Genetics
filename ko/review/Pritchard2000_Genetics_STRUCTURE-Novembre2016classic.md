---
tags: [genetics, class, review, ko]
date: 2026-07-13
type: class
---

# Pritchard et al. 2000 and Structure: A 15-Year Retrospective (Genetics Classic Commentary)

## Citation (NLM)
Novembre J. Pritchard et al. 2000 and structure: a 15-year retrospective. Genetics. 2016;204(2):391-393. doi:10.1534/genetics.116.195164

**DOI:** [https://doi.org/10.1534/genetics.116.195164](https://doi.org/10.1534/genetics.116.195164)

---

## Summary

Novembre(2016)의 이 짧은 클래식 논평은 Pritchard, Stephens, Donnelly(2000)의 STRUCTURE 논문 발표 15주년을 맞아 Genetics 저널이 기획한 시리즈의 일환으로 작성되었다. 3페이지 분량의 이 논평은 STRUCTURE 논문이 집단유전학에 미친 영향을 역사적 맥락에서 평가하고, 방법론적 혁신의 핵심을 설명하며, 이후 발전 방향을 조망한다.

Novembre는 우선 STRUCTURE가 발표된 2000년의 지적 배경을 소개한다. 당시 집단 구조 분석은 주로 AMOVA, Fst, 거리 기반 계통수 등에 의존했다. 이러한 방법들은 명시적인 확률 모형 없이 집단 구조를 탐색했기 때문에, 결과의 불확실성을 정량화하거나 복수 정보 출처를 통합하기 어려웠다. STRUCTURE는 이를 근본적으로 극복하였다.

STRUCTURE의 가장 혁신적인 기여로 Novembre는 두 가지를 꼽는다. 첫째, 명시적 확률 모형(베이지안 군집화): 각 개체가 K개 집단 중 하나(혹은 복수)에 속할 확률을 정의하고, 대립유전자 빈도와 개체 배정을 동시에 추론한다. 둘째, 혼합 모형(admixture model): 개체가 여러 집단의 혼합으로 이루어진 유전체를 가질 수 있다는 발상은, 당시로서는 인간 및 다른 생물의 혼혈 역사를 분석하는 새로운 창을 열어주었다.

Novembre는 또한 STRUCTURE의 성공이 단순히 방법론의 우수성만이 아니라 소프트웨어 구현과 접근성에도 기인함을 지적한다. 사용 가능한 소프트웨어로서의 STRUCTURE는 마이크로위성 및 SNP 데이터가 급증하던 시기에 연구자들이 필요로 하던 도구를 적시에 제공했다.

이 논평은 STRUCTURE 이후의 방법론적 발전도 간략히 조망한다. 데이터 규모가 수백만 SNP, 수만 개체로 커지면서 MCMC 기반의 STRUCTURE는 계산 비용이 너무 커졌다. 이를 해결하기 위해 변분 추론(variational inference)을 이용한 fastSTRUCTURE나 주성분 분석 기반 방법(PCA), 그리고 행렬 분해 기반의 ADMIXTURE 등이 개발되었다. 이러한 방법들은 STRUCTURE와 동일한 기본 모형 구조를 유지하면서 계산 효율을 수십 배 향상시켰다.

Novembre는 STRUCTURE 논문이 기계학습 분야의 잠재적 디리클레 할당(LDA) 모형과 사실상 동일한 구조를 가짐을 지적하면서, 집단유전학과 기계학습이 서로 독립적으로 동일한 구조의 모형에 도달했다는 학제간 수렴의 사례로 이를 소개한다. 이는 두 분야 모두에서 이 모형 구조의 보편성과 유용성을 반증한다.

결론적으로 Novembre는 STRUCTURE 논문이 방법론적 논문으로서 이례적으로 높은 인용수를 기록하는 이유가, 집단유전학의 기본 질문(개체는 어디서 왔는가, 집단들은 어떻게 연결되어 있는가)에 대한 보편적 답변 도구를 제공했기 때문이라고 정리한다.

---

## Significance in Introduction Context

- STRUCTURE 원논문의 15년 역사적 의의를 3페이지로 압축 정리하여, 방법론 논문을 교육적으로 소화할 수 있는 진입점 제공
- 집단유전학 방법론의 패러다임 전환(거리 기반 → 확률 모형 기반)을 명확하게 설명
- 수업에서 이 논문을 읽어야 하는 이유: 원 STRUCTURE 논문과 함께 읽으면, 방법론 논문의 핵심을 평가하고 후속 발전 맥락을 이해하는 훈련이 됨

---

## Key References

1. **Pritchard JK et al. (2000)** — [https://doi.org/10.1093/genetics/155.2.945](https://doi.org/10.1093/genetics/155.2.945) — 원 STRUCTURE 논문 (이 클래식 논평의 대상)
2. **Falush D et al. (2003)** — [https://doi.org/10.1534/genetics.164.4.1567](https://doi.org/10.1534/genetics.164.4.1567) — STRUCTURE 확장판: 연관 유전자좌 처리 가능
3. **Alexander DH et al. (2009)** — [https://doi.org/10.1101/gr.094052.109](https://doi.org/10.1101/gr.094052.109) — ADMIXTURE: 대규모 SNP에 적합한 빠른 군집화 방법

---

## Future Research Directions

- 단순한 이산 K 군집 모형 너머 — 지리적 연속성을 반영하는 모형, 그리고 계통 트리와 군집 모형을 통합하는 방법 개발
- 고대 DNA 데이터에 STRUCTURE 계열 방법을 적용할 때의 한계와 개선 방향 (고대 DNA의 낮은 커버리지, 오염, 시간 깊이)
- 방법 비교 벤치마크: 다양한 집단 구조 시나리오(병목, 이주, 선택)에서 STRUCTURE vs. PCA vs. ADMIXTURE 성능 체계적 비교

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
