var num1 = null;
var num2 = null;
var operacion = '';

function setearValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    console.log(valor);
    if (num1 === null) {
        num1 = valor
    }
    else {
        num2 = valor;
    }
    console.log(num1);
}


function evaluarOperacion(op) {
    operacion = op;
}

function igual() {
    let valorFinal;
    if (operacion === '+') {
        num1 + num2
    } else if (operacion === '-') {
        num1 - num2
    } else if (operacion === 'X') {
        num1 * num2
    } else if (operacion === '%') {
        num1 / num2
    }
    setearValor(valorFinal);


}

