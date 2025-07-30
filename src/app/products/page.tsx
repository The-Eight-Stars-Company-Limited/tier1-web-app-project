import HeroSection from '@/components/layout/HeroSectionLite';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | The Eight Stars Company Limited',
  description: 'Electrical and construction products for your projects.',
};


export default function ProductsPage() {
  return (
    <HeroSection title="Our Products" subtitle="Learn about the expert services we offer" />
  );
}