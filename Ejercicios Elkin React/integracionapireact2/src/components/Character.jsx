import { useEffect } from "react";
import styles from './styles/character.module.css'


const Character = ({name, image})=>{
    useEffect(()=>{
        return ()=>{
            console.log('Se desenmonto un componente')
        }
    },[])

    return(
        <div className={styles.character}>
            <img src={img} alt={name}></img>
            <h3>{name}</h3>
        </div>
    )
}
export default Character;