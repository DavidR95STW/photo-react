import React from 'react';
import PromoVentas from '../components/PromoVentas.jsx';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <>
      <main>
        {/* Banner de Presentación */}
        <section className="nosotros">
          <div className="marcoNombre">
            <img src="/src/views/img/nosotros/banner-nosotros.jpg" alt="Equipo de trabajo" />
            <h2 className="quienesSomos">Quiénes Somos</h2>
          </div>
        </section>

        {/* Misión, Visión, Valores, etc. */}
        <section className="contenido-nosotros">
          {/* ... Migrar el resto del contenido de nosotros.html aquí ... */}
          <div className="texto-mision">
            <h3>Nuestra Historia</h3>
            <p>Somos un equipo apasionado por la fotografía...</p>
          </div>
        </section>
      </main>
      
      {/* Sección promocional reutilizable */}
      <PromoVentas />
    </>
  );
};

export default Nosotros;