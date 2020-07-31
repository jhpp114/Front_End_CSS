// Elements
const junior_naver = document.querySelector('.junior_naver');
const apply_blue = document.querySelector('.apply_blue');
const apply_red = document.querySelector('.apply_red');
const apply_green = document.querySelector('.apply_green');
const naver_color = document.querySelector('.naver_color');
// ========= main content elements====================
const highlight_news = document.querySelector('.dynamic_news');
// ========== option_things_to_read===================
const option_things_to_read = document.querySelector('.option_things_to_read');
// =========== vedio elements ========================
const videos = document.querySelectorAll(".video");



// =========== Window Scroll =========================
const naver_search_bar = document.querySelector('.main_logo');
const shopping_items = document.querySelector('.shopping_heading_items');
window.onscroll = function(e) {
    //console.log(window.scrollY);
    let scrollY_pixel = window.scrollY;
    if (scrollY_pixel >= 500) {
        naver_search_bar.classList.add('search_bar_behavior');
        
    } else {
        naver_search_bar.classList.remove('search_bar_behavior');
    }
}

// Event listeners
junior_naver.addEventListener("mouseover", apply_color_change);
junior_naver.addEventListener("mouseout", remove_color_change);
document.addEventListener('DOMContentLoaded', change_headline_everyTwoSec);
option_to_read_active();
auto_play_video();

function auto_play_video() {
    videos.forEach(function(video) {
        video.addEventListener('mouseover', ()=> {
            console.log("play?");
            video.play();
        });
        video.addEventListener('mouseout', ()=> {
            video.pause();
        });
    });
}

function option_to_read_active() {
    let options = option_things_to_read.children;
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function() {
            // remove active
            removeClass();
            // apply active
            options[i].classList.add(`active_${i}`);
        });
    }
}

function removeClass() {
    let options = option_things_to_read.children;
    for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains(`active_${i}`)) {
            options[i].classList.remove(`active_${i}`);
            console.log(options[i]);
        }
    }
}

// functions
function random_news_line() {
    const newsLineArr = [
    ,   "Choco-Nyang O-Ta-Ku"
    ,   "Subscriber reached 19!"
    ,   "6 weeks learning code...."
    ,   "[LIVE] UDT forces training"
    ,   "ROK and US military go together"
    ,   "Self Learner can do it!"
    ,   "[Hope] I finally got a job...."
    ];
    return newsLineArr;
}

function change_headline_everyTwoSec() {
    let newsData = random_news_line();
    let i = 0;
    setInterval(function() {
        highlight_news.textContent = newsData[i];
        i++;
        if (i >= newsData.length - 1) {
            i = 0;
        }
    }, 2000); 
}

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
