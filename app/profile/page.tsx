import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowLeft, Camera, MapPin } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, scaleIn, listItemAnimation } from "@/lib/animations"

export default function ProfilePage() {
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
              <Link href="/">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-white">
              <Link href="/profile/edit">
                Edit profile
              </Link>
            </Button>
          </div>
        </motion.header>

        <motion.div 
          className="p-6 flex flex-col items-center"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="relative mb-4"
            variants={scaleIn}
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src="/profile.png"
                alt="Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
              <Camera className="w-4 h-4 text-[#1a4b63]" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-2xl font-bold mb-2"
            variants={fadeIn}
          >
            Thor Odinson
          </motion.h2>
          <motion.div 
            className="flex items-center text-gray-600 mb-8"
            variants={fadeIn}
          >
            <MapPin className="w-4 h-4 mr-1" />
            <span>Rajanukumte</span>
          </motion.div>

          <motion.div 
            className="w-full mb-8"
            variants={scaleIn}
          >
            <Image
              src="/scooter.png"
              alt="Ather 450X"
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <div className="text-center mt-4 text-xl font-semibold">
              Ather 450X
            </div>
          </motion.div>

          <motion.div 
            className="w-full bg-[#1a4b63] text-white rounded-lg p-4"
            variants={listItemAnimation}
          >
            <h3 className="text-lg font-semibold mb-4">Overall Stats</h3>
            <div className="flex justify-between">
              <div>
                <div className="text-sm opacity-80">ODO Meter</div>
                <div className="text-xl font-bold text-blue-400">6574 km</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Total Trip</div>
                <div className="text-xl font-bold text-blue-400">21</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}

