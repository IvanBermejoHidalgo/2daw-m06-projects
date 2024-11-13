// function repetirLetra() {
//     let palabra: string = String((<HTMLInputElement> document.getElementById("palabra")).value);
//     let respuesta: string = "";


//     for (let i =0; i< palabra.length; i++) {

//         if (i % 2 == 0) {
//             respuesta += palabra.charAt(i).toUpperCase();
//         } else {
//             respuesta += palabra.charAt(i).toLowerCase();
//         }

//     }

//     console.log(respuesta);

//     if (palabra.length % 4 == 0) {
//         console.log("ES DIVISIBLE");
//     } else {
//         console.log("NO ES DIVISIBLE");
//     }

// }

// function diaDeLaSetmana() {

//     let fecha: string = String((<HTMLInputElement> document.getElementById("data")).value);

//     let compro: RegExp = /^\d{2}\/\d{2}\/\d{4}$/;

//     if (!compro.test(fecha)) {
//         console.log("NO ES IGUAL");
//     }

//     const dia: number = parseInt(fecha.substring(0,2));
//     const mes: number = parseInt(fecha.substring(3,5)) -1;
//     const año: number = parseInt(fecha.substring(6,12));

//     let data: Date = new Date (año, mes, dia);

//     let resDia: number = data.getDay();
//     alert(resDia);
    
//     let arrel: string = Math.sqrt(resDia).toFixed(2);
//     console.log(arrel);   

// }

function modificarBom() {

    let numero: number = Number((<HTMLInputElement> document.getElementById("numero")).value);


    for (let i=1; i<=numero; i++) {

        let ventana = window.open("","","width=300,height=300");
        let color = Math.floor(Math.random()*16777215).toString(16);


        if (ventana) {
            ventana.document.write(i.toString());
            ventana.document.body.style.backgroundColor = "#" + color;
        }

    }

}

