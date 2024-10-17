"use strict";
// EJERCICIO 1
/*
var var_ivan:number = 30; // Se crea la variable var_ivan y se le asigna un valor, en este caso un numero
console.log(var_ivan); // Se printa por la consola

var_ivan = 10; // Se le da otro valor a la variable var_ivan
console.log(var_ivan); // Se vuelve a printar en la consola

let let_ivan:string = "Hola món!"; // Se declara la variable let_ivan y se le asigna un valor, en este claro un string
console.log(let_ivan); // Se printa por la consola

let_ivan = "Adeu món!"; // Se le da otro valor a la variable let_ivan
console.log(let_ivan); // Se vuelve a printar en la consola

const const_ivan:string = "Javascript obsolet"; // Se declara la variable const_ivan y se le asigna un valor, en este claro un string
console.log(const_ivan); // Se printa por la consola

//const_ivan = "CAMBIAAAAA"; // Se le intenta dar otro valor a la constante pero esto es imposible porque las variables const no se pueden cambiar
//console.log(const_ivan); // Se vuelve a printar en la consola
*/
// EJERCICIO 2
/*
const vistes_maximes:number = 2; // Declarar una variable constante de tipo numero
let nom_pagina:string = "IVAN"; // Declarar la variale let de tipo string
let contador:number = 1; // Declarar la variable para llevar un conteo de las visualizaciones
var mensaje:string = "PRUEBA"; // Declarar la variable mensaje para printar por la consola el mensaje (luego se cambiará)

// Un condicional para que printe el primer mensaje de bienvenida (la primera visualizacion)
if (contador<=vistes_maximes) {
    mensaje = "BIENVENIDO A " + nom_pagina; // Cambiar el mensaje de visita
    contador++; // Sumar un numero mas al contador
// Si se ha excedido de visitas saltará este mensaje
} else {
    mensaje = "TE HAS EXCEDIDO, VISUALIZACIONES: " + contador; // Cambiar el mensaje de visita
    contador++; // Sumar un numero mas al contador
}

console.log(mensaje); // printar por la consola

// Un condicional para que printe el primer mensaje de bienvenida (la primera visualizacion)
if (contador<=vistes_maximes) {
    mensaje = "BIENVENIDO OTRAVEZ, " + nom_pagina; // Cambiar el mensaje de visita
    contador++; // Sumar un numero mas al contador
// Si se ha excedido de visitas saltará este mensaje
} else {
    mensaje = "TE HAS EXCEDIDO, VISUALIZACIONES " + contador; // Cambiar el mensaje de visita
    contador++; // Sumar un numero mas al contador
}

console.log(mensaje); // printar por la consola

// Un condicional para que printe el primer mensaje de bienvenida (la primera visualizacion)
if (contador<vistes_maximes) {
    mensaje = "BIENVENIDO OTRAVEZ OTRAVEZ, " + nom_pagina; // Cambiar el mensaje de visita
    contador++; // Sumar un numero mas al contador
// Si se ha excedido de visitas saltará este mensaje
} else {
    mensaje = "TE HAS EXCEDIDO, VISUALIZACIONES " + contador; // Cambiar el mensaje de visita
    contador++; // Sumar un numero mas al contador
}

console.log(mensaje); // printar por la consola

// He puesto la variable visitas_maximas como constante porque solo quiero que hayan como máximo dos visitas.
// He puesto la variable nom_pagina como let porque el nombre se puede cambiar, no es obligatorio tener siempre el mismo nombre
// He puesto la variable contador como let porque se va a ir actualizando
// He puesto la variable mensaje como var porque el mensaje va a ir cambiando constantemente
*/
// EJERCICIO 3
const vistes_maximes = 2; // Declarar una variable constante de tipo numero
let nom_pagina = "IVAN"; // Declarar la variale let de tipo string
let contador = 0; // Declarar la variable para llevar un conteo de las visualizaciones
var mensaje = "PRUEBA"; // Declarar la variable mensaje para printar por la consola el mensaje (luego se cambiará)
do {
    contador++; // Sumar un numero mas al contador
    // Un condicional para que printe el primer mensaje de bienvenida (la primera visualizacion)
    if (contador <= vistes_maximes) {
        mensaje = "BIENVENIDO, " + nom_pagina; // Cambiar el mensaje de visita
        // Si se ha excedido de visitas saltará este mensaje    
    }
    else {
        mensaje = "TE HAS EXCEDIDO, VISUALIZACIONES " + contador; // Cambiar el mensaje de visita
    }
    console.log(mensaje); // Printar en la consola
} while (contador <= vistes_maximes); // Mientras contador sea igual o menos
// NO HE CAMBIADO NINGUNA VARIABLE
