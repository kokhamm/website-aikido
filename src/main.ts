import './_style.scss';  

import { initSwiper} from './ts/swiper';
import {initHeader} from './ts/header';
import { initPreloader } from './ts/preloader';
import { initMission } from './ts/mission';
import { initVariables } from './ts/variables';

document.addEventListener('DOMContentLoaded', function() {
    initSwiper();
    initHeader();
    initPreloader();
    initMission();
    initVariables();
});

