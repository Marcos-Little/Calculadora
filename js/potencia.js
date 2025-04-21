
function potencia1() {
    let tensao, corrente, resultado
    tensao = document.getElementById('tensao').value;
    corrente = document.getElementById('corrente').value;
    resultado = tensao * corrente
    alert("O resultado do cálculo de tensao e corrente é " + resultado + " W.")
    return;
}
function potencia2() {
    let resistencia, corrente, resultado
    resistencia = document.getElementById("resistencia2").value;
    corrente = document.getElementById("corrente2").value;
    resultado = resistencia * (corrente * corrente)
    alert("O resultado do cálculo de resistência e corrente é " + resultado + " W.")
    return;
}
function potencia3() {
    let tensao, resistencia, resultado
    tensao = document.getElementById("tensao3").value;
    resistencia = document.getElementById("resistencia3").value;
    resultado = (tensao * tensao) / resistencia;
    alert("O resultado do cálculo de tensão e resistência é " + resultado + " W.")
    return;
}