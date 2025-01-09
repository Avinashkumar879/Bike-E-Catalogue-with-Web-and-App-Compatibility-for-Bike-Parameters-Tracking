import Link from "next/link"
import { Home, MessageCircle, Map, Bell, User, Settings, HelpCircle, LogOut } from 'lucide-react'

export function MainMenu() {
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "/" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Messages", href: "/messages" },
    { icon: <Map className="w-5 h-5" />, label: "Find Scooter", href: "/map" },
    { icon: <Bell className="w-5 h-5" />, label: "Notifications", href: "/notifications" },
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "/profile" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", href: "/settings" },
    { icon: <HelpCircle className="w-5 h-5" />, label: "Help", href: "/help" },
    { icon: <LogOut className="w-5 h-5" />, label: "Logout", href: "/logout" },
  ]

  return (
    <nav className="p-4">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 bg-gray-100 hover:bg-gray-200"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

