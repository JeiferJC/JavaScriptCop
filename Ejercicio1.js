let persona = {
    nombre: "Sergio",
    apellido:"Jimenez",

    direccion: {
        calle:"Oxidente",
        coordenadas: "1010101",
    },
     materias: ["Matematicas", "Geometria", "Edu fisica"]
}

for (propiedades in persona){
  console.log(persona[propiedades])

}

for (materias of persona.materias){
    console.log(materias)
     
    
}
console.log(parseInt(Math.random)*3+1)