import HeroSection from '@/components/layout/HeroSectionLite';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Eight Stars Company Limited',
  description: 'Learn more about The Eight Stars Company Limited, our mission, and our values.',
};

export default function AboutPage() {
  return (
    <HeroSection title="About Us" subtitle="Discover the story behind The Eight Stars Company Limited" />
  );
}