export interface NewsItem {
  date: string;
  /** 2026-09-23 형태, <time datetime>용 */
  iso: string;
  tag: string;
  title: string;
  summary: string;
  source: { name: string; url: string };
}

export const news: NewsItem[] = [
  {
    date: '2026.09.23',
    iso: '2026-09-23',
    tag: 'Connect 2026',
    title: 'Meta VR Glasses 공개 — 2027년 봄 출시',
    summary:
      '퍽에 연결하는 초경량 VR 글래스가 1,299.99달러로 발표됐어요. 핸드·시선 추적과 AI 중심 OS를 내세웠고, Quest 3·3S는 계속 판매돼요.',
    source: {
      name: 'UploadVR',
      url: 'https://www.uploadvr.com/new-games-announced-for-meta-vr-glasses/',
    },
  },
  {
    date: '2026.10.19',
    iso: '2026-10-19',
    tag: '게임',
    title: 'PAYDAY: Aces High 오픈 플레이테스트',
    summary:
      'Quest 3·3S에서 협동 하이스트 슈터를 먼저 해볼 수 있어요. Beat Saber: Flux 등 2027년 라인업도 함께 공개됐어요.',
    source: {
      name: 'UploadVR',
      url: 'https://www.uploadvr.com/new-games-announced-for-meta-vr-glasses/',
    },
  },
  {
    date: '2026.04.19',
    iso: '2026-04-19',
    tag: '가격',
    title: 'Meta Quest 3·3S 가격 조정',
    summary:
      '메모리 가격 상승으로 미국 기준 Quest 3S 128GB $349.99, 256GB $449.99, Quest 3 512GB $599.99로 조정됐어요.',
    source: { name: 'Meta 블로그', url: 'https://www.meta.com/blog/update-meta-quest-pricing/' },
  },
];
