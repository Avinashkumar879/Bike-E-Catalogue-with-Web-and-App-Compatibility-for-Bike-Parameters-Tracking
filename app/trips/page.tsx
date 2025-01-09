'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function TripsPage() {
  const [activeTab, setActiveTab] = useState("recent")

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
            <span className="ml-4">TRIPS</span>
          </div>
        </header>

        <Tabs defaultValue="recent" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full">
            <TabsTrigger value="recent" className="flex-1">RECENT</TabsTrigger>
            <TabsTrigger value="favourites" className="flex-1">FAVOURITES</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="p-4">
            <div className="flex flex-col items-center justify-center text-gray-500 mt-12">
              <AlertTriangle className="w-12 h-12 mb-4" />
              <div>No Records Found!</div>
            </div>
          </TabsContent>
          <TabsContent value="favourites" className="p-4">
            <div className="flex flex-col items-center justify-center text-gray-500 mt-12">
              <AlertTriangle className="w-12 h-12 mb-4" />
              <div>No Records Found!</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

