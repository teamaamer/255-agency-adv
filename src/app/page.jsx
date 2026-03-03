'use client';

import ViralHero from '@/components/hybrid/ViralHero';
import ElevatedServices from '@/components/hybrid/ElevatedServices';
import CinematicCaseStudy from '@/components/hybrid/CinematicCaseStudy';
import CleanImpact from '@/components/hybrid/CleanImpact';
import CleanProcess from '@/components/hybrid/CleanProcess';
import AsymmetricPortfolio from '@/components/hybrid/AsymmetricPortfolio';
import ElegantGlobal from '@/components/hybrid/ElegantGlobal';
import CinematicCTA from '@/components/hybrid/CinematicCTA';

export default function HybridHome() {
  return (
    <main className="bg-background">
      <ViralHero />
      <CleanImpact />
      <ElevatedServices />
      <CinematicCaseStudy />
      <CleanProcess />
      <AsymmetricPortfolio />
      <ElegantGlobal />
      <CinematicCTA />
    </main>
  );
}
