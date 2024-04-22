
let mobileSwiper;

function checkScreenSize() {
  if (window.innerWidth > 767) {
    if (mobileSwiper) {
      mobileSwiper.destroy();
      mobileSwiper = null;
    }
  } else {
    if (!mobileSwiper) {
      mobileSwiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        slidesPerView: "auto",
        slideToClickedSlides: true,
        pagination: {
        el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        allowTouchMove: true,
      });
    }
  }
}
  window.addEventListener("load", checkScreenSize);
  window.addEventListener("resize", checkScreenSize);

  let button = document.querySelector(".brands__button");
  let fullList = document.querySelector(".brands__list");

  button.addEventListener("click", function () {
    fullList.classList.toggle("brands__full");
    button.classList.toggle("button__close");
    if (button.classList.contains("button__close")) {
      button.textContent = "Скрыть";
    } else {
      button.textContent = "Показать все";
    }
  })
