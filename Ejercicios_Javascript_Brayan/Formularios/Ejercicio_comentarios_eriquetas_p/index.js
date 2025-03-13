const formulario = document.querySelector("form")
const inputComentario = document.querySelector("#comentario");
const cajaComentarios = document.querySelector(".comentarios");// se toma esta clase para tomar despues las etiquetas de los p 
const borrarBtn = document.querySelector("#delete");

let listadoComentarios =[];//array vacion, pra agregar comentarios hay que empezar de 0

//primer momento donde reoclectamos informacion del

const comentariosAlmacenados = JSON.parse(localStorage.getItem("comentariosLocalStorage")); // lo que hace es almacenar en la variable(comentariosAlmcenados) lo que tenia guardado.

if(comentariosAlmacenados != null){ //!= con esto negamos que un dato no sea igual a otro.... si comentariosAlmacenados si tiene algun dato se ejeciuta lo siguiente pero si esta vacio se queda hay en 0
    listadoComentarios = comentariosAlmacenados;
} 

renderizarComentarios(listadoComentarios);// aca se le pasa el array a la funcion renderizaComentarios

function guardarNuevoComentario(comentario){//(comentario) parametro que tiene la funcion y me sirve para despues ir guardadno hay los coemntarios 
    listadoComentarios.push(comentario);// si tiene nuea informacio la cual se encarga el if con listaCoentarios aca se inserta el cometnario
    localStorage.setItem("comentariosLocalStorage" ,JSON.stringify(listadoComentarios));// ahora aca lo hacemos que no solo se guarde en js sino tambien en localsorage
}     // donde subimos con setItem le ponemos el nombre y se le pasa el array y con el JSON se convierte a un string

function renderizarComentarios(listado) { // ya hemos pasado el array a la funcion le asignamos el aprametro listado
    //siempre se limpia la caja antes de agregar nuevo ocntenido 
    cajaComentarios.innerHTML = "";// con este se evita que se dupliquen
//renderizar cada coemntario del listado
    listado.forEach(elemento => {// aca va a recorrer todo el array obteniendo cada uno por medio de element
        cajaComentarios.innerHTML += `<p>${elemento}</p>`; //  lo inserta en el html en la etiqueta p 
        // esto ocurre porque cajaComentarios fue tomado del div .comentarios
    });

}
// lo oque hace es que si se pone menos de tres caracteres sale error 
function validarComentario(comentario){
    let resultado = true;//si se cumple es true

    if(comentario.length < 3){ // si 3es emnor5 3 caracteres es false
        resultado=false;
    presentarError(); // ademas le quita la clase oculto y le resenta el comentario de error 
    }
    return resultado;// reotorna la variable como true o false
}

function presentarError(){
    const error = document.querySelector("#error");// lo llama

    error.classList.remove("oculto")// le quita la clase con esto

    setTimeout(function(){
        error.classList.add("oculto");
    },1500);// vuelve a anadirla cuando pasa 1.5 segundos
}
borrarBtn.addEventListener("click", ()=>{
 localStorage.removeItem("comentariosLocalStorage")
 location.reload()
})

formulario.addEventListener("submit", function(evento){// boton para que se pueda obtener el input
    evento.preventDefault();// previene que se actulice el formulario.

if(validarComentario(inputComentario.value)){// si se cumple manda true
    guardarNuevoComentario(inputComentario.value);// guarda el comentario y lo renbderiza
    renderizarComentarios(listadoComentarios);
}
formulario.reset();// con reset lo limpia el nput
});