/**
 * TECHVERNA IT SOLUTION — STATIC CONTACT FORM JS
 * Validates inline form fields and generates a mailto link.
 */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status-msg");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous errors
    const formGroups = contactForm.querySelectorAll(".form-group");
    formGroups.forEach((fg) => fg.classList.remove("has-error"));
    if (formStatus) formStatus.style.display = "none";

    let isValid = true;

    // Helper validation function
    const validateField = (id, condition) => {
      const field = document.getElementById(id);
      if (!field) return true;
      const group = field.closest(".form-group");
      if (!condition(field.value.trim())) {
        if (group) group.classList.add("has-error");
        isValid = false;
        return false;
      }
      return true;
    };

    // Validations
    validateField("name", (val) => val.length > 0);
    validateField("email", (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val));
    validateField("phone", (val) => val.length > 0);
    validateField("country", (val) => val.length > 0);
    validateField("service", (val) => val.length > 0);
    validateField("budget", (val) => val.length > 0);
    validateField("details", (val) => val.length > 0);

    if (!isValid) return;

    // Get Form Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value.trim();
    const company = (document.getElementById("company")?.value || "N/A").trim();
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const details = document.getElementById("details").value.trim();

    // Format Email Subject & Body
    const subject = encodeURIComponent("New Project Inquiry — TechVerna IT Solution");
    const bodyText = `Hello TechVerna Team,\n\nI would like to submit a project inquiry with the following details:\n\nName: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone}\nCountry: ${country}\nCompany: ${company}\nService Required: ${service}\nEstimated Budget (USD): ${budget}\n\nProject Details:\n${details}\n\nThank you!`;
    const mailtoUrl = `mailto:techvernaitsolution@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

    // Display clear notification and open mailto
    if (formStatus) {
      formStatus.className = "p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 text-sm font-semibold mb-6";
      formStatus.innerHTML = "<strong>Your email application will open to send the inquiry.</strong><br>If your email client does not open automatically, please click <a href='" + mailtoUrl + "' class='underline text-blue-700 font-bold'>here to send email directly</a>.";
      formStatus.style.display = "block";
    }

    // Trigger Mailto
    window.location.href = mailtoUrl;
  });
});
