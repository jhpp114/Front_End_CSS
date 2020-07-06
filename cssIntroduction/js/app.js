function displayBurgerMenu() {
    const hamberger_menu = document.querySelector('.hamburger');
    const hamberger_items = document.querySelector('.header_section nav ul');
    console.log(hamberger_menu);   
    hamberger_menu.onclick = () => {
        hamberger_items.classList.toggle('activate_hamburger_menu');
    };   
}

displayBurgerMenu();