import "./Form.scss";

const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
  return (
    <article className="article-form">
      <article>
        <h2>FINALIZAR COMPRA</h2>
      </article>

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
          required
        />

        <label htmlFor="telefono">TELEFONO</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Ingrese su Telefono"
          value={datosForm.telefono}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="email">CORREO ELECTRONICO</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese su Correo Electronico"
          value={datosForm.email}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="emailRepetido">REPETIR CORREO ELECTRONICO</label>
        <input
          type="email"
          id="emailRepetido"
          name="emailRepetido"
          placeholder="Repita su Correo Electronico"
          value={datosForm.emailRepetido}
          onChange={guardarDatosInput}
          required
        />

        <button className="button-d" type="submit">
          ENVIAR PEDIDO
        </button>
      </form>
    </article>
  );
};
export default Form;
