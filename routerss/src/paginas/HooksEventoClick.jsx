import { Link } from "react-router-dom";

const HooksEventoClick = () => {
  //se hace esta funcion para poner un alerta cuando se ejecute el onClick
  //las funciones en react tieneden a que empiecen siempre con handle
  const handlePresioname = () => {
    alert("hola que tal");
  };
  const presionameConParametros = (nombre) => {
    console.log("tu nombre es: " + nombre);
  };
  return (
    //dos formas de hacer onclick una para parametros y la otra no
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Evento Click
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Click</h3>

      <button className="btn btn-danger" onClick={handlePresioname}>
        <i className="fa-solid fa-hand-holding-heart"></i>
        Click
      </button>
      <button className="btn btn-primary"onClick={() =>{handlePresioname()}}> Click</button>
      <button className="btn btn-warning"onClick={() =>{presionameConParametros('Brayan')}}> Click con funcion flecha</button>
    </div>
  );
};
export default HooksEventoClick;
