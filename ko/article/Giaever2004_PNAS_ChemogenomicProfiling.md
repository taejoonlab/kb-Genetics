---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# Chemogenomic Profiling: 효모에서 소분자의 기능적 상호작용 규명

## Citation (NLM)
Giaever G, Flaherty P, Kumm J, Proctor M, Nislow C, Jaramillo DF, Chu AM, Jordan MI, Arkin AP, Davis RW. Chemogenomic profiling: identifying the functional interactions of small molecules in yeast. Proc Natl Acad Sci U S A. 2004;101(3):793-798. doi:10.1073/pnas.0307490100

**DOI:** [https://doi.org/10.1073/pnas.0307490100](https://doi.org/10.1073/pnas.0307490100)

---

## Summary

이 논문은 *Saccharomyces cerevisiae*의 화학유전체 분석법인 haploinsufficiency profiling(HIP)을 Giaever 등(1999)의 233개 균주 개념 증명에서 약 6,000개의 분자 바코드 이형접합 결실 균주 전체(프로파일에는 5,918개 균주 사용)로 확장했다. 전제는 유전자 용량을 2개에서 1개로 줄이면 그 유전자 산물을 억제하는 화합물에 민감해지므로, 가장 민감한 이형접합체가 약물 표적 결실을 가지는 경우가 많다는 것이다. 모든 이형접합 균주를 한 배양액에서 화합물과 함께 경쟁적으로 키운다(48-well plate, 5 세대마다 로봇으로 계대, 약 20 세대). 이후 게놈 DNA에서 20-mer 바코드를 PCR 증폭해 바코드 상보서열이 있는 고밀도 올리고뉴클레오티드 어레이에 hybridization한다. 균주당 4개의 tag를 mixture factor analysis 모델로 하나의 존재량 추정치로 합치고, 대조 어레이 36개(동형접합 21개)로 맞춘 Gaussian에 대한 log-likelihood로 fitness defect(FD) 점수를 계산한다. 대조군 평균보다 3 SD 이상인 균주를 유의하게 민감하다고 판정했다.

10개 화합물, 여러 농도에서 총 80회의 유전체 규모 실험을 보고한다. 항암제 methotrexate(250 uM)는 알려진 표적 DFR1과 엽산 합성 상류 유전자 FOL1, FOL2, 수송 관련 YBT1, YOR072w를 9회 중 8회 반복에서 찾았다. 5-FU는 thymidylate synthase나 DNA 관련 유전자를 찾지 못했고, 민감한 22개 유전자는 rRNA 가공과 리보솜 생합성에 농축(P 약 4 x 10^-9)되어, 효모에서는 RNA 오삽입이 주된 생장 억제 기전임을 시사했다. 단백질 표적이 없는 cisplatin은 이형접합체에서는 일관된 hit가 없었으나 동형접합 pool(125 uM)에서는 DNA 수선 유전자들이 나와 DNA가 주 표적임을 뒷받침했다. 스타틴(atorvastatin, lovastatin)에서는 HMG-CoA reductase 활성의 약 83%를 담당하는 HMG1만 HIP에서 민감했고, HMG2 haploinsufficiency는 가장 높은 atorvastatin 농도(250 uM)에서만 관찰되었다. PDR5와 ERG13도 민감했다.

항진균제에서 miconazole은 ERG11을 찾았지만 프로파일은 화합물 가용성 유전자(PDR5, SET6)가 지배했고, 최고 농도(0.2 uM, 약 70% 억제)에서는 표적 특이성이 사라졌다(대부분의 화합물에서 공통된 경향). Fluconazole은 한 농도에서만 ERG11이 유의했다. Fenpropimorph(2.3 uM)는 ERG2가 아닌 ERG24를 찾아 ERG24가 주된 생장 제한 표적임을 지지했다. 또한 진경제 alverine citrate와 마취제 dyclonine이 fenpropimorph와 유사한, ERG24가 최상위인 프로파일을 보였다. 효모 ERG24 또는 사람 상동유전자 LBR의 과발현이 alverine citrate 저항성을 주었고, 세 화합물은 공통 화학 core 구조를 공유해 HIP 프로파일이 구조-활성 관계 이해에 도움이 될 수 있음을 보였다. 저자들은 이 분석이 (i) 직접 상호작용하며 용량 제한적인 유전자와 (ii) 수송, 유출, 대사 등 생체 이용성에 관여하는 유전자의 두 부류를 찾아내며, 화합물 우선순위 결정과 in vivo on-/off-target 효과 규명에 유용하다고 결론짓는다. 추출은 앞 50,000자로 제한되었으나 이 논문(약 38,000자)은 거의 전부 포함되었고, 보충 표는 포함되지 않았다.

---

## Significance in Introduction Context

- 유전자 용량(이형접합, haploinsufficiency)을 정량적 유전학 도구로 사용: 우성과 용량이라는 기초 개념이 약물 표적 발견법이 된다.
- DNA 바코드를 가진 유전체 규모 결실 균주 컬렉션과 pooled 경쟁 생장 스크린이라는 유전체 규모 reverse genetics의 대표 사례.
- 어떤 돌연변이가 민감한지라는 유전 정보로 약물의 기전, 즉 수송체나 경로 속도제한 단계 같은 간접 효과까지 알 수 있음을 보여준다.
- 약물유전체학과 유전자형에 따른 약물 반응 차이와의 연결.

---

## Key References

1. **Giaever G et al. (1999)** — Genomic profiling of drug sensitivities via induced haploinsufficiency (Nat Genet 21:278-283) — HIP 개념과 233 균주 pilot. [https://doi.org/10.1038/6791](https://doi.org/10.1038/6791)
2. **Shoemaker DD et al. (1996)** — Quantitative phenotypic analysis of yeast deletion mutants using a highly parallel molecular bar-coding strategy (Nat Genet 14:450-456) — 바코드 pooled 생장법.
3. **Winzeler EA et al. (1999)** — Functional characterization of the *S. cerevisiae* genome by gene deletion and parallel analysis (Science 285:901-906) — 결실 컬렉션.
4. **Rine J et al. (1983)** — Targeted selection of recombinant clones through gene dosage effects (PNAS 80:6750-6754) — 유전자 용량과 약물 저항성.
5. **Dolinski K et al.** — Saccharomyces Genome Database / GO Term Finder — 5-FU 농축 분석에 사용.

---

## Future Research Directions

- HIP와 동형접합 결실 프로파일링(HOP)을 결합해 표적과 완충 경로를 구분(이후 대규모로 수행됨).
- 프로파일 유사성을 이용해 수천 개 분자를 작용기전별로 군집화하고 유전적 상호작용 네트워크와 비교.
- 병원성 진균과 이형접합 이배체 유전학이 불가능한 생물, 사람 세포 CRISPR 스크린으로 확장.
- 다제내성의 결정 요인인 공통 약물 가용성 유전자(PDR5, SET6 등) 연구.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
