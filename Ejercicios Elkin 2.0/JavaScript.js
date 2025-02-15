
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