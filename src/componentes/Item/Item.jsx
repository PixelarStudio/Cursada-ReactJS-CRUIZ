import { Link } from "react-router-dom";

import "./Item.scss";

const Item = ({ producto }) => {
  return (
    <article className="productcard">
      <img className="imagproduc" src={producto.img} alt={producto.nombre} />
      <p className="productos__nombre"> {producto.nombre} </p>
      <p className="productos__precio">$ {producto.precio} </p>
      <p className="productos__stock">Stock: {producto.stock} </p>
      <Link to={`/detalle/${producto.id}`} className="buttons-i">
        VER DETALLE
      </Link>
    </article>
  );
};
export default Item;
