import "./App.css"
import { useEffect, useState } from "react";
import Character from "./components/Character";
import styles from "./styles";


const endpoint = "https://rickandmortyapi.com/api/character/?page="

function App(){
    const [loanding, setLoading]=useState(true)
    const [personajes,setPersonajes]= useState([])
     //Esto declara el numero de pagina 
    const [page, setpage]=useState(1)

    useEffect(()=>{
        //Se concatena page al endpoint para que se coloque el numero de pagina en la url y se pueda cambiar de pagina
        fetch(endpoint+page)
        .then((response)=>response.json())
        .then ((data)=>{
            setPersonajes(data.results)
            setLoading(false)
        })
    }, [page])

    const handleNext=()=>{

        setpage((page+1))
    }

    const handlePrev =()=>{
        if (page>1){
            setpage(page-1)
        }
    }

    if(loanding){
        return(
            <h3>Obteniendo personajes </h3>
        )
    }

}