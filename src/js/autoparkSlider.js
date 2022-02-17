import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function autoparkSlider() {
    const elements = Array.from(document.querySelectorAll('.js-autopark-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 24,
            slidesPerView: 'auto',
            navigation: {
                nextEl: element.querySelector('.pilots-and-autopark__arrow--next'),
                prevEl: element.querySelector('.pilots-and-autopark__arrow--prev')
            },
            breakpoints: {
                641: {
                    spaceBetween: 30,
                    slidesPerView: 1
                }
            }
        });
    });
}
