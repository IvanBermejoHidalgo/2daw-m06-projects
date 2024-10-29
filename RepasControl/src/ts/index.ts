// EJERCICIO 1

// function Div4() {
//     let numero:number = Number((<HTMLInputElement> document.getElementById("numero")).value);
//     console.log(numero)
//     if (numero % 4 == 0) {
//         alert("ES DIVISIBLE");
//     } else {
//         alert("NO ES DIVISIBLE");
//     }

// }



// for (let i = 0; contador<10; i++) {

//     resultado += letra.toUpperCase();
//     console.log(resultado);
// }

// EJERCICIO 2

// let resultado:string = "";
//     let letra:string = "a";
//     let contador:number = 0;

//     for (let i=0; i<10; i++) {
//         if (i %2 == 0) {
//             contador++;
//             resultado += letra.toUpperCase();
//         } else {
//             contador++;
//             resultado += letra;
//         }
        
//         if (contador == 10) {
//             console.log(resultado);
//         }
        
//     }


// function Ejercicio3() {

//     let palabra:string = String((<HTMLInputElement> document.getElementById("palabra")).value);
//     let resultadoPalabra: string = "";

//     for (let i = 0; i<palabra.length; i++) {
         
//         if (i %2 == 0) {
//             resultadoPalabra += palabra.charAt(i).toUpperCase();
//         } else {
//             resultadoPalabra += palabra.charAt(i).toLowerCase();
//         }
  
//     }

//     if (palabra.length %4 == 0) {
//         console.log("ES DVISIBLE: " + resultadoPalabra);
//      } else {
//         console.log("NO ES DIVISIBLE: " + resultadoPalabra);
//      }

// }


// PRACTICA

function diaDeLaSetmana() {
    //TODO

    const data: string = String((<HTMLInputElement> document.getElementById("data")).value);
    const comprobar: RegExp = /^.{2}\/.{2}\/.{4}/;
    
    if (comprobar.test(data)) {
        
        const separar: string[] = data.split("/");
        const dia: string = separar[0];
        const mes: string = separar[1];
        const año: string = separar[2];

        const date: Date = new Date(parseInt(dia), parseInt(mes) -1, parseInt(año));

        const ndia: number = date.getDay();
        alert("Es el dia de la semana: " + ndia);
        console.log(Math.sqrt(ndia).toFixed(2));

    }
    
}


function modificarBom() {

    const texto: string = String((<HTMLInputElement> document.getElementById("window")).value);

    //const newWindow = window.open("","", "width=300,height=300");

    for (let i = 0; i < parseInt(texto); i++) {
        const nuevaPestaña = window.open('', '', 'width=300,height=300');
        const color: string = (Math.floor(Math.random()*16777215).toString(16));
        
        if (nuevaPestaña){
            nuevaPestaña.document.write('<h1>' + i +'</h1>');
            nuevaPestaña.document.body.style.backgroundColor = color;
            nuevaPestaña.document.close(); 
        }
    }

}


