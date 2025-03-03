const amountInput = document.getElementById('amount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

const conversionFactors = {
    sqmeters: {
        sqmeters: 1,
        sqcentimeters: 10000,
        sqkilometers: 0.000001,
        sqfeet: 10.7639,
        sqinches: 1550.0031,
        sqmiles: 3.86102e-7,
        acres: 0.000247105
    },
    sqcentimeters: {
        sqmeters: 0.0001,
        sqcentimeters: 1,
        sqkilometers: 1e-10,
        sqfeet: 0.00107639,
        sqinches: 0.15500031,
        sqmiles: 3.86102e-12,
        acres: 2.47105e-8
    },
    sqkilometers: {
        sqmeters: 1000000,
        sqcentimeters: 10000000000,
        sqkilometers: 1,
        sqfeet: 10763910.4,
        sqinches: 1550003100,
        sqmiles: 0.386102,
        acres: 247.105
    },
    sqfeet: {
        sqmeters: 0.092903,
        sqcentimeters: 929.03,
        sqkilometers: 9.2903e-8,
        sqfeet: 1,
        sqinches: 144,
        sqmiles: 3.58701e-8,
        acres: 2.29568e-5
    },
    sqinches: {
        sqmeters: 0.00064516,
        sqcentimeters: 6.4516,
        sqkilometers: 6.4516e-10,
        sqfeet: 0.00694444,
        sqinches: 1,
        sqmiles: 2.4895e-10,
        acres: 1.59422e-7
    },
    sqmiles: {
        sqmeters: 2589988.11,
        sqcentimeters: 25899881103.36,
        sqkilometers: 2.58999,
        sqfeet: 27878400,
        sqinches: 4014489600,
        sqmiles: 1,
        acres: 640
    },
    acres: {
        sqmeters: 4046.86,
        sqcentimeters: 40468564.22,
        sqkilometers: 0.004047,
        sqfeet: 43560,
        sqinches: 6272640,
        sqmiles: 0.0015625,
        acres: 1
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

for (let unit in conversionFactors) {
    let formattedUnit = capitalizeFirstLetter(unit); // Capitalize the first letter
    let option1 = document.createElement('option');
    option1.value = unit;
    option1.text = formattedUnit + ' (' + (unit === 'sqmeters' ? 'm²' : unit === 'sqcentimeters' ? 'cm²' : unit === 'sqkilometers' ? 'km²' : unit === 'sqfeet' ? 'ft²' : unit === 'sqinches' ? 'in²' : unit === 'sqmiles' ? 'mi²' : unit === 'acres' ? 'acres' : unit) + ')';
    fromUnit.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = unit;
    option2.text = formattedUnit + ' (' + (unit === 'sqmeters' ? 'm²' : unit === 'sqcentimeters' ? 'cm²' : unit === 'sqkilometers' ? 'km²' : unit === 'sqfeet' ? 'ft²' : unit === 'sqinches' ? 'in²' : unit === 'sqmiles' ? 'mi²' : unit === 'acres' ? 'acres' : unit) + ')';
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