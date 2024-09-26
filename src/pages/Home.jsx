import React from 'react';
import { CardDemo } from '../components/KeyCards'; 

export function Home() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <p className="mb-6">Welcome to the Home page!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
    </div>
  );
}
