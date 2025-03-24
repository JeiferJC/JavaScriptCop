function ListadoResultados(props){//recibe props de App
    return(
        <ul>

            {props.resultados.map((persona,index)=>
            <li key={index}> Nombre: {persona.valor1}  Apellido: {persona.valor2} id: {persona.id}</li>
            )}
        </ul>
    )
}
export default ListadoResultados;