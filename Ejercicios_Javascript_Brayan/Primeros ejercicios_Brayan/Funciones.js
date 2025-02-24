// function suma (par1, par2) {
// let valor = par1, par2
// return valor;
// }
// sumar (1, 3)

//arrow fuction 
// let sumar = (a, b) =>{
//     let valor = a+b;
//     return valor;
// }
// sumar(1,3);

//funciones como parametros 
function ejecutor (func){
    //codigo de la funcion
    func(1,2);
    //codigo de la funcion 
}
function sumar(a,b){
    return a + b;
}
ejecutor (sumar);

//CALLBACKS
function saludar(nombre){
    alert ('hola'+nombre);
}
//se usa como parametro en la segunda funcion 
function procesarEntradaUsuario(callback){
    var nombre = prompt('por favor, ingresa tu nombre.');
    callback(nombre);
}
//se ejecuta procesaEntradaUsuario(saludar);

//CLOSURES
function creaFunc(){
    var nombre = "Mozillla";
    function muestraNombre(){
        alert(nombre)
    }
    return muestraNombre;
}
creaFunc();