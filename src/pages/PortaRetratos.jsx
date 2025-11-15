import React from 'react';
import { Link } from 'react-router-dom';
import PromoVentas from '../components/PromoVentas.jsx';
import './PortaRetratos.css';

// Componente para una tarjeta de producto reutilizable (opcional, pero buena práctica)
const ProductCard = ({ img, name, description, price, to }) => (
  <Link className="producto" to={to}>
    <img src={img} alt={name} />
    <div className="info">
      <p><strong>{name}</strong><br />{description}</p>
      <span>{price}</span>
    </div>
  </Link>
);

const PortaRetratos = () => {
  // Datos de ejemplo para la galería, basados en PortaRetratos.html
  const products = [
    { id: 1, img: "../views/img/PortaRetrato/pot1.jpg", name: "Porta Básico", description: "Madera clásica", price: "$8.000" },
    { id: 2, img: "../views/img/PortaRetrato/pot2.jpg", name: "Porta Moderno", description: "Diseño minimalista", price: "$12.500" },
    { id: 3, img: "../views/img/PortaRetrato/pot3.jpg", name: "Porta Vintage", description: "Acabado envejecido", price: "$15.000" },
    { id: 4, img: "../views/img/PortaRetrato/pot4.jpg", name: "Porta Familiar", description: "Para múltiples fotos", price: "$22.000" },
    { id: 5, img: "../views/img/PortaRetrato/pot5.jpg", name: "Porta Mural", description: "Ideal para pared", price: "$18.000" },
    // Añade más productos según tu PortaRetratos.html
  ];

  return (
    <>
      <div className="productos-page">
        <h1 className="titulo-area titulo">Porta Retratos</h1>
        
        <section className="galeria-productos">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              img={product.img}
              name={product.name}
              description={product.description}
              price={product.price}
              to={`/producto/${product.id}`} // Ruta de ejemplo, ajusta si tienes páginas de detalle
            />
          ))}
        </section>
      </div>

      <PromoVentas />
    </>
  );
};

export default PortaRetratos;