import ListadoResultados from "./ListadoResultados";
import FormularioNumeros from "./FormularioNumeros";
import {useState} from "react";//pra trabajar con estados se ncesita importar

function App(){// el useState nos devuelve un array con dos valores-- uno es el estado y el otro es el setter el cual es una funcion para modificar el estado.
    const[operaciones, setOperacion] = useState([]);// en operaciones se va guardando lo oque setoperaciones le va pasando el cual es un array-- le pones arrray vacio[]
 // el set nos habilita hacer modificaiones en el estado operaciones
    function sumar(event) { // la pasamos como props el evento -- el cual vendria siendo el evento click
event.preventDefault();
const v1 = parseInt(event.target.valor1.value)//evento=submit, target=todo el formulario, valor1=imput, value= valor quye esta 
const v2 = parseInt(event.target.valor2.value)
const suma = v1+v2;
const nuevo = {//armamos el objeto
   resultado: suma,
   valor1: v1,
   valor2: v2
}
//se pushea al nuevo array el cual es el estado y lo va actulizar
   setOperacion([nuevo,...operaciones])//le agregamos el objeto "nuevo" al array del estado operaciones que ya habia .. osea le agregamos algo nuevo y se mantienen
   event.target.valor1.value="";
   event.target.valor2.value="";
}
return (// esto es para que muestre en pantalla 
    <div>
        <FormularioNumeros onSumar={sumar}/>
        <ListadoResultados resultados={operaciones}/>
    </div>
);
}
export default App;