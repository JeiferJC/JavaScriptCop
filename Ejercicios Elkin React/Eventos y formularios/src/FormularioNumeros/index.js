function formularioNumeros (props){
    return(
        <form onSubmit={props.onSumar}>
            <p>Su nombre : <input type="text" name="nombre1"/></p>
            <p>ingrese su apellido: <input type="text" name="apellido1"/></p>
            <input type="submit" value="Agregar"/>
        </form>
    )

    
}
export default formularioNumeros;