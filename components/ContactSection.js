import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPinIcon, MessageCircleIcon, PhoneIcon } from '@/components/icons'
import {
  ADDRESS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_DISPLAY,
  WHATSAPP_DIGITS,
} from '@/lib/site'

const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    title: 'Téléphone',
    content: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    label: 'Appeler Coiffure Zina',
  },
  {
    icon: MapPinIcon,
    title: 'Adresse',
    content: ADDRESS,
    href: MAPS_URL,
    label: 'Obtenir l’itinéraire vers Coiffure Zina',
  },
  {
    icon: MessageCircleIcon,
    title: 'WhatsApp',
    content: WHATSAPP_DISPLAY,
    href: `https://wa.me/${WHATSAPP_DIGITS}`,
    label: 'Contacter Coiffure Zina via WhatsApp',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Contactez-Nous</h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-amber-400" />
          <p className="text-lg text-slate-400">Nous sommes à votre écoute</p>
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {CONTACT_INFO.map((info, index) => {
            const Icon = info.icon
            const card = (
              <Card className="h-full border border-slate-800 bg-white/5 transition-colors hover:border-amber-400/60">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10">
                    <Icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{info.title}</h3>
                  <div className="text-slate-300 transition hover:text-amber-300">
                    {info.content}
                  </div>
                </CardContent>
              </Card>
            )

            return info.href ? (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={info.label}
                className="block h-full"
              >
                {card}
              </a>
            ) : (
              <div key={index} className="h-full">
                {card}
              </div>
            )
          })}
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-amber-400 px-8 py-4 text-lg text-black hover:bg-amber-500"
          >
            <a href={`tel:${PHONE_E164}`} aria-label="Appeler maintenant">
              <PhoneIcon className="mr-2 h-5 w-5" />
              Appeler Maintenant
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 px-8 py-4 text-lg text-white hover:bg-emerald-500"
          >
            <a
              href={`https://wa.me/${WHATSAPP_DIGITS}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter via WhatsApp"
            >
              <MessageCircleIcon className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
