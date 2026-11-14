import Image from 'next/image'
import { Crosshair, Gauge, FileCheck, Check } from 'lucide-react'
import { alignmentServices, alignmentBenefits, site } from '@/lib/site'

const icons = [Crosshair, Gauge, FileCheck]

export function Alignment() {
  return (
    <section id="achsvermessung" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Achsvermessung · Spureinstellung
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl">
              Präzision, <span className="text-primary">die man fährt.</span>
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
              Modernste 3D-Achsvermessung mit HUNTER-Technologie – dem weltweit
              führenden System für höchste Messgenauigkeit und perfekte Ergebnisse.
            </p>

            <div className="mt-8 space-y-4">
              {alignmentServices.map((item, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-tight">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {alignmentBenefits.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-wide"
                >
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-md border border-border">
              <Image
                src="/achsvermessung.png"
                alt="3D-Achsvermessung mit HUNTER-Technologie an einem Sportwagen"
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Aktions-Badge */}
            <div className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-md border border-primary/50 bg-background/95 p-5 shadow-2xl backdrop-blur sm:-left-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                Aktionspreis
              </p>
              <p className="font-sans text-5xl font-bold leading-none text-foreground">
                69,90<span className="align-top text-2xl"> €</span>
              </p>
              <p className="text-sm text-muted-foreground line-through">statt 119,90 €</p>
              <a
                href={site.phoneHref}
                className="mt-3 inline-block rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground"
              >
                Jetzt sichern
              </a>
            </div>

            <span className="absolute right-4 top-4 rounded-sm bg-background/90 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground ring-1 ring-border">
              HUNTER 3D
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
