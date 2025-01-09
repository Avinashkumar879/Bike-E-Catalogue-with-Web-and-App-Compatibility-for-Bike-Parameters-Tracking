'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react'
import { useState } from "react"

export default function MessagesPage() {
  const [message, setMessage] = useState("")
  const messages = [
    { id: 1, text: "Hello! How can I help you today?", sender: "support" },
    { id: 2, text: "I need help with my rental", sender: "user" },
    { id: 3, text: "What seems to be the issue?", sender: "support" },
  ]

  return (
    <Layout title="Support Chat">
      <div className="flex flex-col h-[calc(100vh-3.5rem)]">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <Card
                className={`max-w-[80%] p-3 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {msg.text}
              </Card>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-background">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

