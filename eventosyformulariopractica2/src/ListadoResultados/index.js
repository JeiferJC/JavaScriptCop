function ListadoResultados(props){//recibe props de App
    return(
        <ul>

            {props.resultados.map((elemento,index)=>
            <li key={index}> la suma de {elemento.valor1}y {elemento.valor2} da como resultado: {elemento.resultado}</li>
            )}
        </ul>
    )
}
export default ListadoResultados;