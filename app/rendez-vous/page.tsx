import type { Metadata } from 'next'
import Link from 'next/link'
import AppointmentForm from '@/components/AppointmentForm'
import { Card, CardContent } from '@/components/ui/card'
import { CalendarIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from '@/components/icons'
import {
  ADDRESS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_NAME,
  WHATSAPP_DIGITS,
  WHATSAPP_DISPLAY,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description:
    'Choisissez votre service, votre date et votre heure, puis ouvrez WhatsApp avec toutes les informations du rendez-vous.',
}

const STEPS = [
  'Choisissez le service, la date et l’heure qui vous conviennent.',
  'Ajoutez vos coordonnées et quelques précisions si nécessaire.',
  'Envoyez le message sur WhatsApp et nous vous répondrons rapidement.',
]

const CONTACT_CARDS = [
  {
    icon: PhoneIcon,
    title: 'Téléphone du salon',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    label: 'Appeler le salon',
  },
  {
    icon: MessageCircleIcon,
    title: 'WhatsApp',
    value: WHATSAPP_DISPLAY,
    href: `https://wa.me/${WHATSAPP_DIGITS}`,
    label: 'Écrire sur WhatsApp',
  },
  {
    icon: MapPinIcon,
    title: 'Adresse',
    value: ADDRESS,
    href: MAPS_URL,
    label: 'Voir l’adresse sur Google Maps',
  },
]

export default function RendezVousPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_28%),linear-gradient(180deg,#fffaf6_0%,#fffefc_36%,#f5efe4_100%)] text-slate-950">
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(15,23,42,0.72)_45%,rgba(120,53,15,0.7))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#fffaf6]" />

        <div className="container relative z-10 mx-auto px-4 pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200 backdrop-blur">
                <CalendarIcon className="h-4 w-4" />
                Réservation WhatsApp
              </div>
              <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                Prendre rendez-vous chez <span className="text-amber-400">{SITE_NAME}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                Choisissez une date, une heure et votre service. Dès que vous validez, un
                message WhatsApp prérempli part vers le {WHATSAPP_DISPLAY} avec toutes les
                informations utiles pour organiser votre rendez-vous.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#reservation"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Commencer la réservation
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Retour à l’accueil
                </Link>
              </div>
            </div>

            <Card className="border border-white/15 bg-white/10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <CardContent className="space-y-5 p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
                  Comment ça marche
                </p>
                <div className="space-y-4">
                  {STEPS.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-slate-200">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">WhatsApp</p>
                    <p className="mt-2 text-sm text-white">{WHATSAPP_DISPLAY}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Téléphone</p>
                    <p className="mt-2 text-sm text-white">{PHONE_DISPLAY}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reservation" className="scroll-mt-28 pb-20 pt-6">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            <AppointmentForm />

            <div className="space-y-6 lg:sticky lg:top-28">
              <Card className="border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <CardContent className="p-6">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                    Coordonnées utiles
                  </p>
                  <div className="space-y-4">
                    {CONTACT_CARDS.map((info) => {
                      const Icon = info.icon

                      return (
                        <a
                          key={info.title}
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          aria-label={info.label}
                          className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-amber-400 hover:bg-amber-50"
                        >
                          <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-600">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-slate-900">
                              {info.title}
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                              {info.value}
                            </span>
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <CardContent className="p-6">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                    À savoir
                  </p>
                  <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
                    <li>• Les créneaux affichés sont indicatifs et seront confirmés par WhatsApp.</li>
                    <li>• Vous pouvez préciser vos préférences dans la zone de notes.</li>
                    <li>• Si vous préférez appeler, le salon reste joignable au {PHONE_DISPLAY}.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
