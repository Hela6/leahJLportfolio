const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks_container");


function toggleNav() {
    hamburgerToggler.classList.toggle("open");

    navLinksContainer.classList.toggle("open");
}

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3500,
    },
    speed: 1200,
    effect: 'coverflow',
    followFinger: false,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

});



