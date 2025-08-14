let books = JSON.parse(localStorage.getItem("books")) || [];
// localStorage.clear();

function addBook() {
   const bookInput = document.querySelector("#bookName");
    if (bookInput && bookInput.value) {
        const obj = {
            name: bookInput.value,
            read: false
        }
        books.push(obj);
        // console.log(books);
        localStorage.setItem("books", JSON.stringify(books));

        bookInput.value = "";
        renderBooks();
    }
}

function renderBooks() {
  const ul = document.querySelector("#bookList");

    if (ul) {
        ul.innerHTML = '';

        for (let index = 0; index < books.length;index++) {
            const li = document.createElement("li");
            li.innerHTML = books[index].name;
            li.setAttribute("key", index);
            if (books[index].read===true) {
                li.classList.add('read');
            }
            li.addEventListener('click', () => toggleRead(index));

            const button = document.createElement("button");
            button.classList.add("delete");
            button.innerHTML = "Delete";
            button.addEventListener('click', (event) => deleteBook(event, index))

            li.appendChild(button);
            ul.appendChild(li);
        }
   }
}

function toggleRead(index) {
    // write logic to toggle the 'read' class when clicked on book
    // console.log(e, bookIndex);
    const ul = document.querySelector("#bookList");

    if (books[index]) {
        books[index].read = !books[index].read;
    }

    if (ul.children[index]) {
        ul.children[index].classList.toggle("read");
    }
}

function deleteBook(event, index) {
    // console.log(e, index);
    if (event && typeof event.stopPropagation === 'function') {
        event.stopPropagation();
    }
    console.log('Before:', books); 
    if (books.length === 1) {
        books = [];
        localStorage.clear();
    }
    else {
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
    }
    console.log('After:', books); 

    renderBooks();
}

renderBooks();