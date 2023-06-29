let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularMeses(){
    let vlr1 = Number(inputNumero.value);

    let calcula = vlr1 + 2342;

    h2Resultado.innerHTML = "No final dos dois meses foram vendidos: "+calcula +" pecas."
}

btCalcular.onclick = function(){
    calcularMeses();
}