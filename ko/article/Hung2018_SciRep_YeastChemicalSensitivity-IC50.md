---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# Saccharomyces cerevisiae에서 화학물질 민감성을 정량적으로 측정하는 간단하고 저렴한 기법

## Citation (NLM)
Hung CW, Martinez-Marquez JY, Javed FT, Duncan MC. A simple and inexpensive quantitative technique for determining chemical sensitivity in Saccharomyces cerevisiae. Sci Rep. 2018;8:11919. doi:10.1038/s41598-018-30305-z

**DOI:** [https://doi.org/10.1038/s41598-018-30305-z](https://doi.org/10.1038/s41598-018-30305-z)

---

## Summary

화학물질 민감성(화합물에 의한 성장 억제)은 유전자 기능을 탐색하는 고전적 표현형이며 효모는 특히 적합한 플랫폼이다. 그러나 대부분의 연구실은 "전통적 plating assay"(화합물이 든 한천 위에 희석액을 spotting 또는 replica pinning하고 콜로니의 유무, 수, 크기를 판정)에 의존하는데, 이 방법은 정량성이 낮다. 희석과 plating 오차의 영향을 받고, 영양분 고갈로 콜로니 크기가 정체되며, 플레이트 하나에 농도 하나만 시험하고, 콜로니 형성에 2~4일 이상 걸려 화합물이 분해될 수 있으며, 녹은 한천이나 표면 도포 시 화합물 분포가 일정하지 않다. 정량적 대안은 deep sequencing, microarray, 로봇, 다중 모드 진탕 plate reader가 필요하다. Hung 등은 일반 plate reader(또는 end-point 분광광도계 측정)로 반수 억제 농도(IC50)를 얻는 96-well 액체 배양 assay의 방법을 제시한다.

핵심 최적화: 연속 또는 간헐적 진탕은 세포 뭉침과 불규칙한 측정값을 낳아 진탕 없이 배양한다. 시작 세포 수가 낮으면 well 바닥에 개별 micro-colony가 생겨 값이 흔들리지만, 시작 OD600 0.01로 200 uL에서 시작하면 균일한 lawn이 형성되어 재현성이 높다(더 적은 부피는 뭉침 발생). YPD와 SD 모두에서 작동한다. well당 100 uL의 희석 배양액에 2배 농도의 화합물 100 uL를 고르게 섞어 넣고 OD를 15~30분마다 약 20~24시간 측정한다. 용량-반응 곡선은 GraphPad Prism으로 sigmoidal(Hill) 식에 맞춘다. 로그기 성장률을 쓰면 성장이 거의 없는 농도를 제외해야 해서 차이가 가려지므로(예: ent3 ent5 chs6와 ent5-ABCB ent3 chs6가 비슷해 보임), 처리하지 않은 야생형이 지수 성장기를 벗어나는 시점의 OD를 처리하지 않은 세포의 최대 OD로 정규화해 사용한다. 일반 배양기에서 키운 뒤 한 번 읽는 end-point 방식(예: 18시간)도 야생형과 art1의 IC50이 plate reader 값과 유의한 차이가 없어 대량 처리와 교육 실습에 적합하다.

응용: (1) Calcofluor white(CFW): chs6 세포는 chitin synthase Chs3이 clathrin 의존 수송에 의해 TGN/endosome에 갇혀 CFW에 저항성이지만, 수송 결함은 민감성을 회복시킨다. 액체 assay에서 ENT3 단독 결실이 chs6 세포의 CFW IC50을 약 2배 낮춰(OD 기준 약 103에서 41 ug/mL) 이전 plating 결과와 달리 Ent3의 비중복적 역할을 시사했고, ENT5 점돌연변이 대립유전자(지질 결합 CR, clathrin 결합 CB, adaptor 결합 AB, ABCB)를 정량적으로 순위화했다(ent5-AB가 가장 약하고 ent5-CR은 null에 가까움). plating assay가 놓친 차이(ent3, ent5-AB)도 검출했다. 액체 assay가 더 민감한 이유는 세포가 화합물에 잠겨 있는 반면 한천에서는 표면 세포만 노출되기 때문일 가능성이 있다. (2) Canavanine(Can1 permease로 들어오는 독성 arginine 유사체): art1(alpha-arrestin) 세포는 야생형보다 약 3배 민감했고, 이는 액체에서 24시간, 플레이트에서는 5일 만에 관찰되었으며, 처리하지 않은 세포의 성장으로 정규화해 art1의 느린 성장을 보정했다. (3) AP-1(apm1/apm2) 수송 구분에 쓰이는 myriocin과 sertraline: 액체 assay에서는 야생형이 1 uM myriocin과 6 uM sertraline에서 완전히 억제되었으나 플레이트에서는 같거나 더 높은 농도에서 자랐고, apm2의 myriocin 민감성을 더 빨리 보였지만 apm1의 sertraline 저항성은 검출하지 못했다(플레이트에서는 20 uM에서 4일 이상 필요). 짧은 assay로는 작은 성장 이점을 검출하기 어렵다는 한계이다. (4) tor1-1 배경에서 rapamycin 유도 이량체화로 Mps1-FRB를 kinetochore 단백질에 고정해 spindle assembly checkpoint를 활성화: Mtw1(안쪽)은 성장을 강하게 억제했고 Ask1(바깥쪽)은 억제하지 않았으며 Dad2(중간)는 Ask1보다 약 5배 민감해 checkpoint 활성의 단계적 차이를 정량했다. 저자들은 진탕이 없어 산소나 영양분이 고갈될 수 있고, 용도에 따라 시작 세포 수를 최적화해야 한다는 한계를 언급한다.

Discussion: 장점은 비용, 시간, 그리고 무엇보다 plating assay와 이전 정량법에 비한 정량성이다. end-point 형식은 배양과 진탕 기능이 없는 흡광도 판독기만으로 충분하므로(cuvette 분광광도계도 가능) 플레이트 판독기 한 대로 많은 학생이 실험할 수 있고, 96-well 형식의 생존율(CFU)과 propidium iodide 세포 사멸 assay와도 결합할 수 있다. IC50은 단일 농도에서의 성장률보다 민감하고 정확하며 단일 농도는 차이를 가릴 수 있다. 예를 들어 calcofluor white에서 *ent3 chs6*의 차이는 50 ug/mL에서만 나타났고 그 농도에서는 다른 돌연변이가 거의 자라지 못했다. 실용적 주의사항: 균일한 lawn을 위해 다른 플레이트 판독기 방법보다 훨씬 높은 시작 세포 농도, well당 최소 200 uL(적은 부피에서는 출렁여 중앙과 가장자리에 세포가 쌓임), 화합물 첨가 시 부드럽고 고른 혼합이 필요하다. 진탕이 없어 산소나 영양분이 제한될 수 있으므로 정적 배양에 맞지 않을 수 있는 화합물이나 유전형은 진탕 배양과의 예비 비교가 권장되며, 짧은 assay는 작은 성장 이점을 포착하지 못한다(sertraline의 경우).

방법과 문제 해결: log phase 세포를 OD600 0.01(YPD, canavanine은 SD)로 희석해 well당 100 uL를 분주하고, 2x로 희석한 화합물 100 uL를 넣어 섞은 뒤 30 degC에서 진탕 없이 판독하거나(SpectraMax 340PC, 30분마다 OD600), end-point의 경우 습한 상자(젖은 종이 타월을 넣은 살짝 열린 스티로폼 상자)에서 16-20시간 배양한 뒤 한 번 판독한다(필요하면 테이프로 밀봉해 부드럽게 재현탁). 모든 well을 같은 시점에 읽는 한 OD를 1 cm 경로 길이로 보정할 필요는 없다. 문제 해결 절은 mounding(혼합 해제, 부피 증가, 판독 간격 확대), micro-colony(시작 OD 과소; 여러 세포 농도로 예비 실험), hollowed center(화합물을 절반 부피씩 넣고 6회 혼합), 증발(습한 챔버)을 다루며, sigmoid 곡선을 얻기 위해 plating 농도의 2배에서 시작하는 10단계 2배 희석 계열을 권장한다. 그 밖의 함정은 화합물 침전, 배지에 의한 불활성화(특히 ammonium sulfate; 질소원으로 monosodium glutamate 대체 가능), 통기 필요성, 배지 속 경쟁적 억제제(독성 아미노산), 용매(DMSO, ethanol)의 독성, 일반 스트레스 반응, 유전적 부동이나 suppressor(냉동 stock의 새 세포 사용, 이전에 처리한 세포 사용 금지)다. IC50은 log phase 성장률(4-parameter sigmoid 피팅의 기울기)에서 계산하거나, 본 논문처럼 처리하지 않은 야생형이 지수 성장을 벗어나는 시점의 OD를 처리하지 않은 대조군으로 정규화해 GraphPad Prism의 4-parameter variable-slope 용량-반응 곡선으로 피팅한다. Excel 대안은 선형 구간에 y = A ln(x) + B를 피팅해 y = 50%에서 x를 구하는 것이다. 균주는 Table 3에 있으며 결실은 표준 PCR 기반 방법으로, CID 균주는 Aravamudhan 등의 것을 사용했다.

---

## Significance in Introduction Context

- 화학 유전학과 chemical-genetic profiling: 성장 억제 표현형(IC50)이 유전형을 유전자 기능과 막 수송, 세포주기 checkpoint 같은 경로에 연결하는 방식.
- 모델 생물에서의 정량적 표현형 분석과 용량-반응 분석; 정성적 plating과 정량적 액체 성장 assay의 대비.
- 일반 장비로 가능한 저비용 효모 유전학 방법으로 교육 실습에 유용.

---

## Key References

1. **Parsons AB, et al. (2006)** — Exploring the mode-of-action of bioactive compounds by chemical-genetic profiling in yeast. Cell 126:611-625 — 대규모 chemical-genetic profiling
2. **Giaever G, et al. (2004)** — Chemogenomic profiling: identifying the functional interactions of small molecules in yeast. PNAS 101:793-798 — 정량적 풀링 방법
3. **Hillenmeyer ME, et al. (2008)** — The chemical genomic portrait of yeast: uncovering a phenotype for all genes. Science 320:362-365
4. **Hung CW, Duncan MC (2016)** — Clathrin binding by the adaptor Ent5 promotes late stages of clathrin coat maturation. Mol Biol Cell 27:1143-1153 — *ENT5* 대립유전자의 출처
5. **Lin CH, MacGurn JA, Chu T, Stefan CJ, Emr SD (2008)** — Arrestin-related ubiquitin-ligase adaptors regulate endocytosis and protein turnover at the cell surface. Cell 135:714-725 — alpha-arrestin(Art1)과 Can1
6. **Whitfield ST, et al. (2016)** — The alternate AP-1 adaptor subunit Apm2 interacts with the Mil1 regulatory protein and confers differential cargo sorting. Mol Biol Cell 27:588-598 — *APM1/APM2*의 myriocin, sertraline 표현형
7. **Aravamudhan P, Goldfarb AA, Joglekar AP (2015)** — The kinetochore encodes a mechanical switch to disrupt spindle assembly checkpoint signalling. Nat Cell Biol 17:868-879 — rapamycin 유도 Mps1 고정
8. **Rainey MM, Korostyshevsky D, Lee S, Perlstein EO (2010)** — The antidepressant sertraline targets intracellular vesiculogenic membranes in yeast. Genetics 185:1221-1233

---

## Future Research Directions

- 서로 다른 네 가지 assay에 적용되었으므로 많은 화합물에 적용 가능할 것으로 보고, 다른 화합물과 돌연변이 컬렉션으로 확장해 대규모 chemical-genetic profiling을 수행하며 시작 세포 농도는 경우에 따라 최적화.
- 정적 배양에 맞지 않는 화합물이나 유전형에 대해 진탕 배양과의 예비 비교, 작은 성장 이점(*apm1*의 sertraline 내성 등)을 검출하는 더 긴 또는 더 민감한 판독.
- 96-well 형식에서 생존율(CFU)과 세포 사멸(propidium iodide) assay를 결합해 더 깊은 phenomics 수행; chemical induced dimerization에의 활용과 end-point 판독을 이용한 학부와 고등학교 실습실 활용.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
