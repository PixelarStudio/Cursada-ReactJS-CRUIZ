import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Carrito.scss";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <article className="carritovacio">
        <h2>El carrito se encuentra vacio</h2>
        <Link to="/" className="buttons">
         <b>VOLVER AL INICIO</b>
        </Link>
      </article>
    );
  }

  return (
    <section id="carritoContainer">
      <ul className="carritoItem">
        {carrito.map((producto) => (
          <li key={producto.id}>
            <img
              src={producto.img}
              alt={producto.nombre}
              style={{ width: "120px", height: "120px" }}
            />
            <p>
              <b>ID: </b> {producto.id}
            </p>
            <p>
              <b>PRODUCTO: </b> {producto.nombre}
            </p>
            <p>
              <b>PRECIO: </b>$ {producto.precio}
            </p>
            <p>
              <b>CANTIDAD: </b> {producto.cantidad}
            </p>
            <button
              className="button-trash"
              onClick={() => borrarProducto(producto.id)}
            >
              <FaTrashAlt size={30} />
            </button>
          </li>
        ))}
      </ul>
    
      <article className="totalprecio">
        <h3>TOTAL: {totalPrecio()}</h3>
      </article>

        <button className="buttons" onClick={borrarCarrito}>
        <b>VACIAR CARRITO</b>
      </button>

    </section>
  );
};
export default Carrito;
