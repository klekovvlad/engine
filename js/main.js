const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    speed: 400,
    spaceBetween: 50,
    slidesPerView: 3,
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      760: {
        slidesPerView: 2,
      },
      1000: {
          slidesPerView: 3,
      },
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

new WOW().init();

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupOpen = document.querySelectorAll('.popup__open');

popupOpen.forEach(popupOpenItem => {
  popupOpenItem.addEventListener('click', () => {
    popup.classList.add('popup__show');
  })
});
popupClose.addEventListener('click', () => {
  popup.classList.remove('popup__show');
})
