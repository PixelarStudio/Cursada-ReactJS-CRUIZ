import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar">
      <Link to="/">
        <img className="img-pad" src="./img/Logo.webp" width={250} alt="Logo de Pro Gamer" />
      </Link>

      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/categorias/almacenamiento">ALMACENAMIENTO</Link>
        </li>
        <li>
          <Link to="/categorias/procesadores">PROCESADORES</Link>
        </li>
        <li>
          <Link to="/categorias/gpu">PLACAS DE VIDEO</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
