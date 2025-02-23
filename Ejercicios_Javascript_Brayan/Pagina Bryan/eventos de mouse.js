window.addEventListener("load", function(){
    let button = document.querySelectorAll(".botones");

    for (let i = 0; i <button.length; i++ ) {
        button[i].addEventListener("click",function(){
        this.style.color= "green"
    })
}
})

window.addEventListener("load", function(){
    let button = document.getElementById("toggleButton");
if (button){
   button.addEventListener("mouseover", function (evento){
        this.style.backgroundColor = "blue";
       });
   button.addEventListener("mouseout",function(evento){
        this.style.backgroundColor = "";
    });
}
});
window.addEventListener("load", function(){
    let button = document.querySelectorAll(".botones");
   button.forEach(element => {
    element.addEventListener("mouseover", function (evento){
        this.style.backgroundColor = "blue";
       });
   element.addEventListener("mouseout",function(evento){
        this.style.backgroundColor = "";
   });
  
    });
});