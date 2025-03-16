fetch ("https://rickandmortyapi.com/api/character/?page=2")// fetch es una promesa
.then(respuesta =>{
    console.log(respuesta)// este .then es una promesa 
    return respuesta.json()

    .then(data=> {
        console.log(data.results);// aca se utio;iza otr opara visualizarlo 
    })
    .catch(error =>{
        console.log(error);// por si ocurre un error que lo muestre en la pagina 
    })
})