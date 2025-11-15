import React, { useEffect, useState, useRef } from 'react';
import './Carrusel.css';
import { Link } from 'react-router-dom';

const Carrusel = ({ items = [], intervalo = 4500 }) => {
  const [indice, setIndice] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndice((prev) => (prev + 1) % items.length);
    }, intervalo);
    return () => resetTimeout();
  }, [indice, items.length, intervalo]);

  if (!items || items.length === 0) return null;

  return (
    <div className="carrusel">
      <div className="carrusel-inner" style={{ transform: `translateX(-${indice * 100}%)` }}>
        {items.map((it, i) => (
          <div className="carrusel-item" key={i} aria-hidden={i !== indice}>
            {it.link ? (
              <Link to={it.link} className="carrusel-link">
                  <img src={it.src} alt={it.alt || it.title} />
                  <div className="carrusel-overlay" />
              </Link>
            ) : (
                <>
                  <img src={it.src} alt={it.alt || it.title} />
                  <div className="carrusel-overlay" />
                </>
            )}
            <div className="carrusel-caption">
              <h2>{it.title}</h2>
              {it.cta && <Link className="carrusel-cta" to={it.link || '#'}>{it.cta}</Link>}
            </div>
          </div>
        ))}
      </div>

      {/* Indicador segmentado debajo del carrusel: cada segmento representa un slide */}
      <div className="carrusel-segments" role="tablist" aria-label="Indicadores del carrusel">
        {items.map((_, i) => (
          <button
            key={i}
            className={`segment ${i === indice ? 'active' : ''}`}
            onClick={() => setIndice(i)}
            aria-label={`Ir al slide ${i + 1}`}
            role="tab"
            aria-selected={i === indice}
          />
        ))}
      </div>

      <div className="carrusel-controls">
        <button className="prev" onClick={() => setIndice((indice - 1 + items.length) % items.length)} aria-label="Anterior">‹</button>
        <button className="next" onClick={() => setIndice((indice + 1) % items.length)} aria-label="Siguiente">›</button>
      </div>
    </div>
  );
};

export default Carrusel;
