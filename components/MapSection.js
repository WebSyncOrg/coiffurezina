import { Card, CardContent } from '@/components/ui/card'
import { MAPS_EMBED_URL, MAPS_URL, ADDRESS } from '@/lib/site'

export default function MapSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-8">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border border-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <CardContent className="p-0">
            <div className="relative h-[30rem] w-full">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localisation de ${ADDRESS}`}
              />
              <div className="absolute left-4 top-4 rounded-2xl border border-white/20 bg-slate-950/75 px-4 py-3 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
                  Adresse exacte
                </p>
                <p className="mt-1 max-w-sm text-sm">{ADDRESS}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
