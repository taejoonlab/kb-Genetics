---
tags: [genetics, class, article, ko]
date: 2026-11-09
type: class
---

# 효모 chemogenomic 스크린으로 밝힌 아디프산 독성 조절 경로

## Citation (NLM)
Fletcher E, Mercurio K, Walden EA, Baetz K. A yeast chemogenomic screen identifies pathways that modulate adipic acid toxicity. iScience. 2021;24(4):102327. doi:10.1016/j.isci.2021.102327

**DOI:** [https://doi.org/10.1016/j.isci.2021.102327](https://doi.org/10.1016/j.isci.2021.102327)

---

## Summary

아디프산(adipic acid)은 나일론-6,6의 핵심 전구체로, 현재는 벤젠에서 출발하는 화학 공정으로 생산된다. 조작된 효모의 발효로 생산하면 재생 가능하지만 아디프산이 효모에 독성을 나타내어 생산량을 제한하며, 그 독성 기전은 알려져 있지 않았다. 유기산의 일반적 독성 기전은, pKa(아디프산 pKa1 4.41, pKa2 5.41)보다 낮은 pH에서 양성자화된 산이 세포 안으로 확산해 중성 pH의 세포질에서 해리되고, 음이온은 펌프로 내보내지 않으면 축적된다는 것이다. 저자들은 chemogenomic 스크린으로 내성의 특이적 유전 결정 요인을 찾았다.

haploid *S. cerevisiae* deletion mutant array(DMA; BY4741 유래 약 4,200개 돌연변이, 중복으로 plate당 1,536 colony로 배열, 스크린은 3회 반복)를 80 mM 아디프산(pH 4.0)이 든 YPD 한천에 pinning하고, 산의 효과와 낮은 pH의 효과를 분리하기 위해 pH 4.0으로 완충한 용매 대조군과 비교하여 48시간 후 SGAtools로 colony 크기를 점수화했다(평균 성장 점수 -0.3 미만 또는 0.3 초과를 cutoff로 사용). 스크린에서 민감 돌연변이 77개와 성장이 개선된 돌연변이 1개가 나왔다. 액체 배양 성장률(PRECOG 점수, 2 이상이면 50% 이상 성장 저해)로 검증하여 민감 돌연변이 43개와 suppressor 1개를 확정했다. 낮은 pH 독성에 관한 이전 스크린의 129개 유전자와는 겹치지 않아 아디프산에 특이적인 hit임이 확인되었고, *pdr12*가 잡힌 것은 PDR12 과발현이 내성을 높인다는 기존 보고와 일치한다. GO 분석에서 ergosterol 생합성(p = 1.1 x 10^-5)과, 가장 강하게는 단백질 수송/trafficking(p = 3.8 x 10^-11)이 농축되었으며, ESCRT-I, -II, -III 구성원, Bro1, GARP 복합체, COG 복합체가 포함되었다. ESCRT 돌연변이와 *erg2*, *erg3*, *erg4* 결실은 120 mM 아디프산에서 자라지 못했다.

유일한 suppressor는 TCA 회로의 alpha-ketoglutarate dehydrogenase를 암호화하는 *KGD1*이었다. *kgd1* 결실 세포는 아디프산과 catechol(아디프산 생합성 경로의 독성 전구체, 12 mM)에서는 야생형보다 잘 자랐으나 cis,cis-muconic acid에서는 그렇지 않았다. 다른 TCA 돌연변이는 야생형과 같았고 *sdh1*만 과민감했으므로, 효과는 TCA 회로 전체가 아니라 *KGD1*에 특이적이다. 비필수 ergosterol 경로 결실 9종 중에서는 마지막 단계(*erg2*, *erg3*, *erg4*, 경미하게 *erg5*)가 필요했다. 아디프산은 ergosterol 효소의 발현을 유도하지 않았으나 Erg24-GFP와 Erg4-GFP(Fig. 4에는 Hmg1-GFP도 포함)는 위치가 바뀌어 ER에서 세포질과 puncta로 이동했고, Erg4-GFP는 파편화된 미토콘드리아(Cit1-RFP)와 공동 위치했다. 반면 Pdr12-GFP는 빠르게 유도되어(30분에 약 12배) 원형질막에 위치했으며 이는 *erg2*/*erg4*와 무관했고, *erg4* *pdr12* 이중 돌연변이는 상승적으로 민감해 ergosterol과 Pdr12 efflux가 서로 겹치지 않는 역할을 함을 보여준다.

마지막으로 아디프산은 Can1의 막 구획(Membrane Compartment of Can1, MCC)을 교란했다. 야생형에서 filipin으로 염색되는 ergosterol 패치가 사라졌고, Can1-GFP가 원형질막에서 빠져나와 액포로 이동하며 free GFP가 증가하여 endocytosis를 시사했고, FM4-64 흡수가 이를 확인했다. 저자들은 ergosterol과 trafficking이 막 구조를 유지하고 아디프산 스트레스에서 수송체를 제거/조절하는 데 필요하며, *KGD1*과 이들 경로가 내성 생산 균주 조작의 후보라고 제안한다.

논의. 저자들은 세 가지 질문을 논의한다. (1) *KGD1* 결실은 왜 도움이 되는가? TCA 회로 유전자가 아디프산과 catechol에 대한 내성을 높인다는 첫 보고이지만, 효과는 *KGD1*에 특이적이다(alpha-ketoglutarate dehydrogenase 복합체의 다른 소단위체인 *KGD2*나 다른 TCA 유전자는 해당 없음). Kgd1 상실로 flux가 acetyl-CoA 쪽으로 돌려져 acetate가 증가하고, acetate가 Pdr12를 활성화한다는 가능성이 제시되며 acetic acid 선처리 실험이 필요하다. 중복성이나 Kgd1의 TCA 외 기능도 대안이다. 세포 내 acetate는 측정되지 않았다. (2) Ergosterol은 어떻게 작용하는가? 경로 마지막 단계(Erg2, Erg3, Erg4, Erg5)는 기질 특이성이 낮아 돌연변이가 ergosterol이 아닌 여러 sterol(예: fecosterol, episterol)의 혼합물을 축적하며, 이들의 굽은 구조가 지질 이중층 packing을 바꾼다. 막 구조가 해리되지 않은 아디프산의 세포 내 확산을 제한할 수 있고, sterol 조성은 막 단백질에 영향을 줄 수 있다(ergosterol이 Pdr5와 Pdr12 기능에 필요하다는 보고). *erg4* *pdr12*의 상승적 표현형은 ergosterol이 Pdr12 조절 이상의 역할, 즉 endocytosis 부위인 MCC 조직화 역할도 한다는 점을 보여준다. (3) Trafficking은 왜 필수인가? chemogenomic 프로파일 유전자의 거의 절반이 단백질 trafficking과 액포 수송에 관한 것이며 대부분 ESCRT 구성요소이다. 저자들은 아디프산이 endocytosis를 유도하는 것(Can1이 internalization되어 분해되고, FM4-64가 15분 만에 액포에 도달하는 반면 비처리 세포는 최대 120분 소요)이 아디프산을 들여올 수 있는 비특이적 수송체를 제거하는 생존 기전이라고 제안하며(다른 유기산의 Jen1, Acy1에 비유), 따라서 ESCRT 매개 액포 분해가 온전해야 한다고 본다.

결론과 한계. 아디프산 독성에는 ergosterol 의존적인 원형질막/MCC 무결성, endocytosis, trafficking이 관여하며, *KGD1* 결실은 공학적 표적 후보이다(독성 전구체 catechol 포함). 저자들은 두 가지 한계를 명시한다. ergosterol 경로 과발현 등 조절이 아디프산에서의 성장을 개선하는지는 검증되지 않았고, 모든 실험이 실험실 균주 S288c 배경에서 수행되어 산업 균주로의 적용 가능성은 확인되지 않았다. 방법(보충 자료): 120 mM 아디프산에서 BioScreen C로 72시간 액체 배양 검증, doubling time 비를 사용한 PRECOG 점수(2 초과 민감, 0.8 미만 내성), FunSpec을 이용한 GO 분석(p < 0.01 cutoff), yeast GFP collection의 GFP 태그 균주, 정량 western blot(TCA 추출, anti-GFP), filipin, CMAC, FM4-64 염색과 형광 현미경.

---

## Significance in Introduction Context

- 결실 컬렉션을 이용한 forward 방식 chemogenomic 스크린의 명확한 예로, 화합물 특이 효과와 pH 효과를 분리하는 대조를 보여준다.
- 결실이 적합도를 높일 수 있다는 점(suppressor/hypertolerant allele), 유전자들이 병렬로 작용한다는 점(ergosterol과 Pdr12), 후속 연구에서 GFP 태깅 라이브러리의 가치를 보여준다.
- 고전 유전학을 대사공학과 산업 생명공학에 연결한다.

---

## Key References

1. **Wagih O 외 (2013)** — SGAtools: one-stop analysis and visualization of array-based genetic interaction screens, Nucleic Acids Res 41:W591-W596 — 여기서 사용한 colony 크기 점수화
2. **Fernandez-Ricaud L 외 (2016)** — PRECOG: a tool for automated extraction and visualization of fitness components in microbial growth phenomics, BMC Bioinformatics 17:249 — 성장 기반 PRECOG 점수
3. **Pereira R 외 (2019)** — Adaptive laboratory evolution of tolerance to dicarboxylic acids in *Saccharomyces cerevisiae* — PDR12와 QDR3 과발현이 아디프산 내성을 높임을 보인 선행 연구
4. **Shin JJ 외 (2016)** — Systematic identification of genes involved in metabolic acid stress resistance in yeast and their potential as cancer targets, Dis Model Mech 9:1039-1049 — 비교에 사용한 낮은 pH chemogenomic 데이터
5. **Grossmann G 외 (2008)** — Plasma membrane microdomains regulate turnover of transport proteins in yeast, J Cell Biol — MCC, Can1, ergosterol
6. **Abe F, Hiraki T (2009)** — Mechanistic role of ergosterol in membrane rigidity and cycloheximide resistance in *Saccharomyces cerevisiae*, Biochim Biophys Acta 1788:743-752 — 후기 경로 *erg* 돌연변이의 sterol 축적
7. **Piper P 외 (1998)** — The pdr12 ABC transporter is required for the development of weak organic acid resistance in yeast, EMBO J 17:4257-4265 — 약산 음이온 efflux 펌프로서의 Pdr12
8. **Jarboe LR, Royce LA, Liu P (2013)** — Understanding biocatalyst inhibition by carboxylic acids, Front Microbiol 4:272 — 유기산 독성의 일반 기전

---

## Future Research Directions

- *KGD1* 결실이나 ergosterol/ESCRT 조작이 생산 균주(S288c 이외의 산업 배경 포함)의 아디프산 역가를 높이는지 검증.
- ergosterol 경로의 과발현 등 조절이 아디프산에서의 성장을 개선하는지 검증.
- *kgd1* 세포의 세포 내 acetate 측정과 acetic acid 선처리가 내성을 높이는지(Pdr12 경유 가능성) 검증, 그리고 TCA 유전자 중 *KGD1*만 이런 효과를 보이는 이유 규명.
- 아디프산을 들여올 수 있는 비특이적 수송체와 그 endocytic 분해의 조절을 규명하고, 아디프산이 MCC를 교란하는 방식을 정의.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
