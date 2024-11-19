/////// Swiper
const controlSwiperBtns = document.querySelectorAll('.swiper__arrow');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

controlSwiperBtns[0].addEventListener('click', () => swiper.slidePrev());
controlSwiperBtns[1].addEventListener('click', () => swiper.slideNext());

/////// Burger
const burgerBtn = document.querySelector('.header__burger-wrapper');
const bodyElement = document.querySelector('body');
const navElement = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');

navElement.addEventListener('click', () => {
    if (bodyElement.classList.contains('freeze')) {
        toggleBurger();
    }
});

burgerBtn.addEventListener('click', toggleBurger);

function toggleBurger() {
    bodyElement.classList.toggle('freeze');
    navElement.classList.toggle('header__nav_active');
    burgerBtn.classList.toggle('open');
}

/////// Layouts
const layoutMasks = document.querySelectorAll('.layout__mask');
const layoutBtns = document.querySelectorAll('.layout__btn');

layoutBtns.forEach((el) => {
    el.addEventListener('click', () => {
        layoutMasks.forEach((el) =>
            el.classList.remove('layout__mask-wrapper_active')
        );
        layoutBtns.forEach((el) => el.classList.remove('layout__btn_active'));

        el.classList.add('layout__btn_active');
        layoutMasks[el.getAttribute('data-number') - 1].classList.add(
            'layout__mask-wrapper_active'
        );
    });
});
