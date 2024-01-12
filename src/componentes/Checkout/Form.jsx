

import "./Form.scss"

const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
  return (

      <article className="article-form"> 
      <form onSubmit={enviarOrder} >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su Nombre" value={datosForm.nombre} onChange={guardarDatosInput} />

        <label htmlFor="telefono">Telefono</label>
        <input type="text" id="telefono" name="telefono" placeholder="Ingrese su Telefono" value={datosForm.telefono} onChange={guardarDatosInput} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Ingrese su Correo" value={datosForm.email} onChange={guardarDatosInput} />

        <button type="submit">Enviar Pedido</button>
      </form>
      </article>

  )
}
export default Form