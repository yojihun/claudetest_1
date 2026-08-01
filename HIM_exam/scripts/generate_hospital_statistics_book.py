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
FONT_PATH = Path("/Users/jihoonkim/Library/Fonts/NotoSansCJKkr-Regular.otf")

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
        Block("cover_subtitle", "보건의료정보관리사 시험 대비\n용어 이해부터 계산 적용까지 한 권으로 정리"),
        Block("body", "이 책은 병원통계가 특히 어렵게 느껴지는 학습자를 위해 만들었다. "
             "공식을 바로 외우기보다, 먼저 용어를 쉬운 말로 구분하고 그다음 계산 문제에 연결되도록 구성했다."),
        Block("bullet", "Chapter I에서는 헷갈리는 통계 용어를 짧고 분명하게 정리한다."),
        Block("bullet", "Chapter II에서는 어떤 문제가 나오면 어떤 공식을 떠올려야 하는지 계산 루틴을 익힌다."),
        Block("bullet", "이름이 비슷한 지표는 숫자보다 의미 차이부터 구분한다."),
        Block("h2", "이렇게 공부하면 좋다"),
        Block("number", "먼저 Chapter I을 읽으면서 용어를 자기 말로 설명해 본다."),
        Block("number", "그다음 Chapter II의 계산 흐름을 따라 직접 숫자를 넣어 본다."),
        Block("number", "마지막에는 헷갈린 지표만 따로 체크해서 반복한다."),
        Block("kicker", "CHAPTER I"),
        Block("h1", "병원통계 용어 사전"),
        Block("body", "병원통계는 계산보다 용어 구분이 먼저다. "
             "지금 병상에 누가 있는지 보는 통계인지, 퇴원까지 끝난 사람을 기준으로 보는 통계인지부터 나눠야 한다."),
        Block("h2", "1. 가장 먼저 잡아야 할 큰 구분"),
        Block("bullet", "재원 중 관점: 지금 병상이 얼마나 차 있는지를 본다. 대표 개념은 환자센서스, 환자일수, 병상이용률이다."),
        Block("bullet", "퇴원 완료 관점: 퇴원한 환자들이 평균 며칠 머물렀는지를 본다. 대표 개념은 퇴원환자 수와 평균재원일수다."),
        Block("bullet", "병상 운영 관점: 병상 하나가 얼마나 자주 사용되고 얼마나 비어 있었는지를 본다. 대표 개념은 병상회전율, 병상회전간격이다."),
        Block("bullet", "질 관리 관점: 사망과 감염처럼 의료의 결과를 보는 통계다."),
        Block("h2", "2. 핵심 용어를 쉬운 말로 바꾸기"),
        Block("term", "환자센서스: 특정 시점 또는 하루 동안 병원에 실제로 존재한 환자를 세는 개념"),
        Block("term", "재원환자 수: 조사 시점에 입원해 있는 환자 수"),
        Block("term", "입원환자 수: 일정 기간 동안 새로 입원한 환자 수"),
        Block("term", "퇴원환자 수: 일정 기간 동안 퇴원한 환자 수. 사망퇴원도 포함될 수 있으므로 문제 조건을 본다."),
        Block("term", "환자일수: 환자가 하루 병상을 사용하면 1일로 계산한 누적값"),
        Block("term", "가동병상수: 실제 운영 가능한 병상 수"),
        Block("term", "병상일수: 가동병상수에 기간 일수를 곱한 값"),

        Block("kicker", "CHAPTER I"),
        Block("h1", "헷갈리는 지표 묶음 정리"),
        Block("h2", "3. 병상 관련 지표"),
        Block("term", "병상이용률: 준비된 병상이 실제로 얼마나 사용되었는지를 백분율로 본 지표"),
        Block("term", "병상회전율: 병상 하나가 일정 기간 동안 몇 번 환자를 받았는지 보는 지표"),
        Block("term", "병상회전간격: 한 환자가 나간 뒤 다음 환자가 들어올 때까지 병상이 비어 있는 평균 시간"),
        Block("h2", "4. 재원일수 관련 지표"),
        Block("term", "평균재원일수: 퇴원한 환자들이 평균 며칠 입원했는지 보여주는 지표"),
        Block("term", "총 재원일수: 퇴원한 환자들의 입원 기간을 모두 합친 값"),
        Block("h2", "5. 사망·감염 통계는 어떻게 접근할까"),
        Block("body", "사망통계는 이름이 비슷해서 가장 많이 헷갈린다. 핵심은 '전체 사망을 보는가'와 '입원 후 일정 시간이 지난 뒤의 사망을 따로 보는가'를 먼저 나누는 것이다."),
        Block("bullet", "조사망률: 입원환자 전체 중 사망이 얼마나 있었는지 보는 큰 지표"),
        Block("bullet", "순사망률: 문제에서 제시한 제외 조건을 반영해 좀 더 순수한 사망 수준을 보는 지표"),
        Block("bullet", "감염통계: 감염 건수나 감염 환자 수를 분자로 두고, 문제에서 요구하는 모집단을 분모로 둔다."),
        Block("body", "사망통계의 세부 공식, 제외 기준, 반올림 규칙은 실제 시험 직전 공식 자료와 함께 다시 확인하는 습관이 중요하다."),
        Block("h2", "6. 용어 암기 팁"),
        Block("number", "문제에서 '현재', '당일', '시점'이 보이면 재원 중 관점을 먼저 떠올린다."),
        Block("number", "문제에서 '퇴원환자', '평균 며칠'이 보이면 평균재원일수를 먼저 의심한다."),
        Block("number", "문제에서 '병상 하나당 몇 번'이 보이면 병상회전율을 생각한다."),
        Block("number", "문제에서 '빈 기간'이 보이면 병상회전간격을 떠올린다."),
        Block("pagebreak", ""),

        Block("kicker", "CHAPTER II"),
        Block("h1", "계산 방법 훈련"),
        Block("body", "계산 문제는 공식 암기보다 문제를 읽는 순서가 중요하다. "
             "먼저 분자를 찾고, 그다음 분모가 사람 수인지 병상 수인지 기간인지 확인하면 실수가 줄어든다."),
        Block("h2", "1. 병상이용률"),
        Block("formula", "병상이용률 = (환자일수 ÷ (가동병상수 × 기간 일수)) × 100"),
        Block("body", "이 지표는 '준비된 병상이 실제로 얼마나 찼는가'를 본다. 분자는 환자일수, 분모는 병상일수다."),
        Block("example", "예시: 가동병상수 100, 30일 동안 환자일수 2,400이면 병상이용률은 (2,400 ÷ 3,000) × 100 = 80%다."),
        Block("h2", "2. 평균재원일수"),
        Block("formula", "평균재원일수 = 퇴원환자의 총 재원일수 ÷ 퇴원환자 수"),
        Block("body", "평균재원일수는 반드시 퇴원환자를 기준으로 본다. 현재 입원 중인 환자를 섞으면 안 된다."),
        Block("example", "예시: 퇴원환자 50명의 총 재원일수가 300일이면 평균재원일수는 6일이다."),
        Block("h2", "3. 병상회전율"),
        Block("formula", "병상회전율 = 기간 중 퇴원환자 수 ÷ 가동병상수"),
        Block("body", "병상 하나가 일정 기간 동안 몇 번 사용되었는지를 보여준다."),

        Block("kicker", "CHAPTER II"),
        Block("h1", "공식 선택 루틴"),
        Block("h2", "4. 병상회전간격"),
        Block("formula", "병상회전간격 = (가동 가능 병상일수 - 환자일수) ÷ 퇴원환자 수"),
        Block("body", "이 지표는 병상이 비어 있던 평균 시간을 뜻한다. 숫자가 작을수록 병상이 빨리 다시 사용된 것이다."),
        Block("example", "예시: 병상일수 3,000, 환자일수 2,400, 퇴원환자 수 300이면 병상회전간격은 2일이다."),
        Block("h2", "5. 어떤 공식을 고를지 빠르게 판단하는 법"),
        Block("number", "먼저 문제에서 묻는 대상이 사람인지 병상인지 확인한다."),
        Block("number", "다음으로 현재 상태를 묻는지, 퇴원 완료 결과를 묻는지 구분한다."),
        Block("number", "분모가 병상수라면 병상 운영 지표일 가능성이 높다."),
        Block("number", "분모가 퇴원환자 수라면 평균재원일수나 유사 지표일 가능성이 높다."),
        Block("number", "백분율을 요구하면 마지막에 ×100이 필요한지 확인한다."),
        Block("h2", "6. 자주 하는 실수"),
        Block("bullet", "입원환자 수와 재원환자 수를 같은 뜻으로 사용하는 실수"),
        Block("bullet", "환자일수와 퇴원환자 총 재원일수를 섞는 실수"),
        Block("bullet", "백분율 문제인데 ×100을 빼먹는 실수"),
        Block("bullet", "문제에서 제시한 기간 일수를 분모에 반영하지 않는 실수"),
        Block("h2", "7. 사망통계 공부법"),
        Block("body", "사망지수는 종류가 많아서 한 번에 외우려 하면 더 어렵다. 먼저 지표 이름을 묶어서 정리하고, 문제 풀이 직전에는 '분자에 무엇이 들어가는가, 분모에 무엇이 들어가는가'만 반복 확인하는 방식이 효율적이다."),

        Block("kicker", "FINAL CHECK"),
        Block("h1", "자가 점검"),
        Block("question", "1. 환자일수와 퇴원환자 총 재원일수는 왜 다른가?"),
        Block("answer", "환자일수는 일정 기간 동안 병상이 사용된 전체 누적을 보는 값이고, 퇴원환자 총 재원일수는 퇴원한 환자들만 골라 입원 기간을 합한 값이기 때문이다."),
        Block("question", "2. 문제에 '평균 며칠 입원했는가'가 나오면 가장 먼저 어떤 지표를 떠올려야 하는가?"),
        Block("answer", "평균재원일수다."),
        Block("question", "3. 문제에 '병상 하나당 몇 번 사용되었는가'가 나오면 어떤 지표인가?"),
        Block("answer", "병상회전율이다."),
        Block("question", "4. 병상이용률 문제에서 분모를 어떻게 만드는가?"),
        Block("answer", "가동병상수 × 기간 일수로 병상일수를 만든다."),
        Block("question", "5. 사망통계는 어떤 순서로 공부하면 덜 헷갈리는가?"),
        Block("answer", "이름을 묶어 의미 차이를 먼저 이해하고, 그다음 분자와 분모를 표처럼 정리해 반복하는 것이 좋다."),
        Block("body", "마지막 체크: 공식만 외우지 말고 '이 숫자가 무엇을 세는 숫자인가'를 항상 먼저 설명해 보자. 설명이 되면 계산도 훨씬 쉬워진다."),
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
