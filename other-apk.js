let persona = {
    nombre: "pablo",
    edad: 28,
    direccion: {
    ciudad: "cali",
    barrio: "florecita"
    },
    materias: ["backend","frontend","matematicas"]
}
    for (propiedades in persona){
console.table(persona[propiedades])
}
for (materia of persona.materias){
    console.table(materia)
}