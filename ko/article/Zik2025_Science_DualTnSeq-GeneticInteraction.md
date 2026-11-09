---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# 이중 트랜스포존 시퀀싱으로 본 세균의 유전 상호작용 지형

## Citation (NLM)
Zik JJ, Price MN, Mayra KHA, Santoso AA, Arkin AP, Deutschbauer AM, Sham LT. Dual transposon sequencing profiles the genetic interaction landscape in bacteria. Science. 2025;389(6767):eadt7685. doi:10.1126/science.adt7685

**DOI:** [https://doi.org/10.1126/science.adt7685](https://doi.org/10.1126/science.adt7685)

---

## Summary

유전자 중복성과 기능 미상 유전자의 방대한 비율(*E. coli*에서도 약 3분의 1; 효소와 수송체의 주석 오류율 30-50%)은 단일 유전자 결실이 밝힐 수 있는 범위를 제한한다. 이중 돌연변이가 기대에서 벗어나는 유전적 상호작용(고전적으로 synthetic lethality)은 기능적으로 관련된 유전자를 알려주지만, 기존 스크린(효모 SGA, GIANT-coli, 세포 외피 상호작용 지도, CRISPRi)은 미리 만든 단일 돌연변이 array와 로봇이 필요하고, 기존 Tn-seq([[en/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]])는 "one-to-all" 방식이라 질의 유전자를 먼저 돌연변이시켜야 한다. 한 세포 안의 두 무작위 삽입은 한 번의 시퀀싱 read로 읽기에는 너무 멀기 때문이다. 이 Science 논문은 자연 형질전환 능력이 있는 병원균 *Streptococcus pneumoniae* D39W에서 유전적 상호작용을 탐색하는 "all-to-all" 플랫폼 dual Tn-seq를 소개한다.

설계: 두 mariner(HIMAR1) 트랜스포존 RBloxSpec(spectinomycin)과 RBloxErm(erythromycin)은 각각 20-nt 무작위 바코드, 시퀀싱 프라이머 부위, lox 부위(lox66 또는 lox71)를 가지며, 삽입 방향과 관계없이 Cre 재조합이 두 바코드를 하나의 읽을 수 있는 이중 바코드로 융합하도록 배치되었다(사이의 염색체는 절제되거나 역위됨). lox66 + lox71이 비기능성 lox72를 만들므로 융합은 비가역적이다. 극성 효과를 피하려고 터미네이터를 두지 않았고(따라서 하류 유전자 과발현 표현형도 볼 수 있다), 493 kb 떨어진 *pbp1a*와 *pbp1b* 삽입에서 두 방향 모두 융합이 확인되었으며, 아연 유도성 cre 카세트는 Delta-pbp1a Delta-pbp1b 돌연변이의 생장을 바꾸지 않았다. 바코드 plasmid 라이브러리(바코드 1,520만 개와 880만 개)로 in vitro transposition과 형질전환을 수행해 약 620,000개(Spec)와 약 230,000개(Erm) 돌연변이 라이브러리를 만들었고, 단백질 암호 유전자 1,914개 중 약 1,600개에 삽입이 있었다. 개념 증명으로 BarSeq가 알려진 synthetic lethal 쌍 *pbp1a*/*pbp2a*와 *pbp1a*/*macP*를 재현했다. 한 라이브러리의 genomic DNA로 다른 라이브러리를 형질전환(형질전환 조건 최적화)해 약 14억 개 이중 돌연변이를 두 항생제 평판에서 얻었고, 집락을 모아 약 1회 분열 회복 후 cre를 2시간 유도했으며(qPCR로 재조합 포화 확인), 100억 개 이상의 융합 바코드를 시퀀싱해 31억 개가 두 바코드 모두 ORF에 매핑되었다. 이는 비필수 유전자 쌍 958,696개(이론적 약 130만 개의 73%)를 포괄했다.

분석: 단일 유전자 바코드 존재량으로부터 확률 모형이 기대 read 수를 계산하고, "readRatio"(관측/기대 read)와 "zStrains"(이중 돌연변이 균주 수의 Poisson z-score)가 음성(synthetic lethal, synthetic sick) 및 양성 상호작용을 식별한다. 염색체 위치와 거리 효과는 수학적으로 보정하고 read가 적거나 서로 인접한 쌍은 걸러냈다. 양성 대조 *pbp1a/pbp2a*와 *pbp1a/pbp1b*는 재현되었으나 *pbp1a/macP*는 *macP* 유전자가 작아 커버리지가 부족해 놓쳤다. 직접 재구성으로 검증한 107개 유전자 쌍 중 15개는 synthetic lethal(형질전환 효율 100배 이상 감소), 6개는 작은 집락을 형성했고, 생존 가능한 이중 돌연변이 31개 중 15개가 액체 배양에서 생장 결함을 보였다(minimum model, 즉 이중 돌연변이가 덜 적합한 단일 돌연변이만큼 자란다는 모형 기준). 중간(zStrains <= -3, readRatio <= 0.2)과 강한(추가로 zStrains <= -4 또는 readRatio <= 0.05) 기준의 FDR은 7%와 4%(shuffle test와 기능적 연관성)이고, 중간 기준은 검증된 결함 36개 중 28개를 포착했으며(hit rate 77.8%), 244개 상호작용이 통과했다(복제 원점 근처 농축 제외). 71개 녹아웃 배경에서 RB Tn-seq(104,961개 상호작용, 57개 hit, 약 0.04%)와 비교하면 dual Tn-seq(0.025%)는 감도가 약 65%로 73% 커버리지와 일치했고 적합도 값도 상관되었다(Spearman rho 약 0.56-0.63). dual Tn-seq가 찾은 중간 정도의 결함은 RB Tn-seq에서 약한 경우가 많았는데 outgrowth 절차 차이 때문일 수 있다. COG 분석에서 상호작용은 아미노산, 무기 이온, 뉴클레오티드 수송/대사에 농축되었고(유전자의 21%지만 상호작용 파트너의 33%) 중복 수송체와 salvage 대 de novo 경로를 반영했으며, 가장 큰 군은 기능 미상 유전자(79개 상호작용, 그중 67개는 주석된 파트너 보유)였고 기능 미상 단백질 67개에 잠정 역할이 부여되었다.

발견: (1) Spd_0310(DUF1846)은 *pyrG*와 강하게 상호작용한다. Delta-pyrG 배경에서 이를 고갈시키면 생장 결함이 생기고 cytidine만이 이를 구제했다. Tn-seq 억제 돌연변이는 뉴클레오시드 수송체 *pnrABCD*와 spd_1425(5-fluorocytidine 감수성으로 볼 때 주된 cytidine 수송체)를 상향시키는 삽입, 그리고 *purR* 또는 *relA* 소실((p)ppGpp 감소로 PurR 탈억제)이었다. 5FC 분석에서 수송체 돌연변이가 pyrG나 spd_0310 균주의 표현형을 바꾸지 않았으므로 Spd_0310은 salvage가 아니라 CTP 합성에 작용하며, 정제 단백질은 암모니아만을 질소 공여체로 UTP를 CTP로 전환한다(PyrG는 글루타민 또는 암모니아 사용). 따라서 PyrJ로 명명했다. Discussion에서는 pyrJ가 주로 Firmicutes와 Actinobacteria에 있고, pyrJ 보유 유전체의 약 31%가 pyrG가 없으며(예: *Clostridioides difficile*), pyrJ가 글루타민 수송체 유전자 *glnP*와 상호작용해(글루타민이 부족할 때의 이점), P-loop ATPase와 cytidine deaminase 유사 도메인의 융합으로 생겼을 것이라고 제안한다. (2) YjbK(spd_0981, CYTH 계열)는 *murZ*(이 종에서 우세한 MurA/MurZ enolpyruvyl transferase)와는 상호작용하나 *murA*와는 하지 않는다. Delta-yjbK 배경에서 MurZ를 고갈하면 세포가 변형되고 용해되며, 억제 돌연변이는 *murA* 또는 *murC* 과발현이나 *ppc* 불활성화(MurA 기질 PEP 증가)였고, murA, murC, yjbK의 이소성 발현이나 ppc 결실이 구제했다. 따라서 YjbK는 직접적이든 기질 가용성을 통한 간접적이든 MurA의 잠정적 활성화 인자이며 YjbK 상동체는 Firmicutes에서만 발견된다. (3) spd_0751-0753(DUF969, DUF979, pyrrolidone-carboxylate peptidase)은 GlnPQ와 Ami 수송체와 상호작용해, Krebs 회로가 없어 글루탐산/글루타민 영양요구성인 폐렴구균에서 대체 펩타이드 또는 alpha-ketoglutarate 도입계일 가능성을 시사한다. 주석이 모호한 수송체(spd_1422, spd_0411-0412)도 기질이 배정되었다.

한계: 삽입 분포의 불균일(hotspot)이 교배 시 편향을 증폭하고, 작은 유전자와 intergenic 영역은 커버리지가 낮으며, 강한 결함을 가진 돌연변이는 라이브러리 구축 중 사라지므로 양성 상호작용은 거의 검출되지 않아 synthetic lethality 탐색에 가장 적합하다. 형질전환성이 낮은 약 6 kb 사각지대가 상호작용의 0.7%에 영향을 주며, 고밀도 평판 배양 때문에 재구성 시 표현형 불일치가 있을 수 있다. CRISPRi 기반 방법(필수 유전자 knockdown 가능하나 guide 라이브러리 필요)과 달리 dual Tn-seq는 유도성 프로모터, 트랜스포존 돌연변이 생성, 작동하는 cre 카세트만 있으면 되므로 다른 세균(더 큰 유전체는 더 많은 깊이 필요)과 조건 특이적 이중 돌연변이 스크린으로 확장할 수 있다.

---

## Significance in Introduction Context

- epistasis와 synthetic lethality의 현대적이고 확장 가능한 버전: 중복 또는 병렬 경로의 유전자는 이중 돌연변이에서만 드러난다.
- 유전적 상호작용 데이터가 기능 미상 유전자에 기능을 부여하는 방식("guilt by genetic association")과, 억제 돌연변이 스크린, 고갈 균주, 대사물 구제, 생화학으로 이를 확인하는 후속 유전학(PyrJ가 CTP 합성효소임)을 보여준다.
- 귀무 모형(minimum model) 하의 기대 대 관측 이중 돌연변이 빈도, 위발견율(FDR), 커버리지와 감도의 절충 같은 통계유전학적 추론의 예.

---

## Key References

1. **van Opijnen T, Bodi KL, Camilli A (2009)** — Tn-seq, Nat Methods 6:767-772 [doi:10.1038/nmeth.1377](https://doi.org/10.1038/nmeth.1377) — dual Tn-seq가 확장한 기초 방법 ([[en/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]])
2. **Wetmore KM et al. (2015)** — Rapid quantification of mutant fitness in diverse bacteria by sequencing randomly bar-coded transposons, mBio 6:e00306-15 [doi:10.1128/mBio.00306-15](https://doi.org/10.1128/mBio.00306-15) — 여기서 쓰인 바코드 판독 RB Tn-seq/BarSeq.
3. **Costanzo M et al. (2016)** — A global genetic interaction network maps a wiring diagram of cellular function, Science 353:aaf1420 [doi:10.1126/science.aaf1420](https://doi.org/10.1126/science.aaf1420) — 효모의 완전한 유전적 상호작용 array.
4. **Typas A et al. (2008)** — High-throughput, quantitative analyses of genetic interactions in E. coli, Nat Methods 5:781-787 [doi:10.1038/nmeth.1240](https://doi.org/10.1038/nmeth.1240) — GIANT-coli, dual Tn-seq가 피하는 배열 기반 방식.
5. **Mani R et al. (2008)** — Defining genetic interaction, PNAS 105:3461-3466 [doi:10.1073/pnas.0712255105](https://doi.org/10.1073/pnas.0712255105) — 이중 돌연변이 분류에 쓰인 minimum model.
6. **Hoskins J et al. (1999)** — Gene disruption studies of penicillin-binding proteins 1a, 1b, and 2a in Streptococcus pneumoniae, J Bacteriol 181:6552-6555 [doi:10.1128/JB.181.20.6552-6555.1999](https://doi.org/10.1128/JB.181.20.6552-6555.1999) — 양성 대조로 쓰인 알려진 pbp 상호작용.
7. **Tsui HT et al. (2023)** — Negative regulation of MurZ and MurA underlies the essentiality of GpsB- and StkP-mediated protein phosphorylation in S. pneumoniae D39, Mol Microbiol 120:351-383 [doi:10.1111/mmi.15122](https://doi.org/10.1111/mmi.15122) — YjbK 관련 MurZ/MurA 배경.
8. **Cain AK et al. (2020)** — TIS review, Nat Rev Genet [doi:10.1038/s41576-020-0244-x](https://doi.org/10.1038/s41576-020-0244-x) — TIS와 RB-Tn-Seq의 맥락 ([[en/review/Cain2020_NatRevGenet_TIS-DecadeOfAdvances]]; 이 논문에서 인용되지는 않음)

---

## Future Research Directions

- 이중 돌연변이 라이브러리를 항생제나 다른 영양 조건에서 키워 조건 특이적 유전적 상호작용 지도 작성.
- dual Tn-seq를 다른 자연 형질전환 가능 또는 유전적으로 다루기 쉬운 세균에 적용(더 큰 유전체는 더 많은 이중 돌연변이와 시퀀싱 깊이 필요)하여 "genetic dark matter"를 밝히고 항생제 내성에 대응할 새로운 약물 표적을 찾으며, CRISPRi와 결합해 필수 유전자까지 확장.
- 새로 부여된 기능(PyrJ, YjbK가 MurA를 직접 또는 간접적으로 조절하는 방식, spd_0751-0753 수송 기질)과 잠정 역할이 부여된 기능 미상 단백질 67개의 생화학적, 구조적 후속 연구; 작은 유전자(*macP* 등), 삽입 hotspot, 복제 원점 근처 영역의 커버리지 개선.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
