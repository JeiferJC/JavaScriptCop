const formulario = document.forms[0];
const inputBusqueda= document.querySelector("#busqueda");
const busquedaRealizada = document.querySelector("#busquedasRealizadas");
const deleteBtn = document.querySelector("#delete");

//obtenemis la infor del local para mas tarde almacenarla en memoria
const historialEnMemoria= obtenerBusquedaReralizada();

//


//funcion para buscar google

function busquedaGoogle(criterioBuscado){
    location.href = `https://www.google.com/search?q=${criterioBuscado} `

}


//----funcion para guardar la info buscada

function guardarBusqueda(busqueda){
    //Agrego los datos en memoria
    historialEnMemoria.push(busqueda);
    //mando a guardar en el localStorage
    localStorage.setItem("busquedaRealizada", JSON.stringify(historialEnMemoria));

}

//-----------funcion para obtenrla data del localStorage------//
function obtenerBusquedaReralizada(){
    //Va al deposito permanente y busca el item busquedaRealiadas 
        let historialAlmacenado= JSON.parse(localStorage.getItem('busquedaRealizada'));

        //chequeamos si existe o no algo, si no habia nada previo le mandamos un array vacio

        if(!historialAlmacenado){
            historialAlmacenado=[];
        }
       //---Recorre cada dato y lo imprime
       historialAlmacenado.forEach(e => {
        busquedaRealizada.innerHTML='<p>' +e + '</p>';
        
       });
       return historialAlmacenado;
}


deleteBtn.addEventListener("click", function(){
    localStorage.removeItem('busquedaRealizada');
    busquedaRealizada.innerHTML=''

})

formulario.addEventListener ('submit', function(e){
    e.preventDefault();
    guardarBusqueda(inputBusqueda.value);
    busquedaGoogle(inputBusqueda.value);
    formulario.reset();
})