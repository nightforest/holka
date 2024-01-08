import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const latestSlider = () => {
    new Swiper('.latest-slider', {
        modules: [Navigation],
        spaceBetween: 30,
        slidesPerView: 3,
        loop: false,
        // centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.latest-slider__next',
            prevEl: '.latest-slider__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
}

export default latestSlider;