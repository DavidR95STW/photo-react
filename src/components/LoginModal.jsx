import React from 'react';
import './LoginModal.css';
import loginImg from '../views/img/Login.jpg';

const LoginModal = () => {
  return (
    // La clase .login-registro es controlada por el checkbox #loginToggle:checked en CSS
    <div className="login-registro">
      <div className="contenedor modal-large">
        {/* Botón para cerrar el modal */}
        <label htmlFor="loginToggle" className="cerrar-login">&times;</label>

        <div className="login-grid">
          <div className="login-image" style={{ backgroundImage: `url(${loginImg})` }} aria-hidden="true" />

          <div className="caja-principal">
            <h2>Inicia Sesión</h2>
            <form className="login-form">
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
              <button type="submit">INGRESAR</button>
            </form>

            <div className="or">O continúa con</div>
            <div className="socials">
              <button className="social google" aria-label="Google">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.35 11.1h-9.2v2.9h5.3c-.23 1.3-1.1 2.4-2.35 3.05v2.53h3.8c2.2-2.02 3.45-5 3.45-8.48 0-.57-.05-1.12-.15-1.65z" fill="#EA4335"/><path d="M12.15 21c2.7 0 4.98-.9 6.64-2.44l-3.8-2.53c-1.07.72-2.43 1.14-3.84 1.14-2.95 0-5.45-1.98-6.34-4.63H1.87v2.9C3.53 18.9 7.46 21 12.15 21z" fill="#34A853"/><path d="M5.81 12.08c-.19-.57-.3-1.17-.3-1.78s.11-1.21.3-1.78V5.6H1.87A9.98 9.98 0 0 0 1 12.3c0 .92.13 1.82.37 2.67l3.44-2.89z" fill="#FBBC05"/><path d="M12.15 4.5c1.47 0 2.8.5 3.85 1.48l2.88-2.88C17.12 1.45 14.84.5 12.15.5 7.46.5 3.53 2.6 1.87 5.6l3.44 2.89C6.7 6.48 9.2 4.5 12.15 4.5z" fill="#4285F4"/></svg>
              </button>
              <button className="social facebook" aria-label="Facebook">
                <svg width="12" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.04H8.1v-2.91h2.34V9.41c0-2.31 1.37-3.59 3.47-3.59.97 0 1.98.17 1.98.17v2.18h-1.12c-1.1 0-1.44.68-1.44 1.38v1.65h2.45l-.39 2.91h-2.06v7.04C18.34 21.19 22 17.06 22 12.07z" fill="#1877F2"/></svg>
              </button>
              <button className="social instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#fff" strokeWidth="1.2" fill="url(#g)"/><circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.2" fill="none"/><circle cx="17.5" cy="6.5" r="0.9" fill="#fff"/></svg>
              </button>
            </div>
            <button type="button" className="create-account" onClick={() => {
              const l = document.getElementById('loginToggle'); if (l) l.checked = false;
              const r = document.getElementById('registerToggle'); if (r) r.checked = true;
            }}>Crear cuenta</button>

            <p className="registro-link">¿No tienes cuenta? <button type="button" className="open-register" onClick={() => {
              // Abrir modal de registro y cerrar modal de login
              const l = document.getElementById('loginToggle'); if (l) l.checked = false;
              const r = document.getElementById('registerToggle'); if (r) r.checked = true;
            }}>Crear una cuenta</button></p>
            <p className="registro-link"><a href="#">Recuperar contraseña</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;