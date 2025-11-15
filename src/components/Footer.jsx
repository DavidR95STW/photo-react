import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {/* href="../src/html/nosotros.html" -> Link to="/nosotros" */}
        <Link to="/nosotros">Acerca de nosotros</Link>
        <a href="#">Contacto</a>
        <a href="#">Política de Privacidad</a>
      </div>
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        {/* ... otros links sociales ... */}
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} Photo of your life. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;