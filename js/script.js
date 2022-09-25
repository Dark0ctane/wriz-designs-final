// grab hamburger menu button
const mobileHamburger = document.querySelector('.nav-hamburger-mobile');
// grab mobile nav slide in
const mobileMenu = document.querySelector('.nav-menu-mobile');

mobileHamburger.addEventListener('click', function(e){
  e.preventDefault();

  mobileMenu.classList.toggle('active');
})

// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});