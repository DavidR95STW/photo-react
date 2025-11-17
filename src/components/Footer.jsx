import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/" className="footer-link">Inicio</Link>
        <Link to="/nosotros" className="footer-link">Nosotros</Link>
        <Link to="/contacto" className="footer-link">Contacto</Link>
      </div>
      <p className="footer-text">&copy; 2023 Photo of your life. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;