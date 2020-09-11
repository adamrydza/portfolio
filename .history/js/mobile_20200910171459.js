const menu = document.querySelector('.hamburger'); 
const navItem = document.querySelector('.header__navMobileContent');
const removeMenu 

menu.addEventListener('click', () => { 
    menu.classList.toggle('hamburger--active'); 
    navItem.classList.toggle('navMobileActive'); 
});