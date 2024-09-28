import React from 'react';
import ParallaxSection from "../components/EventPageComponents/ParallaxSection";
import UpcomingEvents from "../components/EventPageComponents/UpcomingEvents";

export function Events() {
  return (
    <div>
      <UpcomingEvents/>
      <ParallaxSection />
    </div>
  );
}