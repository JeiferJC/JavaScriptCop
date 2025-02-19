
//------------Cambia de color al dar click----------------*/
function goDarkMode(){
    document.querySelector("body").classList.toggle("dark")
}

//------------------EVENTOS------------------------------------ */
window.addEventListener("load", function(){
    let aboutButton= this.document.querySelector(".about-button")

    aboutButton.addEventListener("click", function() {
        alert("tocaste el mensaje")
    })

    let homeButton= this.document.querySelector("homeButton")

    homeButton.addEventListener("click", function(e) {
        alert("Tocaste este boton tambien ");
        homeButton.prevenDefault();
        
    })

    
})

//--------AGREGA EVENTOS MOUSE-----------------//
window.addEventListener("load", function(){
    let boton = this.document.querySelector("#button1")
    boton.addEventListener("mouseout",function(){
        boton.style.color = prompt("escoge un color");
    })
})

window.addEventListener("DOMContentLoaded", function(){
    const botones = document.querySelectorAll(".miBoton")
    botones.forEach(botone => {
        botone.addEventListener("mouseover", function(){
            botone.style.backgroundColor= "red";
        })
       
        botone.addEventListener("mouseout", function(){
            botone.style.backgroundColor= "";
        })
       
        
    });
})


//------EVENTOS TECLADO---//
//Solo es necesario poner en lugar de mouseover y mouseout se pone..
//---KEYPRESS Y KEYDOWN

//----Evitar enviar un formulario dos veces 
let formulario = document.querySelector("select");
            formulario.addEventListener("submit", function(event) {
                event.preventDefault()
            })

//Limitar el tama;o de caracteres extra
function limita(maximoCaracteres) {
    var elemento = document.getElementById("texto");
    if(elemento.value.length >= maximoCaracteres ) {
        return false;
    }
    else {
        return true;
    }
} 


//------alamacenar datos de un input text y number 

var nombre = document.getElementById("nombre").value;
console.log(nombre)
var numero= document


window.addEventListener("load", function(){
    let formulario= this.document.querySelector("form.reservation");
})