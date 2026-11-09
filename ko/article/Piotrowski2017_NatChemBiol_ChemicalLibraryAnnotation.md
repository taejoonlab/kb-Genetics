---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# 다양한 생물학적 과정에 걸친 화합물 라이브러리의 기능 주석

## Citation (NLM)
Piotrowski JS, Li SC, Deshpande R, Simpkins SW, Nelson J, Yashiroda Y, Barber JM, Safizadeh H, Wilson E, Okada H, Gebre AA, Kubo K, Torres NP, LeBlanc MA, Andrusiak K, Okamoto R, Yoshimura M, DeRango-Adem E, van Leeuwen J, Shirahige K, Baryshnikova A, Brown GW, Hirano H, Costanzo M, Andrews B, Ohya Y, Osada H, Yoshida M, Myers CL, Boone C. Functional annotation of chemical libraries across diverse biological processes. Nat Chem Biol. 2017;13(9):982-993. doi:10.1038/nchembio.2436

**DOI:** [https://doi.org/10.1038/nchembio.2436](https://doi.org/10.1038/nchembio.2436)

---

## Summary

저자들은 화합물이 교란하는 생물학적 과정을 기준으로 화합물 라이브러리에 주석을 다는 고처리량 효모 화학유전 플랫폼을 만들고, 7개 라이브러리의 13,524개 화합물에 적용했다. 플랫폼은 세 요소로 구성된다. (1) 약물 감수성 배경(pdr1 pdr3 snq2 삼중 결실, "3 delta"; PDR1, PDR3는 pleiotropic drug response 전사인자, SNQ2는 다제 수송체를 암호화): halo assay(대조 화합물 440개)에서 생장을 억제하는 화합물 수가 약 5배 증가했고, 전체 화합물의 평균 hit rate(액체배지에서 20% 이상 생장 억제)는 약 35%로 이전 야생형 배경 연구의 약 5배였다. benomyl-TUB3(34.4 uM), micafungin-BCK1(25 nM) 같은 특이적 상호작용은 이 배경에서만 검출되었다. (2) 진단용 결실 돌연변이 pool 310개(비필수 유전자의 약 6%): COMPRESS-GI 알고리즘(압축된 프로파일 유사도가 GO 공동 주석과 가장 잘 일치하도록 선택)으로 고른 157개와, 전역 유전적 상호작용 유사도 네트워크의 17개 클러스터에서 수작업으로 고른 236개(83개 중복)를 합친 뒤, 파일럿 버전 1에서 바코드 수가 비정상적인 균주를 제거했다. 157개 균주만으로도 약 5,000개 비필수 결실 전체와 동등한 유전자 기능 예측력을 보였고, pool 균주의 약 20%는 표준 SGA 콜로니 분석으로 점수화할 수 없었지만 pooled 액체 배양에서는 적절한 적합도를 보였다. (3) 설계한 1,000개 10-bp multiplex tag(Levenshtein 거리 3 초과, 조성 균형; 가장 균일한 768개 선택)를 쓰는 768-plex 바코드 시퀀싱: HiSeq lane당 768 샘플, flow cell당 6,144 샘플이며 96-plex와 동등한 품질을 보였다. 신호 대 잡음비는 배양 시간에 가장 민감했고, 최종 조건은 200 uL 미세배양, 48시간, 균주당 250 세포, PCR 30 cycle이었으며 amplicon 전체를 읽는 read-through 시퀀싱이 분리 read보다 균일한 read 수를 주었다. 대조 화합물(benomyl, micafungin, MMS, bortezomib)의 반복 상관은 r = 0.92-0.97이었다.

화학유전(CG) 점수는 DMSO 대조 대비 z-score이다(음수는 과민성, 양수는 저항성). +/-2.5 기준에서 화합물-돌연변이 쌍의 0.5%가 양성, 1.1%가 음성이었고, 생장을 20% 넘게 억제하는 화합물(약 4,700개)에서는 각각 1.3%, 2.3%였다. 돌연변이 하나당 평균 약 64개의 양성, 125개의 음성 상호작용이 있었고, 배경과 측정법이 달랐음에도 기존 전체 컬렉션 스크린과 프로파일이 상관을 보였다. 반응이 큰 177개 돌연변이와 1,377개 화합물의 계층적 군집화는 DNA 복제/수선, 유사분열, glycosylation/단백질 접힘/세포벽, 전사/염색질, vesicle traffic, 극성의 클러스터를 보였고, benomyl, nocodazole, 미특성화 화합물 NPD2784가 TUB3/CIN1과 함께 묶였으며 NPD2784는 in vitro에서 포유류 튜불린 중합을 강하게 억제했다. 표적 예측(CG-TARGET)은 각 CG 프로파일을 유전체 규모 유전적 상호작용 compendium과 비교한다. 화합물이 표적을 억제하면 해당 유전자(또는 과정)의 돌연변이가 이를 모방하고 그 유전자의 유전적 상호작용 프로파일이 화합물의 CG 프로파일과 닮아야 한다(fluconazole과 ERG11의 경우처럼). 상위 유전자의 GO 주석에서 얻은 생물학적 과정 예측을 FDR 25%(NPDepo) 또는 27%(NCI/NIH/GSK)로 걸러 고신뢰 집합(HCS) 1,522개 화합물 프로파일을 얻었다. 음성 상호작용이 예측을 주도했고(HCS 화합물의 85%, 81%가 음성 전용 프로파일로 재현된 반면 양성 전용은 41%, 22%; 양성 전용 예측은 RNA 처리와 유사분열로 치우쳤고 benomyl, MMS, tunicamycin을 놓쳤다), 상호작용이 많은(high-degree) 균주가 가장 중요했다. HCS 화합물의 약 82%가 생장을 20% 넘게 억제했지만 나머지 약 18%(1,518개 중 270개)는 더 약해서, 생리활성 사전 선별은 정보가 있는 프로파일을 잃을 수 있다. 90% 넘게 억제하는 296개 화합물 중 122개는 균주 대표성 부족으로 제외되었고, 나머지는 저항성 gtr1, avt5(아미노산 수송) 돌연변이가 우세해 일반적인 수송 관련 저항성을 시사했다(gtr1은 23개 화합물로 확인).

각 HCS 화합물을 17개 클러스터의 전역 네트워크에 매핑하자 모든 주요 과정이 적어도 하나의 화합물에 의해 표적이 되었고, glycosylation/단백질 접힘, 유사분열, 세포 극성, vesicle traffic이 가장 자주 표적이 되었다(구조/기능 편향이 적게 설계된 NCI 기전 다양성 세트를 포함해 대부분의 라이브러리에서 glycosylation/단백질 접힘 표적이 약 4배 농축). DNA 복제/수선, 염색질, 전사는 NCI 항암제와 RIKEN 항암 세트를 제외하고 고갈되었고(P < 0.001), 세포질/세포 표면 과정이 핵 과정보다 농축되어(P < 0.0001) 알려진 약물 표적 중 핵 표적이 8.4%뿐이라는 보고와 일치한다. 크기를 보정하면 RIKEN NPDepo가 기능적으로 가장 다양했고 NCI-NP가 가장 덜 다양했다. NIH Clinical Collection은 사람 cytochrome P450과 상호작용하는 화합물 때문에 sterol 대사에 농축되었는데, 효모의 상동 유전자가 ERG11, ERG5, NCP1이므로 효모가 약물-약물 상호작용 가능성을 예측할 수 있다. 사람 MSK에 결합하는 GSK 억제제는 효모 SLT2(MAPK 경로)로, 사람 PLK 억제제 5개는 핵막 단백질 표적화로 매핑되어 효모 CDC5와 일치했다. 구조 분석에서는 artemisinin 유도체(유사분열, NP266은 미토콘드리아 cristae 형성과도 연결)와 psoralen(vesicle traffic과 막 관련 과정)이 각각 묶였다.

검증은 대규모로 수행되었다. 세포 주기 정지가 예측된 NPDepo HCS 화합물 67개 중 27개(40%)가 유세포 분석에서 세포 주기를 교란했고 그중 19개(70%)가 예측 표현형과 일치했다(순열 라벨 대비 농축: G1 약 12배, G2 약 3배, S 4배). 세포벽 과정이 예측된 25개 화합물 중 8개(32%)가 beta-1,3-glucan 또는 chitin 염색을 변화시켰고 11개(44%)가 bud-neck 폭을 늘렸으며 7개는 zymolyase 과민성, 3개는 echinocandin B 같은 빠른 세포 누출을 일으켰다. 하나 이상의 세포벽 표현형을 보인 비율은 48%로 대조 화합물의 4%(24개 중 1개)보다 유의하게 높았다(P < 0.05). pseudojervine 유사 클러스터로부터 모화합물 jervine도 glucan 위치 이상을 일으킬 것이라는 예측이 확인되었다. 이중 표적 탐색에서는 DNA 복제와 양성자 수송으로 예측된 NP214(bleomycin A2 유도체; bleomycin의 막 관련 2차 효과와 일치), DNA 분해와 세포벽 생합성으로 예측된 NPD5925가 확인되었다. NPD5925는 echinocandin 유사 누출을 일으켰고, DAPI처럼 핵에 국소화했으며, hydroxyurea처럼 G1/초기 S기 정지를 유발했다. 이중 프로파일을 설명하는 단일 다면발현 유전자는 없었고, 용량 곡선이 1차와 2차 기전을 구분하는 데 도움이 될 것이다. 공개된 자원은 MOSAIC 데이터베이스(mosaic.cs.umn.edu), BEAN-counter 및 CG-TARGET 소프트웨어, 후속 연구용 "bioprocess diversity set"와 과정별 화합물 세트이다.

Discussion에서 저자들은 이 방법이 천연 추출물 컬렉션의 체계적 주석에 적합하고, 다른 감수성 배경(예: PDR5는 스테로이드에 특이적)이나 과정 편향 진단 pool을 만들 수 있으며, 더 큰 multiplexing을 위해 pool을 더 줄일 수 있고, 효모 네트워크가 S. pombe, E. coli, 그리고 유전적 상호작용 지도와 CRISPR 화학유전 스크린이 가능한 사람 세포의 로드맵이 된다고 주장한다.

---

## Significance in Introduction Context

- 효모 유전적 상호작용 네트워크(이중 돌연변이 epistasis, 음성/양성 상호작용)가 약물 작용기전을 해독하는 "열쇠"가 됨을 보여주는 epistasis와 유전자 기능 유사성의 현대적 응용.
- Pooled 바코드 시퀀싱, 약물 감수성 유전 배경, 진단용 부분집합, 시스템 수준 유전학의 예.
- 모델 생물 유전학과 화학생물학/약물 발굴의 연결이며 유세포 분석과 세포벽 표현형 검증을 포함.

---

## Key References

1. **Costanzo M et al. (2016)** — A global genetic interaction network maps a wiring diagram of cellular function (Science 353:aaf1420) — 해석에 사용된 유전적 상호작용 compendium.
2. **Costanzo M et al. (2010)** — The genetic landscape of a cell (Science 327:425-431) — 진단 균주 선택에 쓰인 초기 유전적 상호작용 지도.
3. **Parsons AB et al. (2004)** — Integration of chemical-genetic and genetic interaction data links bioactive compounds to cellular target pathways (Nat Biotechnol 22:62-69) — 방법의 원리.
4. **Parsons AB et al. (2006)** — Exploring the mode-of-action of bioactive compounds by chemical-genetic profiling in yeast (Cell 126:611-625).
5. **Giaever G et al. (2004)** — Chemogenomic profiling (PNAS 101:793-798) — HIP 기반 화학유전체학. [https://doi.org/10.1073/pnas.0307490100](https://doi.org/10.1073/pnas.0307490100)
6. **Lee AY et al. (2014)** — Mapping the cellular response to small molecules using chemogenomic fitness signatures (Science 344:208-211).
7. **Smith AM et al. (2010)** — Highly-multiplexed barcode sequencing (Nucleic Acids Res 38:e142) — multiplexing의 기반.
8. **Yu L et al. (2006)** — A survey of essential gene function in the yeast cell division cycle (Mol Biol Cell 17:4736-4747) — 검증용 세포 주기 표현형 매핑에 사용.

---

## Future Research Directions

- 천연 추출물 컬렉션, 다른 진균과 세균(S. pombe, E. coli), 사람 세포(유전적 상호작용 지도와 CRISPR 기반 화학유전 프로파일)로 주석 확장.
- 약물 계열에 맞춘 감수성 배경과 과정 특이적 또는 더 작은 진단 pool을 구축해 multiplexing 향상.
- 이중 표적 화합물(NP214, NPD5925)의 1차/2차 작용기전을 용량 계열로 구분하고, bioprocess diversity/specific set으로 probe 우선순위화.
- 편향된 화학 표적 공간(glycosylation/접힘 농축, 핵 표적 고갈)과 수송체에 의한 일반 저항성(gtr1, avt5) 이해.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
