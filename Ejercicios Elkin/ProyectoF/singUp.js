window.addEventListener('load', function(){
    /*-----------Obtenemos variables globales--------*/
const form= document.querySelector('form');
const nombre= document.querySelector('#inputNombres');
const apellido = document.querySelector('#inputApellidos');
const email = document.querySelector('#inputPassword');
const password= document.querySelector('#inputPassword');
const url = 'https://petstore.swagger.io/v2/swagger.json';


/*--------Escuchamos el submit y preparamos el envio */

form.addEventListener('submit', function(event){
    event.preventDefault();

    //Creamos el cuerpo de la request "Peticion"

    const payload={
       firtsName: nombre.value, 
       lastName: apellido.value,
       email: email.value,
       password: password.value
    };

    //---Configuramos el request del fetch

    const settings={
        method: 'POST',
        body: JSON.stringify(payload),
        Headers:{
            'Content-Type': 'application/json'
        }


    };

    //  Lanzamos  la consulta de Login a la API
    realizarRegister(settings);

    //Limpio los campos del formulario
    form.reset();
});


/* FUNCION 2:   Realizar el singUp [POST]*/ 
function realizarRegister(settings){
    console.log('Lanzando la consulta a la API');
    fetch(url+ '/users', settings)
    .then(Response=>{
        console.log(Response)
        if(Response.ok !=true){
            alert('Alguno de los datos es incorrecto')
        }
        return Response.json();
    })
    .then(data=>{
        console.log('Promesa cumplida: ');
        console.log(data);

        if (data.jwt){
            //guardo con LocalStorage el objeto con el token
            localStorage.setItem('jwt', JSON.stringify(data.jwt));

            //Redireccionamos a la pagina 
            location.replace('/mis-Tareas.html')
        }

    }).catch(err=>{
        console.log('Promesa rechazada: ')
        console.log(err); 
    })
}

})