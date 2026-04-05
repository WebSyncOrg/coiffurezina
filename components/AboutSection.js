export default function AboutSection() {
  return (
    <section
      id="apropos"
      className="scroll-mt-28 bg-gradient-to-b from-white to-stone-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
              À Propos de Nous
            </h2>
            <div className="mx-auto h-1 w-24 bg-amber-400"></div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-elegant md:p-12">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                Bienvenue chez{" "}
                <span className="font-bold text-amber-600">Coiffure Zina</span>,
                votre salon de coiffure d&apos;excellence à Montréal. Nous sommes
                spécialisés dans tous les types de cheveux et offrons une gamme
                complète de services professionnels.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                Notre équipe d&apos;experts passionnés s&apos;engage à vous offrir
                une expérience unique et personnalisée. Que vous ayez des cheveux
                afro, bouclés, ondulés ou lisses, nous maîtrisons toutes les
                techniques pour sublimer votre beauté naturelle.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                De la coupe classique aux colorations les plus audacieuses, en
                passant par les traitements de kératine et les coiffures
                événementielles, nous mettons notre savoir-faire à votre service
                pour révéler le meilleur de vous-même.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-amber-600">10+</div>
                <div className="text-slate-600">Années d&apos;expérience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-amber-600">1000+</div>
                <div className="text-slate-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-amber-600">100%</div>
                <div className="text-slate-600">Passion &amp; qualité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
