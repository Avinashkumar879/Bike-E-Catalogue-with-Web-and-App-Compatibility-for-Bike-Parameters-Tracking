'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, MapPin, User, Clock, MessageSquare } from 'lucide-react'
import Link from "next/link"

export default function SyncPage() {
  const menuItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Last Parked Location",
      href: "/location"
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Profile",
      href: "/profile"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Trips",
      href: "/trips"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Help",
      href: "/help"
    }
  ]

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
            <span className="ml-4">LAST SYNC DATA</span>
          </div>
        </header>

        <div className="p-4 space-y-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="bg-[#7ac4d6] hover:bg-[#6ab4c6] transition-colors">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white h-14"
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

