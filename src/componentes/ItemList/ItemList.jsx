import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {
      productos.map((producto) => (
        <item producto={producto} key={producto.id} />
      ))
      }
    </div>
  )
}

export default ItemList;
