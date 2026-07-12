---
tags: [genetics, class, others, ko]
date: 2026-07-12
type: class
---

# Comprehensive Mapping of Long-Range Interactions Reveals Folding Principles of the Human Genome

## Citation (NLM)
Lieberman-Aiden E, van Berkum NL, Williams L, Imakaev M, Ragoczy T, Telling A, Amit I, Lajoie BR, Sabo PJ, Dorschner MO, Sandstrom R, Bernstein B, Bender MA, Groudine M, Gnirke A, Stamatoyannopoulos J, Mirny LA, Lander ES, Dekker J. Comprehensive mapping of long-range interactions reveals folding principles of the human genome. Science. 2009;326(5950):289-293. doi:10.1126/science.1181369

**DOI:** [https://doi.org/10.1126/science.1181369](https://doi.org/10.1126/science.1181369)

---

## Summary

이 논문은 근접성 기반 라이게이션과 대규모 병렬 시퀀싱을 결합하여 전체 게놈의 3차원 크로마틴 구조를 탐색하는 Hi-C 방법을 소개한다. Hi-C는 세포를 포름알데하이드로 가교 결합한 후, 제한효소로 DNA를 절단하고, 5' 돌출 말단을 비오티닐화 뉴클레오타이드로 채운 다음, 희석 조건에서 라이게이션하여 가교된 단편들이 결합되도록 한다. 이후 스트렙타비딘 비드로 비오틴 표지된 접합부를 포획하고 페어드-엔드 시퀀싱으로 분석한다. 인간 림프아구 세포주에 적용하여 1-Mb 해상도에서 667만 개의 장거리 접촉 정보를 담은 최초의 전체 게놈 접촉 지도를 생성했다.

Hi-C 데이터는 염색체 영역(chromosome territories)의 존재를 확인했다. 같은 염색체 내의 유전체 거리가 증가할수록 접촉 확률이 단조 감소하며, 언제나 염색체 간 접촉보다 높다. 소형 유전자 풍부 염색체(16, 17, 19, 20, 21, 22번)는 서로 선호적으로 상호작용하며, 이는 이들이 핵 중심부에 군집한다는 FISH 연구 결과와 일치한다. 반면, 소형이지만 유전자 빈곤 염색체인 18번은 이 군집에 참여하지 않고 핵 주변에 위치한다.

이 논문의 핵심 발견은 전체 게놈을 공간적으로 두 개의 구획 A와 B로 분리할 수 있다는 것이다. 정규화된 접촉 행렬에 나타나는 체크 무늬 패턴(plaid pattern)을 주성분 분석으로 해석하여 각 1-Mb 유전체 영역을 하나의 구획에 배정했다. A 구획은 유전자 밀도, 높은 전사 활성, DNaseI 접근성 크로마틴, 활성 히스톤 표지(H3K36me3)와 강하게 상관되는 반면, B 구획은 더 조밀하게 패킹되어 있으며 폐쇄된 억제 크로마틴에 해당한다. 3D-FISH 실험이 동일 구획의 유전체 위치들이 서열상 이웃하더라도 다른 구획의 위치보다 3차원 공간에서 더 가깝다는 것을 확인했다.

접촉 확률의 유전체 거리에 따른 스케일링을 분석한 결과, 500 kb~7 Mb 범위에서 s^-1 멱함수 관계가 관찰되었다. 이는 평형 글로뷸 모델이 예측하는 s^-3/2와 다르며, 대신 Grosberg 등이 이론화한 '프랙탈 글로뷸(fractal globule)' 모델과 일치한다. 프랙탈 글로뷸은 매듭이 없는 비평형 폴리머 구조로, 선형 서열상 인접한 영역이 3차원 공간에서도 인접하게 유지되는 단색 공간 구역을 형성한다. 몬테카를로 시뮬레이션이 이 두 모델의 서로 다른 스케일링 거동을 확인했다.

이 결과들은 게놈의 위계적 구조를 드러낸다. 가장 큰 규모에서 염색체는 각자의 영역을 점유하고, 그 내부에서 열린 크로마틴과 닫힌 크로마틴에 해당하는 두 공간 구획으로 구분되며, 메가베이스 규모에서는 프랙탈 글로뷸로 조직된다. Hi-C 방법론은 이후 TAD, 크로마틴 루프 등 더 세밀한 구조의 발견을 가능하게 한 3D 게놈 연구의 새로운 패러다임을 확립했다.

---

## Significance in Introduction Context

- Hi-C는 3C, 4C, 5C의 표적 위치 한계를 극복하고 전체 게놈에서 편향 없이 크로마틴 상호작용을 지도화할 수 있는 최초의 방법으로, 3D 게놈 연구의 시대를 열었다
- 두 개의 전체 게놈 공간 구획(A/B) 발견은 광학현미경으로 오래전부터 관찰되던 유크로마틴과 헤테로크로마틴의 세포학적 구분에 분자적 근거를 제공했다
- 프랙탈 글로뷸 모델은 약 2미터의 DNA가 어떻게 전사와 복제에 접근 가능한 상태를 유지하면서 핵 내에 효율적으로 패킹될 수 있는지에 대한 물리적 설명을 제시했다
- 염색체 영역의 전체 게놈 규모 확인은 이전 현미경 관찰 결과를 생화학적 접촉 데이터와 연결하였다
- 이 논문은 TAD 발견, 코헤신/CTCF 매개 루프 압출 기전 규명 등 이후 3D 게놈 분야의 핵심 발견들을 직접적으로 이끌어낸 토대가 되었다

---

## Key References

1. **Dekker et al. (2002)** — https://doi.org/10.1126/science.1067799 — 크로마틴 상호작용 연구를 위한 근접 라이게이션 기반 최초의 3C 방법 확립
2. **Cremer & Cremer (2001)** — https://doi.org/10.1038/35066075 — 현미경으로 확립된 염색체 영역 및 핵 구조에 대한 포괄적 리뷰
3. **Grosberg et al. (1988)** — J. Phys. France 49:2095 — 크로마틴 패킹에 적용된 프랙탈 글로뷸 폴리머 모델의 이론적 기초
4. **Zhao et al. (2006)** — https://doi.org/10.1038/ng1966 — Hi-C의 전신이 된 원형 염색체 구조 포획(4C) 방법
5. **Dostie et al. (2006)** — https://doi.org/10.1101/gr.5571506 — 다중화 라이게이션 매개 증폭을 활용한 5C 방법
6. **Mikkelsen et al. (2007)** — https://doi.org/10.1038/nature06008 — Hi-C 구획에 후성유전체적 맥락을 제공하는 히스톤 변형 기반 크로마틴 상태 지도
7. **Dixon et al. (2012)** — https://doi.org/10.1038/nature11082 — Hi-C 방법론을 토대로 포유류 게놈에서 위상학적 연관 도메인(TAD) 발견

---

## Future Research Directions

- Hi-C 해상도를 향상시켜(이후 in situ Hi-C에서 1-kb 해상도 달성) 개별 인핸서-프로모터 루프와 절연체 요소를 전체 게놈 수준에서 지도화
- A/B 구획 경계를 확립하고 유지하는 분자 기전(코헤신, CTCF, 상분리의 역할) 규명
- 단일 세포 Hi-C로 확장하여 3D 게놈 조직의 세포간 가변성 이해
- 게놈 영역을 A/B 구획 사이에서 강제로 재배치했을 때의 기능적 결과 검증
- Hi-C 접촉 지도와 폴리머 물리학 시뮬레이션을 결합하여 서열 변화(돌연변이, 구조 변이)가 3D 게놈 구조를 어떻게 바꾸는지 예측하는 모델 개발

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-12*
