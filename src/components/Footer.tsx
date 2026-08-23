import { Logo } from './Logo'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo size={42} />
          <p>
            <strong>{site.name}</strong>
          </p>
          <p>{site.role}</p>
        </div>
        <div>
          <p>{site.address}</p>
          <p>{site.city}</p>
          <p>{site.email}</p>
        </div>
      </div>
      <div className="wrap">
        <small>© {new Date().getFullYear()} {site.name}. Sitio diseñado por Macarena Caro</small>
      </div>
    </footer>
  )
}
