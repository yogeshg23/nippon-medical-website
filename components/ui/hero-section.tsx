"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Home.svg"
          alt="Medical professional in white coat with stethoscope"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-6 md:p-8 rounded-lg shadow-lg w-[90%] max-w-[511px] text-center">
        <h1 className="text-blue-700 text-2xl md:text-3xl font-bold mb-3">Migration Health Assessment Center</h1>
        <p className="text-gray-700 mb-6">
          Also, book your medical appointments effortlessly with Nippon&apos;s online appointment system.
        </p>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2">BOOK EXAMINATION</Button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <ChevronDown className="h-10 w-10 text-white stroke-[1.5px] bg-black/20 rounded-full p-2" />
      </div>
    </div>
  )
}
