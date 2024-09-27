import React from 'react';
import { CardDemo } from '../components/HomePageComponents/KeyCards'; 
import HeroSectionComponent from '../components/HomePageComponents/HeroSectionComponent';
import { CardSection } from '../components/HomePageComponents/CardSection';
import {Mission} from '../components/HomePageComponents/Mission';
import AboutACM from '../components/HomePageComponents/AboutACM';
import AboutFast from '../components/HomePageComponents/AboutFast';

export function Home() {

  return (
    <div>
      <HeroSectionComponent />
      <CardSection/>
      <Mission/>
      <AboutACM/>
      <AboutFast/>
    </div>
  );
}
