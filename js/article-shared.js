/* article-shared.js — dipakai semua artikel-N.html */

/* ── READING PROGRESS BAR ── */
(function () {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;
  window.addEventListener('scroll', function () {
    const doc    = document.documentElement;
    const scrolled = doc.scrollTop || document.body.scrollTop;
    const total  = doc.scrollHeight - doc.clientHeight;
    const pct    = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
})();

/* ── LANGUAGE SWITCHER ── */
function switchLang(lang, btn) {
  document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  /* Update html[lang] untuk aksesibilitas & SEO */
  document.documentElement.lang = (lang === 'id') ? 'id' : 'en';
}
