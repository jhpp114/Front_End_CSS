const form_submit_btn = document.querySelector('.form_submit');
let overlay = document.querySelector('.overlay');
form_submit_btn.onclick =  () => {
    if (!overlay.classList.contains('animate-overlay')) {
        overlay.style.display = "grid";
        overlay.classList.add('animate-overlay');
        setTimeout( ()=> {
            overlay.style.display = "none";
            overlay.classList.remove('animate-overlay');
        }, 4000);
    } 
};