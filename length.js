const amountInput = document.getElementById('amount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

const conversionFactors = {
    meters: {
        meters: 1,
        centimeters: 100,
        kilometers: 0.001,
        feet: 3.28084,
        inches: 39.3701,
        miles: 0.000621371
    },
    centimeters: {
        meters: 0.01,
        centimeters: 1,
        kilometers: 0.00001,
        feet: 0.0328084,
        inches: 0.393701,
        miles: 0.00000621371
    },
    kilometers: {
        meters: 1000,
        centimeters: 100000,
        kilometers: 1,
        feet: 3280.84,
        inches: 39370.1,
        miles: 0.621371
    },
    feet: {
        meters: 0.3048,
        centimeters: 30.48,
        kilometers: 0.0003048,
        feet: 1,
        inches: 12,
        miles: 0.000189394
    },
    inches: {
        meters: 0.0254,
        centimeters: 2.54,
        kilometers: 0.0000254,
        feet: 0.0833333,
        inches: 1,
        miles: 0.0000157828
    },
    miles: {
        meters: 1609.34,
        centimeters: 160934,
        kilometers: 1.60934,
        feet: 5280,
        inches: 63360,
        miles: 1
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

for (let unit in conversionFactors) {
    let formattedUnit = capitalizeFirstLetter(unit);
    let option1 = document.createElement('option');
    option1.value = unit;
    option1.text = formattedUnit + ' (' + (unit === 'meters' ? 'm' : unit === 'centimeters' ? 'cm' : unit === 'kilometers' ? 'km' : unit === 'feet' ? 'ft' : unit === 'inches' ? 'in' : unit === 'miles' ? 'mi' : unit) + ')';
    fromUnit.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = unit;
    option2.text = formattedUnit + ' (' + (unit === 'meters' ? 'm' : unit === 'centimeters' ? 'cm' : unit === 'kilometers' ? 'km' : unit === 'feet' ? 'ft' : unit === 'inches' ? 'in' : unit === 'miles' ? 'mi' : unit) + ')';
    toUnit.appendChild(option2);
}

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        resultInput.value = '';
        return;
    }

    const conversionFactor = conversionFactors[from][to];

    if (!conversionFactor) {
        alert('Invalid unit selection.');
        resultInput.value = '';
        return;
    }

    const result = amount * conversionFactor;
    resultInput.value = result.toFixed(2);
});

amountInput.addEventListener('input', () => {
    if (amountInput.value === "") {
        resultInput.value = "";
    }
});