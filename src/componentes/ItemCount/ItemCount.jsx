/* eslint-disable react/prop-types */
import { useState } from "react";

import "./ItemCount.scss";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <section className="item-count">
      <article className="controles">
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
      </article>
      <button onClick={ () => agregarAlCarrito(contador) } className="buttons-detail"> Agregar al carrito </button>
    </section>
  );
};

export default ItemCount;
