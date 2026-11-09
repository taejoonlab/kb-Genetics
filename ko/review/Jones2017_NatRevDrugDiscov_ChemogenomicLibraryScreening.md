---
tags: [genetics, class, review, ko]
date: 2026-11-09
type: class
---

# 약물 발굴에서 Chemogenomic 라이브러리 스크린의 응용

## Citation (NLM)
Jones LH, Bunnage ME. Applications of chemogenomic library screening in drug discovery. Nat Rev Drug Discov. 2017;16(4):285-296. doi:10.1038/nrd.2016.244

**DOI:** [https://doi.org/10.1038/nrd.2016.244](https://doi.org/10.1038/nrd.2016.244)

---

## Summary

Pfizer의 Jones와 Bunnage는 반복되는 문제에서 출발한다. 임상 탈락의 대부분은 효능 부족 때문이며, 이는 target 선택이 부실하거나 편향된 탓이라고 볼 수 있어 질병 관련 표현형 스크린으로의 이동을 촉진했다. 그러나 표현형 hit는 target을 모르므로 최적화가 어렵고, 구조 기반 설계가 불가능하며 기전 기반 독성을 예측하기도 힘들다. 기존의 target 규명법(chemoproteomic affinity capture, thermal proteome profiling)은 비용이 많이 들고 자주 실패한다. 저자들은 더 빠른 길로 chemogenomic 라이브러리 스크린을 제안한다. chemogenomic 라이브러리는 선택성이 높고 주석이 잘 달린 저분자 약리 조절제의 집합이며, 표현형 스크린에서 얻은 hit는 그 화합물의 주석된 target이 해당 표현형에 관여함을 시사하여 표현형 프로젝트를 target 기반 프로젝트로 전환시킨다. RNAi나 CRISPR-Cas9과 달리 저분자는 transfection에 내성이 약한 환자 유래 primary 세포를 포함한 다양한 assay 형식에 쉽게 적용할 수 있고, 단백질-단백질 상호작용이나 allosterism처럼 유전적 교란으로 다루기 어려운 양상도 탐색할 수 있다.

질병 관련 표현형 assay는 처리량이 낮기 때문에 chemogenomic 라이브러리는 수백에서 수천 개의 화합물로 구성되며, 수백만 개가 아니라 약리학적 공간을 효율적으로 덮도록 선택된다. 설계에는 대규모 공개/비공개 bioassay 데이터의 큐레이션이 필요하며, 화합물은 세포 투과성이 있고 주석된 target에 강력하며 프로테옴 전반에 선택적이어야 한다. 이상적으로는 target당 여러 chemotype을 포함하여 독립적인 화학적 근거로 target 가설을 뒷받침한다. 리뷰는 기존 세트를 비교한다. Pfizer chemogenomic 라이브러리(수백만 화합물과 수십억 데이터 포인트에서 선별, 주 target에 대한 효능 500 nM 미만, 비특이적 화합물 제외), Sigma-Aldrich LOPAC1280, Prestwick 라이브러리(승인 약물만 포함), GlaxoSmithKline Biologically Diverse Compound Set(이온 채널과 핵 수용체 coverage가 Pfizer 것보다 현저히 낮음), 진전된 전임상/임상 약물로 구성되어 안전성 자료가 있어 repositioning에 적합한 NIH MIPE, 그리고 GSK Published (Protein) Kinase Inhibitor Set(PKIS) 같은 kinase 중심 세트이다. Table 1에 규모와 coverage가 정리되어 있다. Pfizer는 2,984개 화합물/1,043개 target, LOPAC1280은 1,280개 화합물/453개 target(절반 이상이 GPCR 대상), Prestwick은 승인 약물 1,280개, GSK BDCS는 5,853개 화합물/736개 target(GPCR 27%와 kinase 22%가 주를 이루며 target당 최대 10개 화합물), MIPE 3.0은 459-465개 화합물(종양 중심, kinase 억제제 45%; 4.0 버전은 1,912개), NIH Molecular Libraries Program probe(375개, BARD에 공개 데이터), PKIS(367개 억제제, 224개 kinase assay와 24개 GPCR assay로 프로파일링, luciferase counter-screen에서 6%가 활성)이다. 함정으로는 pan-assay interference 화합물, 좋은 probe조차 갖는 off-target 활성, 위양성/위음성이 있으며, 음성 hit도 정보가 된다고 강조한다.

후속 단계로 counter-screen(세포독성, 형광), 경로 분석(예: omics 데이터와 문헌의 인과 진술로 상류 사건을 추론하는 Causal Reasoning Engine), 그리고 RNAi, CRISPR-Cas9, CETSA, chemical probe, activity-based protein profiling을 이용한 target validation이 이어진다. 다루는 응용은 target 규명, 약물 repositioning(라이브러리 구성원 다수가 기존 약물), 생물학적 경로 규명, 예측 독성학, 새로운 약리 modality 발굴이며, 희귀 육종에서 CRISPR/RNAi와 chemogenomic 스크린을 결합한 사례, 제브라피시 CRISPR-Cas9로 세포 이동에서 SRC를 검증한 사례 등이 있다.

설계 원칙 상세. hit의 주석된 target이 표현형의 실제 원인이 아닐 수 있으므로, 라이브러리는 target당 구조적으로 다양한 여러 화합물을 포함해야 하며 이상적으로는 비활성 음성 대조 유사체도 갖추어야 한다. 주석된 target이 배제되더라도 관련 단백질을 가리킬 수 있다. 라이브러리는 probe 가용성을 반영하므로 Structural Genomics Consortium 같은 이니셔티브가 유전자 가족(kinase, bromodomain, methyltransferase)을 더 균등하게 채우려 한다. 스크린 농도도 중요하다. primary 세포 표현형 assay는 종 모양(bell-shaped) 용량 반응을 자주 보이므로 단일 고농도 스크린은 위음성을 낳고, 전체 용량 반응 곡선이 바람직하다. 세포 생존율과 형광/luciferase counter-screen을 같은 시스템에서 병행해야 하며, 매우 친유성인 화합물(polypharmacology)은 피해야 한다. Pfizer 라이브러리는 효능 500 nM 미만 기준에 선택성, 투과성, 용해도, 세포독성에 대한 맞춤 multiparameter 최적화를 적용하고 PAINS와 예측된 frequent hitter를 제외했으며 target당 서로 다른 화학 template를 선호하고 사람이 직접 큐레이션했다. 제1형 근긴장성 이영양증의 MBNL1 상향 조절 스크린(1 uM, hit rate 3.3%)에서는 histone deacetylase 억제제가 hit로 나와 MBNL1이 후성유전적으로 조절됨을 시사했다.

응용과 사례. Target 규명: 3D lymphangiogenic sprouting assay에서의 LOPAC1280(hit rate 2.8%)은 mevastatin과 HMG-CoA reductase를 가리켰고, H3K27me3 imaging assay에서의 GSK BDCS(hit rate 8.5%)는 알려진 EZH2 억제제 8개 전부를 양성 대조로 회수하고 다른 상류 경로를 시사했으나 대부분의 target은 probe가 하나뿐이었다. invadopodia assay에서의 LOPAC1280(hit rate 0.4%)은 CDK 억제제 purvalanol A를 찾았는데 세포주기 정지 효과가 약해 CDK5가 target으로 제안되고 RNAi로 검증되었으며, 재현되지 않아 폐기된 다른 CDK 억제제는 위음성에 대한 경고가 된다. MIPE 3.0과 siRNA는 신경모세포종에서 Aurora B kinase를 찾았고, Broad Informer Set과 CRISPR/RNAi의 결합은 희귀 육종에서 CDK4와 XPO1을 찾았다. 약물 repurposing: 척삭종(chordoma)에서의 PKIS는 현재 임상시험 중인 EGFR 가설을 뒷받침했고, 환자 유래 백혈병 세포에서의 LOPAC1280은 quinacrine을 찾았다. MIPE 3.0 KRAS-G12V 불안정화 스크린에서는 ABL 억제제 중 ponatinib, nilotinib, rebastinib만 작용하여 off-target 관여를 시사했다(ponatinib은 야생형 kinase 57개를 IC50 1 uM 미만으로 억제). ibrutinib과의 조합 스크린은 림프종에서 PI3K/mTORC1 및 BCL-2 억제제와의 시너지를, ruxolitinib과 ABT-263은 호지킨 림프종에서의 추가 효능을 찾았으며, 1,001개 세포주와 265개 약물의 pharmacogenomic 지형은 U2AF1 돌연변이와 FLT3 억제제 감수성을 연결했다. 예측 독성학: BioMAP primary 세포 패널(어떤 화합물이 임상에서 관찰된 피부 발진 독성 프로파일을 가진 MAPK 억제제로 올바르게 예측됨)과 LINCS L1000 발현 assay(약 1,000개 전사체, 3만 개 이상 화합물)를 기계학습으로 약물 부작용과 연결했다. High-content 및 in vivo 스크린: 12개 isogenic knockout 세포주에서의 LOPAC1280은 Pharmacogenetic Phenome Compendium을 만들었고, 제브라피시 lateral line 이동 스크린은 마우스에서 전이도 억제하는 SRC 억제제를 찾았으며(제브라피시 CRISPR-Cas9로 SRC 검증), 올챙이 LOPAC 스크린은 VEGFA 유도 신생혈관형성을 차단하는 adenosine A1 길항제를, Duchenne 제브라피시 모델의 Prestwick 스크린은 PDE5 억제제를 찾았다. in vivo에서는 노출 부족이나 대사체 때문에 위음성이 생길 수 있다. 새로운 on-target 약리: kinase 중심 세트 스크린은 TAK1이 DFG-out 구조로 억제될 수 있음을 밝혔고(결정학으로 확인) TYK2 pseudokinase 도메인에 결합하는 화합물로 이어졌으며, ATP 부위 kinase 억제제가 HSP90/CDC37 recruitment를 줄여 on-target 분해를 일으킬 수 있다. 다른 modality의 저분자 증강제: brefeldin A와 L755507은 CRISPR-Cas9 편집에서 homology-directed repair를 증강했고, guanabenz는 siRNA 흡수를 증강했으며, 2,000개 넘는 FDA 승인 약물 스크린에서 13개 약물이 AAV 형질도입을 증강했다.

결론과 전망. 표현형/경로 스크린은 primary 세포, 조직, 환자 iPSC를 이용한 "disease-in-a-dish" 모델로 부흥기를 맞고 있으며, 유전적 도구가 어려운 이런 세포에서 저분자는 편리하다. 라이브러리의 공통 기준은 선택적 약제로 생물학적 공간을 폭넓게 덮고 target당 서로 다른 chemotype을 여럿 두는 것이다. 과제는 bioassay 데이터베이스의 주석 정확도(STRENDA, BARD, IUPHAR/BPS Guide to PHARMACOLOGY, Open PHACTS로 개선), 스크린 재현성(세포 밀도와 배지가 pharmacogenomic 결과를 바꿈), chemical probe 기반 target validation의 네 기둥(free-drug 노출, target occupancy, 기능적 약리, 관련 표현형), 보고된 많은 probe의 광범위한 off-target 활성(The Chemical Probes Portal), druggable genome 쪽으로 편향된 라이브러리와 구분되는 약제가 적을 때의 통계적 검정력 부족이다. 따라서 chemogenomic 스크린은 편향 없는 전장 유전체 RNAi 또는 CRISPR-Cas9 스크린과 병행하고, counter-screen과 계산적 probe 선택(효능과 선택성의 tool score 등)을 활용하는 것이 이상적이다. 저자들은 chemogenomic 스크린 사용의 큰 증가, 산업-학계 협력(산업계가 큐레이션한 라이브러리가 처리량이 낮은 학계의 표현형 assay를 뒷받침), open-innovation 라이브러리를 예상하며, chemogenomics가 질병 관련 표현형 스크린과 명확한 분자 target을 잇는 다리라고 결론짓는다.

---

## Significance in Introduction Context

- 정방향 chemical genetics의 현대적 후계로, 표현형을 먼저 보고 target은 나중에 찾되 유전자 교란 대신 주석된 화학적 교란을 사용한다.
- 저분자 교란과 유전적(RNAi, CRISPR) 교란을 비교하고 target validation에서 상보적임을 보여준다.
- 모든 스크린에서 주석의 질, 선택성, 위양성 통제가 왜 중요한지 설명한다.

---

## Key References

1. **Bredel M, Jacoby E (2004)** — Chemogenomics: an emerging strategy for rapid target and drug discovery, Nat Rev Genet 5:262-275 — 기초 리뷰(참고문헌 11; [[ko/review/Bredel2004_NatRevGenet_Chemogenomics]] 참조)
2. **Schenone M, Dancik V, Wagner BK, Clemons PA (2013)** — Target identification and mechanism of action in chemical biology and drug discovery, Nat Chem Biol 9:232-240 — target deconvolution 방법 (참고문헌 8)
3. **Bunnage ME, Chekler ELP, Jones LH (2013)** — Target validation using chemical probes, Nat Chem Biol 9:195-199 — probe 기반 target validation의 네 기둥 (참고문헌 14)
4. **Arrowsmith CH 외 (2015)** — The promise and peril of chemical probes, Nat Chem Biol 11:536-541 — probe의 질과 오용 (참고문헌 79)
5. **Nijman SMB (2015)** — Functional genomics to uncover drug mechanism of action, Nat Chem Biol 11:942-948 — 유전학적 target validation (참고문헌 13)
6. **Elkins JM 외 (2016)** — Comprehensive characterization of the Published Kinase Inhibitor Set, Nat Biotechnol 34:95-103 — PKIS 선택성 프로파일링 (참고문헌 43)
7. **Hong AL 외 (2016)** — Integrated genetic and pharmacologic interrogation of rare cancers, Nat Commun 7:11987 — CRISPR/RNAi와 chemogenomic 스크린의 결합 (참고문헌 46)
8. **Iorio F 외 (2016)** — A landscape of pharmacogenomic interactions in cancer, Cell 166:740-754 — 1,001개 세포주와 265개 약물 (참고문헌 56)

---

## Future Research Directions

- 새로운 target에 대한 선택적 probe를 개발하는 산업-학계 컨소시엄(SGC 모델)과 최상의 보고된 probe를 모은 "open innovation" 라이브러리로 druggable genome 너머로 라이브러리 target coverage 확대.
- chemogenomic 스크린을 편향 없는 전장 유전체 RNAi 또는 CRISPR-Cas9 스크린과 counter-screen과 함께 병행하여 target/경로 coverage를 극대화하고 위양성·위음성을 감소.
- bioassay 주석, 표준화된 보고, probe 품질 도구(STRENDA, BARD, IUPHAR/BPS Guide to PHARMACOLOGY, Open PHACTS, The Chemical Probes Portal, 정량적 tool score)와 스크린 재현성 개선.
- 예측 독성학과 유전자 편집, RNAi, 바이러스 유전자 전달의 저분자 증강제 같은 새로운 modality에 적용하고, 산업계 라이브러리가 처리량이 낮은 학계 표현형 assay를 뒷받침하도록 협력.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
