// function carregarCookies() {

//       let h1: HTMLHeadingElement = document.getElementById("header") as HTMLHeadingElement;
//       let p: HTMLParagraphElement = document.getElementById("paragraph") as HTMLParagraphElement;


//       if (localStorage.getItem("idioma") == "catala" && h1 != null) {
//         h1.innerHTML = "Text en català";
//         p.innerHTML = "Per veure els canvis, actualitzar la pàgina."
//       } else if (localStorage.getItem("idioma") == "castella" && h1 != null) {
//         h1.innerHTML = "Texto en castellano";
//         p.innerHTML = "Para ver los cambios, actualitzar la página."
//       } else if (localStorage.getItem("idioma") == "angles" && h1 != null) {
//         h1.innerHTML = "Text in English";
//         p.innerHTML = "To see the changes, refresh the page."
//       }
//       document.body.style.backgroundColor = localStorage.getItem("color") as string;
//   }

function carregarFrames() {
    let array = ["Final_Fantasy", "Super_Mario_Bros.", "Resident_Evil", "Halo:_Combat_Evolved"];
    //TODO

    let frames: WindowProxy = window.frames;

    for (let i=0; i<frames.length; i++) {
        frames[i].location = "https://ca.wikipedia.org/wiki/" + array[i];
    }


}
