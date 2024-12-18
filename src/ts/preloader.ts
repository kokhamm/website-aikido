import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";


export function initPreloader() {
    console.log('Preloader');
    gsap.registerPlugin(CSSRulePlugin);
    gsap.registerPlugin(ScrollTrigger);
    document.body.classList.add('stopper');
    
    const pClick = document.querySelector('.preloader__click') as HTMLElement;
    let clickCounter = 0;
    const bar = document.querySelector('.preloader__bar') as HTMLElement;
    const spans = document.querySelectorAll('.preloader__clip') as NodeListOf<HTMLElement>;
    let viewPort = window.innerWidth;
    const tl = gsap.timeline({});

    tl.addLabel('start-right').from('.preloader__right', {
        opacity: 0,
        delay: 1,
    });
    tl.addLabel('start-left').from('.preloader__left', {
        opacity: 0,
    });
    tl.addLabel('start-bar').from(bar, {
        opacity: 0,
    });
    tl.addLabel('start-bar2').to(bar, {
        "background-position-x": "90%",
        duration: 1,
    });
    tl.addLabel('start-text').to('.preloader__click',{
        opacity: 1,
        "pointer-events": 'auto',
    });

    
    pClick.addEventListener('click', () => {
        if(clickCounter < 1){
            clickCounter++;
            gsap.to(pClick, {
                opacity: 0,
                duration: 0.5,
                pointerEvents: 'none',
            });
            gsap.to(bar, {
                "background-position-x": "50%",
                duration: 1,
                onComplete: () => {
                    pClick.textContent = "click more"; // Change text content on first click
                    gsap.to(pClick, {
                        opacity: 1,
                        duration: 0.5,
                        "pointer-events": 'auto',
                    });
                }
            });
            spans.forEach((span) =>{
                gsap.to(span,{
                    transform: 'translateY(-100%)',
                    duration: 0.5,
                });
            });
        } else if(clickCounter > 0 && clickCounter < 2){
            clickCounter++;
            gsap.to(pClick, {
                opacity: 0,
                "pointer-events": 'none',
                onComplete: () =>{
                    pClick.removeEventListener('click', () => {});
                },
            });
            gsap.to(bar, {
                "background-position-x": "0%",
                duration: 1,
                onComplete: () =>{
                    gsap.to('.preloader__left',{
                        opacity: 0,
                        "pointer-events": 'none',
                    });
                    gsap.to('.preloader__right',{
                        'transform': viewPort > 501 ? 'translateY(25%)' : 'translateY(140%)',
                        'right': '0',
                        duration: 1,
                        onComplete: () =>{
                            document.body.classList.remove('stopper');
                            let preloader = document.querySelector('.preloader') as HTMLElement;
                            let preloaderRight = document.querySelector('.preloader__right') as HTMLElement;
                            preloader.classList.add('hidenow');
                            preloader.style.position = 'absolute';
                            preloader.style.zIndex = '90';
                            preloaderRight.style.opacity = '1';
                        },
                    });

                    if (viewPort > 1100){
                        gsap.to('.preloader__right img',{
                            'max-width': '27rem',
                            duration: 2,
                        });
                    } else if (viewPort < 1100 && viewPort > 700){
                        gsap.to('.preloader__right img',{
                            'max-width': '17rem',
                            duration: 2,
                        });
                    } else if (viewPort < 700){
                        gsap.to('.preloader__right',{
                            opacity: 0,
                            duration: 0,
                        }); // No changes
                    };
                    

                },
            });
            spans.forEach((span) =>{
                gsap.to(span,{
                    transform: 'translateY(-100%)',
                });
            });
        };
    });
}