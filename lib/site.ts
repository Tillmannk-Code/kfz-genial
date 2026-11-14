export const site = {
  name: 'KFZ GENIAL',
  claim: 'Kompetent. Zuverlässig. Genial!',
  tagline: 'Genial für Ihr Auto.',
  phone: '0163 0110221',
  phoneHref: 'tel:+4901630110221',
  email: 'info@kfz-genial.de',
  street: 'Tabberstraße 16a',
  city: '12459 Berlin',
  hours: 'Montag bis Samstag · 9 – 18 Uhr',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Tabberstra%C3%9Fe+16a+12459+Berlin',
} as const

export const nav = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Achsvermessung', href: '#achsvermessung' },
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'Werkstatt', href: '#werkstatt' },
  { label: 'Kontakt', href: '#kontakt' },
] as const

export type Service = {
  title: string
  subtitle: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Reparatur & Wartung',
    subtitle: 'Hebebühne / Service',
    description:
      'Von der kleinen Reparatur bis zur großen Instandsetzung – wir bringen Ihr Fahrzeug zuverlässig wieder auf die Straße.',
    points: ['Reparaturen aller Marken', 'Wartung nach Herstellervorgabe', 'Verschleißteile & Bremsen'],
  },
  {
    title: 'Inspektion',
    subtitle: 'Nach Herstellervorgaben',
    description:
      'Komplette Fahrzeug­inspektion mit Prüfprotokoll – damit Sie sicher unterwegs sind und Ihre Garantie erhalten bleibt.',
    points: ['Inspektion mit Protokoll', 'HU/AU-Vorbereitung', 'Sicherheitscheck'],
  },
  {
    title: 'Diagnose',
    subtitle: 'Moderne Fehlerdiagnose',
    description:
      'Professionelle Auslese aller Steuergeräte. Wir finden die Ursache – nicht nur das Symptom.',
    points: ['Fehlerspeicher auslesen', 'Elektronik & Sensorik', 'Klartext-Befund'],
  },
  {
    title: 'Öl-Service',
    subtitle: 'Schnell · Sauber · Professionell',
    description:
      'Ölwechsel mit Marken­ölen passend zu Ihrem Fahrzeug – inklusive Filter und Sichtprüfung.',
    points: ['Marken­öl nach Freigabe', 'Ölfilter-Wechsel', 'Schnell & sauber'],
  },
  {
    title: 'Achsvermessung',
    subtitle: 'Mit HUNTER-Technologie',
    description:
      'Präzise 3D-Achsvermessung mit dem weltweit führenden HUNTER-System – für perfekte Fahrstabilität.',
    points: ['3D-Vermessung', 'Spureinstellung', 'Messprotokoll für Gutachten'],
  },
  {
    title: 'Rundum-Service',
    subtitle: 'Alles aus einer Hand',
    description:
      'Wir kümmern uns um alles rund um Ihr Fahrzeug – kompetent, zuverlässig und mit Leidenschaft.',
    points: ['Ein Ansprechpartner', 'Faire Preise', 'Transparente Beratung'],
  },
]

export const alignmentServices = [
  {
    title: 'Rahmenmessung',
    text: 'Exakte Kontrolle des Fahrzeugrahmens – für Ihre Sicherheit.',
  },
  {
    title: 'AKS-Vermessung',
    text: 'Perfekte Fahrstabilität – mehr Sicherheit & Komfort.',
  },
  {
    title: 'Eingangs­vermessung',
    text: 'Für Gutachten – präzise & rechtssicher dokumentiert.',
  },
]

export const alignmentBenefits = [
  'Mehr Sicherheit',
  'Besseres Fahrverhalten',
  'Weniger Verbrauch',
  'Längere Reifenlebensdauer',
  'Perfekt für Gutachten',
]
