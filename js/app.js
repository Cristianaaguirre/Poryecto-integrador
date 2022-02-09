const openMenu = document.querySelector('.menu');
const menuBars = document.querySelector('.navbar__nav')
const navOption = document.querySelectorAll('a.nav__option');
const backToTop = document.querySelector('.go-up__img');

openMenu.addEventListener('click', () => {
    menuBars.classList.toggle('navbar__nav--modifier');
});
backToTop.addEventListener('click', () => {
     backToTop.classList.remove('go-up__img--modifier')
})

for (let i = 0; i < navOption.length ; i++) {
    navOption[i].addEventListener('click', () => {
        menuBars.classList.remove('navbar__nav--modifier');
        backToTop.classList.add('go-up__img--modifier');
    })
};