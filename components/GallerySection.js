'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const createGalleryImage = (src, alt, placeholder = false) => ({ src, alt, placeholder })

const GALLERY_IMAGES_FEMME = [
  createGalleryImage('/photo/Femme.jpg', 'Coiffure femme mise en plis'),
  createGalleryImage('/photo/Coupe_Courte_femme.jpg', 'Coupe courte femme elegante'),
  createGalleryImage('/photo/Coupe_Courte2_femme.jpg', 'Coupe courte femme texturee'),
  createGalleryImage('/photo/CoupeCourteFemme.jpg', 'Coupe femme courte structuree'),
  createGalleryImage('/photo/Coupecourte_3_femme.jpg', 'Coupe courte femme moderne'),
  createGalleryImage('/photo/Degradé_femme.jpg', 'Degrade femme lumineux'),
  createGalleryImage('/photo/Photo_Rouge_femme.jpg', 'Coiffure femme rouge intense'),
  createGalleryImage('/photo/noir_accesoire_femme.jpg', 'Coiffure femme avec accessoire noir'),
  createGalleryImage('/photo/Coupe_accessoir_femmme.jpg', 'Coiffure femme avec accessoire'),
  createGalleryImage('/photo/gallery-01.jpg', 'Coiffure femme ondulations blondes'),
  createGalleryImage('/photo/gallery-02.jpg', 'Coiffure femme balayage blond'),
  createGalleryImage('/photo/gallery-03.jpg', 'Coiffure femme ondulations brun cendre'),
  createGalleryImage('/photo/gallery-04.jpg', 'Coiffure femme boucles blond dore'),
  createGalleryImage('/photo/gallery-05.jpg', 'Coiffure femme attachee avec accessoire'),
  createGalleryImage('/photo/gallery-06.jpg', 'Coiffure femme ondulations rouges'),
  createGalleryImage('/photo/gallery-07.jpg', 'Coiffure femme balayage brun caramel'),
  createGalleryImage('/photo/gallery-08.jpg', 'Coiffure femme carre blond lisse'),
  createGalleryImage('/photo/gallery-09.jpg', 'Coiffure femme ondulations brun miel'),
]

const GALLERY_IMAGES_HOMME = [
  createGalleryImage('/photo/Homme.jpg', 'Coupe homme classique'),
  createGalleryImage('/photo/Homme2.jpg', 'Coupe homme moderne'),
  createGalleryImage('/photo/CoupeHomme1.jpg', 'Coupe homme degradee'),
]

const GALLERY_IMAGES_ENFANTS = [
  createGalleryImage('/photo/enfant.jpg', 'Coupe enfant'),
  createGalleryImage('/photo/Enfant2.jpg', 'Coupe enfant stylee'),
  createGalleryImage('/photo/Fille.png', 'Coiffure fille'),
  createGalleryImage('/photo/photo_double_fille.jpg', 'Coiffure double fille'),
  createGalleryImage('/photo/garcon4.png', 'Coupe garcon'),
]

const GALLERY_GROUPS = [
  {
    id: 'femme',
    label: 'Femme',
    images: GALLERY_IMAGES_FEMME,
  },
  {
    id: 'homme',
    label: 'Homme',
    images: GALLERY_IMAGES_HOMME,
  },
  {
    id: 'enfants',
    label: 'Enfants',
    images: GALLERY_IMAGES_ENFANTS,
  },
]

function GalleryTile({ image }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={cn(
          'transition-transform duration-500 group-hover:scale-105',
          image.placeholder ? 'object-cover grayscale' : 'object-cover'
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />

      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300',
          image.placeholder
            ? 'bg-gradient-to-t from-black/70 via-black/20 to-black/10 opacity-100'
            : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100'
        )}
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {image.placeholder && (
          <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gray-100">
            Image a remplacer
          </span>
        )}
        <p
          className={cn(
            'font-semibold transition-transform duration-300',
            image.placeholder ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
          )}
        >
          {image.alt}
        </p>
      </div>
    </div>
  )
}

export default function GallerySection() {
  const [activeGroupId, setActiveGroupId] = useState('femme')

  const activeGroup =
    GALLERY_GROUPS.find((group) => group.id === activeGroupId) ?? GALLERY_GROUPS[0]

  return (
    <section id="galerie" className="scroll-mt-28 bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Notre Galerie</h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-amber-400" />
          <p className="text-lg text-gray-400">
            Voici les différents styles et transformations que nous avons réalisés pour nos clients. Cliquez sur une categorie pour voir les photos correspondantes.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {GALLERY_GROUPS.map((group) => {
            const isActive = group.id === activeGroup.id

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroupId(group.id)}
                className={cn(
                  'rounded-[28px] border p-6 text-left transition-all duration-300',
                  isActive
                    ? 'border-amber-300 bg-white text-slate-950 shadow-[0_24px_70px_rgba(0,0,0,0.28)]'
                    : 'border-white/10 bg-white/5 text-white hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/10'
                )}
                aria-pressed={isActive}
              >
                <span
                  className={cn(
                    'inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]',
                    isActive ? 'bg-amber-400/15 text-amber-700' : 'bg-white/10 text-gray-200'
                  )}
                >
                  {group.label}
                </span>
                <h3 className="mt-5 text-2xl font-bold">{group.label}</h3>
                <p
                  className={cn(
                    'mt-3 text-sm font-medium',
                    isActive ? 'text-slate-500' : 'text-gray-300'
                  )}
                >
                  {group.images.length} image{group.images.length > 1 ? 's' : ''}
                </p>
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeGroup.images.map((image, index) => (
            <GalleryTile key={`${activeGroup.id}-${index}-${image.alt}`} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}
