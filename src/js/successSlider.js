import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function successSlider() {
    if (!window.matchMedia("(max-width: 640px)").matches) return;

    const elements = Array.from(document.querySelectorAll('.js-success-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 10,
            slidesPerView: 'auto',
        
        });
    });
}
