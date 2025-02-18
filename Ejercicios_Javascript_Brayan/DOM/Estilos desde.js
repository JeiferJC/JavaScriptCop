
let confirmarcambios = confirm("desea cambiar el estilo del titulo?");
if (confirmarcambios) {

    let titulo = document.querySelector("h1");
    titulo.innerHTML = "El rival de los monarcas",
    titulo.style.color ="green";
    titulo.style.fontSize = "50px";// en js no se pone - sino directamente Size en mayuscula la primer letra

}







