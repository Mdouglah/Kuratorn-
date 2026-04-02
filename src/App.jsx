import { useState } from 'react'

const categories = [
  {
    id: 'mående',
    icon: '😔',
    title: 'Mående & stress',
    sub: 'Ångest, nedstämdhet, oro',
    content: 'Det är helt okej att inte må bra. Kuratorn kan hjälpa dig att prata om känslor som oro, ångest eller nedstämdhet och hitta sätt att hantera dem.',
    points: ['Prata om vad du känner', 'Verktyg för att hantera stress', 'Hänvisning till rätt stöd om det behövs'],
  },
  {
    id: 'kompisar',
    icon: '👥',
    title: 'Kompisar & relationer',
    sub: 'Konflikter, ensamhet, vänskap',
    content: 'Relationer kan vara komplicerade. Kuratorn hjälper dig om du känner dig ensam, har konflikter med vänner eller inte vet hur du ska hantera en relation.',
    points: ['Samtal om konflikter', 'Tips för att skapa och behålla vänskap', 'Stöd vid ensamhet'],
  },
  {
    id: 'mobbning',
    icon: '🚫',
    title: 'Mobbning & kränkning',
    sub: 'Om du blir utsatt',
    content: 'Ingen ska behöva utsättas för mobbning eller kränkningar – varken i skolan eller online. Du har rätt att få hjälp.',
    points: ['Berätta vad som hänt', 'Kuratorn hjälper dig vidare till rätt person', 'Skolan har skyldighet att agera'],
  },
  {
    id: 'skola',
    icon: '📚',
    title: 'Skola & studier',
    sub: 'Skolstress, motivation, närvaro',
    content: 'Känner du att skolan är för tung, eller är det svårt att komma till skolan? Kuratorn kan hjälpa dig att hitta balans och motivation.',
    points: ['Stöd vid hög skolstress', 'Samtal om frånvaro', 'Kontakt med lärare och andra vuxna'],
  },
  {
    id: 'hemmet',
    icon: '🏠',
    title: 'Hemmet & familjen',
    sub: 'Oro hemma, svåra situationer',
    content: 'Om det är svårt hemma – bråk, oro, eller något du inte vill berätta för dina lärare – kan du komma till kuratorn. Allt du berättar hanteras varsamt.',
    points: ['Konfidentiella samtal', 'Hänvisning till stöd utanför skolan vid behov'],
  },
  {
    id: 'identitet',
    icon: '🧠',
    title: 'Identitet & självkänsla',
    sub: 'Vem du är, hur du mår om dig själv',
    content: 'Det kan vara svårt att veta vem man är eller att tycka om sig själv. Kuratorn är en trygg person att prata med om sådana tankar.',
    points: ['Samtal om självkänsla och identitet', 'Stöd om du funderar på könsidentitet eller sexualitet'],
  },
]

const styles = {
  app: {
    maxWidth: 700,
    margin: '0 auto',
    padding: '1.5rem 1rem',
  },
  header: {
    textAlign: 'center',
    padding: '2rem 1rem 1.5rem',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: '#CECBF6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    margin: '0 auto 1rem',
  },
  h1: {
    fontSize: 26,
    fontWeight: 500,
    color: '#1a1a1a',
    marginBottom: 6,
  },
  headerP: {
    fontSize: 15,
    color: '#666',
    lineHeight: 1.6,
    maxWidth: 420,
    margin: '0 auto',
  },
  tabs: {
    display: 'flex',
    gap: 4,
    borderBottom: '1px solid #e0ddd6',
    marginBottom: '1.5rem',
  },
  tab: (active) => ({
    padding: '10px 18px',
    fontSize: 14,
    color: active ? '#534AB7' : '#888',
    cursor: 'pointer',
    borderBottom: active ? '2px solid #534AB7' : '2px solid transparent',
    marginBottom: -1,
    background: 'none',
    border: 'none',
    borderBottom: active ? '2px solid #534AB7' : '2px solid transparent',
    fontWeight: active ? 500 : 400,
    fontFamily: 'DM Sans, sans-serif',
  }),
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: 12,
    marginBottom: '1.5rem',
  },
  card: (open) => ({
    background: '#fff',
    border: open ? '1.5px solid #534AB7' : '1px solid #e0ddd6',
    borderRadius: 14,
    padding: '1rem',
    cursor: 'pointer',
    transition: 'border-color 0.15s',
  }),
  cardIcon: {
    fontSize: 22,
    marginBottom: 8,
    display: 'block',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 12,
    color: '#888',
    lineHeight: 1.5,
  },
  expand: {
    background: '#f0eefb',
    borderRadius: 10,
    padding: '1rem 1.25rem',
    marginBottom: '1.5rem',
    fontSize: 14,
    lineHeight: 1.7,
    color: '#2a2a2a',
  },
  expandTitle: {
    fontWeight: 500,
    marginBottom: 8,
    color: '#534AB7',
    fontSize: 15,
  },
  ul: {
    paddingLeft: '1.2rem',
    marginTop: 8,
  },
  infoBox: {
    background: '#EEEDFE',
    borderRadius: 10,
    padding: '1rem 1.25rem',
    fontSize: 14,
    color: '#3C3489',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    fontSize: 14,
    padding: '10px 12px',
    border: '1px solid #d0cdc6',
    borderRadius: 8,
    background: '#fff',
    color: '#1a1a1a',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    fontSize: 14,
    padding: '10px 12px',
    border: '1px solid #d0cdc6',
    borderRadius: 8,
    background: '#fff',
    color: '#1a1a1a',
    minHeight: 130,
    resize: 'vertical',
    outline: 'none',
  },
  select: {
    width: '100%',
    fontSize: 14,
    padding: '10px 12px',
    border: '1px solid #d0cdc6',
    borderRadius: 8,
    background: '#fff',
    color: '#1a1a1a',
    outline: 'none',
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '11px 22px',
    fontSize: 14,
    fontWeight: 500,
    background: '#534AB7',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif',
  },
  sentMsg: {
    background: '#E1F5EE',
    borderRadius: 10,
    padding: '1rem 1.25rem',
    fontSize: 14,
    color: '#0F6E56',
    marginTop: '1rem',
    lineHeight: 1.6,
  },
}

