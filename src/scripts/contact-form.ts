/**
 * Contact Form Handler
 * Handles contact form submission via EmailJS
 */

import { loadEmailJS } from "./emailjs-loader";

function initContactForm(): void {
  loadEmailJS("UBe2G3JQms6LOgA_p");

  const form = document.getElementById("contact-form") as HTMLFormElement;
  const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
  const successMsg = document.getElementById("success-msg") as HTMLDivElement;
  const errorMsg = document.getElementById("error-msg") as HTMLDivElement;

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    successMsg.classList.add("hidden");
    errorMsg.classList.add("hidden");

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitBtn.style.opacity = "0.7";

    const firstName = (document.getElementById("firstName") as HTMLInputElement)
      .value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement)
      .value;

    const templateParams = {
      name: `${firstName} ${lastName}`,
      email: (document.getElementById("email") as HTMLInputElement).value,
      title: (document.getElementById("subject") as HTMLInputElement).value,
      message: (document.getElementById("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      await (window as any).emailjs.send(
        "service_korct6f",
        "template_dm9j71g",
        templateParams,
      );
      successMsg.classList.remove("hidden");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      errorMsg.classList.remove("hidden");
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
    submitBtn.style.opacity = "1";
  });
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactForm);
} else {
  initContactForm();
}
