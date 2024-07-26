let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        // Append number keys (0-9)
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Append operator keys (+, -, *, /)
        appendToDisplay(key);
    } else if (key === 'Enter') {
        // Calculate result on Enter key
        event.preventDefault(); // Prevent form submission if inside a form
        calculate();
    } else if (key === 'Backspace') {
        // Delete last character on Backspace key
        deleteChar();
    } else if (key === 'Escape') {
        // Clear display on Escape key
        clearDisplay();
    } else if (key === '.') {
        // Append decimal point
        appendToDisplay(key);
    }
});
