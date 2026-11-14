import {
  Wrench,
  ClipboardCheck,
  ScanLine,
  Droplet,
  Target,
  ShieldCheck,
  Check,
} from 'lucide-react'
import { services } from '@/lib/site'

const icons = [Wrench, ClipboardCheck, ScanLine, Droplet, Target, ShieldCheck]

export function Services() {
  return (
    <section id="leistungen" className="bg-carbon border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Unsere Leistungen
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Alles rund ums <span className="text-primary">Fahrzeug</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Als Meisterwerkstatt bieten wir Ihnen den kompletten Service – von der
            Wartung über die Diagnose bis zur High-End-Achsvermessung.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <article
                key={service.title}
                className="group relative flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-secondary"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary ring-1 ring-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_6px_20px_-6px_oklch(0.577_0.238_27.4/0.7)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {service.subtitle}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight transition-colors group-hover:text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-auto space-y-1.5 pt-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
