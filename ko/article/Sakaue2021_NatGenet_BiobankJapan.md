---
tags: [genetics, class, article, ko]
date: 2026-07-13
type: class
---

# A Cross-Population Atlas of Genetic Associations for 220 Human Phenotypes

## Citation (NLM)
Sakaue S, Kanai M, Tanigawa Y, Karjalainen J, Kurki M, Koshiba S, Narita A, Konuma T, Yamamoto K, Akiyama M, Ishigaki K, Suzuki A, Suzuki K, Obara W, Yamaji K, Takahashi K, Asai S, Takahashi Y, Suzuki T, Shinozaki N, Yamaguchi H, Minami S, Murayama S, Yoshimori K, Nagayama S, Obata D, Higashiyama M, Masumoto A, Koretsune Y, Ito K, Terao C, Yamauchi T, Komuro I, Kadowaki T, Tamiya G, Yamamoto M, Nakamura Y, Kubo M, Murakami Y, Yamamoto K, Kamatani Y, Palotie A, Rivas MA, Daly MJ, Matsuda K, Okada Y. A cross-population atlas of genetic associations for 220 human phenotypes. Nat Genet. 2021;53(10):1415-1424. doi:10.1038/s41588-021-00931-x

**DOI:** [https://doi.org/10.1038/s41588-021-00931-x](https://doi.org/10.1038/s41588-021-00931-x)

---

## Summary

이 논문은 BioBank Japan(BBJ) 데이터를 활용하여 220가지 심층 표현형에 대해 GWAS를 수행하고, UK Biobank(UKB) 및 FinnGen과의 교차집단 메타분석을 통해 인간 유전자-형질 연관성의 포괄적 지도를 구축한 대규모 연구이다. 기존 GWAS 연구가 유럽계 집단 편향, 한정된 표현형, 체계적 해석 부재라는 세 가지 한계를 보유했다는 문제 인식에서 출발하였다.

**연구 데이터 및 표현형 구성:**
- BBJ: 일본 전국 바이오뱅크, 약 179,000명 참여자
- 표현형: 159개 질환(전자의무기록 기반 PMH 텍스트마이닝으로 121개 신규 질환 추가), 38개 바이오마커, 23개 약물처방 사용 기록 = 총 220개 표현형
- 유전형: 1000 Genomes Project Phase 3(n=2,504)과 일본인 특이 WGS 데이터(n=1,037)를 참조패널로 사용한 imputation
- 대조군: UK Biobank(UKB, 196개 표현형) 및 FinnGen(128개 표현형)과 조화(harmonize)하여 교차집단 메타분석 수행(총 n = 628,000)

**BBJ 단독 GWAS 주요 결과:**
- 159개 질환: 519개 유전체 유의 유전자좌(113개 신규)
- 38개 바이오마커: 2,249개 유전자좌(281개 신규)
- 23개 약물처방: 215개 유전자좌
- 동아시아 특이 변이 발굴 예시: rs140780894(MHC 위치) — 폐결핵(PTB) 연관 변이(OR=1.2, p=2.9×10^-23), 유럽 집단에는 없는 동아시아 특이 변이

**교차집단 메타분석 결과:**
- 총 약 5,000개 신규 유전자좌 발굴(질환 571개, 바이오마커 4,471개, 처방 301개 신규)
- BBJ에서 발굴된 유전자좌의 94.2%가 유럽 데이터에서 동일 효과 방향으로 검증됨
- 유전상관(rg) 중앙값 0.82: BBJ와 유럽 GWAS 간 유전자 기반의 높은 일관성 확인

**다형질 다발(pleiotropy) 지형 분석:**
- 일본인에서 가장 다형질 변이: rs671 (ALDH2 미스센스, 47개 형질과 연관) — 음주 관련 변이로 잘 알려진 동아시아 특이 유전자좌
- 유럽인에서 가장 다형질 변이: MHC 유전자좌(rs9265949, 46개 형질)
- 다형질 유전자좌일수록 SDS(singleton density score) 기반 최근 양성선택 신호가 강함(집단 간 공통 패턴)

**MHC 및 ABO 유전자좌 PheWAS:**
- BBJ에서 MHC 연관 53개 형질, UKB에서 63개 형질 발굴; HLA-B(class I)와 HLA-DRB1(class II)에 연관 집중
- HLA-DRβ1 Ser57: 폐결핵, 그레이브스병, 하시모토병, 쇼그렌 증후군 등 여러 자가면역질환과 동일 방향 연관
- ABO PheWAS: 심근경색(A형 위험 증가), 위궤양(O형 위험 증가), 혈세포 지표, 지질 수치 등 다양한 형질과 연관

**DeGAs 행렬 분해 분석(TSVD):**
- 159개 질환의 GWAS 요약통계 행렬(22,980 변이 × 159 표현형 × 2 집단)에 TSVD 적용하여 40개 잠재 성분(latent components) 도출; 전체 분산의 36.7% 설명
- 성분 1: 당뇨병(췌장 조절 이상, 혈당/HbA1c 바이오마커 투영)
- 성분 2: 심혈관질환(대동맥 특이 발현 유전자, 혈압/지질 바이오마커 투영)
- 알레르기 질환 분류: 성분 3+16(축 1) = 제I형 과민반응(천식, 알레르기 비염 → IgE·Th2 세포 관련 변이) vs. 성분 26+34(축 2) = 제IV형 과민반응(접촉성 피부염, 금속 알레르기 → IL-13·IFN 관련 변이)으로 유전적 기반에 의한 분류가 기존 임상 분류와 일치함

---

## Significance in Introduction Context

이 논문이 해당 분야의 도입부에서 갖는 의미:
- **GWAS의 다양성·공정성 문제 해결 시도:** 전체 GWAS의 대부분이 유럽계 집단을 대상으로 하는 상황에서, 동아시아 대규모 바이오뱅크 데이터를 통해 비유럽 집단 유전 변이 지도를 확장; 공정한 유전학(equity in genetics)의 필요성을 실증
- **전자의무기록(EMR) 기반 표현형 확장의 가능성:** 과거병력(PMH)과 텍스트마이닝을 활용하여 121개 신규 질환 표현형을 추가하는 방법론을 제시; 바이오뱅크 데이터 활용의 새로운 패러다임
- **수업에서 이 논문을 읽어야 하는 이유:** 대규모 다형질 GWAS의 방법론(교차집단 메타분석, LD score 회귀, 선형혼합모형 SAIGE/BOLT), 다형질 유전자좌와 자연선택의 관계, 그리고 행렬 분해를 통한 질환 생물학 해석이라는 차세대 유전체학 분석 전략을 종합적으로 학습할 수 있음

---

## Key References

본문에서 인용된 핵심 참고문헌 (DOI URL 포함):

1. **Ishigaki et al. (2020)** — [https://doi.org/10.1038/s41588-020-0640-3](https://doi.org/10.1038/s41588-020-0640-3) — BBJ에서 이전 GWAS로 발굴된 대규모 유전자좌
2. **Tanigawa et al. (2019)** — [https://doi.org/10.1038/s41467-019-11953-9](https://doi.org/10.1038/s41467-019-11953-9) — DeGAs 프레임워크: UK Biobank 2,138 표현형의 유전 성분 분해
3. **Bulik-Sullivan et al. (2015)** — [https://doi.org/10.1038/ng.3211](https://doi.org/10.1038/ng.3211) — LDSC: LD score 회귀를 이용한 다형질 vs. 교란 변수 구분
4. **Zhou et al. (2018)** — [https://doi.org/10.1038/s41588-018-0184-y](https://doi.org/10.1038/s41588-018-0184-y) — SAIGE: 케이스-컨트롤 불균형과 친족관계 보정을 위한 효율적 혼합모형
5. **Denny et al. (2013)** — [https://doi.org/10.1038/nbt.2749](https://doi.org/10.1038/nbt.2749) — PheWAS와 phecode 시스템: 전자의무기록 기반 phenome-wide 연관 분석
6. **Martin et al. (2019)** — [https://doi.org/10.1038/s41588-019-0379-x](https://doi.org/10.1038/s41588-019-0379-x) — 유럽 편향 다유전자 위험점수가 건강 불평등을 악화할 수 있음을 경고

---

## Future Research Directions

이 논문에서 제기된 미해결 질문과 향후 연구 아이디어:

- 모든 유전자좌에 대한 체계적 통계적 fine-mapping 미수행: 관찰된 다형질이 LD 태깅 변이에 의한 것인지 실제 공통 변이에 의한 것인지 검증 필요
- 아프리카계, 남아시아계, 라틴아메리카계 등 다른 비유럽 집단에서의 다형질 지형 확인 필요: 이 연구는 동아시아(일본)와 유럽의 비교에 국한됨
- DeGAs로 도출된 잠재 성분(latent components)의 외부 검증: 분석에 포함된 입력 표현형 선택에 따라 성분 구조가 달라질 수 있어 독립적인 코호트로 검증 필요
- 약물처방 GWAS와 실제 치료 반응성(pharmacogenomics) 연구의 연결: 처방 사용 기록이 약효 또는 부작용 유전자를 발굴하는 대리 표현형으로 활용될 수 있는지 검증
- 바이오뱅크 구축 방식(질환 기반 모집 vs. 인구 기반 모집)이 유전 연관 결과에 미치는 편향 분석 및 보정 방법 개발

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
