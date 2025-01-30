const imagenBarcelona = document.getElementById('barcelona') as HTMLImageElement;
const imagenMadrid = document.getElementById('madrid') as HTMLImageElement;
const cuadroRojo = document.getElementById('red') as HTMLDivElement;
const cuadroNaranja = document.getElementById('orange') as HTMLDivElement;
const cuadroMarron = document.getElementById('brown') as HTMLDivElement;
const cuadroMorado = document.getElementById('purple') as HTMLDivElement;
const cuadroVerde = document.getElementById('green') as HTMLDivElement;
const cuadroAzul = document.getElementById('blue') as HTMLDivElement;

let golesBarcelona: number = 0;
let golesMadrid: number = 0;
let faltasBarcelona: number = 0;
let faltasMadrid: number = 0;
let ultimoGoleador: string = '';
let minutosPartido: number = 0;

// Goles
function Goles(equipo: string, accion: 'sumar' | 'restar'): void {
    if (equipo === 'barcelona') {
        golesBarcelona = Math.max(golesBarcelona + (accion === 'sumar' ? 1 : -1), 0);
        cuadroRojo.textContent = golesBarcelona.toString();
    } else if (equipo === 'madrid') {
        golesMadrid = Math.max(golesMadrid + (accion === 'sumar' ? 1 : -1), 0);
        cuadroNaranja.textContent = golesMadrid.toString();
    }
}

imagenBarcelona.addEventListener('click', (evento: MouseEvent) => {
    if (evento.button === 0) {
        Goles('barcelona', 'sumar');
    }
});

imagenMadrid.addEventListener('click', (evento: MouseEvent) => {
    if (evento.button === 0) {
        Goles('madrid', 'sumar');
    }
});


// Click derecho
imagenBarcelona.addEventListener('contextmenu', (evento) => evento.preventDefault());
imagenMadrid.addEventListener('contextmenu', (evento) => evento.preventDefault());



// Clic derecho para restar goles
imagenBarcelona.addEventListener('auxclick', (evento: MouseEvent) => {
    if (evento.button === 2) {
        Goles('barcelona', 'restar');
    }
});

imagenMadrid.addEventListener('auxclick', (evento: MouseEvent) => {
    if (evento.button === 2) {
        Goles('madrid', 'restar');
    }
});



// Faltas
function Faltas(equipo: string, accion: 'sumar'): void {
    if (equipo === 'barcelona') {
        faltasBarcelona += accion === 'sumar' ? 1 : 0;
        cuadroMarron.textContent = faltasBarcelona.toString();
    } else if (equipo === 'madrid') {
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
function Goleador(tecla: string): void {
    if (tecla === '0') {
        ultimoGoleador = '0';
    } else {
        ultimoGoleador += tecla;
    }
    cuadroVerde.textContent = ultimoGoleador;
}

document.addEventListener('keydown', (evento: KeyboardEvent) => {
    const tecla: string = evento.key;
    if (/^[a-zA-Z0-9]$/.test(tecla)) {
        Goleador(tecla);
    }
});



// Minutos Partido
function MinutosPartido(): void {
    minutosPartido += 1;
    cuadroAzul.textContent = minutosPartido.toString();
}

document.addEventListener('dblclick', () => {
    MinutosPartido();
});
