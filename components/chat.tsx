'use client'

import { useState } from "react"
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Chat() {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (!message.trim()) return
    // Handle message sending
    setMessage("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
          Hello! How can I help you today?
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%] ml-auto">
          I need help with my rental
        </div>
      </div>
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button size="icon" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

