// valink, link
import { NavLink, Link } from "react-router-dom";

const Rutas = () => {
  let id = 12;
  let slug = "lo-que-sea"; // se pone href para direccionar a donde quiero que me lleve el link
  return (
    // se utiliza Navlink y link para que no se recargue tanto la pagina y se vea mejor
    //con Navlink sale como clase y con link da solo el link sin clase pero ambos sirven para direccionar
    <div>
      <h1>Rutas</h1>
      <ul>
        {/* <li>
            <a href="Home"> Home </a>
        </li>
        <li>
            <a href="Sobre-Nosotros"> Sobre Nosotros</a>
        </li> */}

        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <Link to="Sobre-Nosotros"> Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/rutas/path/1/hola-mundo"> Parametros Path</Link>
        </li>
        <li>
          <Link to={`/rutas/path/${id}/${slug}`}> Parametros Path</Link>
        </li>
        <li>
          <Link to={`/rutas/path/${id}`}> Parametros Path</Link>
        </li>
      </ul>
    </div> // forma dianmica y estatica
  );
};

export default Rutas;
