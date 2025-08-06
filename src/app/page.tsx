import About from '@/components/sections/AboutSection';
import HeroSection from '@/components/sections/HeroSection'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-20">
      <HeroSection /> 
      <About />
    </main>
  );
}

