const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 8,
    slidesPerView: 1.2,
    loop: false,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
        992: {
            spaceBetween: 20,
            slidesPerView: 3.2,
        },
        1199: {
            spaceBetween: 20,
            slidesPerView: 4.2,
        },
    },
});