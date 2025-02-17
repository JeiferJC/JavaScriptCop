const button = document.getElementById ("toggleButton");
const cuerpo = document.body;
button.addEventListener("click",() =>{
    cuerpo.classList.toggle("dark-mode");
});