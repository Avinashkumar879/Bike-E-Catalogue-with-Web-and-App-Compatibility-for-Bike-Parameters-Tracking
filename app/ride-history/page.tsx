'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Clock, MapPin } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, listItemAnimation } from "@/lib/animations"

export default function RideHistoryPage() {
  const rides = [
    { id: 1, date: "2023-06-15", duration: "25 min", distance: "5.2 km", cost: "$3.50" },
    { id: 2, date: "2023-06-14", duration: "40 min", distance: "8.7 km", cost: "$5.80" },
    { id: 3, date: "2023-06-12", duration: "15 min", distance: "3.1 km", cost: "$2.10" },
  ]

  return (
    <Layout showNav={false}>
      <motion.div 
        className="min-h-screen flex flex-col"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <header className="bg-[#1a4b63] text-white p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="text-white">
              <Link href="/">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <span className="ml-4">Ride History</span>
          </div>
        </header>

        <div className="p-4 space-y-4">
          {rides.map((ride, index) => (
            <motion.div
              key={ride.id}
              variants={listItemAnimation}
              custom={index}
            >
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{ride.date}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{ride.duration}</span>
                      <MapPin className="w-4 h-4 ml-2 mr-1" />
                      <span>{ride.distance}</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold">{ride.cost}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  )
}

