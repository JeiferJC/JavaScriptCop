import React from "react";
import Padre from "./Padre";
import styles from "./css/Hijos.module.css"
function Hijos (props){
       return(
         <div className= {styles.container}>
            <h2>Nombre del Hijo: {props.nombre}</h2>
            
         </div>

       );

}
export default Hijos;