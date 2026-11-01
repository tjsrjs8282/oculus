import type { ImageMetadata } from 'astro';
import type { IconName } from '@/lib/icons';
import { official } from './site';
import quest3Image from '@/assets/gen/quest3-product.webp';
import quest3sImage from '@/assets/gen/quest3s-product.webp';

export interface StorageOption {
  id: string;
  label: string;
  price: string;
}

export interface Product {
  id: 'quest-3' | 'quest-3s';
  name: string;
  tagline: string;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  storage: StorageOption[];
  storeUrl: string;
  video: { id: string; title: string };
  points: { icon: IconName; label: string }[];
  /** 카드 뒤 글로우 색 */
  glow: string;
}

/**
 * 가격: 미국 Meta 공식 스토어 기준가(2026-04-19 인상분 반영).
 * 국내 공식 판매가는 공개 페이지에서 확인되지 않아 USD로 표기한다.
 */
export const priceNote =
  '미국 Meta 공식 스토어 기준가 · 2026년 4월 19일 조정 반영 · 국내 판매가는 다를 수 있어요';

export const products: Product[] = [
  {
    id: 'quest-3',
    name: 'Meta Quest 3',
    tagline: '가장 선명한 혼합현실',
    summary:
      '팬케이크 렌즈와 4K+ Infinite Display, 뎁스 센서까지. 현실과 가상이 가장 자연스럽게 겹쳐지는 Meta의 플래그십 헤드셋.',
    image: quest3Image,
    imageAlt: '정면에 세로형 센서 3개가 있는 흰색 Meta Quest 3 헤드셋',
    storage: [{ id: '512', label: '512GB', price: '$599.99' }],
    storeUrl: official.quest3,
    video: { id: 'Exu7r2vZpcw', title: 'This is Meta Quest 3' },
    points: [
      { icon: 'eye', label: '4K+ Infinite Display' },
      { icon: 'aperture', label: '팬케이크 렌즈 · 110° 시야각' },
      { icon: 'scan', label: '뎁스 센서 + 풀 컬러 패스스루' },
    ],
    glow: '79 140 255',
  },
  {
    id: 'quest-3s',
    name: 'Meta Quest 3S',
    tagline: 'Quest 3의 성능을 더 가볍게',
    summary:
      'Quest 3와 같은 Snapdragon XR2 Gen 2 칩셋과 풀 컬러 혼합현실. 처음 VR을 시작하기에 가장 합리적인 선택.',
    image: quest3sImage,
    imageAlt: '정면 양쪽에 삼각형 카메라 클러스터가 있는 흰색 Meta Quest 3S 헤드셋',
    storage: [
      { id: '128', label: '128GB', price: '$349.99' },
      { id: '256', label: '256GB', price: '$449.99' },
    ],
    storeUrl: official.quest3s,
    video: { id: 'oAf5M4Q0Pu8', title: 'Introducing Meta Quest 3S' },
    points: [
      { icon: 'cpu', label: 'Snapdragon XR2 Gen 2' },
      { icon: 'layers', label: '풀 컬러 혼합현실' },
      { icon: 'zap', label: '액션 버튼으로 패스스루 즉시 전환' },
    ],
    glow: '52 214 255',
  },
];

export interface SpecRow {
  label: string;
  quest3: string;
  quest3s: string;
}

export const specs: SpecRow[] = [
  { label: '칩셋', quest3: 'Snapdragon XR2 Gen 2', quest3s: 'Snapdragon XR2 Gen 2' },
  { label: '메모리', quest3: '8GB', quest3s: '8GB' },
  { label: '저장 용량', quest3: '512GB', quest3s: '128GB · 256GB' },
  { label: '디스플레이', quest3: '4K+ Infinite Display (LCD)', quest3s: 'LCD' },
  { label: '해상도 (한쪽 눈)', quest3: '2064 × 2208', quest3s: '1832 × 1920' },
  { label: '렌즈', quest3: '팬케이크 렌즈', quest3s: '프레넬 렌즈' },
  { label: '시야각', quest3: '수평 110° · 수직 96°', quest3s: '수평 96° · 수직 90°' },
  { label: '주사율', quest3: '최대 120Hz', quest3s: '최대 120Hz' },
  { label: '패스스루', quest3: '풀 컬러 + 뎁스 센서', quest3s: '풀 컬러' },
  { label: '렌즈 간격(IPD)', quest3: '53–75mm 연속 조절', quest3s: '58 · 63 · 68mm 3단계' },
  { label: '배터리 (평균)', quest3: '약 2.2시간', quest3s: '약 2.5시간' },
  { label: '무게', quest3: '515g', quest3s: '514g' },
  { label: '컨트롤러', quest3: 'Touch Plus', quest3s: 'Touch Plus' },
  { label: '핸드 트래킹', quest3: '지원', quest3s: '지원' },
  { label: '액션 버튼', quest3: '—', quest3s: '헤드셋 측면' },
  { label: '시작 가격 (USD)', quest3: '$599.99', quest3s: '$349.99' },
];

export const inTheBox: { icon: IconName; label: string }[] = [
  { icon: 'headset', label: '헤드셋' },
  { icon: 'gamepad', label: 'Touch Plus 컨트롤러 2개' },
  { icon: 'battery', label: 'AA 배터리 2개' },
  { icon: 'plug', label: '충전 어댑터 · USB-C 케이블' },
];
