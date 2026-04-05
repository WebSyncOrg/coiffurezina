'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const TESTIMONIALS = [
  {
    name: 'Mounya Alili',
    text: "Je suis vraiment très satisfaite de mon expérience au salon de Madame Zina. J'ai fait une coupe et des mèches, et le résultat est magnifique, exactement comme je l'avais demandé. Madame Zina s'est occupée de moi avec beaucoup de professionnalisme, tout comme l'autre coiffeuse qui était également très professionnelle et très gentille. L'ambiance était chaleureuse et je me suis sentie très à l'aise du début à la fin. Merci pour votre excellent travail ! J'y reviendrai avec plaisir !",
  },
  {
    name: 'Anika Ciarlo',
    text: "C'est mon salon pour mes mèches blondes. Les gens sont tellement gentils là-bas et attentionnés, vous m'avez redonné une dose de confiance ! Je reviens toujours à vous et les prix sont imbattables honnêtement. J'ai toujours ce que je veux et elles savent que je leur laisse le libre arbitre.",
  },
  {
    name: 'Mayra Alexandra',
    text: 'Je suis très satisfaite et reconnaissante du magnifique travail que font Midou et Elvaz. Ils sont très gentils et professionnels, ils ont beaucoup de patience avec les enfants. De belles coupes de cheveux ! Mon mari et mes enfants se coupent toujours les cheveux avec eux. Je les recommande fortement, ils sont magnifiques pour couper les cheveux aux enfants avec des besoins particuliers. Bravo et merci énormément.',
  },
  {
    name: 'kaktus mc',
    text: 'Gens très sympathiques et très professionnels, et ils font bien les coupes avec de la finition.',
  },
  {
    name: 'Alain Lavoie',
    text: "Salon propre, gens sympathiques ! Je connais depuis l'ancien proprio Gino. La nouvelle administration a gardé cette ambiance chaleureuse et dynamique. Les prix sont très bons et ne changent pas !!! Mon coiffeur est un pro !! La première chaise à gauche en entrant.",
  },
  {
    name: 'Hanen Ltifi',
    text: "Je recommande vivement la coiffeuse Zina ! Elle est super sympathique, très serviable, et elle m'a fait une coupe impeccable, le tout à un prix abordable. Je suis ravie, merci Zina !",
  },
  {
    name: 'DIANE POIRIER',
    text: "Ça fait la première fois que ma mère est satisfaite de sa permanente. Et elle est sensible à 92 ans, pas de brûlure pour une fois. Quand je dis court, ils ont mis les plus petits rouleaux, et moi j'ai demandé aussi court, ils m'ont avertie et le résultat est parfait. Ils font gars, fille, jeune, vieux, enfant, professionnel comme ils sont. Coupe, permanente, etc. 80 $ c'est une joke, yes ça fait du bien. Si je dis que c'est bon, c'est parce que je ne voudrais pas que quelqu'un me mente xoxoxo",
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="temoignages"
      className="scroll-mt-28 overflow-hidden bg-gradient-to-b from-stone-50 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            Témoignages Clients
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-amber-400"></div>
          <p className="text-lg text-slate-600">Ce que nos clients disent de nous</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative flex h-[34rem] items-center justify-center md:h-[32rem]">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : index < currentTestimonial
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <Card className="border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                  <CardContent className="p-8 md:p-10">
                    <div className="text-center">
                      <div className="mb-6">
                        <svg
                          className="mx-auto h-12 w-12 text-amber-400 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="mb-6 text-base leading-relaxed italic text-slate-700 md:text-lg">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center justify-center">
                        <div>
                          <p className="text-lg font-bold text-slate-950">
                            {testimonial.name}
                          </p>
                          <div
                            className="mt-2 flex justify-center space-x-1"
                            role="img"
                            aria-label="5 étoiles"
                          >
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="h-5 w-5 fill-current text-amber-400"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex justify-center space-x-2"
            role="tablist"
            aria-label="Sélection de témoignage"
          >
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-8 bg-amber-400'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Témoignage ${index + 1}`}
                role="tab"
                aria-selected={index === currentTestimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
