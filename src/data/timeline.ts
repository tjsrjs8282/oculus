export interface Milestone {
  date: string;
  /** <time datetime>용 (YYYY-MM) */
  iso: string;
  title: string;
  text: string;
}

/** 최근 주요 발표 — 최신순 */
export const milestones: Milestone[] = [
  {
    date: '2026.09',
    iso: '2026-09',
    title: 'Meta VR Glasses 발표',
    text: 'Connect 2026에서 컴퓨팅 퍽에 연결하는 초경량 VR 글래스를 공개했어요. 2027년 봄, $1,299.99에 출시될 예정이에요.',
  },
  {
    date: '2026.04',
    iso: '2026-04',
    title: 'Quest 3 · 3S 가격 조정',
    text: '메모리 가격 상승으로 미국 기준 Quest 3S는 $349.99부터, Quest 3는 $599.99로 조정됐어요.',
  },
  {
    date: '2025.06',
    iso: '2025-06',
    title: 'Meta Quest 3S Xbox 에디션',
    text: 'Xbox 무선 컨트롤러와 엘리트 스트랩, Game Pass Ultimate 3개월을 함께 담은 한정판이 나왔어요.',
  },
  {
    date: '2024.10',
    iso: '2024-10',
    title: 'Meta Quest 3S 출시',
    text: 'Quest 3와 같은 칩셋과 풀 컬러 혼합현실을 $299.99에 담은 입문형 헤드셋.',
  },
  {
    date: '2024.04',
    iso: '2024-04',
    title: 'Meta Horizon OS',
    text: 'Quest의 운영체제를 Meta Horizon OS로 이름 짓고, 다른 제조사에도 여는 플랫폼 전략을 발표했어요.',
  },
  {
    date: '2023.10',
    iso: '2023-10',
    title: 'Meta Quest 3 출시',
    text: '팬케이크 렌즈와 풀 컬러 혼합현실을 갖춘 지금의 플래그십.',
  },
  {
    date: '2022.10',
    iso: '2022-10',
    title: 'Meta Quest Pro 출시',
    text: '컬러 패스스루와 시선·표정 추적을 처음 갖춘 전문가용 헤드셋.',
  },
  {
    date: '2021.10',
    iso: '2021-10',
    title: 'Meta 출범',
    text: 'Facebook이 사명을 Meta로 바꾸고, 헤드셋 브랜드도 Meta Quest로 통합했어요.',
  },
];
