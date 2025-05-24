"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Clock, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function MedicalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className="flex flex-col w-full fixed top-0 left-0 right-0 z-50">
      {/* Top bar with contact info */}
      <div className="w-full bg-blue-900 text-white py-1 px-4 flex justify-end items-center text-xs md:text-sm">
        <div className="flex items-center mr-4">
          <Phone className="h-3 w-3 mr-1" />
          <span>(977)-9851065231</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>Mon to Sat 07 am to 06 pm</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <Image
                src="/logo.svg"
                width={100}
                height={48}
                alt="Nippon Medical Centre Logo"
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "block px-2 py-1 text-lg font-medium",
                      pathname === item.path && "text-blue-800 font-semibold",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">BOOK NOW</Button>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">LOG IN</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="flex space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <Link
                      href={item.path}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-800 focus:bg-blue-50 focus:text-blue-800 focus:outline-none",
                        pathname === item.path && "bg-blue-50 text-blue-800 font-semibold",
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">BOOK NOW</Button>
              <Button className="bg-blue-800 hover:bg-blue-900 text-white">LOG IN</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
