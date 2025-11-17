import React, { useState } from 'react';
import CodigoPromocion from '../components/CodigoPromocion.jsx';
import './Impresiones.css'; // Contiene imp.css

const Impresiones = () => {
  const [size, setSize] = useState('M'); // S, M, L
  const [frame, setFrame] = useState(false);
  const [price, setPrice] = useState(25000); // Precio base de ejemplo

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    // Lógica para actualizar el precio según el tamaño
    let newPrice = 0;
    switch (newSize) {
      case 'S': newPrice = 15000; break;
      case 'M': newPrice = 25000; break;
      case 'L': newPrice = 40000; break;
      default: newPrice = 25000;
    }
    setPrice(newPrice);
  };

  return (
    <>
      <div className="productos-page">
        <h1 className="titulo-area titulo">Impresiones Personalizadas</h1>

        <section className="herramienta-impresion">
          {/* Columna de Previsualización */}
          <div className="previa">
            <div className="lienzo">
              {/* Aquí iría la imagen cargada por el usuario */}
              <div id="imagen-previa" data-tamano={size}>
                {/* Placeholder visual */}
                <img 
                  src="https://placehold.co/200x300/e0e0e0/555555?text=Sube+tu+Foto" 
                  alt="Previsualización de impresión" 
                  style={{ 
                    border: frame ? '10px solid var(--color-secundario)' : 'none',
                    borderRadius: frame ? '5px' : '0',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Columna de Opciones */}
          <div className="panel-opciones">
            <h2>Personaliza tu Impresión</h2>
            
            {/* Opción de Tamaño */}
            <div className="opcion">
              <h3>Tamaño</h3>
              <div className="controles">
                <button className={size === 'S' ? 'active' : ''} onClick={() => handleSizeChange('S')}>Pequeño (S)</button>
                <button className={size === 'M' ? 'active' : ''} onClick={() => handleSizeChange('M')}>Mediano (M)</button>
                <button className={size === 'L' ? 'active' : ''} onClick={() => handleSizeChange('L')}>Grande (L)</button>
              </div>
            </div>
            
            {/* Opción de Marco/Borde */}
            <div className="opcion">
              <h3>Marco Decorativo</h3>
              <div className="controles">
                <button className={!frame ? 'active' : ''} onClick={() => setFrame(false)}>Sin Marco</button>
                <button className={frame ? 'active' : ''} onClick={() => setFrame(true)}>Con Marco</button>
              </div>
            </div>

            {/* Subida de Archivo */}
            <div className="opcion">
              <h3>Sube tu Foto</h3>
              <input type="file" id="upload-image" accept="image/*" />
            </div>

            {/* Resumen y Añadir al Carrito */}
            <div className="resumen">
              <p>Precio Total: <strong>${price.toLocaleString('es-CL')}</strong></p>
              <button type="button" className="btn">Añadir al carrito</button>
            </div>

          </div>
        </section>
      </div>
      
      <CodigoPromocion />
    </>
  );
};

export default Impresiones;