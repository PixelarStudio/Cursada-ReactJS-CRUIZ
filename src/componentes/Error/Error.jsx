import { Link } from "react-router-dom";

import "./Error.scss";

const Error = () => {
  return (
    <section>
      <article className="fondo-error">
        <Link to="/">
          <img
            className="img-pad"
            src="./img/Logo.webp"
            alt="Logo de Pro Gamer"
          />
        </Link>

        <p className="fondo-error__h1">404 Not Found</p>
        <p>NO SE ENCONTRO LA PAGINA</p>
      </article>
    </section>
  );
};
export default Error;
