// Elements
const burger_menu = document.querySelector('.nav_section .burger_menu i');
const nav_link = document.querySelector('.nav_section .nav_links');
// arrow
const prevBtn = document.querySelector('.main_arrow .prevBtn');
const nextBtn = document.querySelector('.main_arrow .nextBtn');
const lists_blog_divs = document.querySelectorAll('.main_info_blog');
// move up
const scrollUpBtn = document.querySelector('.scroll_up i');
console.log(scrollUpBtn);
function allBlogObjects() {
    let postBlogs = [
        {
                img: './assets/Blog-post/post-4.png'
            ,   title: 'Great weather to walk around London'
            ,   btnDescription: 'London'
            ,   duration: '3 days ago'
        }
        ,
        {
                img: './assets/Blog-post/post-5.png'
            ,   title: 'Hike the moutain in Jeju Island'
            ,   btnDescription: 'Hike'
            ,   duration: '4 hours ago'
        }
        ,
        {
                img: './assets/Blog-post/post-6.png'
            ,   title: 'Expensive and Luxurious'
            ,   btnDescription: 'Expensive'
            ,   duration: '10 hours ago'
        }
        ,
        {
                img: './assets/Blog-post/post-1.jpg'
            ,   title: "London Fashion week's continued the evolution"
            ,   btnDescription: 'Fashion'
            ,   duration: '2 minutes'
        }
        ,
        {
                img: './assets/Blog-post/post-2.jpg'
            ,   title: 'Italy has the best suit store'
            ,   btnDescription: 'Suits'
            ,   duration: '2 hours'
        }
        ,
        {
                img: './assets/Blog-post/post-3.jpg'
            ,   title: 'France has party place to have fun'
            ,   btnDescription: 'Party'
            ,   duration: '60 minutes'
        }
    ];
    return postBlogs;
}

let currentIndex = 0;
function placeImages() {
    let images = allBlogObjects();
    console.log(lists_blog_divs[0].children);
    console.log(lists_blog_divs[0].children[2].children[0]);
    if (currentIndex < 3) {
        for (let i = 0; i < 3; i++) {
            console.log(images[i]);
            console.log(lists_blog_divs[i].children[0]);
            lists_blog_divs[i].children[0].src = images[i].img;
            lists_blog_divs[i].children[1].innerText = images[i].title;
            lists_blog_divs[i].children[2].children[0].innerText = images[i].btnDescription;
            lists_blog_divs[i].children[2].children[1].innerText = images[i].duration;
            currentIndex++;
        }   
    } else {
        console.log(currentIndex); 
        for (let i = 0; i < 3; i++) {
            lists_blog_divs[i].children[0].src = images[currentIndex].img;
            lists_blog_divs[i].children[1].innerText = images[currentIndex].title;
            lists_blog_divs[i].children[2].children[0].innerText = images[currentIndex].btnDescription;
            lists_blog_divs[i].children[2].children[1].innerText = images[currentIndex].duration;
            currentIndex++;
        }
        console.log(currentIndex);
        currentIndex = 0;
    }
}



function displayBurgerMenu() {
    nav_link.classList.toggle('display_nav_links');
}

burger_menu.addEventListener('click', displayBurgerMenu);
nextBtn.addEventListener('click', placeImages);
prevBtn.addEventListener('click', placeImages);