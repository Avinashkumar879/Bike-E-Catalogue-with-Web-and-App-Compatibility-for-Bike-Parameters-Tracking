'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Bell, Battery, Zap, PenToolIcon as Tool, X } from 'lucide-react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Battery Low",
      message: "Your vehicle battery is below 20%",
      time: "5 min ago",
      icon: <Battery className="w-5 h-5 text-red-500" />,
      type: "warning"
    },
    {
      id: 2,
      title: "Service Due",
      message: "Schedule your next service",
      time: "2 hours ago",
      icon: <Tool className="w-5 h-5 text-yellow-500" />,
      type: "info"
    },
    {
      id: 3,
      title: "Energy Savings",
      message: "You saved 2.5 kWh today!",
      time: "5 hours ago",
      icon: <Zap className="w-5 h-5 text-green-500" />,
      type: "success"
    }
  ])

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

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
            <span className="ml-4">Notifications</span>
          </div>
        </header>

        <div className="p-4">
          <AnimatePresence>
            {notifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No new notifications</p>
              </motion.div>
            ) : (
              notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="mb-4"
                >
                  <Card className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {notification.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{notification.title}</h3>
                        <p className="text-sm text-gray-600">{notification.message}</p>
                        <span className="text-xs text-gray-400">{notification.time}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeNotification(notification.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  )
}

