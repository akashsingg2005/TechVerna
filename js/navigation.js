/**
 * TECHVERNA IT SOLUTION — NAVIGATION JS
 * Handles sticky navbar, mobile menu open/close, click outside, ESC key, active state.
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-menu a");

  // Sticky Navbar background on scroll
  const handleScroll = () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Open / Close Mobile Menu with safety guard
  const toggleMobileMenu = () => {
    if (!mobileMenu) return;
    const isOpen = mobileMenu.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const openMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("open");
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute("aria-expanded", "true");
    }
  };

  const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  };

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close mobile menu on clicking any navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      mobileMenu.classList.contains("open") &&
      !mobileMenu.contains(e.target) &&
      (hamburgerBtn && !hamburgerBtn.contains(e.target))
    ) {
      closeMobileMenu();
    }
  });

  // ESC key closes mobile menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("open")) {
      closeMobileMenu();
    }
  });

  // Highlight Active Page Navigation Link
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === pageName || (pageName === "index.html" && (href === "/" || href === "index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
