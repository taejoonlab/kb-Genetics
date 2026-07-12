---
tags: [genetics, class, reverse, ko]
date: 2026-07-12
type: class
---

# The Evolution of Tumour Phylogenetics: Principles and Practice

## Citation (NLM)
Schwartz R, Schäffer AA. The evolution of tumour phylogenetics: principles and practice. Nat Rev Genet. 2017 Apr;18(4):213-229. doi:10.1038/nrg.2016.170

**DOI:** [https://doi.org/10.1038/nrg.2016.170](https://doi.org/10.1038/nrg.2016.170)

---

## Summary

암은 유전체 이상의 점진적 축적에 의해 구동되는 진화적 과정이다. 1970년대 Nowell이 제안한 클론 진화 이론(clonal evolution theory)은 암세포 집단이 다양화와 선택의 진화적 원리에 따라 진행된다는 개념적 토대를 제공하였으며, 차세대 시퀀싱의 발전과 함께 이 원리를 계통유전학(phylogenetics) 도구로 분석하는 '종양 계통유전학(tumour phylogenetics)'이 독립적인 연구 분야로 성장하였다. 그러나 종양 진화는 종 진화와 다음 네 가지 측면에서 근본적으로 다르다: 돌연변이 유형(염색체 불안정성, 미소위성 불안정성, APOBEC 탈아민화 등 과돌연변이 표현형), 돌연변이 속도(정상세포보다 훨씬 높음), 선택의 강도와 범위(치료 압력 하에서 급격히 변화), 그리고 종양 내 이질성(intra-tumour heterogeneity)의 높은 정도.

종양 계통유전학 방법은 연구 설계에 따라 세 가지로 분류된다. 첫째, 횡단면 방법(cross-sectional methods)은 다수의 환자로부터 수집된 종양들을 마치 종처럼 취급하여 공통적인 진행 경로를 기술하는 종양발생나무(oncogenetic tree)를 구성한다. Fearon-Vogelstein의 대장암 선형 진행 모델을 최초 적용한 Desper 등의 연구 이후, 확률론적 모델(Mtreemix, Rtreemix 등)로 발전하였다. 그러나 이 접근법은 종양 내 이질성을 무시하는 한계가 있어 단일 환자 연구로의 전환이 촉진되었다. 둘째, 지역 벌크 방법(regional bulk methods)은 단일 환자에서 여러 종양 부위 또는 지역으로부터 채취한 벌크 시료를 이용하여 개별 환자의 클론 진화를 재구성한다. TuMult, MEDICC, PhyloWGS, SPRUCE, Canopy 등이 이 범주에 속하며, SNV와 CNV 데이터를 결합하여 분석력을 높이는 경향이 있다. 클론 분해(clonal deconvolution)와 계통유전학을 통합하는 방법(cITUP, LICHeE 등)이 특히 중요하다. 셋째, 단일세포 방법(single-cell methods)은 개별 세포 수준에서 계통수를 구성하며, scSeq 기술의 발전과 함께 가장 높은 해상도로 클론 구조를 파악할 수 있다. OncoNEM, SCITE 등이 scSeq-기반 SNV 분석을 위해 개발되었으나, 대부분의 연구는 아직 neighbour joining 등 일반 계통유전학 도구를 사용한다.

계통유전학 분석의 세 가지 핵심 구성요소는 데이터, 모델, 알고리즘이다. 데이터 유형으로는 CGH, FISH, SNP 칩, DNAseq(SNV·CNV), RNAseq, DNA 메틸화, 단일세포 시퀀싱이 있다. 진화 모델로는 최대 절약법(maximum parsimony, 돌연변이가 드물다는 가정), 최소 진화법(minimum evolution), 확률론적 방법(최대우도법 및 베이지안), 가중 최소제곱법 등이 있다. 알고리즘으로는 조합 최적화(combinatorial), 휴리스틱 탐색, 이웃결합법(neighbour joining), UPGMA, MCMC 등이 있다. 중요한 것은 이 세 요소 중 어느 하나라도 생물학적 현실에 부합하지 않으면 결과가 왜곡된다는 점이며, 특히 CNV 데이터의 경우 중복, 결실, 복제 등 복잡한 돌연변이 사건이 표준 모델의 가정을 위반하는 경우가 흔하다.

종양 계통유전학의 주요 응용 분야는 드라이버 돌연변이와 패신저 돌연변이의 구분, 드라이버 돌연변이의 출현 순서와 시기 결정, 클론 진화의 선형 대 분지 진행 여부 규명, 예후 예측, 그리고 치료 저항성 클론의 파악이다. 선택의 역할에 대해서는 현재 논란이 있는데, 일부 연구는 치료 전 종양이 실질적으로 중립적 과정으로 진화한다는 증거를 제시하는 반면('big bang model'), 다른 연구는 다윈적 선택의 증거를 보고한다. 이러한 상충되는 결론은 사용된 마커 유형(SNV vs CNV)과 방법론적 차이에서 일부 기인한다.

---

## Significance in Introduction Context

- 암 진화를 계통유전학적 관점에서 분석하는 새로운 분야의 원리와 방법을 체계적으로 정리하여, 암 유전체 연구자들이 계통유전학 방법을 올바르게 이해하고 적용하는 데 필요한 교육적 기반을 제공한다.
- 데이터·모델·알고리즘의 세 구성요소 간 정합성의 중요성을 강조하면서, 생물학적 현실(CNV 중복 사건의 복잡성, 높은 돌연변이 속도)에 맞지 않는 방법을 표준 계통유전학 소프트웨어에서 그대로 차용할 때 발생하는 오류를 구체적으로 경고한다.
- 종양 내 이질성이 치료 저항성 및 예후와 어떻게 연관되는지를 계통유전학적 맥락에서 설명함으로써, 정밀의학에서 다중 클론 구조 분석의 임상적 중요성을 부각한다.
- 단일세포 시퀀싱을 이용한 종양 계통유전학이 가장 높은 해상도의 클론 구조 정보를 제공할 수 있음을 보여주며, scSeq 기술의 발전이 이 분야를 어떻게 변화시키고 있는지 예측한다.
- 여러 연구에서 상충되는 결론(선형 vs 분지 진화, 다윈적 선택 vs 중립 진화)이 나타나는 이유를 방법론적 관점에서 분석하고, 연구 설계와 방법 선택의 표준화 필요성을 제기한다.

---

## Key References

1. **Nowell (1976)** — [https://doi.org/10.1126/science.959840](https://doi.org/10.1126/science.959840) — 클론 진화 이론을 제시하여 암을 진화적 과정으로 이해하는 개념적 토대 마련
2. **Desper et al. (1999)** — [https://doi.org/10.1089/cmb.1999.6.37](https://doi.org/10.1089/cmb.1999.6.37) — CGH 데이터에 최초로 계통유전학 방법을 적용하여 oncogenetic tree 개념 도입
3. **Alexandrov et al. (2013)** — [https://doi.org/10.1038/nature12477](https://doi.org/10.1038/nature12477) — 암 유형별 수십 가지 돌연변이 서명을 규명하고 환경적·내인적 돌연변이 원인과 연계
4. **Navin et al. (2011)** — [https://doi.org/10.1038/nature09807](https://doi.org/10.1038/nature09807) — 단일세포 시퀀싱을 최초로 종양 계통유전학에 적용하여 유방암의 클론 구조 규명
5. **Beerenwinkel et al. (2007)** — [https://doi.org/10.1073/pnas.0703503104](https://doi.org/10.1073/pnas.0703503104) — Mtreemix를 이용한 확률론적 oncogenetic tree 추론으로 횡단면 방법의 발전 견인
6. **Schwarz et al. (2015)** — [https://doi.org/10.1038/ng.3374](https://doi.org/10.1038/ng.3374) — MEDICC를 난소암에 적용하여 재발 종양이 원발 종양과 조기에 분기함을 규명
7. **Sottoriva et al. (2015)** — [https://doi.org/10.1038/ng.3214](https://doi.org/10.1038/ng.3214) — 대장암에서 'big bang' 모델 제안: 초기에 클론적으로 확장 후 선택 없이 중립적으로 진화
8. **Ross & Markowetz (2016)** — [https://doi.org/10.1038/nmeth.3800](https://doi.org/10.1038/nmeth.3800) — OncoNEM 개발로 단일세포 데이터에서의 종양 계통유전학 베이지안 추론 정교화

---

## Future Research Directions

- 벌크 시퀀싱과 단일세포 시퀀싱을 통합한 분석 프레임워크 개발이 필요하다. 각 방법의 강점(벌크: 높은 피복도와 민감도; 단일세포: 단일 해상도의 클론 구조)을 상호보완적으로 활용하는 계산 도구가 요구된다.
- 치료 과정 전반에 걸친 종단적 샘플링(longitudinal sampling)을 통해 치료 전·중·후 클론 역학을 추적하는 연구가 확대되어야 하며, 이를 통해 치료 저항성 클론의 진화 경로를 예측하는 모델 개발이 가능해질 것이다.
- SNV와 CNV 외에도 DNA 메틸화, 히스톤 변형, 크로마틴 접근성 등 에피유전체 데이터를 종양 계통유전학 분석에 통합하는 방법론이 개발되어야 한다.
- 계통유전학적 다양성 지표를 임상 의사결정에 통합하여 예후 예측, 최적 치료 전략 선택, 진행 모니터링에 활용하는 실용화 연구가 필요하다.
- 다양한 방법론이 상충되는 결론을 내는 문제를 해결하기 위해, 시뮬레이션 기반 벤치마킹과 방법론 표준화가 이루어져야 하며, 특히 높은 종양 내 이질성 상황에서의 방법 견고성 검증이 중요하다.

---

*Processed by **Claude Sonnet 4.6** (Claude Code) on 2026-07-12*
