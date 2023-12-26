/* eslint-disable react/prop-types */
import "./ItemDetail.scss";

const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail">
      <img className="imagen" src={producto.img} alt={producto.nombre} />
      <div className="texto">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
      </div>
    </div>
  );
};
export default ItemDetail;