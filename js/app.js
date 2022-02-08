const abrirMenu = document.querySelector('.menu');
const menuBars = document.querySelector('.navbar__nav')
const navOption = document.querySelectorAll('a.nav__option');

abrirMenu.addEventListener('click', () => {
    menuBars.classList.toggle('navbar__nav--modifier');
})


for (let i = 0; i < navOption.length ; i++) {
    navOption[i].addEventListener('click', () => {
        menuBars.classList.remove('navbar__nav--modifier');
    })
};