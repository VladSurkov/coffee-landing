const burger = document.querySelector('#burger');
const headerMenu = document.querySelector('#header__menu');
const body = document.body;
if(burger && headerMenu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });
}