import { services, type Service } from '../data/site'

type ServicesProps = {
  onOpen: (service: Service) => void
}

export function Services({ onOpen }: ServicesProps) {
  return (
    <section className="section service" id="servicios">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Servicios</p>
          <h2>Lo que puedo hacer contigo.</h2>
          <p>
            Mediación, terapia, evaluación y apoyo complementario. Presencial en
            Providencia u online, según el caso.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <button
              className="service-card"
              type="button"
              key={service.id}
              onClick={() => onOpen(service)}
            >
              <span className="num">{service.number} · {service.tag}</span>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <footer>
                <span>Desde {service.options[0].price}</span>
                <span>Ver detalle →</span>
              </footer>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
