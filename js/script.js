// script.js

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener(
    "scroll",
    function () {
      backToTopBtn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
