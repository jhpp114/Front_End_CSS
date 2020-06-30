const burger_menu_toggler = () => {
    const burger_menu = document.querySelector('.burger_menu');
    console.log(burger_menu);
    const nav_ul_tag = document.querySelector('header nav ul');
    console.log(nav_ul_tag);
    burger_menu.onclick = () => {
        nav_ul_tag.classList.toggle('burger_menu_active');
    };
    console.log("hello");
};

burger_menu_toggler();
