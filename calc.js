function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

document.getElementById('toggleButton').addEventListener('click', function() {
    var calculator = document.getElementById('calculator');
    var button = document.getElementById('toggleButton');

    if (calculator.style.display === 'none') {
        calculator.style.display = 'block';
        button.textContent = 'Esconder Calculadora';
    } else {
        calculator.style.display = 'none';
        button.textContent = 'Mostrar Calculadora';
    }
});
