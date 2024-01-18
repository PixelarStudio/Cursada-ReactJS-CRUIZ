import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { toast } from 'react-toastify';


import Form from "./Form";
import db from "../../db/Db";

import "./Checkout.scss";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: "",
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrder = (event) => {
    event.preventDefault();
    if (datosForm.email === datosForm.emailRepetido) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };

      subirOrden(orden);
    } else {
      toast.error("Por favor, repite el correo electrónico.", {
        style: {
          backgroundColor: "#ffa500", 
          color: "#404042",
          fontWeight: "bold",
        },
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id);
      borrarCarrito();
    });
  };

  return (
    <section>
      {idOrden ? (
        <section className="orden-fin">
          <article className="genera-orden">
            <h3>SU PEDIDO FUE INGRESADO CON EXITO</h3>
          </article>

          <article className="ident-pedido">
            <article className="genera-orden">
              <h4>
                EL IDENTIFICADOR DE SU PEDIDO ES: <span> {idOrden}</span>
              </h4>
            </article>

            <article className="genera-orden">
              <h4>MUCHAS GRACIAS POR SU COMPRA!</h4>
            </article>
          </article>

          <Link to="/">
            <button className="button-d">
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
    </section>
  );
};

export default Checkout;
