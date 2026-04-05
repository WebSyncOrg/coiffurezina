import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3MzgwMjkzMHww&ixlib=rb-4.1.0&q=85"
          alt="Intérieur moderne du salon Coiffure Zina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300 backdrop-blur">
          Salon de coiffure à Montréal-Nord
        </p>
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl animate-fade-in">
          Coiffure <span className="text-amber-400">Zina</span>
        </h1>
        <p className="mb-8 text-xl text-gray-200 md:text-2xl animate-fade-in-delay">
          L&apos;excellence capillaire pour tous les types de cheveux
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-delay-2">
          <Button
            asChild
            size="lg"
            className="bg-amber-400 px-8 py-6 text-lg text-black hover:bg-amber-500"
          >
            <Link href="/rendez-vous" aria-label="Prendre rendez-vous en ligne">
              Prendre Rendez-vous
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white px-8 py-6 text-lg text-white hover:bg-white hover:text-black"
          >
            <a href="#services" aria-label="Découvrir nos services">
              Découvrir nos Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
