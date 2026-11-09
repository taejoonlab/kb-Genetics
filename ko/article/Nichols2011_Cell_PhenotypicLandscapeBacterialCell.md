---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# 세균 세포의 표현형 지형도 (Phenotypic Landscape of a Bacterial Cell)

## Citation (NLM)
Nichols RJ, Sen S, Choo YJ, Beltrao P, Zietek M, Chaba R, Lee S, Kazmierczak KM, Lee KJ, Wong A, Shales M, Lovett S, Winkler ME, Krogan NJ, Typas A, Gross CA. Phenotypic landscape of a bacterial cell. Cell. 2011;144(1):143-156. doi:10.1016/j.cell.2010.11.052

**DOI:** [https://doi.org/10.1016/j.cell.2010.11.052](https://doi.org/10.1016/j.cell.2010.11.052)

---

## Summary

세균의 서열 정보가 폭발적으로 늘고 기능을 모르는 유전자가 많아지면서, 유전자와 표현형을 대규모로 연결하는 방법이 필요해졌다. 저자들은 *E. coli* K-12를 개념 증명 대상으로 삼아, 돌연변이 라이브러리 전체를 수백 가지 조건에서 정량적으로 측정하는 "phenomic profiling"을 수행했다. Keio 단일 유전자 결실 라이브러리, 필수 유전자 hypomorph(C-말단 TAP 태그 또는 특정 allele), 소형 RNA/소형 단백질 knockout 라이브러리를 agar 플레이트에 1536 colony 밀도로 배열하여 사용했다. 324개 조건(114종의 고유 스트레스, 절반 이상이 항생제/항균제)에서 성장시켰으며, 야생형 성장을 최대 약 50%만 억제하는 subinhibitory 농도를 써서 특이적인 약물-유전자 상호작용을 검출하고 suppressor 돌연변이의 우세를 줄였다. colony 크기는 유전적 상호작용 분석에서 개발된 방법으로 점수화했다. 각 돌연변이는 독립 클론 2개를 사용했고 스크린을 최소 2회 반복하여 점수당 4~6회 측정값을 얻었다. 반복 간 colony 크기 상관은 r = 0.77이었고, 최종 데이터는 3979개 돌연변이 x 324개 조건 행렬이며 ecoliwiki.net/tools/chemgen에 공개되었다.

계층적 군집 분석에서 유사한 조건과 기능적으로 관련된 돌연변이가 함께 묶였다. 예로 *rfa* LPS core 유전자들과 *rfaD/rfaE/lpcA*(외피 완전성 스트레스에 공통 민감), *dsbA*와 *dsbB*, 그리고 막 스트레스에 민감하고 aminoglycoside에 더 저항적인 *nuo* 전자전달 유전자들이 있다. "phenotypic signature"의 상관계수가 0.6~0.8인 유전자 쌍은 같은 operon 소속이 100배 이상, 알려진 단백질 상호작용이 150배 증가해 데이터의 생물학적 타당성이 검증된다. FDR 5% 기준으로 전체 균주의 49%(1957/3979)가 하나 이상의 표현형을 보였고("responsive genome"), 총 13,497개 표현형(유전자-조건 쌍의 약 1%) 중 약 80%가 음성(더 민감), 20%가 양성이었다. 저자들은 197개의 조건부 필수(conditionally essential) 유전자를 찾았고, 그중 풍부 배지에서의 116개는 알려진 필수 유전자 수를 약 30% 늘리며 기존 필수 유전자에서 과소대표된 외피(envelope) 기능에 편중되어 있다.

표현형 signature는 기능 할당에도 쓰였다. 상관/역상관 signature를 통해, *marRAB* operon의 기능 미상 유전자 *marB*가 억제자 *marR*처럼 행동하고 efflux pump 유전자 *acrB*와는 역상관임을 보였다. 후속 실험에서 *marB* 결실은 *marA* 전사체를 약 2배 탈억제했고(*marR*과 가산적), 따라서 MarB는 MarR과 독립적으로, 아마도 전사 후 수준에서 MarA를 억제한다. 이때 PCR 검증, 재형질도입, *mar* 좌위 시퀀싱 등 엄격한 대조가 적용되었다. 또 다른 응용은 항엽산제로, sulfonamide(표적 FolP)와 trimethoprim(표적 FolA)은 강한 상승작용이 있지만 두 약물의 표현형 프로파일은 서로 약하게만 상관한다(r = 0.15, 같은 계열 내 sulfa 0.57, TMP 0.67). 1-탄소 대사의 glycine cleavage(*gcv*)와 *glyA* 가지의 돌연변이가 두 약물에 다르게 반응하며, 이는 엽산 유도체의 차등 축적이 상승작용의 기반일 수 있음을 시사한다.

Orphan 유전자와 보존도: 기능 미상(orphan) 유전자 돌연변이도 주석된 유전자와 비슷한 비율로 표현형을 보이지만 표현형 수는 더 적고, orphan의 25% 이상이 주석된 유전자와 상관계수 r >= 0.5의 signature를 보여 여러 세포 과정에 걸쳐 신뢰도 높은 기능 단서를 제공한다. 반응성이 가장 큰 orphan은 반응성이 큰 주석 유전자와 달리 분포가 좁아(감마프로테오박테리아 한정) 보존도가 orphan의 중요성을 나타내는 좋은 지표가 아니며 상동성만으로 주석하는 데 한계가 있음을 보여준다. 여러 표현형을 보이는 orphan *lpoB*는 장내세균에 한정되지만 보존된 peptidoglycan 합성을 조절한다(Typas 등 2010). *marB*의 기전은 미해결이다. DNA 결합 signature가 없고 Lon 프로테아제와 가산적으로 작용하므로 전사 후 수준에서, MarA-RNA polymerase 복합체를 방해하거나 periplasm에서 작용할 수 있고, *mar*는 내성 돌연변이의 hot spot이다.

항엽산제 상승작용 상세: 1-탄소 대사망에서 *glyA* 돌연변이는 trimethoprim에만, *gcvP/gcvT/gcvH* 돌연변이는 sulfa 약물에만 민감했고 액체 배양에서도 재현되었다. *glyA*와 *gcv*는 합성 치사 쌍으로, 5,10-methylene-THF를 만드는 두 경로다. 각 약물이 주로 서로 다른 가지를 통해 5,10-mTHF를 고갈시키므로 병용 처리는 두 가지를 모두 막는다는 모델이며, 이에 따라 *glyA*와 *gcvP* 균주는 병용 처리에서 야생형보다 더 나쁘게 자라지 않았고 한 가지를 유전적으로 제거하면 상승작용이 줄지만 사라지지는 않았다. GCV 시스템이 없는 *Streptococcus pneumoniae*는 같은 정도로 성장을 억제하는 약물 농도에서 상승작용이 유의하게 낮았다. *ygfA*(5-formyl-THF cycloligase)는 *gcv*와 함께 묶이고 sulfa 특이적이며, *yggS*(예측 alanine racemase; D-alanine이 GlyA를 불활성화)는 sulfa에만 민감해 대사물질 기반 효소 조절도 기여함을 시사한다.

게놈 구조: 필수, 반응성, 조건부 필수 유전자는 선도 가닥(+, 전사가 복제와 같은 방향)에 치우쳐 있고 비반응성 유전자는 - 가닥에 치우쳐 있다. 반응성과 조건부 필수 유전자는 유전자 dosage가 가장 높은 *oriC* 근처에 operon 수준 이상의 영역 단위 봉우리로 모이고, terminus 영역은 반응성 및 널리 보존된 유전자가 적고 감마프로테오박테리아 한정 유전자가 풍부해, 아직 세포 네트워크에 통합되지 않은 최근 획득 유전자일 가능성이 있다.

약물 작용: 약물 signature는 크기가 커서(3979 대 유전자의 324) drug-GO 점수를 계산했으며, 유의한 719개 drug-GO 상호작용(64개 약물, 218개 GO 그룹) 중 657개가 음성, 62개가 양성이었다. 같은 표적의 약물이 함께 묶여, DNA 표적, THF 합성, peptidoglycan 약물이 각각 군집을 이루고(beta-lactam이 중앙에, 프로파일이 표적 PBP와 관련), 알려진 상승작용 쌍(trimethoprim/sulfonamide, mecillinam/cefsulodin)은 각 단일 약물과 구별되는 위치에 놓인다. 네 가지 quinolone은 모두 *xseAB*(exonuclease VII)와 음성 상호작용(p = 10^-6)을 보여 XseAB가 quinolone에 갇힌 gyrase를 제거할 가능성을 시사하며, nitrofurantoin은 NER이 필요하고 SOS를 활성화하는 DNA 손상제로 행동하고, indolicidin은 양성자 구동력 uncoupler CCCP와 유사하며, phleomycin과 bleomycin은 DNA 반응 약물과 묶이지 않는다. 저자들은 이것이 지금까지 가장 포괄적인 원핵생물 chemical genomic 연구(3979 균주 x 324 조건)이며 유전자와 약물 기능 발견의 토대라고 결론짓고, 20개 이상의 추가 orphan 유전자를 연구 중이며 추가 판독 방법(비색, 고처리량 현미경)과 다른 생물의 ordered 라이브러리가 필요하다고 본다.

---

## Significance in Introduction Context

- 표현형이 유전자 기능을 드러낸다는 고전적 발상의 현대적·정량적 버전으로, 게놈 전체를 수백 가지 환경에서 유전자형-표현형 매핑한다.
- guilt-by-association(상관된 표현형은 같은 경로를 시사), 조건부 필수성, 환경에 의존하는 표현형을 보여준다.
- reverse genetics, 효모의 유전적 상호작용 방법, 항생제 기전과 상승작용을 연결하고, 데이터에서 가설(*marB*)이 도출되는 과정을 보여준다.

---

## Key References

1. **Baba T, et al. (2006)** — Construction of *E. coli* K-12 in-frame, single-gene knockout mutants: the Keio collection. Mol Syst Biol 2:2006.0008 — 사용된 돌연변이 라이브러리
2. **Typas A, et al. (2008)** — High-throughput, quantitative analyses of genetic interactions in *E. coli*. Nat Methods 5:781-787 — 점수화 방법
3. **Tong AH, et al. (2001)** — Systematic genetic analysis with ordered arrays of yeast deletion mutants. Science 294:2364-2368 — SGA의 선례
4. **Hillenmeyer ME, et al. (2008)** — The chemical genomic portrait of yeast: uncovering a phenotype for all genes. Science 320:362-365 — 효모판 유사 연구
5. **Giaever G, et al. (2004)** — Chemogenomic profiling: identifying the functional interactions of small molecules in yeast. PNAS 101:793-798 — 약물 작용에 대한 fitness 프로파일링
6. **Typas A, et al. (2010)** — Regulation of peptidoglycan synthesis by outer-membrane proteins. Cell 143:1097-1109 — 이 데이터에서 나온 동반 발견(*lpoA/lpoB*)
7. **Martin RG, Rosner JL (2002)** — Genomics of the marA/soxS/rob regulon of *E. coli*. Mol Microbiol 44 — *mar* 조절과 *acrAB* efflux
8. **Kwon YK, et al. (2008)** — A domino effect in antifolate drug action in *E. coli*. Nat Chem Biol 4:602-608 — 항엽산제의 대사적 효과

---

## Future Research Directions

- 더 다양한 스트레스를 검사하고 세포 판독 방법을 추가(agar 위 비색 전사 또는 biofilm 판독, 고처리량 현미경).
- 표현형 signature로 orphan 유전자(20개 이상 연구 중)를 주석하고, 보존도 기반 방법이 실패할 때 기능 할당의 두 번째 단계로 활용(마이크로바이옴 연구가 시사).
- 제안된 기전의 검증: XseAB의 quinolone-gyrase 복합체 제거, MarB의 MarA 조절, 항엽산제 상승작용의 대사물질 기반 조절; 다른 약물 상호작용으로 확장.
- 전이인자 돌연변이 유도로 다른 세균(병원체 포함)의 저비용 ordered 결실 라이브러리를 만들어 중요한 유전자가 *oriC* 근처에 배치되는 조직이 일반적인지 검증.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
