import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="ImagenLogo">
        <img src="./img/logo.png" width={215} alt="Logo de Pro Gamer" />
      </div>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categorias/almacenamiento">Almacenamiento</Link>
        </li>
        <li>
          <Link to="/categorias/procesadores">Procesadores</Link>
        </li>
        <li>
          <Link to="/categorias/placasdevideo">Placas de Video</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
