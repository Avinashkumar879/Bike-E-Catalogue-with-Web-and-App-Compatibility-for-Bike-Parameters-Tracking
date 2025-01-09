'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CreditCard, Plus } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, listItemAnimation, scaleIn } from "@/lib/animations"
import { useState } from "react"

export default function WalletPage() {
  const [balance, setBalance] = useState(25.50)
  const [topUpAmount, setTopUpAmount] = useState("")

  const handleTopUp = () => {
    const amount = parseFloat(topUpAmount)
    if (!isNaN(amount)) {
      setBalance(prevBalance => prevBalance + amount)
      setTopUpAmount("")
    }
  }

  return (
    <Layout showNav={false}>
      <motion.div 
        className="min-h-screen flex flex-col"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <header className="bg-[#1a4b63] text-white p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="text-white">
              <Link href="/">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <span className="ml-4">Wallet</span>
          </div>
        </header>

        <div className="p-4 space-y-6">
          <motion.div variants={scaleIn}>
            <Card className="p-6 bg-[#1a4b63] text-white">
              <h2 className="text-xl font-semibold mb-2">Current Balance</h2>
              <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
            </Card>
          </motion.div>

          <motion.div variants={listItemAnimation} className="space-y-4">
            <h3 className="text-lg font-semibold">Top Up</h3>
            <div className="flex space-x-2">
              <Input
                type="number"
                placeholder="Enter amount"
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handleTopUp}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </motion.div>

          <motion.div variants={listItemAnimation} className="space-y-4">
            <h3 className="text-lg font-semibold">Payment Methods</h3>
            <Card className="p-4">
              <div className="flex items-center">
                <CreditCard className="w-6 h-6 mr-4" />
                <div>
                  <p className="font-semibold">Visa ****1234</p>
                  <p className="text-sm text-gray-500">Expires 12/24</p>
                </div>
              </div>
            </Card>
            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add New Card
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}

