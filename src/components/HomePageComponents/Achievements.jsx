import React, { useState, useEffect } from 'react';

export function Achievements({ count, title, description, startCounting }) {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (!startCounting || currentCount >= count) return;

    const increment = Math.ceil(count / 100);
    const updateCount = () => {
      setCurrentCount(prevCount => {
        if (prevCount < count) {
          return Math.min(prevCount + increment, count);
        }
        return prevCount;
      });
    };

    const animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [count, startCounting, currentCount]);

  return (
    <div className="w-80 h-40 rounded-xl border-2 p-4 text-black flex flex-col justify-center items-center shadow shadow-[#006984] hover:bg-[#006984] hover:text-white hover:shadow-[0_0_0_transparent] transition-all duration-300 hover:border-4 hover:border-slate-800 transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
      <h4 className="font-bold text-3xl">
        {currentCount}{title === "Growth" ? "% " : "+ "}{title}
      </h4>
      <p className="text-xl mt-4">{description}</p>
    </div>
  );
}