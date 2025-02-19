// document.createElement("Input") //Creamos una etiqueta input
// document.createTextNode("Hola")//Se evidencia que sera un nodo de texto
// document.appendChild("Titulo")//Se asigna un elemento hijo a un elemnto padre

var botonVerMas = document.createElement("button")
var botonTexto = document.createTextNode("ver mas")
botonVerMas.apprendchild(botonTexto)
document.body.appendChild(botonVerMas)
