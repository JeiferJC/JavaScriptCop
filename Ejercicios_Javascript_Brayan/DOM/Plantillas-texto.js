// tamplates strings

// const nombre = 'Brayan';
// const miTemplate = `mi nombre es ${nombre}`;
// console.log(miTemplate);

// const miTemplate = `2*3 es ${2*3}`;
// console.log(miTemplate);

// function suma(var1 , var2 ){
//     return var1 + var2
// }
// const temp = `el resultado es ${suma(2,2)}`;
// console.log(temp);

//ejemplo de html
const template = `<h1>hola mundo</h1>`;
// agrega la propiuedad id = "body " al elemento body en HTML
const body = document.getElementById("body");//getElementById es un meotodo que permite seleccionar-
// un elemento HTML por su id.
body.innerText = template;
body.innerHTML = template;

//

