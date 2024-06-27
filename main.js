// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // initialSlide: 1,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },     
  });

// Mobile-menu
const mobileMenu = document.querySelector('.header__menu')
const buttonBurger = document.querySelector('.burger-button')
const bodyEl = document.body

buttonBurger.addEventListener('click', () => {
  if (buttonBurger.classList.contains('active')) {
    buttonBurger.classList.remove('active')
    mobileMenu.classList.remove('active')
    bodyEl.classList.remove('lock');
  }
  else {
    buttonBurger.classList.add('active')
    mobileMenu.classList.add('active')
    bodyEl.classList.add('lock')
  }
})