class Coche{

    constructor(marca,modelo,puertas){
        this.marca=marca; //todo dato que entre en marca entra por aca en la propiuedad this la cual esta creadno el objeto marca
        this.modelo=modelo;
        this.puertas=puertas;
    }
//Crear metodo 
//los metodos son las funciones de los objetos-- a diferencia de las funciones es que es propio d este objeto y no se puede utilizar con otro 
mostrarCoche(){//se le pone += para que se vaya sumando y aparescand los dos objetos o mas y no solo uno en el DOM
    document.body.innerHTML += `
    <h1> ${this.marca}</h1>
    <h2> ${this.modelo}</h2>
    <h2> ${this.puertas} puertas</h2>
    `
}//se pone el this porque esta haciendo referencia a la marca y demas
}

//CREACION DEL OBJETO
//primero se declara una variable
let coche1= new Coche("Ford","fiesta","5");
let coche2= new Coche("Renault","Clio","4");
console.log(coche1)

coche1.mostrarCoche();
coche2.mostrarCoche();