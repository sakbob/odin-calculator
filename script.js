function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return b === 0 ? "Error: Lol" : a / b; }

function operate(num1, operator, num2) {
    if (operator.length > 1) {
        return "Error: Operator length > 1";
    }

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Error: Unknown Operator";
    }
}

let operator = "";
let num1 = null;
let num2 = null;
let resultDisplayed = false;

const screenText = document.querySelector(".screen-text");

const numberBut = document.querySelectorAll(".number-container button");
numberBut.forEach(button => {
    button.addEventListener("click", () => {
        if (!(screenText.textContent.length > 15)) {
            if (resultDisplayed) {
                screenText.textContent = "";
                resultDisplayed = false;
            }
            
            if (button.textContent === ".") {
                if (!(screenText.textContent.includes("."))) {
                    screenText.textContent += button.textContent;
                }
            }
            else {
                if (screenText.textContent === "0" && operator === "") {
                    screenText.textContent = button.textContent;
                }
                else {
                    screenText.textContent += button.textContent;
                }
            }
        }
    });
    
});

const clearBut = document.querySelector("#b-Clear");
clearBut.addEventListener("click", () => {
    screenText.textContent = "0";
    num1 = null;
    num2 = null;
    operator = "";
});

const operationBut = document.querySelectorAll(".operation-container button");
operationBut.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            if (num1 != null && operator != "" && screenText.textContent != "") {
                num2 = Number(screenText.textContent);
                screenText.textContent = operate(num1, operator, num2);
                num1 = Number(screenText.textContent);
                operator = "";
                resultDisplayed = true;
            }
        }
        else {
            if (num1 == null) {
                num1 = Number(screenText.textContent);
                operator = button.textContent;
                screenText.textContent = "";
            }
            else if (num1 != null && operator != "" && screenText.textContent != "") {
                num2 = Number(screenText.textContent);
                screenText.textContent = operate(num1, operator, num2);
                num1 = Number(screenText.textContent);
                operator = button.textContent;
                resultDisplayed = true;
            }
            else {
                operator = button.textContent;
                screenText.textContent = "";
            }
        }
        
    });
});

const signBut = document.querySelector("#b-Sign");
signBut.addEventListener("click", () => {
    if (screenText.textContent.includes("-")) {
        screenText.textContent = screenText.textContent.substring(1);
    }
    else {
        screenText.textContent = "-" + screenText.textContent;
    }
});

const percentBut = document.querySelector("#b-Percent");
percentBut.addEventListener("click", () => {
    screenText.textContent = Number(screenText.textContent) * 0.01;
});