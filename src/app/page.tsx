import About from '@/components/sections/AboutSection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection'; 
import ProductSection from '@/components/sections/ProductSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <HeroSection /> 
      <About />
      <ProductSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}

