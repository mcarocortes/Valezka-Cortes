import { useState } from 'react'
import { About } from './components/About'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Knowledge } from './components/Knowledge'
import { Process } from './components/Process'
import { ServiceModal } from './components/ServiceModal'
import { Services } from './components/Services'
import type { Article, Service } from './data/site'

function App() {
  const [detail, setDetail] = useState<Service | Article | null>(null)
  const [selectedService, setSelectedService] = useState('')

  const reserveService = (serviceId: string) => {
    setSelectedService(serviceId)
    setDetail(null)
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip-link" href="#inicio">
        Ir al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services onOpen={setDetail} />
        <Process />
        <Knowledge onOpen={setDetail} />
        <Booking selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer />
      <ServiceModal item={detail} onClose={() => setDetail(null)} onReserve={reserveService} />
    </>
  )
}

export default App
