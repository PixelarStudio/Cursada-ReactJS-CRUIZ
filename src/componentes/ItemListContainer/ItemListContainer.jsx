import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import {collection, getDocs, query, where} from "firebase/firestore"
import db from "../../db/Db";

import "./ItemListContainer.scss";

const ItemListContainer = ({ bienvenida }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    
    setCargando(true)

    let consulta
    const productosRef = collection(db, "Productos");

    if(categoria){
      //filtrar data
      consulta = query(productosRef, where("categoria", "==", categoria))
    }else{
      //traer toda la data
      consulta = productosRef
    }

    getDocs(consulta)
      .then((respuesta) => {
      let productosDb = respuesta.docs.map((producto) => {

        return { 
          
          id: producto.id, ...producto.data() 
        
        };
        
      });
      setProductos(productosDb)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))


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
