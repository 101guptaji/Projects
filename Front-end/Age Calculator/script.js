//Write your javascript code here
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const maxDate = `${yyyy}-${mm}-${dd}`;

document.getElementById("birthday").setAttribute("max", maxDate);
    
document.getElementById("btn")
    .addEventListener("click", () => getAge());

function getAge() {
    const result = document.querySelector("#result");
    const birthday = document.querySelector("#birthday")?.value;
    if (!birthday) {
        alert("Please enter your birthdate");
    }
    // console.log(birthday);

    const dob = new Date(birthday)
    const doy = dob?.getFullYear() || yyyy;
    const age = (yyyy - doy);

    if (age===0) {
        result.innerHTML = "You are "+age+" year old";
    }
    else {
        result.innerHTML = "You are " + age + " years old";
    }
}