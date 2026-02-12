import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

new Swiper(".testSwiper", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".test-next",
    prevEl: ".test-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
