
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export function initVariables(){
    gsap.registerPlugin(ScrollTrigger);

    const gsapNumsElements = gsap.utils.toArray('.gsap-nums') as HTMLElement[];
    const gsapModelsElements = gsap.utils.toArray('.gsap-models') as HTMLElement[];
    const gsapHeader1Elements = gsap.utils.toArray('.gsap-header1') as HTMLElement[];
    const gsapHeader2Elements = gsap.utils.toArray('.gsap-header2') as HTMLElement[];
    const gsapHeader3Elements = gsap.utils.toArray('.gsap-header3') as HTMLElement[];
    const gsapHeader4Elements = gsap.utils.toArray('.gsap-header4') as HTMLElement[];
    const gsapHeader5Elements = gsap.utils.toArray('.gsap-header5') as HTMLElement[];
    const gsapJourneyElements = document.querySelectorAll('.gsap-journey-item') as NodeListOf<HTMLElement>;
    const gsapRoadmapElements = document.querySelectorAll('.gsap-roadmap-item') as NodeListOf<HTMLElement>;
    const emailButton = document.querySelector('.book__button') as HTMLElement;
    const emailButtonSpan = document.querySelector('.book__button-span') as HTMLElement;

    const tlCore = gsap.timeline({
        paused: true,
    }); 
    
    function createAnimation(elements: HTMLElement[], y:number, x:number, st:number, dur:number, del:number, scrub:boolean) {
        gsap.from(elements, {
            y: y,
            x: x,
            opacity: 0,
            duration: dur,
            stagger: st,
            delay: del,
            // ease: "power2",
            scrollTrigger: {
                trigger: elements[0],
                scrub: scrub,
            },
        });
    }
    
    createAnimation(gsapNumsElements, 200, 0, 0.1, 1, 0, false);
    createAnimation(gsapModelsElements, 200, 0, 0.2, 1, 0, false);
    createAnimation(gsapHeader1Elements, 0, 0, 1.5, 1, 0.2, true);
    createAnimation(gsapHeader2Elements, 0, 0, 1.5, 1, 0, true);
    createAnimation(gsapHeader3Elements, 0, 0, 1.5, 1, 0, true);
    createAnimation(gsapHeader4Elements, 0, 0, 1.5, 1, 0, true);
    createAnimation(gsapHeader5Elements, 0, 0, 1.5, 1, 0, true);

    gsapJourneyElements.forEach((el) => {
        gsap.from(el, {
            x: -200,
            duration: 1,
            opacity: 0,
            delay: 0.1,
            stagger: 0.2,
            ease: "power2",
            scrollTrigger:{
                trigger: el,
                start: "top 100%",
                end: "+=200",
                scrub: true,
                },
            });
        }
    );

    gsapRoadmapElements.forEach((el) => {
        gsap.from(el, {
            x: -200,
            duration: 1,
            opacity: 0,
            delay: 0.1,
            stagger: 0.2,
            ease: "power2",
            scrollTrigger:{
                trigger: el,
                start: "top 80%",
                end: "+=500",
                scrub: true,
                },
            });
        }
    );
    
    tlCore.from('.aka__core', {
        y: 200,
        opacity: 0,
        duration: 0.5,

    });
    tlCore.from('.aka__paralellogram', {
        opacity: 0,
        duration: 0.5,

    });
    tlCore.from('.aka__mid', {
        opacity: 0,
        duration: 0.5,

    });

    ScrollTrigger.create({
        trigger: '.aka__box', // Replace with your section's class or ID
        start: "top 80%",
        scrub: true,
        onEnter: () => tlCore.play(), // Play the timeline when the section enters the viewport
    });

    gsap.from('.gsap-header-sm', {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.gsap-header-sm',
            start: "top 80%",
        }
    });
    
    emailButton.addEventListener('click', () => {
        navigator.clipboard.writeText('info@theaikido.ai').then(() => {
            console.log('Email copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
        emailButton.classList.add('copied');
        gsap.to(emailButtonSpan, {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
                emailButtonSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.5 8.375V24.125C21.5 24.3571 21.4078 24.5796 21.2437 24.7437C21.0796 24.9078 20.8571 25 20.625 25H4.875C4.64294 25 4.42038 24.9078 4.25628 24.7437C4.09219 24.5796 4 24.3571 4 24.125V8.375C4 8.14294 4.09219 7.92038 4.25628 7.75628C4.42038 7.59219 4.64294 7.5 4.875 7.5H20.625C20.8571 7.5 21.0796 7.59219 21.2437 7.75628C21.4078 7.92038 21.5 8.14294 21.5 8.375ZM24.125 4H8.375C8.14294 4 7.92038 4.09219 7.75628 4.25628C7.59219 4.42038 7.5 4.64294 7.5 4.875C7.5 5.10706 7.59219 5.32962 7.75628 5.49372C7.92038 5.65781 8.14294 5.75 8.375 5.75H23.25V20.625C23.25 20.8571 23.3422 21.0796 23.5063 21.2437C23.6704 21.4078 23.8929 21.5 24.125 21.5C24.3571 21.5 24.5796 21.4078 24.7437 21.2437C24.9078 21.0796 25 20.8571 25 20.625V4.875C25 4.64294 24.9078 4.42038 24.7437 4.25628C24.5796 4.09219 24.3571 4 24.125 4Z" fill="black"/></svg> Email copied';
                gsap.to(emailButtonSpan, {
                    opacity: 1,
                    duration: 0.1,
                });
                gsap.to(emailButtonSpan, {
                    opacity: 0,
                    duration: 0.1,
                    delay: 0.5,
                    onComplete: () => {
                        emailButtonSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M32.5 13.3333L19.8333 21.25L7.16667 13.3333V10.1667L19.8333 18.0833L32.5 10.1667M32.5 7H7.16667C5.40917 7 4 8.40917 4 10.1667V29.1667C4 30.0065 4.33363 30.812 4.9275 31.4058C5.52136 31.9997 6.32681 32.3333 7.16667 32.3333H32.5C33.3399 32.3333 34.1453 31.9997 34.7392 31.4058C35.333 30.812 35.6667 30.0065 35.6667 29.1667V10.1667C35.6667 9.32681 35.333 8.52136 34.7392 7.9275C34.1453 7.33363 33.3399 7 32.5 7Z" fill="#E7FBF8"/></svg>Connect via email';
                        gsap.to(emailButtonSpan, {
                            opacity: 1,
                            duration: 0.5,
                        });
                        emailButton.classList.remove('copied');
                    }
                });
            }
        });
    });
}