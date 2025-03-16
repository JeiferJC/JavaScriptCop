const apiUrl = "https://dog.ceo/api/breeds/image/random";// lo unico que hace es guardarla en apiurl y despues se pone en el fetch

function callApi(){// se guarda en esta funcion para  ponerla en el click y con el click se llame la api 
    fetch(apiUrl)
    .then(respuesta=>{
        return respuesta.json();//.jason trabaja de forma assincrona pero igual lo parsea
    })
    .then(datos=>{
        loadImageAndShowAlert(datos.message);// este .then toma lo que hace el primer then, lo que retorna con respuesta.jason()
    })// aca datos vendria siendo respuesta.json()------ el datos.massage es tomado de la propia api la cual posee massage dentro de datos el cual la palabra datos no aparece pero todo esos son datos 
     .catch(error=>{
        console.log("Ocurrio un error al llamar a la API.", error);
     });

}
// async fuction callApi(){------------ async await se utiliza cuando hay mucha informacion y se simplifican los .then
//     try{
//         const respuesta = await fetch(apiUrl)
//         const datos =await respuesta.jason()
//         return loadImageAndShowAlert(datos.message)
//     }
//     catch(error){
//         console.log("Ocurrio un error al llamar a la API.", error)
//     }
//     }


let button = document.querySelector("button");
button.addEventListener("click", callApi);

function loadImageAndShowAlert(src){
    document.querySelector("img").setAttribute("src", src);// con setatribute le decimos que muestre la imagen que captamos por parametro el loadImageAndShowAlert(src)el cual es obtenido en (datos.massage)
    alert ("img cargada")
}