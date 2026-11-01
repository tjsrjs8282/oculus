import type { IconName } from '@/lib/icons';

export interface SetupStep {
  id: string;
  icon: IconName;
  title: string;
  text: string;
  tip?: string;
}

export const setupSteps: SetupStep[] = [
  {
    id: 'charge',
    icon: 'battery',
    title: '충전하기',
    text: '처음 켜기 전에 동봉된 충전 어댑터와 USB-C 케이블로 헤드셋을 충분히 충전해 주세요.',
    tip: '충전 중에는 헤드셋 측면 표시등이 켜져요.',
  },
  {
    id: 'app',
    icon: 'smartphone',
    title: 'Meta Horizon 앱 설치',
    text: '스마트폰(iOS · Android)에 Meta Horizon 앱을 설치하고 Meta 계정으로 로그인해요. 헤드셋과 연결하는 데 필요해요.',
  },
  {
    id: 'fit',
    icon: 'headset',
    title: '전원 켜고 착용하기',
    text: '전원 버튼을 길게 눌러 켠 뒤 머리 뒤쪽 스트랩과 상단 스트랩을 조절해 화면 중앙이 또렷하게 보이도록 맞춰요.',
    tip: '안경을 쓴다면 안경 스페이서를 끼우거나 도수 렌즈 인서트(별매)를 고려해 보세요.',
  },
  {
    id: 'ipd',
    icon: 'ruler',
    title: '렌즈 간격(IPD) 맞추기',
    text: 'Quest 3는 아래쪽 휠로 53–75mm 사이를 세밀하게, Quest 3S는 렌즈를 밀어 58 · 63 · 68mm 중 하나로 맞춰요.',
  },
  {
    id: 'pair',
    icon: 'wifi',
    title: 'Wi-Fi 연결 · 업데이트 · 페어링',
    text: '화면 안내에 따라 Wi-Fi에 연결하면 소프트웨어 업데이트가 진행돼요. 이어서 앱에 표시되는 코드로 헤드셋을 계정에 연결해요.',
  },
  {
    id: 'space',
    icon: 'scan',
    title: '플레이 공간 설정',
    text: '헤드셋이 주변을 스캔해 경계(바운더리)를 만들어요. 움직이며 즐기는 룸스케일이라면 최소 2m × 2m 공간을 비워 주세요.',
    tip: '앉아서 즐기는 정지 모드는 좁은 공간에서도 쓸 수 있어요.',
  },
  {
    id: 'play',
    icon: 'sparkles',
    title: '첫 앱 받기',
    text: 'Meta Horizon Store에서 무료 체험 앱이나 데모부터 시작해 보세요. 핸드 트래킹으로 손만 써서 조작해 봐도 좋아요.',
  },
];

export const safetyTips: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'scan',
    title: '주변 정리',
    text: '가구·반려동물·사람과 충분히 떨어진 곳에서, 경계 안에서만 플레이해요.',
  },
  {
    icon: 'clock',
    title: '틈틈이 휴식',
    text: '어지럽거나 눈이 피로하면 바로 헤드셋을 벗고 충분히 쉬어 주세요.',
  },
  {
    icon: 'sun',
    title: '직사광선 주의',
    text: '렌즈에 햇빛이 닿으면 디스플레이가 손상될 수 있어요. 창가에 두지 마세요.',
  },
  {
    icon: 'users',
    title: '사용 연령',
    text: 'Meta Quest는 만 10세 이상을 위한 기기예요. 어린 사용자는 보호자 관리 계정이 필요해요.',
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const setupFaq: FaqItem[] = [
  {
    q: '화면이 흐릿하게 보여요.',
    a: '헤드셋을 조금 위아래로 움직여 가장 선명한 위치를 찾고, 렌즈 간격(IPD)을 다시 맞춰 보세요. 렌즈에 지문이 묻었다면 마른 극세사 천으로 닦아 주세요.',
  },
  {
    q: '컨트롤러가 인식되지 않아요.',
    a: '배터리를 새것으로 바꾼 뒤 Meta Horizon 앱의 기기 메뉴에서 컨트롤러를 다시 페어링해 보세요.',
  },
  {
    q: '경계가 자꾸 사라지거나 위치가 틀어져요.',
    a: '방이 너무 어둡거나 햇빛이 강하면 트래킹이 불안정해요. 조명을 고르게 하고 거울처럼 반사되는 물체를 치워 주세요.',
  },
  {
    q: '배터리를 더 오래 쓰고 싶어요.',
    a: '화면 밝기를 조금 낮추고, 쓰지 않을 때는 절전 모드로 두세요. 장시간 플레이에는 배터리 일체형 헤드 스트랩(별매)이 편해요.',
  },
];
