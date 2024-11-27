import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';// import Swiper styles
import "swiper/swiper-bundle.css";

export function initSwiper(){
    const heroSwiper = new Swiper(".hero__slider", {
        modules: [Autoplay],
        spaceBetween: 40,
        centeredSlides: true,
        speed: 4000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        loop: true,
        slidesPerView:'auto',
        allowTouchMove: false,
    });
    console.log(heroSwiper);
};