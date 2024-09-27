import React from 'react';

export function Achievements({ count, title, description }) {
  return (
    <div className="w-80 h-40 rounded-xl border-2 p-4 text-black flex flex-col justify-center items-center shadow shadow-[#006984] hover:bg-[#006984] hover:text-white hover:shadow-[0_0_0_transparent] transition-all duration-300 hover:border-4 hover:border-slate-800">
      <h4 className="font-bold text-3xl">{count}{title === "Growth" ? "% " : "+ "}{title}</h4>
      <p className="text-xl mt-4">{description}</p>
    </div>
  );
}