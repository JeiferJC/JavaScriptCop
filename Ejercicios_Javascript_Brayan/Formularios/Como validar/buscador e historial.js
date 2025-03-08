const formulario = document.forms[0]; //es igual que utilizar el queryselector[]y aca se pone la posicion de donde esta el form
const inputBusqueda =document.querySelector("#busqueda");
const busquedasRealizadas = document.querySelector("#busquedas-realizadas");
const deleteBtn = document.querySelector("#delete");

//se obtiene la informacion del local para luego almacenarla enmemoria
const historialEnMemoria = obtenerBusquedasRealizadas();
//funcion para uscar en gogole
function busquedasGoogle (criterioBuscado){
    location.href =`https://www.google.com/search?q=${criterioBuscado}`
}
function guardarBusqueda (busqueda) {
     historialEnMemoria.push(busqueda);
     localStorage.setItem("busquedasRealizadas", JSON.stringify(historialEnMemoria));// localstorage es un metodo de js en el cual se restaura a 0 la ppagina cuando se retrocede; el cual utiliza setitem aqui guarda dos datos el string y 
}
function obtenerBusquedasRealizadas (){
    //va al deposito permanente y busca el item busquedasRealizadas.
    let historialAlmacenado = JSON.parse(localStorage.getItem('busquedasRealizadas'));//aca se obtiene el dato con getItem....se hacel el setitem y despues getitem para que se genere un historial 
    //aca se pone parse para volverloo a convertir en objeto


//chequeamos  si existe o no algo y si no hay nada le mandamos un array vacio
if(!historialAlmacenado){
    historialAlmacenado=[];
}

    busquedasRealizadas.innerHTML = `<p>${historialAlmacenado.join(" - ")}</p>`
    return historialAlmacenado;
       
}
    
deleteBtn.addEventListener("click",()=> {
    localStorage.removeItem("busquedasRealizadas")
    busquedasRealizadas.innerHTML =``

})
formulario.addEventListener("submit",function(event){
    event.preventDefault();
    guardarBusqueda(inputBusqueda.value);
    busquedasGoogle(inputBusqueda.value);

    formulario.reset();//el reset quita lo que uno escribio en el input de busqueda
    
})