'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [, setShowAttractions] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const handleSubmit = () => {
    try {
      setShowAttractions(true);
      router.push(`/attractions?city=${cityName}`);
    } catch (err) {
      setError(err as Error);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Discover City Attractions
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore the most popular attractions and hidden gems in cities around the world.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="w-full max-w-md px-4 py-3 text-lg border rounded-lg shadow-sm 
                     focus:outline-none focus:ring-2 bg-background text-foreground
                     border-input focus:ring-ring focus:border-ring
                     transition duration-200"
            placeholder="Enter city name (e.g., Paris, Tokyo, New York)"
          />
          <button
            onClick={handleSubmit}
            className="w-full max-w-md px-6 py-3 text-lg font-medium 
                     bg-primary text-primary-foreground
                     rounded-lg shadow-md hover:bg-primary/90 focus:outline-none 
                     focus:ring-2 focus:ring-ring focus:ring-offset-2 
                     transition duration-200"
          >
            Explore Attractions
          </button>
        </div>

        {error && (
          <p className="text-destructive mt-4">
            An error occurred. Please try again.
          </p>
        )}
      </div>
    </main>
  );
}