import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Geist_Mono } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'KFZ GENIAL – Meisterwerkstatt in Berlin | Reparatur, Achsvermessung & Service',
  description:
    'KFZ GENIAL Meisterwerkstatt in Berlin: Reparatur, Wartung, Diagnose, Inspektion, Öl-Service und präzise 3D-Achsvermessung mit HUNTER-Technologie. Kompetent. Zuverlässig. Genial!',
  generator: 'v0.app',
  keywords: [
    'KFZ Genial',
    'Autowerkstatt Berlin',
    'Meisterwerkstatt',
    'Achsvermessung',
    'Spureinstellung',
    'HUNTER Technologie',
    'Ölservice',
    'Inspektion',
    'Reparatur',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`dark ${oswald.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
