// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      const parsedUser = JSON.parse(loggedUser);
      setTimeout(() => setUser(parsedUser), 0);
    }
  }, []);

  const toggleMenu = () => setOpen(prev => !prev);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    // Navegar a una ruta de búsqueda (si existe) con query param
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setSearch('');
    setOpen(false);
  };

  return (
    <header className="site-header">
      {/* href="./index.html" -> Link to="/" */}
      <Link className="logo" to="/">Photo of your life</Link>

      {/* Menú hamburguesa responsivo (botón controlado) */}
      <button
        className="menu-icon"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        {/* simple svg icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Navegación */}
      <nav id="primary-navigation" className={`nav ${open ? 'open' : ''}`} aria-label="Navegación principal">
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/cuadros" onClick={() => setOpen(false)}>Cuadros</Link></li>
          <li><Link to="/portaretratos" onClick={() => setOpen(false)}>Porta Retratos</Link></li>
          <li><Link to="/impresiones" onClick={() => setOpen(false)}>Impresiones</Link></li>
          <li><Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link></li>
        </ul>
      </nav>

      {/* Botones de acción y buscador agrupados */}
      <div className="acciones">
        <form className="search" role="search" aria-label="Buscar en el sitio" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            name="q"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar"
          />
          <button
            type="submit"
            aria-label="Buscar"
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                // en móvil abrimos el overlay en lugar de submit directo
                e.preventDefault();
                setMobileSearchOpen(true);
              }
            }}
          >
            <svg className="icon icon-search" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>

        {user ? (
          <div className="user-info">
            <span className="user-initials">{user.iniciales}</span>
            <button onClick={() => {
              localStorage.removeItem('loggedUser');
              setUser(null);
            }} className="logout-btn">Cerrar sesión</button>
          </div>
        ) : (
          <label htmlFor="loginToggle" className="login-btn" aria-hidden="false">
            <svg className="icon icon-user" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 13c2.5 0 4.5-2 4.5-4.5S14.5 4 12 4 7.5 6 7.5 8.5 9.5 13 12 13z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 20c0-3.2 3.6-5.5 8-5.5s8 2.3 8 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </label>
        )}

        <button className="carrito" aria-label="Carrito">
          <svg className="icon icon-cart" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 3h2l2.2 9.2a1 1 0 0 0 .98.78h8.64a1 1 0 0 0 .98-.78L21 6H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="20" r="1.2" fill="currentColor" />
            <circle cx="18" cy="20" r="1.2" fill="currentColor" />
          </svg>
          <span className="cart-badge">0</span>
        </button>
      </div>

      {/* Overlay de búsqueda para móvil */}
      {mobileSearchOpen && (
        <div className="mobile-search-overlay" role="dialog" aria-modal="true">
          <form className="mobile-search-form" onSubmit={(e) => {
            e.preventDefault();
            const q = search.trim();
            if (!q) return;
            navigate(`/search?q=${encodeURIComponent(q)}`);
            setSearch('');
            setMobileSearchOpen(false);
            setOpen(false);
          }}>
            <input
              autoFocus
              type="search"
              placeholder="Buscar en el sitio..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar en el sitio"
            />
            <button type="submit" aria-label="Buscar">Buscar</button>
            <button type="button" className="close-mobile-search" aria-label="Cerrar búsqueda" onClick={() => setMobileSearchOpen(false)}>×</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;