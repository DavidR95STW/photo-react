import React from "react";
import './Card.css';

const Card = ({ nombre, descripcion, precio, imagen }) => (
  <div className="card-producto">
    <div className="card-img-container">
      <img src={imagen} alt={nombre} className="card-img" />
    </div>
    <div className="card-info">
      <h3 className="card-title">{nombre}</h3>
      <p className="card-desc">{descripcion}</p>
      <div className="card-precio">${precio.toLocaleString('es-CO')}</div>
    </div>
  </div>
);

export default Card;
