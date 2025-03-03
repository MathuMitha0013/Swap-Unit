
const amountInput = document.getElementById('amount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

// Get the display element *after* the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');

    window.calculate = function(value) {
        if (value === '=') {
            try {
                let result = eval(display.innerText);
                if (isNaN(result) || !isFinite(result)) {
                    alert("Invalid input. Please check your equation.");
                    display.innerText = '0';
                } else {
                    display.innerText = result;
                }
            } catch (error) {
                alert("An error occurred during calculation.");
                display.innerText = '0';
            }
        } else if (value === 'AC') {
            display.innerText = '0';
        } else if (value === 'CE') {
            display.innerText = display.innerText.slice(0, -1);
            if (display.innerText === "") display.innerText = "0";
        } else if (value === 'sin(' || value === 'cos(' || value === 'tan(' || value === 'log(' || value === 'Math.sqrt(') {
            display.innerText += value;
        } else if (value === 'π') {
            display.innerText += Math.PI;
        } else if (display.innerText === '0' && !isNaN(value) && value !== '.') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }
});