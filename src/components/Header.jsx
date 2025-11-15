// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* href="./index.html" -> Link to="/" */}
      <Link className="logo" to="/">Photo of your life</Link>

      {/* Menú hamburguesa responsivo */}
      <input type="checkbox" id="menu-toggle" hidden />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

      {/* Navegación */}
      <nav className="nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/cuadros">Cuadros</Link></li>
          <li><Link to="/portaretratos">Porta Retratos</Link></li>
          <li><Link to="/impresiones">Impresiones</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>
      </nav>

      {/* Botones de acción. El login usa la label para el checkbox de Layout */}
      <div className="acciones">
        <label htmlFor="loginToggle" className="login-btn"><i className="fa-solid fa-user"></i></label>
        <button className="carrito"><i className="fa-solid fa-cart-shopping"></i></button>
      </div>
    </header>
  );
};

export default Header;