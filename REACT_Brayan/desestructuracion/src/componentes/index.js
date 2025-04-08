import React, {useState} from "react";

function Contador(){
    
    const [count,setCount]= useState(0)// se le pasa count el cual es el nombre y setcount es seter--- 0 para que arranque de 0 
    return (// el setcount con useState ya lo trae y en si es toda la funcion.. y ya se utiliza es este setcount para modificar cosas
    <div>
        <h1> El contador esta en: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Sumar 1</button>
        <button onClick={()=>setCount(count-1)}>Restar 1</button>
    </div>// cuando se aprieta un boton se ahce la funcion y se le suma uno 
    )
}
export default Contador;