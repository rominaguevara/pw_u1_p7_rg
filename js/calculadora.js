var num1 = null;
var num2 = null;
var operacion = '';
function setearValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual)
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    let display = document.getElementById('id-display').innerText;
    if (operacion === '') {
        num1 = (display === "0") ? valor.toString() : display + valor;
        setearValor(num1);
    } else {
        num2 = (num2 === null) ? valor.toString() : num2 + valor;
        setearValor(num2);
    }
}


function evaluarOperacion(op) {
    operacion = op
    setearValor('');
}

function igual() {
    let valorFinal = 0;

    if (num1 !== null && num2 !== null) {
        let numero1 = parseFloat(num1);
        let numero2 = parseFloat(num2);

        if (operacion === '+') {
            valorFinal = numero1 + numero2;
        } else if (operacion === '-') {
            valorFinal = numero1 - numero2;
        } else if (operacion === 'X') {
            valorFinal = numero1 * numero2;
        } else if (operacion === '%') {
            if (numero2 === 0) {
                alert("Error: División por cero");
                return;
            }
            valorFinal = numero1 / numero2;
        }

        setearValor(valorFinal); 
        num1 = valorFinal.toString(); 
        num2 = null; 
        operacion = ''; 
    }
}

function limpiarTodo() {
    num1 = null;
    num2 = null;
    operacion = '';
    setearValor('0'); 
}

function borrarUltimo() {
    let display = document.getElementById('id-display').innerText;

    if (display.length > 1) {
        setearValor(display.slice(0, -1)); 
    } else {
        setearValor('0'); 
    }

    if (operacion === '') {
        num1 = document.getElementById('id-display').innerText;
    } else {
        num2 = document.getElementById('id-display').innerText;
    }
}

