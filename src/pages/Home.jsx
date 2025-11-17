import React from 'react';
import { Link } from 'react-router-dom';
import Carrusel from '../components/Carrusel.jsx';

import bannerMarcos from '../views/img/bannerMarcos.png';
import bannerImp from '../views/img/bannerImp.jpg';
import bannerPorta from '../views/img/bannerPorta.png';

import './Home.css'; // Estilos de index.css

const Home = () => {
  return (
    <div className="home-content">
      {/* ======= CARRUSEL ======= */}
      <section className="carrusel-wrap">
        <Carrusel items={[
          { src: bannerMarcos, title: 'Marcos y Cuadros', alt: 'Marcos', link: '/cuadros', cta: 'Explorar Cuadros' },
          { src: bannerImp, title: 'Impresiones Fotográficas', alt: 'Impresiones', link: '/impresiones', cta: 'Ver Impresiones' },
          { src: bannerPorta, title: 'Porta Retratos', alt: 'Porta Retratos', link: '/portaretratos', cta: 'Ver PortaRetratos' }
        ]} />
      </section>

    
      {/* ======= SECCIÓN PROMOCIONAL ======= */}
      <section className="promo">
        <img src="../src/views/img/banner.jpg" alt="Porta retratos promo" />
        <div className="promo-contenedor">
          <Link className="promo-button" to="/portaretratos">Lo Mas Vendido</Link>
        </div>
      </section>
      
      {/* Home NO tiene PromoVentas, pero lo dejamos como referencia si lo agregas */}
    </div>
  );
};

export default Home;