import React from 'react';
import { CardDemo } from '../components/HomePageComponents/KeyCards'; 
import HeroSectionComponent from '../components/HomePageComponents/HeroSectionComponent';

export function Home() {
  return (
    <div>
      <HeroSectionComponent />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
    </div>
  );
}
