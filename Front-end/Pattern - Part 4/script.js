function generatePattern(event) {
    event.preventDefault();
    const rowsInput = document.getElementById('rows');
    const rows = rowsInput?.value;
    if (!rows) {
        return;
    }
    // console.log(rows);

    const pattern = document.getElementById('pattern');
    pattern.innerHTML = '';

    for (let i = 0; i < rows; i++){
        const tr = document.createElement("tr");
        for (let j = 0; j < rows-i-1; j++){
            const td = document.createElement('td');
            td.textContent = '';
            tr.appendChild(td);
        }
        for (let j = rows - i - 1; j < rows; j++){
            const td = document.createElement('td');
            td.textContent = '*';
            tr.appendChild(td);
        }
        pattern.appendChild(tr);
    }

    rowsInput.value = '';
}