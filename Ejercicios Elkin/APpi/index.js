const apiUrl= 'https://dog.ceo/api/breeds/image/random';

//function callApi(){

   // fetch(apiUrl)
   // .then(respuesta=>{
       // return respuesta.json();//Se llama la img random de la url arriba 'API'
   // })
   // .then(datos=> {
      // loadImageAndShowAlert(datos.message);//el .json se convierte en la variable datos que contiene la img
       //la imagen puesta en la variable datos pasa a loadImageAndShowAlert
    //})
    //.catch (error=>{
       // console.log("ocurrio un error al llamar a la API", error)
    //});
//}

//---Exise una forma de hacer la funcion anterior de manera mas reducida
//metodo async await   el try catch solo funciona con este metodo
async function callApi() {
    try{
        const respuesta = await fetch (apiUrl)
    const datos = await respuesta.json()
    return loadImageAndShowAlert (datos.message)
    }
    catch(error){
            console.log('Ocurrio un error al llamar la API',error)
    }
}


let button= document.querySelector('button');
button.addEventListener('click', callApi);


function loadImageAndShowAlert (src){
    document.querySelector('img'). setAttribute('src',src);//se pone la img al src en html
    alert('img cargada');
}