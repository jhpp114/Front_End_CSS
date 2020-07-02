// DOM elements
const todolist_add_input = document.querySelector('.todolist_add input');
const todolist_button = document.querySelector('.todolist_add button');
const todolist_ul = document.querySelector('.todolist_ul');
// Event Listener
todolist_button.addEventListener("click", addList);


function addList(event) {
    event.preventDefault();
    readvalueHelper();
}

function readvalueHelper() {
    let todo_value = todolist_add_input.value;
    addAsListHelper(todo_value);
}

function addAsListHelper(todo_value) {
    let todoListDiv = document.createElement('div');
    todoListDiv.classList.add('todo_list');
    // get values
    let todolist_value = todo_value;
    // create li elements and put value into li
    let li_tags = document.createElement('li');
    li_tags.innerText = todolist_value;
    todoListDiv.appendChild(li_tags);
    // create complete button
    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="far fa-thumbs-up"></i>';
    todoListDiv.appendChild(completeBtn);
    // create trash button
    let trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoListDiv.appendChild(trashBtn);
    // append it to ul
    todolist_ul.appendChild(todoListDiv);
    console.log(todoListDiv);
    // clear the input value after append
    clearInputHelper();
}

function clearInputHelper() {
    todolist_add_input.value = "";
}
