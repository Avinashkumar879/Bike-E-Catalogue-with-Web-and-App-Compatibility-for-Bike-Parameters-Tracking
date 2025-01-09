'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

export default function HelpPage() {
  const helpItems = [
    { title: "General", href: "/help/general" },
    { title: "Contact", href: "/help/contact" },
    { title: "Legal", href: "/help/legal" },
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
            <span className="ml-4">HELP</span>
          </div>
        </header>

        <div className="p-4">
          {helpItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-between bg-[#1a4b63] text-white mb-2 h-12"
              >
                {item.title}
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

