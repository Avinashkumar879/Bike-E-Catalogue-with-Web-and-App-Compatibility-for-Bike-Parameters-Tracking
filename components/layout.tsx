import { Clock, Settings, Map, CreditCard } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { pageTransition } from "@/lib/animations"

interface LayoutProps {
  children: React.ReactNode
  showNav?: boolean
  className?: string
}

export function Layout({ children, showNav = true, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen bg-white flex flex-col", className)}>
      <motion.main 
        className="flex-1"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        {children}
      </motion.main>
      {showNav && (
        <motion.nav 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="sticky bottom-0 w-full bg-[#1a4b63] text-white"
        >
          <div className="flex justify-between items-center max-w-md mx-auto px-4 py-2">
            <Link href="/" className="flex flex-col items-center">
              <Clock className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/map" className="flex flex-col items-center">
              <Map className="w-6 h-6" />
              <span className="text-xs mt-1">Map</span>
            </Link>
            <Link href="/wallet" className="flex flex-col items-center">
              <CreditCard className="w-6 h-6" />
              <span className="text-xs mt-1">Wallet</span>
            </Link>
            <Link href="/settings" className="flex flex-col items-center">
              <Settings className="w-6 h-6" />
              <span className="text-xs mt-1">Settings</span>
            </Link>
          </div>
        </motion.nav>
      )}
    </div>
  )
}

