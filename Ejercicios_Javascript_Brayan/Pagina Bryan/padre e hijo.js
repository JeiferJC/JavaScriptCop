//creamos los nodos
const div = document.createElement("div")
const img = document.createElement("img")

//agregamos las clases 
div.classList.add("tarjeta")
img.classList.add("img")

//nodo padre => hijo
div.appendChild(img)

const contenedor = document.querySelector(".contenedor")
contenedor.appendChild(div)
console.log(contenedor)

//atributos dinamicos
const imagenes = document.querySelectorAll("img")

// imagenes.forEach(i => {
//     // i.setAttribute("alt", "imagen")
//     i.alt = "imagen"
    // imagenes.forEach((i,index) => {
    //     if (!i.hasAttribute("alt")) {
    //         i.setAttribute("alt", `imagen-${index+1}`) // hace que el usuario ingrese las imagenes 
    //     }
    
    // const url = prompt("inserte una imagen")
    // i.setAttribute("src",url)

// })
