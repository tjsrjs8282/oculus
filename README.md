# oculus — 2026 리뉴얼

> 2020년 jQuery로 만든 Oculus 클론 퍼블리싱 포트폴리오를, 2026년 기준의 모던 웹으로 처음부터 다시 만들었습니다.
> 제품도 Oculus Quest · Rift S · Go에서 **Meta Quest 3 · 3S**(그리고 2027년 **Meta VR Glasses**)로 최신화했습니다.

**배포 주소** · https://tjsrjs8282.github.io/oculus/

> [!NOTE]
> 개인 포트폴리오용 **비공식 팬 사이트**입니다. Meta, Meta Quest, Oculus는 Meta Platforms, Inc.의 상표이며 이 사이트는 Meta와 관련이 없습니다. 구매·지원 버튼은 모두 Meta 공식 사이트로 연결됩니다.

## 무엇이 바뀌었나

|                       | 2020                                                      | 2026                                                                       |
| --------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| 스택                  | 정적 HTML 6장 + jQuery 3.1 + bxSlider · colorbox · wow.js | **Astro 7** + TypeScript(strictest) · 컴포넌트 · 데이터 파일 분리          |
| 홈 첫 로드 코드(gzip) | 약 **525KB** (Font Awesome `all.js` 하나만 430KB)         | 약 **25KB** (HTML 15.5 + CSS 6.6 + JS 1.1 + 인라인 스크립트)               |
| 아이콘                | Font Awesome 전체 (SVG 1,556개 · 웹폰트 · LESS)           | 실제로 쓰는 아이콘 35개만 인라인 SVG                                       |
| 폰트                  | Google Fonts Noto Sans (한글 미지원)                      | Pretendard Variable를 **사이트에 쓰인 글자만 서브셋** → 141KB 1파일        |
| 이미지                | 원본 PNG/JPG 67MB, 그대로 로드                            | AVIF + WebP 폴백, 반응형 `srcset`, 지연 로딩, CLS 0 (홈 히어로 38KB)       |
| 영상                  | 17MB · 11MB · 10MB MP4 자동 재생                          | 6초 루프 1개 (WebM 232KB / MP4 306KB), 데스크톱 + 동작 줄이기 꺼짐일 때만  |
| 헤더·푸터             | 6개 페이지에 복붙                                         | `Header` / `Footer` 컴포넌트 하나                                          |
| 제품                  | Oculus Quest · Rift S · Go (단종)                         | Meta Quest 3 · 3S + Meta VR Glasses(2027 예정)                             |
| 반응형                | 1245px 고정폭 + 560px 분기 몇 개                          | 유동 타이포(`clamp`) · Grid · 360px부터 와이드까지                         |
| 접근성                | `user-scalable=no`, 빈 `alt`, `div` 버튼                  | 시맨틱 랜드마크, 스킵 링크, 키보드 탭/다이얼로그, `prefers-reduced-motion` |

## 페이지

| 주소               | 내용                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| `index.html`       | 시네마틱 히어로(루프 영상) · 라인업 · 경험 벤토 · 스펙 카운터 · 게임 레일 · VR Glasses 티저 · 뉴스 |
| `quest.html`       | Quest 3 / 3S 탭 · 핵심 기능 · 혼합현실 · **차이점만 보기** 스펙 비교 · 구성품 · FAQ                |
| `pc-vr.html`       | Quest Link · Air Link · Steam Link · 최소 사양 · **그래픽카드 호환성 체크**                        |
| `setup.html`       | 7단계 **설정 체크리스트**(진행률 링, 브라우저에 저장) · 안전 수칙 · 문제 해결                      |
| `games.html`       | 2026 추천작(**장르 필터** · View Transitions) · Connect 2026 출시 예정작                           |
| `oculus.html`      | 소개 — 왜 Meta Quest인가 · 지금과 다음(Quest 3 · 3S · VR Glasses) · 최근 주요 발표 · 개발자 플랫폼 |
| `rift.html` 외 2개 | 2020년 주소 호환용 리다이렉트 (`rift` → `quest`, `riftpc` → `pc-vr`, `oculusSetting` → `setup`)    |

