//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let elemento= document.querySelector("#tarjeta");
elemento.classList.add("card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let cambio= document.querySelector("img");
cambio.setAttribute("src","https:www.youtube.com/img/desktop/yt_1200.png");

//3- Quitarle al titulo la clase que le está dando un formato feo
let quitarTitulo = document.querySelector("h1");
quitarTitulo.removeAttribute("titulo-feo");

//4- Chequear si el link a youtube posee o no el atributo href
let verificacionTarjeta = document.querySelector("#tarjeta");
verificacionTarjeta.hasAttribute("href"); 


//5- Obtener el href del link a wikipedia y mostrarlo por consola
let obtenerLink= document.querySelector("link wikipedia");
obtenerLink.getAttribute("href");

