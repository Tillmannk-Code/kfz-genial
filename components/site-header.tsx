'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import { nav, site } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} Startseite`}>
          <Image
            src="/kfz-genial-logo.jpg"
            alt="KFZ GENIAL Logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full ring-1 ring-border md:h-12 md:w-12"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight md:text-xl">
              KFZ <span className="text-primary">GENIAL</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Meisterwerkstatt
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="btn-red hidden items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground sm:flex"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors last:border-0 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-3 mb-2 flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
