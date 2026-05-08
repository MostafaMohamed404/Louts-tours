/**
 * Quick Booking Form Handler
 * Handles booking form submission via EmailJS
 */

import { loadEmailJS } from "./emailjs-loader";

export function initQuickBookingForm(): void {
  loadEmailJS("1ueoC9a8kkngFwsll");

  const bookingForm = document.getElementById(
    "booking-form-el",
  ) as HTMLFormElement;
  const bookingSuccess = document.getElementById(
    "booking-success",
  ) as HTMLDivElement;
  const bookingError = document.getElementById(
    "booking-error",
  ) as HTMLDivElement;
  const bookingSubmitBtn = document.getElementById(
    "booking-submit-btn",
  ) as HTMLButtonElement;

  if (!bookingForm) return;

  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    bookingSuccess.classList.add("hidden");
    bookingError.classList.add("hidden");

    bookingSubmitBtn.disabled = true;
    bookingSubmitBtn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    bookingSubmitBtn.style.opacity = "0.7";

    const formData = new FormData(bookingForm);

    const templateParams = {
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service_type: formData.get("service_type"),
      destination: formData.get("destination"),
      travel_date: formData.get("travel_date"),
      travelers: formData.get("travelers"),
      budget: formData.get("budget") || "—",
      message: formData.get("message") || "—",
    };

    try {
      // @ts-ignore
      await (window as any).emailjs.send(
        "service_59udtsr",
        "template_9r0mj7c",
        templateParams,
      );

      bookingSuccess.classList.remove("hidden");
      bookingForm.reset();
      bookingSuccess.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error("EmailJS error:", err);
      bookingError.classList.remove("hidden");
    }

    bookingSubmitBtn.disabled = false;
    bookingSubmitBtn.innerHTML =
      '<i class="fa-solid fa-paper-plane"></i> Submit Booking Request';
    bookingSubmitBtn.style.opacity = "1";
  });
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuickBookingForm);
} else {
  initQuickBookingForm();
}
