import { Link } from "react-router-dom"
import {useState} from "react";

const HooksUseState = () => {

    const [contador, setContador] = useState(0); //se inicializa el contador en 0 y se le da un valor inicial
  const handleIncrementar = () => {
    setContador(contador + 1); 
  }
  
    return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            UseState
          </li>
        </ol>
      </nav>
      <hr />
      <h3>UseState</h3>
      <button className="btn btn-info" onClick={handleIncrementar }>Incrementar</button>
    <hr/>
    <p>Contador: {contador}</p>
    </>
  )
}

export default HooksUseState