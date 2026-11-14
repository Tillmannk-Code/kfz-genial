import Image from 'next/image'
import { nav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/kfz-genial-logo.jpg"
                alt="KFZ GENIAL Logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full ring-1 ring-border"
              />
              <span className="text-lg font-bold tracking-tight">
                KFZ <span className="text-primary">GENIAL</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {site.claim} Ihre Meisterwerkstatt in Berlin für Reparatur, Service
              und präzise Achsvermessung mit HUNTER-Technologie.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Navigation
            </span>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Kontakt
            </span>
            <a href={site.phoneHref} className="transition-colors hover:text-primary">
              {site.phone}
            </a>
            <span>{site.street}</span>
            <span>{site.city}</span>
            <span>{site.hours}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} KFZ GENIAL · Meisterwerkstatt Berlin</p>
          <p className="font-medium uppercase tracking-wide">{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
