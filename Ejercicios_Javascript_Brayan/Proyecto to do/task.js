//comienzan las funcionalidades una vez cargadas el documento 

     const urlBase='"https://api.example.com"'
    const urlTareas =""
    const urlUsuario =''
    const token = JSON.parse(localStorage.jwt),// este se setteo desde el login lo unico es almacenarlo en una variable obteniendo la propiedad jwt y se parsea
// aca se almacena el token en token que es una variable... ya que se setteo desde el login... obtniendo la propiedad jwt desde localStorage y se parsea.
// y ese jwt eso es lo que va a obtener el objeto para realizar las tareas  y eso lo guarda en una constante
window.addEventListener('load',function(){

const formulario = document.querySelector('form');
const nuevaTarea = document.querySelector('#nuevaTarea');
const btnCerrarSesion = document.querySelector('#CloseApp');
const nombreUsuario = document.querySelector('.user-info p');
const tareasPendientes= document.querySelector('.tareas-pendientes');
const tareasTerminadas = document.querySelector('.tareasTerminadas');
const cantidadFinalizadas = document.querySelector('#cantidad-finalizadas')

consultarTareas();

    obtenerNombreUsuario();// obtiene datos de donde se inicio sesion y por eso se puede ver en la pagina de perfil
    


//FUNCION 1 CERRAR SESION
btnCerrarSesion.addEventListener('click', function(){
    const confirma = confirm('Desea cerrar sesion')
    if(confirma){
        //limpiamos el localStorage y redirigimos al login 
        localStorage.clear();// aca va a borrar el historial del token[cada vez que entra no se acumla sino se van reeemplazando el token]
        location.replace('./index.html');// nos redirige a la pagina principal
    }

});
 
//Funcion 2 obtener nombre de usuario [GET]
function obtenerNombreUsuario(){
   
    const configuraciones= {
        method: 'GET',
        headers:{
        authorization: JSON.parse(token)
        }
    }


fetch (`${urlBase}/users/getMe`, configuraciones)
.then(res => res.json())
.then(data=>{
    console.log(data)
    console.log( data.firstName)
    nombreUsuario.innerText = data.firstNombre; 
    nombreUsuario.style.textTransform ='capitalize'
})
.catch(error=>{
mostrarPosibleError(error)
});
};

//FUNCION 3 OBTENER LISTADO DE TAREAS[GET]

function consultarTareas(){
    console.log("consultando tareas...");

    const configuraciones = {
        method: "GET",
        headers:{
            authorization: JSON.parse(token)
        }
    };

    fetch (`${urlBase}/tasks`, configuraciones)
    .then(res=>res.json())// el primer res trae el objeto devuelto por fetch y el segundo en conjunto con dato Json lo transforma para ser manewjable
    .then(data=>{//este data que se puede llamr como quiera ya brinda los datos parseado y listos para usar
        console.log(data);
        //le mando listado a renderizar las tareas
        renderizarTareas(data);
    })
    .catch(error=>{
        mostrarPosibleError(error);
    })

};
    
    //FUNCION 4 CREAR UNA NUEVA TAREA [POST]
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log("creando nueva tarea...")
    const validacion = validarTarea(nuevaTarea.value);
if (validacion){
    //armamos el objteo que pide la API
    const payload ={// payload objeto que nos pide la API
descripcion: nuevaTarea.value,// valor del input que escribe el usuario 
completed: false// es una tarea que no va a estar completada hasta que se el agregue la funcionalidad y se vuelva true
    }
//configuramos el fetch
const configuraciones ={
    method: "POST",
    headers: {
        authorization: JSON.parse(token),
        "Content-Type": "application/json"
    },
    body:JSON.stringify(payload)// aca se manda el objeto payload con su parseo 
}
    //hacemos el POST en la API
fetch (`${urlBase}/tasks`, configuraciones)
.then(res =>res.json())
.then(data =>{
    console.log(data);
    //consulta ;as tareas (para que se pinten nuevamente)
consultarTareas();
})
.catch(error=>{
    mostrarPosibleError(error);
    
})

}
else{
   alert("No puedes crear una tarea vacia") 
}
//limpio el form 
formulario.reset()
});



    //FUNCION 5 Renderizar tareas en pantalla
    function renderizarTareas(listado){
console.log("Renderizado listado de tareas... ");
//limpiamos las listas antes de volver a pintar
tareasPendientes.innerHTML ="";
tareasTerminadas.innerHTML ="";
   

listado.forEach(tarea =>{
    //variable intermedia para manipular el dia 
    const fecha = new Date (tarea.createdAt);
    if(tarea.completed){
tareasTerminadas.innerHTML +=`
<li class = "tarea">
<div class= "hecha">
<i classs = "fa-regular fa-circle-check"><i>
</div>
<div class = "descripcion">
<p class="nombre">${tarea.description}</p>
<div class= "cambios-estado">
<button class= change incompleta " id="${tarea.id}"><i class="fa-solid fa- rotate </button>
<buttton class ="borrar" id=${tarea.id}"><i class "fa-regular fa-trash-can"></i></button>
</div>
</div>
</li>
`

    }else{
        //lo mandamos al listado de tareas sin terminar 
        tareasPendientes.innerHTML +=`
        <li class= "tarea">
        <button class="change" id="${tarea.id}"><i class= "fa-regular fa-cicle"></i><button>
        <div class="descripcion">
        <p class="nombre">${tarea.description}</p>
        </div>
        </li>
        `
    }

})
const itemsTerminados = document.querySelectorAll('.tareas-terminadas li');
cantidadFinalizadas.innerText = itemsTerminados.length;

//finalizado el recorrido
//ahora le doy funcionalidad a los botones de cambio de estado y los de borrar tarea
botonoesCambioEstado();
botonBorrarTarea();
};



    //FUNCION 6- cambiar estado de tarea [PUT]
    function botonesCambioEstado(){
        console.log("Le agregamos funcionalidad a los botones de cambio de estado..");
        const botonesUpdate = document.queryselectorAll('.change');// lo que hace es buscar todos los botone change y despues sse reccorren ya que es como si fueran un array los chanfges
        //le agregamos a cada boton la escucha del click
        botonesUpdate.forEach(boton =>{//recorre todos los botones d emodificar 
            boton.addEventListener('click',function(evento))// se le agrega el evento de click a cada uno ....... en este caso si necesitamos el evento en el click como el submit 
            // en el Dom podemos ver la target en el cual tiene un id y ponemos el evento para que a cada boton se le asigne un id.... se toma el id del objeto que devuelve la api que sseria el target

        console.log("cambiando estado de la tarea...");
        const idCapturado = evento.target.id;// se guarda el id en una varibale ---- el target es el botony esta asociado a la tarea trae el id porque esta pidiendo el id y se le podria pedir otra cosa como la clasee pero en este caso no va a servir 
    
    //segun si la tarea esta terminada o no, invierto su estado de completed
const tareaTerminada = evento.target.classList.contains("incompleta");

//disparo la peticion para cambiar el estado
//armamos el objeto qye pide la API
const payload ={
    completed: !tareaTerminada
    
}
//configuramos el fetch
const configuraciones = {
    method: "PUT",
    headers: {
        authorizacion: JSON.parse(token),
        "Content type": "application/json"// el content type siempre va con el header
    },
    body: json.stringify(payload)

}
//hacemos el POST de la API
fetch (`${urlBase}/tasks/${idCapturado}`, configuraciones)// fetch es un meotod que trabaja como promesa--- cuando un metodo lleva muchos parametros se separa por comas.
.then(res =>res.json())
.then(data =>{
    console.log(data);
    //consulta ;as tareas (para que se pinten nuevamente)
consultarTareas();// cuanod manda una tarea y la vuelvo a invocar no se actuuzalia entonces necesito que se actuzlice y es paar saber que hace el j.son tarea
})
.catch(error =>{
    mostrarPosibleError(error);
})
        })
    })



//FUNCION ELIMINAR TAREA[DELETE] 
function botomBorrarTarea(){
    const botonoesDelete = document.querySelectorAll(".borrar");// se seleccionan todos los botones para borrar una tarea
    botonoesDelete.forEach(boton=>{
        boton.addEventListener('click',function(evento){// le pasamos el evento al callback para pasar su id tambien
            const idCapturado = evento.target.id;
            console.log("Borrando tarea...");// no se pasa un objeto proque no se cambia nada 
    //cconfiguramos el fetch
    const configuraciones = {
        method:"DELETE",
        headers:{
            authorization: JSON.parse(token),

        }
    }
//hacemos el POST de la API
fetch (`${urlBase}/tasks/${idCapturado}`, configuraciones)
.then(res =>res.json())
.then(data =>{
    console.log(data);
    //consulta las tareas (para que se pinten nuevamente)
consultarTareas();// en otdas las peticiones tenemos que actualizar la consulta de tareas, para que se muestren los datos en tiempo real de lo que vamos haciendo 
})
.catch(error =>{
    mostrarPosibleError(error);
})
        
        })
    })
}
//funciones extra

function mostrarPosibleError(mensaje){
    alert("ingresaste mal los datos ")
}
