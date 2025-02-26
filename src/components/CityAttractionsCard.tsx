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
    <Card className="w-full max-w-md bg-card hover:bg-accent 
                    hover:-translate-y-1 transform transition-all duration-200 
                    border-border shadow-lg mb-4">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-card-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}