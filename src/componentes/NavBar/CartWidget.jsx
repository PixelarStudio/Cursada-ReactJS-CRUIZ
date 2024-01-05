import './CartWidget.scss'
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react"


const CartWidget = () => {
  const {carrito, totalCantidad} = useContext(CartContext)

  return (
    <Link to="/carrito" id="cartwidget" className="CartWidget">
            <img src="/img/carrito.png" alt="icono del carrito" />

      <p className="p-count">{ carrito.length !== 0 && <p>{totalCantidad()}</p> }</p>
    </Link>
  );
};

export default CartWidget;
