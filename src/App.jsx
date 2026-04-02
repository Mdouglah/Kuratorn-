import { useState } from 'react'

const categories = [
  {
    id: 'mående',
    icon: '😔',
    title: 'Mående & stress',
    sub: 'Ångest, nedstämdhet, oro',
    intro: 'Det är helt okej att inte må bra. Många elever känner sig stressade, ledsna eller oroliga utan att berätta det för någon. Här får du information och konkreta tips.',
    tips: [
      'Andas långsamt – ta 5 djupa andetag när du känner oro. Det hjälper kroppen att lugna ner sig.',
      'Rör på dig – även en kort promenad kan göra stor skillnad för hur du mår.',
      'Skriv ner dina tankar – en dagbok kan hjälpa dig att förstå vad du känner.',
      'Prata med någon du litar på – en vän, ett syskon eller en vuxen.',
      'Begränsa skärm och sociala medier på kvällen – det påverkar sömnen och måendet.',
      'Sov tillräckligt – hjärnan behöver sömn för att hantera känslor.',
    ],
    links: [
      { text: 'UMO – Ungdomsmottagningen (mående)', url: 'https://www.umo.se/mående' },
      { text: 'BRIS – stöd dygnet runt', url: 'https://www.bris.se' },
      { text: '1177 – psykisk hälsa för unga', url: 'https://www.1177.se' },
    ],
  },
  {
    id: 'kompisar',
    icon: '👥',
    title: 'Kompisar & relationer',
    sub: 'Konflikter, ensamhet, vänskap',
    intro: 'Relationer med kompisar är viktiga – men också svåra ibland. Konflikter, ensamhet och osäkerhet på om man passar in är vanligt. Du är inte ensam om det.',
    tips: [
      'Om du är i konflikt – försök lyssna på den andre personen utan att avbryta.',
      'Säg hur DU känner, inte vad den andre gjort fel. "Jag kände mig ledsen när..." funkar bättre än anklagelser.',
      'Ensamhet är jobbigt men vanligt – försök gå med i en aktivitet eller klubb på skolan.',
      'Det är okej att ha få vänner. Kvalitet är viktigare än kvantitet.',
      'Om en vän mår dåligt – fråga hur de har det. Det kan betyda mycket.',
    ],
    links: [
      { text: 'BRIS – chatta med en vuxen', url: 'https://www.bris.se' },
      { text: 'UMO – om relationer', url: 'https://www.umo.se/relationer' },
    ],
  },
  {
    id: 'mobbning',
    icon: '🚫',
    title: 'Mobbning & kränkning',
    sub: 'Om du blir utsatt eller ser någon bli utsatt',
    intro: 'Mobbning och kränkningar är aldrig okej – varken i skolan, på nätet eller på fritiden. Du har rätt att känna dig trygg. Skolan är skyldig att agera.',
    tips: [
      'Du behöver inte hantera det ensam – berätta för en vuxen på skolan.',
      'Spara bevis om det sker digitalt – ta skärmdumpar av meddelanden.',
      'Om du ser någon bli utsatt – reagera om du kan, eller berätta för en vuxen.',
      'Mobbning är ALDRIG offrets fel.',
      'Kuratorn, en lärare eller rektor kan hjälpa dig – det är deras skyldighet.',
    ],
    links: [
      { text: 'Friends – om mobbning', url: 'https://friends.se' },
      { text: 'BRIS – om kränkningar', url: 'https://www.bris.se' },
      { text: 'Skolverket – dina rättigheter', url: 'https://www.skolverket.se' },
    ],
  },
  {
    id: 'skola',
    icon: '📚',
    title: 'Skola & studier',
    sub: 'Skolstress, motivation, närvaro',
    intro: 'Det är vanligt att skolan känns tung ibland. Prestationskrav, prov och läxor kan bli överväldigande. Här är tips som kan hjälpa dig att hitta balansen.',
    tips: [
      'Dela upp stora uppgifter i små steg – börja med det minsta steget.',
      'Gör ett schema – det minskar känslan av kaos och hjälper dig prioritera.',
      'Ta pauser när du studerar – 25 min fokus + 5 min paus fungerar bra.',
      'Prata med din lärare om du inte förstår något – det är deras jobb att hjälpa.',
      'Om du ofta inte vill gå till skolan – prata med kuratorn. Det kan finnas orsaker som går att lösa.',
      'Jämför dig inte med andra – alla lär sig i sin egen takt.',
    ],
    links: [
      { text: 'UMO – om skolstress', url: 'https://www.umo.se' },
      { text: 'Skolverket – stöd i skolan', url: 'https://www.skolverket.se' },
    ],
  },
  {
    id: 'hemmet',
    icon: '🏠',
    title: 'Hemmet & familjen',
    sub: 'Oro hemma, svåra situationer',
    intro: 'Hemmet ska vara en trygg plats – men ibland är det inte så. Om det är svårt hemma behöver du inte bära det ensam. Det finns hjälp att få.',
    tips: [
      'Du ansvarar inte för vuxnas problem hemma – det är inte ditt fel.',
      'Om du känner dig otrygg hemma, prata med en vuxen du litar på på skolan.',
      'Kuratorn har tystnadsplikt och kan hjälpa dig utan att du riskerar att det blir värre.',
      'Du har rätt till en trygg uppväxt – det är lagen.',
      'Om det är akut och du är i fara, ring 112 eller SOS Alarm.',
    ],
    links: [
      { text: 'BRIS – jouren för barn och unga', url: 'https://www.bris.se' },
      { text: 'Rädda Barnen – stöd för unga', url: 'https://www.raddabarnen.se' },
      { text: 'Socialtjänsten – anonym rådgivning', url: 'https://www.socialstyrelsen.se' },
    ],
  },
  {
    id: 'identitet',
    icon: '🧠',
    title: 'Identitet & självkänsla',
    sub: 'Vem du är, hur du mår om dig själv',
    intro: 'Att hitta sin identitet är en process som tar tid. Det är normalt att känna sig osäker på vem man är, vad man vill eller hur man ser på sig själv.',
    tips: [
      'Du behöver inte ha allt klart för dig nu – det är okej att inte veta.',
      'Undvik att jämföra dig med vad du ser på sociala medier – det är inte verkligheten.',
      'Skriv ner vad du är bra på och vad du gillar – fokusera på det.',
      'Om du funderar på din könsidentitet eller sexualitet – det finns stöd och information.',
      'Prata med kuratorn om det känns tungt – det är helt konfidentiellt.',
    ],
    links: [
      { text: 'RFSL Ungdom – om identitet', url: 'https://www.rfslungdom.se' },
      { text: 'UMO – om kropp och identitet', url: 'https://www.umo.se/kropp-och-kansla' },
      { text: 'BRIS – chatta anonymt', url: 'https://www.bris.se' },
    ],
  },
]

