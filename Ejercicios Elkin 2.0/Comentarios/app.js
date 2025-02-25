const formulario = document.querySelector("form");
const inputComentario= document.querySelector("#comentario");
const cajaComentarios= document.querySelector(".Comentarios");
const borrarBtn= document.querySelector("#borrar");
let listadoComentarios =[];


//-----------Recopilamos la informacion en localStorage

const comentarosAlmacenados= JSON.parse(localStorage.getItem('comentariosLocalStorage'));


if (comentarosAlmacenados!= null){
    listadoComentarios= comentarosAlmacenados;
}

renderizamosComentarios (listadoComentarios);

//-----------------------------------------------//

function guardarNuevoComentario(comentario){
    listadoComentarios.push(comentario);
   
    localStorage.setItem('comentariosLocalStorage', JSON.stringify(listadoComentarios));

}

function renderizamosComentarios(listado){
    //Siempre limpio la caja, antes de agregar nuevo contenido
    cajaComentarios.innerHTML="";
    //renderizo cada comentario del listado 
    listado.forEach(element => {
        cajaComentarios.innerHTML+= '<p>'+element+'</p>';
    });
}

function validarComentario(comentario){
    let resultado= true;

    if(comentario.length <3){
        resultado=false;
        presentarError();
    }
    return resultado;
}
//---SE LLAMA ESTA FUNCION SI EL COMENTARIO TIENE MENOS DE 3 CARACTERES ---//
function presentarError(){
    const error =document.querySelector('#error')
    error.classList.remove('oculto');
    setTimeout(function(){
        error.classList.add('oculto');
    },1500)
}


borrarBtn.addEventListener("click", function(){
localStorage.removeItem('comentariosLocalStorage');
location.reload();
})




//----FUNCION PARA EL BOTON EL TYPE Submit---///

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (validarComentario(inputComentario.value)) {
        guardarNuevoComentario(inputComentario.value);
        renderizamosComentarios(listadoComentarios);
    }
    formulario.reset();
});