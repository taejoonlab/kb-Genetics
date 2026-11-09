---
tags: [genetics, class, review, ko]
date: 2026-11-09
type: class
---

# 약물 및 표적 발굴을 위한 효모 유전체 분석법 개관

## Citation (NLM)
Smith AM, Ammar R, Nislow C, Giaever G. A survey of yeast genomic assays for drug and target discovery. Pharmacol Ther. 2010;127(2):156-164. doi:10.1016/j.pharmthera.2010.04.012

**DOI:** [https://doi.org/10.1016/j.pharmthera.2010.04.012](https://doi.org/10.1016/j.pharmthera.2010.04.012)

---

## Summary

이 리뷰는 알려진 약물과 새로운 소분자의 in vivo 작용 기전을 밝히기 위해 지난 10여 년간 *Saccharomyces cerevisiae*에서 개발된 chemical genomic assay들을 정리한다. 저자들은 표적 중심(target-based) 약물 개발의 한계에서 출발한다. 표적은 기존 지식, 선례("me too" 표적), 필수성, druggability를 기준으로 선택되므로 잘 알려진 단백질에 편향되고, 정제 성분을 이용한 in vitro 분석은 세포 내 off-target 결과를 예측하지 못한다. 연구개발 비용이 늘었음에도 신약 승인율은 정체되어 있어, hit이 세포 투과성을 갖는다는 장점 때문에 세포 기반 표현형 스크리닝이 다시 주목받지만, hit의 세포 내 표적을 밝혀야 하는 문제가 남는다. 효모 분석은 가능한 모든 표적의 상대적 민감도를 동시에 측정할 수 있게 해 준다. 효모 유전자의 약 45%가 포유류 상동 유전자를 가지지만(BLAST e < 10^-10), 세포벽과 다수의 efflux pump 및 해독 기전 때문에 높은 화합물 농도가 필요하고 후생동물 특이적 과정이 없다는 한계가 있다(그럼에도 신경퇴행, 당뇨, 혈관신생 등을 효모로 모델링한 연구가 있다).

핵심은 barcode가 달린 Yeast KnockOut(YKO) 컬렉션(두 접합형의 haploid, 이형접합 및 동형접합 diploid 결실)에 기반한 분석법들이다. 각 균주는 고유한 20-bp barcode 두 개를 지닌다. 균주를 풀링하여 화합물 존재/부재 조건에서 경쟁 배양한 뒤 genomic DNA를 추출하고 공통 primer로 barcode를 PCR 증폭하여 TAG4 microarray 혹은 차세대 시퀀싱으로 정량한다(Fig. 1A). **Haploinsufficiency profiling(HIP)**은 이형접합 diploid 결실 균주를 스크리닝한다. 약물 표적 유전자에 대한 이형접합 균주가 특이적으로 민감해지므로, 가장 많이 감소한 균주가 화합물이나 표적에 대한 사전 지식 없이도 표적을 가리키는 경우가 많다. 잘 알려진 화합물과 신규 화합물로 실현 가능성이 입증되었고, 직접 표적이 효모에 없는 약물(예: 신경이완제)도 off-target 기전에 대한 통찰을 준다. 평판 기반 방식(컬렉션을 화합물 agar에 pinning하고 colony 크기를 측정)은 화합물이 1~2 자릿수 더 필요하지만, 최근 액체 배지와 고체 배지에서의 유전적 상호작용이 잘 상관한다는 결과가 있다. 유전자 용량을 절반으로 줄이는 것으로 부족할 때는 barcode가 달린 DAmP 컬렉션(3' UTR 상류에 marker 삽입, 평균적으로 야생형 단백질의 약 10% 발현)이 이형접합체에서 보이지 않던 haploinsufficiency를 검출하며, 이형접합체와 DAmP의 barcode는 겹치지 않아 같은 array에서 동시에 분석하여 동적 범위를 넓힐 수 있다. 저자들은 알려진 표적이 DAmP나 온도 민감성 allele에서만 검출된다면 그 표적이 주된 작용 기전이 아닐 수 있다고 본다. 5-FU는 Cdc21을 저해한다고 여겨지지만 효모에는 thymidine kinase가 없고, 유전체 규모 분석은 주된 작용이 불소화 뉴클레오티드의 RNA 삽입임을 보여준다. 단일 유전자 산물만 표적으로 하는 약물은 드물기 때문에(imatinib 인용) 세포 내 모든 표적을 in vivo로 보는 것이 가치 있다. 한계는 효모 상동 유전자가 없는 표적, 저해해도 성장에 영향이 없는 표적, 비필수 또는 중복 표적이다. 저자들은 2000개 이상의 화합물을 스크리닝했을 때 표적이 잘 규명되어 있고 그 저해가 성장을 저해하는 경우에는 표적 확인에 실패한 적이 없다고 보고한다.

**Homozygous profiling(HOP)**은 비필수 유전자의 완전 결실 균주(haploid 또는 diploid)를 사용한다. 표적 자체가 없으므로 표적을 직접 가리키지 않고, 표적 경로를 완충(buffering)하며 화합물 존재 하에서 성장에 필요한 유전자를 드러내며, 직접적인 단백질 표적이 없는 화합물에 특히 유용하다. DNA 손상 반응 유전자가 대표적 예로, Lee 등(2005)은 12종의 DNA 손상제에 대한 여러 DNA 수선 모듈의 상대적 중요도를 규명했으며, 알킬화제처럼 기전이 비슷한 화합물도 각각 고유한 유전체 규모 signature를 보였다. 이 프로파일을 잘 규명된 약물과 비교하여 클러스터링하면 작용 기전을 추정할 수 있다. 조건부 필수 유전자를 query로 한 synthetic genetic array(SGA) 프로파일과 HOP 프로파일을 상관시키면(Fig. 1B) query 유전자를 표적으로 추정할 수 있으며, 이 방법으로 신규 소분자의 표적이 Ero1임이 밝혀졌다(Costanzo 등 2010). 효모 K28 killer toxin 돌연변이 스크리닝도 변형 사례이다. HIP와 HOP는 상호 보완적이지만, 약물-표적 상호작용의 확정에는 in vitro 결합/활성 분석 같은 독립적 확인이 여전히 필요하다.

**Multi-copy suppression profiling(MSP)**은 표적 과발현이 저항성을 주는지를 이용한다. Rine 등(1983)이 고복제 genomic 라이브러리를 고체 배지에 적용하여 tunicamycin의 표적으로 *ALG7*을 찾은 데서 시작되었다. Hoon 등(2008)은 이를 야생형을 약 90% 저해하는 용량의 액체 풀링 배양으로 소형화하고 회수한 삽입체를 TAG4 array에 hybridization하였으며(Fig. 1C), methotrexate, fluconazole, rapamycin의 표적으로 각각 Dfr1, Erg11, Tor1을 올바르게 찾았다. 약물 pump가 저항성 균주 집합을 지배할 수 있으며, pump 결손 배경의 라이브러리로 완화할 수 있다. 저자들은 라이브러리들을 비교한다(Table 1). 무작위 genomic 단편 라이브러리, Yeast Genome Tiling 컬렉션(약 10 kb 삽입체, 97.2% 커버리지이나 삽입체당 여러 유전자), GAL1 유도성 ORF 라이브러리(ORF의 약 80%; Butcher 등은 rapamycin에서 TOR 유전자를 회수; 유도 발현이 내인성 수준을 반영하지 않고 유전자의 약 15%는 과발현 시 독성), 그리고 MoBY-ORF 컬렉션(내인성 UTR을 가진 단일 ORF, 저복제 CEN plasmid, ORF의 90%, YKO 균주와 같은 두 barcode 보유)이다. 과발현 시 독성인 유전자는 화학적 suppressor 스크리닝의 출발점이 될 수 있으며, *Pseudomonas aeruginosa* 유전자와 인간 p38을 발현하는 효모 균주가 그 예이다. MoBY-ORF는 열성 저항 돌연변이의 상보에도 쓰인다(Fig. 1D). rapamycin에서는 *fpr1*이 회수되었고(Fpr1이 rapamycin과 독성 복합체를 이루어 Tor1을 저해), theopalauamide에서는 필수 ergosterol 경로 효소가 연관되어 이 화합물이 ergosterol에 결합하는 새로운 sterol 결합 화합물 부류임이 밝혀졌다. MSP는 다른 유전체에도 적용 가능하여 *Candida albicans* 라이브러리를 효모에서 발현시켜 calyculin A 저항성을 주는 Glc7 ortholog를 확인했다.

**Comparative expression profiling**은 약물에 의한 전사 프로파일을 결실 돌연변이의 프로파일과 비교한다. Marton 등(1998)은 3-amino-triazole 처리가 *his3*Delta와 유사함을 보였지만 FK506은 *fpr1*과 상관이 낮았다(r = -0.23). Hughes 등(2000)은 약 300개 돌연변이와 수십 종 약물의 프로파일 compendium을 체계적으로 구축했다. 성장 저해가 필요 없다는 장점이 있으나 환경 스트레스 반응이 프로파일을 압도할 수 있고, 포괄적이려면 모든 결실 allele과 다양한 농도의 프로파일이 필요하며 knockdown(약물)과 knockout은 다르다. 연결성 지도(Lamb 등 2006)는 이 개념을 인간 세포주로 옮겼다. Table 2는 각 분석법을 비교하고(유전체 규모 여부, 표적 확인, 완충 경로, 화합물 소모량, 성장 저해 필요 여부), Table 3은 효모에서 확인된 약물-표적 쌍을 나열한다(cerivastatin·lovastatin/Hmg1, tunicamycin/Alg7, methotrexate/Dfr1, fluconazole/Erg11, rapamycin/Tor1, calyculin A/Glc7, FK506·cyclosporin A/Cnb1, 신규 화합물 erodoxin/Ero1 등).

마지막 절은 전망을 다룬다. 효모에서 찾은 hit 중 몇 개가 승인 약물이 되었는지는 완전히 알 수 없으나 핵심 분석 특허가 라이선스되었고, rapamycin(Tor1/Tor2)과 임상 2상의 항진균제 AN260(tRNA synthetase 저해제)이 예로 인용된다. 저자들은 다음 10년의 특징이 interactomics, "diseaseome" 같은 다양한 효모 데이터셋의 통합일 것으로 전망한다. 효모의 주된 장점은 작용 기전을 모르는 화합물의 기전 규명, 세포 내 모든 표적의 동시 in vivo 평가(현재 효모에서만 가능), 약물 재창출, 그리고 "undruggable"로 여겨지던 표적의 편향 없는 발굴이다. 핵심 기여는 임상 약물보다 특이성이 높은 화학 probe(의약화학적 최적화 필요)로서, 새로운 druggable 표적과 화학 scaffold를 제시하고 인간 세포에서 보존된 경로 연구를 촉진하는 것일 수 있다. "magic bullet"에서 "magic shotgun"으로의 이동, 즉 다중 표적 약물과 병용 요법에서 효모는 민감화된 배경에서 수천 가지 조합을 빠르게 시험할 수 있다. 효모에서 개발된 방법은 다른 계로 옮겨지고 있다. 효모에서의 human ORFeome MSP, *E. coli* 필수 유전자 과발현 컬렉션을 이용한 MSP(Pathania 등 2009), 포유류 세포의 풀링 RNAi 스크리닝, 효모 synthetic lethality를 이용한 인간 상호작용 우선순위화(RAD54B/FEN1), PLK1을 가리킨 K-Ras synthetic-lethal shRNA 스크리닝, BRCA1/2 변이 종양에서의 PARP 저해 등이다. 효모는 앞으로도 결과 확인과 새로운 접근의 시험장으로 계속 기여할 것이다.

---

## Significance in Introduction Context

- 유전자 용량과 haploinsufficiency라는 고전 유전학 개념이 유전체 규모 도구로 발전하는 과정을 보여준다. 표적 유전자 이형접합체가 가장 약물 민감한 균주가 된다.
- barcode가 달린 결실 컬렉션을 이용한 reverse genetics와 전통적 forward genetic screen의 차이, 그리고 풀링 경쟁 배양과 barcode 판독이라는 핵심 혁신을 보여준다.
- 유전적 상호작용(synthetic lethality, SGA)과 화학-유전적 상호작용을 연결하여 약물을 돌연변이의 "phenocopy"로 이해하게 한다.
- 완충(buffering), 필수/비필수 유전자, dosage suppression, 상보(complementation)를 실제 응용 속에서 소개한다.

---

## Key References

1. **Giaever et al. (1999)** — Genomic profiling of drug sensitivities via induced haploinsufficiency, Nat Genet 21(3):278-283 — HIP의 기원
2. **Hoon et al. (2008)** — An integrated platform of genomic assays reveals small-molecule bioactivities, Nat Chem Biol 4(8):498-506 — 풀링 MSP와 HIP/HOP
3. **Ho et al. (2009)** — A molecular barcoded yeast ORF library enables mode-of-action analysis of bioactive compounds, Nat Biotechnol 27(4):369-377 — MoBY-ORF, MSP, 열성 저항성 상보
4. **Lee et al. (2005)** — Genome-wide requirements for resistance to functionally distinct DNA-damaging agents, PLoS Genet 1(2):e24 — HOP으로 DNA 수선 모듈 규명
5. **Parsons et al. (2006)** — Exploring the mode-of-action of bioactive compounds by chemical-genetic profiling in yeast, Cell 126(3):611-625 — 화학-유전적 signature 클러스터링
6. **Yan et al. (2008)** — Yeast barcoders: a chemogenomic application of a universal donor-strain collection carrying bar-code identifiers, Nat Methods 5(8):719-725 — barcode DAmP hypomorph
7. **Hughes et al. (2000)** — Functional discovery via a compendium of expression profiles, Cell 102(1):109-126 — 비교 발현 프로파일링
8. **Costanzo et al. (2010)** — The genetic landscape of a cell, Science 327(5964):425-431 — 화합물(Ero1)과 표적을 잇는 SGA 지도

---

## Future Research Directions

- HIP/MSP의 논리를 포유류 세포로 확장: 풀링 RNAi/shRNA 기능상실 스크리닝, 암세포주에서의 화학적 synthetic lethality 스크리닝(K-Ras와 PLK1, BRCA와 PARP), 효모 synthetic lethality로 인간 유전적 상호작용 우선순위화, 효모에서 발현한 human ORFeome으로 MSP.
- 효모 chemogenomic 데이터를 interactome 및 질병 네트워크("diseaseome") 데이터와 통합하여 교란의 시스템 수준 효과를 예측하고, 시퀀싱 기반 barcode 판독을 활용.
- 민감화된 배경에서 대규모 병용 조합을 효모로 시험하여 다중 표적 약물과 병용 요법("magic shotgun")을 지원.
- "undruggable" 표적에 대한 효모 유래 화학 probe 개발(의약화학적 최적화 후), 그리고 낮은 효모 흡수(pump 결손 배경), 효모 상동 유전자가 없는 표적, 약물 pump가 지배하는 MSP hit 문제의 해결.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
