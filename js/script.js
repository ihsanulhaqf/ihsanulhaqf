// script.js — EduLingua

// ── BACK TO TOP BUTTON ──
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener("scroll", function () {
    backToTopBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── READING PROGRESS BAR ──
// Dipakai di halaman artikel yang punya <div id="readingProgress">
const progressBar = document.getElementById("readingProgress");
if (progressBar) {
  window.addEventListener("scroll", function () {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop || document.body.scrollTop;
    const total = doc.scrollHeight - doc.clientHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    progressBar.style.width = Math.min(pct, 100) + "%";
  }, { passive: true });
}

// ── READING TIME ESTIMATOR ──
// Dipakai di halaman artikel yang punya <span id="readingTime">
function updateReadingTime() {
  const activeContent = document.querySelector(".lang-content.active .article-content")
    || document.querySelector(".article-content");
  if (!activeContent) return;
  const words = activeContent.innerText.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  const el = document.getElementById("readingTime");
  if (el) el.textContent = "⏱ " + minutes + " min read";
}

if (document.getElementById("readingTime")) {
  updateReadingTime();
}
