import Hijo from "./Hijo"
import styles from "./css/Padre.module.css";// aca lo que se hace es guardar la hoja de estilos a un objeto styles
// import "./App.css"
console.log(styles)
function Padre(){{/*renderiza el componenete hijo tres veces-- le pasa una prop diferente las tres veces y asi muestra los tres nombre en pantalla*/}
    return(
        <div className={styles.container}>/
            <Hijo nombre="Laura"/>
            <Hijo nombre="Martha"/>
            <Hijo nombre="Jhon"/>
        </div>

    )/*aca se trae el styles como objeto*/
}
export default Padre;