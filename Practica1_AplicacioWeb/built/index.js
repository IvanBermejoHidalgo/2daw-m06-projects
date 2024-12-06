"use strict";
// variable constante para añadir clientes
const clients = [
    { name: "Iván", email: "ibermejo@elpuig.xeill.net" },
    { name: "Sara", email: "sessakkal@elpuig.xeill.net" },
    { name: "Said", email: "selmorabiti@elpuig.xeill.net" },
    { name: "Yassin", email: "ymenana.net" },
];
// añadir clientes desde la página web
function añadirCliente(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe y recargue la página
    let name = document.getElementById('nombreCliente').value;
    let email = document.getElementById('clienteCorreo').value;
    if (validateEmail(email)) {
        clients.push({ name, email });
        CargaClientes();
        document.getElementById('nombreCliente').value = '';
        document.getElementById('clienteCorreo').value = '';
    }
    //clients.push({ name, email });
    //CargaClientes();
}
// variable constante para validar si el correo cumple con el formato correcto
const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
};
// funcion para cargar los clientes en el html
function CargaClientes() {
    const listElement = document.getElementById('listaclientes');
    listElement.innerHTML = '';
    clients.forEach((client) => {
        if (validateEmail(client.email)) {
            const li = document.createElement('li');
            li.textContent = `${client.name} - ${client.email}`;
            listElement.appendChild(li);
        }
    });
}
// funcion que se ejecuta al iniciar la página web
function init() {
    CargaClientes();
    const form = document.getElementById('añadirCliente');
    form.addEventListener('submit', añadirCliente);
}
