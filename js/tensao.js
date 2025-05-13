function tensao1(){
    let resistencia = parseFloat(document.getElementById('resistencia').value)
    let corrente =  parseFloat(document.getElementById('corrente').value)
    let resultado = resistencia * corrente
    resultado = resultado.toFixed(2)
    alert("O resultado da tensão é " + resultado)
    return;
}
function tensao2(){
    let potencia2 = parseFloat(document.getElementById("potencia2").value)
    let corrente2 = parseFloat(document.getElementById("corrente2").value)
    let resultado = potencia2 / corrente2
    resultado = resultado.toFixed(2)
    alert("O resultado da tensão é " + resultado)
    return;
}
function tensao3() {
    let potencia3 = parseFloat(document.getElementById("potencia3").value)
    let resistencia3 = parseFloat(document.getElementById("resistencia3").value)
    let valor = potencia3 * resistencia3
    let resultado = Math.sqrt(valor);
    resultado = resultado.toFixed(2)
    alert("O resultado da tensão é " + resultado)
    return;
}