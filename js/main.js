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

function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);

floatingObject(".floating2", 0.5, 15);

floatingObject(".floating3", 1.5, 20);
