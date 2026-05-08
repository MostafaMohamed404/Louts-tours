/**
 * Popular Destinations Swiper
 * Initializes Swiper carousel for popular destinations
 */

declare global {
  interface Window {
    Swiper: any;
  }
}

export function initPopularDestinationsSwiper(): void {
  if (typeof window.Swiper === "undefined") {
    console.warn("Swiper not loaded");
    return;
  }

  new window.Swiper(".popularSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPopularDestinationsSwiper);
} else {
  initPopularDestinationsSwiper();
}
