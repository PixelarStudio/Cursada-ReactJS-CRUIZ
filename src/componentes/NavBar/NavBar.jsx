import CartWidget from "./CartWidget";
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="ImagenLogo">
        <img src="./img/Logo.png" width={190} alt="" />
      </div>

      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Arma Tu PC</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />

    </nav>
  );
};

export default NavBar;
