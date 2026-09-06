---
tags: [genetics, class, article, ko]
date: 2026-09-06
type: class
---

# 교란 아틀라스의 전사체 전반 차등발현 분석(TRADE)

## Citation (NLM)
Nadig A, Replogle JM, Pogson AN, Murthy M, McCarroll SA, Weissman JS, Robinson EB, O'Connor LJ. Transcriptome-wide analysis of differential expression in perturbation atlases. Nat Genet. 2025;57(5):1228-1237. doi:10.1038/s41588-025-02169-3

**DOI:** [https://doi.org/10.1038/s41588-025-02169-3](https://doi.org/10.1038/s41588-025-02169-3)

---

## Summary

**Perturb-seq**는 풀링 고처리량 CRISPR 스크린과 단일세포 RNA 시퀀싱을 결합하여, 하나의 세포 풀에서 수천 개의 유전적 교란을 검정하고 각각의 전사적 결과를 판독한다. 이 설계에는 내재적 한계가 있다. 교란당 세포 수 — 사실상의 표본 크기 — 가 작아서 측정에 잡음이 많고, 실제 차등발현 효과 다수가 어떤 유의성 역치 아래로 떨어져 아예 보고되지 않는다.

저자들은 인간유전학자들이 GWAS에서 정확히 같은 문제에 직면했음을 지적한다. 전장유전체 유의성에 도달하는 연관이 거의 없어도, 통계적 방법으로 **SNP 유전율** — 총 유전 효과 — 을 추정하고 개별 변이를 동정하지 않고도 유전 구조를 특성화할 수 있다. 저자들은 Perturb-seq에 동일한 수를 제안한다. 유의한 유전자를 세는 대신, 선택된 역치에서 놓친 것까지 포함하여 **참 차등발현 효과의 분포를 추정**하자는 것이다.

**TRADE**(transcriptome-wide analysis of differential expression)는 그 분포에 대한 통계 모델로, **추정 오차를 명시적으로 반영**하여 잡음을 신호로 오인하지 않게 한다. 핵심 산출물은 **"transcriptome-wide impact(전사체 전반 영향)"** 로, 하나의 교란이 전사체 전체에 미치는 총 효과를 요약하는 단일 값이다. 유전율에 해당하는 Perturb-seq 판이다.

여러 대규모 Perturb-seq 데이터셋에 TRADE를 적용하자 표준 분석에는 보이지 않던 결과가 나왔다. **개별적으로는 검출되지 않던 다수의 전사 효과가 집합적으로는 드러난다.** 전형적인 유전자 교란은 추정 **45개 유전자**에 영향을 주는 반면, 전형적인 **필수 유전자는 500개 이상**에 영향을 준다. 필수 유전자가 네트워크 허브라는 직관을 정량화한 결과다. 저자들은 또한 **세포 유형 간 교란 효과의 일관성이 중간 정도**임을 발견했다. 전사적 결과가 보편적이지도, 완전히 세포유형 특이적이지도 않다는 뜻이다. 그리고 전사 반응이 크기뿐 아니라 **용량 수준에 따라 질적으로 달라지는** 교란들을 동정했다. 분자 수준의 비선형 유전형–표현형 관계다. 마지막으로 TRADE를 이용해 **신경정신질환 전반에서 유전적 상관과 전사체적 상관의 관계를 명료화**하여, 교란 생물학을 인간 질환 유전학과 연결했다.

---

## Significance in Introduction Context

- 통계적 착상이 분야 사이를 이동하는 방식을 보여준다. **SNP 유전율 논리를 교란 스크린에 적용**한 것으로, 방법이 전파되는 사례로 짚어줄 만하다
- **유의한 신호가 없다는 것이 효과가 없다는 뜻은 아님**을 입증한다. 학생들이 마주칠 모든 검정력 부족 실험에 적용되는 교훈이다
- "유전자 하나를 녹아웃하면 몇 개 유전자가 영향을 받는가"에 정량적 답을 준다. 보통 45개, 필수 유전자는 500개 이상이다
- **용량 의존적 질적 변화** 결과는 비선형성의 분자적 예시이며, 우성과 반수체부족(haploinsufficiency)과 연결된다
- 기능유전체학(Perturb-seq)과 인간유전학(신경정신질환의 유전 구조)을 잇는다

---

## Key References

1. **Dixit et al. (2016); Adamson et al. (2016)** — Perturb-seq — 이 방법이 분석하는 검정법
2. **Replogle et al. (2022)** — 유전체 규모 Perturb-seq로 정보량 높은 유전형–표현형 지형 매핑 — 여기서 분석된 대규모 아틀라스 데이터셋
3. **Yang et al. (2010); Bulik-Sullivan et al. (2015)** — SNP 유전율 추정과 LD score regression — TRADE의 개념적 본보기
4. **Zhu and Stephens / iDEA** — 차등발현 효과 분포의 point-normal 모델 — 이 분포의 일부를 포착한 선행 방법
5. **Peidli et al.(교란 강도에 대한 energy distance)** — 교란 효과의 대안적 요약 통계량 — TRADE가 비교되는 방법들
6. **Boyle, Li and Pritchard (2017)** — 복합형질의 확장된 관점: 다유전자에서 전유전자(omnigenic)로 — TRADE의 효과 개수가 정보를 제공하는 네트워크 전파 관점

---

## Future Research Directions

- 훨씬 더 많은 Perturb-seq 아틀라스와 세포 유형에 TRADE를 적용하여 유전자별 전사체 전반 영향의 체계적 지도 구축
- transcriptome-wide impact를 기능적 제약 지표로 사용하고, 이것이 인간 집단의 기능상실 불내성을 예측하는지 검증
- 용량 의존적 질적 반응을 보이는 교란들을 기계론적으로 조사 — 어떤 네트워크 성질이 이를 만들어내는가
- 교란당 표본 크기가 더욱 작아 이 방법이 가장 큰 도움이 될 생체 내 Perturb-seq으로 틀 확장
- 세포주에서 추정한 transcriptome-wide impact가 개체 수준 표현형 심각도를 예측하는지 검증 — 분자 척도와 임상 척도를 연결하게 될 것

---

*Processed by **Claude Opus 5** (Claude Code) on 2026-09-06*
