export interface StatTerm {
  id: string;
  category: "사망" | "병상" | "재원일수" | "외래·입원" | "산과·신생아" | "부검";
  name: string;
  nameEn: string;
  definition: string;
  whyImportant: string;
  formula: string;
  numerator: string; // 분자
  denominator: string; // 분모
  unit: "%" | "일" | "회" | "명" | "‰";
  keyPoint: string; // 한 줄 암기 포인트
  comparison: string; // 헷갈리는 용어 비교
}

export interface FormulaCategory {
  type: "비율/백분율형" | "평균형" | "회전형";
  title: string;
  description: string;
  checkSteps: string[];
  commonMistakes: string[];
}

export interface InteractiveChallenge {
  id: string;
  title: string;
  scenario: string;
  givenData: Record<string, number>;
  questionText: string;
  correctAnswer: number; // 소수점 첫째자리 반올림된 값
  formulaUsed: string;
  explanation: string;
  unit: string;
}

export interface MockQuestion {
  id: string;
  type: "multiple_choice" | "unit_matching";
  stem: string;
  options?: { id: string; text: string }[];
  answer: string[]; // ['A'], ['B'] 등 또는 단위 매칭 정답
  explanation: string;
}

export const statTerms: StatTerm[] = [
  {
    id: "STAT-001",
    category: "병상",
    name: "병상이용률 (병상가동률)",
    nameEn: "Bed Occupancy Rate",
    definition: "일정 기간 동안 가동 가능한 병상 중 실제로 환자가 사용한 병상의 비율을 백분율로 나타낸 지표입니다.",
    whyImportant: "병동의 운영 효율성을 측정하고 병상 확충 또는 감축 결정을 내리는 기준이 됩니다. 너무 높으면 환자 안전 및 응급 대응이 어려워지고, 너무 낮으면 유휴 자원이 많음을 의미합니다.",
    formula: "(기간 중 총 환자일수 ÷ (가동병상수 × 기간일수)) × 100",
    numerator: "기간 중 총 환자일수 (재원환자수 누적)",
    denominator: "가동병상수 × 기간일수 (이론상 최대 가능 환자일수)",
    unit: "%",
    keyPoint: "분모에 단순히 가동병상수만 넣는 것이 아니라 '기간일수'를 곱해 '병상일수'로 일치시켜야 합니다.",
    comparison: "병상점유율(Bed Plot Rate)과 유사하나, 점유율은 특정 시점에 예약되거나 점유된 상태를 보고, 가동률은 일정 기간 동안의 누적 이용실적을 평가지표로 삼습니다."
  },
  {
    id: "STAT-002",
    category: "병상",
    name: "병상회전율",
    nameEn: "Bed Turnover Rate",
    definition: "일정 기간 동안 병상 1개당 환자가 몇 번이나 교체(퇴원)되었는가를 나타내는 지표입니다.",
    whyImportant: "병상이 얼마나 활발하게 순환되는지 보여주며, 급성기 병원일수록 수치가 높고 장기 요양 병원일수록 낮게 나타납니다.",
    formula: "기간 중 퇴원환자수 (사망자 포함) ÷ 가동병상수",
    numerator: "기간 중 총 퇴원환자수 (사망 포함)",
    denominator: "가동병상수",
    unit: "회",
    keyPoint: "분모에 기간일수가 들어가지 않으며, 분자에는 '입원'이 아닌 '퇴원' 환자수를 사용합니다.",
    comparison: "평균재원일수가 짧을수록, 그리고 병상이용률이 높을수록 병상회전율은 올라갑니다."
  },
  {
    id: "STAT-003",
    category: "병상",
    name: "병상회전간격",
    nameEn: "Bed Turnover Interval",
    definition: "한 환자가 퇴원한 후 다음 환자가 입원할 때까지 병상이 비어 있는 평균 일수입니다.",
    whyImportant: "병상 순환 과정에서의 낭비 시간이나 비효율을 진단합니다. 수치가 0에 가까울수록 공백 없이 병상이 운영됨을 의미합니다.",
    formula: "((가동병상수 × 기간일수) - 기간 중 총 환자일수) ÷ 퇴원환자수",
    numerator: "(가동병상수 × 기간일수) - 기간 중 총 환자일수",
    denominator: "퇴원환자수",
    unit: "일",
    keyPoint: "분자는 '유휴 병상일수(비어 있는 병상일 수의 총합)'이며, 이를 퇴원환자수로 나눕니다.",
    comparison: "공식 유도: (가동병상수 / 퇴원환자수) × (기간일수 - 평균재원일수)로도 동일하게 계산할 수 있습니다."
  },
  {
    id: "STAT-004",
    category: "재원일수",
    name: "일일평균재원환자수",
    nameEn: "Average Daily Census",
    definition: "하루 평균 병원에 입원해 있는 환자 수입니다.",
    whyImportant: "일일 간호 요구량 산정, 의료 소모품 예측, 식사 제공량 등 병원의 일상적인 가동 능력을 파악하는 기초 자료가 됩니다.",
    formula: "기간 중 총 환자일수 ÷ 기간일수",
    numerator: "기간 중 총 환자일수 (재원환자 수 누적)",
    denominator: "기간일수",
    unit: "명",
    keyPoint: "일정 기간 동안의 전체 환자일수(Service Days)를 해당 기간의 날짜 수로 나눕니다.",
    comparison: "일일평균외래환자수는 외래 연인원을 기간일수로 나누며, 입원 센서스와는 구분됩니다."
  },
  {
    id: "STAT-005",
    category: "재원일수",
    name: "평균재원일수",
    nameEn: "Average Length of Stay (ALOS)",
    definition: "퇴원한 환자 1명이 평균적으로 며칠 동안 입원해 있었를 나타내는 지표입니다.",
    whyImportant: "의료 서비스의 효율성을 나타내며, 포괄수가제(DRG) 환경에서 병원 진료비 관리와 병상 활용 극대화를 위해 단축시키고자 노력하는 대표 지표입니다.",
    formula: "기간 중 퇴원환자의 총 재원일수 ÷ 퇴원환자수",
    numerator: "기간 중 퇴원환자들의 총 재원일수 합",
    denominator: "기간 중 퇴원환자수 (사망 포함)",
    unit: "일",
    keyPoint: "분모와 분자 모두 반드시 '퇴원환자' 기준이어야 합니다 (재원환자 기준이 아님).",
    comparison: "총 재원일수는 입원일부터 퇴원일까지의 차이를 구한 것이며, 당일 입퇴원은 1일로 계산합니다."
  },
  {
    id: "STAT-006",
    category: "사망",
    name: "조사망률",
    nameEn: "Gross Mortality (Death) Rate",
    definition: "특정 기간 동안의 총 퇴원환자 중 사망하여 퇴원한 환자의 비율입니다.",
    whyImportant: "병원 전체의 사망 발생 비율을 거시적으로 파악하는 기본 지표입니다.",
    formula: "(기간 중 총 사망수 ÷ 총 퇴원환자수) × 100",
    numerator: "기간 중 총 사망자 수 (신생아 사망 포함)",
    denominator: "기간 중 총 퇴원환자 수 (사망자 포함)",
    unit: "%",
    keyPoint: "분모의 '총 퇴원환자수'에는 사망한 상태로 퇴원한 환도 반드시 포함되어야 합니다.",
    comparison: "순사망률과 달리 입원 후 48시간 이내에 발생한 자연사나 불가항력적 사망을 구분하지 않고 합산합니다."
  },
  {
    id: "STAT-007",
    category: "사망",
    name: "순사망률",
    nameEn: "Net Mortality (Death) Rate",
    definition: "입원 후 48시간 이상 경과한 환자들 중에서 발생한 사망률로, 병원의 불가항력적 요인을 최소화한 지표입니다.",
    whyImportant: "병원 진료의 질을 보다 공정하게 평가하기 위해 입원 극초기(48시간 미만) 사망 건을 제외하고 산출합니다.",
    formula: "(48시간 이상 사망수 ÷ (총 퇴원환자수 - 48시간 미만 사망수)) × 100",
    numerator: "기간 중 입원 48시간 이후 사망수",
    denominator: "총 퇴원환자수 - 입원 48시간 미만 사망수",
    unit: "%",
    keyPoint: "분모와 분자 모두에서 '48시간 미만 사망수'를 제외해 주어야 합니다.",
    comparison: "조사망률에 비해 분모와 분자가 모두 작아지며, 통상적으로 조사망률보다 약간 낮게 계산됩니다."
  },
  {
    id: "STAT-008",
    category: "사망",
    name: "신생아사망률",
    nameEn: "Newborn Mortality Rate",
    definition: "특정 기간 퇴원한 신생아 중 사망한 신생아의 비율입니다.",
    whyImportant: "신생아실 및 소아청소년과 진료의 질적 수준을 나타내는 대표 지표입니다.",
    formula: "(신생아 사망수 ÷ 신생아 총 퇴원환자수) × 100",
    numerator: "기간 중 신생아실 사망수",
    denominator: "기간 중 신생아 총 퇴원환자수 (사망 포함)",
    unit: "%",
    keyPoint: "소아과 병동에 입원한 소아가 아닌, 신생아실(정상아 및 미숙아실)에 입원한 신생아만을 대상으로 합니다.",
    comparison: "태아사망률(Fetal Death Rate)은 아직 태어나지 않고 자궁 내에서 사망한 경우이므로 분모가 다릅니다."
  },
  {
    id: "STAT-009",
    category: "사망",
    name: "수술사망률",
    nameEn: "Postoperative Mortality Rate",
    definition: "수술을 받은 전체 환자 중 수술 후 특정 기간(통상 10일 이내) 내에 사망한 환자의 비율입니다.",
    whyImportant: "외과적 수술의 안전성 및 수술 후 관리(회복실, 중환자실)의 적절성을 평가하는 데 중요합니다.",
    formula: "(수술 후 10일 이내 사망수 ÷ 총 수술환자수) × 100",
    numerator: "수술 후 10일 이내 발생한 사망자 수",
    denominator: "기간 중 수술을 받은 실인원 또는 총 수술 건수",
    unit: "%",
    keyPoint: "사망 원인이 수술 자체이든 합병증이든 상관없이 수술 후 10일 이내 사망하면 포함시킵니다.",
    comparison: "마취사망률은 마취제가 직접적 원인이 되어 사망한 경우만을 분자로 잡습니다."
  },
  {
    id: "STAT-010",
    category: "사망",
    name: "모성사망률",
    nameEn: "Maternal Mortality Rate",
    definition: "임신, 분만, 산욕기 합병증으로 인해 사망한 모성 환자의 비율입니다.",
    whyImportant: "산부인과 의료의 수준 및 보건 관리 지표로 활용됩니다.",
    formula: "(모성 사망수 ÷ 모성 퇴원환자수) × 100",
    numerator: "임신, 분만, 산욕기 합병증에 의한 사망수",
    denominator: "임신, 분만, 산욕기로 입원했다가 퇴원한 총 환자수",
    unit: "%",
    keyPoint: "임상 통계에서는 모성 퇴원환자수를 분모로 삼으나, 인구학적 통계(모성사망비)는 출생아 수 10만 명당 사망 수로 계산하므로 구별해야 합니다.",
    comparison: "태아사망이나 신생아사망은 아기의 사망이며, 모성사망은 어머니의 사망을 뜻합니다."
  },
  {
    id: "STAT-011",
    category: "사망",
    name: "사망지수 (사망퇴원율)",
    nameEn: "Death Index",
    definition: "전체 퇴원 결과 중 사망이 차지하는 상대적인 비율 또는 지표입니다.",
    whyImportant: "치료 성과를 정량화하고 타 병원과의 성과 비교 시 보조적인 수치로 이용합니다.",
    formula: "(사망퇴원자 수 ÷ 총 퇴원자 수) × 100",
    numerator: "기간 중 사망퇴원자 수",
    denominator: "기간 중 총 퇴원자 수",
    unit: "%",
    keyPoint: "사망률과 원리는 같으나 '지수'라는 표현을 사용하여 결과 지향적인 의미를 강조합니다.",
    comparison: "질병별 사망지수 등으로 세분화하여 치료의 위험도를 평가하기도 합니다."
  },
  {
    id: "STAT-012",
    category: "산과·신생아",
    name: "제왕절개율",
    nameEn: "Cesarean Section Rate",
    definition: "전체 분만 건수 중 제왕절개 수술을 통해 분만한 비율입니다.",
    whyImportant: "의학적 필요성 대비 과도한 제왕절개 수술이 이루어지는지 모니터링하여 자연분만을 권장하는 정책적 지표입니다.",
    formula: "(제왕절개분만수 ÷ 총 분만수) × 100",
    numerator: "제왕절개 수술 분만 건수",
    denominator: "총 분만 건수 (자연분만 + 제왕절개 + 흡입/겸자분만 등)",
    unit: "%",
    keyPoint: "분모는 임산부의 수가 아니라 분만 건수 기준입니다 (쌍둥이 분만 시 분만 건수 계산에 유의).",
    comparison: "자연분만율 = 100 - 제왕절개율 - 질식수술분만율"
  },
  {
    id: "STAT-013",
    category: "산과·신생아",
    name: "태아사망률 (사산율)",
    nameEn: "Fetal Death Rate",
    definition: "임신 20주 이상 경과한 태아가 출생 전에 자궁 내에서 사망하여 분만된 비율입니다.",
    whyImportant: "임산부 산전 관리 품질 및 태아 건강 상태 지표로 중요합니다.",
    formula: "(태아사망수 ÷ (총 분만수 + 태아사망수)) × 100",
    numerator: "자궁 내 사망한 태아 수 (사산아 수)",
    denominator: "총 분만수 (산 채로 태어난 신생아 수) + 태아사망수",
    unit: "%",
    keyPoint: "분모에 태아사망수(사산)를 더해주어야 전체 임신 종결 건수가 부합하게 됩니다.",
    comparison: "신생아사망률은 일단 살아서 태어난(Live birth) 아기가 퇴원 전에 사망한 것이므로 분모에 사산아는 제외됩니다."
  },
  {
    id: "STAT-014",
    category: "외래·입원",
    name: "일일평균외래환자수",
    nameEn: "Average Daily Outpatients",
    definition: "특정 기간 동안 하루 평균 외래 진료를 받은 환자의 수입니다.",
    whyImportant: "외래 대기 시간 분석, 외래 진료실 배치, 외래 수납 창구 인력 계획에 필수적인 지표입니다.",
    formula: "기간 중 총 외래환자수 (연인원) ÷ 기간일수",
    numerator: "기간 중 총 외래환자수 (누적 방문 횟수)",
    denominator: "기간일수",
    unit: "명",
    keyPoint: "외래 실인원(Unique patients)과 연인원(Cumulative count)을 구별하여 대입해야 합니다.",
    comparison: "외래 실인원은 중복을 제외하고 병원을 찾은 순수한 환자의 머릿수이며, 연인원은 방문할 때마다 누적한 수치입니다."
  },
  {
    id: "STAT-015",
    category: "부검",
    name: "조부검률",
    nameEn: "Gross Autopsy Rate",
    definition: "특정 기간 동안 병원 내 총 사망자 중 병원 보건의료진에 의해 부검이 행해진 비율입니다.",
    whyImportant: "임상 진단의 정확성 평가 및 의학 연구 활성화를 측정하는 학술 지표입니다.",
    formula: "(총 부검수 ÷ 총 사망자수) × 100",
    numerator: "기간 중 병원에서 행해진 총 부검수",
    denominator: "기간 중 병원 내 총 사망자수",
    unit: "%",
    keyPoint: "분모는 법의학 부검이나 미부검 전출 사망 건수 등을 구분하지 않은 순수 총 사망자수입니다.",
    comparison: "순부검률과 달리 법의학적 강제 부검 등으로 부검을 할 수 없었던 사례를 분모에서 제외하지 않습니다."
  },
  {
    id: "STAT-016",
    category: "부검",
    name: "순부검률",
    nameEn: "Net Autopsy Rate",
    definition: "부검을 할 수 없는 상황(예: 유족 거부, 법의학 시신 전출 등)의 사망자를 제외하고 산출하는 실제 부검 비율입니다.",
    whyImportant: "병원이 부검 동의를 얻을 수 있고 부검을 수행할 수 있었던 실질적 가능 범위 대비 부검율을 나타냅니다.",
    formula: "(총 부검수 ÷ (총 사망자수 - 부검 불가능/제외 사망수)) × 100",
    numerator: "기간 중 행해진 총 부검수",
    denominator: "총 사망자수 - 부검 불가능/제외 사망수 (법의학 사건 등으로 전출된 시신 등)",
    unit: "%",
    keyPoint: "분모에서 부검 권한이나 가능성이 없는 시신 수를 반드시 제외해 줍니다.",
    comparison: "조부검률에 비해 분모가 작아지므로 수치는 더 높게 산출됩니다."
  },
  {
    id: "STAT-017",
    category: "부검",
    name: "병원부검률",
    nameEn: "Hospital Autopsy Rate",
    definition: "병원에 소속되어 치료받던 환자(입원 및 외래 환자 포함)가 병원 외부에서 사망하였으나 병원으로 이송하여 부검한 경우까지 포함한 포괄적 부검율입니다.",
    whyImportant: "병원의 학문적 영향력 및 원외 사망 환자에 대한 임상적 검증 비율을 통합 평가합니다.",
    formula: "((병원 내 부검수 + 원외 사망자 이송 부검수) ÷ (병원 내 사망수 + 원외 이송 사망수)) × 100",
    numerator: "병원 내부 부검수 + 외부 사망자 중 병원에서 부검한 수",
    denominator: "병원 내부 사망자수 + 외부 사망자 중 병원으로 이송된 수",
    unit: "%",
    keyPoint: "분모와 분자 모두에 '이송(진료받던 원외 환자)' 케이스를 더해 주어야 합니다.",
    comparison: "순부검률이나 조부검률은 오직 병원 내부 입원 사망만을 기준으로 삼는 경우가 대부분입니다."
  },
  {
    id: "STAT-018",
    category: "사망",
    name: "영아사망률",
    nameEn: "Infant Mortality Rate",
    definition: "태어난 지 1년(365일) 미만에 사망한 영아의 비율로, 대개 인구 1,000명당의 천분율(‰)로 나타냅니다.",
    whyImportant: "한 국가나 지역사회의 보건위생 및 환경 위생 수준을 대표하는 가장 민감하고 중요한 보건 지표입니다.",
    formula: "(1세 미만 영아 사망수 ÷ 특정 기간 출생아 수) × 1,000",
    numerator: "연간 생후 1년 미만 사망 영아수",
    denominator: "연간 태어난 총 활생아수 (살아서 태어난 아기)",
    unit: "‰",
    keyPoint: "백분율(%)이 아닌 천분율(‰, permil) 단위를 사용하며 곱하기 1,000을 해 줍니다.",
    comparison: "신생아기사망률(생후 28일 미만)과 비교하여 영아기 전체(1년 미만)를 범위로 삼습니다."
  },
  {
    id: "STAT-019",
    category: "사망",
    name: "신생아기사망률",
    nameEn: "Neonatal Mortality Rate",
    definition: "살아서 태어난 아기 중 생후 28일 미만에 사망한 신생아의 비율입니다.",
    whyImportant: "생후 극초기 사망 요인을 평가하며, 모체 요인 및 분만 시 의료적 처치 품질과 연관이 깊습니다.",
    formula: "(생후 28일 미만 사망수 ÷ 활생아수) × 1,000",
    numerator: "생후 28일 미만 사망아 수",
    denominator: "살아서 태어난 총 활생아수",
    unit: "‰",
    keyPoint: "영아사망률과 마찬가지로 천분율(‰) 단위를 주로 사용하여 1,000을 곱합니다.",
    comparison: "생후 28일 이후부터 1년 미만 사이에 사망하는 후기 신생아 및 영아 사망 요인과 생리적 원인이 다릅니다."
  },
  {
    id: "STAT-020",
    category: "사망",
    name: "주산기사망률",
    nameEn: "Perinatal Mortality Rate",
    definition: "임신 28주 이상의 태아사망(사산) 및 출생 후 7일 미만의 초생아 사망을 합산하여 산출하는 지표입니다.",
    whyImportant: "임신 후기와 분만 전후의 태아 및 아기의 생존 능력을 측정하는 종합 산부인과 지표입니다.",
    formula: "((임신 28주 이상 태아사망 + 생후 7일 미만 초생아사망) ÷ (총 활생아수 + 임신 28주 이상 태아사망수)) × 1,000",
    numerator: "임신 28주 이상 사산아 수 + 생후 7일 미만 사망아 수",
    denominator: "살아서 태어난 총 활생아수 + 임신 28주 이상 사산아 수",
    unit: "‰",
    keyPoint: "분모에 사산아(태아사망) 수를 활생아 수와 함께 합산해야 분모/분자 매칭이 이루어집니다.",
    comparison: "단순 신생아사망률은 사산아를 분모에 넣지 않지만, 주산기 통계는 태아사망을 분모/분자 모두에 포함합니다."
  }
];

