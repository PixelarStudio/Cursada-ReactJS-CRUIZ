
const Item = ({producto}) => {
  return (
    <div>
      <div className="card" key={producto.id}>
        <p>{producto.nombre}</p>
        <p>{producto.img}</p>
        <p>Stock: {producto.stock}</p>
        <p>{producto.precio}</p>
      </div>
    </div>
  );
};

export default Item;