## 이번 리뉴얼에서 쓴 최신 웹 기능

- **JS 없는 인터랙션** — `:has()`로 용량별 가격 전환, 스펙 비교 “차이점만 보기”, 게임 장르 필터
- **Cross-document View Transitions** — `@view-transition`만으로 페이지 전환 애니메이션 (라이브러리 0)
- **Scroll-driven Animations** — 히어로 패럴랙스, 주요 발표 타임라인 진행선 (`animation-timeline`)
- **네이티브 `<dialog>` + `@starting-style`** — 모바일 메뉴와 YouTube 플레이어, 포커스 관리와 ESC는 브라우저가 처리
- **`<details name>` + `::details-content`** — 하나만 열리고 높이까지 부드러운 FAQ 아코디언
- **CSS scroll-snap 레일** — bxSlider·Swiper 대신 브라우저 기본 스크롤
- **스크롤 등장 효과** — `IntersectionObserver` 몇 줄로 wow.js + animate.css(81KB) 대체

## 개발

```bash
npm install
npm run dev      # http://localhost:4321/oculus/
npm run build    # 폰트 서브셋 → 타입 체크 → 정적 빌드(dist/)
npm run preview  # 빌드 결과 미리보기
npm run format   # Prettier
```

Node.js 22.23 이상(`.nvmrc`는 24)이 필요합니다. `npm run dev` / `build` 전에 `scripts/subset-font.mjs`가 `src/`의 모든 텍스트를 읽어 폰트 서브셋을 다시 만듭니다.

```
src/
├─ assets/        gen/(생성 이미지) · legacy/(2020년 이미지) · fonts/(서브셋)
├─ components/    Header, Footer, ProductCard, GameCard, Rail, VideoDialog …
├─ data/          products · games · timeline · news · pcvr · setup  ← 제품·콘텐츠는 여기만 고치면 된다
├─ layouts/       BaseLayout(SEO·OG·폰트 프리로드) · RedirectLayout
├─ pages/         페이지 = 파일 (build.format: 'file' 로 *.html 주소 유지)
├─ scripts/       site.ts (헤더·메뉴·등장 효과·영상·카운터·뉴스레터)
└─ styles/        global.css (디자인 토큰 · 기본 스타일)
```

제품 가격이나 사양이 바뀌면 `src/data/products.ts`, 새 게임은 `src/data/games.ts`만 고치면 됩니다.

## 배포

`.github/workflows/deploy.yml`이 `master`에 push될 때마다 빌드해서 GitHub Pages에 올립니다.
처음 한 번은 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 바꿔야 합니다. (2020년 버전은 `master` 브랜치 루트를 그대로 배포하는 방식이었습니다.)

## 콘텐츠 출처와 크레딧

- 가격: [Meta 블로그 — An Update on Meta Quest Pricing](https://www.meta.com/blog/update-meta-quest-pricing/) (2026-04-19 조정, 미국 기준가)
- Connect 2026 · 출시 예정 게임: [UploadVR](https://www.uploadvr.com/new-games-announced-for-meta-vr-glasses/), [The Ghost Howls](https://skarredghost.com/2026/09/24/meta-connect-2026-3/)
- 영상: Meta 공식 YouTube 채널(@metavr) 등 퍼가기 허용 영상
- 제품·라이프스타일 사진과 히어로 루프 영상은 [Higgsfield](https://higgsfield.ai)로 생성한 연출 이미지입니다(GPT Image 2.5, Seedance 2.5). 실제 제품 사진이 아닙니다.
- 폰트: [Pretendard](https://github.com/orioncactus/pretendard) (SIL OFL 1.1) · 아이콘: [Lucide](https://lucide.dev) (ISC), [Simple Icons](https://simpleicons.org) (CC0)

가격·사양·일정은 2026년 11월 기준 공개 정보로, 실제와 다를 수 있습니다.
