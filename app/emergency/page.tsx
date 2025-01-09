'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, AlertTriangle } from 'lucide-react'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function EmergencyPage() {
  const [countdown, setCountdown] = useState(5)
  const [isActive, setIsActive] = useState(true)
  const router = useRouter()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isActive && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    } else if (countdown === 0) {
      // Trigger emergency actions
      handleEmergency()
    }
    return () => clearInterval(timer)
  }, [countdown, isActive])

  const handleEmergency = () => {
    // In a real app, this would trigger emergency contacts/services
    console.log("Emergency triggered")
  }

  const handleCancel = () => {
    setIsActive(false)
    router.push('/')
  }

  return (
    <Layout showNav={false}>
      <motion.div 
        className="min-h-screen bg-red-500 flex flex-col items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="mb-8"
        >
          <AlertTriangle className="w-24 h-24 text-white" />
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-4">Emergency Alert</h1>
        
        <motion.div
          className="text-8xl font-bold text-white mb-8"
          key={countdown}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
        >
          {countdown}
        </motion.div>

        <p className="text-white text-center mb-8">
          Emergency services will be contacted if not cancelled
        </p>

        <div className="space-y-4 w-full max-w-xs">
          <Button 
            onClick={handleCancel}
            variant="outline" 
            size="lg"
            className="w-full bg-white text-red-500 hover:bg-gray-100"
          >
            Cancel Alert
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

