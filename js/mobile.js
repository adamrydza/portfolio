const menu = document.querySelector('.hamburger');
const navItem = document.querySelector('.header__navMobileContent');

menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
    navItem.classList.toggle('navMobileActive');
});

$( '.header__navMobileContent a' ).on("click", function(){
    $('.hamburger').click();
  });