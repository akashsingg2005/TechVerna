/**
 * TECHVERNA IT SOLUTION — FAQ ACCORDION JS
 * Accordion logic: closed by default, click question -> open answer, click again -> close,
 * only one FAQ open at a time, smooth transition, keyboard accessible.
 */

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answerDiv = item.querySelector(".faq-answer");

    if (!questionBtn || !answerDiv) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items first (only one open at a time)
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle clicked item
      if (isActive) {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
        answerDiv.style.maxHeight = null;
      } else {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
        answerDiv.style.maxHeight = answerDiv.scrollHeight + 20 + "px";
      }
    });
  });
});
