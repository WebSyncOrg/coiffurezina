import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  CalendarIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
} from '@/components/icons'
import {
  MAPS_URL,
  PHONE_E164,
  WHATSAPP_DIGITS,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
} from '@/lib/site'

const QUICK_LINKS = [
  {
    icon: PhoneIcon,
    href: `tel:${PHONE_E164}`,
    label: 'Appeler maintenant',
  },
  {
    icon: WhatsAppIcon,
    href: `https://wa.me/${WHATSAPP_DIGITS}`,
    label: 'WhatsApp',
  },
  {
    icon: CalendarIcon,
    href: '/rendez-vous',
    label: 'Prendre RDV',
  },
  {
    icon: MapPinIcon,
    href: MAPS_URL,
    label: 'Itinéraire',
  },
]

const SOCIAL_LINKS = [
  {
    icon: InstagramIcon,
    href: INSTAGRAM_URL,
    label: 'Instagram',
  },
  {
    icon: FacebookIcon,
    href: FACEBOOK_URL,
    label: 'Facebook',
  },
  {
    icon: TikTokIcon,
    href: TIKTOK_URL,
    label: 'TikTok',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Coiffure <span className="text-amber-400">Zina</span>
            </h3>
            <p className="max-w-sm text-slate-400">
              L&apos;excellence capillaire pour tous les types de cheveux.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Horaires</h4>
            <div className="space-y-2 text-slate-400">
              <p>Lundi - Vendredi: 9h - 19h</p>
              <p>Samedi: 9h - 18h</p>
              <p>Dimanche: 10h - 17h</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Liens rapides</h4>
            <div className="flex flex-wrap gap-3">
              {QUICK_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-200 transition hover:border-amber-400/60 hover:bg-amber-400 hover:text-slate-950"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Reseaux sociaux</h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                const isPlaceholder = link.href === '#'

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isPlaceholder ? '_self' : '_blank'}
                    rel={isPlaceholder ? undefined : 'noopener noreferrer'}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-200 transition hover:border-amber-400/60 hover:bg-amber-400 hover:text-slate-950"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Coiffure Zina. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
