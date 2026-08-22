import { site } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="kicker">{site.role}</p>
        <h1>Un espacio sereno para conversar y acordar.</h1>
        <p className="hero-lead">
          Atención psicológica y mediación familiar en Providencia, también online.
          Un lugar calmo cuando el conflicto o el malestar ya ocupan demasiado.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#reserva">
            Reservar una sesión
          </a>
          <a className="btn btn-ghost" href="#servicios">
            Ver servicios
          </a>
        </div>
        <div className="hero-meta">
          <span>{site.address}</span>
          <span>Online en todo Chile</span>
          <span>Respuesta por email o WhatsApp</span>
        </div>
      </div>

      <div className="hero-visual" role="img" aria-label="Espacio de calma y pausa">
        <div className="hero-card">
          <span>Primera conversación</span>
          <p>No tienes que llegar con todo resuelto. Basta con dar el primer paso.</p>
        </div>
      </div>
    </section>
  )
}
