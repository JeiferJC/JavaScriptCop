import React from "react";//importamos react

class Fruta extends React.Component{// creamos la clase que siempre va a ir 

    render(){// render es un metodo hace la funcion como de una fuincion y con el return metemos lo que necesitamos
        return(
            <li style={{ backgroundColor: "lime", border: "solid 4px"}}>
            <span>{this.props.fruta}</span> - Cantidad: <span>{this.props.cantidad}</span>
        </li>
        );// en los componenetes de clase no es necesario decir que se le va a pasar props sino simplemete se pasa 
    }//props va sumando propiedades
}

export default Fruta;// para exportarlo