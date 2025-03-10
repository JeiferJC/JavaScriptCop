
whindow.addEventListener('load', function(){
    /*------------Obtenemos las variables globales */
    const form= document.addEventListener('form');
    const email = document.querySelector('#inputPassword');
    const password= document.querySelector('#inputPassword');
    const url = 'https://petstore.swagger.io/v2/swagger.json';

    /*------------ESCUCHAMOS EL SUBMIT Y PREPARAMOS EL ENVIO-------- */

    form.addEventListener('submit', function(event){
        event.prevendefault();

        //Creamos el cuerpo de la request(peticion)

        const payload= {
            email: email.value,
             password: password.value

        };

        //Configuramos la request del fetch

        const settings={
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type':'application/json'
            }
        }

        //Lanzamos la consulta de login a la API
        realizarLogin(settings);

        //Limpio los campos del formulario
        form.reset();
    });



    // FUNCION2: REALIZAR EL LOGIN ['POST']

    function realizarLogin(settings){
        console.log('Lanzando la consulta a la API...');
        fetch(url+ '/users/login', settings)
        .then(Response=> {
            console.log(Response);
            if (Response.ok != true){
                alert('Alguno de los datos es incorrecto')
            }
            return Response.json();
        })
        .then(data=>{
         console.log('Promesa cumplida');
         console.log(data)
         
         
         if (data.jwt) {
            localStorage.setItem('jwt', JSON.stringify(data.jwt));

        }

        }).catch(err=>{
            console.log('Promesa rechasada');
            console.log(err)
        })
           
    }
})


