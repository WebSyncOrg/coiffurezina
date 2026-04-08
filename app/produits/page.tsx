import type { Metadata } from 'next'
import Link from 'next/link'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Produits',
  description:
    'Page en construction pour la future section produits de Coiffure Zina.',
}

export default function ProduitsPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#fffaf6] text-slate-900">
      <Navbar />

      <section className="relative flex-1 overflow-hidden px-4 pb-28 pt-44 md:pb-36 md:pt-52">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-amber-100/35 via-white/20 to-transparent" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-32 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-slate-950/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:38px_38px]" />
        </div>

        <div className="container relative mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center md:mb-14">
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700 shadow-sm backdrop-blur">
                Section temporaire
              </span>
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="rounded-[32px] border border-white/80 bg-white/85 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur md:p-10 lg:p-12">
                <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                  Produits
                </p>

                <div className="mt-6 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-4xl shadow-sm">
                    🚧
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                      En préparation
                    </p>
                    <h1 className="mt-2 text-4xl font-bold leading-tight text-slate-950 md:text-5xl xl:text-6xl">
                      Page en construction
                    </h1>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                  Notre boutique produits arrive bientôt. Cette section servira à présenter les
                  produits capillaires disponibles au salon, avec une expérience élégante, claire
                  et facile à consulter.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <p className="text-sm font-semibold text-slate-900">Soins capillaires</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Produits sélectionnés pour l’entretien et la beauté des cheveux.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <p className="text-sm font-semibold text-slate-900">Conseils salon</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Une sélection adaptée aux besoins de chaque type de cheveux.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <p className="text-sm font-semibold text-slate-900">Disponibilité à venir</p>
                    <p className="mt-1 text-sm text-slate-500">
                      La boutique sera ajoutée progressivement sur le site.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="bg-amber-400 px-6 py-6 text-base font-semibold text-black shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:bg-amber-500"
                  >
                    <Link href="/#services">Retour aux services</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-slate-300 bg-white/70 px-6 py-6 text-base text-slate-900 transition hover:bg-slate-950 hover:text-white"
                  >
                    <Link href="/rendez-vous">Prendre rendez-vous</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-br from-amber-300/20 via-transparent to-slate-950/10 blur-2xl" />

                <div className="relative mx-auto flex min-h-[460px] max-w-xl items-center justify-center overflow-hidden rounded-[32px] border border-slate-800/50 bg-[#020617] p-8 text-white shadow-[0_24px_90px_rgba(15,23,42,0.22)] md:min-h-[520px] md:p-10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                  <div className="relative z-10 w-full max-w-md">
                    <div className="mx-auto w-fit rotate-[-2deg] rounded-2xl border-4 border-slate-950 bg-amber-400 px-8 py-5 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                      <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-900">
                        Attention
                      </p>
                      <p className="mt-2 text-2xl font-black uppercase text-slate-950 md:text-3xl">
                        En construction
                      </p>
                    </div>

                    <div className="mt-10 text-center">
                      <p className="text-7xl font-black leading-none text-white/10 md:text-[9rem]">
                        404
                      </p>
                      <p className="-mt-5 text-xl font-semibold text-white md:text-2xl">
                        Mais bientôt remplie de beaux produits
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        Une nouvelle section sera bientôt disponible pour découvrir les produits du
                        salon.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                        <p className="text-2xl">🧴</p>
                        <p className="mt-2 text-sm text-white/80">Soins</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                        <p className="text-2xl">✨</p>
                        <p className="mt-2 text-sm text-white/80">Beauté</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                        <p className="text-2xl">💇‍♀️</p>
                        <p className="mt-2 text-sm text-white/80">Capillaire</p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2">
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-400" />
                      <p className="text-sm text-white/70">Mise en ligne prochaine</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center md:mt-16">
              <p className="text-sm text-slate-500">
                En attendant, vous pouvez prendre rendez-vous ou découvrir les services du salon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}