export const formulaCategories: FormulaCategory[] = [
  {
    type: "비율/백분율형",
    title: "병상이용률, 사망률, 제왕절개율 등 (%)",
    description: "전체 가용 자원이나 전체 대상자 중 실제 타깃 사건이 발생한 비율을 구합니다. 반드시 곱하기 100을 하여 % 단위를 만듭니다.",
    checkSteps: [
      "구하고자 하는 비율의 분모(전체 대상)와 분자(사건 수)를 정확히 필터링합니다.",
      "예: 병상이용률의 분모는 '가동병상수 × 기간일수'라는 총 가동 가능 병상일수여야 합니다.",
      "사망률 계산 시 분모인 '총 퇴원환자수'에 사망퇴원자 본인이 포함되어 있는지 확인합니다."
    ],
    commonMistakes: [
      "백분율(% ) 계산에서 100을 곱하지 않고 소수로만 적는 실수",
      "병상이용률 계산 시 분모에 '일수'를 곱하지 않고 가동병상수만 넣는 실수",
      "순사망률을 계산할 때 분모에서만 48시간 미만 사망을 빼고 분자에서는 빼먹는 실수"
    ]
  },
  {
    type: "평균형",
    title: "평균재원일수, 일일평균재원환자수 등 (일, 명)",
    description: "총합을 개체 수나 일수로 나누어 1단위당 평균값을 구합니다.",
    checkSteps: [
      "나누는 기준(분모)이 무엇인지 확인합니다. 평균재원일수는 '퇴원환자수'로 나누고, 일일평균재원환자수는 '기간일수'로 나눕니다.",
      "단위를 '일' 혹은 '명'으로 명확히 표기합니다."
    ],
    commonMistakes: [
      "평균재원일수 계산 시 분모에 '퇴원환자수' 대신 '입원환자수'나 '재원환자수'를 대입하는 실수",
      "일일평균재원환자수와 평균재원일수의 분자(환자일수 vs 퇴원환자재원일수)를 혼동하여 대입하는 경우"
    ]
  },
  {
    type: "회전형",
    title: "병상회전율, 병상회전간격 (회, 일)",
    description: "병상 자원의 효율성과 회전 속도를 보여줍니다. 순환 패턴을 측정합니다.",
    checkSteps: [
      "회전율은 '가동병상 1개당 퇴원환자가 몇 명 거쳐갔는가(회)'이므로 '퇴원환자수 ÷ 가동병상수'입니다.",
      "회전간격은 '비어 있는 날의 총합 ÷ 퇴원환자수(일)'입니다."
    ],
    commonMistakes: [
      "회전율 계산 시 분자에 퇴원이 아닌 입원환자수를 대입하는 경우",
      "회전간격 공식에서 분모에 병상수를 대입하거나 분자에서 빼기 순서를 헷갈리는 경우"
    ]
  }
];

