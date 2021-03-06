import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function pilotsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-pilots-slider'));

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
                    slidesPerView: 2,
                    spaceBetween: 30,
                }

            }
        });
    });
}
