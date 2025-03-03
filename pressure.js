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
    } else if (from === 'pascal') {
        if (to === 'kilopascal') result = amount / 1000;
        else if (to === 'megapascal') result = amount / 1000000;
        else if (to === 'bar') result = amount / 100000;
        else if (to === 'psi') result = amount * 0.000145038;
        else if (to === 'atm') result = amount / 101325;
        else if (to === 'torr') result = amount * 0.00750062;
    } else if (from === 'kilopascal') {
        if (to === 'pascal') result = amount * 1000;
        else if (to === 'megapascal') result = amount / 1000;
        else if (to === 'bar') result = amount / 100;
        else if (to === 'psi') result = amount * 0.145038;
        else if (to === 'atm') result = amount / 101.325;
        else if (to === 'torr') result = amount * 7.50062;
    } else if (from === 'megapascal') {
        if (to === 'pascal') result = amount * 1000000;
        else if (to === 'kilopascal') result = amount * 1000;
        else if (to === 'bar') result = amount * 10;
        else if (to === 'psi') result = amount * 145.038;
        else if (to === 'atm') result = amount / 10.1325;
        else if (to === 'torr') result = amount * 7500.62;
    } else if (from === 'bar') {
        if (to === 'pascal') result = amount * 100000;
        else if (to === 'kilopascal') result = amount * 100;
        else if (to === 'megapascal') result = amount / 10;
        else if (to === 'psi') result = amount * 14.5038;
        else if (to === 'atm') result = amount * 0.986923;
        else if (to === 'torr') result = amount * 750.062;
    } else if (from === 'psi') {
        if (to === 'pascal') result = amount / 0.000145038;
        else if (to === 'kilopascal') result = amount / 0.145038;
        else if (to === 'megapascal') result = amount / 145.038;
        else if (to === 'bar') result = amount / 14.5038;
        else if (to === 'atm') result = amount * 0.0680459;
        else if (to === 'torr') result = amount * 51.7149;
    } else if (from === 'atm') {
        if (to === 'pascal') result = amount * 101325;
        else if (to === 'kilopascal') result = amount * 101.325;
        else if (to === 'megapascal') result = amount * 10.1325;
        else if (to === 'bar') result = amount / 0.986923;
        else if (to === 'psi') result = amount / 0.0680459;
        else if (to === 'torr') result = amount * 760;
    } else if (from === 'torr') {
        if (to === 'pascal') result = amount / 0.00750062;
        else if (to === 'kilopascal') result = amount / 7.50062;
        else if (to === 'megapascal') result = amount / 7500.62;
        else if (to === 'bar') result = amount / 750.062;
        else if (to === 'psi') result = amount / 51.7149;
        else if (to === 'atm') result = amount / 760;
    }

    resultInput.value = result.toFixed(2);
});

amountInput.addEventListener('input', () => {
    if (amountInput.value === "") {
        resultInput.value = "";
    }
});