const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.swiper2', {
    loop: true,
    
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
})