export const interactiveChallenges: InteractiveChallenge[] = [
  {
    id: "CHALLENGE-001",
    title: "병상이용률 구하기",
    scenario: "A 병원은 가동병상수가 200개입니다. 6월 한 달(30일) 동안 총 환자일수(누적 재원일수)는 4,800일이었습니다.",
    givenData: { 가동병상수: 200, 기간일수: 30, 총환자일수: 4800 },
    questionText: "이 병원의 6월 병상이용률은 몇 % 입니까? (소수점 첫째자리에서 반올림하여 정수로 입력)",
    correctAnswer: 80,
    formulaUsed: "(총 환자일수 ÷ (가동병상수 × 기간일수)) × 100",
    explanation: "분모 = 200개 × 30일 = 6,000병상일. 분자 = 4,800일. 따라서 (4,800 ÷ 6,000) × 100 = 80% 입니다.",
    unit: "%"
  },
  {
    id: "CHALLENGE-002",
    title: "평균재원일수 구하기",
    scenario: "7월 한 달 동안 퇴원한 환자는 총 150명(사망자 5명 포함)이고, 이 퇴원환자들의 총 재원일수 합은 1,200일이었습니다.",
    givenData: { 퇴원환자수: 150, 총재원일수: 1200 },
    questionText: "7월의 평균재원일수는 며칠입니까? (소수점 둘째자리에서 반올림하여 첫째자리까지 입력)",
    correctAnswer: 8,
    formulaUsed: "총 재원일수 ÷ 퇴원환자수",
    explanation: "분자 = 1,200일. 분모 = 150명. 따라서 1,200 ÷ 150 = 8.0일(정수 8) 입니다. 분모에 사망자를 제외하지 않고 전체 퇴원환자 150을 그대로 대입해야 합니다.",
    unit: "일"
  },
  {
    id: "CHALLENGE-003",
    title: "순사망률 계산하기",
    scenario: "어떤 병원에서 한 달 동안 총 퇴원환자수는 500명이었습니다. 이 중 입원 중 사망자는 총 10명이었으며, 48시간 미만 사망자는 4명, 48시간 이상 사망자는 6명이었습니다.",
    givenData: { 총퇴원환자수: 500, 총사망자수: 10, 미만사망: 4, 이상사망: 6 },
    questionText: "이 병원의 순사망률(Net Mortality Rate)은 몇 % 입니까? (소수점 둘째자리에서 반올림하여 첫째자리까지 입력)",
    correctAnswer: 1.2,
    formulaUsed: "(48시간 이상 사망수 ÷ (총 퇴원환자수 - 48시간 미만 사망수)) × 100",
    explanation: "분자 = 48시간 이상 사망자수 = 6명. 분모 = 총 퇴원환자수(500) - 48시간 미만 사망자수(4) = 496명. 계산: (6 ÷ 496) × 100 ≒ 1.209% . 따라서 소수점 둘째자리에서 반올림하면 1.2% 입니다.",
    unit: "%"
  },
  {
    id: "CHALLENGE-004",
    title: "병상회전간격 구하기",
    scenario: "가동병상수가 100개인 병원의 5월(31일) 총 환자일수는 2,480일이었고, 이 기간 동안 퇴원환자는 총 200명이었습니다.",
    givenData: { 가동병상수: 100, 기간일수: 31, total_patient_days: 2480, 퇴원환자수: 200 },
    questionText: "이 병원의 병상회전간격은 며칠입니까? (소수점 둘째자리에서 반올림하여 첫째자리까지 입력)",
    correctAnswer: 3.1,
    formulaUsed: "((가동병상수 × 기간일수) - 총 환자일수) ÷ 퇴원환자수",
    explanation: "총 가능 병상일 = 100개 × 31일 = 3,100일. 실제 사용 환자일 = 2,480일. 유휴 병상일(비어있던 날의 합) = 3,100 - 2,480 = 620일. 병상회전간격 = 620 ÷ 200 = 3.1일 입니다.",
    unit: "일"
  },
  {
    id: "CHALLENGE-005",
    title: "순부검률 구하기",
    scenario: "특정 달에 병원 내 사망자는 총 40명이었습니다. 이 중 검사나 이송 등으로 부검이 불가능한 법의학 사건 시신이 10구 전출되었고, 실제로 병원 내에서 부검이 집도된 시신은 9구였습니다.",
    givenData: { 총사망자: 40, 제외시신: 10, 부검수: 9 },
    questionText: "이 병원의 이 달 순부검률(Net Autopsy Rate)은 몇 % 입니까? (소수점 첫째자리에서 반올림하여 정수로 입력)",
    correctAnswer: 30,
    formulaUsed: "(총 부검수 ÷ (총 사망자수 - 부검제외시신수)) × 100",
    explanation: "분자 = 총 부검수 = 9구. 분모 = 총 사망자수(40) - 제외시신수(10) = 30명. 따라서 (9 ÷ 30) × 100 = 30% 입니다.",
    unit: "%"
  },
  {
    id: "CHALLENGE-006",
    title: "제왕절개율 계산하기",
    scenario: "B 산부인과 병원의 이번 달 분만 실적은 다음과 같습니다: 자연분만 160건, 제왕절개수술 분만 80건, 흡입분만 10건.",
    givenData: { 자연분만: 160, 제왕절개: 80, 흡입분만: 10 },
    questionText: "이 산부인과의 이번 달 제왕절개율은 몇 % 입니까? (소수점 둘째자리에서 반올림하여 첫째자리까지 입력)",
    correctAnswer: 32,
    formulaUsed: "(제왕절개분만수 ÷ 총 분만수) × 100",
    explanation: "총 분만 건수 = 160(자연) + 80(제왕) + 10(흡입) = 250건. 제왕절개율 = (80 ÷ 250) × 100 = 32.0% 입니다. (정수 32 입력)",
    unit: "%"
  },
  {
    id: "CHALLENGE-007",
    title: "일일평균외래환자수 구하기",
    scenario: "종합병원의 10월 한 달(31일) 동안 외래 환자 연인원(총 방문수)은 15,500명이었습니다.",
    givenData: { 연인원: 15500, 기간일수: 31 },
    questionText: "이 병원의 10월 일일평균외래환자수는 몇 명입니까? (정수로 입력)",
    correctAnswer: 500,
    formulaUsed: "외래환자 연인원 ÷ 기간일수",
    explanation: "분자 = 15,500명. 분모 = 31일. 따라서 15,500 ÷ 31 = 500명 입니다.",
    unit: "명"
  },
  {
    id: "CHALLENGE-008",
    title: "주산기사망률 구하기",
    scenario: "어느 지역의 1년간 통계입니다. 살아서 태어난 활생아수는 9,800명이고, 임신 28주 이상의 사산아(태아사망) 수는 200명이었으며, 생후 7일 미만의 사망아 수는 50명이었습니다.",
    givenData: { 활생아: 9800, 사산아: 200, 초생아사망: 50 },
    questionText: "이 지역의 주산기사망률(Perinatal Mortality Rate)은 천분율(‰) 기준으로 얼마입니까? (소수점 둘째자리에서 반올림하여 첫째자리까지 입력)",
    correctAnswer: 25,
    formulaUsed: "((사산아수 + 초생아사망수) ÷ (활생아수 + 사산아수)) × 1,000",
    explanation: "분자 = 사산아(200) + 초생아사망(50) = 250명. 분모 = 활생아(9,800) + 사산아(200) = 10,000명. 주산기사망률 = (250 ÷ 10,000) × 1,000 = 25.0‰ 입니다. (정수 25 입력)",
    unit: "‰"
  }
];

