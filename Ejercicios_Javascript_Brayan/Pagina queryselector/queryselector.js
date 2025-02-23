// permite seleccionar elementos del DOM segun la clase que le solicitemos y los podemos modificar
const li = document.querySelectorAll("li")

//li[1].style.color = "blue"
//li[1].style.fontSize = "50px"
//li[1].style.fontweight = "bolder"// el [3] sale de la pagina DOM de donde estamos sacando la inf.
//li.forEach(l =>{
  //if (classlist.contains("destacado")){
   // li.classlist.remove("destacado")
  //}
//else{
//li.classlist.add("destacado")
//}
//})
  

// se crea el boton para hacer ewl cambio 
function toggleDestacado(){
  li.forEach(l =>{
    l.classList.toggle("destacado")
  })
}