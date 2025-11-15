import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Componentes de Layout
import Layout from '../components/Layout.jsx';

// Páginas
import Home from '../pages/Home.jsx';
import Cuadros from '../pages/Cuadros.jsx';
import Impresiones from '../pages/Impresiones.jsx';
import Nosotros from '../pages/Nosotros.jsx';
import PortaRetratos from '../pages/PortaRetratos.jsx';

// Definición del enrutador
const router = createBrowserRouter([
  {
    element: <Layout />, // Layout proporciona Header, Footer y estilos globales
    children: [
      { path: '/', element: <Home /> }, 
      { path: '/cuadros', element: <Cuadros /> }, 
      { path: '/impresiones', element: <Impresiones /> }, 
      { path: '/nosotros', element: <Nosotros /> }, 
      { path: '/portaretratos', element: <PortaRetratos /> }, 
      // Manejo de rutas no encontradas
      { path: '*', element: <div style={{textAlign: 'center', padding: '100px'}}><h1>404</h1><p>Página no encontrada</p></div> },
    ],
  },
]);

const RouterApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterApp;