import { Card, CardContent } from '@/components/ui/card'

const SERVICES = [
  {
    title: 'Coupe Homme',
    description: 'Coupes modernes et classiques adaptées à votre style',
    price: 'À partir de 35$',
  },
  {
    title: 'Coupe Femme',
    description: 'Coupes personnalisées pour tous types de cheveux',
    price: 'À partir de 45$',
  },
  {
    title: 'Coloration',
    description: 'Balayage, mèches, bleach - Toutes techniques de coloration',
    price: 'À partir de 80$',
  },
  {
    title: 'Traitement Kératine',
    description: 'Lissage et réparation en profondeur',
    price: 'À partir de 150$',
  },
  {
    title: 'Coiffure Événementielle',
    description: 'Coiffures pour mariages, soirées et occasions spéciales',
    price: 'Sur mesure',
  },
  {
    title: 'Tous Types de Cheveux',
    description: 'Expertise en cheveux afro, bouclés, ondulés et lisses',
    price: 'Consultation gratuite',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-gradient-to-b from-white to-stone-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            Nos Services
          </h2>
          <div className="mx-auto h-1 w-24 bg-amber-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              className="group border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 transition-colors group-hover:bg-amber-400">
                  <div className="h-8 w-8 rounded-full bg-amber-400 transition-colors group-hover:bg-white"></div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">{service.title}</h3>
                <p className="mb-4 leading-relaxed text-slate-600">{service.description}</p>
                <p className="text-lg font-semibold text-amber-600">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
