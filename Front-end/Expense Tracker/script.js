function addExpense() {
    const expenseName = document.getElementById("expenseName");
    const amountStr = document.getElementById("amount");
    const dateStr = document.getElementById("date");

    let expense = expenseName?.value;
    let amount = amountStr?.value;
    let date = dateStr?.value;

    if (!expense || !amount || !date) {
        return;
    }
    // console.log(expense, amount, date);

    const expenseObj = {
        id: Date.now(),
        name: expense,
        amount,
        date
    }

    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expenseObj);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    expenseName.value = '';
    amountStr.value = '';
    dateStr.value = '';

    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    const totalAmount = document.getElementById("totalAmount");
    const template = document.getElementById("expenseTemplate");

    expenseList.textContent = '';
    
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    console.log(expenses);

    let totalExpense = Number(totalAmount?.textContent) || 0;
    for (let expense of expenses) {
        totalExpense += Number(expense.amount) || 0;

        const clone = template.content.cloneNode(true);

        clone.querySelector(".expense-name").textContent = expense.name;
        clone.querySelector(".expense-amount").textContent = expense.amount;
        clone.querySelector(".expense-date").textContent = expense.date;

        expenseList.appendChild(clone);
    }

    totalAmount.textContent = totalExpense;
}