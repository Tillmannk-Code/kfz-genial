import { Award, Handshake, Cpu, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Meisterqualität',
    text: 'Arbeit vom Fachmann – Qualität, auf die Sie sich verlassen können.',
  },
  {
    icon: Cpu,
    title: 'Modernste Technik',
    text: 'HUNTER 3D-Technologie und aktuelle Diagnosegeräte für exakte Ergebnisse.',
  },
  {
    icon: Handshake,
    title: 'Faire Preise',
    text: 'Transparente Kostenvoranschläge – keine versteckten Überraschungen.',
  },
  {
    icon: HeartHandshake,
    title: 'Vertrauen & Leidenschaft',
    text: 'Ihr Auto ist unsere Leidenschaft – kompetent und zuverlässig betreut.',
  },
]

export function Benefits() {
  return (
    <section id="vorteile" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Warum KFZ GENIAL
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Qualität · Leidenschaft · <span className="text-primary">Vertrauen</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center rounded-md border border-border bg-card p-7 text-center"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold uppercase tracking-tight">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