export const mockQuestions: MockQuestion[] = [
  {
    id: "MOCK-STAT-001",
    type: "multiple_choice",
    stem: "다음 중 병상이용률(Bed Occupancy Rate)의 계산을 위해 반드시 파악해야 하는 세 가지 기본 요소로 가장 적절한 것은?",
    options: [
      { id: "A", text: "가동병상수, 기간 중 입원환자수, 기간일수" },
      { id: "B", text: "가동병상수, 기간 중 총 환자일수, 기간일수" },
      { id: "C", text: "가동병상수, 기간 중 퇴원환자수, 평균재원일수" },
      { id: "D", text: "허가병상수, 일일평균재원환자수, 퇴원환자의 총 재원일수" }
    ],
    answer: ["B"],
    explanation: "병상이용률의 공식은 (기간 중 총 환자일수 ÷ (가동병상수 × 기간일수)) × 100 입니다. 따라서 가동병상수, 총 환자일수, 기간일수가 필수적으로 필요합니다. 입원환자수나 허가병상수는 공식에 직접 사용되지 않습니다."
  },
  {
    id: "MOCK-STAT-002",
    type: "multiple_choice",
    stem: "A 종합병원의 10월(31일) 중 가동병상수가 300개이고 일일평균재원환자수가 240명일 때, 10월 한 달 동안의 병상이용률은 몇 %인가?",
    options: [
      { id: "A", text: "75%" },
      { id: "B", text: "80%" },
      { id: "C", text: "85%" },
      { id: "D", text: "90%" }
    ],
    answer: ["B"],
    explanation: "일일평균재원환자수(240명) = 총 환자일수 ÷ 31일 이므로, 10월 총 환자일수 = 240명 × 31일 = 7,440일입니다. 병상이용률 = (7,440 ÷ (300 × 31)) × 100 = (240 ÷ 300) × 100 = 80% 입니다."
  },
  {
    id: "MOCK-STAT-003",
    type: "multiple_choice",
    stem: "퇴원환자 기준의 평균재원일수(ALOS)를 구할 때 분모에 대입해야 하는 값은 무엇인가?",
    options: [
      { id: "A", text: "기간 중 입원환자수" },
      { id: "B", text: "기간 중 퇴원환자수 (사망자 제외)" },
      { id: "C", text: "기간 중 퇴원환자수 (사망자 포함)" },
      { id: "D", text: "일일평균재원환자수" }
    ],
    answer: ["C"],
    explanation: "평균재원일수는 퇴원 시점 기준의 완성된 재원일수를 기반으로 평가하므로, 분모에는 '사망자를 포함한 총 퇴원환자수'를 사용합니다."
  },
  {
    id: "MOCK-STAT-004",
    type: "multiple_choice",
    stem: "병원 사망률 지표 중 '순사망률(Net Mortality Rate)'을 산출할 때, 조사망률(Gross Mortality Rate) 공식에서 분모와 분자로부터 각각 제외하는 환자는?",
    options: [
      { id: "A", text: "입원 후 24시간 이내 사망환자" },
      { id: "B", text: "입원 후 48시간 이내 사망환자" },
      { id: "C", text: "의사의 지시 없이 퇴원(자가퇴원)한 환자" },
      { id: "D", text: "타 병원으로 전원된 환자" }
    ],
    answer: ["B"],
    explanation: "순사망률은 병원에 내원 후 치료 효과를 보기 전에 사망한 48시간 미만 사망환자를 불가항력 요인으로 판단하여 분모와 분자 모두에서 공제하고 계산합니다."
  },
  {
    id: "MOCK-STAT-005",
    type: "multiple_choice",
    stem: "태아사망률(Fetal Death Rate, 사산율)을 계산할 때 분모의 산식으로 가장 옳은 것은?",
    options: [
      { id: "A", text: "살아서 태어난 신생아수 + 태아사망수" },
      { id: "B", text: "살아서 태어난 신생아수 - 태아사망수" },
      { id: "C", text: "총 퇴원환자수 + 태아사망수" },
      { id: "D", text: "정상아로 출생하여 퇴원한 신생아수" }
    ],
    answer: ["A"],
    explanation: "태아사망률 계산 시 분모는 '총 분만수(살아서 태어난 아기수) + 태아사망수'로 하여 전체 임신 종결 건수를 기준으로 삼아야 합니다."
  },
  {
    id: "MOCK-STAT-006",
    type: "multiple_choice",
    stem: "병상회전율이 높아지는 상황에 대한 설명으로 옳은 것은?",
    options: [
      { id: "A", text: "평균재원일수가 길어질 때" },
      { id: "B", text: "동일 병상에서 퇴원환자수가 감소할 때" },
      { id: "C", text: "병상이용률은 일정하고 평균재원일수가 짧아질 때" },
      { id: "D", text: "가동병상수가 대폭 증가하고 퇴원환자수는 일정할 때" }
    ],
    answer: ["C"],
    explanation: "병상회전율 = 퇴원환자수 ÷ 가동병상수 입니다. 평균재원일수가 짧아질수록 동일 가동병상에서 더 많은 환자가 순환하여 퇴원할 수 있으므로 병상회전율이 올라가게 됩니다."
  },
  {
    id: "MOCK-STAT-007",
    type: "multiple_choice",
    stem: "수술사망률을 계산할 때 분자에 들어가는 사망 기준 기간은 수술 후 며칠 이내인가?",
    options: [
      { id: "A", text: "24시간 이내" },
      { id: "B", text: "48시간 이내" },
      { id: "C", text: "7일 이내" },
      { id: "D", text: "10일 이내" }
    ],
    answer: ["D"],
    explanation: "수술사망률의 임상 통계 기준은 수술을 받은 환자가 '수술 후 10일 이내'에 사망한 경우를 분자에 포함시킵니다."
  },
  {
    id: "MOCK-STAT-008",
    type: "multiple_choice",
    stem: "병상가동률이 100%에 달할 때의 한계나 문제점으로 볼 수 없는 것은?",
    options: [
      { id: "A", text: "신규 응급환자 수용 능력 저하" },
      { id: "B", text: "병동의 감염 관리 및 환자 위생 위험 증가" },
      { id: "C", text: "병원 자원의 비효율적인 유휴 부담 증가" },
      { id: "D", text: "의료진의 업무 과다로 인한 환자 안전 위험" }
    ],
    answer: ["C"],
    explanation: "가동률이 100% 라는 것은 유휴 자원이 전혀 없이 풀가동 중이라는 뜻이므로 유휴 부담 증가와는 거리가 멉니다. 오히려 응급 대처 저하, 감염 위험, 업무 과다 등이 한계로 지적됩니다."
  },
  {
    id: "MOCK-STAT-009",
    type: "multiple_choice",
    stem: "어느 병동의 가동병상이 50개이며 10일 동안 총 환자일수가 450일이다. 이 병동의 병상회전간격을 계산하기 위해 분자에 와야 하는 값(유휴 병상일수)은 얼마인가?",
    options: [
      { id: "A", text: "50일" },
      { id: "B", text: "100일" },
      { id: "C", text: "450일" },
      { id: "D", text: "500일" }
    ],
    answer: ["A"],
    explanation: "이론상 최대 가능 병상일수 = 50개 × 10일 = 500일. 실제 총 환자일수 = 450일. 따라서 비어있던 유휴 병상일수(분자)는 500 - 450 = 50일 입니다."
  },
  {
    id: "MOCK-STAT-010",
    type: "multiple_choice",
    stem: "다음 중 조(Gross)사망률과 순(Net)사망률을 비교한 설명으로 가장 옳지 않은 것은?",
    options: [
      { id: "A", text: "조사망률은 시간 기준 없이 모든 사망자를 포함한다." },
      { id: "B", text: "순사망률은 입원 후 48시간 미만 사망자를 제외한다." },
      { id: "C", text: "두 공식의 분모에 들어가는 퇴원환자수 기준은 동일하다." },
      { id: "D", text: "일반적으로 순사망률이 조사망률보다 낮게 산출된다." }
    ],
    answer: ["C"],
    explanation: "조사망률의 분모는 '총 퇴원환자수'이지만, 순사망률의 분모는 '총 퇴원환자수 - 48시간 미만 사망수'로 분모 기준이 서로 다릅니다."
  },
  {
    id: "MOCK-STAT-011",
    type: "multiple_choice",
    stem: "신생아실에 10월 중 총 80명의 신생아가 입원했다가 퇴원(사망 2명 포함)하였고, 이 중 입원 48시간 이내에 사망한 신생아가 1명, 48시간 이후 사망한 신생아가 1명이었다. 이 병원의 신생아사망률은?",
    options: [
      { id: "A", text: "1.25%" },
      { id: "B", text: "2.5%" },
      { id: "C", text: "3.75%" },
      { id: "D", text: "5.0%" }
    ],
    answer: ["B"],
    explanation: "신생아사망률 공식 = (신생아 사망수 ÷ 신생아 총 퇴원환자수) × 100 = (2명 ÷ 80명) × 100 = 2.5% 입니다. 신생아사망률은 시간 제외 구분이 적용되지 않으므로 총 2명을 계산합니다."
  },
  {
    id: "MOCK-STAT-012",
    type: "multiple_choice",
    stem: "평균재원일수가 극단적으로 증가할 때 병원에 미치는 경영학적 영향으로 가장 적절한 것은?",
    options: [
      { id: "A", text: "동일 병상 기준 환자 회전수가 증가한다." },
      { id: "B", text: "신규 환자의 입원이 쉬워져 가동률이 적정해진다." },
      { id: "C", text: "포괄수가제(DRG) 적용 환자의 경우 수익성이 저하된다." },
      { id: "D", text: "병상당 관리 비용이 획기적으로 감소한다." }
    ],
    answer: ["C"],
    explanation: "평균재원일수가 길어지면 회전율이 떨어지고 신규 환자 수용도가 저하됩니다. 특히 정액 지불제인 포괄수가제(DRG) 적용 환자는 입원 일수가 길어질수록 병원 진료비 대비 원가 부담이 커져 수익성이 크게 저하됩니다."
  },
  {
    id: "MOCK-STAT-013",
    type: "multiple_choice",
    stem: "어느 병원의 분만 실적이 다음과 같다. 자연분만 120건, 제왕절개분만 60건, 겸자분만 20건. 이 병원의 제왕절개율은 몇 %인가?",
    options: [
      { id: "A", text: "30%" },
      { id: "B", text: "33.3%" },
      { id: "C", text: "40%" },
      { id: "D", text: "50%" }
    ],
    answer: ["A"],
    explanation: "총 분만 건수 = 자연분만(120) + 제왕절개(60) + 겸자분만(20) = 200건. 제왕절개율 = (60 ÷ 200) × 100 = 30% 입니다."
  },
  {
    id: "MOCK-STAT-014",
    type: "multiple_choice",
    stem: "특정 지표를 한 문장으로 정의하고자 한다. '퇴원한 결과 중에서 사망으로 끝난 환자들의 상대적인 비율을 나타내는 지표'는 무엇인가?",
    options: [
      { id: "A", text: "순사망률" },
      { id: "B", text: "수술사망률" },
      { id: "C", text: "사망지수" },
      { id: "D", text: "모성사망비" }
    ],
    answer: ["C"],
    explanation: "사망지수는 전체 퇴원 결과 중 사망퇴원자가 차지하는 상대적 집중 크기를 백분율로 보여주는 지표의 한국어 직관 정의입니다."
  },
  {
    id: "MOCK-STAT-015",
    type: "multiple_choice",
    stem: "병원 통계 문제를 풀 때 가장 흔히 범하는 계산 실수와 그 방지책의 설명으로 가장 적절하지 않은 것은?",
    options: [
      { id: "A", text: "비율형 공식에서는 최종 결과값에 반드시 100을 곱해 단위를 맞춘다." },
      { id: "B", text: "병상이용률 계산 시 분모의 가동병상수에 일수를 빼먹지 않도록 검증한다." },
      { id: "C", text: "평균재원일수의 분모에는 입원환자수와 재원환자수를 곱해 대입한다." },
      { id: "D", text: "사망률 계산에서 분모에 사망자를 포함하여 총 퇴원수로 계산한다." }
    ],
    answer: ["C"],
    explanation: "평균재원일수의 분모는 오직 '퇴원환자수'만 들어갑니다. 입원환자나 재원환자수를 곱해 대입하는 것은 심각한 오류입니다."
  },
  {
    id: "MOCK-STAT-016",
    type: "multiple_choice",
    stem: "A 병원에서 이번 달 총 사망환자는 20명이었습니다. 이 중 법의학 조사가 의뢰되어 타 기관으로 전출 간 시신이 2명, 유가족 반대로 부검이 불가능했던 환자가 3명이었고, 실제로 부검이 집도된 건수는 3건이었습니다. 이 병원의 순부검률(Net Autopsy Rate)은 얼마인가?",
    options: [
      { id: "A", text: "15%" },
      { id: "B", text: "16.7%" },
      { id: "C", text: "20%" },
      { id: "D", text: "25%" }
    ],
    answer: ["C"],
    explanation: "순부검률 공식 = (실제 부검수 ÷ (총 사망자수 - 부검제외시신)) × 100 = (3 ÷ (20 - 2 - 3)) × 100 = (3 ÷ 15) × 100 = 20% 입니다."
  },
  {
    id: "MOCK-STAT-017",
    type: "multiple_choice",
    stem: "병원 외부에서 사망했으나 병원 보건의료진에 의해 사망이 확인되고 이송되어 부검된 수와 병원 내 사망자 수를 통합하여 부검의 비율을 산정하는 지표는?",
    options: [
      { id: "A", text: "조부검률" },
      { id: "B", text: "순부검률" },
      { id: "C", text: "병원부검률" },
      { id: "D", text: "법의부검률" }
    ],
    answer: ["C"],
    explanation: "원외 사망자로서 병원에서 부검한 경우와 병원 내 사망자를 분모 분자에 합하여 구하는 공식은 병원부검률(Hospital Autopsy Rate)의 고유 정의입니다."
  },
  {
    id: "MOCK-STAT-018",
    type: "multiple_choice",
    stem: "어떤 보건 지역의 1년간 총 생후 1년 미만의 사망 영아수가 50명이고 태어난 활생아수가 25,000명일 때, 이 지역의 영아사망률(Infant Mortality Rate)은 천분율(‰) 기준으로 얼마인가?",
    options: [
      { id: "A", text: "1.0‰" },
      { id: "B", text: "2.0‰" },
      { id: "C", text: "3.0‰" },
      { id: "D", text: "4.0‰" }
    ],
    answer: ["B"],
    explanation: "영아사망률 = (1세 미만 사망수 ÷ 활생아수) × 1,000 = (50 ÷ 25,000) × 1,000 = 2.0‰ 입니다. 단위가 천분율(‰)이므로 곱하기 1,000을 하여 2.0을 도출합니다."
  },
  {
    id: "MOCK-STAT-019",
    type: "multiple_choice",
    stem: "신생아기사망률(Neonatal Mortality Rate)을 계산할 때 분자 대상에 포함되는 신생아의 나이 기준은 생후 며칠 미만인가?",
    options: [
      { id: "A", text: "생후 7일 미만" },
      { id: "B", text: "생후 14일 미만" },
      { id: "C", text: "생후 28일 미만" },
      { id: "D", text: "생후 1년 미만" }
    ],
    answer: ["C"],
    explanation: "신생아기사망률(Neonatal Mortality Rate)은 생후 28일 미만의 신생아 사망을 분자 기준으로 삼습니다. (7일 미만은 초생아 사망기준)"
  },
  {
    id: "MOCK-STAT-020",
    type: "multiple_choice",
    stem: "주산기사망률(Perinatal Mortality Rate) 공식에서 분모와 분자에 공통적으로 사산아(태아사망)를 더하는 수학적 타당성은 무엇인가?",
    options: [
      { id: "A", text: "부검률을 낮추기 위해" },
      { id: "B", text: "전체 신생아실 퇴원수를 맞추기 위해" },
      { id: "C", text: "태아사망 자체가 분만 건수(전체 임신종결)의 일종이므로, 활생아수와 합해 전체 대상(모집단)을 일치시키기 위해" },
      { id: "D", text: "사망률을 억지로 높게 나타내기 위해" }
    ],
    answer: ["C"],
    explanation: "주산기사망률은 임신 28주 이후 분만 과정 및 분만 직후 발생한 사망을 종합하므로, 활생아수(산 아이)와 태아사망수(사산아)를 합해 전체 분만(임신 종결) 모집단을 맞추는 것이 수학적으로 정확합니다."
  },
  {
    id: "MOCK-STAT-021",
    type: "multiple_choice",
    stem: "척도(Scale of measurement)의 분류 중 절대영점(Absolute Zero Point)이 존재하여 덧셈, 뺄셈뿐만 아니라 곱셈, 나눗셈이 모두 가능한 척도는?",
    options: [
      { id: "A", text: "명명척도 (Nominal Scale)" },
      { id: "B", text: "서열척도 (Ordinal Scale)" },
      { id: "C", text: "등간척도 (Interval Scale)" },
      { id: "D", text: "비율척도 (Ratio Scale)" }
    ],
    answer: ["D"],
    explanation: "절대영점이 존재하여 수치의 배율 비교(나눗셈)까지 가능한 척도는 비율척도(Ratio Scale)입니다. 온도 등은 절대영점이 없으므로 등간척도입니다."
  },
  {
    id: "MOCK-STAT-022",
    type: "multiple_choice",
    stem: "자료를 크기 순서대로 정렬했을 때 가장 정중앙에 위치하는 값을 의미하는 대표값의 명칭은?",
    options: [
      { id: "A", text: "산술평균 (Arithmetic Mean)" },
      { id: "B", text: "중앙값 (Median)" },
      { id: "C", text: "최빈값 (Mode)" },
      { id: "D", text: "기하평균 (Geometric Mean)" }
    ],
    answer: ["B"],
    explanation: "크기 순서대로 자료를 배열하였을 때 정중앙에 오는 값을 중앙값(Median, 중위수)이라고 합니다."
  },
  {
    id: "MOCK-STAT-023",
    type: "multiple_choice",
    stem: "가동병상수가 150개인 병원의 4월(30일) 환자일수가 3,600일일 때, 4월 한 달 동안의 병상회전율은 몇 회인가?",
    options: [
      { id: "A", text: "20회" },
      { id: "B", text: "24회" },
      { id: "C", text: "자료 부족으로 계산 불가능" },
      { id: "D", text: "15회" }
    ],
    answer: ["C"],
    explanation: "병상회전율 공식은 '퇴원환자수 ÷ 가동병상수'입니다. 주어진 조건에는 가동병상수(150)와 환자일수(3,600일)만 있고, '퇴원환자수'가 명시되어 있지 않으므로 계산이 불가능합니다. (환자일수는 이용률 계산용)"
  },
  {
    id: "MOCK-STAT-024",
    type: "multiple_choice",
    stem: "A 병원의 1년간 모성 퇴원환자가 800명(사망자 2명 포함)이었습니다. 이 중 임신중독증 합병증으로 사망한 모성 환자가 2명일 때, 임상 모성사망률은 몇 %인가?",
    options: [
      { id: "A", text: "0.25%" },
      { id: "B", text: "0.5%" },
      { id: "C", text: "1.0%" },
      { id: "D", text: "2.0%" }
    ],
    answer: ["A"],
    explanation: "임상 모성사망률 공식 = (모성 사망수 ÷ 모성 퇴원환자수) × 100 = (2 ÷ 800) × 100 = 0.25% 입니다."
  },
  {
    id: "MOCK-STAT-025",
    type: "multiple_choice",
    stem: "병원 통계 자료의 표준편차가 0으로 나타났다면 이 자료의 분포 상태는 어떠한가?",
    options: [
      { id: "A", text: "자료들이 완전한 대칭 분포(정규분포)를 이룬다." },
      { id: "B", text: "모든 자료의 수치가 평균값과 완전히 동일하여 분산이 없다." },
      { id: "C", text: "가장 큰 수치와 가장 작은 수치의 편차가 극대화된다." },
      { id: "D", text: "부검률이 0% 인 병원과 일치한다." }
    ],
    answer: ["B"],
    explanation: "표준편차(또는 분산)가 0이라는 것은 개별 자료값들이 평균으로부터 떨어진 거리가 전혀 없다는 뜻으로, 모든 자료의 값이 평균값과 100% 동일함을 뜻합니다."
  }
];
