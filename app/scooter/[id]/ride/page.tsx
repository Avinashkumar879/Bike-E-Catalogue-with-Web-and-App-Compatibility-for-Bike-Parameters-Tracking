'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RidePage() {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive])

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center text-white">
      <div className="text-7xl font-bold mb-8">{formatTime(seconds)}</div>
      <Link href="/ride-complete">
        <Button
          variant="outline"
          size="lg"
          className="text-red-500 bg-white hover:bg-gray-100"
        >
          End Ride
        </Button>
      </Link>
    </div>
  )
}

