'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const SERVICES_FEMME = [
  // ── Coupes ────────────────────────────────────────────────────────────────
  {
    title: 'Coupe Fille',
    description:
      "Coupe douce et adaptée à l’âge de l’enfant, réalisée avec patience pour un moment agréable et un résultat soigné.",
    price: 'À partir de 25$',
  },
  {
    title: 'Coupe Femme',
    description:
      "Coupe sur mesure selon votre morphologie et vos envies, pour un résultat élégant et facile à entretenir au quotidien.",
    price: 'À partir de 30$',
  },
  {
    title: 'Coupe + Brushing',
    description:
      "Coupe personnalisée suivie d’un brushing lissant ou volumisant pour sublimer la forme et la texture de vos cheveux.",
    price: 'À partir de 45$',
  },
  {
    title: 'Brushing / Mise en plis',
    description:
      "Coiffage professionnel au diffuseur ou à la brosse ronde pour un résultat brillant, souple et durable.",
    price: 'À partir de 30$',
  },
  {
    title: 'Coupe Frange',
    description:
      "Retouche et redéfinition de la frange selon la forme du visage, pour un résultat net et harmonieux.",
    price: 'À partir de 10$',
  },

  // ── Colorations ───────────────────────────────────────────────────────────
  {
    title: 'Coloration Femme',
    description:
      "Coloration personnalisée, balayage ou mèches pour apporter éclat, profondeur et modernité à votre chevelure.",
    price: 'À partir de 55$',
  },
  {
    title: 'Balayage / Mèches Femme',
    description:
      "Technique d’éclaircissement sélectif pour créer un effet soleil naturel ou des contrastes lumineux adaptés à votre carnation.",
    price: 'À partir de 85$',
  },
  {
    title: 'Ombré Hair / Tie & Dye Femme',
    description:
      "Dégradé de couleur progressif entre les racines et les pointes pour un effet moderne, fondu et tendance.",
    price: 'À partir de 120$',
  },
  {
    title: 'Coloration Fantaisie Femme',
    description:
      "Application de teintes vives, pastel ou métallisées pour un résultat audacieux, original et personnalisé.",
    price: 'À partir de 100$',
  },
  {
    title: 'Retouche Racines Femme',
    description:
      "Retouche ciblée de la repousse pour uniformiser la couleur et prolonger l’éclat de votre coloration entre deux rendez-vous.",
    price: 'À partir de 45$',
  },
  {
    title: 'Décoloration Femme',
    description:
      "Éclaircissement contrôlé de la chevelure pour préparer une coloration, obtenir un blond lumineux ou alléger la base naturelle.",
    price: 'À partir de 40$',
  },
  {
    title: 'Gloss / Glossing Femme',
    description:
      "Soin semi-permanent qui ravive, rehausse ou unifie la couleur tout en apportant brillance et douceur aux cheveux.",
    price: 'À partir de 45$',
  },

  // ── Soins & Traitements ───────────────────────────────────────────────────
  {
    title: 'Traitement à la kératine',
    description:
      "Soin lissant et réparateur qui discipline les cheveux, réduit les frisottis et apporte une brillance durable.",
    price: 'À partir de 150$',
  },
  {
    title: 'Soin profond hydratant Femme',
    description:
      "Soin nourrissant en profondeur pour restaurer l’hydratation, la souplesse et la vitalité des cheveux secs ou abîmés.",
    price: 'À partir de 25$',
  },
  {
    title: 'Soin protéines / restructurant Femme',
    description:
      "Traitement intense pour cheveux poreux, cassants ou surtraités, conçu pour renforcer la fibre capillaire de l’intérieur.",
    price: 'À partir de 180$',
  },
  {
    title: 'Botox capillaire Femme',
    description:
      "Traitement réparateur qui réduit le volume, lisse la fibre et apporte une brillance intense sans alourdir les cheveux.",
    price: 'À partir de 180$',
  },
  {
    title: 'Soin cuir chevelu Femme',
    description:
      "Diagnostic et soin personnalisé du cuir chevelu, qu’il soit gras, sec ou sensible, avec des actifs adaptés.",
    price: 'À partir de 40$',
  },

  // ── Permanentes & Textures ────────────────────────────────────────────────
  {
    title: 'Permanente Femme',
    description:
      "Création de boucles souples et naturelles pour un volume harmonieux et une coiffure durable.",
    price: 'À partir de 85$',
  },
  {
    title: 'Permanente stylisée Femme',
    description:
      "Permanente adaptée aux cheveux longs pour créer un mouvement élégant, structuré et durable.",
    price: 'À partir de 120$',
  },
  {
    title: 'Lissage japonais Femme',
    description:
      "Technique de lissage permanent qui redresse durablement les cheveux bouclés ou frisés pour un résultat lisse, brillant et soigné.",
    price: 'À partir de 180$',
  },
  {
    title: 'Défrisage Femme',
    description:
      "Traitement chimique qui détend et redresse la texture des cheveux très bouclés ou crépus pour un fini lisse et maîtrisé.",
    price: 'À partir de 75$',
  },
]

