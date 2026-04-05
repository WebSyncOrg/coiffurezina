import { WhatsAppIcon } from '@/components/icons'
import { WHATSAPP_DIGITS } from '@/lib/site'

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_DIGITS}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_20px_45px_rgba(4,120,87,0.35)] transition-all hover:scale-110 hover:bg-emerald-500"
      aria-label="Contacter via WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
