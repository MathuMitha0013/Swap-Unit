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
    } else if (from === 'mps') {
        if (to === 'kph') {
            result = amount * 3.6;
        } else if (to === 'mph') {
            result = amount * 2.23694;
        } else if (to === 'knots') {
            result = amount * 1.94384;
        }
    } else if (from === 'kph') {
        if (to === 'mps') {
            result = amount / 3.6;
        } else if (to === 'mph') {
            result = amount * 0.621371;
        } else if (to === 'knots') {
            result = amount * 0.539957;
        }
    } else if (from === 'mph') {
        if (to === 'mps') {
            result = amount / 2.23694;
        } else if (to === 'kph') {
            result = amount * 1.60934;
        } else if (to === 'knots') {
            result = amount * 0.868976;
        }
    } else if (from === 'knots') {
        if (to === 'mps') {
            result = amount / 1.94384;
        } else if (to === 'kph') {
            result = amount / 0.539957;
        } else if (to === 'mph') {
            result = amount / 0.868976;
        }
    }

    resultInput.value = result.toFixed(2);
});

amountInput.addEventListener('input', () => {
    if (amountInput.value === "") {
        resultInput.value = "";
    }
});