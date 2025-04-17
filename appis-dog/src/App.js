import { useEffect, useState } from "react";
import "./styles.css";

export default function App(){
    const [isloading, setIsloading] =useState(true);
    const [imageUrl, setImageUrl] =useState(null);
    useEffect(()=>{
        fetch("https://images.dog.ceo/breeds/affenpinscher/n02110627_12431.jpg")
.then ((response)=>response.json())//se parcea-- se esper ala respuesta
.then ((dog)=> {//se segundapromesa --donde se obtiene la tracuccion de la primeer respuesta.. esta con la espectiva que se pueda complir o no
   setImageUrl(dog.massage)
   setIsloading(false);
    });
},[])
//se pone en accion este retunr 
if(isloading){
    return(
    <div>
    <h1>Cargando..</h1>
</div>
    );
}
return (
    
        <div>
        <img src={imageUrl} alt="Mira que lindo perro "/>
    </div>
        );
   


}