---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# Tn-seq: 미생물의 fitness 및 유전 상호작용 연구를 위한 고처리량 병렬 시퀀싱

## Citation (NLM)
van Opijnen T, Bodi KL, Camilli A. Tn-seq: high-throughput parallel sequencing for fitness and genetic interaction studies in microorganisms. Nat Methods. 2009;6(10):767-772. doi:10.1038/nmeth.1377

**DOI:** [https://doi.org/10.1038/nmeth.1377](https://doi.org/10.1038/nmeth.1377)

---

## Summary

이 Nature Methods 논문은 포화 transposon 삽입 라이브러리와 대규모 병렬 시퀀싱을 결합하여 미생물에서 정량적 fitness와 유전적 상호작용을 유전체 규모로 결정하는 Tn-seq 방법을 소개했다. 동기는 *S. cerevisiae*에서 단일 유전자 결실 array와 로봇 교배(synthetic genetic array 및 유사 방법)로 수행되던 포괄적 유전적 상호작용 스크리닝이 미생물에서는 드물다는 점이다. *E. coli*용 접합 기반 유사 방법(GIANT-coli, eSGA)이 있으나 단일 유전자 knockout array가 필요한데 이는 소수 종에만 존재한다. 더 일반적인 transposon-site-hybridization 방식(TraSH)은 정확한 삽입 위치와 삽입별 fitness를 직접 읽지 못하고(형광 비율만 얻음) 종 특이적 microarray가 필요해 정확도가 낮다. Tn-seq는 array도 microarray도 필요 없다. 유전적 상호작용은 이중 돌연변이 fitness가 곱셈 기대값에서 벗어나는 정도로 정의한다.

방법은 Himar1 mariner mini-transposon 유도체 *magellan6*(magellan5의 inverted repeat에 단일 염기 변화를 주어 MmeI 부위를 만든 것)를 사용하며, TA 이염기만 있으면 되어 사실상 무작위로 삽입된다. *Streptococcus pneumoniae* TIGR4의 acapsular 유도체(AC2394)의 DNA를 MarC9 transposase로 in vitro 전위시키고 gap을 복구한 뒤 자연 형질전환 가능한 세포에 도입하여, 세포마다 삽입이 하나인 약 25,000개 형질전환체 풀을 만든다(Fig. 1). 선택 전(t1)과 THY 배지에서 약 7세대 배양한 뒤(t2) DNA를 분리하고 MmeI로 절단, adaptor를 ligation(adaptor에 barcode를 넣어 다중화 가능)하고 PCR(22 cycle, 25 cycle까지 선형임을 확인)로 20 nt의 유전체 서열을 가진 160-bp 산물을 만들어 Illumina Genome Analyzer II로 시퀀싱한다(lane당 600-1000만 read). read는 Bowtie로 mapping하며(약 5% 제외, 4.5%는 transposon 관련 유전자 등 반복 서열), read가 8개 미만인 삽입은 제외하고, 삽입별 fitness W는 t1과 t2 사이 빈도 변화와 측정한 집단 팽창 계수 d로부터 W = ln[N(t2) x d / N(t1)] / ln[(1 - N(t2)) x d / (1 - N(t1))] (N은 빈도)로 계산하여 세대당 성장률을 나타내고 실험 간 비교가 가능하다. 데이터는 fitness 효과가 없는 불활성 transposon 관련 유전자로 정규화하며, 유전자 fitness는 삽입의 가중 평균(최소 10개 삽입 필요)이다. 1에서 4% 이상 벗어나고 Bonferroni 보정 t-test를 통과하면(P < 0.00003) 유리 또는 불리로, 삽입이 없거나(400 bp 이상 유전자에서 3개 미만) 기록되면 "possibly essential"로 분류했다.

단일 유전자 fitness는 야생형 TIGR4의 라이브러리 6개로 분석했다. 암호화 영역과 비암호화 영역 사이에 삽입 편향이 없었고 36개 영역에서 삽입 수가 2배 이상 많거나 적었다. 유전자는 neutral(76%, W 0.96-1.04), 유리(6%), 불리(2%), possibly essential(16%; W = 0)의 네 부류로 나뉘었다(Fig. 2). 다른 혈청형 R6 균주에서 필수로 제안된 유전자의 68%가 확인되었다(나머지는 균주 차이 가능). Gene set enrichment analysis에서 11개 gene set이 음의 enrichment(배지 성장에 유리), 2개가 양의 enrichment(해로움)를 보였다. W가 약 0.53 미만이지만 0보다 큰 돌연변이(배가 시간이 야생형의 2배 이상)는 라이브러리 제작 중 경쟁에서 밀려나므로 "possibly essential"에는 필수 유전자와 매우 해로운 유전자가 함께 포함되며, 저자들은 선택 전 배양을 줄여 동적 범위를 넓힐 수 있다고 제안한다.

검증은 광범위했다(Fig. 3, Table 1). 기술적 반복 간 상관은 r = 0.97, 생물학적 반복 간 상관은 0.70-0.90이었다. 무작위로 고른 돌연변이 30개의 Tn-seq fitness는 고전적 1 x 1 경쟁과 일치하여(모두 P >> 0.05) 빈도 의존 선택의 영향이 크지 않음을 보였다. 유전자의 처음 또는 마지막 10% 삽입을 제거해도 fitness 변화는 4개 유전자(마지막 10%)에 그쳐 위치 효과는 드물었다. magellan6에 전사 종결자가 없어 최소화되는 polar 효과는 부재를 통해 검증했는데, 하류에 필수 유전자가 있는 37개 operon 중 상류 삽입이 심한 fitness 결함을 보인 경우는 없었다. 유전자 16개의 전체 암호화 서열을 drug marker로 교체한 균주(neutral 6, W 0.8 이하 5, W 1.11 이상 5)의 fitness는 Tn-seq와 같았고, 결실 균주 10개의 배가 시간은 fitness를 따랐다. 예를 들어 야생형 38분 대비 SP_1697(W = 1.22)은 예측 약 31분에 실측 31분, SP_0841(W = 0.71)은 예측 약 54분에 실측 57분이었다.

유전적 상호작용 스크리닝에서는 query 유전자 5개를 결실시켰다. LacI/GalR 계열 조절자 3개(*ccpA*, *regR*, *malR*)와 ABC 탄수화물 수송체 2개(SP_1683, *malX*)이며, query 균주의 fitness는 ccpA 0.84, regR 1.0, SP_1683 0.98, malX 1.04, malR 1.05였다. *B. subtilis*에서 CcpA는 catabolite-response(*cre*) 요소에 결합하는 탄수화물 대사의 master 조절자이고, *S. pneumoniae*에서는 소실 시 in vitro fitness와 병원성이 감소한다. 저자들은 상호작용 수의 위계(ccpA > regR > malR > 수송체)와 malR이 malX를 조절하므로 둘의 상호작용이 겹칠 것이라고 예측했다. 각 배경에서 10,000-25,000 삽입의 독립 라이브러리 3개를 만들고, 상호작용은 곱셈 모델에서의 이탈(기대값과 관측값이 10% 이상 차이, Bonferroni 보정 t-test)로 점수화하여 7개 범주(synergistic, partial masking, masking, partial suppression, suppression, antagonistic, co-equal; Fig. 4)로 분류했다. 그 결과 97개의 high-confidence 상호작용(문맥을 위해 STRING 41개 추가)이 얻어졌다: *ccpA* 64, *regR* 17, *malR* 8, SP_1683 5, *malX* 3으로 예측한 위계와 일치했고, malX는 3개 중 2개를 malR과, SP_1683은 3개 중 2개를 malX와, 5개 중 4개를 malR과, 5개 중 3개를 regR과 공유했다. regR에서는 mannose phosphotransferase system(SP_0325)과 competence(*comF*, SP_2208)와의 예상된 연결이 재확인되었다. ccpA는 hub였다. 상호작용 파트너의 절반(32/64)이 탄수화물 흡수 및 대사 유전자였고 13개는 기능 미상, 6개는 전사 조절자(two-component system TCS07, TCS11, TCS05/CiaH 포함)였다. *B. subtilis* *cre* consensus WTGNAANCGNWWNCA를 사용하면 2,087개 유전자 중 275개(13%)가 *cre* 후보를 가졌고, 네트워크의 90개 유전자 중 27개가 *cre*를 가졌으며 그중 24개가 ccpA와 상호작용하여 ccpA 파트너의 38%(24/64)가 *cre*를 가져 우연의 약 3배였다. 예로 ciaH-ccpA 길항(antagonistic) 상호작용(fitness 0.46)과 maltose 유전자 malX(0.78), malA(0.71)와의 suppression 상호작용이 있으며 ciaR 자체도 *cre* 후보를 가진다.

유전자 7개를 야생형과 ccpA 배경에서 결실(14개 균주)하여 1 x 1 경쟁으로 fitness를 확인했다(Fig. 5). SP_2001(TCS05), ABC 수송체 SP_1957과 SP_0720, 대사 유전자 SP_1123과의 alleviating 상호작용, 아미노산 대사 유전자 SP_1029와의 antagonistic 상호작용, 그리고 phosphotransferase system 유전자 *lacF-1*(SP_0476), *lacE-2*(SP_1185)와의 두 상호작용이 확인되었다. 이들은 PTS 유전자 2개, 표면 beta-galactosidase *bgaA*, 기능 미상 SP_0475로 구성된 하위 네트워크에 속하며, bgaA가 lactose 대사에, SP_0475가 PTS 조절 탄수화물 흡수에 관여함을 시사한다. 고찰은 alleviating ccpA 상호작용이 CcpA에 의해 평소 억제되는 해로운 유전자를 가리킬 수 있다는 가설을 제시한다. ccpA를 제거하면 탈억제되어 fitness가 감소하고, 탈억제된 유전자를 제거하면 fitness가 회복된다는 것이다. 또한 query 유전자와 조건을 늘리면 약 30%에 이르는 기능 미상 유전자의 주석에 도움이 될 것이라고 본다. 핵심 장점은 knockout array를 만들지 않고도 특정 환경이나 균주(S. pneumoniae는 90개 이상의 혈청형)에서 각 유전자의 fitness를 측정할 수 있다는 점이며, Himar1이 *E. coli*, *S. aureus*, *H. influenzae*, *M. tuberculosis*에서도 작동하므로 다양한 환경, 균주, 종으로 확장될 것으로 기대한다.

---

## Significance in Introduction Context

- 유전 상호작용(상위성, epistasis)을 정량적으로 정의하는 방법을 보여준다. 이중 돌연변이 fitness를 두 단일 돌연변이로부터의 곱셈 기대값과 비교하여 alleviating(억제성)과 aggravating(상승 작용성) 범주로 나눈다.
- 게놈 규모의 역유전학을 보여준다. 돌연변이를 하나씩 스크린하는 대신 포화 삽입 풀을 시퀀싱으로 표현형 분석하여 모든 유전자의 유전형-fitness 관계를 한꺼번에 연결한다.
- 유전자 필수성, 상대 fitness(W), 경쟁 실험, 조절 허브(탄수화물 주 조절자 CcpA와 그 상호작용 유전자에서 *cre* 작동 부위 농축) 같은 핵심 개념과 연결된다.

---

## Key References

1. **Tong AH, et al. (2001)** — Systematic genetic analysis with ordered arrays of yeast deletion mutants, Science 294:2364-2368 — Tn-seq가 대비되는 효모의 array 기반 synthetic genetic array
2. **Typas A, et al. (2008)** — High-throughput, quantitative analyses of genetic interactions in E. coli, Nat Methods 5:781-787 — GIANT-coli
3. **Butland G, et al. (2008)** — eSGA: E. coli synthetic genetic array analysis, Nat Methods 5:789-795 — array 기반 세균 유전적 상호작용 대안
4. **Joshi SM, et al. (2006)** — Characterization of mycobacterial virulence genes through genetic interaction mapping, Proc Natl Acad Sci USA 103:11760-11765 — microarray 기반 선행 방법 TraSH
5. **Subramanian A, et al. (2005)** — Gene set enrichment analysis: a knowledge-based approach for interpreting genome-wide expression profiles, Proc Natl Acad Sci USA 102:15545-15550 — 공통 기능 gene set 검정에 쓰인 GSEA
6. **St Onge RP, et al. (2007)** — Systematic pathway analysis using high-resolution fitness profiling of combinatorial gene deletions, Nat Genet 39:199-206 — 상호작용 범주
7. **Cain AK 외 (2020)** — A decade of advances in transposon-insertion sequencing, Nat Rev Genet [doi:10.1038/s41576-020-0244-x](https://doi.org/10.1038/s41576-020-0244-x) — Tn-seq와 유사 기법의 10년 회고 리뷰 ([[ko/review/Cain2020_NatRevGenet_TIS-DecadeOfAdvances]] 참조)
8. **Zik JJ 외 (2025)** — Dual transposon sequencing profiles the genetic interaction landscape in bacteria, Science [doi:10.1126/science.adt7685](https://doi.org/10.1126/science.adt7685) — Tn-seq를 전 유전자 쌍 이중 돌연변이로 확장 ([[ko/article/Zik2025_Science_DualTnSeq-GeneticInteraction]] 참조)

---

## Future Research Directions

- 동적 범위 확장: 라이브러리 제작 때문에 검출이 W 약 0.53 초과 또는 W = 0으로 제한되었으며, t1 시료 전 배양을 줄이는 등 라이브러리 제작 방법을 바꾸면 매우 해로운 유전자도 분해할 수 있다.
- query 유전자와 환경 조건(배지, 화학적 또는 물리적 스트레스, 감염 모델)을 늘려 S. pneumoniae 네트워크 구조를 밝히고 기능 미상 유전자 약 30%에 주석을 달기. 전 유전자 쌍 이중 돌연변이로의 확장은 [[ko/article/Zik2025_Science_DualTnSeq-GeneticInteraction]]에서 실현되었고, 10년간의 응용은 [[ko/review/Cain2020_NatRevGenet_TIS-DecadeOfAdvances]]에서 개관된다.
- 유전자의 역할이 균주에 따라 다를 수 있고 Himar1이 *E. coli*, *S. aureus*, *H. influenzae*, *M. tuberculosis*에서 작동하므로 여러 균주와 종에 Tn-seq를 적용.
- alleviating *ccpA* 상호작용이 CcpA에 의해 평소 억제되는 해로운 유전자를 가리킨다는 가설을 검증하고, SP_0475와 표면 beta-galactosidase BgaA의 기능을 규명.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
