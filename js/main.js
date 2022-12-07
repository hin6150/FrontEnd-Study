const searchEL = document.querySelector(".search");
const searchInputEL = searchEL.querySelector("input");

searchEL.addEventListener("click", function () {
  searchInputEL.focus();
});

searchInputEL.addEventListener("focus", function () {
  searchEL.classList.add("focused");
  searchInputEL.setAttribute("placeholder", "통합검색");
});

searchInputEL.addEventListener("blur", function () {
  searchEL.classList.remove("focused");
  searchInputEL.setAttribute("placeholder", "");
});

const badgeEL = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEL, 0.6, { opacity: 0, display: "none" });
    } else {
      gsap.to(badgeEL, 0.6, { opacity: 1, display: "block" });
    }
  }, 300)
);

const fadeELs = document.querySelectorAll(".visual .fade-in");
fadeELs.forEach(function (fadeEL, index) {
  gsap.to(fadeEL, 1, { delay: (index + 1) * 0.7, opacity: 1 });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEL = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEL.classList.add("hide");
  } else {
    promotionEL.classList.remove("hide");
  }
});
