const parent_toggle_data = document.querySelector('.faq_list ul');

parent_toggle_data.addEventListener('click', toggle_data);

function toggle_data(e) {
    let dataToToggle = e.target.nextSibling.nextSibling;
    dataToToggle.classList.toggle("toggle_data");
}