const faqItems = [
  { q: 'Vad är en skolkurator?', a: 'En skolkurator är en utbildad socionom som arbetar på skolan för att stötta elever med sociala, emotionella och praktiska frågor. Kuratorn är inte en lärare och betygsätter inte.' },
  { q: 'Måste jag berätta varför jag vill prata?', a: 'Nej! Du kan boka tid eller komma förbi utan att förklara exakt vad det gäller. Det räcker med att du vill prata.' },
  { q: 'Berättar kuratorn för mina föräldrar?', a: 'Kuratorn har tystnadsplikt. Det du berättar stannar hos kuratorn – med undantag om det handlar om att du eller någon annan far illa, då kan kuratorn behöva agera.' },
  { q: 'Vad händer om jag skickar ett mejl via appen?', a: 'Ditt meddelande går direkt till kuratorn som svarar så snart som möjligt. Du kan vara anonym om du vill.' },
  { q: 'Kan jag prata med kuratorn om en kompis?', a: 'Ja, absolut. Du kan berätta om du är orolig för en vän och få råd om hur du kan hjälpa.' },
  { q: 'Kostar det något?', a: 'Nej, kuratorns tjänster är helt kostnadsfria för alla elever på skolan.' },
  { q: 'Måste jag ha en allvarlig anledning?', a: 'Nej! Du kan komma till kuratorn för stort och smått. Ingen anledning är för liten.' },
  { q: 'Kan jag gå dit utan att lärarna ser?', a: 'Ja. Du kan boka tid diskret via appen eller mejl. Kuratorn informerar inte dina lärare om att du kommit.' },
]

