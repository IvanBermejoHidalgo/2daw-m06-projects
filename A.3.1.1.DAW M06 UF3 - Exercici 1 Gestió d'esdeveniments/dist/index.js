"use strict";
const imagenBarcelona = document.getElementById('barcelona');
const imagenMadrid = document.getElementById('madrid');
const cuadroRojo = document.getElementById('red');
const cuadroNaranja = document.getElementById('orange');
const cuadroMarron = document.getElementById('brown');
const cuadroMorado = document.getElementById('purple');
const cuadroVerde = document.getElementById('green');
const cuadroAzul = document.getElementById('blue');
let golesBarcelona = 0;
let golesMadrid = 0;
let faltasBarcelona = 0;
let faltasMadrid = 0;
let ultimoGoleador = '';
let minutosPartido = 0;
// Goles
function Goles(equipo, accion) {
    if (equipo === 'barcelona') {
        golesBarcelona = Math.max(golesBarcelona + (accion === 'sumar' ? 1 : -1), 0);
        cuadroRojo.textContent = golesBarcelona.toString();
    }
    else if (equipo === 'madrid') {
        golesMadrid = Math.max(golesMadrid + (accion === 'sumar' ? 1 : -1), 0);
        cuadroNaranja.textContent = golesMadrid.toString();
    }
}
imagenBarcelona.addEventListener('click', (evento) => {
    if (evento.button === 0) {
        Goles('barcelona', 'sumar');
    }
});
imagenMadrid.addEventListener('click', (evento) => {
    if (evento.button === 0) {
        Goles('madrid', 'sumar');
    }
});
// Click derecho
imagenBarcelona.addEventListener('contextmenu', (evento) => evento.preventDefault());
imagenMadrid.addEventListener('contextmenu', (evento) => evento.preventDefault());
// Clic derecho para restar goles
imagenBarcelona.addEventListener('auxclick', (evento) => {
    if (evento.button === 2) {
        Goles('barcelona', 'restar');
    }
});
imagenMadrid.addEventListener('auxclick', (evento) => {
    if (evento.button === 2) {
        Goles('madrid', 'restar');
    }
});
// Faltas
function Faltas(equipo, accion) {
    if (equipo === 'barcelona') {
        faltasBarcelona += accion === 'sumar' ? 1 : 0;
        cuadroMarron.textContent = faltasBarcelona.toString();
    }
    else if (equipo === 'madrid') {
        faltasMadrid += accion === 'sumar' ? 1 : 0;
        cuadroMorado.textContent = faltasMadrid.toString();
    }
}
imagenBarcelona.addEventListener('mouseenter', () => {
    Faltas('barcelona', 'sumar');
});
imagenMadrid.addEventListener('mouseleave', () => {
    Faltas('madrid', 'sumar');
});
// Goleador
function Goleador(tecla) {
    if (tecla === '0') {
        ultimoGoleador = '0';
    }
    else {
        ultimoGoleador += tecla;
    }
    cuadroVerde.textContent = ultimoGoleador;
}
document.addEventListener('keydown', (evento) => {
    const tecla = evento.key;
    if (/^[a-zA-Z0-9]$/.test(tecla)) {
        Goleador(tecla);
    }
});
// Minutos Partido
function MinutosPartido() {
    minutosPartido += 1;
    cuadroAzul.textContent = minutosPartido.toString();
}
document.addEventListener('dblclick', () => {
    MinutosPartido();
});
//# sourceMappingURL=index.js.map