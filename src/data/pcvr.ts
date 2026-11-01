import type { IconName } from '@/lib/icons';

export interface ConnectMethod {
  id: string;
  icon: IconName;
  name: string;
  kind: string;
  desc: string;
  needs: string[];
  best: string;
}

export const connectMethods: ConnectMethod[] = [
  {
    id: 'link',
    icon: 'plug',
    name: 'Meta Quest Link',
    kind: 'USB-C 케이블',
    desc: '헤드셋과 PC를 케이블 하나로 연결해요. 지연이 가장 적고 화질이 안정적이에요.',
    needs: ['USB 3 포트', '데이터 전송용 USB-C 케이블', 'Windows용 Meta Quest Link 앱'],
    best: '레이싱·비행 시뮬레이터처럼 화질이 중요한 게임',
  },
  {
    id: 'air-link',
    icon: 'wifi',
    name: 'Air Link',
    kind: '무선 · Wi-Fi',
    desc: '선 없이 같은 네트워크에서 PC VR을 스트리밍해요. 방 안을 자유롭게 움직일 수 있어요.',
    needs: ['5GHz Wi-Fi 공유기 (Wi-Fi 6/6E 권장)', 'PC는 공유기에 유선 연결', 'Meta Quest Link 앱'],
    best: '많이 움직이는 액션·리듬 게임',
  },
  {
    id: 'steam-link',
    icon: 'monitor',
    name: 'Steam Link',
    kind: '무선 · SteamVR',
    desc: 'Valve의 Steam Link 앱으로 SteamVR 게임을 바로 무선 스트리밍해요.',
    needs: ['Steam과 SteamVR이 설치된 PC', '5GHz Wi-Fi 공유기', 'Quest용 Steam Link 앱'],
    best: 'Steam 라이브러리를 주로 쓰는 경우',
  },
];

export interface Requirement {
  icon: IconName;
  label: string;
  value: string;
}

/** Quest Link 최소 요구사항 — 정확한 최신 목록은 Meta 고객센터에서 확인 */
export const requirements: Requirement[] = [
  { icon: 'monitor', label: '운영체제', value: 'Windows 10 / 11 (64비트)' },
  { icon: 'cpu', label: '프로세서', value: 'Intel Core i5-4590 / AMD Ryzen 5 1500X 이상' },
  { icon: 'storage', label: '메모리', value: '8GB RAM 이상' },
  {
    icon: 'gamepad',
    label: '그래픽 카드',
    value: 'NVIDIA GTX 970 / AMD Radeon RX 400 시리즈 이상',
  },
  { icon: 'plug', label: '포트', value: 'USB 3 포트 (Quest Link 케이블)' },
  { icon: 'wifi', label: '네트워크', value: '5GHz Wi-Fi, Wi-Fi 6/6E 권장 (Air Link)' },
];

export type GpuTier = 'great' | 'good' | 'ok' | 'min' | 'no' | 'unknown';

export const gpuTiers: Record<GpuTier, { label: string; desc: string }> = {
  great: { label: '쾌적해요', desc: '최신 PC VR 게임도 높은 그래픽 설정으로 즐길 수 있어요.' },
  good: { label: '충분해요', desc: '대부분의 PC VR 게임을 원활하게 즐길 수 있어요.' },
  ok: {
    label: '플레이 가능',
    desc: '즐길 수 있지만 무거운 게임은 그래픽 설정을 낮추는 게 좋아요.',
  },
  min: {
    label: '최소 사양',
    desc: 'Quest Link 최소 요구사항 수준이에요. 가벼운 게임 위주로 추천해요.',
  },
  no: {
    label: '어려워요',
    desc: 'Quest Link 구동이 어려운 그래픽 카드예요. 업그레이드를 권장해요.',
  },
  unknown: { label: '확인 필요', desc: '공식 호환 목록에서 지원 여부를 먼저 확인해 주세요.' },
};

export const gpuGroups: {
  vendor: string;
  options: { id: string; label: string; tier: GpuTier }[];
}[] = [
  {
    vendor: 'NVIDIA',
    options: [
      { id: 'rtx50', label: 'GeForce RTX 50 시리즈', tier: 'great' },
      { id: 'rtx40', label: 'GeForce RTX 40 시리즈', tier: 'great' },
      { id: 'rtx30', label: 'GeForce RTX 30 시리즈', tier: 'great' },
      { id: 'rtx20', label: 'GeForce RTX 20 시리즈', tier: 'good' },
      { id: 'gtx16', label: 'GeForce GTX 16 시리즈 (1650 Super 이상)', tier: 'ok' },
      { id: 'gtx10', label: 'GeForce GTX 10 시리즈 (1060 이상)', tier: 'ok' },
      { id: 'gtx9', label: 'GeForce GTX 970 / 980', tier: 'min' },
      { id: 'nv-old', label: '그 이전 모델 · 노트북 MX 시리즈', tier: 'no' },
    ],
  },
  {
    vendor: 'AMD',
    options: [
      { id: 'rx9000', label: 'Radeon RX 9000 시리즈', tier: 'great' },
      { id: 'rx7000', label: 'Radeon RX 7000 시리즈', tier: 'great' },
      { id: 'rx6000', label: 'Radeon RX 6000 시리즈', tier: 'good' },
      { id: 'rx5000', label: 'Radeon RX 5000 시리즈', tier: 'ok' },
      { id: 'rx400', label: 'Radeon RX 400 / 500 시리즈', tier: 'min' },
      { id: 'amd-old', label: '그 이전 모델 · 내장 그래픽', tier: 'no' },
    ],
  },
  {
    vendor: 'Intel',
    options: [
      { id: 'arc', label: 'Intel Arc 시리즈', tier: 'unknown' },
      { id: 'igpu', label: '내장 그래픽 (UHD · Iris)', tier: 'no' },
    ],
  },
];

export const linkSteps = [
  {
    title: 'Link 앱 설치',
    text: 'PC에 Windows용 Meta Quest Link 앱을 설치하고 Meta 계정으로 로그인해요.',
  },
  {
    title: '헤드셋 연결',
    text: 'USB-C 케이블을 꽂거나, 헤드셋 설정 → 시스템 → Link에서 Air Link를 켜요.',
  },
  {
    title: 'Link 허용',
    text: '헤드셋에 뜨는 “Link 허용” 창에서 확인을 누르면 PC 화면이 VR로 전환돼요.',
  },
  {
    title: 'PC VR 실행',
    text: 'Link 메뉴나 SteamVR에서 게임을 실행하면 끝. 성능이 부족하면 해상도를 낮춰 보세요.',
  },
];
