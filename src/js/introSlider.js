import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Pagination]);

export default function introSlider() {
    const elements = Array.from(document.querySelectorAll('.js-intro-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 1,
            effect: 'fade',
            pagination: {
                el: element.querySelector('.intro__slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            fadeEffect: {
                crossFade: true
            }
        });
    });
}
