from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont
from docx import Document
from docx.shared import Mm


ROOT = Path("/Users/jihoonkim/Desktop/vibe-coding/HIM_exam")
OUTPUT_DIR = ROOT / "artifacts"
OUTPUT_PATH = OUTPUT_DIR / "병원통계_쉽게_공부하는_책.docx"
PAGE_DIR = OUTPUT_DIR / "hospital_statistics_book_pages"
FONT_PATH = Path("/System/Library/Fonts/AppleSDGothicNeo.ttc")

PAGE_WIDTH = 1240
PAGE_HEIGHT = 1754
MARGIN_X = 96
MARGIN_TOP = 110
MARGIN_BOTTOM = 110
BODY_LINE_GAP = 18

NAVY = (18, 36, 58)
TEAL = (0, 132, 116)
BLUE = (40, 90, 210)
GRAY = (100, 112, 132)
LIGHT = (242, 247, 250)
WHITE = (255, 255, 255)


@dataclass
class Block:
    kind: str
    text: str


def font(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_PATH), size)


FONTS = {
    "cover_title": font(54),
    "cover_subtitle": font(28),
    "section_kicker": font(24),
    "h1": font(38),
    "h2": font(28),
    "body": font(31),
    "body_bold": font(31),
    "small": font(20),
}


