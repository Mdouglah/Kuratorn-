// Innehåll som är gemensamt för alla skolor.
// Länkarna är kontrollerade (UMO-länkarna uppdaterades eftersom de gamla gav 404).

export const categories = [
  {
    id: 'maende',
    icon: '😔',
    title: 'Mående & stress',
    sub: 'Ångest, nedstämdhet, oro',
    intro:
      'Det är helt okej att inte må bra. Många elever känner sig stressade, ledsna eller oroliga utan att berätta det för någon. Här får du information och konkreta tips.',
    tips: [
      'Andas långsamt – ta 5 djupa andetag när du känner oro. Det hjälper kroppen att lugna ner sig.',
      'Rör på dig – även en kort promenad kan göra stor skillnad för hur du mår.',
      'Skriv ner dina tankar – en dagbok kan hjälpa dig att förstå vad du känner.',
      'Prata med någon du litar på – en vän, ett syskon eller en vuxen.',
      'Begränsa skärm och sociala medier på kvällen – det påverkar sömnen och måendet.',
      'Sov tillräckligt – hjärnan behöver sömn för att hantera känslor.',
    ],
    links: [
      { text: 'UMO – om att må dåligt', url: 'https://www.umo.se/att-ma-daligt/' },
      { text: 'UMO – tips mot stress', url: 'https://www.umo.se/att-ma-daligt/stress/vad-kan-jag-gora-om-jag-ar-stressad/' },
      { text: 'BRIS – stöd för barn och unga', url: 'https://www.bris.se' },
      { text: '1177 – vård och hälsa', url: 'https://www.1177.se' },
    ],
  },
  {
    id: 'kompisar',
    icon: '👥',
    title: 'Kompisar & relationer',
    sub: 'Konflikter, ensamhet, vänskap',
    intro:
      'Relationer med kompisar är viktiga – men också svåra ibland. Konflikter, ensamhet och osäkerhet på om man passar in är vanligt. Du är inte ensam om det.',
    tips: [
      'Om du är i konflikt – försök lyssna på den andre personen utan att avbryta.',
      'Säg hur DU känner, inte vad den andre gjort fel. "Jag kände mig ledsen när..." funkar bättre än anklagelser.',
      'Ensamhet är jobbigt men vanligt – försök gå med i en aktivitet eller klubb på skolan.',
      'Det är okej att ha få vänner. Kvalitet är viktigare än kvantitet.',
      'Om en vän mår dåligt – fråga hur de har det. Det kan betyda mycket.',
    ],
    links: [
      { text: 'BRIS – prata med en vuxen', url: 'https://www.bris.se' },
      { text: 'UMO – kärlek och vänskap', url: 'https://www.umo.se/karlek-och-vanskap/' },
    ],
  },
  {
    id: 'mobbning',
    icon: '🚫',
    title: 'Mobbning & kränkning',
    sub: 'Om du blir utsatt eller ser någon bli utsatt',
    intro:
      'Mobbning och kränkningar är aldrig okej – varken i skolan, på nätet eller på fritiden. Du har rätt att känna dig trygg. Skolan är skyldig att agera.',
    tips: [
      'Du behöver inte hantera det ensam – berätta för en vuxen på skolan.',
      'Spara bevis om det sker digitalt – ta skärmdumpar av meddelanden.',
      'Om du ser någon bli utsatt – reagera om du kan, eller berätta för en vuxen.',
      'Mobbning är ALDRIG offrets fel.',
      'Kuratorn, en lärare eller rektor kan hjälpa dig – det är deras skyldighet.',
    ],
    links: [
      { text: 'Friends – råd och stöd för barn och unga', url: 'https://friends.se/kunskapsbanken/barn-och-unga/rad-och-stod/' },
      { text: 'BRIS – om kränkningar', url: 'https://www.bris.se' },
      { text: 'UMO – våld och kränkningar', url: 'https://www.umo.se/vald-och-krankningar/' },
      { text: 'Skolverket', url: 'https://www.skolverket.se' },
    ],
  },
  {
    id: 'skola',
    icon: '📚',
    title: 'Skola & studier',
    sub: 'Skolstress, motivation, närvaro',
    intro:
      'Det är vanligt att skolan känns tung ibland. Prestationskrav, prov och läxor kan bli överväldigande. Här är tips som kan hjälpa dig att hitta balansen.',
    tips: [
      'Dela upp stora uppgifter i små steg – börja med det minsta steget.',
      'Gör ett schema – det minskar känslan av kaos och hjälper dig prioritera.',
      'Ta pauser när du studerar – 25 min fokus + 5 min paus fungerar bra.',
      'Prata med din lärare om du inte förstår något – det är deras jobb att hjälpa.',
      'Om du ofta inte vill gå till skolan – prata med kuratorn. Det kan finnas orsaker som går att lösa.',
      'Jämför dig inte med andra – alla lär sig i sin egen takt.',
    ],
    links: [
      { text: 'UMO – om skolan', url: 'https://www.umo.se/jag/skolan/' },
      { text: 'UMO – tips mot stress', url: 'https://www.umo.se/att-ma-daligt/stress/vad-kan-jag-gora-om-jag-ar-stressad/' },
      { text: 'Skolverket', url: 'https://www.skolverket.se' },
    ],
  },
  {
    id: 'hemmet',
    icon: '🏠',
    title: 'Hemmet & familjen',
    sub: 'Oro hemma, svåra situationer',
    intro:
      'Hemmet ska vara en trygg plats – men ibland är det inte så. Om det är svårt hemma behöver du inte bära det ensam. Det finns hjälp att få.',
    tips: [
      'Du ansvarar inte för vuxnas problem hemma – det är inte ditt fel.',
      'Om du känner dig otrygg hemma, prata med en vuxen du litar på på skolan.',
      'Kuratorn har tystnadsplikt och kan hjälpa dig. Om du eller någon annan far illa måste kuratorn ibland agera, och berättar då för dig hur.',
      'Du har rätt till en trygg uppväxt – det är lagen.',
      'Om det är akut och du är i fara, ring 112.',
    ],
    links: [
      { text: 'BRIS – barnens telefon och chatt', url: 'https://www.bris.se' },
      { text: 'Rädda Barnen – stöd för unga', url: 'https://www.raddabarnen.se' },
      { text: 'UMO – familj', url: 'https://www.umo.se/familj/' },
    ],
  },
  {
    id: 'identitet',
    icon: '🧠',
    title: 'Identitet & självkänsla',
    sub: 'Vem du är, hur du mår om dig själv',
    intro:
      'Att hitta sin identitet är en process som tar tid. Det är normalt att känna sig osäker på vem man är, vad man vill eller hur man ser på sig själv.',
    tips: [
      'Du behöver inte ha allt klart för dig nu – det är okej att inte veta.',
      'Undvik att jämföra dig med vad du ser på sociala medier – det är inte verkligheten.',
      'Skriv ner vad du är bra på och vad du gillar – fokusera på det.',
      'Om du funderar på din könsidentitet eller sexualitet – det finns stöd och information.',
      'Prata med kuratorn om det är jobbigt – kuratorn har tystnadsplikt.',
    ],
    links: [
      { text: 'RFSL Ungdom – om identitet', url: 'https://www.rfslungdom.se' },
      { text: 'UMO – självkänsla', url: 'https://www.umo.se/ma-bra/sjalvkansla-och-sjalvfortroende/sjalvkansla/' },
      { text: 'BRIS – prata med en vuxen', url: 'https://www.bris.se' },
    ],
  },
]

