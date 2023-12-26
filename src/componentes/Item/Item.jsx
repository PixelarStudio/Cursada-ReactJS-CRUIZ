/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./Item.scss";

const Item = ({ producto }) => {
  return (
    <div className="productCard">
      <img className="imagProduc" src={producto.img} alt={producto.nombre} />
      <p className="productos__h2"> {producto.nombre} </p>
      <p className="productos__precio">$ {producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">
        VER DETALLE
      </Link>
    </div>
  );
};
export default Item;
