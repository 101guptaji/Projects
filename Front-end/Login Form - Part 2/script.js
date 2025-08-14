//Write your javascript code here
function handleForm(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");
    let name = nameInput?.value?.trim();
    let email = emailInput?.value;
    let password = passInput?.value;
    if (!name || !email || !password) {
        alert("Fill the form correctly.");
        return;
    }
    // console.log(name, email, password);

    if (name.match(/^[a-zA-Z\s]+$/)
        && email.match(/^[A-Za-z0-9._+-]+@codingninjas\.com$/)
        && password.match(/^(?=.*@).{8,}$/)) {
        alert("Form submitted successfully.");
    }
    else {
        alert("Fill the form correctly.");
    }
}