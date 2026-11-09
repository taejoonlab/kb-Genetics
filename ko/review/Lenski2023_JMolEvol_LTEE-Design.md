---
tags: [genetics, class, review, ko]
date: 2026-11-09
type: class
---

# 대장균 장기 진화 실험(LTEE) 설계의 재검토

## Citation (NLM)
Lenski RE. Revisiting the design of the long-term evolution experiment with Escherichia coli. J Mol Evol. 2023;91(3):241-253. doi:10.1007/s00239-023-10095-3

**DOI:** [https://doi.org/10.1007/s00239-023-10095-3](https://doi.org/10.1007/s00239-023-10095-3)

---

## Summary

특집호 편집자들이 "지금 비슷한 실험을 시작한다면 다르게 하겠는가?"라고 묻자, Lenski는 1988년 *E. coli* 12개 집단으로 시작해 최근 75,000세대에 도달한 LTEE의 설계를 돌아본다. 그는 세 가지 근본 질문을 제시한다. 진화는 얼마나 반복 가능한가(선택의 결정론 대 돌연변이, 부동, 우연성의 확률론), 진화의 동역학은 어떤가(점진적 대 단속적, 적합도 향상의 한계 유무), 표현형 진화와 게놈 진화는 어떻게 연결되는가(돌연변이, 유전자, 경로 수준의 평행성; 다면발현 trade-off에 의한 특수화 대 중립 돌연변이의 축적). 설계는 파지 T4 저항성/민감성 집단을 비교한 약 400세대의 이전 실험(Lenski 1988)에서 나왔고, 그 민감성 선조가 LTEE의 조상이 되었다. 첫 LTEE 논문은 2,000세대 동안 집단당 약 3.7회의 selective sweep을 추정했으며, 이후 게놈 분석에서 그 기간 평균 약 7.5개 돌연변이가 발견되었고 다수가 유익한 driver였다.

리뷰는 각 설계 선택과 근거를 차례로 설명한다. 배양 방식: chemostat 대신 매일 0.1 mL를 신선 배지 9.9 mL로 옮기는 연속 계대(하루 약 6.6세대). 연속 계대는 저렴하고 정확하며 오염에 강하고, 벽에 붙는 세포는 계대마다 버려지며, 수천 건의 적합도 측정이 가능하다(두 연구는 1,000건 이상 수행). chemostat은 비용이 크고 오염과 wall growth 문제가 있다. 배지: 포도당 25 ug/mL의 화학적으로 정의된 Davis Mingioli(DM25) 배지로, 단일 제한 자원을 두어 음의 빈도 의존 선택(FDS)을 최소화하고 하나의 적합도 지표로 충분하게 했다. 정체기 밀도는 약 5x10^7 cells/mL(10 mL당 약 5x10^8 세포)로 낮아 대사 부산물 축적을 줄인다. 그럼에도 일부 또는 대부분의 집단에서 FDS가 나타났지만 효과는 전체 적합도 증가에 비해 작다. citrate는 철 chelator로 들어 있으며(제거하면 성장이 불규칙, 물 품질 변동 때문으로 추정), 덕분에 한 집단이 호기적 citrate 이용을 진화시켰고 다른 집단은 75,000세대에도 그렇지 못했다. 물 품질은 통제되지 않는 유일한 변수이지만, 평균 적합도 궤적이 매끄럽고 실험실 간(UC Irvine, Michigan State, Texas) 적합도 비교가 일치해 대체로 무시할 만하다고 본다. 다만 Cit- 계통의 설명되지 않는 소멸은 두 시점에서 각각 20개 집단을 재시작해도 재현되지 않았고, 물 품질이나 다른 부주의한 교란 때문일 수 있다.

조상과 표지자: REL606은 Luria와 Delbruck이 사용한 *E. coli* B 계통의 유도체로, 유전 지도가 잘 된 K-12 대신 저자의 경험 때문에 선택되었다. Lenski는 연관 지도가 불연속 표현형에 적합하고 미세한 성장 향상에는 맞지 않으며, 이후 전장 유전체 분석이 유전학 문제를 해결했다고 설명한다. REL606은 arabinose를 이용하지 못하는 Ara- 돌연변이를 가지며 중립인 Ara+ 복귀 돌연변이체 REL607을 표지자로 쓴다. 집단들은 표지 상태를 번갈아 배치해 교차 오염을 탐지하고, 경쟁 실험에서 반대 표지의 경쟁자는 붉은/흰 콜로니로 구분해 센다. 조상에는 플라스미드와 기능적 prophage가 없고 E. coli는 자연 형질전환이 되지 않아 표지자와 적합도 대립유전자를 분리시킬 수평적 유전자 전달이 없다. 각 집단은 서로 다른 단일 반수체 세포(콜로니)에서 시작해 기존 변이가 없고 모든 돌연변이가 독립적으로 생겼으므로, 수렴은 공통 변이에 의한 collateral 진화가 아닌 진정한 평행 진화를 뜻한다(유성생식 다세포 생물의 선택 실험은 공유된 변이에서 출발). 돌연변이원 대신 자발적 돌연변이를 쓰는 이유는 큰 무성 집단의 적응이 돌연변이 공급이 아니라 clonal interference에 의해 제한되고, 돌연변이율이 높을수록 유해 부담이 커지며, 돌연변이가 많으면 driver를 가리는 passenger(hitchhiker)가 늘기 때문이다(hypermutator에서는 유전자 수준 평행성이 흐려짐).

측정: 냉동 시료를 동시에 되살려 한 번의 전체 계대 주기 동안 순응시켜 순응(acclimation)과 적응을 구분한다. 상대 적합도는 조상과의 직접 경쟁에서 실현된 성장률의 비로, lag, 지수 성장, 이후 단계를 통합하고 두 경쟁자가 같은 교란을 겪게 한다. 이행성은 de Visser와 Lenski(2002)가 뒷받침했으며 효모의 비이행성(Paquin and Adams 1983)과 대조된다. 적합도가 높아지면 조상 콜로니 수가 적어 불확실성이 커지므로 중간 세대 경쟁자를 쓰기도 한다. 적합도 증가의 대부분은 성장률과 lag 기간의 변화로 설명된다. 12개 복제수는 배양기가 12의 배수를 수용하기 때문이라는 실용적 이유였고, 지금은 96-well plate와 로봇을 고려하겠지만 신중히 접근하겠다고 한다. 프로젝트 관리: 냉동 보관은 처음 100세대마다, 이후 500세대마다 하며 여러 바이알(현재 약 10개)로 나눈다. 시료 식별 번호를 더 의미 있게(예: REL12244 대신 LTEE/Ara-6/75) 바꾸고 싶어 하는데, 이는 UT Austin의 Barrick 연구실에 한 자리 숫자가 틀린 시료를 보낸 사건 때문이다. 시료는 재료 이전 협약(MTA) 하에 공유되며, 실수는 냉동 시료 대신 냉장 보관된 전날 배양액으로 되돌려 복구하고, 교차 오염은 영향받은 집단만 냉동 시료에서 재시작해 일부 집단이 500세대의 배수만큼 뒤처지게 된다.

추가 설계 세부: Lenski는 LTEE가 세 가지 면에서 생산적이었다고(새로운 발견, 많은 학생과 박사후연구원의 훈련, 다른 실험의 모델) 시작하며, 추상적 질문, 단순한 설계, 데이터가 나올 가능성이 높은 프로젝트를 선호하는 것은 개인적 취향이라고 밝힌다("To thine own self be true"). 1988년의 400세대 전 실험은 연속 계대가 지속 가능하고 적합도 향상이 빨리 나타남을 보였지만 한두 개 돌연변이만 고정되었다고 의심해, Michael Rose와 논의한 뒤 적합도 지형을 더 넓게 탐색하고 동일 유전형에서 집단 간 변이가 생기는 과정의 표본을 늘리기 위해 단일 공통 조상에서 더 긴 실험을 했으며, 원래 목표는 2,000세대뿐이었다. chemostat은 매일 계대가 필요 없고 성장률이 일정하며 모델링이 쉽고 병목이 없다는 장점이 있으나 비용, 운영 난이도, 오염, wall growth 때문에 배제되었다. 낮은 집단 크기(플라스크당 약 5x10^8 세포)는 유익 돌연변이가 드물면 적응을 늦출 수 있지만 400세대로 충분했고 적합도 궤적만으로 sweep이 보이는 strong-selection-weak-mutation 영역을 기대했으며, 실제로는 이 크기에서도 유익 돌연변이가 풍부했다. citrate에 대해: 조상은 혐기 조건에서도 citrate를 이용하지 못하고, 자연의 일부 호기적 Cit+ E. coli는 플라스미드 전달로 얻은 것으로 보이며(LTEE에서는 불가능), citrate는 철 chelator(ferric citrate)로 작용해 실험실 물의 철이 citrate가 있을 때만 성장을 지원한다. 다세포 생물의 선택 실험은 일부러 풍부한 공유 변이로 시작해 collateral 진화와 반복 가능한 결과 쪽으로 판을 기울이지만, LTEE는 확률적 돌연변이와 결정론적 선택 사이의 긴장을 보존한다. 돌연변이원에 반대하는 이유는 이전 실험이 합리적 기간에 적합도 향상을 보였고, clonal interference가 적응 속도를 제한하며, 돌연변이율이 높을수록 유해 부담이 커지고, 돌연변이원은 작업과 안전 문제를 더하며, passenger가 늘기 때문이다(더 많은 돌연변이가 필요하면 DNA 복구 결함 hypermutator 균주를 쓰라고 제안). 현재는 각 집단이 고유한 대립유전자를 진화시켰으므로 Ara 표지자가 오염 탐지에 덜 중요하며 해당 유전자를 시퀀싱할 수 있다. Ara 표지자는 HGT가 없다는 전제도 필요한데, 수천 세대 공존한 계통 사이에서 HGT에 의한 재조합 증거는 없다. 적합도 측정에서 다른 배지와 온도도 가끔 사용해 상관 반응과 적응의 특이성을 본다. 초기 연구(Vasi 등 1994)는 첫 2,000세대 적합도 증가의 거의 전부가 지수 성장률 증가와 lag 단축으로 설명됨을 보여, 적합도가 대체로 포도당을 둘러싼 scramble competition이라는 견해를 뒷받침한다. 냉동 보관 관리: 500세대마다(초기에는 100세대마다) 두 바이알로 나누어(현재 약 10개) 냉동하고, 시료를 반복 사용하는 연구자는 자신의 작업용 stock을 만들며, 복사본마다 고유 식별자와 중복 라벨을 붙이는 것도 좋다. 시료는 기관의 재료 이전 협약(MTA) 하에, 요청한 시료가 논문에 언급된 경우에만(60,000세대까지는 가능하고 아직 발표되지 않은 75,000세대 시료는 제외) 공유하며 받는 쪽이 배송비를 부담한다.

실수와 오염 처리: 계대 실수가 생기면 버리지 않고 냉장 보관한 전날 배양액으로 모든 집단의 계대를 반복해 냉동 일정을 맞추며, 이는 선택 조건을 약간 교란하지만 냉동-해동보다 훨씬 작다. 교차 오염이 의심되는 콜로니(arabinose 지시 배지에서 색이 틀린 콜로니)는 이제 시퀀싱으로 확인하며, 최근 사례는 대부분 Ara+ 조상에서 시작한 집단이 이후 hypermutability를 진화시켜 생긴 Ara- 콜로니라는 오경보였다.

대안 설계("후속 실험"): Lenski는 단순성이 핵심 기준이었으며 더 복잡한 설계는 수십 년간 유지하기 어려웠을 것이라고 강조하고, 그의 연구실이 다른 설계로 더 짧은 실험을 많이 수행했다고 말한다. Izutsu 등(2021)은 희석 배율을 바꿔 100배 희석이 적합도 증가 속도에 대해 거의 최적임을 보였고, de Visser 등(1999)은 희석 배율과 조상의 돌연변이율을 함께 바꿔 clonal interference 때문에 적응 속도가 돌연변이 공급보다 훨씬 느리게 증가함을 보였다. 플라스미드 매개 수평 유전자 전달은 Cooper(2007)에서 유익 돌연변이의 재조합을 가능하게 해 적응을 가속했지만, Souza 등(1997)은 K-12 공여체와 LTEE 유래 B 수여체로 속도 증가를 보지 못했다(이후 분석은 상당한 K-12 서열 도입을 확인; Maddamsetti and Lenski 2018). 그 밖의 후속 실험은 자원과 온도를 바꾸고, 온도 순응이 적합도 측정에 미치는 영향(Leroi 등 1994)을 보았으며, 분기된 LTEE 계통을 조상으로 써서 새로운 자원, 온도(Travisano 등 1995), 항생제(Card 등 2019)에 대한 적응에서 역사의 효과를 측정했고, transposon 돌연변이로 유해 돌연변이를 도입한 뒤의 보상 진화(Moore 등 2000), 초기 변이 대 새 돌연변이의 기여(Izutsu and Lenski 2022: 혼합 집단에서는 처음 약 50세대 동안 유전형 간 강한 선택이 있었으나 새 돌연변이에만 의존한 집단이 500세대에 따라잡음)를 조사했다. 이런 프로젝트는 대학원생과 박사후연구원이 LTEE에서 생긴 질문을 자기 프로젝트로 삼게 하며 새 연구실로 옮겨 이어갈 수 있다. 대부분의 진화 실험은 저렴해 시간과 상상력이 한계이므로, 진화를 주제로 하지 않는 미생물 연구실도 전장 유전체 시퀀싱을 활용해 호기심 기반 진화 실험을 해 볼 것을 권한다.

맺음말: 실험 진화는 고생물학, 계통 비교법, 자연 집단의 현장 연구를 대체하지 않고 통제된 조건에서 통계적 복제를 갖춘 심층 분석으로 보완한다. 특정 가설을 겨냥하는 실험과 달리 LTEE는 일반적이고 개방적인 질문을 다루며, 의도적으로 단순한 설계가 인적 오류를 줄이는 한편 결과는 풍부하고 미묘했다. Lenski는 모델 구축에 관한 Levins(1966)의 generality, realism, precision 틀을 빌려 LTEE가 realism보다 generality와 precision을 택했다고 논한다. 구체적 표현형과 유전적 변화는 생물과 환경에 따라 다르지만(후속 실험이 보여줌) 동역학, 반복 가능성, 표현형-게놈 연결이라는 질문은 일반적이며, 단순한 환경 덕에 적합도를 정밀하게 측정할 수 있다. 다른 종, 다양한 자원, 공간 구조가 없어 자연에 비해 현실성은 부족하며, 다른 연구자는 mesocosm이나 숙주 내 병원체 증식처럼 realism을 우선할 수 있다. 실험을 설계하기 전에 generality, realism, precision을 고려하라는 것이 그의 조언이며 "To thine own goals be true."라는 말로 맺는다.

---

## Significance in Introduction Context

- 실험 설계의 실제 사례: 복제 수, 환경, 조상 유전형, 측정 방법의 선택이 진화에 대한 결론을 어떻게 좌우하는지 보여준다.
- 평행 대 collateral 진화, 빈도 의존 선택, clonal interference, driver 대 passenger(hitchhiker) 돌연변이, 순응 대 적응 같은 집단유전학 개념을 명확히 한다.
- 냉동 보관한 "살아 있는 화석 기록"과 중립 표지자가 경쟁 기반 적합도 측정에 얼마나 유용한지 보여준다.

---

## Key References

1. **Lenski RE, Rose MR, Simpson SC, Tadler SC (1991)** — Long-term experimental evolution in *Escherichia coli*. I. Adaptation and divergence during 2,000 generations. Am Nat 138:1315-1341 — 최초의 LTEE 논문
2. **Wiser MJ, Ribeck N, Lenski RE (2013)** — Long-term dynamics of adaptation in asexual populations. Science 342:1364-1367 — power-law 적합도 궤적
3. **Blount ZD, Borland CZ, Lenski RE (2008)** — Historical contingency and the evolution of a key innovation. PNAS 105:7899-7906 — 호기적 citrate 이용
4. **Tenaillon O, et al. (2016)** — Tempo and mode of genome evolution in a 50,000-generation experiment. Nature 536:165-170 — 평행 진화, hypermutator
5. **de Visser JAGM, Lenski RE (2002)** — Long-term experimental evolution in *E. coli*. XI. Rejection of non-transitive interactions. BMC Evol Biol 2:19 — 적합도 이행성
6. **Studier FW, Daegelen P, Lenski RE, Maslov S, Kim JF (2009)** — Differences between genome sequences of *E. coli* B strains REL606 and BL21(DE3). J Mol Biol 394:653-680 — REL606의 기원
7. **Levins R (1966)** — The strategy of model building in population biology. Am Sci 54:421-431 — generality, realism, precision
8. **Izutsu M, Lenski RE (2022)** — Initial variation versus new mutations in adaptation to a novel environment. Front Ecol Evol 10:958406 — 후속 실험

---

## Future Research Directions

- 더 많은 복제를 위한 microtiter plate와 로봇 플랫폼(플라스틱, 혼합, 교차 오염 주의).
- 희석 배율, 돌연변이 공급, 수평 유전자 전달, 자원, 온도, 조상을 바꾼 호기심 기반 "후속" 실험, 통상적 모델 생물 밖의 미생물과 복잡한 환경(mesocosm, 숙주 내 증식)에서 generality와 precision 대신 realism을 얻는 실험.
- 이런 실험에서 선택 표적을 찾기 위한 전장 유전체 시퀀싱의 활용.
- Cit- 계통의 설명되지 않는 소멸과 물 품질의 역할 규명.
- 두 번째 과학 세대(UT Austin)로 이어지는 LTEE 운영과 75,000세대 시료 분석.

---

*Processed by **Claude Sonnet 5.5** (Claude Code) on 2026-11-09*
