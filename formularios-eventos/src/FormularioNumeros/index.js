function FormularioNumeros(props){
    return(//onsubmit es como el prevent deafault para que no recargue la pagina y nos permite activar la funcion que le pasamos
        <form onSubmit={props.onSumar}>
            <p> Ingrese primer valor: <input type="text" name="valor1"/></p>
            <p> Ingrese segundo valor: <input type="text" name="valor2"/></p>
            <input type="submit" value="sumar"/>
        </form>
    )//el submit es como el boton ya que con submit envia el formulario
}
export default FormularioNumeros;