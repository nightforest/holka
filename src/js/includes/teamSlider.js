import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const teamSlider = () => {
    new Swiper('.team-slider', {
        modules: [Navigation],
        spaceBetween: 30,
        slidesPerView: 4,
        loop: false,
        // centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: '.team-slider__next',
            prevEl: '.team-slider__prev',
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
            1170: {
                slidesPerView: 4,
            },
        },
    });
}

export default teamSlider;