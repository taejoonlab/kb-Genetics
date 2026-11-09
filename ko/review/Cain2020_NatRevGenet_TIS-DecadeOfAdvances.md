---
tags: [genetics, class, review, ko]
date: 2026-11-09
type: class
---

# 트랜스포존 삽입 시퀀싱(TIS)의 10년간의 발전

## Citation (NLM)
Cain AK, Barquist L, Goodman AL, Paulsen IT, Parkhill J, van Opijnen T. A decade of advances in transposon-insertion sequencing. Nat Rev Genet. 2020;21(9):526-540. doi:10.1038/s41576-020-0244-x

**DOI:** [https://doi.org/10.1038/s41576-020-0244-x](https://doi.org/10.1038/s41576-020-0244-x)

---

## Summary

이 Nature Reviews Genetics 리뷰는 transposon-insertion sequencing(TIS)이 도입된 지 10년을 맞아 쓰였다. 2009년에 Tn-Seq, TraDIS, INSeq, HITS의 네 가지 변형이 발표되었다(Tn-Seq는 [[ko/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]] 참조). 모두 게놈 전체의 전위인자 돌연변이 생성과 차세대 시퀀싱을 결합하여, 하나의 풀 라이브러리로 세균 게놈의 모든 유전체 요소의 필수성 또는 fitness 기여도를 추정하므로 표현형이 유전형과 직접 연결된다. 기본 절차(Fig. 1)는 무작위로 삽입되는 전위인자(주로 Tn5 또는 mariner)로 포화 라이브러리를 만들고, 돌연변이를 풀링하고, 필요하면 풀에 선택 조건(예: colistin)을 가한 뒤, DNA를 단편화하고 어댑터를 붙여 증폭하여 전위인자-게놈 접합부를 시퀀싱하고 지도화하는 것이다. 삽입이 전혀 허용되지 않는 요소는 필수 후보이고, 선택 하에서 삽입 빈도가 감소하는 요소는 해당 조건에서 fitness에 필요하며, 증가하는 요소는 불리하다. 변형들은 단편화(Tn-Seq/INSeq는 MmeI 절단으로 균일한 짧은 리드, TraDIS/HITS는 초음파로 더 긴 리드)와 전위인자(mariner는 TA 부위 특이적, 나머지는 주로 Tn5)에서 다르다.

이후 2013년·2016년 리뷰 이후의 발전을 다룬다. 첫째, 성장 이외의 선택: 한천 위 운동성 "경주"(*E. coli* ST131, *P. aeruginosa* PA14), density-TraDISort(*Klebsiella pneumoniae* 두 균주에서 캡슐 유전자 78개 발견), 에티듐 브로마이드와 FACS를 이용한 유출 펌프 돌연변이(*amvA*, *amvR*) 탐색 TraDISort, FAST-INSeq, Tn-FACSeq. Droplet Tn-Seq(dTn-Seq)는 단일 돌연변이를 개별 droplet에서 키워, 집단 맥락(공공재, 밀도 의존성)에서 벗어나면 *S. pneumoniae* 돌연변이의 1-3%가 fitness 변화를 보임을 밝혔다. 둘째, 표준 TIS는 필수 유전자를 분석할 수 없으므로 바깥쪽을 향한 유도성 프로모터를 가진 전위인자(TnAraOut, PBAD를 쓰는 TraDIS-Xpress, Dub-Seq)로 기능 획득/과발현 스크린을 수행한다. 셋째, 규모 확장: RB-Tn-Seq는 전위인자마다 무작위 바코드를 넣어 이후 실험에서 바코드 amplicon 시퀀싱만 하면 되며(32개 세균, 129개 조건에 적용), "magic pool" 벡터 풀은 비모델 생물에서 전위인자 최적화를 가속한다.

분석 측면에서는 도구(Table 1: ESSENTIALS, ARTIST/conARTIST, TRANSIT, TraDIS Toolkit, MAGenTA, Aerobio, AlbaTraDIS)를 비교하고, 반복 감염 실험의 log fold change에 대한 PCA, 라이브러리 포화도와 병목을 보정하는 zero-inflated negative binomial 모델, 다조건 sliding window 분석 등 새로운 통계를 소개한다. 병목(일시적 집단 크기 감소)은 감염 모델에서 핵심 문제다. Salmonella Typhimurium 예에서 경구 감염(심한 병목, 수십~수백 돌연변이), 복강 내 접종(~10,000), 대식세포 배양(~10^6)을 대비하며 현실성과 라이브러리 복잡도 사이의 절충을 보여준다(Fig. 5).

응용 분야는 다음과 같다. 항생제 내성(ESKAPE 병원체의 내재 내성 프로파일은 반응이 게놈 전반에 분포함을 보이며, 예컨대 fluoroquinolone에서 *recN*, *xseA*가 관여하고, TIS 프로파일로 작용 기전과 보조 약물 표적을 찾을 수 있음), 병원성·숙주 적응·백신 개발(*S. pneumoniae* 족제비 전파 스크린에서 CppA, PiaA, ComD가 확인되었고 PiaA와 CppA 모체 백신이 전파를 차단), 이동성 유전 요소(플라스미드 유지, *sspA*, *sap* 오페론 같은 파지 숙주 인자), 필수 유전체와 pan-genome(*P. aeruginosa* 9개 균주; *S. pneumoniae* 두 분리주 간 항생제 반응 유전자의 ~50%만 공통; 임상 *M. tuberculosis* 균주의 *katG* 요구성 변화), 대사·환경 반응·미생물 간 상호작용에서의 기능 미상 유전자 주석이 있다. RB-Tn-Seq를 32종의 다양한 세균, ~200개 조건에 적용한 연구는 11,000개 넘는 미특성 단백질에 표현형을 부여했고(약 2,000개의 주석은 생물종 간에 보존), *Bacteroides thetaiotaomicron*을 492개 조건에서 스크린하여 대사 및 담즙 내성 유전자를 찾았으며, 항바이러스제 brivudine과 배양한 ~1,300개 *B. thetaiotaomicron* 배열 돌연변이 라이브러리는 간독성 대사산물 생성에 필요한 유전자를 밝혔고 gnotobiotic 마우스에서 확인되었다. 공동 감염 스크린은 fitness 효과가 군집 구성원에 의존함을 보여준다. 마우스 상처에서 *P. aeruginosa*와 공동 감염 시 필수인 *S. aureus* 유전자의 약 25%는 단일 종 감염에서는 불필요하다(예: uridine kinase 유전자 *udk*). 포식-피식(*Bdellovibrio*-*Vibrio*) 및 type VI secretion 독소-면역(Tse-Tsi) 스크린도 군집 상호작용으로 접근을 확장한다. 식물 병원체 및 환경 스트레스(이온화 방사선, 건조, 물속 생존) 스크린도 포함된다.

응용 절의 마지막은 TIS를 다른 데이터와 통합하여 복합 형질을 예측하는 부분이다. 포화 TIS와 RNA-seq를 결합하면 기능적 비암호화 RNA(ncRNA)를 찾을 수 있다(*S. pneumoniae*에서 89개, 절반 이상이 신규이며 일부는 생체 내 병원성과 연결; *Neisseria meningitidis*에서 상피/내피 세포 집락화에 필요한 288개 유전자 및 작은 ncRNA). 유전 상호작용은 질의 유전자 결실 배경(또는 질의 경로를 억제하는 약물 조건)에서 TIS 라이브러리를 만들어, fitness가 개별 돌연변이 fitness의 곱에서 벗어나는 유전자를 찾아 지도화한다(Fig. 7). 합성 치사가 가장 뚜렷한 예이다. 예로 *S. pneumoniae*의 catabolite control protein A, 칼륨 흡수, ClpP/competence 조절, *pbp1A*를 질의 유전자로 하여 발견된 CozE(Pbp1A를 midcell로 유도), *S. aureus*에서 wall teichoic acid 합성과 D-alanylation, peptidoglycan, lipoteichoic acid 합성의 연결이 있다. *P. aeruginosa*에서 TIS와 RNA-seq를 함께 쓰면 길항적 항생제 조합이 예측되었다. polymyxin B가 *mexXY*를 유도하는데, TIS는 이 유전자들이 gentamicin·tobramycin 내재 내성에 기여함을 보여준다. 발현과 fitness 변화를 직접 비교하면 상관이 낮은 경우가 많은데(효모에서 오래전부터 알려진 불일치로, 대부분의 전사 조절이 선택에 의해 최적화되지 않았음을 시사), 대사 네트워크에 겹쳐 보면 영양 고갈처럼 세균이 적응된 환경에 반응할 때 fitness 변화 유전자의 80%가 발현 변화 유전자와 두 반응 이내(93%는 세 반응 이내)에 있고, 항생제처럼 적응되지 않은 스트레스에서는 이 관계가 사라진다. 전사 네트워크의 교란 정도를 정량화하면 fitness, 항생제 감수성, 작용 기전을 예측할 수 있었다.

결론에서 저자들은 TIS가 세포 분리와 미세유체 기술을 통해 단일 세포 수준 표현형까지 확장되었고, 백신 후보와 항생제/보조 약물 표적 개발에 실용성을 보였으며, 두 전위인자를 한 게놈에 결합하거나 TIS와 CRISPRi를 결합하거나 상호작용하는 생물을 함께 돌연변이화하여 더 확장할 수 있다고 정리한다. 세균 이외에도 TIS 유사 방법이 이미 있다: 효모(*S. cerevisiae*, *S. pombe*), 고세균(*Sulfolobus islandicus*, *Methanococcus maripaludis*), 반수체 인간 세포(PhITSeq), 마우스(piggyBac, Sleeping Beauty를 쓰는 QISeq), *Plasmodium falciparum*. 리뷰는 TIS와 pooled CRISPRi를 비교한다. CRISPRi는 표적 지정이 가능하고 필수 유전자도 knockdown할 수 있으며 필요한 리드 수가 적지만, sgRNA 라이브러리 설계·클로닝이 필요하고 off-target 효과와 sgRNA 효율 차이가 문제가 된다. 반면 TIS는 게놈에 대한 사전 지식이 필요 없고 예상치 못한 유전자를 발견할 수 있으며, 전사적으로 비활성인 영역과 필수 단백질 도메인까지 분석할 수 있다. 두 기법 모두 대규모 데이터에서 자동으로 기전을 해석하기 어렵다는 약점이 있어 데이터 공유 플랫폼(TraDIS-vault, D23580 게놈 브라우저, ShinyOmics)이 중요해진다. 가장 큰 한계는 TIS가 배양 가능하고 유전적으로 다루기 쉬운 종(세균과 고세균의 소수)에서만 작동한다는 점이며, 저자들은 난배양 미생물용 도구, 조건·균주 수의 대규모 확장, 더 생태학적으로 현실적인 실험, 그리고 기계학습·모델링·네트워크 분석을 통해 세포의 유전적 구조를 기술하는 단계에서 행동을 예측하는 단계로 나아갈 것을 제안한다.

---

## Significance in Introduction Context

- 고전적 정유전학 개념인 무작위 돌연변이 생성이 시퀀싱으로 확장되어 세균의 게놈 전체 유전형-표현형 지도가 되는 과정을 보여준다.
- 유전자 필수성, 조건부 fitness, 내재 항생제 내성, 유전적 배경(pan-genome, 균주 특이적 필수성)을 구체적인 병원체 사례로 설명한다.
- 선택 조건, 집단 병목, 라이브러리 포화도, 통계 모델링이 스크린의 결론을 좌우한다는 실험 설계 사고를 가르쳐 준다.

---

## Key References

1. **van Opijnen T, Bodi KL, Camilli A (2009)** — Tn-seq, Nat Methods [doi:10.1038/nmeth.1377](https://doi.org/10.1038/nmeth.1377) — 네 가지 초기 TIS 방법 중 하나 ([[ko/article/VanOpijnen2009_NatMethods_TnSeq-FitnessGeneticInteraction]])
2. **Langridge GC 외 (2009)**, Genome Res (TraDIS); **Goodman AL 외 (2009)**, Cell Host Microbe (INSeq); **Gawronski JD 외 (2009)**, Proc Natl Acad Sci USA (HITS) — 2009년의 나머지 세 가지 초기 방법(리뷰 참고문헌 2-4)
3. **Chao MC, Abel S, Davis BM, Waldor MK (2016)** — TIS 실험의 설계와 분석, Nat Rev Microbiol — 실험 설계와 통계는 이 리뷰에 위임한 이전 리뷰(참고문헌 7)
4. **Wetmore KM 외 (2015)** — 무작위 바코드 전위인자 시퀀싱(RB-Tn-Seq), mBio — 수백 개 조건으로 확장 가능한 바코드 TIS (참고문헌 23)
5. **Price MN 외 (2018)** — 기능 미상 세균 유전자 수천 개의 돌연변이 표현형, Nature — 여러 종과 조건에 RB-Tn-Seq 적용 (참고문헌 25)
6. **Thibault D 외 (2019)** — droplet Tn-Seq, Nat Commun — 단일 돌연변이, 집단 비의존적 fitness (참고문헌 15)
7. **Yasir M 외 (2020)** — TraDIS-Xpress, Genome Res — 필수 유전자까지 포괄하는 유도성 프로모터 전위인자 스크린, triclosan (참고문헌 20)
8. **van Opijnen T, Dedrick S, Bento J (2016)** — *S. pneumoniae*의 항생제 감수성에 대한 균주 의존적 유전 네트워크, PLoS Pathog — pan-genome과 유전 상호작용 사례 (참고문헌 54)

---

## Future Research Directions

- 쉽게 배양되고 유전적으로 다루기 쉬운 종 너머로 TIS를 확장: "magic pool" 같은 전위인자 벡터 최적화 도구를 활용하고, RB-Tn-Seq처럼 훨씬 많은 조건과 균주를 동시에 스크린하여 pan-genome 다양성이 어떻게 형성되는지 이해.
- 단순한 실험실 분석에서 감염 모델, 군집, 공동 감염, 숙주·마이크로바이옴 맥락 같은 생태학적으로 현실적인 분석으로 이동.
- 한 게놈에 두 전위인자를 결합(예: [[ko/article/Zik2025_Science_DualTnSeq-GeneticInteraction]]), TIS와 CRISPRi 결합, 상호작용하는 생물의 동시 돌연변이화로 유전 상호작용 네트워크 구축.
- 세포 분리와 미세유체를 통한 단일 세포 표현형 분석, 감염 병목의 개선된 처리.
- TIS를 RNA-seq 및 기타 post-genomic 데이터와 통합하고 기계학습, 모델링, 네트워크 분석을 활용하여 세포 행동을 기술하는 데서 예측하는 단계로 전환; 데이터와 전문성을 모으는 공유 플랫폼(TraDIS-vault, ShinyOmics).

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
