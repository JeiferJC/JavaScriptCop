import { Link } from "react-router-dom";

// PARA MODIFICAR UN HOOK ES MEDIANTE UN EVENTO
const Hooks = () => {
  return (
    <>
      <h1>Hooks</h1>

      <ul>
        <li>
          <Link to="/Hooks/evento/click">Evento Click</Link>
        </li>
        <li>
          <Link to="/Hooks/useState">UseState</Link>
        </li>
        <li>
          <Link to="/Hooks/evento/onChange">onChange</Link>
        </li>
      </ul>
    </>
  );
};

export default Hooks;
