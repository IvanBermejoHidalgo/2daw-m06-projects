"use strict";
// OPCION 1: LA MEJOR
/*let botones:HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

for(let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () => changeColor(botones[i].id));
    //botones[i].addEventListener("click", () => changeColor(botones[i].getAttribute("id")?.toString()!));
}
function changeColor(id:string){
    document.body.style.backgroundColor = id;
}*/
// OPCION 1: LA MEJOR
//let botones2:HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
//for(let i = 0; i < botones2.length; i++) {
//    botones2[i].addEventListener("click", () => {    document.body.style.backgroundColor = botones2[i].id});
//botones[i].addEventListener("click", () => changeColor(botones[i].getAttribute("id")?.toString()!));
//}
// OTRA OPCIÓN QUE ES LA BASICA
/*function switchBg(color: string) {
    let chosenColor: string = "white";
    switch (color) {
        case "R":
            chosenColor = "red";
            break;
        case "Y":
            chosenColor = "yellow";
            break;
        case "G":
            chosenColor = "green";
            break;
        case "B":
            chosenColor = "blue";
            break;
        default:
            break;

    }

    document.body.style.backgroundColor = chosenColor;

}

let redButton: HTMLButtonElement = document.getElementById("redButton") as HTMLButtonElement;
redButton.addEventListener("click", () => switchBg('R'));
*/
let buttonCollection = document.getElementsByTagName("button");
for (let i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener("click", () => {
        let targetDiv = document.getElementById("targetDiv");
        targetDiv.style.backgroundColor = buttonCollection[i].style.backgroundColor;
    });
}
