'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Battery, Clock, MapPin } from 'lucide-react'
import Link from "next/link"

export default function ScooterDetails() {
  return (
    <Layout title="Scooter Details">
      <div className="p-4 space-y-4">
        <Card className="overflow-hidden">
          <div className="relative h-48 bg-gray-100">
            <Image
              src="/placeholder.svg"
              alt="Scooter"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Scooter Model X</h2>
              <div className="flex items-center gap-2">
                <Battery className="w-5 h-5 text-green-500" />
                <span className="text-sm">95%</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>500m away</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Available until 22:00</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-xl font-semibold">$2.50/min</p>
              </div>
              <Link href="/scooter/1/ride">
                <Button>Start Ride</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

