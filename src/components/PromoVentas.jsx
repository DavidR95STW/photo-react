import React from 'react';
import './PromoVentas.css';

const PromoVentas = () => {
  return (
    <section className="promVentas">
      <div className="estadisticas">
        <div className="caja1">
          <h2>mas de 6 millones <br /><span>de personas felices</span></h2>
        </div>
        <div className="caja2">
          <h2>mas de 20 mil <br /><span>proyectos impresos</span></h2>
        </div>
      </div>

      <div className="cajaPromo">
        <p>
          Obtén ofertas exclusivas y novedades de 
          <strong className="marca">Photo of your life</strong>
        </p>
        <div className="form">
          <input type="text" placeholder="Tu correo..." />
          <button>Incribirse</button>
        </div>
      </div>
    </section>
  );
};

export default PromoVentas;