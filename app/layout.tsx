import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://coiffure-zina.vercel.app'),
  title: {
    default: 'Coiffure Zina | Salon de coiffure à Montréal-Nord',
    template: '%s | Coiffure Zina',
  },
  description:
    'Salon de coiffure à Montréal-Nord spécialisé dans les cheveux afro, bouclés, ondulés et lisses. Coupes, coloration, traitement kératine et coiffures événementielles.',
  keywords: [
    'salon coiffure Montréal',
    'coiffure afro',
    'coloration cheveux',
    'traitement kératine',
    'coiffure Montréal-Nord',
  ],
  authors: [{ name: 'Coiffure Zina' }],
  openGraph: {
    title: 'Coiffure Zina | Salon de coiffure à Montréal-Nord',
    description:
      "L'excellence capillaire pour tous les types de cheveux à Montréal-Nord.",
    url: 'https://coiffure-zina.vercel.app',
    siteName: 'Coiffure Zina',
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coiffure Zina | Salon de coiffure à Montréal-Nord',
    description:
      "L'excellence capillaire pour tous les types de cheveux à Montréal-Nord.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#fffaf6] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
