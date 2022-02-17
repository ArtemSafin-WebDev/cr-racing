import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function scheduleSlider() {
    const elements = Array.from(document.querySelectorAll('.js-schedule-slider'));

    elements.forEach(element => {
        const btns = Array.from(element.querySelectorAll('.schedule__tabs-nav-link'));
        const tabs = Array.from(element.querySelectorAll('.schedule__tab-item'));
        const sliders = [];
        const mobileBtn = element.querySelector('.schedule__tabs-nav-mobile-btn');
        const mobileBtnTextElement = mobileBtn.querySelector('.schedule__tabs-nav-mobile-btn-text')
        const prevBtn = element.querySelector('.schedule__arrow--prev');
        const nextBtn = element.querySelector('.schedule__arrow--next');

        tabs.forEach((tab, tabIndex) => {
            const container = tab.querySelector('.swiper-container');
            const instance = new Swiper(container, {
                slidesPerView: 'auto',
                spaceBetween: 20,
                watchOverflow: true,
                speed: 500,
                centeredSlides: window.matchMedia('(max-width: 640px)').matches ? true : false,
                centeredSlidesBounds: true,
                on: {
                    progress: swiper => {
                        if (swiper.progress === 0) {
                            prevBtn.classList.add('swiper-button-disabled');
                        } else {
                            prevBtn.classList.remove('swiper-button-disabled');
                        }
                        if (swiper.progress === 1) {
                            nextBtn.classList.add('swiper-button-disabled');
                        } else {
                            nextBtn.classList.remove('swiper-button-disabled');
                        }
                    }
                },
                breakpoints: {
                    641: {
                        slidesPerView: 5,
                        spaceBetween: 22
                    }
                }
            });

            sliders.push(instance);
        });

        const setActiveTab = index => {
            tabs.forEach(tab => tab.classList.remove('active'));
            btns.forEach(btn => btn.classList.remove('active'));
            tabs[index].classList.add('active');
            btns[index].classList.add('active');
            element.classList.remove('mobile-dropdown-shown')
            mobileBtnTextElement.textContent = btns[index].textContent;
            const currentSliderInstance = sliders[index];

            if (currentSliderInstance.progress === 0) {
                prevBtn.classList.add('swiper-button-disabled');
            } else {
                prevBtn.classList.remove('swiper-button-disabled');
            }
            if (currentSliderInstance.progress === 1) {
                nextBtn.classList.add('swiper-button-disabled');
            } else {
                nextBtn.classList.remove('swiper-button-disabled');
            }
        };

        if (tabs.length) {
            setActiveTab(0);
        }

        console.log(prevBtn);
        console.log(prevBtn);

        prevBtn.addEventListener('click', event => {
            event.preventDefault();
            const activeTabIndex = tabs.findIndex(tab => tab.classList.contains('active'));
            sliders[activeTabIndex].slidePrev();
        });
        nextBtn.addEventListener('click', event => {
            event.preventDefault();
            const activeTabIndex = tabs.findIndex(tab => tab.classList.contains('active'));
            sliders[activeTabIndex].slideNext();
        });

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
            });
        });

        mobileBtn.addEventListener('click', (event) => {
            event.preventDefault();
            element.classList.toggle('mobile-dropdown-shown');
        });

        document.addEventListener('click', event => {
            if (!(event.target.matches('.schedule__tabs-nav') || event.target.closest('.schedule__tabs-nav'))) {
                element.classList.remove('mobile-dropdown-shown');
            }
        })
    });
}
