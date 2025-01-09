'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Clock, Battery, Zap, MapPin } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { listItemAnimation } from "@/lib/animations"

export default function StatsPage() {
  const stats = [
    {
      title: "Total Distance",
      value: "1,234 km",
      icon: <MapPin className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Total Rides",
      value: "156",
      icon: <Clock className="w-5 h-5 text-green-500" />
    },
    {
      title: "Battery Health",
      value: "95%",
      icon: <Battery className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "Energy Saved",
      value: "45 kWh",
      icon: <Zap className="w-5 h-5 text-purple-500" />
    }
  ]

  const recentActivity = [
    { date: "Today", distance: "15 km", duration: "45 min" },
    { date: "Yesterday", distance: "22 km", duration: "1h 10min" },
    { date: "2 days ago", distance: "18 km", duration: "55 min" }
  ]

  return (
    <Layout showNav={false}>
      <div className="min-h-screen flex flex-col">
        <header className="bg-[#1a4b63] text-white p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="text-white">
              <Link href="/dashboard">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <span className="ml-4">Statistics</span>
          </div>
        </header>

        <div className="p-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={listItemAnimation}
                initial="initial"
                animate="animate"
                custom={index}
              >
                <Card className="p-4">
                  <div className="flex flex-col items-center text-center">
                    {stat.icon}
                    <h3 className="text-sm text-gray-500 mt-2">{stat.title}</h3>
                    <p className="text-xl font-semibold mt-1">{stat.value}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-4">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={listItemAnimation}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  className="flex justify-between items-center"
                >
                  <div className="text-sm text-gray-500">{activity.date}</div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">{activity.distance}</span>
                    <span className="text-sm text-gray-500">{activity.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

