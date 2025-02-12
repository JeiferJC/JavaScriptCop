const li = document.querySelectorAll("li")

//li.style.color= "blue"
  //  li.forEach(l => {
    //if (li.classList.contains("destacado")){
      //  li.classList.remove("destacado")
    //}else{
      //  li.classList.add("destacado")
    //}
    //})

    function toggleDestacado(){
li.forEach(l=>{
    l.classList.toggle("destacado")
})
    }