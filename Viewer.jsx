import { useEffect, useRef, useState } from 'react'
import { categories, faqGeneral, akut } from './data.js'

function initialer(namn) {
  return namn.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('')
}

const FLIKAR = [
  ['stod', 'Stödområden'],
  ['bokning', 'Boka tid'],
  ['faq', 'Vanliga frågor'],
  ['kontakt', 'Skriv till oss'],
]

const MAX_TECKEN = 900

export default function Viewer({ config }) {
  const { skola, kuratorer, tider, generell } = config
  const faq = config.faq || faqGeneral
  const bokningSteg =
    config.bokningSteg || [
      { rubrik: 'Via appen', text: 'Gå till fliken "Skriv till oss" och skicka ett meddelande. Kuratorn återkommer med förslag på tid.' },
      { rubrik: 'Kom förbi', text: tider || 'Fråga din kurator var du hittar hen och när.' },
      { rubrik: 'Via din mentor', text: 'Du kan också be din mentor hjälpa dig att boka tid.' },
    ]

  const [flik, setFlik] = useState('stod')
  const [oppetKort, setOppetKort] = useState(null)
  const [oppenFraga, setOppenFraga] = useState(null)
  const [vald, setVald] = useState(0)
  const [form, setForm] = useState({ namn: '', amne: categories[0].title, meddelande: '' })
  const [fel, setFel] = useState('')
  const detaljRef = useRef(null)

  useEffect(() => {
    document.title = `Kuratorn – ${skola}`
  }, [skola])

  const oppenKategori = categories.find((c) => c.id === oppetKort)

  function visaKategori(id) {
    const oppnar = oppetKort !== id
    setOppetKort(oppnar ? id : null)
    if (oppnar) {
      setTimeout(() => {
        const lugn = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        detaljRef.current?.scrollIntoView({ behavior: lugn ? 'auto' : 'smooth', block: 'start' })
      }, 50)
    }
  }

  function andra(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function skicka() {
    if (!form.meddelande.trim()) {
      setFel('Skriv ett meddelande innan du skickar.')
      return
    }
    setFel('')
    const k = kuratorer[vald]
    const amne = `Skolkuratorn – ${form.amne}`
    const hej = k.namn.split(' ')[0]
    const text = `Hej ${hej},\n\n${form.meddelande.trim()}\n\n${form.namn.trim() ? `Från: ${form.namn.trim()}` : 'Skickat via Kuratorn-appen'}`
    window.location.href = `mailto:${k.email}?subject=${encodeURIComponent(amne)}&body=${encodeURIComponent(text)}`
  }

  const valdKurator = kuratorer[vald] || kuratorer[0]

  return (
    <div className="n-body k-root" data-kategori="elevhalsa">
      <div className="n-wrap">
        <header className="n-header">
          <a className="n-back" href="https://norvayapp.se/#verktyg">← Alla verktyg</a>
          <a className="n-brand" href="https://norvayapp.se/"><span className="n-mark">N</span><span>NORVAY</span></a>
        </header>

        <section className="n-hero n-hero--split k-hero">
          <div>
            <h1 className="n-h n-h1">Prata med <em>kuratorn</em> på {skola}</h1>
            <p className="n-lead">
              Vi finns här för dig – oavsett stort eller smått. Du behöver inte ha en allvarlig anledning för att prata med oss.
            </p>
            <ul className="k-kurators" aria-label="Kuratorer">
              {kuratorer.map((k) => (
                <li key={k.email} className="k-kcard">
                  <span className="k-avatar" aria-hidden="true">{initialer(k.namn)}</span>
                  <span>
                    <span className="k-kname">{k.namn}</span>
                    <span className="k-ktitle">{k.titel}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="n-motif n-motif--circle" aria-hidden="true" />
        </section>

        <nav className="k-tabs" aria-label="Avsnitt">
          {FLIKAR.map(([id, namn]) => (
            <button key={id} type="button" className="k-tab" aria-current={flik === id ? 'true' : undefined} onClick={() => setFlik(id)}>
              {namn}
            </button>
          ))}
        </nav>

        <main>
          {flik === 'stod' && (
            <section aria-label="Stödområden">
              <div className="k-grid">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className="k-cat"
                    aria-expanded={oppetKort === cat.id}
                    aria-controls="k-detalj"
                    onClick={() => visaKategori(cat.id)}
                  >
                    <span className="k-cat-icon" aria-hidden="true">{cat.icon}</span>
                    <span className="k-cat-title">{cat.title}</span>
                    <span className="k-cat-sub">{cat.sub}</span>
                  </button>
                ))}
              </div>

              <div ref={detaljRef} />
              <div id="k-detalj">
                {oppenKategori && (
                  <article className="k-detalj">
                    <h2 className="n-h n-h3">{oppenKategori.title}</h2>
                    <p>{oppenKategori.intro}</p>
                    <h3 className="k-label">Tips du kan använda direkt</h3>
                    <ul className="k-tips">
                      {oppenKategori.tips.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <h3 className="k-label">Externa resurser</h3>
                    <ul className="k-links">
                      {oppenKategori.links.map((l) => (
                        <li key={l.url + l.text}>
                          <a className="n-link" href={l.url} target="_blank" rel="noreferrer">{l.text}</a>
                        </li>
                      ))}
                    </ul>
                  </article>
                )}
              </div>

              <p className="k-sekretess">
                Kuratorn har tystnadsplikt. Det du berättar stannar som regel hos kuratorn – om det inte handlar om att du eller någon annan far illa.
              </p>
            </section>
          )}

          {flik === 'bokning' && (
            <section aria-label="Boka tid">
              <div className="n-card">
                <h2 className="n-h n-h3">Hur bokar jag tid?</h2>
                <ol className="k-steg">
                  {bokningSteg.map((s) => (
                    <li key={s.rubrik}><strong>{s.rubrik}.</strong> {s.text}</li>
                  ))}
                </ol>
                <p>Du behöver inte förklara varför du vill träffas – det räcker med att du vill prata.</p>
              </div>
              <div className="n-card n-card--tint" style={{ marginTop: 16 }}>
                <h2 className="n-h n-h3">Vad händer på ett möte?</h2>
                <p style={{ margin: 0 }}>
                  Mötet är frivilligt och konfidentiellt. Du bestämmer själv vad du vill prata om och i vilken takt. Vi lyssnar, ställer frågor och hjälper dig att hitta vägar framåt.
                </p>
              </div>
              <p className="k-sekretess">Alla elever på skolan har rätt till kuratorns stöd. Det kostar ingenting och påverkar inte dina betyg.</p>
            </section>
          )}

          {flik === 'faq' && (
            <section aria-label="Vanliga frågor">
              {faq.map((item, i) => (
                <div key={item.q} className="k-faq">
                  <h2 className="k-faq-h">
                    <button type="button" className="k-faq-q" aria-expanded={oppenFraga === i} aria-controls={`faq-${i}`} onClick={() => setOppenFraga(oppenFraga === i ? null : i)}>
                      <span>{item.q}</span>
                      <span aria-hidden="true" className="k-faq-pm">{oppenFraga === i ? '−' : '+'}</span>
                    </button>
                  </h2>
                  {oppenFraga === i && <p id={`faq-${i}`} className="k-faq-a">{item.a}</p>}
                </div>
              ))}
            </section>
          )}

          {flik === 'kontakt' && (
            <section aria-label="Skriv till oss">
              <div className="n-card n-card--tint">
                <p style={{ margin: 0 }}>
                  Välj kurator och skriv ditt meddelande. När du trycker på knappen öppnas din egen mejlapp med allt ifyllt.
                  <strong> Mejlet skickas från din egen mejladress, så kuratorn ser vem du är.</strong> Vill du inte det kan du i stället fråga efter en tid på plats.
                </p>
              </div>

              <fieldset className="k-field k-fieldset">
                <legend className="k-lbl">Välj kurator</legend>
                <div className="k-radios">
                  {kuratorer.map((k, i) => (
                    <label key={k.email} className={`k-radio${vald === i ? ' is-on' : ''}`}>
                      <input type="radio" name="kurator" checked={vald === i} onChange={() => setVald(i)} />
                      <span className="k-avatar" aria-hidden="true">{initialer(k.namn)}</span>
                      <span>
                        <span className="k-kname">{k.namn}</span>
                        <span className="k-ktitle">{k.titel}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="k-field">
                <label className="k-lbl" htmlFor="namn">Ditt namn (valfritt)</label>
                <input id="namn" className="k-input" name="namn" value={form.namn} onChange={andra} placeholder="Förnamn, eller lämna tomt" autoComplete="off" />
              </div>

              <div className="k-field">
                <label className="k-lbl" htmlFor="amne">Ämne</label>
                <select id="amne" className="k-input" name="amne" value={form.amne} onChange={andra}>
                  {categories.map((c) => <option key={c.id}>{c.title}</option>)}
                  <option>Boka tid</option>
                  <option>Annat</option>
                </select>
              </div>

              <div className="k-field">
                <label className="k-lbl" htmlFor="meddelande">Ditt meddelande</label>
                <textarea id="meddelande" className="k-input k-area" name="meddelande" value={form.meddelande} onChange={andra} maxLength={MAX_TECKEN} placeholder="Berätta vad du vill – det finns inga fel svar..." />
                <p className="k-small">{form.meddelande.length} av {MAX_TECKEN} tecken. Vill du skriva mer kan du ta det på plats eller i ett samtal.</p>
              </div>

              {fel && <p role="alert" className="k-fel">{fel}</p>}
              <button type="button" className="n-btn" onClick={skicka}>Öppna mejlappen och skicka</button>
              <p className="k-small">
                Öppnas ingen mejlapp? Skriv då själv till {valdKurator.namn} på <strong>{valdKurator.email}</strong>.
              </p>
            </section>
          )}
        </main>

        <aside className="k-akut" aria-label="Akut hjälp">
          <h2 className="n-h n-h3">Behöver du prata med någon just nu?</h2>
          <p>{akut.text}</p>
          <ul className="k-akut-lista">
            {akut.linjer.map((l) => (
              <li key={l.namn}>
                {l.namn}: <a className="n-link" href={l.href}><strong>{l.tel}</strong></a>
                {l.extra && <> (<a className="n-link" href={l.extra.url} target="_blank" rel="noreferrer">{l.extra.text}</a>)</>}
              </li>
            ))}
          </ul>
        </aside>

        <footer className="n-footer">
          <span>Ett verktyg från <a href="https://norvayapp.se">Norvay</a></span>
          <a href="https://norvayapp.se/integritet">Integritet</a>
          <a href="mailto:kontakt@norvayapp.se">Kontakt</a>
          {generell && <a href="/">Är du kurator? Skapa en version för din skola</a>}
        </footer>
        {generell && (
          <p className="k-small k-ansvar">
            Uppgifterna om kuratorerna på den här sidan har skrivits in av den som skapat länken. Använd bara länkar du fått av din skola.
          </p>
        )}
      </div>
    </div>
  )
}
