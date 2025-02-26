import React, { useState, useEffect } from 'react';
import { CityAttractionsCard } from './CityAttractionsCard';

interface Attraction {
  name: string;
  description: string;
}

export function AttractionsList() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    fetch('/src/data/mockAttractionsData.json')
      .then(response => response.json())
      .then(data => setAttractions(data))
      .catch(error => console.error('Error loading attractions:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {attractions.map((attraction, index) => (
        <CityAttractionsCard key={index} attraction={attraction} />
      ))}
    </div>
  );
}
