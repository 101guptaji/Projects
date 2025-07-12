//Write your javascript code here
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const maxDate = `${yyyy}-${mm}-${dd}`;

document.getElementById("birthday").setAttribute("max", maxDate);
    
document.getElementById("btn")
    .addEventListener("click", () => ageCalculation());

function ageCalculation() {
    const result = document.querySelector("#result");
    const birthday = document.querySelector("#birthday")?.value;
    if (!birthday) {
        alert("Please enter your birthdate");
    }
    else {
        const age = getTheAge(birthday);
        result.innerText = `${age}`;
    }
}

function getTheAge(birth) {
  const currentDate = new Date();
  const birthdayDate = new Date(birth);
  let year = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    year--;
  }
  return year;

}