import {useState, useContext} from "react";
import Form from "./Form"
import { CartContext } from "../CartContext/CartContext";
import {addDoc, collection} from "firebase/firestore"
import db from "../../db/Db";

import "./Checkout.scss"

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: ""
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
      setIdOrden(respuesta.id)
      //limpiar carrito
      borrarCarrito()
    });
  };

  return (
    <div>
      {idOrden ? (
        <section className="orden-fin">
          <article className="genera-orden">
          <h1>Su pedido fue ingresado con Exito.</h1>
          <h4>Su N° de orden es: <span>{idOrden}</span> </h4>
          </article>
          <article className="genera-orden">
          <h2>Muchas Gracias por Su Compra</h2>
          </article>
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
