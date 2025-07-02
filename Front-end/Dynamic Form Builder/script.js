//Write your javascript code here
const forms = {};

function isExists(arr, key) {
    for (let x of arr) {
        if (x.field === key) {
            return true;
        }
    }
    return false;
}

function addField() {
    const formName = document.querySelector("#formName");
    const fieldType = document.querySelector("#fieldType");
    const fieldLabel = document.querySelector("#fieldLabel");

    const name = formName.value.trim() || "Unnamed Form";
    const type = fieldType.value;
    const field = fieldLabel.value.trim();

    if (!field || field === '') {
        alert("Please add the field");
        return;
    }

    // console.log(name, type, field);
    const obj = { field, type };
    if (forms[name]) {
        if(!isExists(forms[name], field))
            forms[name].push({ ...obj });
    }
    else {
        forms[name] = [obj]
    }

    // console.log(forms);
    alert("Your field in the form is added successfully");

    fieldLabel.value = "";
}

function saveForm() {
    const formName = document.querySelector("#formName");
    const name = formName.value.trim() || "Unnamed Form";

    if (!forms[name] || forms[name].length === 0) {
        alert("Please add at least one field with a label to the form before saving.");
        return;
    }

    displayForm();
}

function displayForm() {
    const container = document.querySelector("#formsContainer");
    container.innerHTML = '';

    for (form in forms) {
        // console.log(form);
        const heading = document.createElement("h2");
        heading.innerHTML = form;
        container.appendChild(heading);

        const formContainer = document.createElement("form");
        forms[form].forEach((entry, index) => {
            const div = document.createElement("div");

            const inputId = `${form}_${entry.field}_${index}`; // unique id
            const label = document.createElement("label");
            label.textContent = entry.field;
            label.setAttribute("for", inputId); // ? associate label with input

            const input = document.createElement("input");
            input.setAttribute("type", entry.type);
            input.setAttribute("id", inputId);

            // For checkboxes and radios, also set a name attribute for grouping
            if (entry.type === "radio") {
                input.setAttribute("name", form + "_" + entry.field);
            }

            div.appendChild(label);
            div.appendChild(input);

            formContainer.appendChild(div);
        });

        container.appendChild(formContainer);
    }
}