import React from 'react';
import Card from '../components/Card';
import CodigoPromocion from '../components/CodigoPromocion.jsx';
import productosData from '../api/cuadros.json';
import './Cuadros.css';

const Cuadros = () => {
  const productos = productosData || [];

  return (
    <>
      <main className="productos-page">
        <h1 className="titulo-area titulo">Cuadros Decorativos</h1>
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
      </main>
      <CodigoPromocion />
    </>
  );
};

export default Cuadros;