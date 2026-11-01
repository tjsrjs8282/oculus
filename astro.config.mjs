// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://tjsrjs8282.github.io/oculus/
export default defineConfig({
  site: 'https://tjsrjs8282.github.io',
  base: '/oculus',
  // 기존 2020년 버전의 *.html 주소(oculus.html, games.html …)를 그대로 유지한다.
  build: { format: 'file' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      // 레거시 주소는 새 페이지로 리다이렉트만 하므로 사이트맵에서 뺀다.
      filter: (page) => !/\/(rift|riftpc|oculusSetting|404)(\.html)?$/.test(page),
      // 내부 링크·canonical과 같은 *.html 주소로 맞춘다.
      serialize: (item) => {
        const url = new URL(item.url);
        if (!url.pathname.endsWith('/') && !url.pathname.endsWith('.html')) url.pathname += '.html';
        return { ...item, url: url.href };
      },
    }),
  ],
});
