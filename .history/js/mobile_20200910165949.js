const menu = document.querySelector('.hamburger'); 
const navItem = document.querySelector('.header__navMobileContent');

menu.addEventListener('click', () => { 
    menu.classList.toggle('hamburger--active'); 
    nav.classList.toggle('navMobileActive'); 
});