function ListadoResultado(props){
    return(
        <ul>
{props.resultados.map((elemento, index)=>// el map nos va a renderizar todo  y el index no da como esa key para poder modificar ettc..
<li key={index}>La suma de {elemento.valor1}y {elemento.valor2}  da como resultado:{elemento.resultado}</li>//cada vez que se ejecuted va a agregar un neuvo elemento y react solo renderiza esta linea no todo 
)}
        </ul>
    )
}

export default ListadoResultado;