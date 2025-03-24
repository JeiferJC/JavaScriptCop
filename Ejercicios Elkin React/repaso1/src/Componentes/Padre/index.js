import React from "react";
import styles from "./css/Padre.module.css"
import Hijos from "./Hijos"
console.log(styles)


function Padre (props){
    return(
        
        <div className={styles.container}>
            <head>
            <h1>Hola</h1>
            </head>

            <main>
                <h1>hola</h1>
            <div>
                <Hijos nombre= 'Francisco'/>
                <Hijos nombre= 'Carlos'/>
                 <Hijos nombre= 'Martha'/>
            </div>
            </main>
            
            <footer>
                <h4>Este es el footer</h4>
            </footer>
        
        </div>
       
    );
}

export default Padre;