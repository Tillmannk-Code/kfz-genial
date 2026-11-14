'use client'

import type { FormEvent } from 'react'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { site } from '@/lib/site'

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const service = String(data.get('service') || '')
    const message = String(data.get('message') || '')
    const body = `Name: ${name}%0D%0ATelefon: ${phone}%0D%0ALeistung: ${service}%0D%0A%0D%0A${message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      'Terminanfrage – ' + name,
    )}&body=${body}`
  }

  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Kontakt & Termin
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight md:text-5xl">
              Termin? <span className="text-primary">Rufen Sie an.</span>
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Vereinbaren Sie jetzt Ihren Wunschtermin – telefonisch oder direkt
              über das Formular. Wir melden uns schnellstmöglich bei Ihnen zurück.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-md border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    Telefon
                  </span>
                  <span className="text-lg font-bold">{site.phone}</span>
                </span>
              </a>

              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-md border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    Adresse
                  </span>
                  <span className="font-medium">
                    {site.street}, {site.city}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-md border border-border bg-card p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    Öffnungszeiten
                  </span>
                  <span className="font-medium">{site.hours}</span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Name
                </span>
                <input
                  name="name"
                  required
                  className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  placeholder="Ihr Name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Telefon
                </span>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  placeholder="Ihre Rückrufnummer"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Gewünschte Leistung
              </span>
              <select
                name="service"
                className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                defaultValue="Reparatur & Wartung"
              >
                <option>Reparatur &amp; Wartung</option>
                <option>Inspektion</option>
                <option>Diagnose</option>
                <option>Öl-Service</option>
                <option>Achsvermessung / Spureinstellung</option>
                <option>Sonstiges</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Nachricht
              </span>
              <textarea
                name="message"
                rows={4}
                className="w-full resize-none rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                placeholder="Fahrzeug, Kennzeichen, Wunschtermin …"
              />
            </label>

            <button
              type="submit"
              className="btn-red mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              Anfrage senden
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Oder rufen Sie uns direkt an: {site.phone}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
