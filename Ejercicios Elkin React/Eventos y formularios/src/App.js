import ListadoResultados from "./ListadoResultados"
import formularioNumeros from "./FormularioNumeros"
import { useState } from "react"; 

function App(){
    const [operaciones, setOperaciones]= useState([]);
     const [contador, setContador]=useState([1]);
    function sumar(event){// este 'event' es la funcion que recibe 
    // de formularios la funcion [props.onSubmit]
        event.preventDefault();
        const v1 = event.target.valor1.value;
        const v2 = event.target.valor2.value;
        
         


        const nuevo={
            id: contador,
            valor1: v1,
            valor2: v2
        }
  //..operaciones hace referencia a operaciones hechas 
        // anteriormente y se pone aqui para que se guarde y no se reescriba
        //  cuando se aplique nuevamente el arreglo 'NUEVO'
        setOperaciones([nuevo, ...operaciones])

        setContador([contador+1])// Incrementar el contador para la próxima persona
        
        event.target.valor1.value="";//despues de usado el array se
        //  vacia para poder volver a usar sin errores
        event.target.valor2.value="";
    }
    return(
        <div>
            //Se hace esto para poder guardar las funciones hecas y exportarlas para renderizar
            <formularioNumeros onSumar={sumar}/>
            <ListadoResultados resultados={operaciones}/>
        </div>
    )
}

export default ListadoResultados;