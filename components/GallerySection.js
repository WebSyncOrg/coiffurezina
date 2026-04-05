import Image from 'next/image'

const GALLERY_IMAGES = [
  { src: '/photo/gallery-01.jpg', alt: 'Longues ondulations blondes' },
  { src: '/photo/gallery-02.jpg', alt: 'Balayage blond dégradé' },
  { src: '/photo/gallery-03.jpg', alt: 'Ondulations brun cendré' },
  { src: '/photo/gallery-04.jpg', alt: 'Boucles blond doré' },
  { src: '/photo/gallery-05.jpg', alt: 'Coiffure attachée avec accessoire' },
  { src: '/photo/gallery-06.jpg', alt: 'Ondulations rouges vibrantes' },
  { src: '/photo/gallery-07.jpg', alt: 'Balayage brun caramel long' },
  { src: '/photo/gallery-08.jpg', alt: 'Carré blond lisse' },
  { src: '/photo/gallery-09.jpg', alt: 'Ondulations brun miel dégradé' },
]

function GalleryTile({ image }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-[1.5rem] cursor-pointer">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <p className="font-semibold">{image.alt}</p>
        </div>
      </div>
    </div>
  )
}

export default function GallerySection() {
  return (
    <section id="galerie" className="scroll-mt-28 bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Notre Galerie</h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-amber-400" />
          <p className="text-lg text-gray-400">
            Découvrez nos réalisations et transformations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <GalleryTile key={image.src} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}
