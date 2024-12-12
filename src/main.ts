import './_style.scss';  

import { initSwiper } from './ts/swiper';
import { initHeader } from './ts/header';
import { initPreloader } from './ts/preloader';
import { notPreloader } from './ts/notPreloader';
import { initMission } from './ts/mission';
import { initVariables } from './ts/variables';
import { initCounter } from './ts/counter';

document.addEventListener('DOMContentLoaded', function() {
    initSwiper();
    initHeader();
    if (!localStorage.getItem('visited')) {
        localStorage.setItem('visited', 'true');
        initPreloader();
    } else {
        notPreloader();
    };
    initMission();
    initCounter();
    initVariables();
    
});

