---
tags: [genetics, class, article, ko]
date: 2026-07-13
type: class
---

# Whole Genome Sequencing of Canids Reveals Genomic Regions under Selection and Variants Influencing Morphology

## Citation (NLM)
Plassais J, Kim J, Davis BW, Karyadi DM, Hogan AN, Harris AC, Decker B, Parker HG, Ostrander EA. Whole genome sequencing of canids reveals genomic regions under selection and variants influencing morphology. Nat Commun. 2019;10(1):1489. doi:10.1038/s41467-019-09373-w

**DOI:** [https://doi.org/10.1038/s41467-019-09373-w](https://doi.org/10.1038/s41467-019-09373-w)

---

## Summary

이 논문은 개(Canis lupus familiaris)와 야생 갯과 동물 722개체의 전장유전체 서열(WGS)을 분석하여 형태적 표현형과 연관된 유전 변이를 체계적으로 규명한 대규모 연구이다. 인간의 선택적 육종을 통해 개는 포유류 중 가장 극단적인 크기 다양성(약 40배 차이)을 보이게 되었으며, 이 독특한 유전-인구학적 구조는 복잡형질 유전자 발굴의 강력한 모델 시스템을 제공한다.

**데이터셋 구성:** 144개 순종 품종, 54종 야생 갯과 동물, 104마리 마을개 등 722개체로부터 총 9,100만 개의 단일염기변이(SNV)와 소형 삽입-결실 변이를 포함하는 변이 카탈로그를 구축하였다. 시퀀싱 깊이는 2x~93.8x(중앙값 18x)이며, 품질 필터링 후 7,650만 개의 biallelic SNV를 확보하였다.

**GWAS 방법론:** 아메리칸 켄넬 클럽(AKC) 표준을 표현형으로 활용하여 16가지 형질(체중, 체고, 털 길이, 귀 모양, 꼬리 모양, 수명 등)에 대해 GEMMA 알고리즘 기반의 선형혼합모형(LMM)으로 GWAS를 수행하였다. Bonferroni 보정 임계값(-log10 P ≈ 8.46)을 적용하였다.

**주요 발견:**
- 총 28개의 유의한 연관 신호 확인; 기존 알려진 유전자 검증 및 12개의 새로운 후보 유전자 발굴
- **체중 변이:** 14개 유전자(IGF1, LCORL, HMGA2, ACSL4, ZNF608, ADAMTS9, R3HDM1, GHR, SMAD2, STC2, IGF1R, IGSF1, HNF4G, IRS4)의 변이가 표준체중 분산의 약 95%를 설명
- **LCORL 변이:** 대형 품종(>41 kg)에서 긴 isoform의 마지막 엑손에 1 bp 삽입 변이 발견 → 조기 종결 코돈(p.S1221*) 생성, 611개 아미노산 손실; 중소형 품종에는 존재하지 않음(대형 품종 대립유전자 빈도 0.67)
- **수명:** LCORL, HMGA2, IGF1 및 CFA26 유전자좌가 수명과 유의하게 연관; 체중과 수명 사이의 음의 상관관계(r = 0.72) 확인
- **긴 다리:** ESR1(에스트로겐 수용체 1) 유전자 인트론 영역 변이 발견; 사이트하운드(아이리시 울프하운드, 위핏)에서 ESR1 발현이 20~70배 높음
- **귀 모양:** 처진 귀는 lncRNA(TCONS_00016758/16759) 엑손 내 단일변이로 설명; 큰 귀는 CFA12의 RIMS1-KCNQ5 구간과 연관
- **선택 스윕 분석:** XP-CLR 및 XP-EHH 분석으로 GWAS 후보 유전자 18개 중 13개에서 양성 선택 신호 확인

**의의:** 이 연구는 수백~수천 개의 유전자좌가 인간 신장 변이를 설명하는 것과 대조적으로, 개의 체중 변이 95%가 단 14개 유전자로 설명됨을 보여준다. WGS 기반 GWAS가 SNP 칩 기반 연구 대비 인과 변이를 직접 찾아낼 수 있음을 입증하였다.

---

## Significance in Introduction Context

이 논문이 해당 분야의 도입부에서 갖는 의미:
- **개 GWAS의 방법론적 전환점 제공:** 기존 172,115개 SNP 칩 기반 연구에서 9,100만 개 변이를 포함한 WGS 기반 연구로 도약, 인과 변이를 직접 식별할 수 있는 분해능을 확보함
- **복잡형질의 유전구조 이해 패러다임:** 인간 유전학에서 수백 개 유전자좌로 설명되는 키(BMI) 변이를 개에서는 극소수 대효과 유전자로 설명할 수 있다는 것을 보여주어, 인위적 선택이 유전 구조를 어떻게 단순화하는지를 직접 증명함
- **수업에서 이 논문을 읽어야 하는 이유:** GWAS의 실제 적용 사례, 선택 스윕 분석(XP-CLR, XP-EHH), 연관불평형(LD) 구조를 활용한 유전자매핑 전략, 그리고 "모델 시스템으로서의 개"의 강점을 종합적으로 배울 수 있는 교과서적 연구

---

## Key References

본문에서 인용된 핵심 참고문헌 (DOI URL 포함):

1. **Sutter et al. (2007)** — [https://doi.org/10.1126/science.1137045](https://doi.org/10.1126/science.1137045) — IGF1 유전자 단일 haplotype이 소형 개의 크기를 결정하는 주요 인자임을 최초로 규명
2. **Parker et al. (2017)** — [https://doi.org/10.1016/j.celrep.2017.03.079](https://doi.org/10.1016/j.celrep.2017.03.079) — 현대 개 품종의 지리적 기원과 혼혈 역사를 유전체 분석으로 규명
3. **Boyko et al. (2010)** — [https://doi.org/10.1371/journal.pbio.1000451](https://doi.org/10.1371/journal.pbio.1000451) — CanMap 프로젝트: 915마리 개에서 체형 관련 QTL 발굴
4. **Zhou & Stephens (2012)** — [https://doi.org/10.1038/ng.2310](https://doi.org/10.1038/ng.2310) — GEMMA: 연관 분석을 위한 게놈-와이드 효율적 혼합모형 알고리즘
5. **Plassais et al. (2017)** — [https://doi.org/10.1371/journal.pgen.1006661](https://doi.org/10.1371/journal.pgen.1006661) — 개 X 염색체에서 체중, 근육량, 체지방과 연관된 3개 유전자 발굴
6. **Vaysse et al. (2011)** — [https://doi.org/10.1371/journal.pgen.1002316](https://doi.org/10.1371/journal.pgen.1002316) — 170K SNP 어레이를 이용한 개 품종 표현형 연관 연구

---

## Future Research Directions

이 논문에서 제기된 미해결 질문과 향후 연구 아이디어:

- 대형 및 초대형 품종(>41 kg)의 체중 분산 나머지 5%를 설명하는 추가 유전자좌 탐색: X 염색체의 LD 구조가 매우 길어 세밀한 fine-mapping이 필요함
- LCORL, ADAMTS9, R3HDM1, HNF4G 등 새로 발굴된 유전자의 기능적 역할 규명: 발현 분석에 적합한 조직(특히 성장판 연골조직) 확보 및 기능 실험 필요
- ESR1 과발현이 사이트하운드의 긴 다리 표현형에 기여하는 분자 기전 규명: 뼈 성장판에서의 에스트로겐 시그널링과 골육종 위험 간의 관계
- 마을개(village dog) 표현형 데이터 수집을 통한 야생형 vs. 선택형 유전체 비교 연구 확장
- 체중과 수명의 연관성: 체크포인트로서의 IGF1/GH 신호전달 경로가 노화에 미치는 기전 연구

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
