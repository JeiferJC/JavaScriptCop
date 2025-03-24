import React, {useState}from "react";
import styles from "./Contador.module.css"

function Contador (){
    const [count, setCount]= useState(0);
    return(
        <div className={styles.container}>
          <h1 className={styles.titulo}>El contador esta en: {count}</h1>
          <button className={styles.boton} onClick={()=>setCount(count+1)}>sumar 1</button>
          <button className={styles.restar} onClick={()=>setCount(count-1)}>restar1</button>
        </div>
    )
}

export default Contador;