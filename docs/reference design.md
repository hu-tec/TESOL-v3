## 1. 계층적 헤더 및 내비게이션 구조
가장 상단에는 유틸리티 메뉴(로그인, 회원가입)가, 그 아래에 메인 GNB(Global Navigation Bar)가 위치하며, 마우스 오버 시 하위 메뉴가 내려오는 **2-Tier 또는 3-Tier 드롭다운 방식**을 사용합니다.

```html
<header>
    <div class="logo">...</div>
    <nav class="js-nav">
        <ul>
            <li>대메뉴
                <ul class="nav-2dep"> <li>중메뉴
                        <ul class="nav-3dep">...</ul> </li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
```

## 2. 서브페이지 히어로(Hero) 섹션
본격적인 콘텐츠가 나오기 전, 현재 페이지의 위치(Breadcrumbs)와 제목을 시각적으로 보여주는 **풀 위드(Full-width) 배경 영역**입니다.

* **시각 효과:** `AOS.js` 같은 라이브러리를 활용해 제목이 위로 솟아오르는 등의 인터랙션 효과를 줍니다.
* **스크롤 유도:** `scroll-down` 아이콘을 배치하여 하단 콘텐츠로의 시선 이동을 유도합니다.

## 3. 핵심 정보 요약 박스 (Detail Info Grid)
강좌나 상품의 핵심 스펙(기간, 시간, 비용 등)을 **Label-Value 쌍의 리스트 형태**로 구성합니다.

```html
<ul class="pro-list01">
    <li>
        <span class="tit">항목명(ex. 접수기간)</span>
        <span class="con">실제 데이터(ex. 2026-02-01...)</span>
    </li>
</ul>
```

## 4. 탭 및 앵커 기반의 서브 내비게이션
페이지 중간에 위치하여 해당 카테고리 내의 다른 메뉴로 빠르게 이동할 수 있게 하는 **Sticky 또는 상단 고정형 탭** 구조입니다. 현재 활성화된 메뉴에는 `on` 클래스를 부여하여 강조합니다.

```html
<div class="js-sub-nav">
    <ul>
        <li class="item on"><a href="...">현재 메뉴</a></li>
        <li class="item"><a href="...">다른 메뉴</a></li>
    </ul>
</div>
```

## 5. 아코디언 및 테이블 혼합형 커리큘럼
주차별 수업 내용이나 상세 커리큘럼을 보여줄 때 사용되는 형식입니다. 모바일 대응을 위해 **가로 스크롤(`table-wrap`)** 기능을 포함한 정형화된 테이블을 사용합니다.

* **헤더 강조:** 주차(Week), 주제, 세부내용으로 이어지는 명확한 컬럼 구분.
* **반응형 처리:** 표가 넓어질 경우 `overflow-x: auto`를 적용하여 잘리지 않게 처리.

## 6. 프로필 카드 섹션 (Instructor Info)
강사나 담당자의 정보를 이미지와 함께 배치하는 방식입니다. 사진은 보통 왼쪽에, 이력 및 메일 정보는 오른쪽에 배치하는 **수평 레이아웃**을 선호합니다.

```html
<div class="course-teacher">
    <li class="cf">
        <div class="image"><img src="..."></div> <div class="txt">
            <span class="name">이름</span>
            <div class="bot">학력 및 주요 경력 리스트</div>
        </div>
    </li>
</div>
```

---

### **디자인 특징 요약**
1.  **반응형 레이아웃:** `viewport` 설정과 미디어 쿼리를 통한 모바일 최적화.
2.  **가독성 중심:** `word-break: keep-all` 등을 사용하여 한글 단어가 어색하게 끊기지 않도록 처리.
3.  **고정 요소:** 페이지 우측 하단에 'TOP' 버튼이나 '수강정보 바로가기' 같은 **플로팅 퀵메뉴** 배치.
4.  **정보 위계:** 굵은 폰트(Nt_B)와 보통 폰트(Nt_M)를 명확히 구분하여 정보의 중요도를 시각화함.