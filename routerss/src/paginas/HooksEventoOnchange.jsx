import {Link} from 'react-router-dom'
import {useState} from 'react'

const HooksEventoOnchange = () => {
    const [nombre, setNombre] = useState('')

    const handleFormulario=()=>{
console.log(first)
    }
  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Evento OnChange
          </li>
        </ol>
      </nav>
      <hr />
      <h3> Evento OnChange</h3>
      <p>
        <input type="text" className="form-control" placeholder="Escribe algo" onChange={(e) => {console.log(e.target.value)}}/>
      </p>
      <button className="btn btn-warning">Enviar</button>
    </>
  )
}

export default HooksEventoOnchange