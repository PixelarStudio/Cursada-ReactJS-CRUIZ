import { useState, useEffect } from "react";
import obtenerProductos from "../Utilidades/data";
import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        setProductos(respuesta);
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        console.log("Se finalizo la Promesa");
      });
  }, []);

  return (
    <div id="App" className="ItemList">
      <h1>{saludo}</h1>
    
      <ItemList productos={productos}/> 
    </div>
  );
};

export default ItemListContainer;
