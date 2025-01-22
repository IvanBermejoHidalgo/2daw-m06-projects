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
// let productos:Map<string,number> = new Map();
// function afegirProductes() {
//     const producto: string = (<HTMLInputElement> document.getElementById("producte")).value;
//     let cantidadproducto: number = Number((<HTMLInputElement> document.getElementById("quantitatProducte")).value);
//     if(cantidadproducto === 0) {
//         cantidadproducto = 1;
//     }
//     productos.set(producto,cantidadproducto);
// }
// function eliminarProductes() {
//     const producto: string = (<HTMLInputElement> document.getElementById("producte")).value;
//     productos.delete(producto);
// }
// function mostrarProductes() {
//     const mostrarProduct: HTMLParagraphElement = (<HTMLParagraphElement> document.getElementById("productos"));
//     mostrarProduct.innerHTML = "";
//     productos.forEach((value, key) => {
//         mostrarProduct.innerHTML += key + ", "  + value + ";  ";
//     })
// }
// // EJERCICIO 4
// let ventas:any[] = [];
// function Vender() {
//     const producto: string = (<HTMLInputElement> document.getElementById("escogerProducto")).value;
//     const precio: number = Number((<HTMLInputElement> document.getElementById("precioProducto")).value);
//     if (productos.has(producto) && precio > 0) {
//         ventas.push(producto,precio);
//         productos.set(producto, (productos.get(producto)! - 1));
//     if (productos.get(producto) == 0){
//         productos.delete(producto);
//     }
//     } else {
//         alert("No existe el producto o precio invalido");
//     }
// }
// function mostrarBeneficis() {
//     const leerVentas: HTMLParagraphElement = (<HTMLParagraphElement> document.getElementById("beneficis"));
//     leerVentas.innerHTML = "";
//     ventas.forEach((value) => {
//         leerVentas.innerHTML = value + ", "
//     })
// }
// DOCUMENTO 2
//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
// function execucions(){
//     // Exercici 1: Classificar Paraules
//     const paraules:string[] = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
//     //const paraules:string[] = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
//     //const paraules:string[] = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
//     console.log(classificarParaules(paraules));
//     // Exercici 2: Analitzar Temperatures
//     analitzarTemperatures(12,4,30,2,11,26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2 
//     analitzarTemperatures(9,15,7,5,8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5 
//     analitzarTemperatures(19,20,21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19 
//     // Exercici 3: Enviar Missatges
//     enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
//     enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
//     enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
//     enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
//     enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
// }
// function classificarParaules(paraules:string[]): string[] {
//     const guardarPalabras:string[] = [];
//     for (let i=0; i<paraules.length;i++) {
//         if  (paraules[i].length > 5) {
//             guardarPalabras.push(paraules[i]);
//         }
//     }
//     return guardarPalabras;
// }
// function analitzarTemperatures(...temperatures:number[]){
//     let total:number = 0;
//     for (let i = 0; i<temperatures.length; i++){
//         total += temperatures[i];
//     }
//     const media:number = total/temperatures.length;
//     const max:number = Math.max(...temperatures);
//     const min:number = Math.min(...temperatures);
//     const tabla:HTMLTableElement = (<HTMLTableElement> document.getElementById("taulaTemperatures"));
//     const nuevaFila:HTMLTableRowElement = tabla.insertRow();
//     nuevaFila.insertCell(0).textContent = media.toFixed();
//     nuevaFila.insertCell(1).textContent = max.toFixed();
//     nuevaFila.insertCell(2).textContent = min.toFixed();
// }
// function enviarMissatges(mail:string, cos:string, salutacio?:string): void;
// function enviarMissatges(tel:number, cos:string, salutacio?:string): void;
// function enviarMissatges(param1:string|number, cos:string, salutacio?:string): void {
//     if (typeof param1 == "string") {
//         const mailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (mailRegex.test(param1)) {
//             if (typeof salutacio == "string") {
//             console.log(`Missatge enviat a l'email, contingut: ` + salutacio + " " + cos);
//             } else {
//                 console.log(`Missatge enviat a l'email, contingut: ` + cos);
//             }
//         } else {
//             console.error("L'email no té un format vàlid.");
//         }
//     } else if (typeof param1 == "number") {
//         const num:string = param1.toString();
//         if (num.length == 9) {
//             if (typeof salutacio == "string") {
//                 alert(`Missatge enviat al telèfon, contingut: ` + salutacio + " " + cos);
//             } else {
//                 alert(`Missatge enviat al telèfon, contingut: ` + cos);
//             }
//         }
//     }
// }
