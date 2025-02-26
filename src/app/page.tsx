'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [showAttractions, setShowAttractions] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = () => {
    try {
      setShowAttractions(true);
      router.push(`/attractions?city=${cityName}`);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover City Attractions
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Explore the most popular attractions and hidden gems in cities around the world.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="w-full max-w-md px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     transition duration-200"
            placeholder="Enter city name (e.g., Paris, Tokyo, New York)"
          />
          <button
            onClick={handleSubmit}
            className="w-full max-w-md px-6 py-3 text-lg font-medium text-white bg-indigo-600 
                     rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 
                     focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            Explore Attractions
          </button>
        </div>

        {error && (
          <p className="text-red-600 mt-4">
            An error occurred. Please try again.
          </p>
        )}
      </div>
    </main>
  );
}