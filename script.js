new Swiper('.swiper', {
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

    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },

});



const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
})