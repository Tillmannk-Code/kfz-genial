import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src="/werkstatt-hero.png"
          alt="Moderne KFZ GENIAL Werkstatt mit Fahrzeug auf der Hebebühne"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Meisterwerkstatt · Berlin
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            <span className="text-chrome">Genial</span> für
            <br />
            Ihr <span className="text-primary">Auto.</span>
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-lg text-muted-foreground">
            {site.claim} Reparatur, Wartung, Inspektion, Öl-Service und präzise
            3D-Achsvermessung mit HUNTER-Technologie – alles aus einer Hand.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="btn-red inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              Termin anfragen
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Standort</dt>
                <dd className="text-sm font-medium">
                  {site.street}, {site.city}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Öffnungszeiten</dt>
                <dd className="text-sm font-medium">{site.hours}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
