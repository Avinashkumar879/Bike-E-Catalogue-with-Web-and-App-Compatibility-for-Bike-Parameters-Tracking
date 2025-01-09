'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, scaleIn } from "@/lib/animations"

export default function MapViewPage() {
  const searchParams = useSearchParams()
  const place = searchParams.get('place') || 'Last Parked Location'

  return (
    <Layout showNav={false}>
      <div className="min-h-screen flex flex-col">
        <motion.header 
          className="bg-[#1a4b63] text-white p-4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" asChild className="text-white">
              <Link href="/location">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <span>{place}</span>
            <div className="w-10" /> {/* Spacer for alignment */}
          </div>
        </motion.header>

        <motion.div 
          className="flex-1 bg-gray-100 relative"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/map.png"
            alt="Map"
            layout="fill"
            objectFit="cover"
          />
          <motion.div 
            className="absolute bottom-4 right-4 flex space-x-2"
            variants={scaleIn}
          >
            <Button className="bg-white text-[#1a4b63]">
              Navigate
            </Button>
            <Button className="bg-[#1a4b63] text-white">
              Share Location
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}

