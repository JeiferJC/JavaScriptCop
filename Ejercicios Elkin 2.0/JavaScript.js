
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

