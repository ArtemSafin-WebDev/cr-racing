import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function teamPilotsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-team-pilots-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
        
        });
    });
}
