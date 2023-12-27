import { useState, useEffect } from "react";
import obtenerProductos from "../Utilidades/data"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";

import "./ItemListContainer.scss";

const ItemListContainer = ({ bienvenida }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const {categoria} = useParams()

  useEffect(() => {
    setCargando(true);
    obtenerProductos
      .then((respuesta) => {
        if (categoria) {
          const productosFiltrados = respuesta.filter(
            (producto) => producto.categoria === categoria);
          setProductos(productosFiltrados);
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [categoria]);

  return (
    <>
      {cargando ? (
        <div className="cargando">
          <FadeLoader />
        </div>
      ) : (
        <div className="item-list-container">
          <p className="bienvenida">{bienvenida}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
