import React from 'react';
import HeroSectionComponent from '../components/HomePageComponents/HeroSectionComponent';
import { CardSection } from '../components/HomePageComponents/CardSection';
import { Mission } from '../components/HomePageComponents/Mission';
import AboutACM from '../components/HomePageComponents/AboutACM';
import AboutFast from '../components/HomePageComponents/AboutFast';
import Sponsor from '../components/HomePageComponents/Sponsor';
import { AchievementSection } from '../components/HomePageComponents/AchievementSection';

export function Home() {
  return (
    <>
      {/* <HeroSectionComponent /> */}
      <Mission />
      <AboutFast />
      <AboutACM />
      <CardSection />
      {/* <AchievementSection /> */}
      {/* <Sponsor /> */}
    </>
  );
}