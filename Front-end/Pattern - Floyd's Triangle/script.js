function generatePattern(event) {
    event.preventDefault();

    const numInput = document.querySelector("#rows");
    const pattern = document.querySelector("#pattern");

    pattern.innerHTML = '';
    
    let num = Number(numInput?.value);
    if (!num || isNaN(num) || num < 1 || num > 10) {
        return;
    }

    let count = 1;
    for (let i = 0; i < num; i++){
        const row = document.createElement("tr");
        for (let j = 0; j <= i; j++){
            const td = document.createElement("td");
            td.textContent = count++;
            td.style.width = '20px';
            td.style.height = '20px';
            row.appendChild(td);
        }
        pattern.appendChild(row);
    }

    numInput.value=''
}
