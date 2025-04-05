// import "./App.css";

//APLICACNDO ESTILOS DESDE JSX


function Hijo (props){// recibe props siempre del padre-- en este caso de el Padre.js
        return(
<div className="Hijo">
<h2>Nombre del hijo: {props.nombre}</h2>
</div>
        )//aca pasa las props
        
    }

export default Hijo;
//modulazrizando el CSS
//perimte repetir el nombre de las cases
//al modulariuzar lo que hacemos es copiar una hoja de estilos en un objeto js y se aplicand desde el objeto
