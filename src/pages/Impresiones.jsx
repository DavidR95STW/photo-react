import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodigoPromocion from '../components/CodigoPromocion.jsx';
import './Impresiones.css';
import './ImpresionesExtras.css';

const Impresiones = () => {
  const [size, setSize] = useState('M');
  const [frameType, setFrameType] = useState('clasico');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [price, setPrice] = useState(25000);

  const frameOptions = {
    clasico: { name: 'Marco Clásico', price: 8000, description: 'Marco de madera clásico con acabado natural' },
    moderno: { name: 'Marco Moderno', price: 12000, description: 'Marco minimalista con diseño contemporáneo' },
    vintage: { name: 'Marco Vintage', price: 15000, description: 'Marco decorativo con detalles ornamentales' },
    sin_marco: { name: 'Sin Marco', price: 0, description: 'Impresión sin marco decorativo' }
  };

  const sizeOptions = {
    S: { name: 'Pequeño (20x25cm)', basePrice: 15000 },
    M: { name: 'Mediano (30x40cm)', basePrice: 25000 },
    L: { name: 'Grande (50x70cm)', basePrice: 40000 }
  };

  const calculatePrice = (selectedSize, selectedFrame) => {
    const basePrice = sizeOptions[selectedSize].basePrice;
    const framePrice = frameOptions[selectedFrame].price;
    return basePrice + framePrice;
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setPrice(calculatePrice(newSize, frameType));
  };

  const handleFrameChange = (newFrame) => {
    setFrameType(newFrame);
    setPrice(calculatePrice(size, newFrame));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getFrameStyle = () => {
    if (frameType === 'sin_marco') return {};
    
    const frameStyles = {
      clasico: {
        border: '12px solid #8B4513',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)'
      },
      moderno: {
        border: '8px solid #2C3E50',
        borderRadius: '4px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)'
      },
      vintage: {
        border: '15px solid #D4AF37',
        borderRadius: '12px',
        borderImage: 'linear-gradient(45deg, #D4AF37, #B8860B) 1',
        boxShadow: 'inset 0 0 15px rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.3)'
      }
    };
    return frameStyles[frameType];
  };

  return (
    <>
      <Header />
      <div className="productos-page">
        <h1 className="titulo-area titulo">Impresiones Personalizadas</h1>

        <section className="herramienta-impresion">
          {/* Columna de Previsualización */}
          <div className="previa">
            <div className="lienzo">
              <div id="imagen-previa" data-tamano={size}>
                <img 
                  src={uploadedImage || "https://placehold.co/300x400/e0e0e0/555555?text=Sube+tu+Foto"} 
                  alt="Previsualización de impresión" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    ...getFrameStyle(),
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Columna de Opciones */}
          <div className="panel-opciones">
            <h2>Personaliza tu Impresión</h2>
            
            {/* Subida de Archivo */}
            <div className="opcion">
              <h3>Sube tu Foto</h3>
              <input 
                type="file" 
                id="upload-image" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="file-input"
              />
              <label htmlFor="upload-image" className="file-label">
                Seleccionar archivo
              </label>
            </div>
            
            {/* Opción de Tamaño */}
            <div className="opcion">
              <h3>Tamaño</h3>
              <div className="controles">
                {Object.entries(sizeOptions).map(([key, option]) => (
                  <button 
                    key={key}
                    className={size === key ? 'active' : ''} 
                    onClick={() => handleSizeChange(key)}
                  >
                    {option.name}
                    <span className="price-tag">${option.basePrice.toLocaleString('es-CL')}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Opción de Marco */}
            <div className="opcion">
              <h3>Tipo de Marco</h3>
              <div className="controles frame-options">
                {Object.entries(frameOptions).map(([key, option]) => (
                  <div key={key} className="frame-option">
                    <button 
                      className={frameType === key ? 'active' : ''} 
                      onClick={() => handleFrameChange(key)}
                    >
                      {option.name}
                      {option.price > 0 && (
                        <span className="price-tag">+${option.price.toLocaleString('es-CL')}</span>
                      )}
                    </button>
                    <p className="frame-description">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumen y Añadir al Carrito */}
            <div className="resumen">
              <div className="price-breakdown">
                <p>Tamaño {sizeOptions[size].name}: <span>${sizeOptions[size].basePrice.toLocaleString('es-CL')}</span></p>
                <p>{frameOptions[frameType].name}: <span>${frameOptions[frameType].price.toLocaleString('es-CL')}</span></p>
                <hr />
                <p className="total">Precio Total: <strong>${price.toLocaleString('es-CL')}</strong></p>
              </div>
              <button type="button" className="btn btn-primary">Añadir al carrito</button>
            </div>

          </div>
        </section>
      </div>
      
      <CodigoPromocion />
      <Footer />
    </>
  );
};

export default Impresiones;