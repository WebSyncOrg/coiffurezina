import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function PromotionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-white" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-block">
              <span className="rounded-full bg-black px-6 py-2 text-sm font-bold uppercase tracking-wider text-amber-400">
                Offre Spéciale
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Rabais du Moment
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-white" />
          </div>

          <Card className="border-none bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="text-7xl font-bold leading-none text-amber-500 md:text-8xl">
                      -15%
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                      HOT!
                    </div>
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-950 md:text-3xl">
                  Sur Balayage &amp; Traitement Kératine
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                  Profitez de notre offre exclusive. Transformez vos cheveux avec
                  nos services premium à prix réduit. Offre valable pour tous les
                  types de cheveux.
                </p>

                <div className="mb-8 rounded-2xl border-2 border-dashed border-amber-400 bg-gradient-to-r from-amber-50 to-amber-100 p-8">
                  <p className="mb-4 text-lg font-semibold text-slate-700">
                    Votre Code Promo :
                  </p>
                  <div className="mb-4 rounded-lg bg-white p-6 shadow-lg">
                    <div className="font-mono text-4xl font-bold tracking-wider text-amber-600 md:text-5xl">
                      ZINA15
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-lg bg-white p-4 text-slate-700 shadow-sm">
                    <svg
                      className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-left font-medium">
                      <strong>Présentez ce code directement à la réception</strong>
                      <br />
                      <span className="text-sm text-slate-600">
                        pour bénéficier du rabais
                      </span>
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-slate-950 px-12 py-7 text-xl text-amber-400 shadow-xl transition-all hover:bg-slate-900 hover:shadow-2xl hover:scale-105"
                >
                  <Link href="/rendez-vous" aria-label="Réserver maintenant en ligne">
                    Réserver Maintenant
                  </Link>
                </Button>

                <p className="mt-6 text-sm text-slate-500">
                  * Offre à durée limitée – Non cumulable avec d&apos;autres promotions ou produits
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
