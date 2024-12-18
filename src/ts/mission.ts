import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';

export function initMission(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    ScrollTrigger.refresh();

    gsap.to(".mission__dark", {
        text:{
            value: "Companies without AI skills face significant risk, with 40% likely to falter in the coming years. AI.KIDO stands for the easiest gateway to the AI market. We are Helping All Stay Ahead in the AI Revolution.",
        },
        scrollTrigger:{
            trigger: ".mission",
            start: "center center",
            end: "+=700",
            // markers: true,
            scrub: true,
            pin: ".mission"
        },
    });

}