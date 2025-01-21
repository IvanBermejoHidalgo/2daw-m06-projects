"use strict";
// PRESENTACIÓN 1
// // Col·lecions
// let animal1:any = {nom: "Said", especie: "Mano"};
// let animal2:any = {nom: "Yassin", especie: "Mano"};
// let animal3:any = {nom: "Jose", especie: "Mano"};
// let animals:any[] = [animal1,animal2,animal3];
// // Arrays
// let number1:number[] = [1,2,3];
// let number2:[string,number] = ["Hola", 1];
// let number3:(string|number)[] = ["Hola", "Adios", 1, 2, "Hello"];
// let number4:[clau: string, id: number] = ["clave", 1];
// // Maps
// let ejemploMap:Map<string, string> = new Map();
// ejemploMap.set("Rojo", "No pasar");
// ejemploMap.set("Verde", "Pasar");
// console.log(ejemploMap.get("Rojo"));
// console.log(ejemploMap.get("Verde"));
// // Sets
// let ejemploSet:Set<string> = new Set();
// ejemploSet.add("Fortnite");
// ejemploSet.add("Clash Royale");
// ejemploSet.forEach((value) => {
//     console.log(value);
// })
// EJERCICIO 1 CATEGORIAS
// let categorias:Set<string> = new Set();
// function enviarCategoria() {
//     const categoria:string = (<HTMLInputElement>document.getElementById("addCategory")).value;
//     categorias.add(categoria);
// }
// function mostrarCategorias() {
//     const leerCategorias:HTMLParagraphElement = (<HTMLParagraphElement> document.getElementById("infoCategories"));
//     leerCategorias.innerText = "";
//     categorias.forEach((value) => {
//         leerCategorias.innerHTML += value + ", ";
//     })
// }
// EJERCICIO 2 Y 3
let productos = new Map();
function afegirProductes() {
    const producto = document.getElementById("producte").value;
    let cantidadproducto = Number(document.getElementById("quantitatProducte").value);
    if (cantidadproducto === 0) {
        cantidadproducto = 1;
    }
    productos.set(producto, cantidadproducto);
}
function eliminarProductes() {
    const producto = document.getElementById("producte").value;
    productos.delete(producto);
}
function mostrarProductes() {
    const mostrarProduct = document.getElementById("productos");
    mostrarProduct.innerHTML = "";
    productos.forEach((value, key) => {
        mostrarProduct.innerHTML += key + ", " + value + ";  ";
    });
}
// EJERCICIO 4
let ventas = [];
function Vender() {
    const producto = document.getElementById("escogerProducto").value;
    const precio = Number(document.getElementById("precioProducto").value);
    if (productos.has(producto) && precio > 0) {
        ventas.push(producto, precio);
        productos.set(producto, (productos.get(producto) - 1));
        if (productos.get(producto) == 0) {
            productos.delete(producto);
        }
    }
    else {
        alert("No existe el producto o precio invalido");
    }
}