const s = {
  app: { maxWidth: 720, margin: '0 auto', padding: '1.5rem 1rem' },
  header: { textAlign: 'center', padding: '2rem 1rem 1.5rem' },
  avatar: { width: 72, height: 72, borderRadius: '50%', background: '#CECBF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 1rem' },
  h1: { fontSize: 26, fontWeight: 500, color: '#1a1a1a', marginBottom: 6 },
  headerP: { fontSize: 15, color: '#666', lineHeight: 1.6, maxWidth: 440, margin: '0 auto' },
  tabs: { display: 'flex', gap: 2, borderBottom: '1px solid #e0ddd6', marginBottom: '1.5rem', overflowX: 'auto' },
  tab: (a) => ({ padding: '10px 14px', fontSize: 13, color: a ? '#534AB7' : '#888', cursor: 'pointer', borderBottom: a ? '2px solid #534AB7' : '2px solid transparent', marginBottom: -1, background: 'none', border: 'none', borderBottom: a ? '2px solid #534AB7' : '2px solid transparent', fontWeight: a ? 500 : 400, fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }),
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: '1.5rem' },
  card: (open) => ({ background: '#fff', border: open ? '1.5px solid #534AB7' : '1px solid #e0ddd6', borderRadius: 14, padding: '1rem', cursor: 'pointer', transition: 'border-color 0.15s' }),
  cardIcon: { fontSize: 22, marginBottom: 8, display: 'block' },
  cardTitle: { fontSize: 14, fontWeight: 500, color: '#1a1a1a', marginBottom: 4 },
  cardSub: { fontSize: 12, color: '#888', lineHeight: 1.5 },
  expand: { background: '#faf9ff', border: '1px solid #dddaf5', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' },
  expandTitle: { fontWeight: 500, marginBottom: 8, color: '#534AB7', fontSize: 15 },
  expandIntro: { fontSize: 14, lineHeight: 1.7, color: '#333', marginBottom: 12 },
  sectionLabel: { fontSize: 12, fontWeight: 500, color: '#534AB7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, marginTop: 12 },
  tipList: { listStyle: 'none', padding: 0 },
  tipItem: { fontSize: 14, lineHeight: 1.6, color: '#333', padding: '6px 0', borderBottom: '1px solid #ede9f8', display: 'flex', gap: 8 },
  linkList: { listStyle: 'none', padding: 0, marginTop: 4 },
  linkItem: { fontSize: 14, padding: '5px 0' },
  link: { color: '#534AB7', textDecoration: 'none', borderBottom: '1px solid #c5bef0' },
  infoBox: { background: '#EEEDFE', borderRadius: 10, padding: '1rem 1.25rem', fontSize: 14, color: '#3C3489', lineHeight: 1.6, marginBottom: '1.5rem' },
  bokningBox: { background: '#fff', border: '1px solid #e0ddd6', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' },
  bokningTitle: { fontSize: 16, fontWeight: 500, marginBottom: 8, color: '#1a1a1a' },
  bokningText: { fontSize: 14, color: '#555', lineHeight: 1.7 },
  faqItem: { borderBottom: '1px solid #ece9f6', overflow: 'hidden' },
  faqQ: (open) => ({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', cursor: 'pointer', fontSize: 14, fontWeight: open ? 500 : 400, color: open ? '#534AB7' : '#1a1a1a', background: 'none', border: 'none', width: '100%', textAlign: 'left', fontFamily: 'DM Sans, sans-serif', gap: 8 }),
  faqA: { fontSize: 14, color: '#444', lineHeight: 1.7, paddingBottom: 14 },
  formGroup: { marginBottom: '1rem' },
  label: { display: 'block', fontSize: 13, color: '#666', marginBottom: 6 },
  input: { width: '100%', fontSize: 14, padding: '10px 12px', border: '1px solid #d0cdc6', borderRadius: 8, background: '#fff', color: '#1a1a1a', outline: 'none', fontFamily: 'DM Sans, sans-serif' },
  textarea: { width: '100%', fontSize: 14, padding: '10px 12px', border: '1px solid #d0cdc6', borderRadius: 8, background: '#fff', color: '#1a1a1a', minHeight: 130, resize: 'vertical', outline: 'none', fontFamily: 'DM Sans, sans-serif' },
  select: { width: '100%', fontSize: 14, padding: '10px 12px', border: '1px solid #d0cdc6', borderRadius: 8, background: '#fff', color: '#1a1a1a', outline: 'none', fontFamily: 'DM Sans, sans-serif' },
  btn: { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', fontSize: 14, fontWeight: 500, background: '#534AB7', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' },
  sentMsg: { background: '#E1F5EE', borderRadius: 10, padding: '1rem 1.25rem', fontSize: 14, color: '#0F6E56', marginTop: '1rem', lineHeight: 1.6 },
}

export default function App() {
  const [activeTab, setActiveTab] = useState('stod')
  const [openCard, setOpenCard] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ namn: '', epost: '', amne: categories[0].title, meddelande: '' })
  const [sent, setSent] = useState(false)

  function toggleCard(id) { setOpenCard(openCard === id ? null : id) }
  function toggleFaq(i) { setOpenFaq(openFaq === i ? null : i) }
  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function handleSkicka() {
    if (!form.meddelande.trim()) { alert('Skriv ett meddelande innan du skickar.'); return }
    setSent(true)
    setForm({ namn: '', epost: '', amne: categories[0].title, meddelande: '' })
  }

  const openCat = categories.find(c => c.id === openCard)

  return (
    <div style={s.app}>
      <div style={s.header}>
        <div style={s.avatar}>👩‍💼</div>
        <h1 style={s.h1}>Skolkuratorn</h1>
        <p style={s.headerP}>Här hittar du information, tips och stöd – oavsett vad du bär på. Du behöver inte boka tid för att få hjälp.</p>
      </div>

      <div style={s.tabs}>
        {[['stod','Stödområden'],['bokning','Boka tid'],['faq','Vanliga frågor'],['kontakt','Skriv till kuratorn']].map(([id, label]) => (
          <button key={id} style={s.tab(activeTab === id)} onClick={() => setActiveTab(id)}>{label}</button>
        ))}
      </div>

      {activeTab === 'stod' && (
        <div>
          <div style={s.grid}>
            {categories.map(cat => (
              <div key={cat.id} style={s.card(openCard === cat.id)} onClick={() => toggleCard(cat.id)}>
                <span style={s.cardIcon}>{cat.icon}</span>
                <div style={s.cardTitle}>{cat.title}</div>
                <div style={s.cardSub}>{cat.sub}</div>
              </div>
            ))}
          </div>

          {openCat && (
            <div style={s.expand}>
              <div style={s.expandTitle}>{openCat.icon} {openCat.title}</div>
              <p style={s.expandIntro}>{openCat.intro}</p>

              <div style={s.sectionLabel}>Tips du kan använda direkt</div>
              <ul style={s.tipList}>
                {openCat.tips.map((tip, i) => (
                  <li key={i} style={s.tipItem}><span style={{color:'#534AB7', flexShrink:0}}>→</span><span>{tip}</span></li>
                ))}
              </ul>

              <div style={s.sectionLabel}>Externa resurser</div>
              <ul style={s.linkList}>
                {openCat.links.map((l, i) => (
                  <li key={i} style={s.linkItem}><a href={l.url} target="_blank" rel="noreferrer" style={s.link}>{l.text}</a></li>
                ))}
              </ul>
            </div>
          )}

          <div style={s.infoBox}>
            Kuratorn har tystnadsplikt. Det du berättar stannar hos kuratorn – om det inte handlar om att du far illa.
          </div>
        </div>
      )}

      {activeTab === 'bokning' && (
        <div>
          <div style={s.bokningBox}>
            <div style={s.bokningTitle}>Hur bokar jag tid?</div>
            <p style={s.bokningText}>
              Du kan boka tid med kuratorn på flera sätt:<br /><br />
              <strong>1. Via appen</strong> – Gå till fliken "Skriv till kuratorn" och skicka ett meddelande. Kuratorn återkommer med förslag på tid.<br /><br />
              <strong>2. Kom förbi</strong> – Kuratorn finns på skolan och du kan knacka på dörren under öppettider.<br /><br />
              <strong>3. Via din mentor</strong> – Om du hellre vill kan du be din mentor hjälpa dig att boka tid.<br /><br />
              Du behöver inte förklara varför du vill träffas – det räcker med att du vill prata.
            </p>
          </div>
          <div style={{...s.bokningBox, background:'#f0eefb', border:'1px solid #dddaf5'}}>
            <div style={s.bokningTitle}>Vad händer på ett möte?</div>
            <p style={s.bokningText}>
              Mötet är frivilligt och konfidentiellt. Du bestämmer själv vad du vill prata om och i vilken takt. Kuratorn lyssnar, ställer frågor och hjälper dig att hitta vägar framåt. Det finns inget "rätt" sätt att prata med en kurator.
            </p>
          </div>
          <div style={s.infoBox}>
            Alla elever på skolan har rätt till kuratorns stöd – det kostar ingenting och påverkar inte dina betyg.
          </div>
        </div>
      )}

      {activeTab === 'faq' && (
        <div>
          {faqItems.map((item, i) => (
            <div key={i} style={s.faqItem}>
              <button style={s.faqQ(openFaq === i)} onClick={() => toggleFaq(i)}>
                <span>{item.q}</span>
                <span style={{fontSize:18, color:'#534AB7', flexShrink:0}}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p style={s.faqA}>{item.a}</p>}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'kontakt' && (
        <div>
          <div style={s.infoBox}>
            Fyll i formuläret så skickas ditt meddelande direkt till kuratorn. Du kan vara anonym – men ange gärna e-post om du vill ha svar.
          </div>
          <div style={s.formGroup}>
            <label style={s.label}>Ditt namn (valfritt)</label>
            <input style={s.input} name="namn" value={form.namn} onChange={handleChange} placeholder="Förnamn eller anonymt" />
          </div>
          <div style={s.formGroup}>
            <label style={s.label}>Din e-post (om du vill ha svar)</label>
            <input style={s.input} type="email" name="epost" value={form.epost} onChange={handleChange} placeholder="namn@skolan.se" />
          </div>
          <div style={s.formGroup}>
            <label style={s.label}>Ämne</label>
            <select style={s.select} name="amne" value={form.amne} onChange={handleChange}>
              {categories.map(c => <option key={c.id}>{c.title}</option>)}
              <option>Annat</option>
            </select>
          </div>
          <div style={s.formGroup}>
            <label style={s.label}>Ditt meddelande</label>
            <textarea style={s.textarea} name="meddelande" value={form.meddelande} onChange={handleChange} placeholder="Berätta vad du vill – det finns inga fel svar..." />
          </div>
          <button style={s.btn} onClick={handleSkicka}>Skicka till kuratorn</button>
          {sent && (
            <div style={s.sentMsg}>
              Ditt meddelande har skickats. Kuratorn hör av sig så snart som möjligt. Tack för att du vågade ta steget. 💙
            </div>
          )}
        </div>
      )}
    </div>
  )
}
