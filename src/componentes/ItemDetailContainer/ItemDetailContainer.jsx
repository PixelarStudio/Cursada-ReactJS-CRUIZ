import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import db from "../../db/Db";

import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams();

  
  useEffect(() => {
    const productoRef = doc(db, "Productos", id);
    getDoc(productoRef).then((respuesta) => {
      const productoDb = { id: respuesta.id, ...respuesta.data() };
      setProducto(productoDb);
    });
  }, [id]);


  return (
    <article>
      <ItemDetail producto={producto} />
    </article>
  );
};
export default ItemDetailContainer