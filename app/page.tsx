import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import Footer from "@/components/Footer"
import GallerySection from "@/components/GallerySection"
import HeroSection from "@/components/HeroSection"
import MapSection from "@/components/MapSection"
import Navbar from "@/components/Navbar"
import PromotionSection from "@/components/PromotionSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffaf6] text-slate-900">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <PromotionSection />
      <ContactSection />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
