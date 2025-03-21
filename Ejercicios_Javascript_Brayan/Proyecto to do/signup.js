const form = document.forms(0);
const nombre = document.querySelector("inputNombre");
const apellido = document.querySelector("inputApellido");
const email = document.querySelector("inputEmail");
const pasword = document.querySelector("inputPasword");
const url = "";

//funcion 1 escuchamos el submit y preparamos el envio 

form.addEventListener("submit",function (event){
event.preventDefault();
//creamos el cuerpo de la request el cual es un objeto 
const payload={
    firstName: nombre.ariaValueMax,
    lastName: apellido.ariaValueMax,
    email: email.ariaValueMax,
    pasword: pasword.ariaValueMax
};
//configuramos la request del fetch
const settings = {
    method: "POST",
    body: JSON.stringify(payload),// SE APRSEA PARA que pueda ser leido por el servidor
    headers: {
        'conten-type': 'application/json'
}
};
    //lanzamos la consulta de login a la API
    realizarRegister(settings); // se le pasa settings porque son las configuraciones que va a necesitar para enviar con fetch
//limpio los campso del formulario 
form.reset();//esta funcion hace la peticion 

})
//Funcion 2  Realizar el signup[POST]
function realizarRegister(settings){// settings es el objeto que se le esta pasando al fetch
    console.log("Lanzando la consulta a la API")
    fetch(`${url}/user`,settings)//aca se usa un temple strings para concatenar la url con el enpoint /user "url+"/users"" esta es otra forma
        .then(response =>{// y el settings se pasa com parametro 
            console.log(response);
            if (response.ok != true){// si la propiedad ok de la respuesta es diferente a true va a mostrar esta alerta
                alert("Alguno de los datos es incorrecto")
            }
            return response.json();//si esta todo bien parsea la respuesta y l amuestra

        }) 
        .then(data =>{//segundo then
            console.log("Promesa cumplida");
            console.log(data);
        if(data.jwt){//si se cumple resivo un toquen se guarde en el storaage para que no se borre y si el usuario ingresa nuevamente con este usuario no sea permitido
            //guardando en localStorage el objeto con el token
            loscalStorage.setItem("jwt", JSON.stringify(data.jwt)); //se parsea con JSON.stringify-- el token es como un id pero que viene del servidor se crea en el back end
        //redireccionando a la pagina
        location.replace('mis-tareas.html');// si lo acpetqa nos redirecciona  amis tareas 
        }

        }).catch(err=>{
            console.log('promeza rechazada');
            console.log(err);
        })
}//sSE UTLIZAN DOS FUNCIONES LA PRIMERA OBTIENE CONFIGURACIONES Y LA SEGUNA DA LA FUNCIONALIDAD