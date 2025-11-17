import React from "react";
import Nosotrosimg from '../views/img/nosotros/Nosotrosimg.jpg';
import CuadrosImg from '../views/img/nosotros/nostrosCuadros.png';
import PortaImg from '../views/img/nosotros/nostrosPorta.jpg';
import ImpresionImg from '../views/img/nosotros/nostrosimprecion.png';
import { Link } from "react-router-dom";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros">
      <div className="nosotros-header">
        <img
          src={Nosotrosimg}
          alt="Encabezado Acerca de Nosotros"
          className="nosotros-header-img"
        />
        <h1 className="nosotros-title">
          Capturamos tus momentos y los transformamos en arte permanente
        </h1>
      </div>

      <section className="nosotros-presentacion">
        <p className="nosotros-description">
          En <span className="nosotros-brand">Photo of your life</span> convertimos tus fotografías en piezas únicas. Diseñamos marcos y retablos artesanales, con materiales de alta calidad y acabados que realzan cada historia.
        </p>
      </section>

      <section className="nosotros-galeria">
        <div className="galeria-item">
          <Link to="/cuadros">
            <img
              src={CuadrosImg}
              alt="Cuadros personalizados"
              className="galeria-img"
            />
            <div className="galeria-msg">¡Cuadros personalizados para tus recuerdos más especiales!</div>
          </Link>
        </div>
        <div className="galeria-item">
          <Link to="/portaretratos">
            <img
              src={PortaImg}
              alt="Portarretratos únicos"
              className="galeria-img"
            />
            <div className="galeria-msg">Portarretratos artesanales que destacan tus mejores momentos</div>
          </Link>
        </div>
        <div className="galeria-item">
          <Link to="/impresiones">
            <img
              src={ImpresionImg}
              alt="Impresiones de alta calidad"
              className="galeria-img"
            />
            <div className="galeria-msg">Impresiones de alta calidad para conservar tus historias</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
