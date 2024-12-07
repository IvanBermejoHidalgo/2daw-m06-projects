"use strict";
// variable constante para añadir clientes
const nuevosClientes = new Map([
    ["Iván", "ibermejo@elpuig.xeill.net"],
    ["Sara", "sessakkal@elpuig.xeill.net"],
    ["Yassin", "ymenana@elpuig.xeill.net"],
    ["Said", "selmorabiti.net"]
]);
// Variables de VideoJoc y Peliculas, la de VideoJoc la he hecho con un Map porque tiene más de un valor
// mientras que la de Peliculas solo tiene un valor, entonces he decidido hacerlo con un array normal
let VideoJoc = new Map();
let Peliculas = [];
// funcion para cargar los clientes en el html
const CargaClientes = (clientList) => {
    const listElement = document.getElementById('listaclientes'); // Se lee la lista en la cual se van a añadir los clientes
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    clientList.forEach((email, name) => {
        if (regex.test(email)) { // Comprobar que el email tiene el formato correcto
            const li = document.createElement('li');
            li.textContent = `${name} - ${email}`;
            listElement.appendChild(li);
        }
    });
};
function añadirPeliculaVideojoc(valor1, valor2) {
    if (valor1 == null && valor2 == null) { // Si se llama al metodo desde la página web se hace lo siguiente
        let input = String(document.getElementById("inputPeVi").value); // Leer el input por el que se va a poner una pelicula o un videojuego
        let separarInput = input.split(","); // Variable para separar por ',' el input
        if (separarInput.length == 2) { // Si el separar tiene dos posiciones se añadirá al Map VideoJoc
            VideoJoc.set(separarInput[0], separarInput[1]);
            input = "";
        }
        else if (separarInput.length == 1) { // Si solo tiene una posición se añadirá al array de Peliculas
            Peliculas.push(separarInput[0]);
        }
        else { // Sino saldrá una alerta para indicar que no se ha puesto correctamente el input
            alert("LO HAS PUESTO MAL");
        }
        // Para coger los datos desde el código
    }
    else if (valor1 != null && valor2 != null) { // Si tiene los dos valores se añadirá a VideoJoc 
        VideoJoc.set(valor1, valor2);
    }
    else if (valor1 != null && valor2 == null) { // Si solamente tiene un valor se añadirá a Peliculas
        Peliculas.push(valor1);
    }
}
function botonPeliculasJuegos(numero) {
    let tablas = document.getElementById("tabla"); // Lee donde se va a implementar la tabla
    if (numero == 1) { // Si es el 1 (se pone en el html el numero) crea la tabla de videojuegos
        tablas.innerHTML = `<tr><th>Nom</th><th>Plataforma</th><tr>`;
        // implementa las lineas en ta labla
        VideoJoc.forEach((plataforma, nom) => {
            let crearLinea = document.createElement("tr");
            crearLinea.innerHTML =
                `<td>${nom}</td>
                    <td>${plataforma}</td>`;
            tablas.appendChild(crearLinea);
        });
    }
    else if (numero == 2) { // Si es el 2 (se pone en el html el numero) crea la tabla de peliculas
        tablas.innerHTML = `<tr><th>Nom</th><tr>`;
        // implementa las lineas en ta labla
        Peliculas.forEach((nom) => {
            let crearLinea = document.createElement("tr");
            crearLinea.innerHTML = `<td>${nom}</td>`;
            tablas.appendChild(crearLinea);
        });
    }
    else if (numero == 3) { // Si es el 3 (se pone en el html el numero) crea la tabla de peliculas y videojuegos a la vez 
        tablas.innerHTML = `<tr><th>Nom</th><th>Plataforma</th><tr>`;
        // implementa las lineas en ta labla de videojuegos
        VideoJoc.forEach((plataforma, nom) => {
            let crearLinea = document.createElement("tr");
            crearLinea.innerHTML =
                `<td>${nom}</td>
                    <td>${plataforma}</td>`;
            tablas.appendChild(crearLinea);
        });
        // implementa las lineas en ta labla de peliculas
        Peliculas.forEach((nom) => {
            let crearLinea = document.createElement("tr");
            crearLinea.innerHTML = `<td>${nom}</td><td></td>`;
            tablas.appendChild(crearLinea);
        });
    }
}
// funcion que se ejecuta al iniciar la página web
function init() {
    CargaClientes(nuevosClientes); // Inicia los clientes para que se muestren nada más entrar en la página web
    añadirPeliculaVideojoc("Fortnite", "Epic Games"); // Se hace un input, este se añadirá a VideoJocs
    añadirPeliculaVideojoc("Perdiendo el Norte"); // Se hace un input, este se añadirá a Peliculas
}
