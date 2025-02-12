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
let numero1=parseInt(prompt("Ingresa un numero: tijera(1), papel(2), piedra (3)"))
let numero2= (parseInt(Math.random)*3+1)
if (numero1 <=0 &&  numero1>3 ){
  alert("Numero excedio el limite ")

}else if (numero1== numero2) {
    alert("Empate")
} else if (numero1 == "1" && numero2 == "2"|| numero1 == 
    "2" && numero2== "3" || numero1== "3"&& numero2== "1") {
            
        alert("Ganaste")
}else {
    alert("Perdiste")
}
    
