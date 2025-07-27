import '../styles/MaintenancePage.css';

export default function MaintenancePage() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <h1>Sibana</h1>
        <p>Estamos a preparar algo bonito para si 🌿</p>
        <div className="floating-flower">🌸</div>
      </div>
      <div className="social-section">
          <p>Siga-nos ou entre em contacto:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/sibana.pt" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/sibana.pt" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://github.com/hugaos" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
    </div>
  );
}
