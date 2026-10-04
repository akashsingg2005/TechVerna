/**
 * TECHVERNA IT SOLUTION — MAIN JS UTILITIES
 */

document.addEventListener("DOMContentLoaded", () => {
  // Update Current Year in Footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Scroll Reveal Observer (IntersectionObserver)
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.15,
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("active"));
  }

  // Back to Top Button Logic
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.style.display = "flex";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Make entire service card clickable
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const link = card.querySelector(".card-link");
      if (link && e.target !== link && !link.contains(e.target)) {
        link.click();
      }
    });
  });
});
