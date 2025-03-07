'use client'

import { useSearchParams, useRouter } from "next/navigation";
import { CityAttractionsCard } from "@/components/CityAttractionsCard";
import { useEffect, useState, Suspense } from "react";

interface Attraction {
  name: string;
  description: string;
}

function AttractionsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const city = searchParams.get("city") || "";
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      if (city) {
        const response = await fetch(`/api/getAttractions?city=${city}`);
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
      <button
        onClick={() => router.push('/')}
        className="mt-8 px-6 py-3 text-lg font-medium 
                 bg-primary text-primary-foreground
                 rounded-lg shadow-md hover:bg-primary/90 focus:outline-none 
                 focus:ring-2 focus:ring-ring focus:ring-offset-2 
                 transition duration-200"
      >
        Discover more Cities
      </button>
    </main>
  );
}

export default function AttractionsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading attractions...</p>
      </div>
    }>
      <AttractionsContent />
    </Suspense>
  );
}
