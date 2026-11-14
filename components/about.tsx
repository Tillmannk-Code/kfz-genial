import Image from 'next/image'
import { site } from '@/lib/site'

const stats = [
  { value: '5', label: 'Kernleistungen' },
  { value: 'Nr. 1', label: 'HUNTER weltweit' },
  { value: 'Mo–Sa', label: 'für Sie da' },
]

export function About() {
  return (
    <section id="werkstatt" className="bg-carbon border-b border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <Image
              src="/kfz-genial-logo.jpg"
              alt="KFZ GENIAL Meisterwerkstatt Logo"
              width={420}
              height={420}
              className="w-64 rounded-full ring-2 ring-border md:w-96"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Ihre Meisterwerkstatt
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Ihr Auto. <span className="text-primary">Unsere Leidenschaft.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {site.name} ist Ihre Meisterwerkstatt in Berlin für alle Marken. Ob
            Reparatur, Wartung, Inspektion, Diagnose oder präzise Achsvermessung –
            wir arbeiten kompetent, zuverlässig und mit echter Leidenschaft fürs
            Fahrzeug. Bei uns bekommen Sie alles aus einer Hand, ehrliche Beratung
            und Qualität, auf die Sie sich verlassen können.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-md border border-border bg-card p-4 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-primary md:text-3xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
