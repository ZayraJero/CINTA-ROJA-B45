//REPASO
function saludar() {
    alert('Bienvenido');
}

function nombreCompleto() {
    let nombre = 'Diego';
    let apellido = 'Apellido';
    let completo = nombre + '' + apellido;
    return nombreCompleto;
}
console.log(nombreCompleto());

function sumar() {
    let a = 200;
    let b = 100;
    let resultado = a + b;
    return resultado;
}

let resultadoSuma = sumar();
console.log(resultadoSuma);