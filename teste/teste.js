const numero1 = document.getElementById('valor1');
const numero2 = document.getElementById('valor2');
const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');
const resultado = document.getElementById('resultado');

function mostrarResultado(valor) {
    resultado.textContent = `O resultado é: ${valor}`;
}

function soma() {
    let valor1 = parseFloat(numero1.value);
    let valor2 = parseFloat(numero2.value);
    let valor = valor1 + valor2;
    mostrarResultado(valor);
}

function subtracao() {
    let valor1 = parseFloat(numero1.value);
    let valor2 = parseFloat(numero2.value);
    let valor = valor1 - valor2;
    mostrarResultado(valor);
}

function multiplicacao() {
    let valor1 = parseFloat(numero1.value);
    let valor2 = parseFloat(numero2.value);
    let valor = valor1 * valor2;
    mostrarResultado(valor);
}

function divisao() {
    let valor1 = parseFloat(numero1.value);
    let valor2 = parseFloat(numero2.value);
    if (valor2 === 0) {
        mostrarResultado("Erro: Divisão por zero!");
    } else {
        let valor = valor1 / valor2;
        mostrarResultado(valor);
    }
}

somar.addEventListener('click', soma);
subtrair.addEventListener('click', subtracao);
multiplicar.addEventListener('click', multiplicacao);
dividir.addEventListener('click', divisao);