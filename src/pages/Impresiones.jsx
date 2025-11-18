import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import marcosData from '../api/marcos.json';
import './Impresiones.css';
import './ImpresionesExtras.css';

const Impresiones = () => {
  const [size, setSize] = useState('M');
  const [selectedFrame, setSelectedFrame] = useState(marcosData[0]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [price, setPrice] = useState(25000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sizeOptions = {
    S: { name: 'S', label: '20x25cm', basePrice: 15000 },
    M: { name: 'M', label: '30x40cm', basePrice: 25000 },
    L: { name: 'L', label: '50x70cm', basePrice: 40000 }
  };

  const calculatePrice = (selectedSize, frameData) => {
    const basePrice = sizeOptions[selectedSize].basePrice;
    const framePrice = frameData.price;
    return basePrice + framePrice;
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setPrice(calculatePrice(newSize, selectedFrame));
  };

  const handleFrameChange = (frameData) => {
    setSelectedFrame(frameData);
    setPrice(calculatePrice(size, frameData));
    setIsMenuOpen(false);
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
    if (selectedFrame.id === 0) return {};
    return selectedFrame.style;
  };

  return (
    <>
      <div className="impresiones-container">
        <h1 className="page-title">Personaliza tú Impresión</h1>
        
        <div className="main-content">
          {/* Preview */}
          <div className="preview-section">
            <div className="image-upload-area">
              <input 
                type="file" 
                id="upload" 
                accept="image/*" 
                onChange={handleImageUpload}
                style={{display: 'none'}}
              />
              {uploadedImage ? (
                <img 
                  src={uploadedImage} 
                  alt="Preview" 
                  className="preview-image"
                  style={{
                    ...getFrameStyle(),
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => document.getElementById('upload').click()}
                />
              ) : (
                <label htmlFor="upload" className="upload-placeholder">
                  <div className="upload-icon">📷</div>
                  <div className="upload-text">Carga tu foto aquí</div>
                  <div className="upload-subtext">Haz clic para seleccionar</div>
                </label>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="controls-section">
            {/* Size */}
            <div className="control-group">
              <label className="control-label">Tamaño:</label>
              <div className="size-buttons">
                {Object.entries(sizeOptions).map(([key, option]) => (
                  <button 
                    key={key}
                    className={`size-btn ${size === key ? 'active' : ''}`}
                    onClick={() => handleSizeChange(key)}
                  >
                    {option.name}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Frame */}
            <div className="control-group">
              <label className="control-label">Marco:</label>
              <div className="frame-selector">
                <button 
                  className="frame-menu-btn"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {selectedFrame.name} (+${selectedFrame.price.toLocaleString('es-CL')})
                  <span className="arrow">{isMenuOpen ? '▲' : '▼'}</span>
                </button>
                
                {/* Descripción del marco seleccionado */}
                <div className="frame-description-card">
                  <p className="frame-description">{selectedFrame.description}</p>
                </div>
                
                {isMenuOpen && (
                  <div className="frame-dropdown">
                    {marcosData.map((frame) => (
                      <div 
                        key={frame.id}
                        className={`frame-option ${selectedFrame.id === frame.id ? 'selected' : ''}`}
                        onClick={() => handleFrameChange(frame)}
                      >
                        <div className="frame-info">
                          <span className="frame-name">{frame.name}</span>
                          <span className="frame-desc">{frame.description}</span>
                        </div>
                        <span className="frame-price">${frame.price.toLocaleString('es-CL')}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Price Summary */}
            <div className="price-summary">
              <div className="price-row">
                <span>Tamaño {sizeOptions[size].label}:</span>
                <span>${sizeOptions[size].basePrice.toLocaleString('es-CL')}</span>
              </div>
              <div className="price-row">
                <span>{selectedFrame.name}:</span>
                <span>+${selectedFrame.price.toLocaleString('es-CL')}</span>
              </div>
              <div className="price-total">
                <span>Total:</span>
                <span>${price.toLocaleString('es-CL')}</span>
              </div>
              <button className="add-cart-btn">🛒 Añadir al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impresiones;