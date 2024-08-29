// Clear the screen (result field)
function clearScreen() {
    document.getElementById('result').value = '';
}

// Delete the last entered character
function deleteLast() {
    const current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}

// Append a number to the result field
function appendNumber(number) {
    document.getElementById('result').value += number;
}

// Append an operator to the result field
function appendOperator(operator) {
    const current = document.getElementById('result').value;
    // Ensure no consecutive operators are appended
    if (current !== '' && !isNaN(current[current.length - 1])) {
        document.getElementById('result').value += operator;
    }
}

// Calculate the result based on the expression entered
function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Handle modulus (%) operation
function appendOperator(operator) {
    const current = document.getElementById('result').value;
    if (current !== '' && !isNaN(current[current.length - 1])) {
        document.getElementById('result').value += operator;
    }
}
