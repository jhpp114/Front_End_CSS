// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// Ui class
class UI {
    static displayBook() {
        const Books = Store.getStorage();
        Books.forEach(book => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const tableBody = document.querySelector('#book-list');
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
        `;
        tableBody.appendChild(tableRow);
    }

    static clearList() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    
    static delete_one_list(target) {
        if (target.classList.contains("delete")) {
            target.parentElement.parentElement.remove();
        }
    }

    static alert_message(message, type) {
        const container = document.querySelector('.input_container');
        const alertLocation = document.querySelector('book-form');
        const alertDiv = document.createElement('div');
        const alertClass = `alert alert-${type}`;
        alertDiv.className = alertClass;
        alertDiv.appendChild(document.createTextNode(message));
        container.insertBefore(alertDiv, alertLocation);

        // set timer to remove alert
        setTimeout( () => {
            alertDiv.remove();
        }, 2000);
    }
} 
// store class
class Store {
    static getStorage() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
    static addStorage(book) {
        const books = Store.getStorage();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getStorage();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}
// event display book
document.addEventListener('DOMContentLoaded', UI.displayBook);
const submit_form = document.querySelector('#book-form');
submit_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    let book = new Book(title, author, isbn);
    // validation check
    if (book.title === '' || book.author === '' || book.isbn === '') {
        let message = "All fields has to be filed";
        let type = 'danger';
        UI.alert_message(message, type);
        return;
    }
    let message = "Successfully added on the list";
    let type = 'success';
    
    
    UI.addBookToList(book);
    Store.addStorage(book);
    UI.alert_message(message, type);
    UI.clearList();
});

// event add book

// event remove book
const tableBody = document.querySelector('#book-list');
tableBody.addEventListener('click', (e)=> {
    let message = 'successfully deleted from the list';
    let type = 'success';
    
    UI.delete_one_list(e.target);
    const targetISBN = e.target.parentElement.previousElementSibling.textContent;
    Store.removeBook(targetISBN);
    UI.alert_message(message, type);
    // console.log(e.target);
});
