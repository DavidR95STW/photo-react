import React from 'react';
import { Link } from 'react-router-dom';
import PromoVentas from '../components/PromoVentas.jsx';
import './Cuadros.css';

const Cuadros = () => {
  return (
    <>
      <main className="productos-page">
        <h1 className="titulo-area titulo">Cuadros Decorativos</h1>
        
        <section className="galeria-productos">
          {/* Ejemplo de producto. Reemplazar <a> con Link */}
          <Link className="producto" to="/producto/cuadro-1">
            <img src="../views/img/Cuadros/cuadroVe.png" alt="Nombre producto" />
            <div className="info">
              <p><strong>Nombre producto</strong><br/>Descripción</p>
              <span>$10.000</span>
            </div>
          </Link>
          {/* ... más productos ... */}
        </section>
      </main>

      <PromoVentas />
    </>
  );
};

export default Cuadros;