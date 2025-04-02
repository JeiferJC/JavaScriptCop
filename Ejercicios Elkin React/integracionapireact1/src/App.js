import {useEffect, useState} from "react";
import "./style.css"


export default function App(){
    
    const [isLoanding, setIsloanding]= useState(true);
    const[ imageUrl, setImageUrl]= useState(null);

    useEffect(()=>{
      if (isLoanding){
      fetch("https://dog.ceo/api/breeds/image/random")
       //Se parcea para que se pueda leer la api
      .then((response)=> response.json())
      //Se pone como objeto la api
      .then((dog)=>{
        setImageUrl(dog.message)
        setIsloanding(false)
      })
    }
    },[isLoanding])
       const randomDog=()=>{
        setIsloanding(true);
       }
    if (isLoanding){
      return(
        <div>
            <h1>Cargando</h1>
        </div>
      )
    }
    return(
        <div>
            <img src={imageUrl} alt="Mira que lindo perro"></img>
            <button onClick={randomDog}>Otro perro</button>
        </div>
    )




}