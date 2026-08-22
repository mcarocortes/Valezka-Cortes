import { processSteps } from '../data/site'

export function Process() {
  return (
    <section className="section pros" id="proceso">
      <div className="wrap process-layout">
        <div className="process-content">
          <div className="section-head">
            <p className="kicker">Cómo trabajamos</p>
            <h2>Un camino previsible, sin sorpresas.</h2>
          </div>
          <div className="process">
            {processSteps.map((step) => (
              <article className="step" key={step.number}>
                <span className="num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div
          className="process-visual"
          role="img"
          aria-label="Camino sereno, metáfora de un proceso acompañado"
        />
      </div>
    </section>
  )
}