const SERVICES_HOMME = [
  // ── Coupes ────────────────────────────────────────────────────────────────
  {
    title: 'Coupe Garçon',
    description:
      "Coupe confortable et adaptée aux enfants, avec possibilité de styles modernes ou classiques.",
    price: 'À partir de 18$',
  },
  {
    title: 'Coupe Homme',
    description:
      "Dégradé, taper ou coupe classique, avec finitions précises pour un look propre et structuré.",
    price: 'À partir de 20$',
  },
  {
    title: 'Coupe + Barbe Homme',
    description:
      "Forfait complet combinant une coupe soignée et une mise en forme de la barbe pour un résultat harmonieux et impeccable.",
    price: 'À partir de 35$',
  },

  // ── Barbe & Rasage ────────────────────────────────────────────────────────
  {
    title: 'Taille et mise en forme de la barbe',
    description:
      "Taille, contours et définition de la barbe au ciseau et au rasoir pour des lignes nettes et un style soigné.",
    price: 'À partir de 15$',
  },
  {
    title: "Rasage à l'ancienne (barbe)",
    description:
      "Rasage traditionnel à la lame avec serviettes chaudes, mousse de rasage et soin apaisant pour une finition impeccable.",
    price: 'À partir de 20$',
  },
  {
    title: "Rasage à l'ancienne (tête)",
    description:
      "Rasage complet du crâne à la lame avec serviettes chaudes et soin apaisant pour un résultat lisse et soigné.",
    price: 'À partir de 22$',
  },

  // ── Colorations ───────────────────────────────────────────────────────────
  {
    title: 'Coloration Homme',
    description:
      "Coloration discrète ou transformation complète pour rafraîchir votre style ou couvrir les cheveux gris.",
    price: 'À partir de 45$',
  },
  {
    title: 'Balayage / Mèches Homme',
    description:
      "Éclaircissements ciblés pour apporter relief et dimension à la coupe, avec un résultat naturel et moderne.",
    price: 'À partir de 60$',
  },
  {
    title: 'Coloration Barbe',
    description:
      "Coloration uniforme ou couverture des poils gris pour harmoniser la barbe avec la couleur des cheveux.",
    price: 'À partir de 15$',
  },

  // ── Soins & Traitements ───────────────────────────────────────────────────
  {
    title: 'Traitement capillaire lissant',
    description:
      "Soin capillaire à base de botox, kératine, protéines, filler ou taninoplastie pour lisser, nourrir et revitaliser les cheveux.",
    price: 'À partir de 90$',
  },
  {
    title: 'Soin anti-chute au lavabo',
    description:
      "Traitement du cuir chevelu avec des actifs fortifiants et stimulants pour freiner la chute et favoriser la pousse.",
    price: 'À partir de 15$',
  },

  // ── Permanentes & Textures ────────────────────────────────────────────────
  {
    title: 'Permanente Homme',
    description:
      "Ajout de texture et de volume avec un effet ondulé naturel, idéal pour un style moderne et dynamique.",
    price: 'À partir de 65$',
  },

  // ── Épilation & Finitions ─────────────────────────────────────────────────
  {
    title: 'Épilation Oreilles & Nez',
    description:
      "Élimination rapide et propre des poils visibles autour des oreilles et des narines.",
    price: 'Incluse dans les forfaits coupe ou soin',
  },
]

