---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# 대장균 화학유전체학으로 찾은 세균 지단백질 표적화 억제제

## Citation (NLM)
Pathania R, Zlitni S, Barker C, Das R, Gerritsma DA, Lebert J, Awuah E, Melacini G, Capretta FA, Brown ED. Chemical genomics in Escherichia coli identifies an inhibitor of bacterial lipoprotein targeting. Nat Chem Biol. 2009;5(11):849-856. doi:10.1038/nchembio.221

**DOI:** [https://doi.org/10.1038/nchembio.221](https://doi.org/10.1038/nchembio.221)

---

## Summary

세포 기반 스크린에서 나온 hit의 작용기전을 파악하는 것은 항균제 개발의 큰 병목이다. 지난 약 40년간 임상에 도달한 새로운 항생제 계열은 linezolid와 daptomycin 둘뿐이다. 효모 화학유전체학은 이형접합 결실 pool을 쓰지만 단일 염색체(monoploid) 세균에서는 불가능하다. 대신 저자들은 high-copy suppression을 쓴다. 약물 표적을 과발현하면 화합물이 희석되어 생장이 회복된다. 필수 *E. coli* 유전자의 정렬된 고발현 클론 어레이(ASKA 클론 라이브러리, 384 밀도로 한천에 패치)를 구성하고, 최소억제농도(MIC)의 배수를 높여 가며 suppressor를 선택(selection)이 아니라 스크리닝했다.

약 50,000개 분자 라이브러리를 LPS 결함 과민 균주(MC1061)에 대해 50 uM에서 스크리닝했다. 시험한 14개 항생제(6개 보고) 중 표적이 단일 유전자로 암호화되는 경우 알려진 표적이 16x MIC에서 high-copy suppressor로 나타났다: fosfomycin-murA, fosmidomycin-dxr, trimethoprim-folA, sulfamethoxazole-folC, D-cycloserine-ddl. (D-cycloserine의 두 번째 표적 DadX는 비필수라 어레이에 없다.) Spectinomycin은 상호작용이 거의 없었고, yjeE, rpsR, rpmB, tolC(배출 채널) 같은 비특이적 suppressor는 낮은 stringency에서 나타났다. 어떤 두 항생제도 같은 suppressor 프로파일을 갖지 않아 작용의 "기전 지문"이 된다.

새 화합물 MAC13243은 Lol 지단백질 수송계의 주변세포질 chaperone인 LolA의 과발현으로 16x MIC(대조균주 MIC 8 ug/ml)까지 suppress되었으며, 이는 알려진 항생제에서는 보이지 않은 suppressor였다. MAC13243 처리 시 35S 표지 Braun 지단백질(Lpp)이 0-20분에 걸쳐 내막에 축적되었고(pulse-chase, 자당 구배 분획, TolC와 YidC를 막 대조로 사용), LolA 억제와 일치한다. Saturation-transfer-difference NMR로 정제 LolA에 대한 직접 결합을 확인했고 Kd는 7.5 +/- 3 uM이었다(Water-LOGSY). 18개 유사체의 구조-활성 연구에서 benzyl-thio 고리의 para 할로겐(Cl 또는 Br)과 triazine core가 필수였고 dimethoxyphenethyl 부분은 없어도 되었다(유사체 19, MIC 8 ug/ml). 4-chlorobenzyl thiol 단독은 활성이 없었다. MAC13243은 그람음성균에 활성(E. coli MIC 16 ug/ml, P. aeruginosa PAO1 4 ug/ml)이 있고 그람양성균에는 없어(>256 ug/ml) Lol 경로가 없다는 점과 일치하며 HeLa 세포나 Candida에는 독성이 없었다. AcrB 과발현에도 MIC가 변하지 않아(norfloxacin과 달리) 유출 기질이 아니며, 임상 P. aeruginosa 분리주 16개 중 12개를 16 ug/ml에서 사멸시켰고 다제내성 균주도 포함되었다. 전문 대부분이 추출되었으나 마지막 methods와 참고문헌은 50,000자 제한으로 잘렸다.

---

## Significance in Introduction Context

- 단일 염색체 생물에서 유전자 용량을 실험 도구로 사용: 과발현(사본 추가)이 표현형을 회복시키며, 효모 haploinsufficiency profiling의 반대 개념이다.
- 유전적 suppression으로 소분자의 분자 표적을 규명하는 방식으로, 고전적 suppressor 분석과 약물 발굴을 연결한다.
- 항생제 내성 생물학(배출 펌프, 그람음성균 외막 생리)의 예시.

---

## Key References

1. **Giaever G et al. (1999)** — Genomic profiling of drug sensitivities via induced haploinsufficiency (Nat Genet 21:278-283) — 이 접근과 짝을 이루는 효모 HIP 개념. [https://doi.org/10.1038/6791](https://doi.org/10.1038/6791)
2. **Kitagawa M et al. (2005)** — Complete set of ORF clones of *E. coli* ASKA library (DNA Res 12:291-299) — 과발현 라이브러리의 출처.
3. **Tokuda H, Matsuyama S (2004)** — Sorting of lipoproteins to the outer membrane in *E. coli* (Biochim Biophys Acta 1693:5-13) — Lol 경로.
4. **Wang J et al. (2006)** — Platensimycin is a selective FabF inhibitor with potent antibiotic properties (Nature 441:358-361) — antisense 기반 표적 지향 발굴.
5. **Pathania R et al. (2009)** — 본 연구; LolA-MAC13243 기전 후속 연구와 유사체 연구도 참고.

---

## Future Research Directions

- MAC13243 pharmacophore를 정교화하여 P. aeruginosa 등 그람음성 병원균에 대한 효력 향상.
- 고복제 suppression 어레이를 비필수 유전자와 다른 세균으로 확장해 신규 lead의 기전 지문 확보.
- 소분자의 LolA 결합이 지단백질 수송을 막는 구조적 기전 규명.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
