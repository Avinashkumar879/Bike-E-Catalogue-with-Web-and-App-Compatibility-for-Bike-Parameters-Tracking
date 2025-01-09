'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Navigation } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn, listItemAnimation } from "@/lib/animations"

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const locations = [
    "Current Location",
    "Saved Location 1",
    "Saved Location 2",
    "Recent Location",
  ]

  return (
    <Layout title="Find Scooter">
      <motion.div 
        className="min-h-screen flex flex-col"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            <Input
              className="pl-10"
              placeholder="Search location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Card className="divide-y">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={listItemAnimation}
                custom={index}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 p-4 h-auto"
                >
                  {index === 0 ? (
                    <Navigation className="w-5 h-5 text-blue-500" />
                  ) : (
                    <MapPin className="w-5 h-5 text-gray-500" />
                  )}
                  {location}
                </Button>
              </motion.div>
            ))}
          </Card>

          <div className="h-[calc(100vh-16rem)] bg-gray-100 rounded-lg relative">
            {/* Map placeholder - replace with actual map implementation */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Map View
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

