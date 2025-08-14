const fieldType = document.getElementById('fieldType');
const fieldLabel = document.getElementById('fieldLabel');
const addField = document.getElementById('addField');
const saveForm = document.getElementById('saveForm');
const formNameInput = document.getElementById('formName');
const formsContainer = document.getElementById('formsContainer');
let dynamicForm = document.createElement('form');

addField.addEventListener('click', function() {
    const type = fieldType.value;
    const label = fieldLabel.value;
    if(label === "")
    {
        alert("Please add the field");
        return;
    }

    let newField;

    switch(type) {
        case 'text':
            newField = document.createElement('input');
            newField.type = 'text';
            newField.placeholder = label;
            newField.id = label;
            const textLabel = document.createElement('label');
            textLabel.htmlFor = label;
            textLabel.textContent = label;
            dynamicForm.appendChild(textLabel);
            break;
        case 'checkbox':
            newField = document.createElement('input');
            newField.type = 'checkbox';
            newField.id = label;
            const checkboxLabel = document.createElement('label');
            checkboxLabel.htmlFor = label;
            checkboxLabel.textContent = label;
            dynamicForm.appendChild(checkboxLabel);
            break;
        case 'radio':
            newField = document.createElement('input');
            newField.type = 'radio';
            newField.name = 'dynamicRadio';
            newField.id = label;
            const radioLabel = document.createElement('label');
            radioLabel.htmlFor = label;
            radioLabel.textContent = label;
            dynamicForm.appendChild(radioLabel);
            break;
    }

    dynamicForm.appendChild(newField);
    fieldLabel.value = '';
    alert("Your field in the form is added successfully");
    
});

saveForm.addEventListener('click', function() {
    const formName = formNameInput.value;

    // Check if there are valid fields in the form (fields with an id attribute)
    const hasValidFields = Array.from(dynamicForm.children).some(child => child.id);

    console.log('Form children count:', dynamicForm.childElementCount, 'Has valid fields:', hasValidFields);

    // Check if there are no valid fields in the form
    if (!hasValidFields) {
        alert('Please add at least one field with a label to the form before saving.');
        return;
    }

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const formTitle = document.createElement('h3');
    formTitle.classList.add('form-title');
    formTitle.textContent = formName;
    formContainer.appendChild(formTitle);

    formContainer.appendChild(dynamicForm.cloneNode(true)); // Clone the form to keep its current state
    formsContainer.appendChild(formContainer);

    // Reset the original form for new inputs
    dynamicForm = document.createElement('form');
});
