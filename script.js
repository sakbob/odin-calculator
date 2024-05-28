function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? "Error: Lol" : a / b;
}

function operate(num1, operator, num2) {
    if (operator.length > 1) {
        return "Error: Operator length > 1";
    }

    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            return "Error: Unknown Operator";
    }

}

let operator = "";
let num1 = 0;
let num2 = 0;
