function formularioNumeros (props){
    return(
        <form onSubmit={props.onSumar}>
            <p>ingrese primer valor: <input type="text" name="Valor1"/></p>
            <p>ingrese segundo valor: <input type="text" name="Valor2"/></p>
            <input type="submit" value="sumar"/>
        </form>
    )

    
}
export default formularioNumeros;