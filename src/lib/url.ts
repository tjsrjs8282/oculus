/** 사이트가 GitHub Pages 하위 경로(/oculus)에 배포되므로 내부 링크는 항상 이 함수를 거친다. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = ''): string {
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

/** `/oculus/quest.html`, `/oculus/quest` 처럼 형태가 달라도 같은 페이지인지 비교한다. */
function pageKey(path: string): string {
  const withoutBase = path.startsWith(base) ? path.slice(base.length) : path;
  const key = withoutBase
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .replace(/\.html$/, '');
  return key || 'index';
}

export function isCurrent(pathname: string, href: string): boolean {
  return pageKey(pathname) === pageKey(href);
}
