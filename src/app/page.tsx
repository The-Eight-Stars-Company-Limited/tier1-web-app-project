import About from '@/components/sections/About';
import HeroSection from '@/components/sections/HeroSection'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection /> 
      <About />
    </main>
  );
}