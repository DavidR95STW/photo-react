// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import LoginModal from './LoginModal.jsx';

// Importa los estilos globales (de la carpeta styles)
import '../styles/globales.css'; 
import './Layout.css'; 

const Layout = () => {
  return (
    <>
      {/* Checkbox oculto que controla el modal de login/registro (desde index.html) */}
      <input type="checkbox" id="loginToggle" hidden />
      
      {/* Modal de Login/Registro */}
      <LoginModal />

      <Header />
      <main>
        {/* Outlet renderiza el componente de la ruta activa */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;