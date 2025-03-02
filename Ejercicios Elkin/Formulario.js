
window.addEventListener("load", function() {
    
    let formulario= document.querySelector("form.reservation");
   
 formulario.addEventListener("submit", function(e){
      
    
    let errores=[];
   let campoNumber= document.querySelector ("input.number");
    if (campoNumber.value == ""){

        errores.push("Esta vacio");
      
    }else if (campoNumber.value.length<3){
         errores.push("tiene menos de 3 caracteres")
    }

    let campoDate= document.querySelector("input.date")
       
    if (campoDate.value== ""){
        errores.push("pon un date");
    }

    if (errores.length>0){
        e.preventDefault();

        let ulErrores= document.querySelector("div.errores ul");
        for (let i=0; i<errores.length; i++){
               ulErrores.innerHTML += "<li>"+errores[i] +"</li>"
        }
    }
        
    
    });
      
   


    
 
})