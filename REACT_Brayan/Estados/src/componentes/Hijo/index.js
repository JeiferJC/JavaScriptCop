import React from "react"

class Hijo extends React.Component{
    render(){// siempre que se utilizan clases debemos utilizar el this-- quiere decir este componenete que estoy creadno 
        return(
            <div>
            <h1>Componente HIJO</h1>
            <h2>El contador esta {this.props.count}</h2>
            <button> onClick={()=> this.props.suma()}Sumar</button>
            <button> onClick={()=> this.props.resta()}Restar</button>

            </div>
        )//el array function=> se hace para que apenas oprima se ejecute el boton y tambien no ocurra qu ese ejecute otra accion antes q esto
    }
//ACA SE PUEDE DECIR QUE EL HIJO LE ESTA MODIFICANDO AL PADRE Y EL PADRE ES EL QUE ESTA HACIENDO EL CONTADOR 
//TAMBIEN ESTE EJERCICIO SE PODRIA HACER TODO ENE L PADRE 
}
export default Hijo;
