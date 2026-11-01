/**
 * 모든 페이지 공통 스크립트 (jQuery·bxSlider·colorbox·wow.js를 대체).
 * 각 기능은 해당 요소가 페이지에 있을 때만 동작한다.
 */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * <dialog>가 어떤 경로로 닫히든(ESC·닫기 버튼·backdrop·close()) 한 번씩 호출된다.
 * 'close' 이벤트가 전달되지 않는 환경이 있어 open 속성 변화를 직접 지켜본다.
 */
function onDialogClose(dialog: HTMLDialogElement, callback: () => void) {
  new MutationObserver(() => {
    if (!dialog.open) callback();
  }).observe(dialog, { attributes: true, attributeFilter: ['open'] });
}

/* 헤더: 스크롤하면 유리 배경으로 */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  let ticking = false;
  const update = () => {
    header.toggleAttribute('data-scrolled', window.scrollY > 8);
    ticking = false;
  };
  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
}

/* 모바일 메뉴: <dialog>가 포커스 가두기·ESC를 처리한다 */
const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
const menuOpen = document.querySelector<HTMLButtonElement>('[data-menu-open]');
if (menu && menuOpen) {
  menuOpen.addEventListener('click', () => {
    menu.showModal();
    menuOpen.setAttribute('aria-expanded', 'true');
  });
  onDialogClose(menu, () => menuOpen.setAttribute('aria-expanded', 'false'));
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => menu.close());
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => menu.close()));
  window.matchMedia('(min-width: 1001px)').addEventListener('change', (e) => {
    if (e.matches && menu.open) menu.close();
  });
}

/* 스크롤 등장 효과 (wow.js + animate.css 81KB 대체) */
const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-in'));
}

/* 숫자 카운트업: <span data-count="110">110</span> — 서버 렌더 값이 최종값이라 JS가 없어도 안전하다 */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (counters.length && !reducedMotion.matches && 'IntersectionObserver' in window) {
  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = String(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => {
    el.textContent = '0';
    io.observe(el);
  });
}

/* YouTube 다이얼로그: 페이지 어디든 [data-video] 버튼 */
const videoDialog = document.querySelector<HTMLDialogElement>('[data-video-dialog]');
const videoFrame = videoDialog?.querySelector<HTMLElement>('[data-video-frame]');
const videoTitle = videoDialog?.querySelector<HTMLElement>('[data-video-title]');
if (videoDialog && videoFrame) {
  document.addEventListener('click', (event) => {
    const trigger = (event.target as Element | null)?.closest<HTMLElement>('[data-video]');
    if (!trigger?.dataset.video) return;
    event.preventDefault();
    const title = trigger.dataset.videoTitle ?? '동영상';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(trigger.dataset.video)}?autoplay=1&rel=0&playsinline=1`;
    iframe.title = title;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    videoFrame.replaceChildren(iframe);
    if (videoTitle) videoTitle.textContent = title;
    videoDialog.showModal();
  });
  // 바깥(backdrop) 클릭으로 닫기
  videoDialog.addEventListener('click', (event) => {
    if (event.target === videoDialog) videoDialog.close();
  });
  // 닫으면 iframe을 지워 재생을 멈춘다
  onDialogClose(videoDialog, () => videoFrame.replaceChildren());
}

/* 맨 위로 */
document.querySelector('[data-to-top]')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  document.querySelector<HTMLElement>('#main')?.focus({ preventScroll: true });
});

/* 뉴스레터: 포트폴리오 데모라 어디로도 전송하지 않는다 */
const newsletter = document.querySelector<HTMLFormElement>('[data-newsletter]');
if (newsletter) {
  const status = newsletter.querySelector<HTMLElement>('[data-newsletter-status]');
  newsletter.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!status) return;
    const email = newsletter.elements.namedItem('email') as HTMLInputElement;
    const consent = newsletter.elements.namedItem('consent') as HTMLInputElement;
    if (!email.validity.valid) {
      status.dataset.state = 'error';
      status.textContent = '올바른 이메일 주소를 입력해 주세요.';
      email.focus();
      return;
    }
    if (!consent.checked) {
      status.dataset.state = 'error';
      status.textContent = '약관 동의에 체크해 주세요.';
      consent.focus();
      return;
    }
    status.dataset.state = 'ok';
    status.textContent = '구독 신청 완료! (포트폴리오 데모라 실제 메일은 발송되지 않아요)';
    newsletter.reset();
  });
}
