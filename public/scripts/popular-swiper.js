document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".popular-swiper", {
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    slidesPerView: 6,
    spaceBetween: 24, // ✅ ده اللي كان ناقص

    centeredSlides: false,
    grabCursor: true,

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 28,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 32,
      },
    },
  });
});

new Swiper(".testimonialsSwiper", {
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});




   const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {            // ✅ إضافه التشغيل التلقائي
    delay: 3000,         // كل 3 ثواني يتغير السلايد
    disableOnInteraction: false, // يستمر حتى بعد السحب
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
