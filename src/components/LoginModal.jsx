import React from 'react';
import './LoginModal.css';

const LoginModal = () => {
  return (
    // La clase .login-registro es controlada por el checkbox #loginToggle:checked en CSS
    <div className="login-registro">
      <div className="contenedor">
        {/* Botón para cerrar el modal */}
        <label htmlFor="loginToggle" className="cerrar-login">&times;</label>
        
        <div className="caja-principal">
          <h2>Inicia Sesión</h2>
          <form className="login-form">
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Entrar</button>
          </form>
          <p className="registro-link">¿No tienes cuenta? <a href="#">Regístrate</a></p>
          <p className="registro-link"><a href="#">¿Olvidaste tu contraseña?</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;