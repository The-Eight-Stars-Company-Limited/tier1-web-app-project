import HeroSection from '@/components/layout/HeroSection'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Eight Stars Company Limited',
  description: 'Your one stop for all your Building, Construction & Electrical Materials',
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
 <HeroSection /> 
    </main>
  );
}




  
