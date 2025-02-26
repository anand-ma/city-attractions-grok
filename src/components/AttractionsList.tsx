import React, { useState, useEffect } from 'react';
import { CityAttractionsCard } from './CityAttractionsCard';

interface Attraction {
  name: string;
  description: string;
}

export function AttractionsList() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/mockAttractionsData.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        if (!text) {
          throw new Error('Empty data received');
        }
        try {
          const data = JSON.parse(text);
          setAttractions(data);
        } catch (parseError) {
          setError(`Error parsing JSON: ${parseError}`);
        }
      } catch (fetchError) {
        setError(`Error fetching data: ${fetchError}`);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {attractions.map((attraction, index) => (
        <CityAttractionsCard key={index} attraction={attraction} />
      ))}
    </div>
  );
}
