/* ============================================================
   main.js — EduLingua
   Shared script untuk semua halaman utama.
   ============================================================ */

/* ── HAMBURGER MENU ── */
(function () {
  const btn = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("mobileNav");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    btn.classList.toggle("open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", function (e) {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();

/* ── BACK TO TOP (hanya aktif kalau elemen ada — index.html) ── */
(function () {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", function () {
    backToTopBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
