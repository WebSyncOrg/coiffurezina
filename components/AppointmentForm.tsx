'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  buildAppointmentMessage,
  formatDateLabel,
  formatTimeLabel,
  PHONE_E164,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  whatsappHref,
} from '@/lib/site'

const SERVICE_OPTIONS = [
  'Coupe Femme',
  'Coupe Homme',
  'Coloration',
  'Traitement Kératine',
  'Coiffure Événementielle',
  'Consultation',
]

const TIME_OPTIONS = Array.from({ length: 19 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
})

function getIsoDate(offsetDays: number) {
  const date = new Date()
  date.setHours(12, 0, 0, 0)
  date.setDate(date.getDate() + offsetDays)
  return date.toISOString().slice(0, 10)
}

function getTodayIso() {
  return getIsoDate(0)
}

function getTomorrowIso() {
  return getIsoDate(1)
}

function toFriendlyTimeLabel(timeValue: string) {
  return formatTimeLabel(timeValue)
}

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    date: getTomorrowIso(),
    time: '10:00',
    notes: '',
  })

  const dateLabel = formatDateLabel(form.date)
  const timeLabel = toFriendlyTimeLabel(form.time)
  const previewMessage = buildAppointmentMessage({
    name: form.name || 'Votre nom',
    phone: form.phone || PHONE_DISPLAY,
    service: form.service,
    dateLabel: dateLabel || 'Choisissez une date',
    timeLabel: timeLabel || 'Choisissez une heure',
    notes: form.notes.trim() || undefined,
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget
    const field = name as keyof typeof form

    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const message = buildAppointmentMessage({
      name: form.name.trim(),
      phone: form.phone.trim(),
      service: form.service,
      dateLabel: formatDateLabel(form.date),
      timeLabel: toFriendlyTimeLabel(form.time),
      notes: form.notes.trim() || undefined,
    })

    const url = whatsappHref(message)
    const openedWindow = window.open(url, '_blank', 'noopener,noreferrer')

    if (!openedWindow) {
      window.location.href = url
    }
  }

  return (
    <Card className="border border-white/15 bg-slate-950/85 text-white shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl">
      <CardContent className="p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
          <span>Réservation par WhatsApp au {WHATSAPP_DISPLAY}</span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
             formulaire système de RDV 
          </span>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Nom complet</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white/10"
                required
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Téléphone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="514 000 0000"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white/10"
                required
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Service souhaité</span>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-400 focus:bg-white/10"
                required
              >
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service} className="text-slate-950">
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Date préférée</span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={getTodayIso()}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-400 focus:bg-white/10"
                required
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_220px]">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Heure souhaitée</span>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-amber-400 focus:bg-white/10"
                required
              >
                {TIME_OPTIONS.map((time) => (
                  <option key={time} value={time} className="text-slate-950">
                    {toFriendlyTimeLabel(time)}
                  </option>
                ))}
              </select>
            </label>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Confirmation
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Le bouton ouvrira WhatsApp sur le {WHATSAPP_DISPLAY}.
              </p>
            </div>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-200">Notes ou précisions</span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Coupe, couleur, longueur, inspirations, préférences..."
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white/10"
            />
          </label>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Aperçu du message
            </p>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
              {previewMessage}
            </pre>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              type="submit"
              className="bg-amber-400 px-6 py-3 text-base text-slate-950 hover:bg-amber-300"
            >
              Envoyer sur WhatsApp
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 px-6 py-3 text-base text-white hover:bg-white hover:text-slate-950"
            >
              <a href={`tel:${PHONE_E164}`}>Appeler le salon</a>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
