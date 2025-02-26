import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Attraction {
  name: string
  description: string
}

interface CityAttractionsCardProps {
  attraction: Attraction
}

export function CityAttractionsCard({ attraction }: CityAttractionsCardProps) {
  const { name, description } = attraction;

  return (
    <Card className="w-full max-w-md bg-gray-100 hover:bg-indigo-50 hover:-translate-y-1 transform transition-all duration-200 border-none shadow-lg mb-4">
      <CardHeader className="bg-indigo-500 text-white rounded-t-lg p-4">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-indigo-900 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}