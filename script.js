const display = document.getElementById("display");

let currentInput = "";
let storedValue = null;
let pendingOperator = null;
let waitingForOperand = false;

function showValue(value) {
    display.value = value;
}

function formatResult(value) {
    return Number.isInteger(value)
        ? String(value)
        : String(Number(value.toPrecision(12)));
}

function enterDigit(digit) {
    if (waitingForOperand || currentInput === "Error") {
        currentInput = digit;
        waitingForOperand = false;
    } else {
        currentInput = currentInput === "0" ? digit : currentInput + digit;
    }

    showValue(currentInput);
}

function calculate(firstValue, secondValue, operator) {
    switch (operator) {
        case "+":
            return firstValue + secondValue;
        case "-":
            return firstValue - secondValue;
        case "*":
            return firstValue * secondValue;
        case "/":
            return secondValue === 0 ? null : firstValue / secondValue;
        default:
            return secondValue;
    }
}

function chooseOperator(operator) {
    if (currentInput === "" || currentInput === "Error") {
        return;
    }

    const inputValue = Number(currentInput);

    if (pendingOperator && !waitingForOperand) {
        const result = calculate(storedValue, inputValue, pendingOperator);

        if (result === null || !Number.isFinite(result)) {
            showValue("Error");
            currentInput = "Error";
            storedValue = null;
            pendingOperator = null;
            waitingForOperand = true;
            return;
        }

        storedValue = result;
        currentInput = formatResult(result);
        showValue(currentInput);
    } else {
        storedValue = inputValue;
    }

    pendingOperator = operator;
    waitingForOperand = true;
}

function showResult() {
    if (!pendingOperator || waitingForOperand || currentInput === "") {
        return;
    }

    const result = calculate(storedValue, Number(currentInput), pendingOperator);

    if (result === null || !Number.isFinite(result)) {
        showValue("Error");
        currentInput = "Error";
    } else {
        currentInput = formatResult(result);
        showValue(currentInput);
    }

    storedValue = null;
    pendingOperator = null;
    waitingForOperand = true;
}

document.querySelectorAll('[id^="btn"]').forEach((button) => {
    button.addEventListener("click", () => enterDigit(button.textContent.trim()));
});

document.getElementById("add").addEventListener("click", () => chooseOperator("+"));
document.getElementById("subtract").addEventListener("click", () => chooseOperator("-"));
document.getElementById("multiply").addEventListener("click", () => chooseOperator("*"));
document.getElementById("divide").addEventListener("click", () => chooseOperator("/"));
document.getElementById("equal").addEventListener("click", showResult);
document.getElementById("clear").addEventListener("click", () => {
    currentInput = "";
    storedValue = null;
    pendingOperator = null;
    waitingForOperand = false;
    showValue("");
});