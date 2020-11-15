(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());


// burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav_close')
    burgerItem.addEventListener(`click`, () => {
        menu.classList.add('header__nav_active');         
    });
    menuClose.addEventListener(`click`, () => {
        menu.classList.remove('header__nav_active');         
    });
}());