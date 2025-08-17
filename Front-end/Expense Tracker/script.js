const expenseNameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const addExpenseButton = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const totalAmountDisplay = document.getElementById("totalAmount");
const expenseTemplate = document.getElementById("expenseTemplate");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


displayExpenses();

function addExpense() {
    const expense = {
        id: Date.now(),
        name: expenseNameInput.value,
        amount: amountInput.value,
        date: dateInput.value
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses(); // Refresh the list

    expenseNameInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
}

function displayExpenses() {
    expenseList.innerHTML = ""; // Clear the list before re-populating

    let totalAmount = 0;
    expenses.forEach(expense => {
        totalAmount += Number(expense.amount) || 0;

        const expenseItem = document.importNode(expenseTemplate.content, true);

        expenseItem.querySelector(".expense-name").textContent = expense.name;
        expenseItem.querySelector(".expense-amount").textContent = expense.amount;
        expenseItem.querySelector(".expense-date").textContent = expense.date;
        expenseItem.querySelector("li").dataset.id = expense.id;

        expenseList.appendChild(expenseItem);
    });
    
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
}

function removeExpense(event) {
    // get id
    const expenseId = event.target.closest("li").dataset.id;
    // console.log(expenseId);

    // filter out the removed expense
    expenses = expenses.filter(exp => exp.id != expenseId);
    // console.log(expenses);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses(); // refresh list
}

displayExpenses();