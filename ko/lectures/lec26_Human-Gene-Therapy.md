---
tags: [genetics, lecture, BME333-BIO333, 2026Fall, ko]
date: 2026-07-20
type: lecture
---
# 인간 유전학 — 유전자 치료

**강의:** BME333 / BIO333 유전학 (UNIST, 2026 가을) · 26강 · ~60분
**Syllabus:** [← 강의계획서](../../lectures/2026.BME333-BIO333-Syllabus.md) — 15주차 수, 2026-12-09

## 학습 목표
이 강의를 마치면 학생들은 다음을 할 수 있어야 한다:
- 유전자 치료를 정의하고 주요 양식을 구별한다: 유전자 추가(gene addition) 대 유전자 편집(gene editing), 생체 내(in vivo) 대 생체 외(ex vivo) 전달, 체세포(somatic) 대 생식세포(germline)(그리고 생식세포 편집이 임상적으로 금지되는 이유).
- 주요 전달 매개체(AAV, 렌티바이러스, 생체 외 HSC로의 CRISPR-Cas9 전기천공)를 비교하고, 각각을 질병 맥락(조직, 세포 유형, 일시적 대 영구적)에 대응시킨다.
- 대조적인 두 획기적 임상시험 — 생체 내 AAV 유전자 전달(혈우병 B, RPE65 망막 이영양증)과 생체 외 CRISPR 편집(겸형적혈구병/β-지중해빈혈) — 을 추적하고, 각 설계가 왜 그 표적에 적합한지 설명한다.
- 주요 위험과 미해결 문제를 명확히 서술한다: 벡터/캡시드에 대한 면역반응, 삽입성 돌연변이(insertional mutagenesis), 표적 이탈 편집(off-target editing), 지속성, 그리고 비용/접근성.
- 유전자 치료를 강의 앞부분에서 다룬 유전체 조작 도구(CRISPR/Cas9, dCas9)와 연결한다.

## 강의 개요 (~60분)
1. **유전자 치료란 무엇인가?** (~8분) — DNA/RNA 수준에서 질병을 교정하기: 유전자 추가(작동하는 사본을 공급) 대 유전자 편집(제자리에서 수리/파괴); 생체 외(체외에서 세포를 편집한 뒤 재주입) 대 생체 내(환자에게 벡터를 전달); 체세포/생식세포의 윤리적 경계선.
2. **전달 도구상자** (~12분) — AAV(비통합형, 조직 지향성, 에피솜형, 면역원성 캡시드) 대 렌티바이러스(통합형, 분열하는 HSC에 적합) 대 비바이러스성 Cas9 리보핵단백질(ribonucleoprotein) 전기천공. 상충관계: 적재량 크기, 통합 위험, 면역반응, 지속성.
3. **생체 내 AAV 유전자 추가 — 획기적 임상시험** (~12분) — 혈우병 B: 단회 정맥주사 AAV8-FIX 주입이 응고인자를 치료 수준으로 회복시킨다(Nathwani 2011). RPE65 망막 이영양증: 망막하 AAV2(voretigene neparvovec) — 최초로 FDA 승인을 받은 생체 내 유전자 치료(Russell 2017). 캡시드 면역과 트랜스아미나제/스테로이드 문제를 논의한다.
4. **생체 외 유전자 편집 — 혈색소병증을 위한 CRISPR** (~14분) — 자가 CD34+ HSC에서 BCL11A 적혈구계 인핸서를 편집하면 태아 헤모글로빈이 재활성화되어 수혈 비의존성과 혈관폐색성 위기로부터의 자유를 얻는다(Frangoul 2021, exa-cel/Casgevy — 최초로 승인된 CRISPR 치료제). 15강의 역유전학/dCas9 도구와 연결한다.
5. **위험, 지속성 및 접근성** (~8분) — 삽입성 돌연변이(역사적 SCID-X1 백혈병), 표적 이탈 편집, 면역 제거, 시간 경과에 따른 발현 소실, 그리고 일회성 완치의 극심한 비용.
6. **이 분야와 그 향방** (~6분) — Anguela & High 2019를 통한 종합: 유전자 치료가 왜 이제서야 제대로 작동하게 되었는가, 그리고 근시일 내 방향(염기/프라임 편집, 생체 내 편집, 적응증 확대). 토론.

## 교재 참고
- **Genetics: From Genes to Genomes (8e)** — 21장 Manipulating the Genomes of Eukaryotes. → [textbook ref](../../lectures/ref.Genetics-FromGenesToGenomes.md)

## 이 저장소의 노트
수업에서 소개할 리뷰 및 논문(각각 en/ko 이중언어 쌍이 있음):
- [Makani2022_NatRevGenet_MendelianDisorder](../review/Makani2022_NatRevGenet_MendelianDisorder.md) — 멘델 질환에서 완치를 향해 나아가는 겸형적혈구병; CRISPR 혈색소병증 사례를 설정한다.
- [Kuhl2020_Genetics_dCas9+Ctf19+Recombination](../article/Kuhl2020_Genetics_dCas9+Ctf19+Recombination.md) — 프로그래밍 가능한 표적화 도구로서의 dCas9; 편집 화학을 치료적 편집과 연결한다.

## 추가 읽기 (PubMed)
*다음 자료는 PubMed에서 가져온 것이며, 출처 표기 요건에 따라 DOI 링크를 포함한다.*
- Nathwani AC, et al. Adenovirus-associated virus vector-mediated gene transfer in hemophilia B. N Engl J Med 2011. [DOI](https://doi.org/10.1056/NEJMoa1108046) · PMID 22149959 — 획기적인 생체 내 AAV 유전자 추가 임상시험(단회 정맥주사로 인자 IX를 회복).
- Russell S, et al. Efficacy and safety of voretigene neparvovec (AAV2-hRPE65v2) in patients with RPE65-mediated inherited retinal dystrophy: a randomised, controlled, open-label, phase 3 trial. Lancet 2017. [DOI](https://doi.org/10.1016/S0140-6736(17)31868-8) · PMID 28712537 — 최초로 FDA 승인을 받은 생체 내 유전자 치료(Luxturna)의 근거가 된 결정적 임상시험.
- Frangoul H, et al. CRISPR-Cas9 gene editing for sickle cell disease and β-thalassemia. N Engl J Med 2021. [DOI](https://doi.org/10.1056/NEJMoa2031054) · PMID 33283989 — exa-cel/Casgevy(최초로 승인된 CRISPR 치료제)의 기반이 된 획기적인 생체 외 CRISPR 편집(BCL11A 인핸서).
- Anguela XM, High KA. Entering the modern era of gene therapy. Annu Rev Med 2019. [DOI](https://doi.org/10.1146/annurev-med-012017-043332) · PMID 30477394 — 벡터, 성공 사례, 그리고 과제에 대한 권위 있는 분야 리뷰.
