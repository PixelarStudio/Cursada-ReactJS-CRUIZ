import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-content">
        <article className="social-media">
          <ul>
            <li className="esp-li">
              <FaFacebook size={25} />
            </li>
            <li className="esp-li">
              <FaTwitter  size={25}/>
            </li>
            <li className="esp-li">
              <FaLinkedin size={25} />
            </li>
            <li className="esp-li">
              <FaInstagram  size={25}/>
            </li>
          </ul>
        </article>
        <article className="footer-info">
          <p>© 2024 Pro Gamer. Todos los derechos reservados.</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
