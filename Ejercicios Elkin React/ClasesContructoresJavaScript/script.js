class Coche{


    constructor(marca, modelo,puertas){
       this.marca= marca;
       this.modelo= modelo;
       this.puertas=puertas;
    }
/*metodo */
    mostrarCoche(){

        document.body.innerHTML+=`
         <h1>${this.marca}</h1>
         <h1>${this.modelo}</h1>
         <h1>${this.puertas}</h1>
        `
       
    }
}
/*objetos */
let coche1= new Coche('for', 'fiesta', 5);
let coche2= new Coche('lambo', 'gallardo', 2);

console.log(coche1)
console.log(coche2)

coche1.mostrarCoche;
coche2.mostrarCoche;