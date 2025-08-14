let books = [];

function addBook() {
    // write logic for adding book
    const bookInput = document.querySelector("#bookName");
    if (bookInput && bookInput.value) {
        const obj = {
            name: bookInput.value,
            read: false
        }
        books.push(obj);
        // console.log(books);

        bookInput.value = "";
        renderBooks();
    }
}

function renderBooks() {
    // write logic for displaying books 
    const ul = document.querySelector("#bookList");

    if (ul && books.length > 0) {
        const li = document.createElement("li");
        let index = books.length - 1;
        li.innerHTML = books[index].name;
        li.setAttribute("key",  index);
        li.addEventListener('click', (event) => toggleRead(event, index));

        ul.appendChild(li);
    }

}

function toggleRead(e,bookIndex) {
    // write logic to toggle the 'read' class when clicked on book
    console.log(e, bookIndex);
    e.stopPropagation();
    books[bookIndex].read = !books[bookIndex].read;

    const ul = document.querySelector("#bookList");
    if (ul.children[bookIndex]) {
        ul.children[bookIndex].classList.toggle("read");
    }
}

renderBooks();