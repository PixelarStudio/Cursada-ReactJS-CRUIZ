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
        <Link to="/">
          <button className="button-d">

          <b>VOLVER AL INICIO</b>
          </button>
        </Link>
      </article>
    );
  }

  return (
    <section id="carritocontainer" >
      <table className="carrito-table">
        <thead>
          <tr>
            <th>IMAGEN</th>
            <th>ID</th>
            <th>PRODUCTO</th>
            <th>PRECIO</th>
            <th>CANTIDAD</th>
            
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => (
            <tr key={producto.id}>
              <td>
                <img
                  src={producto.img}
                  alt={producto.nombre}
                  style={{ width: "120px", height: "120px" }}
                />
              </td>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>
                <button
                  className="button-trash"
                  onClick={() => borrarProducto(producto.id)}
                >
                  <FaTrashAlt size={30} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <article className="totalprecio">
        <h3>TOTAL: {totalPrecio()}</h3>
      </article>

      <button className="buttons" onClick={borrarCarrito}>
        <b>VACIAR CARRITO</b>
      </button>
      
      <Link to="/checkout">
      <button className="buttons">
        <b>FINALIZAR PEDIDO</b>
      </button>
     </Link>
    </section>
  );
};
export default Carrito;
