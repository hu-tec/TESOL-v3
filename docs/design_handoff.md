# 🎨 디자인 인수인계서 — 타임스미디어 AI 강사 양성과정 홈페이지

> **목적**: 이 문서는 본 사이트의 **룩앤필(Look & Feel)을 동일하게 다른 프로젝트에 복제**하기 위해, 개발자가 필요로 하는 모든 디자인 결정사항을 코드 수준에서 기술합니다.
>
> **기술 스택**: React + Vite + TypeScript + Vanilla CSS (Tailwind 미사용)
>
> **작성일**: 2026-04-19

---

## 목차

1. [실제 화면 레퍼런스](#1-실제-화면-레퍼런스)
2. [디자인 토큰 (CSS Variables)](#2-디자인-토큰-css-variables)
3. [타이포그래피](#3-타이포그래피)
4. [글로벌 리셋 & 기본 스타일](#4-글로벌-리셋--기본-스타일)
5. [레이아웃 구조](#5-레이아웃-구조)
6. [GNB (Global Navigation Bar)](#6-gnb-global-navigation-bar)
7. [Footer](#7-footer)
8. [페이지별 디자인 패턴](#8-페이지별-디자인-패턴)
9. [컴포넌트 라이브러리](#9-컴포넌트-라이브러리)
10. [애니메이션 & 트랜지션](#10-애니메이션--트랜지션)
11. [유틸리티 클래스 시스템](#11-유틸리티-클래스-시스템)
12. [전체 CSS 원본](#12-전체-css-원본-indexcss)

---

## 1. 실제 화면 레퍼런스

### 1.1 홈페이지 (히어로 + 하단)

````carousel
![홈페이지 상단 — 다크 히어로 섹션 + GNB](C:\Users\itban\.gemini\antigravity\brain\2b06b6b0-498f-4af4-8ecb-2ee2c70f32ea\homepage_top_1776577339056.png)
<!-- slide -->
![홈페이지 하단 — 통계 카드 + CTA + Footer](C:\Users\itban\.gemini\antigravity\brain\2b06b6b0-498f-4af4-8ecb-2ee2c70f32ea\homepage_bottom_1776577357457.png)
````

### 1.2 서브페이지들

````carousel
![교육원 소개 — page-header + 카드 레이아웃](C:\Users\itban\.gemini\antigravity\brain\2b06b6b0-498f-4af4-8ecb-2ee2c70f32ea\about_page_1776577407793.png)
<!-- slide -->
![1:1 문의 — 폼 중심 레이아웃](C:\Users\itban\.gemini\antigravity\brain\2b06b6b0-498f-4af4-8ecb-2ee2c70f32ea\contact_page_1776577419045.png)
<!-- slide -->
![커뮤니티 — 탭 + 리스트 레이아웃](C:\Users\itban\.gemini\antigravity\brain\2b06b6b0-498f-4af4-8ecb-2ee2c70f32ea\community_page_1776577426778.png)
````

---

## 2. 디자인 토큰 (CSS Variables)

모든 색상, 간격, 크기 값은 `:root`의 CSS Variables로 관리합니다. **하드코딩 절대 금지**.

```css
:root {
  /* ── 메인 색상 ── */
  --primary: #9b2226;          /* 버건디 레드. 모든 CTA, 강조, active 상태 */
  --primary-light: #b82a30;    /* hover 시 밝아지는 버건디 */

  /* ── 배경 ── */
  --bg-main: #f9fafb;          /* 사이트 전체 배경. 순백이 아닌 GRAY-50 톤 */
  --bg-secondary: #f3f4f6;     /* 교차 섹션 배경, 카드 내부 서브 배경 */

  /* ── 텍스트 ── */
  --text-main: #1f2937;        /* 제목, 본문 기본 (GRAY-800) */
  --text-muted: #6b7280;       /* 서브 텍스트, 설명문 (GRAY-500) */

  /* ── 경계선 ── */
  --border: #e5e7eb;           /* 카드, 테이블, 구분선 (GRAY-200) */

  /* ── 기타 ── */
  --white: #ffffff;
}
```

> [!IMPORTANT]
> 색상 팔레트는 **Tailwind CSS의 Gray 계열** 기반입니다. 새 사이트 적용 시 `--primary` 값만 바꾸면 전체 톤이 자동으로 변경됩니다.

### 2.1 색상 사용 규칙

| 용도 | 변수 | HEX | 적용 예 |
|------|------|-----|---------|
| 주요 CTA 버튼 배경 | `--primary` | `#9b2226` | `.btn-primary`, 활성 탭 |
| 버튼 hover | `--primary-light` | `#b82a30` | `.btn-primary:hover` |
| 사이트 배경 | `--bg-main` | `#f9fafb` | `body` |
| 대비 섹션 배경 | `--bg-secondary` | `#f3f4f6` | 짝수 섹션, LNB 내부 |
| 제목/본문 | `--text-main` | `#1f2937` | `h1`~`h4`, `p` |
| 보조 텍스트 | `--text-muted` | `#6b7280` | 설명, breadcrumb |
| 카드/테이블 테두리 | `--border` | `#e5e7eb` | `.card`, `.schedule-table` |
| 카드/배경 흰색 | `--white` | `#ffffff` | 카드 배경, GNB 배경 |

### 2.2 다크 영역 전용 색상 (하드코딩)

히어로, page-header, footer 등 다크 영역에서는 아래 색상을 직접 사용합니다:

| 용도 | 값 | 적용 |
|------|-----|------|
| 히어로 배경 그라데이션 시작 | `#0f0f0f` | `.hero-section` |
| 히어로 배경 중간 | `#1a1015` | 미세한 버건디 틴트 |
| page-header 배경 | `#1f2937 → #171717` | 135deg 그라데이션 |
| footer 배경 | `#1f2937` (= `--text-main`) | `.footer` |
| footer 본문 텍스트 | `#d1d5db` | `.contact-info p` |
| footer 카피라이트 | `#9ca3af` | `.copy` |
| footer 구분선 | `#374151` | `.copy` 상단 `border-top` |

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');

body {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
```

> [!TIP]
> **Pretendard**는 한국어/영문 모두에서 깔끔하고 현대적인 느낌을 줍니다. CDN 주소 그대로 복사하면 됩니다.

### 3.2 폰트 크기 & 굵기 규격

| 용도 | 크기 | 굵기 | 클래스/속성 |
|------|------|------|------------|
| 히어로 대제목 | `4rem` (64px) | `800` (Extra Bold) | `.hero-title` |
| 서브페이지 대제목 | `2.5rem` (40px) | `700` | `.theme-title` |
| 페이지 제목 (About 등) | 기본 `h1` | `700` | `.page-header h1` |
| 섹션 제목 | `1.6rem` (25.6px) | `700` | `.section-title` |
| 코스 제목 | `2rem` (32px) | 기본 | `.course-title` |
| 본문 | `1rem` (16px) | `400` | `body` |
| 보조 텍스트 | `0.875rem` (14px) | `400` | `.text-sm` |
| 네비게이션 링크 | `1.05rem` | `500` | `.nav-links a` |
| 버튼 텍스트 | 기본 | `500` | `.btn-primary` |

### 3.3 Line Height

- **전역**: `1.6` (body)
- **히어로 타이틀**: `1.25`
- **히어로 서브타이틀**: `1.9`
- **카드 본문**: `1.625` (`.leading-relaxed`)

### 3.4 Letter Spacing

- **히어로 타이틀**: `-0.03em` (글자 간격을 살짝 좁혀 무게감 부여)
- **히어로 태그(pill)**: `0.12em` (대문자 영문 간격 넓힘)
- **LNB 버튼**: `-0.05em` (한글 밀도 높은 탭에서 간격 축소)

---

## 4. 글로벌 리셋 & 기본 스타일

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { background: none; border: none; cursor: pointer; font-family: inherit; }
```

> [!NOTE]
> 별도 CSS reset 라이브러리 없이, 위 4줄로 최소한의 리셋을 수행합니다. 필요시 `normalize.css` 를 추가해도 됩니다.

---

## 5. 레이아웃 구조

### 5.1 전체 구조

```
┌─────────────────────────────────────────┐
│  GNB (sticky top, h: 72px, z: 50)      │
├─────────────────────────────────────────┤
│  <main class="main-content">            │
│    <Outlet /> (React Router)            │
│  </main>                                │
├─────────────────────────────────────────┤
│  Footer (margin-top: 80px)              │
└─────────────────────────────────────────┘
```

### 5.2 컨테이너

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

- **최대 폭**: `1200px`
- **좌우 패딩**: `20px`
- 모든 콘텐츠는 `.container`로 감쌉니다.

### 5.3 그리드 시스템

Tailwind-like `auto-fit` 반응형 그리드를 직접 구현:

```css
.col-2 { grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); }
.col-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.col-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
```

> [!TIP]
> 이 시스템은 미디어 쿼리 없이 자동으로 반응형이 됩니다. `minmax` 값이 핵심입니다.

### 5.4 섹션 리듬 (Vertical Rhythm)

```css
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }   /* 기본 섹션 간격 */
.py-24 { padding-top: 6rem; padding-bottom: 6rem; }   /* 넓은 섹션 간격 */
.mb-8  { margin-bottom: 2rem; }                        /* 섹션 내부 블록 간격 */
.mb-12 { margin-bottom: 3rem; }                        /* 큰 블록 간격 */
```

---

## 6. GNB (Global Navigation Bar)

### 6.1 기본 사양

```css
.gnb-header {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 50;
  height: 72px;
  display: flex;
  align-items: center;
}
```

| 속성 | 값 | 설명 |
|------|-----|------|
| 높이 | `72px` | 고정 |
| 배경 | `#fff` | 순백 |
| 하단 테두리 | `1px solid #e5e7eb` | 매우 얇은 회색 |
| position | `sticky` | 스크롤 시 상단 고정 |
| z-index | `50` | 드롭다운 등 위에 위치 |

### 6.2 로고 영역

```
[타임스미디어] | AI 강사 양성과정
 ↑ primary, 700, 1.5rem    ↑ text-muted, 400, 0.9rem
                            세로 구분선: border-left 1px solid var(--border)
```

### 6.3 네비게이션 링크

```css
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-links a {
  font-weight: 500;
  font-size: 1.05rem;
  transition: color 0.2s;
  position: relative;
}
/* Active indicator: 하단 3px 바 */
.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -24px;  /* GNB 하단 경계에 맞춤 */
  left: 0; right: 0;
  height: 3px;
  background: var(--primary);
}
```

### 6.4 드롭다운 메뉴

```css
.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(20px);  /* 초기: 약간 아래로 숨겨진 상태 */
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 10px 0;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);  /* 스프링 이징 */
  z-index: 100;
}
/* 호버 시 등장 */
.nav-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);  /* 제자리로 슬라이드 업 */
}
```

> [!IMPORTANT]
> 드롭다운 등장 애니메이션은 `translateY(20px) → translateY(0)` 으로 아래에서 위로 슬라이드하는 느낌입니다. 이징은 `cubic-bezier(0.16, 1, 0.3, 1)` — 스프링감 있는 빠른 시작 + 느린 끝.

---

## 7. Footer

```css
.footer {
  background: var(--text-main);    /* #1f2937 */
  color: var(--white);
  padding: 60px 0 40px;
  margin-top: 80px;
}
```

- **배경**: `--text-main` (다크 그레이)
- **구조**: 상단 - 연락처 정보 / 하단 - 카피라이트 (border-top으로 구분)
- **카피라이트 구분선**: `border-top: 1px solid #374151`
- **카피라이트 텍스트**: `#9ca3af`, `0.875rem`, `text-align: center`

---

## 8. 페이지별 디자인 패턴

### 8.1 홈페이지 (Hero 랜딩)

#### Hero Section

```
┌───────────────────────────────────────────────┐
│ [그리드 배경 패턴]                              │
│ [부유하는 파티클 5개]                           │
│                                               │
│        ┌ TIMES MEDIA AI INSTRUCTOR ┐          │
│        └ ACADEMY (pill 태그)        ┘          │
│              ─── (accent line) ───             │
│           AI시대,                              │
│        사람을 가르치는 강사를                    │
│            키웁니다                             │
│                                               │
│   [교육과정 보기] [수강 신청하기] [1:1 문의하기]  │
│                                               │
│   ─────── (구분선, 0.08 opacity) ────────      │
│   23년+    30,000+    12개국+    6개 분야       │
│   교육운영  TESOL졸업생  글로벌네트워크  전문과정  │
└───────────────────────────────────────────────┘
```

**핵심 CSS 속성**:

```css
.hero-section {
  min-height: 92vh;
  background: linear-gradient(165deg, #0f0f0f 0%, #1a1015 30%, #0f0f0f 100%);
  border-radius: 0 0 24px 24px;        /* 하단만 둥글게 */
  margin-bottom: 40px;
}
```

**데코레이션 요소**:
- `::before` — 우상단 크고 흐릿한 버건디 glow (700px, blur 기본)
- `::after` — 좌하단 작은 glow (500px)
- 그리드 배경: `60px × 60px` 간격, `rgba(255,255,255,0.03)` 선
- 파티클: `4~6px` 크기의 `var(--primary)` 원, `floatParticle` 애니메이션

**Highlight 텍스트 (밑줄 효과)**:

```css
.hero-title .highlight {
  color: var(--primary);
}
.hero-title .highlight::after {
  content: '';
  position: absolute;
  bottom: 4px; left: 0; right: 0;
  height: 8px;
  background: rgba(155, 34, 38, 0.3);
  border-radius: 4px;
  z-index: -1;
}
```

#### Hero 버튼 그룹 (3종)

| 버튼 | 클래스 | 스타일 |
|------|--------|--------|
| 교육과정 보기 | `.btn-primary` | 버건디 배경 + 흰 글씨 |
| 수강 신청하기 | `.btn-white` | 흰 배경 + 버건디 글씨 + 그림자 |
| 1:1 문의하기 | `.btn-outline` (hero 전용) | 투명 + 흰 테두리, hover 시 흰 배경 전환 |

#### 통계 바 (Hero Stats)

```css
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.hero-stat-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
}
.hero-stat-label {
  font-size: 0.8rem;
  opacity: 0.5;
  letter-spacing: 0.05em;
}
```

---

### 8.2 서브페이지 공통 패턴

모든 서브페이지(About, Community, Contact, Guide 등)는 동일한 구조를 따릅니다:

```
┌─────────────────────────────┐
│ .page-header (다크 배너)     │
│   h1 "페이지 제목"           │
├─────────────────────────────┤
│ .container.py-16            │
│   section > .section-title  │
│   section > .card(s)        │
│   ...                       │
└─────────────────────────────┘
```

#### Page Header

```css
.page-header {
  background: linear-gradient(135deg, var(--text-main) 0%, #171717 100%);
  color: var(--white);
  padding: 60px 0;
  text-align: center;
  margin-bottom: 40px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
```

> [!NOTE]
> `border-radius: 0 0 20px 20px` — 하단 모서리만 둥글게 처리하여 다음 콘텐츠와의 자연스러운 연결을 만듭니다.

#### Section Title (빨간 바 인디케이터)

```css
.section-title {
  font-size: 1.6rem;
  margin-bottom: 20px;
  position: relative;
  padding-left: 16px;
  font-weight: 700;
}
.section-title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 5px;
  height: 22px;
  background: var(--primary);
  border-radius: 3px;
}
```

**중앙 정렬 변형** (`.center-inline`):

```css
.center-inline {
  padding-left: 0;
}
.center-inline::before {
  left: 50%;
  transform: translateX(-50%);
  top: -15px;
  height: 12px;
}
```

---

### 8.3 교육과정 페이지 (Courses) — 가장 복잡한 페이지

#### 구조

```
┌───────────────────────────────────────┐
│ .theme-bg (다크 헤더 + breadcrumb)     │
├───────────────────────────────────────┤
│ .lnb (수평 카테고리 탭 바)             │
│  [학교·교육] [영어·어학] [비즈니스] ... │
├───────────────────────────────────────┤
│ .course-subnav (pill 버튼 가로 스크롤) │
│  (AI 방과후) (코딩수업) (콘텐츠제작)   │
├───────────────────────────────────────┤
│ CourseDetail 컴포넌트                  │
│  ├ course-header (제목 + 뱃지)         │
│  ├ course-info-grid (이미지+정보리스트) │
│  ├ 과정소개 (rich-text + bullet-list)  │
│  ├ 교육 전·후 (before/after 테이블)    │
│  ├ 교육 흐름 (flow-grid 4단계 카드)    │
│  ├ 주차별 수업내용 (schedule-table)    │
│  ├ 평가 및 자격연계                    │
│  └ 책임 강사 (instructor-card)         │
└───────────────────────────────────────┘
```

#### Theme Header (교육과정 전용)

```css
.theme-bg {
  background: linear-gradient(135deg, var(--text-main) 0%, #111827 100%);
  color: var(--white);
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}
/* 우측 상단 블러 원 */
.theme-bg::after {
  content: "";
  position: absolute;
  top: -50px; right: 10%;
  width: 200px; height: 200px;
  background: var(--primary);
  opacity: 0.2;
  filter: blur(40px);
  border-radius: 50%;
}
```

#### LNB (수평 카테고리 탭)

```css
.lnb {
  margin-bottom: 50px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.lnb ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.lnb li {
  flex: 1;
  border-right: 1px solid var(--border);
}
.lnb button {
  width: 100%;
  text-align: center;
  padding: 20px 4px;
  font-size: 0.95rem;
  color: var(--text-muted);
  border-bottom: 4px solid transparent;
  font-weight: 500;
  letter-spacing: -0.05em;
  white-space: nowrap;
}
.lnb button.active {
  background: #fff8f8;                    /* 매우 연한 핑크 */
  color: var(--primary);
  border-bottom: 4px solid var(--primary);
  font-weight: 700;
}
```

#### Course Sub-Navigation (Pill 버튼)

```css
.course-subnav {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;            /* 스크롤바 숨김 */
  cursor: grab;                     /* 드래그 스크롤 */
  user-select: none;
}
.subnav-pill {
  padding: 8px 18px;
  border-radius: 30px;              /* 완전 둥근 pill */
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  background: var(--bg-secondary);
  color: var(--text-muted);
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}
.subnav-pill.active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
  font-weight: 700;
}
```

> [!TIP]
> **드래그 스크롤 기능**도 JS 레벨에서 구현되어 있습니다. `onMouseDown/Move/Up/Leave` 이벤트로 수평 스크롤을 제어합니다. 새 사이트에도 동일하게 적용하세요.

#### Course Info Grid (이미지 + 정보 목록)

```css
.course-info-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;
  padding: 30px;
}
.course-image {
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  min-height: 250px;
  background: #eee;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
```

#### 정보 리스트 (Label + Value)

```css
.course-info-list li {
  display: flex;
  padding: 14px 0;
  border-bottom: 1px dashed #d1d5db;    /* 점선 구분 */
  align-items: center;
}
.course-info-list .label {
  width: 130px;
  font-weight: 700;
  color: var(--text-main);
  flex-shrink: 0;
}
.course-info-list .value {
  color: var(--text-muted);
  font-weight: 400;
  line-height: 1.5;
}
```

---

### 8.4 커뮤니티 페이지 (Tabs + List)

```css
.sub-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  border-bottom: 2px solid var(--border);
  overflow-x: auto;
}
.sub-tabs button {
  padding: 15px 30px;
  font-size: 1.1rem;
  border-bottom: 4px solid transparent;
  color: var(--text-muted);
  font-weight: 500;
  white-space: nowrap;
}
.sub-tabs button.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  font-weight: 700;
}
```

리스트 아이템 패턴:

```html
<div class="flex justify-between items-center py-4 border-b cursor-pointer hover:text-primary transition-colors">
  <span class="font-bold text-lg">제목</span>
  <span class="text-muted text-sm">2026.04.19</span>
</div>
```

---

### 8.5 Contact 페이지 (Form)

```css
.input-field {
  padding: 14px 18px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 1.05rem;
  outline: none;
  transition: border-color 0.2s;
  background: var(--white);
}
.input-field:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(155, 34, 38, 0.1);  /* 포커스 링 */
}
```

- **폼 너비**: `maxWidth: 800px`
- **필드 간격**: `gap: 24px` (flex column)
- **라벨**: `font-weight: 700`, `font-size: 1.1rem`
- **제출 버튼**: `.btn-primary`, `width: 100%`, `padding: 16px`

---

## 9. 컴포넌트 라이브러리

### 9.1 카드 (`.card`)

```css
.card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
}
```

**변형**:
- `card border-none shadow-sm` — 테두리 없이 그림자만
- `card border-none shadow-sm p-10 bg-white` — 넓은 패딩의 흰 카드
- `card border-none bg-secondary/30 p-8` — 연한 회색 배경 카드
- `card hover:-translate-y-2 transition-all` — 호버 시 위로 떠오르는 카드

### 9.2 버튼 시스템

#### Primary Button

```css
.btn-primary {
  background: var(--primary);
  color: var(--white);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-block;
}
.btn-primary:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(155, 34, 38, 0.25);
}
```

#### White Button (Hero 전용)

```css
.btn-white {
  background: var(--white);
  color: var(--primary);
  padding: 15px 30px;
  border-radius: 6px;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
```

#### Outline Button

```css
.btn-outline {
  background: transparent;
  border: 2px solid var(--border);
  color: var(--text-main);
  padding: 14px 28px;
  border-radius: 6px;
  font-weight: 700;
}
.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
}
/* Hero 영역에서의 변형 */
.hero-buttons .btn-outline {
  border-color: var(--white);
  color: var(--white);
}
.hero-buttons .btn-outline:hover {
  background: var(--white);
  color: var(--primary);
}
```

### 9.3 데이터 테이블

```css
.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.schedule-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background: var(--white);
}
.schedule-table th, .schedule-table td {
  padding: 18px 24px;
  border-bottom: 1px solid var(--border);
}
.schedule-table th {
  background: var(--bg-secondary);
  font-weight: 700;
  color: var(--text-main);
  border-bottom: 2px solid #d1d5db;
}
.schedule-table tr:hover td {
  background: #fafafa;
}
```

### 9.4 Bullet List

```css
.bullet-list li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 10px;
  color: var(--text-muted);
  font-size: 1.05rem;
}
.bullet-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary);    /* 버건디 불릿 */
  font-weight: bold;
}
```

### 9.5 강사 카드 (Instructor Card)

```css
.instructor-img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--bg-secondary);
  flex-shrink: 0;
}
.instructor-info h4 {
  font-size: 1.35rem;
  font-weight: 700;
}
.instructor-info small {
  color: var(--primary);
  font-size: 0.95rem;
  margin-left: 10px;
  font-weight: 500;
  background: #fee2e2;        /* 연한 빨강 배경 */
  padding: 4px 10px;
  border-radius: 20px;
}
```

### 9.6 흐름도 (Flow Grid)

```css
.flow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
@media (min-width: 768px) {
  .flow-grid { grid-template-columns: repeat(4, 1fr); }
  .flow-arrow { display: block; }    /* 화살표 표시 */
}
.flow-card {
  position: relative;
  padding: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  background: #fafafa;
}
.flow-step {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
}
.flow-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
```

### 9.7 Badge

```css
.course-badge {
  background: var(--bg-secondary);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
}
```

---

## 10. 애니메이션 & 트랜지션

### 10.1 FadeInUp (페이지 진입)

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

- **사용처**: 페이지 전환 시 메인 콘텐츠, 코스 디테일 진입
- **이징**: `cubic-bezier(0.16, 1, 0.3, 1)` — 빠르게 시작, 부드럽게 도착 (스프링 느낌)

### 10.2 Hero Glow (배경 빛)

```css
@keyframes heroGlow {
  0%   { transform: scale(1) translate(0, 0); opacity: 0.6; }
  100% { transform: scale(1.15) translate(20px, -15px); opacity: 1; }
}
/* 8초 주기, alternate (왕복) */
```

### 10.3 Float Particle (부유 파티클)

```css
@keyframes floatParticle {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
  50%      { transform: translateY(-30px) scale(1.2); opacity: 0.7; }
}
```

### 10.4 호버 트랜지션 규칙

| 요소 | 트랜지션 | 효과 |
|------|----------|------|
| CTA 버튼 | `all 0.3s ease` | `translateY(-2px)` + 그림자 강화 |
| 카드 호버 | `all 150ms cubic-bezier(0.4,0,0.2,1)` | `translateY(-0.5rem)` |
| 내비 링크 | `color 0.2s` | 색상만 부드럽게 전환 |
| LNB 버튼 | `all 0.3s cubic-bezier(0.4,0,0.2,1)` | 배경색 + 텍스트 색 + 하단 바 |
| Pill 버튼 | `all 0.2s ease` | 배경+텍스트+테두리 동시 전환 |

---

## 11. 유틸리티 클래스 시스템

이 프로젝트는 Tailwind를 사용하지 않지만, 자주 쓰는 유틸리티를 직접 정의합니다:

### 레이아웃

| 클래스 | CSS |
|--------|-----|
| `.flex` | `display: flex` |
| `.flex-col` | `flex-direction: column` |
| `.flex-1` | `flex: 1 1 0%` |
| `.grid` | `display: grid` |
| `.items-center` | `align-items: center` |
| `.justify-between` | `justify-content: space-between` |
| `.justify-center` | `justify-content: center` |
| `.center` | `text-align: center` |
| `.mx-auto` | `margin-left: auto; margin-right: auto` |
| `.container` | `max-width: 1200px; margin: 0 auto; padding: 0 20px` |

### 간격 (spacing)

| 클래스 | CSS | 클래스 | CSS |
|--------|-----|--------|-----|
| `.gap-2` | `gap: 0.5rem` | `.gap-4` | `gap: 1rem` |
| `.gap-6` | `gap: 1.5rem` | `.gap-8` | `gap: 2rem` |
| `.mt-4` | `margin-top: 1rem` | `.mt-6` | `margin-top: 1.5rem` |
| `.mt-8` | `margin-top: 2rem` | `.mb-2` | `margin-bottom: 0.5rem` |
| `.mb-3` | `0.75rem` | `.mb-4` | `1rem` |
| `.mb-6` | `1.5rem` | `.mb-8` | `2rem` |
| `.mb-10` | `2.5rem` | `.mb-12` | `3rem` |

### 타이포그래피

| 클래스 | CSS |
|--------|-----|
| `.text-sm` | `font-size: 0.875rem` |
| `.text-lg` | `font-size: 1.125rem` |
| `.text-xl` | `font-size: 1.25rem` |
| `.text-2xl` | `font-size: 1.5rem` |
| `.text-3xl` | `font-size: 1.875rem` |
| `.font-bold` | `font-weight: 700` |
| `.text-main` | `color: var(--text-main)` |
| `.text-primary` | `color: var(--primary)` |
| `.text-white` | `color: var(--white)` |
| `.leading-relaxed` | `line-height: 1.625` |

### 배경 & 테두리

| 클래스 | CSS |
|--------|-----|
| `.bg-secondary` | `background-color: var(--bg-secondary)` |
| `.bg-white` | `background-color: var(--white)` |
| `.border` | `border: 1px solid var(--border)` |
| `.border-b` | `border-bottom: 1px solid var(--border)` |
| `.border-none` | `border: none !important` |
| `.border-dashed` | `border-style: dashed` |
| `.shadow-sm` | `box-shadow: 0 4px 16px rgba(0,0,0,0.04)` |
| `.shadow-lg` | `box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1)` |

### Border Radius

| 클래스 | CSS |
|--------|-----|
| `.rounded-xl` | `border-radius: 0.75rem` |
| `.rounded-2xl` | `border-radius: 1rem` |
| `.rounded-3xl` | `border-radius: 1.5rem` |
| `.rounded-full` | `border-radius: 9999px` |

### 패딩

| 클래스 | CSS |
|--------|-----|
| `.p-6` | `padding: 1.5rem` |
| `.p-8` | `padding: 2rem` |
| `.p-10` | `padding: 2.5rem` |
| `.px-8` | `padding-left: 2rem; padding-right: 2rem` |
| `.py-2` | `padding-top: 0.5rem; padding-bottom: 0.5rem` |
| `.py-3` | `padding-top: 0.75rem; padding-bottom: 0.75rem` |
| `.py-4` | `padding-top: 1rem; padding-bottom: 1rem` |
| `.py-16` | `padding-top: 4rem; padding-bottom: 4rem` |
| `.py-24` | `padding-top: 6rem; padding-bottom: 6rem` |

---

## 12. 전체 CSS 원본 (index.css)

> [!CAUTION]
> 아래는 `index.css` 전문(445줄)입니다. 새 사이트에 그대로 복사하여 사용하면 동일한 룩앤필을 얻을 수 있습니다. `--primary` 값만 원하는 브랜드 컬러로 변경하세요.

전체 CSS 소스 파일 위치: [index.css](file:///c:/Users/itban/Desktop/바탕에 있던것/논병아리/황준걸/AI 강사 양성과정 홈페이지/web/src/index.css)

---

## 부록: 새 사이트 적용 체크리스트

- [ ] Pretendard 폰트 CDN 임포트 추가
- [ ] `:root` CSS Variables 복사 (필요시 `--primary` 값 변경)
- [ ] 글로벌 리셋 CSS 적용
- [ ] `.container` (max-width: 1200px) 설정
- [ ] GNB 컴포넌트 구현 (sticky, 72px, 드롭다운 포함)
- [ ] Footer 컴포넌트 구현 (다크 배경)
- [ ] `.page-header` 서브페이지 배너 구현
- [ ] `.section-title` 빨간 바 인디케이터 구현
- [ ] `.card` 컴포넌트 구현 (12px radius, 32px padding)
- [ ] 버튼 시스템 구현 (primary, white, outline)
- [ ] 데이터 테이블 스타일 구현
- [ ] fadeInUp 애니메이션 추가
- [ ] 히어로 섹션 구현 (92vh, 그라데이션, glow, 파티클)
- [ ] LNB + Sub-nav pill 구현 (교육과정 페이지)
- [ ] 폼 필드 스타일 구현 (focus 링 포함)

---

> **작성자**: Antigravity (AI Coding Assistant)
> **기준 코드**: `web/src/index.css` (445줄), `web/src/components/`, `web/src/pages/`
