import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";

export function initSwiper(){
    const heroSwiper = new Swiper(".hero__slider", {
        modules: [Autoplay],
        spaceBetween: 40,
        centeredSlides: true,
        speed: 3000,
        loop: true,
        slidesPerView:'auto',
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
    });
    console.log(heroSwiper);
};