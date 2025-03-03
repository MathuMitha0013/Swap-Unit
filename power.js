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
    } else if (from === 'watt') {
        if (to === 'kilowatt') result = amount / 1000;
        else if (to === 'megawatt') result = amount / 1000000;
        else if (to === 'gigawatt') result = amount / 1000000000;
        else if (to === 'horsepower') result = amount * 0.00134102;
        else if (to === 'btu') result = amount * 3.41214;
    } else if (from === 'kilowatt') {
        if (to === 'watt') result = amount * 1000;
        else if (to === 'megawatt') result = amount / 1000;
        else if (to === 'gigawatt') result = amount / 1000000;
        else if (to === 'horsepower') result = amount * 1.34102;
        else if (to === 'btu') result = amount * 3412.14;
    } else if (from === 'megawatt') {
        if (to === 'watt') result = amount * 1000000;
        else if (to === 'kilowatt') result = amount * 1000;
        else if (to === 'gigawatt') result = amount / 1000;
        else if (to === 'horsepower') result = amount * 1341.02;
        else if (to === 'btu') result = amount * 3412140;
    } else if (from === 'gigawatt') {
        if (to === 'watt') result = amount * 1000000000;
        else if (to === 'kilowatt') result = amount * 1000000;
        else if (to === 'megawatt') result = amount * 1000;
        else if (to === 'horsepower') result = amount * 1341020;
        else if (to === 'btu') result = amount * 3412140000;
    } else if (from === 'horsepower') {
        if (to === 'watt') result = amount / 0.00134102;
        else if (to === 'kilowatt') result = amount / 1.34102;
        else if (to === 'megawatt') result = amount / 1341.02;
        else if (to === 'gigawatt') result = amount / 1341020;
        else if (to === 'btu') result = amount * 2544.43;
    } else if (from === 'btu') {
        if (to === 'watt') result = amount / 3.41214;
        else if (to === 'kilowatt') result = amount / 3412.14;
        else if (to === 'megawatt') result = amount / 3412140;
        else if (to === 'gigawatt') result = amount / 3412140000;
        else if (to === 'horsepower') result = amount / 2544.43;
    }

    resultInput.value = result.toFixed(2);
});

amountInput.addEventListener('input', () => {
    if (amountInput.value === "") {
        resultInput.value = "";
    }
});