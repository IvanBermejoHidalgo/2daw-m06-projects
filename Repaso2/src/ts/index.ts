// function diaDeLaSetmana() {
//     //TODO
//     let data: string = String((<HTMLInputElement> document.getElementById("data")).value);

//     let fecha:RegExp = /^\d{2}\/\d{2}\/\d{4}$/;

//     if (!fecha.test(data)) {
//         console.log("El formato no es el correcto");
//     }

//     const dia: number = parseInt(data.substring(0,2));
//     const mes: number = parseInt(data.substring(3,5)) -1;
//     const año: number = parseInt(data.substring(6,12));

//     const date: Date = new Date(año,mes,dia);
//     const saberDia: number = date.getDay();
//     alert(saberDia);

//     const raizCuadrada:string = Math.sqrt(saberDia).toFixed(2);
//     console.log(raizCuadrada);
// }


// function modificarBom() {

//     let data: number = Number((<HTMLInputElement> document.getElementById("data")).value);

//     for (let i=1; i<=data; i++) {
//         let finestra = window.open("","","width=300px,height=300px");
//         let color = Math.floor(Math.random()*16777215).toString(16);

//         if (finestra) {
//             finestra.document.write(i.toString());
//             finestra.document.close();
//             finestra.document.body.style.backgroundColor = "#" + color;
//         }

//     }


// }

// function Div4() {

//     let numero: number = Number((<HTMLInputElement> document.getElementById("number")).value);

//     if (numero %4 == 0) {
//         console.log("Es divisible");
//     } else {
//         console.log("No es divisible");
//     }

// }

// function MayMin() {

//     let letra: string = "a";
//     let resultado: string = "";

//     for (let i = 0; i < 10; i++) {

//         if (i %2 == 0) {
//             resultado += letra.toLowerCase();
//         } else {
//             resultado += letra.toUpperCase();
//         }
//     }

//     console.log(resultado);

// }


function MayMin() {

    let texto: string = String((<HTMLInputElement> document.getElementById("texto")).value);
    let resultado:string="";

    for (let i=0; i<texto.length; i++) {

        if (i %2 == 0) {
            resultado += texto.charAt(i).toUpperCase();
        } else {
            resultado += texto.charAt(i).toLowerCase();
        }    

    }

    console.log(resultado);
    
    if (texto.length %4 == 0) {
        console.log("Es divisible");
    } else {
        console.log("No es divisible");
    }

}