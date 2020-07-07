const retrieve_image = () => {
    let image_lists = [
        "./images/photo1", "./images/photo2", "./images/photo3"
    ,   "./images/photo4", "./images/photo5"
    ];
    
    return image_lists;
};
let index = 0;
const apply_first_image = (e) => {
    let image_sets = retrieve_image();
    console.log("hello");
    const image_div = document.querySelector('.main_image');
    image_div.style.backgroundImage = `url(${image_sets[index]}.jpg)`
    index++;
};

const viewNext_image = () => {
    let image_sets = retrieve_image();
    const nextBtn = document.querySelector('.next_btn'); 
    const image_div = document.querySelector('.main_image');
    
    nextBtn.onclick = () => {
        if (index >= image_sets.length) {
            index = 0; 
        }
        image_div.style.backgroundImage = `url(${image_sets[index]}.jpg)`;
        index++;
    }
};

const viewPrev_image = () => {
    let image_sets = retrieve_image();
    let image_div = document.querySelector('.main_image');
    const prevBtn = document.querySelector('.prev_btn');
    prevBtn.onclick = () => {
        if (index == 0) {
            index = image_sets.length - 1;
        }
        --index;
        image_div.style.backgroundImage = `url(${image_sets[index]}.jpg)`;
    }
    
};

document.addEventListener("DOMContentLoaded", apply_first_image);
viewNext_image();
viewPrev_image();
