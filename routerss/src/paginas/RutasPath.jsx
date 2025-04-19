import { useParams } from "react-router-dom"// me ayuda a resivir los parametro que le paso por la url

const RutasPath = () => {
    const {id, slug} = useParams();// id y slug son los nombres de los parametros que le paso por la url
  // se utiliza la desestructuracion para obtener los valores de los parametros que le paso por la url
    return (//la lista nos permite ir mostrando el id y el valor del slug con interpoalcion 
    <>
<h2>Ejemplos parametros path</h2>
<ul>
    <li>Id:{id}</li>
    <li>Sug:{slug}</li>
</ul>
    </>
  )
}

export default RutasPath