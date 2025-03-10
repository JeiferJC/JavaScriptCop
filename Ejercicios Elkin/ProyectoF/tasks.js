window.addEventListener('load', function(){
   const urlTareas= 'https://ctd-todo-api.herokuapp.com/v1/tasks';
   const urlUsuario='https://ctd-todo-api-herokuapp.com/v1/users/getMe';
   const token= JSON.parse(this.localStorage.jwt);


   const formulario= document.querySelector('form');
   const nuevaTarea = document.querySelector('#nuevaTarea');
   const btnCerrarSesion= document.querySelector('#closeApp');
   const nombreUsuario=document.querySelector('.user-info p');
   const cantidadFinalizadas=document.querySelector('#cantidad-finalizadas')



   obtenerNombreUsuario();
   consultarTareas();



   /*---------FUNCION 1: Cerrar sesion -------------*/


   btnCerrarSesion.addEventListener('click', function(){

      const cerrarSesion= confirm ('Seguro que quiere cerrar sesion');
      if (cerrarSesion){
         //Limpiamos LocalStorage y redireccionamos a login 

         localStorage.clear();
         location.replace('./index.html');
         
      }

   })


   /*---------------------FUNCION 2: OBTENER NOMBRE DE USUARIO [GET]------------- */


   function obtenerNombreUsuario(){
      const settings={
         method:'GET',
         headers:{
            authorizatin: token
         }
      };

      console.log('Consultando mi usuario...')
      fetch(urlUsuario, settings)
      .then (response=> response.json())
      .then (data=>{
         console.log('Nombre usuario');
         console.log(data);
         nombreUsuario.innerText=data.firstName;
         nombreUsuario.computedStyleMap.textTransform='captalize'

      }).catch(error=>{
         mostrarPosibleError(error)
      });
      
   };

   /*-----------FUNCION 3: OBTENER LISTADO DE TAREAS [GET]*/


   function consultarTareas(){
      
      console.log('Consultando tareas...')
      const settings={
         mehtod:'GET',
         headers:{
            authorization: token
         }
      }
  
    
    fetch(urlTareas, settings)
    .then(response=> response.json)
    .then(tareas=>{
      console.log('Tareas del usuario');
      console.table(tareas);
     //LE MANDO EL LISTADO RENDERIZAR TAREAS
      renderizarTareas(tareas);
    }).catch(error=>{
      mostrarPosibleError(error)
   });



/*-----------FUNCION 4: Crear nueva tarea [POST]-------- */
formCrearTareas.addEventListener('submit', function(event){
   event.preventDefault();
   console.log('cerrar sesion')
   console.log(nuevaTarea.value);

   const payload={
      descripcion: nuevaTarea.value.trim()
   };

   const settings={
      method: 'POST',
      body: JSON.stringify(payload),
      headers:{
         'Content-type': 'application/json',
         authorization:token
      }
   }
   console.log('Creando un tarea en la base de datos')
   fetch(urlTareas, settings)
   .then(response=> response.json)
   .then(tarea=>{
      console.log(tarea)
      consultarTareas();
   })
   .catch(error=> console.log(error))
})


/*----------FUNCION 5:Renderizar tareas en pantalla----------------- */

//Obtengo listados y limpio cualquier contenido interno
const tareasPendientes= document.querySelector('.tareas-pendientes')
const tareasTerminadas= document.querySelector('.tareas-terminadas');
//Limpio el listado
tareasPendientes.innerHTML='';
tareasTerminadas.innerHTML='';

//Buscamos el numero de finalizados
const numerosFinalizados= document.querySelector('#cantidad-finalizadas');
let contador=0;
numerosFinalizados.innerText=contador;

listado.forEach(tarea => {
   //variable intermediaa para manipular la fecha
   let fecha= new Date(tarea.createdAt);

   if (tarea.completed){
      contador++;

      //Lo mandamos al listado de tareas completas
      tareasTerminadas.innerHTML+=`
      <li class="tarea">
      <div class="hecha">
      <i class="fa-regular fa-circle-check"></i>
      </div>

      <div class="descripcion">
      <p class="nombre"> ${tarea.description}</p>
      <div class="cambios-estados">
      <button class="change incompleta" id="${tarea.id}"><i class"fa-solid"></i></button>
      <button class=" borrar" id="${tarea.id}"><i class"fa-regular fa-trash-can"></i></button>
      </div>
      
      </div>
      </li>
      
      `
   }else{
      //lo mandamos al listado de tareas sin terminar
      tareasPendientes.innerHTML+=`
      <li class="tarea">
      <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
      <div class="descripcion">
      <p class="nombre">${tarea.descripcion}</p>
      <p class="timestap">${fecha.toLocaleDateString()}</p>
      </div>
      </li>
      
      `
   }

   //actualizamos el contador en la pantalla
   numerosFinalizados.innerText=contador;
});

/*-------FUNCION 6: Cambiar estado de tareas[PUT]------------ */


function botonesCambioEstado(){

   console.log('Le add funcionalidad a los botones de cambio de estado..-.');
   
   const botonesDeUpdate= document.querySelector('.change');

   botonesDeUpdate.forEach(boton=>{
      
      boton.addEventListener('click', function(event){
         console.log('Cambiando de estado de la tarea...');
         const idCapturado=EventCounts.target.id;

         //Segun si la tarea esta terminado o no, inveritdo su estado completed
         const tareaTerminada= evento.target.classList.contains('incompleta');

         /*disparo la peticion para cambiar el estado */
        //Armamos el objeto que pide la API
         const payload={
            completed:!tareaTerminada
         }

         //configuramos el fetch
         const configuraciones={
            mehtod:'PUT',
            headers:{
               authorization:JSON.parse(token),
               'Content-type':'application/json'
            },
            body:JSON.stringify(payload)
         }

         //Hacemos el POST en la API

         fetch(`${urltarea}/task/${idCapturado}`, configuraciones)
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            //consulto las tareas para que se pinten nuevamente
            consultarTareas();
         })
         .catch(error=>{
            mostrarPosibleError(error)
         })
      })
   })
   
}
function mostrarPosibleError(mensaje){
   alert('hubo un error ' +mensaje)
}

/*---------FUNCION 7: Eliminar tarea [DELETE]------ */

function botonBorrarTarea(){
   const botonDelete=document.querySelectorAll('.borrar');

   botonDelete.forEach(boton=>{
      boton.addEventListener('click', function(evento){

         const idCampturado= evento.target.id;

         console.log('Borrando tarea...')

         //Configuramos fetch

         const configuraciones={
            method:'DELETE',
            headers:{
               authorization: JSON.parse(token),
            }

         }

         //Hacemos el POST en la API

         fetch (`${urltarea}/tasks/${idCapturado}`, configuraciones)
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            //Consulto las tareas para que se pinte nuevamente 
            consultarTareas();
         })
         .catch(error=>{
            mostrarPosibleError(error);
         })
      })
   })
}



 }})