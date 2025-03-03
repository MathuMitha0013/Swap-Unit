const amountInput = document.getElementById('amount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const amount = amountInput.value; // Get the input value as a string
    const from = fromUnit.value;
    const to = toUnit.value;
    let result;

    if (amount === "") {
        alert('Please enter a valid number.');
        resultInput.value = '';
        return;
    }

    try {
        let decimalValue;

        if (from === 'binary') {
            decimalValue = parseInt(amount, 2);
        } else if (from === 'decimal') {
            decimalValue = parseInt(amount, 10);
        } else if (from === 'octal') {
            decimalValue = parseInt(amount, 8);
        } else if (from === 'hexadecimal') {
            decimalValue = parseInt(amount, 16);
        } else {
          throw new Error("Invalid 'from' base")
        }


        if (to === 'binary') {
            result = decimalValue.toString(2);
        } else if (to === 'decimal') {
            result = decimalValue.toString(10);
        } else if (to === 'octal') {
            result = decimalValue.toString(8);
        } else if (to === 'hexadecimal') {
            result = decimalValue.toString(16).toUpperCase(); // Hexadecimal usually displayed in uppercase
        } else {
            throw new Error("Invalid 'to' base")
        }

        resultInput.value = result;
    } catch (error) {
        alert('Invalid input for the selected number system.');
        resultInput.value = '';
        console.error(error)
    }
});


amountInput.addEventListener('input', () => {
    resultInput.value = "";
});