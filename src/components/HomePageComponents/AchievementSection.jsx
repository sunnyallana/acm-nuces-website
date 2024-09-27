import React, { useRef, useEffect, useState } from 'react';
import { Achievements } from './Achievements';

export function AchievementSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const achievementProps = [
    {
      id: 1,
      count: 500,
      title: "Members",
      description: "Active Student Participants"
    },
    {
      id: 2,
      count: 20,
      title: "Competitions",
      description: "Organized annually"
    },
    {
      id: 3,
      count: 15,
      title: "Years",
      description: "Of Excellence"
    },
    {
      id: 4,
      count: 100,
      title: "Growth",
      description: "Year-over-year impact"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievementComponents = achievementProps.map((achievement) => (
    <Achievements
      key={achievement.id}
      count={achievement.count}
      title={achievement.title}
      description={achievement.description}
      startCounting={isVisible}
    />
  ));

  return (
    <section ref={sectionRef} className='mt-10 mx-6 ml-20'>
      <h2 className='text-4xl md:text-6xl text-[#006984] font-bold mb-5 text-center '>Our Achievements</h2>
      <div className='flex justify-around gap-4 p-4 flex-wrap'>
        {achievementComponents}
      </div>
    </section>
  );
}