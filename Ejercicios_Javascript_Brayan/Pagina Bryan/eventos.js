window.addEventListener("load",function(){
let botonCapitulos = document.querySelector (".capitule-button")

botonCapitulos.addEventListener("click",function(){
    alert ("tocaste el boton")
})
let botonMenu = document.querySelector(".menu-button")
    
botonMenu.addEventListener("click",function(e){
    e.preventDefault();//La e muestra informacion importante en el DOM de la accion (de donde se clicleo etc..)

    console.log(this);//nos muestra donde sucedio el evento en el DOM
    alert("este es el menu de solo leveling");
})
   
})