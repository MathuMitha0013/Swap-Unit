const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

const currencies = {
    USD: { rate: 1, name: "US Dollar (USD)" },
    EUR: { rate: 0.85, name: "Euro (EUR)" },
    GBP: { rate: 0.73, name: "British Pound (GBP)" },
    JPY: { rate: 110.36, name: "Japanese Yen (JPY)" },
    INR: { rate: 82.68, name: "Indian Rupee (INR)" },
    AUD: { rate: 1.5, name: "Australian Dollar (AUD)" },
    CAD: { rate: 1.3, name: "Canadian Dollar (CAD)" },
    CHF: { rate: 0.95, name: "Swiss Franc (CHF)" },
    CNY: { rate: 7.2, name: "Chinese Yuan (CNY)" },
    SEK: { rate: 10.5, name: "Swedish Krona (SEK)" },
};

for (const currencyCode in currencies) {
    const currency = currencies[currencyCode];
    const option1 = document.createElement('option');
    option1.value = currencyCode;
    option1.text = currency.name;
    fromCurrency.appendChild(option1);
    const option2 = document.createElement('option');
    option2.value = currencyCode;
    option2.text = currency.name;
    toCurrency.appendChild(option2);
}

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        resultInput.value = '';
        return;
    }
    const fromRate = currencies[from].rate;
    const toRate = currencies[to].rate;
    if (!fromRate || !toRate) {
        alert('Invalid currency selection.');
        resultInput.value = '';
        return;
    }
    const result = (amount / fromRate) * toRate;
    resultInput.value = result.toFixed(2);
});

amountInput.addEventListener('input', () => {
    if (amountInput.value === "") {
        resultInput.value = "";
    }
});