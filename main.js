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