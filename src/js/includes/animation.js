import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "smoothscroll-for-websites/SmoothScroll"

const animation = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    SmoothScroll({
        stepSize: 50,
        animationTime: 600,
    });

    // function startScrollTrigger() {
        gsap.utils.toArray('.animation-fade').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-down').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: 30,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-up').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        y: -30,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-left').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: -70,
                        ease: "back.out"
                    });
                }
            });
        });

        gsap.utils.toArray('.animation-right').forEach(function(animatedElement) {
            const delay = animatedElement.getAttribute('data-delay') ? animatedElement.getAttribute('data-delay') : 0;

            ScrollTrigger.create({
                trigger: animatedElement,
                start: "top 85%",
                end: "bottom 10%",
                once: true,
                onEnter: function() {
                    gsap.set(animatedElement, {autoAlpha: 1});
                    gsap.from(animatedElement, 1, {
                        delay: delay,
                        opacity: 0,
                        x: 70,
                        ease: "back.out"
                    });
                }
            });
        });
    // }
}

export default animation;