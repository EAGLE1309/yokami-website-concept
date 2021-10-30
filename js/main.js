//smooth scroll animation
AOS.init();
ScrollReveal({
    reset: true
});

ScrollReveal().reveal('.card', {
    delay: 50
});
ScrollReveal().reveal('.srv', {
    delay: 150
});

//for page navigation

window.addEventListener("scroll", navScroll)

function navScroll() {
    const navBar = document.querySelector("nav");
    navBar.classList.toggle("sticky", window.scrollY > 0);
};

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

/*-- PAGE EFFECTS --*/
//swiper JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


//touch/click effect
const OPTS = {
    fill: 'none',
    radius: 10,
    strokeWidth: {
        20: 0
    },
    scale: {
        0: 1
    },
    angle: {
        'rand(-35, -70)': 0
    },
    duration: 300,
    left: 0,
    top: 0,
    easing: 'cubic.inout'
};

const circle1 = new mojs.Shape({
    ...OPTS,
    stroke: '#88ce6b',
});

const circle2 = new mojs.Shape({
    ...OPTS,
    radius: {
        0: 5
    },
    strokeWidth: {
        10: 0
    },
    stroke: '#9ba0a3',
    delay: 'rand(75, 150)'
});

document.addEventListener('click', function (e) {

    circle1
    .tune({
        x: e.pageX, y: e.pageY
    })
    .replay();

    circle2
    .tune({
        x: e.pageX, y: e.pageY
    })
    .replay();

});
