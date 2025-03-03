const amountInput = document.getElementById('amount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

const conversionFactors = {
    kilograms: {
        kilograms: 1,
        grams: 1000,
        pounds: 2.20462,
        ounces: 35.274,
        metrictons: 0.001
    },
    grams: {
        kilograms: 0.001,
        grams: 1,
        pounds: 0.00220462,
        ounces: 0.035274,
        metrictons: 0.000001
    },
    pounds: {
        kilograms: 0.453592,
        grams: 453.592,
        pounds: 1,
        ounces: 16,
        metrictons: 0.000453592
    },
    ounces: {
        kilograms: 0.0283495,
        grams: 28.3495,
        pounds: 0.0625,
        ounces: 1,
        metrictons: 0.0000283495
    },
    metrictons: {
        kilograms: 1000,
        grams: 1000000,
        pounds: 2204.62,
        ounces: 35274,
        metrictons: 1
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


for (let unit in conversionFactors) {
    let formattedUnit = capitalizeFirstLetter(unit);  // Capitalize the first letter
    let option1 = document.createElement('option');
    option1.value = unit;
    option1.text = formattedUnit + ' (' + (unit === 'kilograms' ? 'kg' : unit === 'grams' ? 'g' : unit === 'pounds' ? 'lbs' : unit === 'ounces' ? 'oz' : unit === 'metrictons' ? 'tonnes' : unit) + ')';
    fromUnit.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = unit;
    option2.text = formattedUnit + ' (' + (unit === 'kilograms' ? 'kg' : unit === 'grams' ? 'g' : unit === 'pounds' ? 'lbs' : unit === 'ounces' ? 'oz' : unit === 'metrictons' ? 'tonnes' : unit) + ')';
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