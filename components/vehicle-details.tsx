import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface VehicleDetailsProps {
  id: string
  name: string
  image: string
  price: number
  range: number
  available: boolean
}

export function VehicleDetails({ id, name, image, price, range, available }: VehicleDetailsProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-500">${price}/hr</p>
          </div>
          <div className="flex justify-between text-sm">
            <span>Range: {range}km</span>
            <span className={available ? "text-green-500" : "text-red-500"}>
              {available ? "Available" : "In Use"}
            </span>
          </div>
          <Button className="w-full" disabled={!available}>
            {available ? "Rent Now" : "Currently Unavailable"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

