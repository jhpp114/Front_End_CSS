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

const dynamic_comment = document.querySelector('.dynamic_comment');
let contextArray = ["website.", "shop.", "blog.", "business.", "landing.", "protfolio."];
let counter = 0;
const changeContext = () => {
    dynamic_comment.textContent = contextArray[counter];
    counter++;
    if (counter >= contextArray.length) {
        counter = 0;
    }
};

const apply_changed_context = () => {
    return new Promise( () => {
        setInterval(changeContext, 2000);
    });
};

apply_changed_context();
burger_menu_toggler();
