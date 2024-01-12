import { useState, useContext } from "react";
import Form from "./Form";
import { CartContext } from "../CartContext/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/Db";
import "./Checkout.scss";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrder = (event) => {
    event.preventDefault();
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: totalPrecio(),
    };

    subirOrden(orden);
  };

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id);
      borrarCarrito();
    });
  };

  return (
    <div>
      {idOrden ? (
        <section className="orden-fin">
          <article className="genera-orden">
            <h3>SU PEDIDO FUE INGRESADO CON EXITO</h3>
          </article>

          <article className="ident-pedido">
            <article className="genera-orden">
              <h4>
                SU IDENTIFICACION DE PEDIDO ES: <span>{idOrden}</span>{" "}
              </h4>
            </article>

            <article className="genera-orden">
              <h4>MUCHAS GRACIAS POR SU COMPRA 🛒</h4>
            </article>
          </article>

          <Link to="/">
            <button className="buttons-fin">
              <h5>VOLVER AL INICIO</h5>
            </button>
          </Link>
        </section>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrder={enviarOrder}
        />
      )}
    </div>
  );
};
export default Checkout;
