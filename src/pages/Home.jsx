import React from 'react';
import { CardDemo } from '../components/HomePageComponents/KeyCards'; 
import HeroSectionComponent from '../components/HomePageComponents/HeroSectionComponent';
import { CardSection } from '../components/HomePageComponents/CardSection';
import {Mission} from '../components/HomePageComponents/Mission';
import AboutACM from '../components/HomePageComponents/AboutACM';
<<<<<<< HEAD
import { AchievementSection } from '../components/HomePageComponents/AchievementSection';
=======
import AboutFast from '../components/HomePageComponents/AboutFast';
import Sponsor from '../components/HomePageComponents/Sponsor';

export function Home() {
>>>>>>> f49936f9d859bff1965d2abf60446e3e947f7428

export function Home() {
  return (
    <div>
      <HeroSectionComponent />
      <CardSection/>
      <Mission/>
      <AboutACM/>
<<<<<<< HEAD
      <AchievementSection/>
=======
      <AboutFast/>
      <Sponsor/>
>>>>>>> f49936f9d859bff1965d2abf60446e3e947f7428
    </div>
  );
}
