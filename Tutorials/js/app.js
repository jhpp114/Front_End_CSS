const burger_menu = document.querySelector('.nav_section .burger_menu i');
const nav_link = document.querySelector('.nav_section .nav_links');
console.log(nav_link);
function displayBurgerMenu() {
    nav_link.classList.toggle('display_nav_links');
}

burger_menu.addEventListener('click', displayBurgerMenu);