/**
 * Testimonials Swiper
 * Initializes Swiper carousel for testimonials section
 */

declare global {
  interface Window {
    Swiper: any;
  }
}

export function initTestimonialsSwiper(): void {
  if (typeof window.Swiper === "undefined") {
    console.warn("Swiper not loaded");
    return;
  }

  new window.Swiper(".testimonialsSwiper", {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
    },
  });
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTestimonialsSwiper);
} else {
  initTestimonialsSwiper();
}
