
window.addEventListener("load", function() {
    
    let formulario= document.querySelector("form.reservation");
   
 formulario.addEventListener("submit", function(e){
      e.preventDefault();
    

   let campoNumber= document.querySelector ("input.number");
    if (campoNumber.value == ""){

        alert("Esta vacio");
      
    }else if (campoNumber.value.length<3){
         alert("tiene menos de 3 caracteres")
    }

    let campoDate= document.querySelector("input.date")
       
    if (campoDate.value== ""){
        alert("pon un date");
    }
    });
 
})