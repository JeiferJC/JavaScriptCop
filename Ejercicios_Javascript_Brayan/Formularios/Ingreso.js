const nombreUsuario = document.querySelector("#nombre")
const formulario = document.querySelector("form")
const contrasenaUsuario = document.querySelector("#pass")
const telefono= document.querySelector("#tel")
const checkboxes = document.querySelectorAll("input[type=checkbox]")
const radio = document.querySelectorAll("input[type=radio]")

let usuario = {
    nombreCompleto: "",
    contrasenia: "",
    tel:"",
    hobbiesSeleccionados: [],
    nacionalidad:""
}
let mensajeError = document.createElement("span")
let nombre = document.querySelector("#nombreError")

function normalizar(nombre) {
    let n =  nombre.trim().toLowerCase()//esto se pone antes del if para que coja el parametro y no cuente los espacios que pone el usuarioya que con trim loss quitamos.
    if (n.length <= 10){
        usuario.nombreCompleto = n// esta es la validacion
}
else{
   nombreUsuario.classList.add("error")
   mensajeError.innerText ="supera el numero de letras";
   nombreError.appendChild(mensajeError)
}

    // usuario.nombreCompleto = nombre.trim(). tolowerCase() // para que se actualice en el objeto se pone el objeto usurario y el nombre completo para igualarlo al trim
}
// function validarTelefono(tele) {
//     !isNaN(tele) ? usuario.tel= parseInt(tele): null// esdto se hace cuando el input es text
function validarTelefono(tele) {   //aca el input es numer pero igualmente toca hacer el parseint para que lo tome como numeero.
    usuario.tel= parseInt(tele)
}

nombreUsuario.addEventListener("blur",()=>{// para moestrrar al usuario el error antes de que siga escribiendo en los demas espacios.
    normalizar(nombreUsuario.value)
})

formulario.addEventListener("submit", (e) =>{//evento submit por parametro// el cual reocge los datos del usuario y cuando se hace el console log se muestra
    e.preventDefault(); // metdo para que no se reinice el formulario
    normalizar(nombreUsuario.value)//en lugar de reiniciarse llam estas funciones.
    validarTelefono(telefono.value)
    
    checkboxes.forEach(hobbies => {
        console.log(hobbies.id)
        hobbies.checked ? usuario.hobbiesSeleccionados.push(hobbies.id) : null
    
    })
    radio.forEach(nac => {
        console.log(nac.checked)
        nac.checked ? usuario.nacionalidad = nac.id.toUpperCase() : null// touppercase para ponerlo en mayuascula
    // o utiliar tolowercase() para cambiar de mayuscula a minuscula.
    })
    
    console.log(usuario)
})
