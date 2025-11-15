// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import LoginModal from './LoginModal.jsx';
import Registro from './Registro.jsx';

// Importa los estilos globales (de la carpeta styles)
import '../styles/globales.css'; 
import './Layout.css'; 

const Layout = () => {
  return (
    <>
      {/* Checkbox oculto que controla el modal de login/registro (desde index.html) */}
      <input type="checkbox" id="loginToggle" hidden />
      {/* Checkbox oculto para el modal de registro */}
      <input type="checkbox" id="registerToggle" hidden />
      
      {/* Modal de Login/Registro */}
      <LoginModal />
      {/* Modal de Registro */}
      <Registro />

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