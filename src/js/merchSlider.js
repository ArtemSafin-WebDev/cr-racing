import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function merchSlider() {
    const elements = Array.from(document.querySelectorAll('.js-merch-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 22,
            slidesPerView: 'auto',
            navigation: {
                nextEl: element.querySelector('.merch-and-gallery__slider-arrow--next'),
                prevEl: element.querySelector('.merch-and-gallery__slider-arrow--prev')
            },
            breakpoins: {
                641: {
                    spaceBetween: 30,
                    slidesPerView: 2
                }
            }
        });
    });
}
