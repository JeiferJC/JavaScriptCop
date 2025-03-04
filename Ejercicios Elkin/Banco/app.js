console.log("Bienevenido al banco degital")



let miPrimeraPromesa = new Promise((resolve, reject) =>{
 
    const cuentaBancaria= {
         estado: "activa",
         usuario: "Elkin",
         cuentaAhorros: 0
    };

    setTimeout(function(){

        if (cuentaBancaria.cuentaAhorros<1){
            reject({
                mensaje:"fondos insuficientes"
            });
        }
        else if (cuentaBancaria.estado !="activa"){
            reject({
                mensaje: "La cuenta no esta activa"
            });
        }
        else {
            resolve({
                mensaje: "La transaccion se realizo con exito"
            });
        }
    })

}, 2500)

const cajero= document.querySelector(".bancoMobile")
//se hace esto si se resolvio se trae el resolve
miPrimeraPromesa
.then((respuesta)=>{
    console.log(respuesta)
    cajero.innerHTML='<h4>'+respuesta.mensaje + '</h4>'
})

//se llama esto cuando no se no se cumple una condicion y se trae el reject
.catch((err)=>{
    console.log(err)
    cajero.innerHTML=' <h4>'+err.mensaje +'</h4>'
   
})
