/* ============================================================
   article-shared.js — EduLingua Blog
   Shared script untuk semua artikel-*.html
   ============================================================ */

/* ── READING PROGRESS BAR ── */
(function () {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;
  window.addEventListener('scroll', function () {
    const doc     = document.documentElement;
    const scrolled = doc.scrollTop || document.body.scrollTop;
    const total   = doc.scrollHeight - doc.clientHeight;
    const pct     = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
})();

/* ── HAMBURGER MENU ── */
(function () {
  const btn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ── LANGUAGE SWITCHER ── */
function switchLang(lang, btn) {
  document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.documentElement.lang = (lang === 'id') ? 'id' : 'en';
  updateReadingTime();
}

/* ── READING TIME ESTIMATOR ── */
function updateReadingTime() {
  const activeContent = document.querySelector('.lang-content.active .article-content');
  if (!activeContent) return;
  const words   = activeContent.innerText.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  const el      = document.getElementById('readingTime');
  if (el) el.textContent = '⏱ ' + minutes + ' min read';
}

/* Jalankan saat halaman pertama dimuat */
document.addEventListener('DOMContentLoaded', updateReadingTime);
