import "./CartWidget.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);

  return (
    <Link to="/carrito" id="cartwidget" className="cartwidget">
      <img src="/img/carrito.webp" alt="icono del carrito" />

      <p className="p-count">{totalCantidad()}</p>
    </Link>
  );
};

export default CartWidget;
