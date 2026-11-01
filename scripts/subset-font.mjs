/**
 * Pretendard Variable(2MB)에서 이 사이트가 실제로 쓰는 글자만 남긴 웹폰트를 만든다.
 * src/ 안의 모든 텍스트를 훑어 글자 집합을 만들기 때문에, 콘텐츠를 고쳐도 빌드할 때마다 자동으로 맞춰진다.
 * (npm run dev / build 전에 pre 스크립트로 실행)
 */
import { glob, mkdir, readFile, writeFile } from 'node:fs/promises';
import subsetFont from 'subset-font';

const SOURCE = 'node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2';
const OUTPUT = 'src/assets/fonts/pretendard-subset.woff2';

// 화면에 찍힐 수 있는 기본 문자(ASCII + 자주 쓰는 기호)는 항상 넣어 둔다.
const BASE =
  ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~' +
  '·…—–‘’“”×°→←↑↓₩€©®™';

let text = BASE;
for await (const file of glob('src/**/*.{astro,ts,md,css}')) {
  text += await readFile(file, 'utf8');
}
const chars = [...new Set(text)].filter((c) => c >= ' ').join('');

const font = await readFile(SOURCE);
const subset = await subsetFont(font, chars, { targetFormat: 'woff2' });
await mkdir('src/assets/fonts', { recursive: true });
await writeFile(OUTPUT, subset);

const hangul = [...chars].filter((c) => c >= '가' && c <= '힣').length;
console.log(
  `[subset-font] ${chars.length}자(한글 ${hangul}자) → ${(subset.length / 1024).toFixed(1)}KB ` +
    `(원본 ${(font.length / 1024 / 1024).toFixed(1)}MB)`,
);
