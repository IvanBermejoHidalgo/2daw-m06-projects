"use strict";
// SI EL INPUT ES DIVISIBLE POR 4
/*
let numero:number = Number((<HTMLInputElement> document.getElementById("numero")).value);

function SiEsDiv() {
    
    if ( numero % 4 == 0) {
        alert(numero + " es divisible.");
        console.log(numero + " es divisible.")
    } else {
        alert(numero + " no es divisible.");
        console.log(numero + " no es divisible.")
    }


}*/
let letra = String(document.getElementById("letra").value);
let respuesta = "";
function RepetirLetra() {
    let contador = 0;
    for (let i = 0; contador < 10; i++) {
        letra[i].toLowerCase;
        letra += respuesta;
        letra[i].toUpperCase;
        letra += respuesta;
    }
}
