import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ArrowLeft, Check } from 'lucide-react'
import Link from "next/link"

export default function EditProfilePage() {
  return (
    <Layout showNav={false}>
      <div className="min-h-screen flex flex-col">
        <header className="bg-[#1a4b63] text-white p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" asChild className="text-white">
              <Link href="/profile">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </Button>
            <div className="text-lg font-medium flex-1 text-center">
              Edit profile
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <Check className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Rider's Name
              </label>
              <Input 
                defaultValue="Thor Odinson"
                className="bg-[#1a4b63] text-white border-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Location
              </label>
              <Input 
                defaultValue="Rajanukumte"
                className="bg-[#1a4b63] text-white border-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Your Ride
              </label>
              <Input 
                defaultValue="Scooter"
                className="bg-[#1a4b63] text-white border-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Model
              </label>
              <Input 
                defaultValue="Ather 450X"
                className="bg-[#1a4b63] text-white border-none"
              />
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/placeholder.svg"
              alt="Ather 450X"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

