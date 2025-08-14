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

    if (ul) {
        const li = document.createElement("li");
        li.innerHTML = books[books.length-1].name;

        ul.appendChild(li);
        // for (let item of books) {
        //     console.log(item);
        //     const li = document.createElement("li");
        //     li.innerHTML = item.name;

        //     ul.appendChild(li);
        // }
    }
}

renderBooks();  