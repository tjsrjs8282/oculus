export const site = {
  name: 'oculus',
  title: 'Oculus — Meta Quest 3 · 3S',
  description:
    '풀 컬러 혼합현실의 Meta Quest 3·3S와 게임, PC VR 연결, 설정 가이드를 한곳에서 만나보세요. (비공식 팬 사이트)',
  repo: 'https://github.com/tjsrjs8282/oculus',
  author: 'tjsrjs8282',
  /** 가격·사양·뉴스를 마지막으로 확인한 시점 */
  verifiedAt: '2026년 11월',
} as const;

export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: 'quest.html', label: 'Meta Quest 3·3S' },
  { href: 'pc-vr.html', label: 'PC VR' },
  { href: 'setup.html', label: '설정 가이드' },
  { href: 'games.html', label: '게임' },
  { href: 'oculus.html', label: '소개' },
];

/** 2020년 버전의 'Rift S 개요 / 지원 PC / 설정' 탭을 잇는 제품 하위 메뉴 */
export const productNav: NavItem[] = [
  { href: 'quest.html', label: '개요' },
  { href: 'pc-vr.html', label: 'PC VR 연결' },
  { href: 'setup.html', label: '설정 가이드' },
];

/** 구매·지원은 모두 Meta 공식 채널로 보낸다. (2026-11 접속 확인) */
export const official = {
  store: 'https://www.meta.com/kr/quest/',
  quest3: 'https://www.meta.com/kr/quest/quest-3/',
  quest3s: 'https://www.meta.com/kr/quest/quest-3s/',
  accessories: 'https://www.meta.com/kr/quest/accessories/',
  help: 'https://www.meta.com/help/quest/',
  developers: 'https://developers.meta.com/horizon/',
  youtube: 'https://www.youtube.com/@metavr',
  pricing: 'https://www.meta.com/blog/update-meta-quest-pricing/',
} as const;
