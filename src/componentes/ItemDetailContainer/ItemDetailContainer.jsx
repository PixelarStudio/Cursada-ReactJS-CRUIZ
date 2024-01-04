import { useEffect, useState } from "react"
import obtenerProductos from "../Utilidades/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.scss"
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()

  
  useEffect(()=>{
    obtenerProductos
      .then((respuesta)=> {
        const productoEncontrado = respuesta.find( (prod)=> prod.id === id)
        setProducto(productoEncontrado)
      })
      .catch((err)=>{
        console.log(err)
      })

  }, )

  return (
    <article>
      <ItemDetail producto={producto} />
    </article>
  )
}
export default ItemDetailContainer