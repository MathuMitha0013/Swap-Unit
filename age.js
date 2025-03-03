const birthdateInput = document.getElementById('birthdate');
const targetDateInput = document.getElementById('targetDate');
const toUnitSelect = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const resultInput = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const birthdateString = birthdateInput.value;
    const targetDateString = targetDateInput.value || new Date().toISOString().slice(0, 10); // Today's date if target is empty
    const toUnit = toUnitSelect.value;

    if (!birthdateString) {
        alert('Please enter your birthdate.');
        resultInput.value = '';
        return;
    }

    const birthdate = new Date(birthdateString);
    const targetDate = new Date(targetDateString);

    if (isNaN(birthdate) || isNaN(targetDate)) {
        alert('Invalid date format.');
        resultInput.value = '';
        return;
    }

    let timeDiff = targetDate.getTime() - birthdate.getTime();

    let result;

    switch (toUnit) {
        case 'years':
            result = timeDiff / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
            break;
        case 'months':
            result = timeDiff / (1000 * 60 * 60 * 24 * 30.44); // Average month length
            break;
        case 'days':
            result = timeDiff / (1000 * 60 * 60 * 24);
            break;
        case 'weeks':
            result = timeDiff / (1000 * 60 * 60 * 24 * 7);
            break;
        case 'hours':
            result = timeDiff / (1000 * 60 * 60);
            break;
        case 'minutes':
            result = timeDiff / (1000 * 60);
            break;
        case 'seconds':
            result = timeDiff / 1000;
            break;
    }

    resultInput.value = result.toFixed(2);
});

// Clear result when input changes (optional, but good UX)
birthdateInput.addEventListener('change', () => resultInput.value = '');
targetDateInput.addEventListener('change', () => resultInput.value = '');