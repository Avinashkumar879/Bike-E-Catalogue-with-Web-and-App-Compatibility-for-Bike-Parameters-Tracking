'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bluetooth } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function ConnectPage() {
  const [isSearching, setIsSearching] = useState(false)

  const handleRefresh = () => {
    setIsSearching(true)
    // Simulate searching for devices
    setTimeout(() => {
      setIsSearching(false)
    }, 2000)
  }

  return (
    <Layout showNav={false}>
      <div className="min-h-screen flex flex-col">
        <header className="bg-[#1a4b63] text-white p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="text-white">
              <Link href="/">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <span className="ml-4">CONNECT TO SUZUKI</span>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="mb-8">
            <Bluetooth className={`w-16 h-16 ${isSearching ? 'text-blue-500 animate-pulse' : 'text-gray-400'}`} />
          </div>
          <div className="text-gray-500 mb-8">NO VEHICLE FOUND</div>
          <Button
            onClick={handleRefresh}
            disabled={isSearching}
            className="bg-[#1a4b63] hover:bg-[#2a5b73] text-white"
          >
            TAP TO REFRESH
          </Button>
        </div>
      </div>
    </Layout>
  )
}

