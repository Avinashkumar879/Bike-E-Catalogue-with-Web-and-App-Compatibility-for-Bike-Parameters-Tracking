'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, MapPin, Navigation2 } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn, listItemAnimation } from "@/lib/animations"

export default function LocationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const locations = [
    { name: "Current Location", icon: <Navigation2 className="w-5 h-5 text-blue-500" /> },
    { name: "Home", icon: <MapPin className="w-5 h-5 text-gray-500" /> },
    { name: "Work", icon: <MapPin className="w-5 h-5 text-gray-500" /> },
    { name: "Gym", icon: <MapPin className="w-5 h-5 text-gray-500" /> },
    { name: "Shopping Mall", icon: <MapPin className="w-5 h-5 text-gray-500" /> },
  ]

  return (
    <Layout showNav={false}>
      <div className="min-h-screen flex flex-col">
        <motion.header 
          className="bg-[#1a4b63] text-white p-4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="relative">
            <Button variant="ghost" size="icon" asChild className="absolute left-0 top-1/2 -translate-y-1/2">
              <Link href="/">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <div className="ml-12 flex items-center bg-[#2a5b73] rounded-lg px-4 py-2">
              <Search className="w-5 h-5 mr-2" />
              <Input
                placeholder="Location?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-none bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0"
              />
            </div>
          </div>
        </motion.header>

        <motion.div 
          className="p-4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          {locations
            .filter(location => 
              location.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((location, index) => (
              <motion.div
                key={index}
                variants={listItemAnimation}
                custom={index}
              >
                <Link href={`/location/map?place=${location.name}`}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-14 hover:bg-gray-100"
                  >
                    {location.icon}
                    <span className="ml-3">{location.name}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </Layout>
  )
}

