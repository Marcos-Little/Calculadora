function corrente1() {
    let potencia1 = parseFloat(document.getElementById("potencia1").value);
    let resistencia1 = parseFloat(document.getElementById("resistencia1").value);
    let resultado = (potencia1 / resistencia1)
    resultado = Math.sqrt(resultado)
    resultado = resultado.toFixed(2)
    alert("O resultado da corrente é " + resultado)
    return;
}

function corrente2() {
    let potencia2 = parseFloat(document.getElementById("potencia2").value)
    let tensao2 = parseFloat(document.getElementById("tensao2").value)
    let resultado = (potencia2 / tensao2).toFixed(2)
    alert("O resultado da corrente é " + resultado)
    return;
}

function corrente3() {
    let tensao3 = parseFloat(document.getElementById("tensao3").value)
    let resistencia3 = parseFloat(document.getElementById("resistencia3").value)
    let resultado = (tensao3 / resistencia3).toFixed(2)
    alert("O resultado da corrente é " + resultado)
    return;
}