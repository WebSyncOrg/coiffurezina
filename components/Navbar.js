'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CloseIcon, MenuIcon } from '@/components/icons'

const NAV_LINKS = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/produits', label: 'Produits' },
  { href: '/#temoignages', label: 'Temoignages' },
  { href: '/#apropos', label: 'A Propos' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-slate-950/90 shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/#accueil"
            className="text-2xl font-bold text-white transition hover:opacity-80"
            aria-label="Retour a l accueil"
          >
            Coiffure <span className="text-amber-400">Zina</span>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white transition hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-amber-400 px-5 py-2.5 text-sm text-black hover:bg-amber-500"
            >
              <Link href="/rendez-vous" aria-label="Prendre rendez-vous en ligne">
                Prendre RDV
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center text-white md:hidden"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="rounded-3xl border border-white/10 bg-slate-950/95 p-4 pb-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-white transition hover:text-amber-400"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-amber-400 px-5 py-2.5 text-sm text-black hover:bg-amber-500"
              >
                <Link href="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
                  Prendre RDV
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
