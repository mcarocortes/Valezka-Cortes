import { useState } from 'react'
import { Logo } from './Logo'

const links = [
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#saberes', label: 'Saberes' },
  { href: '#reserva', label: 'Reserva' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={open ? 'header is-open' : 'header'}>
      <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
        <Logo />
        <span>
          <strong>Valezka Cortés</strong>
          <small>Psicología · Mediación</small>
        </span>
      </a>

      <nav className={open ? 'nav open' : 'nav'} aria-label="Principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#reserva" onClick={() => setOpen(false)}>
          Reservar
        </a>
      </nav>

      <a className="btn btn-primary" href="#reserva">
        Reservar
      </a>

      <button
        className="menu-btn"
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? '✕' : '☰'}
      </button>
    </header>
  )
}
