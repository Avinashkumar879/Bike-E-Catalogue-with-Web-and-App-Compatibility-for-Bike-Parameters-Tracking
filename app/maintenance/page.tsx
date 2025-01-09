'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, PenToolIcon as Tool, Calendar, Clock, AlertTriangle } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { listItemAnimation } from "@/lib/animations"

export default function MaintenancePage() {
  const maintenanceItems = [
    {
      title: "Regular Service",
      date: "Next service due in 2 weeks",
      status: "Upcoming",
      type: "warning"
    },
    {
      title: "Battery Check",
      date: "Completed on 15th June",
      status: "Completed",
      type: "success"
    },
    {
      title: "Tire Pressure",
      date: "Check recommended",
      status: "Due",
      type: "error"
    }
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
            <span className="ml-4">Maintenance</span>
          </div>
        </header>

        <div className="p-4 space-y-4">
          {maintenanceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={listItemAnimation}
              initial="initial"
              animate="animate"
              custom={index}
            >
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full ${
                      item.type === 'warning' ? 'bg-yellow-100' :
                      item.type === 'success' ? 'bg-green-100' :
                      'bg-red-100'
                    }`}>
                      <Tool className={`w-5 h-5 ${
                        item.type === 'warning' ? 'text-yellow-600' :
                        item.type === 'success' ? 'text-green-600' :
                        'text-red-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  <span className={`text-sm ${
                    item.type === 'warning' ? 'text-yellow-600' :
                    item.type === 'success' ? 'text-green-600' :
                    'text-red-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="p-4 mt-auto">
          <Button className="w-full bg-[#1a4b63]">
            Schedule Service
          </Button>
        </div>
      </div>
    </Layout>
  )
}

