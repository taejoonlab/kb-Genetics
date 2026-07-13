---
tags: [genetics, class, review, ko]
date: 2026-07-13
type: class
---

# How to Map Billions of Short Reads onto Genomes

## Citation (NLM)
Trapnell C, Salzberg SL. How to map billions of short reads onto genomes. Nat Biotechnol. 2009;27(5):455–457.

**DOI:** DOI 없음 (Nature Biotechnology Primer 시리즈; 관련 TopHat 도구 DOI: 10.1093/bioinformatics/btp120)

---

## Summary

차세대 시퀀싱(NGS) 기술의 등장으로 수십억 개의 짧은 서열 리드(25–100 bp)를 참조 유전체에 빠르게 매핑하는 문제가 핵심 생물정보학 과제가 되었다. 이 논문은 짧은 리드 매핑의 도전 과제, 알고리즘 전략, 그리고 스플라이싱 인식 매핑의 원리를 설명한다.

짧은 리드 매핑의 주요 도전 과제는 두 가지이다. 첫째, 속도와 메모리: 포유류 수준의 유전체와 수십억 개의 리드에 대해 기존의 BLAST/BLAT는 수천 CPU시간이 필요하지만, 새로운 도구들은 단일 데스크탑 컴퓨터에서도 시간당 수억 개의 리드를 처리한다. 둘째, 반복 서열 처리: 리드가 유전체의 반복 요소에서 유래할 경우, 어느 복사본에서 왔는지 결정하기 어려우며 프로그램은 여러 위치를 보고하거나 발견적(heuristic) 방법으로 하나를 선택해야 한다.

알고리즘적으로 두 가지 주요 접근법이 소개된다. (1) **이격된 씨앗 인덱싱(Spaced Seed Indexing, Maq 방식)**: 리드를 4개의 동일 길이 세그먼트("씨앗")로 분절하고, 최대 2개의 미스매치가 4개 씨앗 중 2개에 걸쳐 분포한다는 원리를 이용해 가능한 매핑 위치 후보를 신속하게 좁힌다. 씨앗 인덱스는 수십 기가바이트 메모리를 요구한다. (2) **Burrows-Wheeler 변환(BWA/Bowtie 방식)**: 파일 압축 기술에서 빌려온 수학적 변환으로, 인간 유전체 전체 인덱스를 2 GB 미만의 메모리에 저장하고, 리드를 한 문자씩 역방향으로 정렬하며 가능한 매핑 구간을 점진적으로 좁힌다. Bowtie는 Maq보다 30배 이상 빠르다.

RNA-Seq 데이터 처리를 위한 스플라이싱 인식 매핑도 다룬다. cDNA 리드 중 일부는 엑손-엑손 접합부에 걸쳐 있어 표준 매퍼로는 매핑이 불가능하다. ERANGE 등 어노테이션 기반 방법은 알려진 스플라이스 부위를 이용하고, TopHat은 어노테이션 없이 Bowtie로 완전히 포함되는 엑손을 먼저 찾고 나머지 리드를 예측된 접합부에 정렬한다.

전형적인 매핑 성공률은 70–75%이며, 기술이 발전하면서 더 긴 리드와 더 많은 오류를 허용하는 알고리즘이 요구된다는 점에서 이 분야는 지속적인 발전 중임을 저자들은 강조한다.

---

## Significance in Introduction Context

이 논문이 해당 분야의 도입부에서 갖는 의미:
- [RNA-Seq, ChIP-Seq, 유전체 재시퀀싱 등 현대 유전체학 실험의 핵심 전처리 단계인 리드 매핑의 알고리즘 원리를 이해하게 한다]
- [이격된 씨앗 인덱싱과 Burrows-Wheeler 변환이라는 두 가지 대조적 알고리즘 전략을 비교함으로써, 속도-정확도-메모리 트레이드오프를 이해하는 틀을 제공한다]
- [수업에서 이 논문을 읽어야 하는 이유: 차세대 시퀀싱 기반 유전체 분석(발현량 측정, 변이 발굴, 에피유전체 분석)의 모든 파이프라인이 리드 매핑에서 시작하므로, 이 단계의 원리와 한계를 아는 것은 결과의 신뢰성을 평가하는 데 필수적이다]

---

## Key References

본문에서 인용된 핵심 참고문헌 (DOI URL 포함):

1. **Nagalakshmi et al. (2008)** — [https://doi.org/10.1126/science.1158441](https://doi.org/10.1126/science.1158441) — RNA-Seq을 이용한 출아 효모 전사체 정의
2. **Mortazavi et al. (2008)** — [https://doi.org/10.1038/nmeth.1226](https://doi.org/10.1038/nmeth.1226) — RNA-Seq을 이용한 마우스 발달 전사체 정량
3. **Johnson et al. (2007)** — [https://doi.org/10.1126/science.1141319](https://doi.org/10.1126/science.1141319) — ChIP-Seq: 전사 인자-DNA 상호작용 네트워크 연구
4. **Ley et al. (2008)** — [https://doi.org/10.1038/nature07485](https://doi.org/10.1038/nature07485) — 급성 골수성 백혈병 유전체의 전장 시퀀싱
5. **Li et al. (2008)** — [https://doi.org/10.1101/gr.078212.108](https://doi.org/10.1101/gr.078212.108) — Maq: 이격된 씨앗 인덱싱을 이용한 짧은 리드 매핑
6. **Langmead et al. (2009)** — [https://doi.org/10.1186/gb-2009-10-3-r25](https://doi.org/10.1186/gb-2009-10-3-r25) — Bowtie: Burrows-Wheeler 변환 기반 초고속 짧은 리드 정렬

---

## Future Research Directions

이 논문에서 제기된 미해결 질문과 향후 연구 아이디어:

- [리드 길이가 100 bp 이상으로 길어질 때(현재 PacBio, Nanopore는 수만 bp) 짧은 리드 매퍼의 알고리즘이 어떻게 스케일업될 수 있는가]
- [참조 유전체와 상당히 다른 유전체를 시퀀싱할 때(종간 비교, 고분화 집단) 매핑 파라미터를 자동으로 최적화하는 방법]
- [매핑 품질(mapping quality) 점수를 하위 분석(SNP 발굴, 발현량 정량)에서 어떻게 적절히 활용하여 거짓 양성을 줄일 수 있는가]

---

*Processed by **claude-sonnet-4-6** (Claude Code) on 2026-07-13*
