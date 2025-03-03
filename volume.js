const amountInput = document.getElementById('amount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

const conversionFactors = {
    liters: {
        liters: 1,
        milliliters: 1000,
        cubicmeters: 0.001,
        gallons: 0.264172,
        quarts: 1.05669,
        pints: 2.11338,
        fluidounces: 33.814
    },
    milliliters: {
        liters: 0.001,
        milliliters: 1,
        cubicmeters: 0.000001,
        gallons: 0.000264172,
        quarts: 0.00105669,
        pints: 0.00211338,
        fluidounces: 0.033814
    },
    cubicmeters: {
        liters: 1000,
        milliliters: 1000000,
        cubicmeters: 1,
        gallons: 264.172,
        quarts: 1056.69,
        pints: 2113.38,
        fluidounces: 33814
    },
    gallons: {
        liters: 3.78541,
        milliliters: 3785.41,
        cubicmeters: 0.00378541,
        gallons: 1,
        quarts: 4,
        pints: 8,
        fluidounces: 128
    },
    quarts: {
        liters: 0.946353,
        milliliters: 946.353,
        cubicmeters: 0.000946353,
        gallons: 0.25,
        quarts: 1,
        pints: 2,
        fluidounces: 32
    },
    pints: {
        liters: 0.473176,
        milliliters: 473.176,
        cubicmeters: 0.000473176,
        gallons: 0.125,
        quarts: 0.5,
        pints: 1,
        fluidounces: 16
    },
    fluidounces: {
        liters: 0.0295735,
        milliliters: 29.5735,
        cubicmeters: 0.0000295735,
        gallons: 0.0078125,
        quarts: 0.03125,
        pints: 0.0625,
        fluidounces: 1
    }
};


for (let unit in conversionFactors) {
    let option1 = document.createElement('option');
    option1.value = unit;
    option1.text = unit + ' (' + (unit === 'liters' ? 'l' : unit === 'milliliters' ? 'ml' : unit === 'cubicmeters' ? 'm³' : unit === 'gallons' ? 'gal' : unit === 'quarts' ? 'qt' : unit === 'pints' ? 'pt' : unit === 'fluidounces' ? 'fl oz' : unit) + ')';
    fromUnit.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = unit;
    option2.text = unit + ' (' + (unit === 'liters' ? 'l' : unit === 'milliliters' ? 'ml' : unit === 'cubicmeters' ? 'm³' : unit === 'gallons' ? 'gal' : unit === 'quarts' ? 'qt' : unit === 'pints' ? 'pt' : unit === 'fluidounces' ? 'fl oz' : unit) + ')';
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