import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const personsSlider = () => {
    const personsSliderAll = document.querySelectorAll('.persons-slider')

    personsSliderAll.forEach(slider => {
        const sliderNext = slider.closest('.persons-slider-wrap').querySelector('.persons-slider__next')
        const sliderPrev = slider.closest('.persons-slider-wrap').querySelector('.persons-slider__prev')

        new Swiper(slider, {
            modules: [Navigation],
            spaceBetween: 15,
            slidesPerView: 4,
            loop: false,
            // centeredSlides: false,
            observer: true,
            speed: 700,
            observeParents: true,
            watchOverflow: true,
            watchSlidesVisibility: true,
            navigation: {
                nextEl: sliderNext,
                prevEl: sliderPrev,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1170: {
                    slidesPerView: 4,
                },
            },
        });
    });
}

export default personsSlider;