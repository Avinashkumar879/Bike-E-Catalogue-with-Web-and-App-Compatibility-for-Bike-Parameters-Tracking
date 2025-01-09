'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function RentalTimer() {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive])

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 text-white">
      <div className="text-6xl font-bold mb-8">
        {formatTime(seconds)}
      </div>
      <Button 
        variant="outline" 
        onClick={() => setIsActive(!isActive)}
        className="bg-white text-red-500 hover:bg-gray-100"
      >
        {isActive ? 'End Ride' : 'Start Ride'}
      </Button>
    </div>
  )
}

