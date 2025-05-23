import { useEffect } from "react";
import {Link} from 'react-router-dom';
import styles from '../styles/character.module.css'

const Character= ({name, image, id})=>{
    useEffect(()=>{
        return()=>{
           
        }
    },[])


    return (
        <div className={styles.character}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <Link className={styles.link} to={`character/${id}`}>Detalle</Link>
    
        </div>
    )
}



export default Character;