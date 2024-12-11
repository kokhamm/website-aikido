import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


export function initCounter(){
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    let counters = document.querySelectorAll('.counter') as NodeListOf<HTMLElement>;
    counters.forEach(el=>{
        let elHeight = el.clientHeight;
        let elContent = el.innerHTML;
        el.innerHTML = '';
        el.style.display = 'flex';
        el.style.overflow = 'hidden';
        let nums: number[] = [];
        let numsOther = [];
        for (let char of elContent){
            if (char.match(/\d/)){
                let trans = parseInt(char, 10);
                nums.push(trans);
            } else {
                numsOther.push(char);
            }
        }
        for(let i = 0; i < nums.length; i++){
            let num = document.createElement('div');
            num.style.height = elHeight + 'px';
            num.style.display = 'flex';
            num.style.flexDirection = 'column';
            num.style.textAlign = 'end';
            for (let e = 0; e <= nums[i]; e++){
                let span = document.createElement('span');
                span.innerHTML = e.toString();
                span.style.minHeight = elHeight + 'px';
                num.appendChild(span);
                gsap.fromTo(span, {
                    'tramform': 'translateY(100%)'
                },{
                    'transform': 'translateY(-' + ( 100 * nums[i]) + '%)',
                    scrollTrigger:{
                        trigger: '.nums',
                        scrub: 2,
                        start: 'top 50%',
                        end: '+=200',
                    }
                });
            };
            el.appendChild(num);
            
        }
        let otherPart = document.createElement('span');
        otherPart.innerHTML = numsOther.join('');
        el.appendChild(otherPart);
    });
}