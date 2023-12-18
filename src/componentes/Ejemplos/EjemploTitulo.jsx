import { useEffect } from "react"

const EjemploTitulo = () => {
//solo se ejecuta en el montaje

    useEffect( ()=> {
// Declaramos el controlador del evento. 
        const mostrarAnchoVentana = ()=> {
            console.log("ancho:", window.innerWidth)
        }
        mostrarAnchoVentana()

    // Declarando el evento a escuchar. 
        window.addEventListener("resize", mostrarAnchoVentana)
//Eliminamos el evento al desmontar el componentepara evitar que se stackeeen (Acumulen)
        return ()=> {
            window.removeEventListener("resize", mostrarAnchoVentana)
        }
    }, [] )


  return (
    <div>
      <p>Soy un Titulo</p>
    </div>
  )
}

export default EjemploTitulo
