import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
const directionsSwiper = document.querySelector('.directions__swiper');
const directionsBtnPrev = document.querySelector('.directions__btn--prev');
const directionsBtnNext = document.querySelector('.directions__btn--next');
const promoSwiper = document.querySelector('.promo-banner__swiper');
const promoBtnPrev = document.querySelector('.promo-banner__btn--prev');
const promoBtnNext = document.querySelector('.promo-banner__btn--next');

const getSlider = () => {
  let directionsSlider;
  let promoSlider;

  if (directionsSwiper) {
    directionsSlider = new Swiper(directionsSwiper, {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      speed: 1000,
      enabled: false,
      breakpoints: {
        320: {
          enabled: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 12,
        },
        768: {
          enabled: false,
          slidesPerView: 'auto',
          slidesPerGroup: '1',
        },
        1024: {
          slidesPerView: 'auto',
          slidesPerGroup: '1',
          enabled: false,
        },
      },
      navigation: {
        nextEl: directionsBtnNext,
        prevEl: directionsBtnPrev,
      },
    });
  }

  if (promoSwiper) {
    promoSlider = new Swiper(promoSwiper, {
      modules: [Navigation],

      direction: 'horizontal',
      loop: true,
      enabled: false,
      breakpoints: {
        320: {
          enabled: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 12,
        },
        768: {
          enabled: false,
          slidesPerView: 'auto',
          slidesPerGroup: '1',
        },
      },
      navigation: {
        nextEl: promoBtnNext,
        prevEl: promoBtnPrev,
      },
    });
  }
  return {directionsSlider, promoSlider};
};

export {getSlider};
