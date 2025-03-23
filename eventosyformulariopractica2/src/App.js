import ListadoResultados from "./ListadoResultados"
import formularioNumeros from "./FormularioNumeros"
import { useState } from "react"; //Sirve para almacenar 

function App(){
    const [operaciones, setOperaciones]= useState([]);//se alamcena cada persona de agregar persona

    function agregarPersona(event){// este 'event' es la funcion que recibe 
    // de formularios la funcion [props.onSubmit]
        event.preventDefault();
        const v1 = parseInt(event.target.valor1.value);
        const v2 = parseInt (event.target.valor2.value);

        const suma= v1+v2;

        const nuevo={
            resultado: suma,
            valor1: v1,
            valor2: v2
        }

        setOperaciones([nuevo, ...operaciones])//..operaciones hace referencia a operaciones hechas 
        // anteriormente y se pone aqui para que se guarde y no se reescriba
        //  cuando se aplique nuevamente el arreglo 'NUEVO'
        event.target.valor1.value="";//despues de usado el array se
        //  vacia para poder volver a usar sin errores
        event.target.valor2.value="";
    }


    return(
        <div>
            //Se hace esto para poder guardar las funciones hecas y exportarlas para renderizar
            <formularioNumeros onSumar={agregarPersona}/>
            <ListadoResultados resultados={operaciones}/>
        </div>
    )
}

export default ListadoResultados;