// Standardtexter för den allmänna versionen. Skolans egna rutiner kan skilja sig,
// så svaren är formulerade försiktigt och hänvisar till kuratorn.
export const faqGeneral = [
  { q: 'Vad är en skolkurator?', a: 'En skolkurator är oftast socionom och arbetar på skolan för att stötta elever med sociala, emotionella och praktiska frågor. Kuratorn är inte lärare och sätter inte betyg.' },
  { q: 'Måste jag berätta varför jag vill prata?', a: 'Nej. Du kan höra av dig utan att förklara exakt vad det gäller. Det räcker med att du vill prata.' },
  { q: 'Berättar kuratorn för mina föräldrar?', a: 'Kuratorn har tystnadsplikt. Det du berättar stannar som regel hos kuratorn. Undantaget är om du eller någon annan far illa, då kan kuratorn behöva agera. Fråga gärna kuratorn hur det fungerar på din skola.' },
  { q: 'Vad händer om jag skickar ett mejl via appen?', a: 'När du trycker på "Öppna mejlappen" öppnas din egen mejlapp med ett färdigskrivet meddelande till kuratorn. Du kan skicka det direkt eller ändra det först.' },
  { q: 'Är mejlet anonymt?', a: 'Nej. Mejlet skickas från din egen mejladress, så kuratorn ser vem du är, även om du inte skriver ditt namn. Vill du inte att kuratorn ser vem du är kan du i stället fråga efter en tid på plats.' },
  { q: 'Kan jag prata med kuratorn om en kompis?', a: 'Ja. Du kan berätta om du är orolig för en vän och få råd om hur du kan hjälpa.' },
  { q: 'Kostar det något?', a: 'Nej, kuratorns stöd är kostnadsfritt för alla elever.' },
  { q: 'Måste jag ha en allvarlig anledning?', a: 'Nej. Du kan komma till kuratorn för stort och smått. Ingen anledning är för liten.' },
  { q: 'Kan jag gå dit utan att lärarna ser?', a: 'Du kan kontakta kuratorn diskret via mejl eller genom att fråga efter en tid. Hur bokningen går till kan skilja sig mellan skolor, så fråga din kurator.' },
]

export const akut = {
  text: 'Är du i fara just nu? Ring 112.',
  linjer: [
    { namn: 'BRIS – barnens telefon', tel: '116 111', href: 'tel:116111' },
    { namn: 'Mind Självmordslinjen', tel: '90101', href: 'tel:90101', extra: { text: 'chatt', url: 'https://mind.se' } },
  ],
}
