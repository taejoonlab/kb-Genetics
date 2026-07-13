---
tags: [genetics, class, article, ko]
date: 2026-07-13
type: class
---

# Mapping Mendelian Factors Underlying Quantitative Traits Using RFLP Linkage Maps

## Citation (NLM)
Lander ES, Botstein D. Mapping Mendelian Factors Underlying Quantitative Traits Using RFLP Linkage Maps. Genetics. 1989 Jan;121(1):185-199.

**DOI:** (해당 없음 — DOI 이전 출판)

---

## Summary

이 랜드마크 논문은 RFLP(제한효소 단편 길이 다형성) 연결 지도를 이용하여 양적 형질을 조절하는 멘델 인자(QTL)를 체계적으로 지도화하는 방법론을 제시한다. Eric Lander와 David Botstein은 세 가지 핵심 방법론 혁신을 도입했다.

**교차 설계 최적화**: 저자들은 Wright의 고전 공식 k = D²/16σ²G를 이용하여 양적 형질을 QTL로 분해할 수 있는 교배 계통을 미리 선택하는 방법을 제안했다. 표현형 차이가 크고 유효 QTL 수(k)가 작은 교배를 선택하면, 큰 효과의 QTL이 존재할 가능성이 높아 탐지 효율이 높아진다.

**간격 매핑(interval mapping)**: 기존 마커-하나씩(single-marker) 분석법의 네 가지 한계를 극복하는 방법이다. QTL이 마커 위치에 없을 때 효과가 과소평가되는 문제, 거리와 효과 크기를 구별할 수 없는 문제, QTL 위치 불명확성, 다중 검정 문제를 모두 해결했다. 간격 매핑은 최우도법(MLE)을 이용하여 인접 두 마커 사이의 모든 위치에서 LOD 점수를 계산한다. 알 수 없는 개별 QTL 유전자형은 측면 마커 정보와 대입법(EM 알고리즘)으로 처리한다. 저자들은 MAPMAKER-QTL 소프트웨어를 개발하여 이 방법을 구현했다.

**LOD 점수 임계값**: 단일 마커 검정(LOD > 0.83)은 전체 게놈 탐색에서 위양성 확률이 >90%에 달한다. Lander와 Botstein은 게놈 전체에서 LOD 점수가 Ornstein-Uhlenbeck 확산 과정의 제곱을 따름을 증명하여, 게놈 크기와 마커 밀도에 따른 적절한 LOD 임계값을 도출했다. 예를 들어, 토마토 게놈(12 염색체, 20 cM 지도)에는 LOD ≥ 2.4가 필요하다.

**선택적 유전자형 분석**: 표현형 평균에서 ±2 표준편차 이상 벗어난 개체(상위 5%)만 유전자형을 분석해도, 전체 집단의 유전자형을 분석하는 것과 비교하여 약 5.5배 적은 개체 수로 동등한 연관 정보를 얻을 수 있다. 단 이 방법은 EM 알고리즘을 이용한 결측 데이터 처리가 필요하다.

논문은 시뮬레이션 데이터를 이용한 QTL 우도 지도 작성 예시와 함께, 동반 논문(Paterson et al. 1988)에서 토마토 과실 형질 QTL에 처음 적용된 결과를 제시한다.

---

## Significance in Introduction Context

- QTL 매핑 방법론의 원조 논문으로, 현대 복잡 형질 유전학의 직접적인 기반이다
- LOD 점수, 최우도 추정, 다중 검정 문제를 실제 유전학 문제에 적용하는 방법을 배울 수 있다
- 전통적 단일 마커 분석에서 간격 기반 통계 매핑으로의 전환이 왜 중요한지를 수학적·개념적으로 이해할 수 있다
- 수업에서 이 논문을 읽어야 하는 이유: 양적 유전학과 복잡 형질 분석의 통계적 토대를 원 논문에서 직접 학습하기 위해

---

## Key References

1. **Botstein D et al. (1980)** — Am. J. Hum. Genet. 32:314–331 — RFLP 마커 제안
2. **Paterson AH et al. (1988)** — Nature 335:721–726 — Lander-Botstein 방법의 첫 토마토 QTL 적용
3. **Churchill GA, Doerge RW (1994)** — Genetics 138:963–971 — 경험적 QTL 임계값 방법

---

## Future Research Directions

- 현대 고밀도 SNP 어레이와 전장유전체 시퀀싱 시대에 맞는 QTL-GWAS 통합 방법론 개발
- 에피스타시스(epistasis) 효과를 체계적으로 탐지하는 다중 QTL 분석 방법론 개선
- 단일 세포 전사체 데이터(scRNA-seq)와 QTL 분석을 결합한 세포형-특이적 eQTL 분석

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-13*
