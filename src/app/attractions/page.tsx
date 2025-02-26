'use client'

import { useSearchParams } from "next/navigation";
import { CityAttractionsCard } from "@/components/CityAttractionsCard";
import { useEffect, useState } from "react";

interface Attraction {
  name: string;
  description: string;
}

export default function AttractionsPage() {
  const searchParams = useSearchParams();
  const [city, setCity] = useState<string>("");
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    if (searchParams) {
      setCity(searchParams.get("city") || "");
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchAttractions = async () => {
      if (city) {
        const response = await fetch(`/api/getAttractions?city=${city}`);
        console.dir(response);
        const data = await response.json();
        setAttractions(data);
      }
    };

    fetchAttractions();
  }, [city]);

  return (
    <main className="min-h-screen bg-background p-4 flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-foreground text-center mb-6">
        Iconic Landmarks and Hidden Gems in {city.toUpperCase()}
      </h1>
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          {attractions.map((attraction, index) => (
            <CityAttractionsCard key={index} attraction={attraction} />
          ))}
        </div>
      </div>
    </main>
  );
}
