// for in // se usa con OBJETOS
let personaje = {// debemos simular que este objeto es como un array para recorrerlo y poder mostrarlo en consola
    nombre: "Brayan",//ahora recorre caractersitica por caracteristica
    apellido: "Jimenez",
    edad: 28
}
for(let caracteristicas in personaje){
    console.log(personaje[caracteristicas])// necesitamos hacer una varibale para que de manera dinamica se vaya modificando por cada unade estas porpiedades
    //para que se vaya recorriendo por cada una de esas caracteristicas entonces la incluimos en los corchetes[]
}

//EJERCICIO 2
//FOR OF

let seriers = [ "the mandalorian", "the office", "broklym 99"]// se usa con arrays
for (let unaSerie of series){
    console.log(unaSerie)

}