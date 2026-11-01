import type { ImageMetadata } from 'astro';
import gearVr from '@/assets/legacy/gear-vr.jpg';
import riftCv1 from '@/assets/legacy/rift-cv1.jpg';
import oculusGo from '@/assets/legacy/oculus-go.jpg';
import oculusQuest from '@/assets/legacy/oculus-quest.jpg';
import riftS from '@/assets/legacy/rift-s.jpg';
import handTracking from '@/assets/legacy/hand-tracking.jpg';
import quest3 from '@/assets/gen/quest3-product.webp';
import quest3s from '@/assets/gen/quest3s-product.webp';
import vrGlasses from '@/assets/gen/glasses-teaser.jpg';

export interface Milestone {
  date: string;
  title: string;
  text: string;
  image?: { src: ImageMetadata; alt: string; cutout?: boolean };
  video?: { id: string; title: string };
  highlight?: boolean;
}

export const milestones: Milestone[] = [
  {
    date: '2012.08',
    title: '킥스타터에서 시작된 Oculus Rift',
    text: '팔머 러키가 세운 Oculus VR이 킥스타터에서 약 240만 달러를 모으며 꺼져 가던 VR에 다시 불을 붙였어요.',
  },
  {
    date: '2014.03',
    title: 'Facebook, Oculus 인수',
    text: '약 20억 달러 규모의 인수로 VR이 차세대 컴퓨팅 플랫폼 경쟁의 한가운데로 들어섰어요.',
  },
  {
    date: '2015.11',
    title: 'Samsung Gear VR',
    text: '삼성과 손잡고 갤럭시 스마트폰을 끼워 쓰는 모바일 VR을 내놓았어요. 누구나 주머니 속 VR을 경험하기 시작했죠.',
    image: { src: gearVr, alt: '무대 위 대형 스크린에 표시된 Samsung Gear VR 발표 장면' },
    video: { id: 'LVX7iruysrM', title: 'Samsung Gear VR Review' },
  },
  {
    date: '2016.03',
    title: 'Oculus Rift 정식 출시',
    text: '첫 소비자용 PC VR 헤드셋. 외부 센서와 고성능 PC가 필요했지만 “진짜 VR”의 기준을 세웠어요.',
    image: { src: riftCv1, alt: '케이블이 연결된 검은색 Oculus Rift 헤드셋 제품 사진' },
    video: { id: 'fnCmUWqKo6g', title: 'Oculus Rift | Change the Game' },
  },
  {
    date: '2018.05',
    title: 'Oculus Go',
    text: 'PC도 스마트폰도 필요 없는 199달러 올인원 헤드셋. 영상과 엔터테인먼트를 위한 VR이 거실로 들어왔어요.',
    image: { src: oculusGo, alt: '회색 Oculus Go를 쓰고 미소 짓는 사람' },
    video: { id: 'v4eTJIbJYK4', title: 'See it in VR | Oculus Go' },
  },
  {
    date: '2019.05',
    title: 'Oculus Quest',
    text: 'PC도 외부 센서도 없이 걸어 다니며 즐기는 첫 6DoF 올인원 헤드셋. 이 사이트의 2020년 첫 버전이 메인으로 다룬 제품이에요.',
    image: { src: oculusQuest, alt: 'Oculus Quest와 Touch 컨트롤러로 게임을 즐기는 사람' },
    video: { id: 'xwW-1mbemGc', title: 'Oculus Quest: Under the Hood' },
  },
  {
    date: '2019.05',
    title: 'Oculus Rift S',
    text: 'Quest와 같은 날 나온 PC용 헤드셋. 인사이드아웃 트래킹으로 외부 센서 없이 PC VR을 즐길 수 있게 했어요.',
    image: { src: riftS, alt: 'Oculus Rift S를 쓰고 Touch 컨트롤러를 쥔 사람' },
    video: { id: 'kIt1_GOagiw', title: 'Oculus Rift S | VR Gaming. PC Power.' },
  },
  {
    date: '2019.12',
    title: '핸드 트래킹',
    text: '컨트롤러 없이 맨손으로 메뉴를 고르고 물건을 집는 핸드 트래킹이 Quest에 들어왔어요.',
    image: { src: handTracking, alt: 'Oculus Quest를 쓰고 맨손을 앞으로 뻗은 사람' },
    video: { id: '2VkO-Kc3vks', title: 'Hand Tracking on Oculus Quest' },
  },
  {
    date: '2020.10',
    title: 'Oculus Quest 2',
    text: '더 가볍고 선명해진 299달러 헤드셋. VR 대중화를 이끈 역대 베스트셀러가 됐어요.',
  },
  {
    date: '2021.10',
    title: 'Facebook → Meta',
    text: '회사 이름이 Meta로 바뀌고, 이듬해 Oculus 브랜드는 Meta Quest로 자리를 넘겼어요.',
  },
  {
    date: '2022.10',
    title: 'Meta Quest Pro',
    text: '컬러 패스스루와 시선·표정 추적을 갖춘 전문가용 헤드셋으로 혼합현실의 문을 열었어요.',
  },
  {
    date: '2023.10',
    title: 'Meta Quest 3',
    text: '팬케이크 렌즈와 풀 컬러 혼합현실을 대중적인 가격에. 지금의 플래그십이에요.',
    image: { src: quest3, alt: '흰색 Meta Quest 3 헤드셋', cutout: true },
    video: { id: 'Exu7r2vZpcw', title: 'This is Meta Quest 3' },
    highlight: true,
  },
  {
    date: '2024.10',
    title: 'Meta Quest 3S',
    text: 'Quest 3의 칩셋과 혼합현실을 299.99달러에 담은 입문형 헤드셋.',
    image: { src: quest3s, alt: '흰색 Meta Quest 3S 헤드셋', cutout: true },
    video: { id: 'oAf5M4Q0Pu8', title: 'Introducing Meta Quest 3S' },
    highlight: true,
  },
  {
    date: '2026.09',
    title: 'Meta VR Glasses 발표',
    text: 'Connect 2026에서 컴퓨팅 퍽에 연결하는 초경량 VR 글래스를 공개했어요. 2027년 봄 1,299.99달러에 나올 예정이에요.',
    image: { src: vrGlasses, alt: '어둠 속에서 빛의 선으로 그려진 가벼운 고글 실루엣' },
    highlight: true,
  },
];
