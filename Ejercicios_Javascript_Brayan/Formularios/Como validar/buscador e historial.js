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
    historialAlmacenado=[];// aca solo esd una validacion ! si no existe algo devulevmelo vacio
}

    busquedasRealizadas.innerHTML = `<p>${historialAlmacenado.join(" - ")}</p>`// se hace esto para que se muestre en la ventana por medio de innetHTml
    // y se hace un < donde se toma el historilaAlmacenado y mediante el join lo separa por medio de un guion o coma o solo un espacio o sino saldria todo pegado.
    return historialAlmacenado;// si se cumploe que hay ifnormacion qye me lo muestre
       
}
    
deleteBtn.addEventListener("click",()=> {//addEventListener para escuchar el click
    localStorage.removeItem("busquedasRealizadas")// lo que hace es borrar el historial
    busquedasRealizadas.innerHTML =``// esto sirve para que el remove tambien se muestre en la pagina y no solo en el console

})
formulario.addEventListener("submit",function(event){
    event.preventDefault();// este previene que se actulice toda la pagina/ o sino no se podria saber que esta pasando por dettras.
    guardarBusqueda(inputBusqueda.value);// tod oesto se ejecuta desde el submit
    busquedasGoogle(inputBusqueda.value);

    formulario.reset();//el reset quita lo que uno escribio en el input de busqueda
    
})