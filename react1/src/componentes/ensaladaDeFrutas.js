import React from "react";
import Fruta from "./Fruta";

class EnsaladaDeFrutas extends React.Component{
    render(){
        return(
         <div>
            <h1> Ensaldad de frutas</h1>
            <ul>
                <Fruta fruta='Manzanas' cnatidad='10'/>
                <Fruta fruta='Peras' cnatidad='20'/>
                <Fruta fruta='Naranjas' cnatidad='30'/>
                <Fruta fruta='Uvas' cnatidad='50'/>
                <Fruta fruta='Bananas' cnatidad='12'/>
            </ul>
         </div>
        );
    }
}export default EnsaladaDeFrutas;