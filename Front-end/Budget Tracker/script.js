//Write your javascript code here
let budget = 0;
document.querySelector("#budget-form")
    .addEventListener("submit", (e) => handleSubmit(e));
    
function handleSubmit(e) {
    e.preventDefault();
    const desc = document.querySelector("#description");
    const amtText = document.querySelector("#amount");
    const type = document.querySelector("#type");
    const result = document.querySelector("#total-budget");

    const amountText = amtText?.value.trim();
    if (!desc?.value || !amountText || amountText === ''  || !type) {
        return;
    }

    const amount = Number(amountText);
    // if (isNaN(amount)) {
    //     return;
    // }
    console.log(amount);

    if (type.value.trim() === 'income') {
        budget += amount;
    }
    else {
        budget -= amount;
    }

    result.innerHTML = budget;

    desc.value = '';
    amtText.value = '';
}