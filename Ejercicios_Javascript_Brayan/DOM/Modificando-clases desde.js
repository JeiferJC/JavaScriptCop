let titulo = document.querySelector("h1");
titulo.innerHTML = "nuevo titulo";
titulo.classList.add = "titulo-destacado";

let confirmarEliminarClase = confirm("desea quitar el estilo implementado al titulo?");
if (confirmarEliminarClase){
    titulo.classList.remove = "titulo-destacado";
}