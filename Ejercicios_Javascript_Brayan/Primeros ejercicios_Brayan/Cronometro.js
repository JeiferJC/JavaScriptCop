window.addEventListener("load",function(){

    const botonInicio = document.querySelector("#iniciar")
    const valor = this.document.querySelector("#valor")
let n = 0 
let intervalid;


function intervalo() {
 intervalid = setInterval(() => {
    valor.innerText = n++
}, 1000)
}

botonInicio.addEventListener("click", () => {
    intervalo()
});

const pausa  = document.querySelector("#pausa")

pausa.addEventListener("click", ()=>{
        clearInterval(intervalid);
    
})
const stop = document.querySelector("#stop")

stop.addEventListener("click", ()=>{
    n = 0
    valor.innertext = n
})

const acelerar = document.querySelector("#acelerar")

    function acelerarn () {
        setInterval(() => {
           valor.innerText = n++
       }, 500)
       }
       
acelerar.addEventListener("click", acelerarn)
})
