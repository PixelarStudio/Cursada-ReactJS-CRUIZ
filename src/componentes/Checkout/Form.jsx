import "./Form.scss";

const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
  return (
    <article className="article-form">
      <h2>FINALIZAR COMPRA</h2>

      <form onSubmit={enviarOrder}>
      <h4>DETALLES DE FACTURACION</h4>
        <label htmlFor="nombre">NOMBRE COMPLETO</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su Nombre"
          value={datosForm.nombre}
          onChange={guardarDatosInput}
        />

        <label htmlFor="telefono">TELEFONO</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="Ingrese su Telefono"
          value={datosForm.telefono}
          onChange={guardarDatosInput}
        />

        <label htmlFor="email">CORREO ELECTRONICO</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Ingrese su Correo"
          value={datosForm.email}
          onChange={guardarDatosInput}
        />

        <button type="submit">Enviar Pedido</button>
      </form>
    </article>
  );
};
export default Form;
