import HeroSection from '@/components/layout/HeroSectionLite';
import ServiceCards from '@/components/layout/ServiceCards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | The Eight Stars Company Limited',
  description: 'Professional services for construction and electrical projects.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection title="Our Services" subtitle="Learn about the expert services we offer" />
      <ServiceCards />
    </>
  );
}