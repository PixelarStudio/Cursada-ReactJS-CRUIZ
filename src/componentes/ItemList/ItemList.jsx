import Item from "../Item/Item";

import "./ItemList.scss";

const ItemList = ({ productos }) => {
  return (
    <ul className="item-list">
      {productos.map((producto) => (
        <li key={producto.id}>
          <Item producto={producto} key={producto.id} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
