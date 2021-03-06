// DOM elements
const todolist_add_input = document.querySelector('.todolist_add input');
const todolist_button = document.querySelector('.todolist_add button');
const todolist_ul = document.querySelector('.todolist_ul');
const todo_filter = document.querySelector('#todo_filter');

// Event Listener
document.addEventListener("DOMContentLoaded", loadDataFromLocalStorage);
todolist_button.addEventListener("click", addList);
todolist_ul.addEventListener("click", completeAndRemove);
todo_filter.addEventListener("click", filterLists);

function filterLists(event) {
    let lists_todo = todolist_ul.childNodes;
    console.log(lists_todo);
    console.log(event.target.value);
    for (let i = 1; i < lists_todo.length; i++) {
        console.log(lists_todo[i]);
        switch (event.target.value) {
            case "all":
                lists_todo[i].style.display = "flex";
                break;
            case "incompleted":
                if (!lists_todo[i].classList.contains("completed")) {
                    lists_todo[i].style.display = "flex";
                } else {
                    lists_todo[i].style.display = "none";
                }
                break;
            case "completed":
                if (lists_todo[i].classList.contains("completed")) {
                    lists_todo[i].style.display = "flex";
                } else {
                    lists_todo[i].style.display = "none";
                }
                break;
        }
    }
}

function completeAndRemove(event) {
    if (event.target.classList[0] === "trash_btn") {
        let event_parent = event.target.parentNode;
        removeHelper(event_parent);
    }
    else if (event.target.classList[0] === "completed_btn") {
        let event_parent = event.target.parentNode;
        completeHelper(event_parent);
    }
}

function completeHelper(the_event) {
    the_event.classList.toggle('completed');
}

function removeHelper(the_event) {
    // let deleteTarget = event.target.parentNode;
    the_event.classList.add('delete');
    // console.log(the_event);
    localstorage_list_remove(the_event);
    the_event.addEventListener('transitionend', () => {
        the_event.remove();
    });
}

function addList(event) {
    event.preventDefault();
    readvalueHelper();
}

function readvalueHelper() {
    let todo_value = todolist_add_input.value;
    if (todo_value === "") {
        return;
    }
    // console.log(todo_value);
    addAsListHelper(todo_value);
}

function addAsListHelper(todo_value) {
    let todoListDiv = document.createElement('div');
    todoListDiv.classList.add('todo_list');
    // get values
    let todolist_value = todo_value;
    // save it in local storage
    setInLocalStorage(todolist_value);
    // create li elements and put value into li
    let li_tags = document.createElement('li');
    li_tags.innerText = todolist_value;
    todoListDiv.appendChild(li_tags);
    // create complete button
    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="far fa-thumbs-up"></i>';
    completeBtn.classList.add('completed_btn');
    todoListDiv.appendChild(completeBtn);
    // create trash button
    let trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash_btn');
    todoListDiv.appendChild(trashBtn);

    // append it to ul
    todolist_ul.appendChild(todoListDiv);
    // console.log(todoListDiv);
    // clear the input value after append
    clearInputHelper();
}

function clearInputHelper() {
    todolist_add_input.value = "";
}

function setInLocalStorage(todo_list) {
    let todo_list_local;
    console.log(todo_list);
    if (localStorage.getItem("todo_list_local") === null) {
        todo_list_local = [];
    } else {
        // convert it to json obj
        todo_list_local = JSON.parse(localStorage.getItem("todo_list_local"));
    }
    // push it in json obj
    todo_list_local.push(todo_list);
    localStorage.setItem("todo_list_local", JSON.stringify(todo_list_local));
}

function loadDataFromLocalStorage() {
    let todo_list_local;
    if (localStorage.getItem("todo_list_local") === null) {
        todo_list_local = [];
    } else {
        todo_list_local = JSON.parse(localStorage.getItem("todo_list_local"));
    }
    if (todo_list_local.length === 0) {
        return;
    } else {
        todo_list_local.forEach((each_todo) => {
            let todoListDiv = document.createElement('div');
            todoListDiv.classList.add('todo_list');
            // get values
            let todolist_value = each_todo;
            // create li elements and put value into li
            let li_tags = document.createElement('li');
            li_tags.innerText = todolist_value;
            todoListDiv.appendChild(li_tags);
            // create complete button
            let completeBtn = document.createElement('button');
            completeBtn.innerHTML = '<i class="far fa-thumbs-up"></i>';
            completeBtn.classList.add('completed_btn');
            todoListDiv.appendChild(completeBtn);
            // create trash button
            let trashBtn = document.createElement('button');
            trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
            trashBtn.classList.add('trash_btn');
            todoListDiv.appendChild(trashBtn);
            // append it to ul
            todolist_ul.appendChild(todoListDiv);
        });
    }
}

function localstorage_list_remove(removeItem) {
    let todo_list_local;
    if (localStorage.getItem("todo_list_local") === null) {
        todo_list_local = [];
    } else {
        todo_list_local = JSON.parse(localStorage.getItem("todo_list_local"));
    }
    let targetItem = removeItem.childNodes[0].innerText;
    let targetIndex = todo_list_local.indexOf(targetItem);
    todo_list_local.splice(targetIndex, 1);
    localStorage.setItem("todo_list_local", JSON.stringify(todo_list_local));
}

