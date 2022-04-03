import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function otherNewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-other-news-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        if (window.matchMedia('(max-width: 640px)').matches) {
            new Swiper(container, {
                watchOverflow: true,
                spaceBetween: 15,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: element.querySelector('.other-news__arrow--next'),
                    prevEl: element.querySelector('.other-news__arrow--prev')
                }
            });
        } else {
            new Swiper(container, {
                watchOverflow: true,
                spaceBetween: 30,
                slidesPerView: 4,
                navigation: {
                    nextEl: element.querySelector('.other-news__arrow--next'),
                    prevEl: element.querySelector('.other-news__arrow--prev')
                }
            });
        }
    });
}
