'use client';

import ImmersiveHero from '@/components/firework/ImmersiveHero';
import ScrollStory from '@/components/firework/ScrollStory';
import ImpactNumbers from '@/components/firework/ImpactNumbers';
import TypographyServices from '@/components/firework/TypographyServices';
import CinematicPortfolio from '@/components/firework/CinematicPortfolio';
import ScrollProcess from '@/components/firework/ScrollProcess';
import Why255Bold from '@/components/firework/Why255Bold';
import GlobalPresence from '@/components/firework/GlobalPresence';
import ImmersiveCTA from '@/components/firework/ImmersiveCTA';

export default function FireworkHome() {
  return (
    <main className="bg-background">
      <ImmersiveHero />
      <ScrollStory />
      <ImpactNumbers />
      <TypographyServices />
      <CinematicPortfolio />
      <ScrollProcess />
      <Why255Bold />
      <GlobalPresence />
      <ImmersiveCTA />
    </main>
  );
}
