function resistencia1 (){
    let potencia1 = parseFloat(document.getElementById("potencia1").value)
    let corrente1 = parseFloat(document.getElementById("potencia1").value)
    let resultado = potencia1 / (corrente1 * corrente1)
    alert("O resultado da resistência é " + resultado)
}

function resistencia2 (){
    let tensao2 = parseFloat(document.getElementById("tensao2").value)
    let potencia2 = parseFloat(document.getElementById("tensao2").value)
    let resultado = (tensao2 * tensao2) / potencia2
    alert("O resultado da resistência é " + resultado)
}

function resistencia3() {
    let tensao3 = parseFloat(document.getElementById("tensao3").value)
    let potencia3 = parseFloat(document.getElementById("tensao3").value)
    let resultado = tensao3 / potencia3
    alert("O resultado da resistência é " + resultado)
}