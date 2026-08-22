import { articles, type Article } from '../data/site'

type KnowledgeProps = {
  onOpen: (article: Article) => void
}

export function Knowledge({ onOpen }: KnowledgeProps) {
  const [featured, ...rest] = articles

  return (
    <section className="section" id="saberes">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Saberes</p>
          <h2>Para entender el proceso antes de llegar.</h2>
          <p>
            Textos breves, en lenguaje claro. La información también construye
            confianza.
          </p>
        </div>

        <div className="knowledge-grid">
          <button className="article" type="button" onClick={() => onOpen(featured)}>
            <span className="kicker">{featured.kicker}</span>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
          </button>

          <div className="article-stack">
            {rest.map((article) => (
              <button
                className="article small"
                type="button"
                key={article.id}
                onClick={() => onOpen(article)}
              >
                <span className="kicker">{article.kicker}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
