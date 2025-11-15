import React from 'react';
import { Link } from 'react-router-dom';
import PromoVentas from '../components/PromoVentas.jsx'; // Aunque no está en index.html, lo incluimos

import './Home.css'; // Estilos de index.css

const Home = () => {
  return (
    <div className="home-content">
      {/* ======= CARRUSEL ======= */}
      <section className="carrusel">
        <div className="slides">
          {/* Ejemplo de slide. Revisa tus rutas de imágenes */}
          <div className="slide">
             <img src="/src/views/img/carrusel1.jpg" alt="Carrusel 1" />
             <div className="overlay">
               <h1>Tu Título de Carrusel</h1>
               <p>Tu Descripción Promocional</p>
               <Link className="carrusel-button" to="/cuadros">Comprar Ahora</Link>
             </div>
          </div>
          {/* ... otros slides ... */}
        </div>
        {/* ... controles del carrusel ... */}
      </section>
      
      {/* ======= SECCIÓN DE PRODUCTOS DESTACADOS ======= */}
      <section className="productos-destacados">
        <div className="item">
          <Link to="/cuadros"> 
            <img className="img_item" src="../src/views/img/cuadroPortada.png" alt="Cuadros Decorativos" />
            <p>Cuadros Decorativos</p>
          </Link>
        </div>
        <div className="item">
          <Link to="/portaretratos">
            <img className="img_item" src="../src/views/img/portaPortada.png" alt="Porta Retratos" />
            <p>Porta Retratos</p>
          </Link>
        </div>
        <div className="item">
          <Link to="/impresiones">
            <img className="img_item" src="../src/views/img/impPortada.png" alt="Impresiones fotográficas" />
            <p>Impresiones fotográficas</p>
          </Link>
        </div>
      </section>

      {/* ======= SECCIÓN PROMOCIONAL ======= */}
      <section className="promo">
        <img src="../src/views/img/banner.jpg" alt="Porta retratos promo" />
        <div className="promo-contenedor">
          <Link className="promo-button" to="/portaretratos">Porta retratos</Link>
        </div>
      </section>
      
      {/* Home NO tiene PromoVentas, pero lo dejamos como referencia si lo agregas */}
    </div>
  );
};

export default Home;