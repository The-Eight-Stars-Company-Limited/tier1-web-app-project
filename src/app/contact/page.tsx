import HeroSection from '@/components/layout/HeroSectionLite';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | The Eight Stars Company Limited',
  description: 'Get in touch with The Eight Stars Company Limited for inquiries and support.',
};

export default function ContactPage() {
  return (
    <HeroSection title="Contact Us" subtitle="Find our contact details and office location here" />
  );
}