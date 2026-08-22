import { useEffect } from 'react'
import type { Article, Service } from '../data/site'

type Detail = Service | Article

type ServiceModalProps = {
  item: Detail | null
  onClose: () => void
  onReserve?: (serviceId: string) => void
}

function isService(item: Detail): item is Service {
  return 'options' in item
}

export function ServiceModal({ item, onClose, onReserve }: ServiceModalProps) {
  useEffect(() => {
    if (!item) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="kicker">{isService(item) ? item.tag : item.kicker}</p>
        <h3 id="modal-title">{isService(item) ? item.name : item.title}</h3>

        {isService(item) ? (
          <>
            <p>{item.summary}</p>
            {item.options.map((option) => (
              <div className="option" key={option.title}>
                <strong>{option.title}</strong>
                <p>{option.detail}</p>
                <p className="price">{option.price}</p>
              </div>
            ))}
            {item.note ? <p>{item.note}</p> : null}
          </>
        ) : (
          item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}

        <div className="modal-actions">
          {isService(item) && onReserve ? (
            <button className="btn btn-primary" type="button" onClick={() => onReserve(item.id)}>
              Reservar este servicio
            </button>
          ) : null}
          <button className="btn btn-line" type="button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
