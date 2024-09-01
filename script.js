// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.value;

        if (value === 'C') {
            display.value = ''; // Clear the display
        } else if (value === '=') {
            try {
                display.value = eval(display.value); // Evaluate the expression
            } catch {
                display.value = 'Error'; // Display error for invalid expressions
            }
        } else {
            display.value += value; // Add the button value to the display
        }
    });
});
