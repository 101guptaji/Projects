window.onload = function () {
    displayNotes();
}

localStorage.setItem("notes", JSON.stringify([]));

function saveNote() {
    const title = document.querySelector("#noteTitle");
    const content = document.querySelector("#noteContent");

    if (title && title.value && content && content.value) {
        const note = { title: title.value.trim(), content: content.value.trim() };
        // console.log(note);

        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ ...note });

        localStorage.setItem("notes", JSON.stringify(notes));

        title.value = "";
        content.value = "";

        displayNotes();
    }
    
}

function deleteNote() {
    const checkboxes = document.querySelectorAll(".note-checkbox:checked");
    if (checkboxes.length === 0) {
        return;
    }

    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const indexesToDelete = Array.from(checkboxes)
        .map((cb) => parseInt(cb.getAttribute("data-index")))
        .sort((a, b) => b - a);

    // console.log(indexesToDelete);

    indexesToDelete.forEach((index) => {
        notes.splice(index, 1);
    })

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

function clearAllNotes() {
    localStorage.removeItem("notes");
    displayNotes();
}

function searchNotes() {
    
}

function displayNotes() {
    const notesList = document.querySelector("#notesList");
    const template = document.querySelector("#noteTemplate");
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        const noteElement = template.content.cloneNode(true);
        noteElement.querySelector(".note-title").textContent = note.title;
        noteElement.querySelector(".note-content").textContent = note.content;
        noteElement.querySelector(".note-checkbox").setAttribute("data-index", index);
        notesList.appendChild(noteElement);
    })
}