def content_blocks() -> list[Block]:
    return [
        Block("cover_title", "병원통계, 쉽게 잡는 공부책"),
        Block("cover_subtitle", "보건의료정보관리사 시험 대비\n공식의 '이유'를 깨우치는 세상에서 가장 친절한 통계책"),
        Block("body", "이 책은 병원통계 공식만 보면 머리가 아픈 수험생들을 위해 쓰여졌습니다. "
             "공식을 무작정 암기하는 대신, '왜 분모에 이걸 넣어야만 하는지' 일상생활의 친근한 비유를 들어 아주 쉽게 풀어 설명합니다."),
        Block("bullet", "Chapter I. 왜 그런 공식이 나왔을까?: 병상, 재원일수, 사망, 부검, 외래, 응급, 역학 및 출산 지표의 탄생 배경과 원리 이해"),
        Block("bullet", "Chapter II. 머리에 쏙 들어오는 계산 원리: 비유로 이해하는 비율형, 평균형, 회전형 계산법과 함정 피하기"),
        Block("bullet", "Chapter III. 말문이 트이는 자가 점검: 스스로 원리를 설명할 수 있게 돕는 15가지 핵심 질문과 친절한 풀이"),
        Block("h2", "이 책을 읽는 효과적인 방법"),
        Block("number", "1. 공식 자체를 외우기 전에 반드시 '이유를 설명하는 비유'를 먼저 소리 내어 읽어보세요."),
        Block("number", "2. '왜 퇴원환자로 나눠야 하지?' 같은 근본적인 질문에 답을 할 수 있게 되면 공식은 저절로 외워집니다."),
        Block("number", "3. 연습장에 손으로 직접 비유를 생각하며 계산 과정을 그려보세요."),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER I"),
        Block("h1", "병상과 재원일수 공식의 원리"),
        Block("h2", "1. 병상이용률: '게스트하우스 방 채우기' 비유"),
        Block("body", "방이 10개 있는 게스트하우스가 있습니다. 6월 한 달(30일) 동안 만실이었다면 총 300번(10실×30일) 방을 빌려줄 수 있었습니다. "
             "이것이 분모인 '가동병상수 × 기간일수'입니다. 그런데 실제 손님이 묵고 간 누적 일수가 240일이라면, 이용률은 240÷300 = 80%가 됩니다. "
             "분모에 단순히 병상수만 넣으면 안 되고, '기간 일수'를 곱해 총 가용 공간의 단위(병상일)를 일치시켜야 하는 이유입니다."),
        Block("term", "병상이용률 (Bed Occupancy Rate): 준비된 전체 병상일수 대비 실제 환자가 사용한 누적 일수의 비율입니다. 공식은 (총 환자일수 ÷ (가동병상수 × 기간일수)) × 100 (%)"),
        Block("h2", "2. 평균재원일수: '끝난 사람만 계산한다' 원리"),
        Block("body", "평균재원일수를 구할 때 왜 '입원환자'가 아니라 '퇴원환자'로 나눌까요? 아직 입원 중인 사람은 언제 나갈지 알 수 없기 때문입니다! "
             "식당에서 손님이 평균 몇 분 동안 식사하는지 계산하려면, 밥을 다 먹고 '나간 손님들'의 식사 시간만 합산해서 나눠야 정확합니다. "
             "따라서 분모와 분자 모두 아직 진행 중인 재원환자가 아니라, 기록이 완성된 '퇴원환자' 기준이어야 합니다."),
        Block("term", "평균재원일수 (Average Length of Stay): 퇴원한 환자 1명이 평균적으로 며칠 동안 입원해 있었는지를 계산합니다. 공식은 퇴원환자의 총 재원일수 ÷ 퇴원환자수 (일)"),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER I"),
        Block("h1", "사망 및 부검 공식의 원리"),
        Block("h2", "3. 순사망률: '병원 탓을 할 수 없는 시간 48시간'"),
        Block("body", "병원에 오자마자 1시간 만에 자연사한 환자는 의사가 손을 쓸 시간조차 없었습니다. "
             "이런 사망까지 병원 책임으로 돌려 사망률을 계산하면 억울하겠죠? 그래서 의학적으로 의미 있는 치료가 시작될 수 있는 시간인 '48시간'을 기준으로 잡습니다. "
             "이 48시간 미만 사망 환자들을 분모(전체 대상)와 분자(사망자)에서 둘 다 깨끗이 빼주고 계산하는 것이 '순사망률'입니다."),
        Block("term", "순사망률 (Net Mortality Rate): 입원 후 48시간 이상 지난 시점의 순수한 사망 비율입니다. 공식은 (48시간 이상 사망수 ÷ (총 퇴원환자수 - 48시간 미만 사망수)) × 100 (%)"),
        Block("h2", "4. 부검률 3종 세트: '진료 범위의 차이'"),
        Block("body", "조부검률은 제외 없이 원내 전체 사망자 대비 부검 수입니다. "
             "반면 순부검률은 유족이 거부하거나 법의학 사건으로 다른 곳으로 가버려 '애초에 부검을 할 수 없었던 시신'을 분모에서 빼고 계산합니다. "
             "병원부검률은 입원 환자가 퇴원해 집에 있다가 사망했지만 병원으로 모셔와 부검한 경우까지 분모와 분자에 모두 더해 포괄적으로 계산합니다."),
        Block("term", "순부검률 (Net Autopsy Rate): 병원이 부검할 권한과 가능성이 있었던 시신 대비 부검률입니다. 공식은 (총 부검수 ÷ (총 사망자수 - 부검제외시신수)) × 100 (%)"),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER I"),
        Block("h1", "외래·응급·역학 및 출산 공식의 원리"),
        Block("h2", "5. 치명률: '감기가 코로나보다 덜 무서운 이유'"),
        Block("body", "사망률은 '전체 인구' 중 몇 명이 죽었는지 계산하지만, 치명률은 '그 병에 걸린 사람' 중 몇 명이 죽었는지를 봅니다. "
             "감기는 전 세계 인구 절반이 걸려 일부가 사망해도 치명률이 0.01%도 안 되지만, 에볼라는 걸린 사람의 절반이 사망하므로 치명률이 50%에 달합니다. "
             "즉, 질병 자체의 '독성'을 보려면 분모를 전체 인구가 아니라 '그 질병에 걸린 환자수'로 제한해야 합니다."),
        Block("term", "치명률 (Case Fatality Rate): 특정 질병에 걸린 환자 대비 사망자의 비율입니다. 공식은 (해당 질병 사망자수 ÷ 해당 질병 총 환자수) × 100 (%)"),
        Block("h2", "6. 발생률 vs 유병률: '양동이에 내리는 빗물' 비유"),
        Block("body", "새로 내리는 빗방울의 속도가 '발생률(Incidence)'이고, 양동이에 고여 있는 물의 전체 양이 '유병률(Prevalence)'입니다. "
             "아무리 새로운 환자가 많이 발생해도(발생률이 높아도) 치료가 금방 되어 퇴원하면 양동이에 고인 환자(유병률)는 적습니다. "
             "반면 잘 낫지 않는 만성질환은 새로 걸리는 사람(발생률)이 적어도 양동이에 계속 고이므로 유병률은 아주 높게 나타납니다."),
        Block("term", "유병률 (Prevalence Rate): 특정 시점 인구 중 질병을 앓고 있는 전체 비율입니다. 공식은 (현재 환자수 ÷ 총 인구수) × 1,000 (‰)"),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER II"),
        Block("h1", "회전형 및 출산력 계산법"),
        Block("h2", "1. 병상회전율과 간격: '식당 테이블 회전'"),
        Block("body", "테이블 회전율이 높다는 것은 같은 자리에 손님이 자주 바뀌었다는 뜻입니다. 병상회전율은 가동병상 1개당 퇴원환자가 몇 명 거쳐갔는지를 뜻합니다. "
             "그럼 다음 손님이 올 때까지 테이블이 비어 있던 평균 시간은 얼마일까요? "
             "전체 영업일 중 테이블이 비어 있던 총 일수(가동병상일수 - 실제 사용일수)를 구하고, 이를 나간 손님 수(퇴원환자수)로 나누면 됩니다. 이것이 바로 회전간격입니다."),
        Block("formula", "병상회전간격 = ((가동병상수 × 기간일수) - 환자일수) ÷ 퇴원환자수 (일)"),
        Block("h2", "2. 조출생률 vs 일반출산율: '인구 전체 vs 아기 낳는 여성'"),
        Block("body", "조출생률은 남자, 어린아이, 할머니를 모두 포함한 '전체 인구' 대비 아기가 태어난 비율입니다. 분모가 너무 넓어 착시가 생길 수 있습니다. "
             "반면 일반출산율은 실제 아이를 낳을 수 있는 연령대인 '15-49세 가임여성 인구'만을 분모로 둡니다. "
             "가임여성만 대상으로 하기 때문에 분모가 훨씬 작아져 수치가 조출생률보다 4~5배 높고 실제 출산 여건을 정확히 반영합니다. 둘 다 천분율(‰)이므로 1,000을 곱합니다."),
        Block("formula", "일반출산율 = (연간 총 활생아수 ÷ 15~49세 가임 여성 연앙인구) × 1,000 (‰)"),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER III"),
        Block("h1", "자가 점검 Q&A (왜 그럴까? 15선)"),
        Block("question", "1. 평균재원일수를 구할 때 분모에 입원환자가 아닌 '퇴원환자'를 쓰는 근본적인 이유는 무엇입니까?"),
        Block("answer", "아직 입원 중인 환자는 재원일수가 완성되지 않아 최종 며칠 동안 머물지 확정할 수 없기 때문입니다. 식사가 완료되고 나간 손님의 평균 식사 시간을 구하는 것과 같은 이치입니다."),
        Block("question", "2. 병상이용률을 구할 때 분모의 가동병상수에 '기간일수'를 곱해주는 이유는 무엇입니까?"),
        Block("answer", "분자의 단위가 매일의 환자 수를 누적한 '일(Days)' 단위이기 때문에, 분모 역시 가용 가능한 병상의 총 누적 일수 단위를 맞춰주기 위함입니다."),
        Block("question", "3. 순사망률을 계산할 때 48시간 기준을 적용하여 분모와 분자에서 공통적으로 빼주어야 하는 대상은 누구인가?"),
        Block("answer", "입원 후 48시간 이내 사망은 병원의 본격적인 치료 효과를 보기도 전에 발생한 불가항력적 사망이므로, 이를 제외하여 병원 진료의 질을 더 공정하게 평가하기 위해서입니다."),
        Block("question", "4. 병상회전간격 공식의 분자인 '(가동병상수 × 기간일수) - 환자일수'가 의미하는 직관적인 뜻은 무엇입니까?"),
        Block("answer", "특정 기간 동안 병원이 운영할 수 있었던 전체 병상일수 중에서, 실제 환자가 채우지 못해 '비어 있었던(유휴) 총 병상일수'의 합을 의미합니다."),
        Block("question", "5. 영아사망률, 조출생률, 일반출산율, 발생률, 유병률의 공통적인 최종 계산 규칙은 무엇입니까?"),
        Block("answer", "백분율(%)이 아니라 인구 1,000명당 비율인 천분율(‰) 단위를 주로 사용하기 때문에 공식 마지막에 100이 아닌 1,000을 곱해주어야 합니다."),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER III"),
        Block("h1", "자가 점검 Q&A (원리 심화)"),
        Block("question", "6. 태아사망률(사산율) 분모에 '태아사망수'를 굳이 더해주는 수학적 이유는 무엇입니까?"),
        Block("answer", "분자인 사산(태아사망) 역시 임신이 종료되어 분만된 모집단의 일부이기 때문에, 분모인 활생아수(살아난 아기)에 사산아수를 더해야 분모·분자 매칭이 이루어집니다."),
        Block("question", "7. 질병의 독성을 나타내는 치명률의 분모가 조사망률의 분모와 완전히 다른 이유는 무엇입니까?"),
        Block("answer", "조사망률은 전체 인구(혹은 전체 퇴원자) 대비 사망을 보지만, 특정 질병의 무서움을 알려면 오직 '그 질병에 이환된(걸린) 환자수' 대비 사망자를 봐야 하기 때문입니다."),
        Block("question", "8. 역학 통계에서 발생률을 계산할 때 분모에서 기존 유병자를 왜 제외해야 합니까?"),
        Block("answer", "발생률은 '새롭게 질병이 시작되는 속도'를 측정하므로, 이미 병을 앓고 있는 사람은 새롭게 병에 걸릴 위험 대상이 아니기 때문입니다."),
        Block("question", "9. 일반출산율(GFR)이 조출생률(CBR)보다 항상 높은 수치를 보이는 이유는 무엇입니까?"),
        Block("answer", "조출생률은 분모에 전체 인구(남자, 아동, 노인 포함)를 넣지만, 일반출산율은 실제로 임신이 가능한 '가임기 여성 인구'만 분모로 삼아 분모의 크기가 훨씬 작아지기 때문입니다."),
        Block("question", "10. 병원의 진료 성과 지표인 부검률 중 순부검률의 계산 원리는 무엇입니까?"),
        Block("answer", "병원 내 총 사망자 중 법의학 조사가 진행되거나 유족 반대로 물리적으로 부검이 불가했던 시신을 분모에서 제외하여, 병원이 실질적으로 부검을 제안하고 실행할 수 있었던 기회 대비 달성률을 보기 위함입니다."),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER III"),
        Block("h1", "자가 점검 Q&A 및 맺음말"),
        Block("question", "11. 상대위험도(RR)가 1보다 작게(예: 0.5) 나오는 것은 어떤 보건학적 의미를 갖습니까?"),
        Block("answer", "위험 요인에 노출된 집단의 발생률이 더 낮다는 뜻으로, 해당 노출 요인이 질병 발생에 대해 '예방적 효과'를 가지고 있음을 나타냅니다."),
        Block("question", "12. 외래 신환자 비율의 분모에 외래 실인원이 아닌 '연인원'을 쓰는 이유는 무엇입니까?"),
        Block("answer", "신환자 역시 전체 내원 횟수(방문 연인원) 중에서 발생한 첫 방문 비중을 평가하는 것이 논리적인 방문 비율 매칭에 부합하기 때문입니다."),
        Block("question", "13. 수술사망률을 산출할 때 수술 후 10일 이내 사망으로 기간을 고정하는 목적은 무엇입니까?"),
        Block("answer", "사망의 원인이 무엇이든 수술 직후의 급성기 부작용이나 회복실/중환자실 관리 실패로 인한 사망 범위를 임상적으로 정의하기 위한 약속입니다."),
        Block("question", "14. 감염병 유행 조사 시 유병률보다 발생률이 더 중시되는 이유는 무엇입니까?"),
        Block("answer", "유병률은 기존 환자가 누적되어 있어 현재 시점의 크기만 보여주지만, 발생률은 지금 당장 새로 번지는 '유행의 속도와 전파력'을 직접적으로 반영하기 때문입니다."),
        Block("question", "15. 합계출산율(TFR)의 단위가 %나 ‰가 아닌 '명'인 이유는 무엇입니까?"),
        Block("answer", "인구 비율이 아니라 한 여성이 평생 동안 낳을 것으로 예상되는 평균 자녀수(자녀의 머릿수) 자체를 직관적으로 나타내기 때문입니다."),
        Block("body", "맺음말: 병원통계는 단순한 공식 암기 과목이 아닙니다. 환자가 병실에 들어오고, 머물고, 나가거나 치료되는 실제 의료 현장의 이야기를 숫자로 엮어낸 것입니다. '왜 그럴까?'를 질문하고 비유로 원리를 그릴 수 있다면 모든 문제를 쉽게 정복할 수 있습니다. 수험생 여러분의 합격을 응원합니다!"),
    ]


