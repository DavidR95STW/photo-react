import React from "react";
import "./CodigoPromocion.css";

const CodigoPromocion = () => {
  return (
    <section className="codigo-promocion-bg">
      <video
        className="codigo-promocion-video-bg"
        src={"/src/views/img/VideoCodigo.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="codigo-promocion-content">
        <h2 className="codigo-promocion-title">¡Obtén tu código de promoción!</h2>
        <p className="codigo-promocion-desc">Suscríbete y recibe un descuento exclusivo para tu próxima compra. ¡Aprovecha la oportunidad de imprimir tus mejores recuerdos!</p>
        <p className="codigo-promocion-line">Obtén ofertas exclusivas y novedades de <span className="codigo-promocion-brand">Photo of your life</span></p>
        <form className="codigo-promocion-form">
          <input type="email" placeholder="Tu correo..." className="codigo-promocion-input" />
          <button type="submit" className="codigo-promocion-btn">Obtener código</button>
        </form>
      </div>
    </section>
  );
};

export default CodigoPromocion;
