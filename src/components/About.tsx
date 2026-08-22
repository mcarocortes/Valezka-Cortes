import portraitImg from '../assets/vc_3.jpg'
import { site, stats, values } from '../data/site'

export function About() {
  return (
    <section className="section" id="enfoque">
      <div className="wrap about-grid">
        <div className="about-media">
          <div className="portrait">
            <img src={portraitImg} alt="Valezka Cortés" />
            <div className="portrait-badge" />
          </div>
          <p className="about-quote">
            <em>"El primer paso no es resolver el problema, sino tener la voluntad de escucharnos."</em>
          </p>
        </div>

        <div className="about-copy">
          <p className="kicker">Confianza</p>
          <h2>Acompañar sin prisa, con método y respeto.</h2>
          <p>
            Soy {site.name}, psicóloga y mediadora familiar. Trabajo con personas,
            parejas y familias que necesitan un espacio protegido: a veces para
            entenderse, a veces para llegar a un acuerdo que evite un juicio.
          </p>
          <p>
            Mi visión es simple: facilitar la resolución pacífica de los conflictos
            familiares y cuidar el bienestar emocional, con empatía y con un marco
            profesional claro.
          </p>

          <div className="stats">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="values">
            {values.map((value) => (
              <article className="value" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
