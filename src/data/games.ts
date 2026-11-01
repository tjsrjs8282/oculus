export type Genre =
  | 'action'
  | 'adventure'
  | 'shooter'
  | 'rhythm'
  | 'puzzle'
  | 'horror'
  | 'social'
  | 'sports'
  | 'fitness';

export const genreLabels: Record<Genre, string> = {
  action: '액션',
  adventure: '어드벤처',
  shooter: '슈팅',
  rhythm: '리듬',
  puzzle: '퍼즐',
  horror: '호러',
  social: '소셜',
  sports: '스포츠',
  fitness: '피트니스',
};

export interface Game {
  title: string;
  studio: string;
  year?: number;
  genres: Genre[];
  desc: string;
  /** 타이포그래피 커버의 그라데이션 3색 (밝은 강조색 → 보조색 → 바탕) */
  colors: [string, string, string];
  badge?: string;
}

/**
 * 2026년에 즐길 만한 Quest 대표작. 공식 키 아트를 쓰지 않고 색과 타이포만으로 커버를 만든다.
 */
export const featuredGames: Game[] = [
  {
    title: 'Batman: Arkham Shadow',
    studio: 'Camouflaj',
    year: 2024,
    genres: ['action', 'adventure'],
    desc: '배트맨이 되어 고담의 밤을 누비는 Arkham 시리즈 정식 VR 작품.',
    colors: ['#f5c518', '#1b2a4a', '#05070d'],
    badge: 'Quest 3·3S 전용',
  },
  {
    title: "Marvel's Deadpool VR",
    studio: 'Twisted Pixel Games',
    year: 2025,
    genres: ['action', 'shooter'],
    desc: '제4의 벽을 시원하게 부수는 데드풀식 하이텐션 액션.',
    colors: ['#ff2d3d', '#4a0b12', '#0a0606'],
    badge: 'Quest 3·3S 전용',
  },
  {
    title: "Asgard's Wrath 2",
    studio: 'Sanzaru Games',
    year: 2023,
    genres: ['action', 'adventure'],
    desc: '이집트와 북유럽 신화를 넘나드는 대작 액션 RPG.',
    colors: ['#e0aa4f', '#0f5160', '#07090c'],
  },
  {
    title: 'Beat Saber',
    studio: 'Beat Games',
    year: 2019,
    genres: ['rhythm', 'fitness'],
    desc: '두 자루의 광선검으로 비트를 베는, VR 리듬 게임의 대명사.',
    colors: ['#ff2d55', '#1e6bff', '#05060a'],
  },
  {
    title: "Assassin's Creed Nexus VR",
    studio: 'Ubisoft',
    year: 2023,
    genres: ['action', 'adventure'],
    desc: '에지오, 카산드라, 코너가 되어 즐기는 1인칭 잠입 액션.',
    colors: ['#f2ede4', '#9b1c1c', '#0b0b0d'],
  },
  {
    title: 'Arizona Sunshine 2',
    studio: 'Vertigo Games',
    year: 2023,
    genres: ['shooter', 'horror'],
    desc: '반려견 버디와 함께 좀비 사막을 헤쳐 나가는 협동 FPS.',
    colors: ['#ff8a1f', '#1f8a8a', '#120a05'],
  },
  {
    title: 'Metro Awakening',
    studio: 'Vertigo Games',
    year: 2024,
    genres: ['horror', 'adventure'],
    desc: '메트로 세계관의 어둠을 정면으로 마주하는 스토리 호러.',
    colors: ['#c4702a', '#2a1d14', '#050403'],
  },
  {
    title: 'Alien: Rogue Incursion',
    studio: 'Survios',
    year: 2024,
    genres: ['horror', 'shooter'],
    desc: '제노모프가 도사린 행성에서 살아남는 오리지널 에일리언 스토리.',
    colors: ['#8cff5a', '#0d3b2a', '#020403'],
  },
  {
    title: 'Tetris Effect: Connected',
    studio: 'Enhance',
    genres: ['puzzle', 'rhythm'],
    desc: '음악과 빛이 쏟아지는 몰입형 테트리스.',
    colors: ['#8b5cff', '#00d1ff', '#06061a'],
  },
  {
    title: 'Gorilla Tag',
    studio: 'Another Axiom',
    year: 2021,
    genres: ['social', 'sports'],
    desc: '두 팔로만 달리고 매달리는 무료 소셜 술래잡기.',
    colors: ['#6fd141', '#6b4423', '#0a1205'],
    badge: '무료',
  },
  {
    title: 'Walkabout Mini Golf',
    studio: 'Mighty Coconut',
    year: 2020,
    genres: ['sports', 'social'],
    desc: '환상적인 코스를 친구와 함께 도는 VR 미니골프.',
    colors: ['#b5f23d', '#38bdf8', '#062016'],
  },
  {
    title: 'FitXR',
    studio: 'FitXR',
    genres: ['fitness', 'rhythm'],
    desc: '복싱·댄스·HIIT 클래스를 거실에서 매일 새롭게.',
    colors: ['#ff5ccd', '#ff9a3c', '#140612'],
  },
];

export interface UpcomingGame {
  title: string;
  when: string;
  note: string;
  desc: string;
}

/** Connect 2026(2026-09-23) 전후 발표된 타이틀 — 출처: UploadVR */
export const upcomingGames: UpcomingGame[] = [
  {
    title: 'PAYDAY: Aces High',
    when: '2026.10.19',
    note: 'Quest 3·3S 오픈 플레이테스트',
    desc: '협동 하이스트 슈터 PAYDAY를 VR로. 플레이테스트 참여자에게 전용 마스크 지급.',
  },
  {
    title: 'Beat Saber: Flux',
    when: '2027',
    note: 'Beat Saber 대형 업데이트',
    desc: '컨트롤러 없이 손으로 즐기는 핸드 트래킹 모드와 35곡, 새로 짠 캠페인.',
  },
  {
    title: 'Dragon Grove',
    when: '2027 봄',
    note: 'Meta VR Glasses 동시 출시',
    desc: 'Quest 3·3S에서도 컨트롤러 없이 끝까지 플레이할 수 있는 신작.',
  },
  {
    title: 'Phoenix Wright: Ace Attorney – Dual Destinies VR',
    when: '2027',
    note: 'Capcom · Meta Quest',
    desc: '손짓으로 증거를 내밀고 목소리로 “이의 있음!”을 외치는 역전재판.',
  },
  {
    title: 'Tetris Effect: Mixed Realities',
    when: '2027',
    note: '컨트롤러 프리 · 혼합현실',
    desc: '내 방의 구조와 패스스루를 그대로 무대로 쓰는 새로운 Tetris Effect.',
  },
  {
    title: 'Two Point Hospital VR',
    when: '출시 예정',
    note: 'Quest 3·3S',
    desc: '엉뚱한 병원 경영 시뮬레이션을 손 닿는 거리에서.',
  },
];
