import React from "react";
import Fruta from './components/Fruta';

class EnsaladaDeFrutas extends React.Component {
    render(){
        return(
            <div>
                <h1> Ensalada de fruta</h1>
                <ul>
                    <Fruta fruta ="Manzanas" cantidad ="10"/>
                    <Fruta fruta ="Peras" cantidad ="20"/>
                    <Fruta fruta ="Naranjas" cantidad ="10"/>
                    <Fruta fruta ="Uvas" cantidad ="5"/>
                    <Fruta fruta ="Bananas" cantidad ="1"/>
                </ul>
            </div>/*se le pasa los atributos como en html fruta del anterior y props fruta la caracterisitcas*/
        );{/* cada compoenen en este caso fruta so naparte y no afecta a los otros si se modifica */}
    }
}
export default EnsaladaDeFrutas;