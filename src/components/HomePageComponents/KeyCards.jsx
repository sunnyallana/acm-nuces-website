import { cn } from "../../lib/utils"; 
import React from 'react';

export function CardDemo({ name, description, bgImage, afterBgImage }) {
  return (
    <div className="max-w-xs w-full">
      <div
        className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-lg hover:shadow-2xl shadow-slate-500 transition-shadow duration-500 mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${afterBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="text relative z-20">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {name}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
