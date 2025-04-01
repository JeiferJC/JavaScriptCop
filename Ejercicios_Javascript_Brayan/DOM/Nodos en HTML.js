// document.createElement("Input") //Creamos una etiqueta input
// document.createTextNode("Hola")//Se evidencia que sera un nodo de texto
// document.appendChild("Titulo")//Se asigna un elemento hijo a un elemnto padre

var botonVerMas = document.createElement("button")
var botonTexto = document.createTextNode("ver mas")
botonVerMas.apprendchild(botonTexto)
document.body.appendChild(botonVerMas)


// CON LOS NODOS SE PUEDEN AGREGAR COSAS AL HTML DESDE EL DOM COMO  UN BOTON CON CREATEELEMENT, UN TEXTO 
// CON cREATTEXT Y APPENCHILD para insertar esto que se creo concreateleemnt
//ejemplo

//en este ejercicio dara un <p> con el texto buenos dias de un<div>

<script>
    var p = document.createElement("p")
    var text= document.createTextNode('buenosd dias');
    p.appendChild(texT);
    var div =
    document.querySelector("div").appendChild(p);
    document.body.appendChild(div)
<script>