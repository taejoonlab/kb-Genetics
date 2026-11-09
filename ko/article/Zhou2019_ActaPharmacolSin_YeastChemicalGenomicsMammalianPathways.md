---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# 효모 chemical genomics와 포유류 세포 경로 분석의 통합

## Citation (NLM)
Zhou FL, Li SC, Zhu Y, Guo WJ, Shao LJ, Nelson J, Simpkins S, Yang DH, Liu Q, Yashiroda Y, Xu JB, Fan YY, Yue JM, Yoshida M, Xia T, Myers CL, Boone C, Wang MW. Integrating yeast chemical genomics and mammalian cell pathway analysis. Acta Pharmacol Sin. 2019;40:1245-1255. doi:10.1038/s41401-019-0231-y

**DOI:** [https://doi.org/10.1038/s41401-019-0231-y](https://doi.org/10.1038/s41401-019-0231-y)

---

## Summary

이 연구는 효모가 화합물의 포유류 세포 내 생리활성을 예측하는 범용 대리 플랫폼이 될 수 있는지를 묻는다. 연구는 Piotrowski 등(2017)의 pooled barcode 기반 chemical-genomic 파이프라인을 사용한다. 약물 과민성 배경(*pdr1* *pdr3* *snq2*)의 비필수 유전자 결실 균주 310개로 이루어진 diagnostic set을 화합물 존재하에 경쟁적으로 배양하고, 균주별 barcode와 화합물별 PCR tag를 이용해 multiplex next-generation sequencing으로 읽는다. DMSO 대비 균주의 감소/증가 z-score는 BEAN-counter로 계산하며, 배치별로 처리한 뒤 첫 번째 SVD 성분을 제거해 배치 효과를 보정했다. 얻어진 chemical-genetic 프로파일은 synthetic genetic array(SGA) 분석으로 만든 효모 전체 유전적 상호작용 네트워크와 비교하며, 같은 경로의 유전자는 유사한 상호작용 프로파일을 공유한다. 기능상실 돌연변이는 해당 유전자 산물을 저해하는 화합물의 효과를 모사하므로 음성 유전적 상호작용은 음성 chemical-genetic 상호작용과 유사하다는 논리이다. CG-TARGET 파이프라인이 교란된 GO biological process(1309개 term)를 예측하며, 대조군과 재표본 프로파일로 추정한 FDR 25% 이하를 high-confidence 예측으로 정의하고 process는 네트워크의 17개 기능 영역(SAFE)에 매핑한다.

중국 국가 화합물 라이브러리(CNCL, 합성 및 천연물 333,200개) 중 5,360개(1.6%)가 과민성 균주의 성장을 억제하여 chemical-genetic 프로파일링에 투입되었다(Results는 20 uM에서 20% 이상 억제라고 기술하고, Methods는 45-75% 억제 화합물을 프로파일링에 선택했다고 기술한다). 이 중 1,109개(21%)가 high-confidence bioprocess 예측을 얻었다. 승인 약물 1,898개의 참조 라이브러리에서는 초기 hit 160개 중 77개(48%)가 high-confidence 프로파일을 보여 CNCL보다 2배 이상 높았다. 화합물을 가장 유사한 프로파일의 유전자 위치에 놓은 네트워크에서 약물은 기대되는 bioprocess에 놓였다. idarubicin(topoisomerase II)은 DNA 복제/repair, delanzomib/CEP-18770(proteasome)은 단백질 분해(top 표적 *RPT6*), mocetinostat(HDAC 저해제)은 mRNA 처리에 위치했고, triapine(ribonucleotide reductase)과 5-FU(thymidylate synthase)는 RNA 기반 세포독성을 반영하여 모두 *NOP2*에 매핑되었다. CNCL 예측은 vesicle trafficking, glycosylation, 대사에서 과대표되고 mitosis, 염색질 조직화, mRNA 처리, DNA repair에서 과소표되었으며, 이는 RIKEN Natural Product Depository, NIH Structural Diversity Set 등 다른 대형 라이브러리와 비슷했다. 프로파일을 Pearson 상관으로 직접 비교하면(PCC > 0.2588, 전체 쌍의 상위 5%) 1,109개 CNCL 화합물 중 861개(78%)가 승인 약물 77개 중 66개(86%) 가운데 하나 이상과 유사했고, 이로써 특성이 밝혀지지 않은 화합물이 포유류 작용 기전 주석을 물려받을 수 있다.

두 경로로 검증했다. 효모에서 인간까지 보존된 autophagy의 경우, trifluoperazine 또는 wortmannin과 프로파일이 유사한 CNCL 화합물 38개(그중 11개는 상위 약 0.4%, PCC > 0.5)를 GFP-LC3 안정 발현 HEK293 세포에서 시험했다. 38개 중 14개(37%)가 rapamycin(200 nM 양성 대조)과 유사한 수준으로 GFP-LC3 puncta를 증가시켰다. 대표 3개(CD0345-E003, CD0354-A010, WNN0090-F002)는 LC3-II를 시간 의존적으로 증가시켰고 나머지 11개도 24시간에 LC3-II를 증가시켰으며, 대표 3개는 전자현미경으로 autophagic vacuole(AVi, AVd)이 확인되었다. 무관한 예측을 가진 대조 화합물 26개는 puncta를 유도하지 않았고, 검증된 화합물의 평균 PCC(0.568)가 38개 전체(0.456)보다 높아 프로파일 유사성이 높을수록 검증 가능성이 컸다. 검증된 hit는 두 군으로 나뉘었다. 전자현미경과 LC3-II 시간 경과까지 모든 분석을 통과한 두 화합물은 DNA 복제/repair 및 mitosis에 매핑되었고(효모 Mec1/Tel1/Rad53 경로를 통한 DNA 손상 유도 표적 autophagy와 일치), 대부분의 나머지는 vacuolar acidification, ATP 결합 양성자 수송 같은 예측과 함께 vesicular trafficking에 매핑되어 lysosomal H+-ATPase와 관련된다. 고찰은 autophagy 조절 화합물이 모두 cationic amphiphilic drug(CAD)이며, 이들이 autophagosome 구획에 축적되어 효과를 부분적으로 설명할 수 있다고 언급한다. 또한 tubulin cytoskeleton assembly로 예측된 16개 화합물을 HeLa 세포에서 세포 주기 분석으로 시험하여 2개가 tubulin 기능을 교란함을 확인했다.

효모에 없는 Wnt/beta-catenin 경로의 경우, 알려진 억제제 FH535와 상관되는 CNCL 화합물 18개(PCC 0.28-0.42, 상위 약 4%)를 선별했다. HepG2 세포의 TCF/LEF1 luciferase reporter에서 20 uM 처리 시 FH535는 신호를 72.08% 감소시켰고, 3개 화합물도 감소시켰다: CD0450-A007(39.61%), 3215-1 A11(61.64%), 3305-2 G4(53.08%). 이 중 3305-2 G4(*Cephalotaxus fortunei*에서 분리된 alkaloid drupacine)만 beta-catenin 단백질도 용량 의존적으로 감소시켰고, reporter IC50(7.44 uM)가 FH535(7.43 uM)와 일치했다. 무작위 화합물 24개 중 2개(CD0203-G006, CD0251-G005)는 reporter를 억제했으나 beta-catenin 수준을 바꾼 것은 없었다. FH535와 3305-2 G4는 네트워크의 서로 다른 영역(glycosylation/단백질 folding/세포벽 대 mRNA 처리)에 매핑되었지만 "response to acidic pH"(driver 유전자 *BCK1*, *SLT2*)라는 process 예측을 공유했고 PCC는 약 0.35(P = 1.05 x 10^-8)였다. 두 화합물의 가중 consensus로 만든 "pseudo-compound" 프로파일은 *CDC73*(4625개 유전자 중 5위)과 *MRK1*(6위)을 예측했고, 이들의 인간 상동체인 parafibromin(PAF1 complex, beta-catenin에 결합)과 GSK-3(beta-catenin을 인산화하여 분해 유도)는 Wnt 신호의 핵심 요소이다. autophagy 연관 화합물은 Wnt 연관 화합물(약 0.35)보다 높은 상관(약 0.8)을 보였으며 이는 보존성을 반영한다. 저자들은 편향 없는 효모 스크리닝의 표적 예측이 포유류 세포에서 검증될 수 있으며, 보존된 기능에서는 직접, 그 외에는 작용 기전이 알려진 약물의 프로파일로부터 추론할 수 있다고 결론짓고, drupacine의 항암 효과가 Wnt 신호와 관련되는지는 앞으로 밝혀야 한다고 본다.

---

## Significance in Introduction Context

- 유전적 상호작용 네트워크(synthetic lethality, SGA)가 약물 작용 해석을 위한 참조 지도가 되는 방식을 보여준다.
- 시퀀싱으로 읽는 pooled barcode 돌연변이 fitness assay라는 역유전학의 직접적 응용이다.
- 프로파일 유사성("guilt by association")으로 미지 화합물의 기능을 지정하는 논리와, 음성 대조군이 왜 필요한지를 설명한다.

---

## Key References

1. **Piotrowski JS, et al. (2017)** — Functional annotation of chemical libraries across diverse biological processes, Nat Chem Biol 13:982-993 — 본 연구가 사용한 diagnostic set chemical-genomic 플랫폼
2. **Simpkins SW, et al. (2018)** — Predicting bioprocess targets of chemical compounds through integration of chemical-genetic and genetic interactions, PLoS Comput Biol 14:e1006532 — CG-TARGET 방법
3. **Costanzo M, et al. (2016)** — A global genetic interaction network maps a wiring diagram of cellular function, Science 353:1381 — 프로파일 해석에 쓰인 네트워크
4. **Costanzo M, et al. (2010)** — The genetic landscape of a cell, Science 327:425-431 — SGA 기반 전체 유전적 상호작용 지도
5. **Parsons AB, et al. (2004)** — Integration of chemical-genetic and genetic interaction data links bioactive compounds to cellular target pathways, Nat Biotechnol 22:62-69 — chemical-genetic 프로파일
6. **Hoepfner D, et al. (2014)** — High-resolution chemical dissection of a model eukaryote reveals targets, pathways and gene functions, Microbiol Res 169:107-120 — 효모에 직접 표적이 있는 약물의 프로파일 유사성
7. **Simpkins SW, et al. (2019)** — Using BEAN-counter to quantify genetic interactions from multiplexed barcode sequencing experiments, Nat Protoc 14:415-440 — 데이터 처리
8. **Mosimann C, Hausmann G, Basler K (2006)** — Parafibromin/Hyrax activates Wnt/Wg target gene transcription by direct association with beta-catenin/Armadillo, Cell 125:327-341 — *CDC73* 예측의 근거

---

## Future Research Directions

- drupacine(3305-2 G4)이 Wnt/beta-catenin 신호를 통해 작용하는지, 직접 표적이 무엇인지 규명하고, 검증된 다른 hit의 특이적 작용 기전을 조사.
- 비보존 인간 경로에 작용하는 화합물에 대해 상동(ortholog) 효모 유전자 표적(*CDC73*, *MRK1* 등)을 찾는 방식으로, 승인 약물과의 효모 chemical-genetic 유사성을 효모에 없는 경로의 틀로 활용.
- 다양한 인간 질환을 위한 경로 특이적 약물 후보 발굴에 적용하며, 상관이 높은 필수적이고 고도로 보존된 경로에서 가장 강력함.
- autophagy hit가 vesicular trafficking 대 DNA 복제/repair 군으로 나뉘는 것이 서로 다른 작용 기전을 반영하는지, 그리고 cationic amphiphilic drug 축적의 역할을 탐구.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
