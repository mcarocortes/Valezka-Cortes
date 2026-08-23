import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { services, site, slotsForDate } from '../data/site'

type BookingProps = {
  selectedService: string
  onServiceChange: (id: string) => void
}

type Reservation = {
  service: string
  modality: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  message: string
}

const emptyForm: Reservation = {
  service: '',
  modality: 'Presencial',
  date: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  message: '',
}

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

export function Booking({ selectedService, onServiceChange }: BookingProps) {
  const [form, setForm] = useState<Reservation>({ ...emptyForm, service: selectedService })
  const [sent, setSent] = useState<Reservation | null>(null)

  useEffect(() => {
    setForm((current) => ({ ...current, service: selectedService }))
  }, [selectedService])

  const slots = useMemo(() => slotsForDate(form.date), [form.date])
  const serviceName =
    services.find((item) => item.id === (form.service || selectedService))?.name ?? 'Consulta'

  const update = (field: keyof Reservation, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const reservation = {
      ...form,
      service: form.service || selectedService,
    }

    const previous = JSON.parse(localStorage.getItem('vc-reservas') || '[]') as Reservation[]
    localStorage.setItem('vc-reservas', JSON.stringify([reservation, ...previous]))
    setSent(reservation)
  }

  const whatsappText = sent
    ? `Hola Valezka, quiero reservar ${serviceName} el ${sent.date} a las ${sent.time} (${sent.modality}). Soy ${sent.name}.`
    : ''

  if (sent) {
    return (
      <section className="section" id="reserva">
        <div className="wrap">
          <div className="success">
            <p className="kicker">Solicitud lista</p>
            <h3>Gracias, {sent.name}.</h3>
            <p>
              Guardé tu reserva de {serviceName} para el {sent.date} a las {sent.time}.
              El siguiente paso es enviarla por WhatsApp o correo para confirmar el cupo.
            </p>
            <div className="modal-actions">
              <a
                className="btn btn-primary"
                href={`https://wa.me/${site.phoneLink}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noreferrer"
              >
                Enviar por WhatsApp
              </a>
              <a
                className="btn btn-line"
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Reserva: ${serviceName}`)}&body=${encodeURIComponent(whatsappText)}`}
              >
                Enviar por correo
              </a>
              <button
                className="btn btn-line"
                type="button"
                onClick={() => {
                  setSent(null)
                  setForm({ ...emptyForm, service: selectedService })
                }}
              >
                Hacer otra reserva
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="reserva">
      <div className="wrap booking">
        <aside className="booking-aside">
          <p className="kicker">Reserva</p>
          <h2>Elige un horario. Yo confirmo el espacio.</h2>
          <p>
            Esta solicitud no ocupa la hora hasta que te responda. Así evitamos
            cruces y puedes contar el motivo con calma.
          </p>
          <ul className="hours">
            {site.hours.map((item) => (
              <li key={item.days}>
                <span>{item.days}</span>
                <strong>{item.time}</strong>
              </li>
            ))}
          </ul>
          <ul className="contact-list">
            <li>
              <span>Consultorio</span>
              <strong>{site.city}</strong>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`https://wa.me/${site.phoneLink}`}>{site.phone}</a>
            </li>
          </ul>
        </aside>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Servicio</span>
            <select
              required
              value={form.service || selectedService}
              onChange={(event) => {
                update('service', event.target.value)
                onServiceChange(event.target.value)
              }}
            >
              <option value="">Selecciona una opción</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Modalidad</span>
            <select value={form.modality} onChange={(event) => update('modality', event.target.value)}>
              <option>Presencial</option>
              <option>Online</option>
            </select>
          </label>

          <label className="field full">
            <span>Fecha</span>
            <input
              type="date"
              required
              min={todayISO()}
              value={form.date}
              onChange={(event) => {
                setForm((current) => ({ ...current, date: event.target.value, time: '' }))
              }}
            />
          </label>

          <div className="field">
            <span>Horario</span>
            <div className="slots">
              {slots.length === 0 ? <p>Elige una fecha para ver horarios.</p> : null}
              {slots.map((slot) => (
                <button
                  className={form.time === slot ? 'slot active' : 'slot'}
                  type="button"
                  key={slot}
                  onClick={() => update('time', slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Nombre</span>
            <input required value={form.name} onChange={(event) => update('name', event.target.value)} />
          </label>

          <label className="field">
            <span>Teléfono</span>
            <input required value={form.phone} onChange={(event) => update('phone', event.target.value)} />
          </label>

          <label className="field full">
            <span>Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => update('email', event.target.value)}
            />
          </label>

          <label className="field full">
            <span>¿Qué te gustaría trabajar?</span>
            <textarea
              required
              value={form.message}
              onChange={(event) => update('message', event.target.value)}
            />
          </label>

          <div className="form-actions">
            <button className="btn btn-primary" type="submit" disabled={!form.time}>
              Solicitar reserva
            </button>
            <span>Recibirás confirmación por email o WhatsApp.</span>
          </div>
        </form>
      </div>
    </section>
  )
}