export default function App() {
  const [activeTab, setActiveTab] = useState('stod')
  const [openCard, setOpenCard] = useState(null)
  const [form, setForm] = useState({ namn: '', epost: '', amne: 'Mående & stress', meddelande: '' })
  const [sent, setSent] = useState(false)

  function toggleCard(id) {
    setOpenCard(openCard === id ? null : id)
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSkicka() {
    if (!form.meddelande.trim()) {
      alert('Skriv ett meddelande innan du skickar.')
      return
    }
    setSent(true)
    setForm({ namn: '', epost: '', amne: 'Mående & stress', meddelande: '' })
  }

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <div style={styles.avatar}>👩‍💼</div>
        <h1 style={styles.h1}>Skolkuratorn</h1>
        <p style={styles.headerP}>
          Jag är här för att stötta dig. Det spelar ingen roll vad det handlar om – du behöver aldrig vara ensam med dina tankar.
        </p>
      </div>

      <div style={styles.tabs}>
        <button style={styles.tab(activeTab === 'stod')} onClick={() => setActiveTab('stod')}>Områden</button>
        <button style={styles.tab(activeTab === 'kontakt')} onClick={() => setActiveTab('kontakt')}>Skriv till kuratorn</button>
      </div>

      {activeTab === 'stod' && (
        <div>
          <div style={styles.grid}>
            {categories.map(cat => (
              <div key={cat.id} style={styles.card(openCard === cat.id)} onClick={() => toggleCard(cat.id)}>
                <span style={styles.cardIcon}>{cat.icon}</span>
                <div style={styles.cardTitle}>{cat.title}</div>
                <div style={styles.cardSub}>{cat.sub}</div>
              </div>
            ))}
          </div>

          {openCard && (() => {
            const cat = categories.find(c => c.id === openCard)
            return (
              <div style={styles.expand}>
                <div style={styles.expandTitle}>{cat.title}</div>
                <p>{cat.content}</p>
                <ul style={styles.ul}>
                  {cat.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )
          })()}

          <div style={styles.infoBox}>
            Kuratorn har tystnadsplikt och är inte din lärare. Det du berättar stannar hos kuratorn, om det inte handlar om att du far illa.
          </div>
        </div>
      )}

      {activeTab === 'kontakt' && (
        <div>
          <div style={styles.infoBox}>
            Fyll i formuläret nedan så skickas ditt meddelande direkt till kuratorn. Du kan vara anonym om du vill – men ange gärna namn om du vill ha svar.
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Ditt namn (valfritt)</label>
            <input style={styles.input} name="namn" value={form.namn} onChange={handleChange} placeholder="Förnamn eller anonymt" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Din e-post (om du vill ha svar)</label>
            <input style={styles.input} type="email" name="epost" value={form.epost} onChange={handleChange} placeholder="namn@skolan.se" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Ämne</label>
            <select style={styles.select} name="amne" value={form.amne} onChange={handleChange}>
              {categories.map(c => <option key={c.id}>{c.title}</option>)}
              <option>Annat</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Ditt meddelande</label>
            <textarea style={styles.textarea} name="meddelande" value={form.meddelande} onChange={handleChange} placeholder="Berätta vad du vill – det finns inga fel svar..." />
          </div>
          <button style={styles.btn} onClick={handleSkicka}>Skicka till kuratorn</button>
          {sent && (
            <div style={styles.sentMsg}>
              Ditt meddelande har skickats. Kuratorn hör av sig så snart som möjligt. Tack för att du vågade ta steget.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
