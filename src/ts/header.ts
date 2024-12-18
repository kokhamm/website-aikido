
export function initHeader() {
    //   header links


    // toggle headerMenu
    let toggle = document.querySelector('.toggle') as HTMLElement;
    toggle.addEventListener('click', function(event) {
        event.stopPropagation();

        let headerMobile = document.querySelector('.header__mobile') as HTMLElement;
        if (headerMobile.classList.contains('on')) {
            headerMobile.classList.remove('on');
        } else {
            headerMobile.classList.add('on');
        }

        let body = document.querySelector('body') as HTMLElement;
        if (body.classList.contains('stopper')) {
            body.classList.remove('stopper');
        } else {
            body.classList.add('stopper');
        }
    });

    // all anchor links
    let somea = document.querySelectorAll('a') as NodeListOf<HTMLElement>;
    somea.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href') || '';

            // Check if the link is an internal anchor link
            if (href.startsWith('#') && document.querySelector(href)) {
                e.preventDefault(); // Prevent default action for internal links

                // Smooth scroll logic
                let offset = 60; // Change this to the offset you want
                let target = document.querySelector(href) as HTMLElement;
                let position = target.offsetTop - offset;

                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            } ;
        });
    });
    let anchorLinksMob = document.querySelectorAll('.anchor__link-mob') as NodeListOf<HTMLElement>;
    anchorLinksMob.forEach(function(anchorLink) {
        anchorLink.addEventListener('click', function() {
            var headerMobile = document.querySelector('.header__mobile') as HTMLElement;
            var body = document.querySelector('body') as HTMLElement;
            var checkbox = document.querySelector('#checkbox') as HTMLInputElement;

            if (headerMobile) {
                headerMobile.classList.remove('on');
            }

            if (body) {
                body.classList.remove('stopper');
            }

            if (checkbox) {
                checkbox.checked = false;
            }
        });
    });

    // Corrected typo in the comment
    window.onload = function() {
        var modal = document.getElementById('cookie-consent-modal') as HTMLElement;
        var allowCookies = document.getElementById('allow-cookies') as HTMLElement;
        var declineCookies = document.getElementById('decline-cookies') as HTMLElement;

        if (!modal || !allowCookies || !declineCookies) {
            console.error('Cookie consent elements not found');
            return; // Exit if essential elements are missing
        }

        var cookieConsent = getCookie('cookieConsent');

        if (!cookieConsent) {
            modal.style.display = 'flex';
        }

        allowCookies.onclick = function() {
            setCookie('cookieConsent', 'true', 365);
            closeModal(modal);
        }

        declineCookies.onclick = function() {
            setCookie('cookieConsent', 'false', 365);
            closeModal(modal);
        }

        // Debugging Calendly widget
        // console.log('Calendly widget script loading...');
        // window.setTimeout(function () {
        //     var script = document.createElement('script');
        //     script.async = true;
        //     script.src = 'https://assets.calendly.com/assets/external/widget.js';
        //     const head = document.querySelector('head');
        //     if (head) {
        //         head.appendChild(script);
        //     } else {
        //         console.error('Head element not found');
        //     }
        //     console.log('Calendly widget script loaded.');
        // }, 3000);
    }

    function closeModal(modal: HTMLElement) {
        modal.style.opacity = '0';
        setTimeout(function(){
            modal.style.display = 'none';
        }, 550);
        // Consider setting focus to a relevant element after closing the modal
    }

    function setCookie(name: string, value: string, days: number) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name: string) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    window.scrollTo(0, 0);
    // Scroll to top on reload
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}