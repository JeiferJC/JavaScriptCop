


const div = document.querySelector ( "#numero1")

const a = document.querySelector ( "#link")

let n = 0 



a.addEventListener("click", function(){ // se puede hacer con este callback de function o con el arrow function() =>)
    div.innerHTML= n++ 
})
 
// a.onclick = function () {//otra forma de hacerlo
//     div.innerHTML = n++
// }
// a.onmouseover = function () {
//     div.innerHTML = n++
// }
// window.addEventListener("keypress", function(event){ // se puede hacer con este callback de function o con el arrow function() =>)
//     if (event.key== "Enter"){
//     div.innerHTML= n++ 
//     }
// })


// function incrementarContador(){
//     div.innerHTML= n++ ;
// }
   
  
// setInterval(incrementarContador, 1000 )
// let inicio =confirm ("Deseas inciar el conteo")
// if (inicio){
//     setTimeout(function(){
//         div.innerHTML= n++ 
//     }, 10)
//     }



