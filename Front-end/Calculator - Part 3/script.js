let displayText = '';
const resultDisplay = document.getElementById('result');

// Add event listeners to number and operator buttons
document.querySelectorAll('.userinput').forEach(btn => {
    btn.addEventListener('click', (e) => {
    appendToDisplay(e.target.innerText);
    });
});

function appendToDisplay(value) {
    console.log(value)
    // Prevent double operator entry or starting with operator, except minus for negative numbers
    if (
    ['+', '-', 'x', '?'].includes(value) &&
    (displayText === '' && value !== '-') // start of expression
    ) {
    return;
    }

    // Prevent two operators in a row
    const lastChar = displayText.slice(-1);
    if (
    ['+', '-', 'x', '?', '.'].includes(value) &&
    ['+', '-', 'x', '?', '.'].includes(lastChar)
    ) {
    return;
    }

    displayText += value;
    resultDisplay.value = displayText;
}

// Add event listener to C (clear)
document.getElementById('clear').addEventListener('click', clearDisplay);
function clearDisplay() {
    displayText = '';
    resultDisplay.value = '';
}

// Add event listener to = (calculate)
document.getElementById('calc').addEventListener('click', calculate);
function calculate() {
    if (displayText === '') {
        resultDisplay.value = '';
        return;
    }

    try {
        // Replace Unicode math signs with JS operators
        let expression = displayText.replace(/x/g, '*');

        // Check for incomplete expression (e.g., trailing operator)
        if (/[\+\-\*\/\.]$/.test(expression)) {
            resultDisplay.value = 'Error';
            displayText = '';
            return;
        }

        // eslint-disable-next-line no-eval
        let evalResult = eval(expression);

        // Handle division by zero and NaN
        if (!isFinite(evalResult)) {
            resultDisplay.value = String(evalResult);
        } else {
            // Fix JS floating-point issues for decimal operations
            resultDisplay.value = Number(evalResult.toFixed(10)).toString();
        }
        displayText = resultDisplay.value;
    }
    catch (err) {
        resultDisplay.value = 'Error';
        displayText = '';
    }
}
