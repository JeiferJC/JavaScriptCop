import { useEffect } from "react";
import {link} from 'react-router-dom';
import styles from '../styles/character.module.css'

const Character= ({name, image, id})=>{
    useEffect(()=>{
        return()=>{
            console.log('Se desmonto'+ name);
        }
    },[])
}

return (
    <div className={styles.character}>
        <img src={image} alt={name}></img>
        <h3>{name}</h3>
        <link className={styles.link} to={`character/${id}`}>Detalle</link>

    </div>
)

export default Character;