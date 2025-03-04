const url= "https://petstore.swagger.io/v2/swagger.json"

const data= {
    id: 0,
    username: "Elkin",
    firstName: "Elkin",
    lastName: "Jimenez",
    email: "ejimen45@mail.com",
    password: "elkin123+" ,
    phone: 3148551823
    
  }

const header= {
    "Content-type": "application/json",
}

fetch(url,{
    method:"POST",
    body: JSON.stringify(data),
    headers: header,
})
.then ((Response)=> Response.json())
.then((json)=>{
    //Aqui obtenemos la respuesta de la API
    console.log("Respuesta ", json)
})
.catch((err)=>{
    
    console.log("Error:", err)
})
