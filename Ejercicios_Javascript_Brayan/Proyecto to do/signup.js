const form = document.form(0);
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
    body: JSON.stringify(payload),
    headers: {
        'conten-type': 'application/json'
}
};
    //lanzamos la consulta de login a la API
    realizarRegister(settings); // se le pasa settings porque son las configuraciones que va a necesitar para enviar con fetch
//limpio los campso del formulario 
form.reset();//esta funcion hace la peticion 

})