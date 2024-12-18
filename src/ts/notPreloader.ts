
export function notPreloader(){
    console.log('Not preloader');
    document.body.classList.remove('stopper');
    let preloader = document.querySelector('.preloader') as HTMLElement;
    preloader.classList.add('hidenow');
    preloader.style.position = 'absolute';
    preloader.style.zIndex = '90';
    let preloaderLeft = document.querySelector('.preloader__left') as HTMLElement;
    preloaderLeft.style.display = 'none';
    let preloaderRight = document.querySelector('.preloader__right') as HTMLElement;
    let viewPort = window.innerWidth;
    preloaderRight.style.transform = viewPort > 501 ? 'translateY(25%)' : 'translateY(32rem)';
    preloaderRight.style.right = '0';
    let preloaderRightImg = document.querySelector('.preloader__right img') as HTMLElement;
    if (viewPort > 1100) {
        preloaderRightImg.style.maxWidth = '27rem';
        preloaderRightImg.style.transition = 'max-width 2s';
    } else if (viewPort <= 1100 && viewPort > 800) {
        preloaderRightImg.style.maxWidth = '17rem';
        preloaderRightImg.style.transition = 'max-width 2s';
    } else if (viewPort <= 600) {
        preloaderRight.style.top = '40%';
    };
};