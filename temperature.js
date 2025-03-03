const amountInput = document.getElementById('amount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    let result;

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        resultInput.value = '';
        return;
    }

    if (from === to) {
        result = amount; // No conversion needed
    } else if (from === 'celsius') {
        if (to === 'fahrenheit') {
            result = (amount * 9/5) + 32;
        } else if (to === 'kelvin') {
            result = amount + 273.15;
        }
    } else if (from === 'fahrenheit') {
        if (to === 'celsius') {
            result = (amount - 32) * 5/9;
        } else if (to === 'kelvin') {
            result = (amount - 32) * 5/9 + 273.15;
        }
    } else if (from === 'kelvin') {
        if (to === 'celsius') {
            result = amount - 273.15;
        } else if (to === 'fahrenheit') {
            result = (amount - 273.15) * 9/5 + 32;
        }
    }

    resultInput.value = result.toFixed(2);
});

amountInput.addEventListener('input', () => {
    if (amountInput.value === "") {
        resultInput.value = "";
    }
});