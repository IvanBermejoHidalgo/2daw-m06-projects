"use strict";
//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
function execucions() {
    // Exercici 1: Classificar Paraules
    const paraules = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
    //const paraules:string[] = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
    //const paraules:string[] = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
    console.log(classificarParaules(paraules));
    // Exercici 2: Analitzar Temperatures
    analitzarTemperatures(12, 4, 30, 2, 11, 26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2 
    analitzarTemperatures(9, 15, 7, 5, 8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5 
    analitzarTemperatures(19, 20, 21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19 
    // Exercici 3: Enviar Missatges
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
}
function classificarParaules(paraules) {
    let resultado = [];
    for (let i = 0; i < paraules.length; i++) {
        if (paraules[i].length > 5) {
            resultado.push(paraules[i]);
        }
    }
    return resultado;
}
function analitzarTemperatures(...temperatures) {
    let mediana = 0;
    for (let i = 0; i < temperatures.length; i++) {
        mediana += temperatures[i];
    }
    mediana = mediana / temperatures.length;
    let maxima = Math.max(...temperatures);
    let minima = Math.min(...temperatures);
    const taula = document.getElementById("taulaTemperatures");
    const novaFila = document.createElement("tr");
    novaFila.innerHTML = `
        <td>${mediana}</td>
        <td>${maxima}</td>
        <td>${minima}</td>
    `;
    taula === null || taula === void 0 ? void 0 : taula.appendChild(novaFila);
}
function enviarMissatges() {
}
