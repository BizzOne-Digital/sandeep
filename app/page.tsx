import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import EcoApproachSection from '@/components/home/EcoApproachSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import PricingPreview from '@/components/home/PricingPreview';
import TestimonialPreview from '@/components/home/TestimonialPreview';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'B.Tech Eco Clean - A Calmer Home. A Sharper Office.',
  description:
    'Professional residential and commercial cleaning services using plant-based products. Serving Edmonton, St. Albert, Sherwood Park, and surrounding areas.',
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <EcoApproachSection />
      <HowItWorksSection />
      <GalleryPreview />
      <PricingPreview />
      <TestimonialPreview />
      <FinalCTA />
    </main>
  );
}
