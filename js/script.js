// grab hamburger menu button
const mobileHamburger = document.querySelector('.nav-hamburger');
// grab mobile nav slide in
const mobileMenu = document.querySelector('.mobile-menu');

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
// Swiper
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Swiper
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 6,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// services card transition
const servicesCardInfo = document.getElementsByClassName('services-card-info');
const arrow = document.getElementsByClassName('arrow-box');

for (var i=0; i<servicesCardInfo.length; i++){
  servicesCardInfo[i].addEventListener('mouseenter', function(e){
    e.preventDefault();

    console.log(arrow[i]);
  })
  
  servicesCardInfo[i].addEventListener('mouseleave', function(e){
    e.preventDefault();
    arrow[i].className.remove('arrow-hover');
  })
}

