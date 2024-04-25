// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  //   speed: 500,  Adjust speed to a value that suits your needs
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Add optional effects if desired
  effect: "fade", // Can be 'fade', 'cube', etc.
});
