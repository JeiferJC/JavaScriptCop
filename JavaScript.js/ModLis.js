let confirmarCambios= confirm("Deseas hacer cambios?")


if (confirmarCambios){
    let titulo = querySelector("h1")

    titulo.innerHTML+= "Soy contenido nuevo";
    titulo.style.color= "Crimson";
    titulo.classList.toggle("titulo")
}

let removeClass= confirm("Quieres eliminar esta clase?")

if (removeClass){
    titulo.classList.remove("titulo")
}