// Selectors and Variables
let books = [];
let shelf = document.querySelector('.shelf');
let addButton = document.querySelector('.addbook');
let addBookModal = document.querySelector('#addbookmodal');
let submitButton = document.querySelector('#submit');
let bookTitle = document.querySelector('#title');
let bookAuthor = document.querySelector('#author');
let bookPages = document.querySelector('#pages');
let bookRead = document.querySelector('#isRead');
//Functions
function Book(title,author,pages,read){
    this.author = author;
    this.pages = pages;
    this.title = title;
    this.read = read;
}
function displayAddModal(){
    addBookModal.classList.toggle('active');
}
function toggleRead(e){
    e.target.classList.toggle('read');
    let bookTitle = e.target.parentElement.dataset.book_name;
    books.forEach(book =>{
        console.log('book Name: ' + bookTitle);
        console.log('Title in object :' + book.title );
        if(book.title == bookTitle){
            book.read = !book.read;
        }
    });
    console.log(books);
}
function addBook(book){
    books.push(book);
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    let p  = document.createElement('p');
    p.textContent = book.title;
    bookDiv.appendChild(p);
    p = document.createElement('p');
    p.textContent = book.author;
    bookDiv.appendChild(p);
    p = document.createElement('p');
    p.textContent = book.pages;
    bookDiv.appendChild(p);
    let buttonsDiv = document.createElement('div');
    let readButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    readButton.classList.add('read-button');
    if(book.read){
        readButton.classList.add('read');
    }
    readButton.textContent = 'Read';
    deleteButton.textContent = 'Delete';
    readButton.addEventListener('click',toggleRead);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(deleteButton);
    bookDiv.dataset.book_name = book.title;
    shelf.appendChild(bookDiv);
}
function bookSubmit(e){
    e.preventDefault();
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let isRead = bookRead.checked;
    let newBook = new Book(title,author,pages,isRead);
    addBook(newBook);
    addBookModal.classList.toggle('active');
}
b1 = new Book('Lord of the rings','Tolkien',600,true);
addBook(b1);
b2 = new Book('Catcher in the Rye','Salinger',250,true);
addBook(b2);

//Event Listeners
addButton.addEventListener('click',displayAddModal);
submitButton.addEventListener('click',bookSubmit);