const SERVICES_SPECIALE = [
  // ── Mariages & Événements ─────────────────────────────────────────────────
  {
    title: 'Coiffure Mariage',
    description:
      "Coiffure élégante et durable pour la mariée, les demoiselles d’honneur ou les invitées, pensée pour tenir toute la journée.",
    price: 'À partir de 65$',
  },
  {
    title: 'Maquillage Événementiel',
    description:
      "Maquillage lumineux et sur mesure pour un mariage, une soirée, une séance photo ou toute autre occasion spéciale.",
    price: 'À partir de 45$',
  },
  {
    title: 'Épilation visage complet',
    description:
      "Épilation complète du visage pour une peau nette, douce et un teint plus lumineux.",
    price: 'À partir de 35$',
  },
  {
    title: 'Épilation sourcils',
    description:
      "Restructuration et entretien des sourcils pour mettre en valeur le regard avec précision.",
    price: 'À partir de 10$',
  },
]

const SERVICE_GROUPS = [
  {
    id: 'femme',
    label: 'Femme',
    subtitle: 'Beauté, soins et mise en valeur',
    description:
      "Des prestations complètes pour sublimer vos cheveux et votre style, avec des services adaptés à chaque besoin.",
    services: SERVICES_FEMME,
  },
  {
    id: 'homme',
    label: 'Homme',
    subtitle: 'Style, précision et entretien',
    description:
      "Des services efficaces et soignés pour un look propre, moderne et parfaitement maîtrisé.",
    services: SERVICES_HOMME,
  },
  {
    id: 'speciale',
    label: 'Spéciale',
    subtitle: 'Événements, forfaits et prestations signature',
    description:
      "Une sélection de prestations exclusives pour les grands moments, les finitions haut de gamme et les besoins sur mesure.",
    services: SERVICES_SPECIALE,
  },
]
export default function ServicesSection() {
  const [activeGroupId, setActiveGroupId] = useState('femme')

  const activeGroup =
    SERVICE_GROUPS.find((group) => group.id === activeGroupId) ?? SERVICE_GROUPS[0]

  return (
    <section
      id="services"
      className="scroll-mt-28 bg-gradient-to-b from-white via-stone-50 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">Nos Services</h2>
          <div className="mx-auto mb-5 h-1 w-24 bg-amber-400" />
          <p className="text-lg leading-relaxed text-slate-600">
            Choisissez une categorie pour afficher uniquement les services qui vous
            interessent.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {SERVICE_GROUPS.map((group) => {
            const isActive = group.id === activeGroup.id

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroupId(group.id)}
                className={cn(
                  'rounded-[28px] border p-6 text-left transition-all duration-300',
                  isActive
                    ? 'border-amber-300 bg-slate-950 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]'
                    : 'border-slate-200 bg-white text-slate-950 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]'
                )}
                aria-pressed={isActive}
              >
                <span
                  className={cn(
                    'inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]',
                    isActive ? 'bg-white/10 text-amber-300' : 'bg-amber-400/10 text-amber-700'
                  )}
                >
                  {group.label}
                </span>
                <h3 className="mt-5 text-2xl font-bold">{group.label}</h3>
                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    isActive ? 'text-slate-200' : 'text-slate-600'
                  )}
                >
                  {group.subtitle}
                </p>
              </button>
            )
          })}
        </div>

        <div className="mb-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                Section {activeGroup.label}
              </p>
              <h3 className="mt-3 text-3xl font-bold text-slate-950">{activeGroup.subtitle}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {activeGroup.description}
              </p>
            </div>
            <div className="rounded-full border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-700">
              {activeGroup.services.length} service
              {activeGroup.services.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeGroup.services.map((service, index) => (
            <Card
              key={service.title}
              className="group border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-sm font-bold text-amber-700 transition-colors group-hover:bg-amber-400 group-hover:text-slate-950">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm font-semibold text-amber-600">{service.price}</p>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">{service.title}</h3>
                <p className="leading-relaxed text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
