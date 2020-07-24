const junior_naver = document.querySelector('.junior_naver');
const apply_blue = document.querySelector('.apply_blue');
const apply_red = document.querySelector('.apply_red');
const apply_green = document.querySelector('.apply_green');
const naver_color = document.querySelector('.naver_color');
junior_naver.addEventListener("mouseover", apply_color_change);
junior_naver.addEventListener("mouseout", remove_color_change);

function apply_color_change() {
    apply_blue.style.color = "blue";
    apply_red.style.color = "red";
    apply_green.style.color = "#2DB400";
    naver_color.style.color = "#2DB400";
}

function remove_color_change() {
    apply_blue.style.color = "rgb(153, 153, 153)";
    apply_red.style.color = "rgb(153, 153, 153)";
    apply_green.style.color = "rgb(153, 153, 153)";
    naver_color.style.color = "rgb(153, 153, 153)";
}