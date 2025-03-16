const data = {
    title: "buenos dias", "buenas tardes y buenas noches",
    userId: "123KAS$38#sDJ",
}

fetch ("url",{
    method: "POST",
    body: JSON.stringify(data),
    headers:{
        "const-type": "application/json; charset=UTF-8",
    }
})

.then((response)=> response.json())
.then((json)=>{
    //aqui obtenemops la respuesta de la API
    console.log("Respuesta",json);
})
.catch ((jason ) =>{
console.log("Respuesta", json);
})