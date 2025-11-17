
import React from 'react';
import Card from '../components/Card';
import CodigoPromocion from '../components/CodigoPromocion.jsx';
import productosData from '../api/portaretratos.json';
import './PortaRetratos.css';

const PortaRetratos = () => {
  const productos = productosData || [];

  return (
    <>
      <div className="productos-page">
        <h1 className="titulo-area titulo">Porta Retratos</h1>
        <section className="galeria-productos">
          {productos.map((prod, idx) => (
            <Card
              key={idx}
              nombre={prod.nombre}
              descripcion={prod.descripcion}
              precio={prod.precio}
              imagen={prod.imagen}
            />
          ))}
        </section>
      </div>
      <CodigoPromocion />
    </>
  );
};

export default PortaRetratos;