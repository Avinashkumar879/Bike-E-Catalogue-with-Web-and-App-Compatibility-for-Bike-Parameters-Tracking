'use client'

import { Layout } from "@/components/layout"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Phone, MessageSquare, PhoneIcon as WhatsappIcon } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"
import { listItemAnimation, fadeIn } from "@/lib/animations"

export default function SettingsPage() {
  const [speedLimit, setSpeedLimit] = useState(50)

  return (
    <Layout>
      <motion.div 
        className="p-4 space-y-6"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <motion.h1 
          className="text-2xl font-bold text-center text-[#1a4b63] mb-8"
          variants={listItemAnimation}
        >
          SETTINGS
        </motion.h1>

        <div className="space-y-4">
          {[
            { label: "Notifications", icon: null },
            { label: "Incoming calls", icon: <Phone className="w-5 h-5" /> },
            { label: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
            { label: "WhatsApp Calls", icon: <WhatsappIcon className="w-5 h-5" /> },
            { label: "WhatsApp Text", icon: <WhatsappIcon className="w-5 h-5" /> },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              variants={listItemAnimation}
              custom={index}
              className="bg-[#1a4b63] text-white p-4 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <Switch />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="space-y-4"
          variants={listItemAnimation}
        >
          <div className="bg-[#1a4b63] text-white p-4 rounded-lg">
            <div className="mb-4">Speed Warning</div>
            <div className="bg-[#7ac4d6] p-4 rounded-lg">
              <Slider
                value={[speedLimit]}
                onValueChange={(value) => setSpeedLimit(value[0])}
                max={100}
                step={1}
              />
              <div className="text-right mt-2">{speedLimit} km/hr</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

