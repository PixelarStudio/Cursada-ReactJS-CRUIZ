import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

import "./ItemDetail.scss";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const nuevoProducto = { ...producto, cantidad: contador };
    añadirProducto(nuevoProducto);
    setToggle(true);
  };

  return (
    <section className="item-detail">
      <img className="imagen" src={producto.img} alt={producto.nombre} />
      <article className="texto">
        <h2>{producto.nombre}</h2>
        <p>$ {producto.precio}</p>
        <p>Stock: {producto.stock}</p>
        {toggle ? (
          <>
          <Link to="/carrito" className="finalizar-compra">Finalizar Compra</Link>

          <Link to="/"  className="finalizar-compra">Seguir Comprando</Link>
          
          </>
        ) : (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
      </article>
    </section>
  );
};
export default ItemDetail;