def wrap_text(draw: ImageDraw.ImageDraw, text: str, text_font: ImageFont.FreeTypeFont, width: int) -> list[str]:
    pieces = text.split("\n")
    lines: list[str] = []
    for piece in pieces:
        if not piece:
            lines.append("")
            continue
        current = ""
        for token in piece.split(" "):
            candidate = token if not current else f"{current} {token}"
            if draw.textlength(candidate, font=text_font) <= width:
                current = candidate
                continue
            if current:
                lines.append(current)
                current = token
                continue
            broken = wrap(piece, width=max(1, width // max(1, text_font.size // 2)))
            lines.extend(broken)
            current = ""
            break
        if current:
            lines.append(current)
    return lines or [""]


def block_layout(draw: ImageDraw.ImageDraw, block: Block, usable_width: int) -> tuple[list[str], ImageFont.FreeTypeFont, tuple[int, int, int], int, int]:
    if block.kind == "cover_title":
        return wrap_text(draw, block.text, FONTS["cover_title"], usable_width), FONTS["cover_title"], NAVY, 64, 18
    if block.kind == "cover_subtitle":
        return wrap_text(draw, block.text, FONTS["cover_subtitle"], usable_width), FONTS["cover_subtitle"], TEAL, 46, 12
    if block.kind == "kicker":
        return wrap_text(draw, block.text, FONTS["section_kicker"], usable_width), FONTS["section_kicker"], TEAL, 34, 8
    if block.kind == "h1":
        return wrap_text(draw, block.text, FONTS["h1"], usable_width), FONTS["h1"], NAVY, 36, 8
    if block.kind == "h2":
        return wrap_text(draw, block.text, FONTS["h2"], usable_width), FONTS["h2"], BLUE, 28, 8
    if block.kind == "formula":
        return wrap_text(draw, block.text, FONTS["body_bold"], usable_width - 28), FONTS["body_bold"], NAVY, 18, 10
    prefix_map = {
        "bullet": "• ",
        "number": "",
        "term": "",
        "example": "예시 ",
        "question": "",
        "answer": "정리 ",
    }
    if block.kind in prefix_map:
        text = block.text
        if block.kind == "number":
            text = block.text
        elif block.kind == "term":
            head, tail = block.text.split(": ", 1)
            text = f"{head}\n{tail}"
        elif block.kind == "question":
            text = f"Q. {block.text.split('. ', 1)[1] if '. ' in block.text else block.text}"
        elif block.kind == "answer":
            text = f"A. {block.text}"
        else:
            text = f"{prefix_map[block.kind]}{block.text}"
        return wrap_text(draw, text, FONTS["body"], usable_width - 18), FONTS["body"], NAVY, 16, 8
    return wrap_text(draw, block.text, FONTS["body"], usable_width), FONTS["body"], NAVY, 18, 8


def measure_block(draw: ImageDraw.ImageDraw, block: Block, usable_width: int) -> int:
    lines, text_font, _, before, after = block_layout(draw, block, usable_width)
    line_height = text_font.size + BODY_LINE_GAP
    return before + len(lines) * line_height + after


def draw_block(draw: ImageDraw.ImageDraw, block: Block, x: int, y: int, usable_width: int) -> int:
    lines, text_font, color, before, after = block_layout(draw, block, usable_width)
    y += before
    line_height = text_font.size + BODY_LINE_GAP

    if block.kind == "formula":
        box_top = y - 8
        box_height = len(lines) * line_height + 24
        draw.rounded_rectangle((x, box_top, x + usable_width, box_top + box_height), radius=24, fill=LIGHT, outline=(210, 222, 232), width=2)
        text_x = x + 16
        for idx, line in enumerate(lines):
            draw.text((text_x, y + idx * line_height), line, font=text_font, fill=color)
        return box_top + box_height + after

    if block.kind in {"question", "answer"}:
        box_color = (246, 250, 255) if block.kind == "question" else (240, 248, 243)
        border = (208, 220, 235) if block.kind == "question" else (198, 224, 208)
        box_top = y - 8
        box_height = len(lines) * line_height + 24
        draw.rounded_rectangle((x, box_top, x + usable_width, box_top + box_height), radius=20, fill=box_color, outline=border, width=2)
        for idx, line in enumerate(lines):
            draw.text((x + 16, y + idx * line_height), line, font=text_font, fill=color)
        return box_top + box_height + after

    for idx, line in enumerate(lines):
        draw.text((x, y + idx * line_height), line, font=text_font, fill=color)
    return y + len(lines) * line_height + after


def render_pages(blocks: list[Block]) -> list[Path]:
    PAGE_DIR.mkdir(parents=True, exist_ok=True)
    for old in PAGE_DIR.glob("page-*.png"):
        old.unlink()

    probe = Image.new("RGB", (PAGE_WIDTH, PAGE_HEIGHT), WHITE)
    probe_draw = ImageDraw.Draw(probe)
    usable_width = PAGE_WIDTH - MARGIN_X * 2
    usable_height = PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM

    pages: list[list[Block]] = []
    current: list[Block] = []
    current_height = 0

    for block in blocks:
        if block.kind == "pagebreak":
            if current:
                pages.append(current)
                current = []
                current_height = 0
            continue

        needed = measure_block(probe_draw, block, usable_width)
        if current and current_height + needed > usable_height:
            pages.append(current)
            current = []
            current_height = 0
        current.append(block)
        current_height += needed

    if current:
        pages.append(current)

    page_paths: list[Path] = []
    for index, page_blocks in enumerate(pages, start=1):
        img = Image.new("RGB", (PAGE_WIDTH, PAGE_HEIGHT), WHITE)
        draw = ImageDraw.Draw(img)
        y = MARGIN_TOP

        if index > 1:
            draw.line((MARGIN_X, 70, PAGE_WIDTH - MARGIN_X, 70), fill=(228, 236, 243), width=2)
            draw.text((MARGIN_X, 34), "병원통계, 쉽게 잡는 공부책", font=FONTS["small"], fill=GRAY)

        for block in page_blocks:
            y = draw_block(draw, block, MARGIN_X, y, usable_width)

        page_label = f"{index}"
        label_width = draw.textlength(page_label, font=FONTS["small"])
        draw.text((PAGE_WIDTH - MARGIN_X - label_width, PAGE_HEIGHT - 70), page_label, font=FONTS["small"], fill=GRAY)

        page_path = PAGE_DIR / f"page-{index}.png"
        img.save(page_path, quality=95)
        page_paths.append(page_path)

    return page_paths


def build_docx(page_paths: list[Path]) -> None:
    doc = Document()
    section = doc.sections[0]
    section.page_width = Mm(210)
    section.page_height = Mm(297)
    section.top_margin = Mm(0)
    section.bottom_margin = Mm(0)
    section.left_margin = Mm(0)
    section.right_margin = Mm(0)

    image_width = Mm(210)
    for page_path in page_paths:
        paragraph = doc.add_paragraph()
        paragraph.paragraph_format.space_before = Mm(0)
        paragraph.paragraph_format.space_after = Mm(0)
        run = paragraph.add_run()
        run.add_picture(str(page_path), width=image_width)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    doc.save(OUTPUT_PATH)


def main() -> None:
    blocks = content_blocks()
    page_paths = render_pages(blocks)
    build_docx(page_paths)
    print(OUTPUT_PATH)


if __name__ == "__main__":
    main()
