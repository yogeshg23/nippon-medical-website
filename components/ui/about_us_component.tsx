import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[#00857c] text-sm font-medium mb-2">About Us</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nippon Medical Centre</h3>
            <p className="text-gray-700 text-sm md:text-base mb-6">
              From 1st April 2018, Nippon Medical Centre has opted for online medical slip generator and payment methods
              to book their Nippon medical check up Online. The Candidates can log onto the Nippon Medical website and
              generate their own Nippon medical slip for the medical check up by means of online payment or they can
              take our service which comes up to 1500+. The website will provide you assistance with the name and
              address of the medical centre that will conduct your medical check up.
            </p>
            <Button className="bg-[#00857c] hover:bg-[#006e66] text-white text-xs h-8 rounded">LEARN MORE</Button>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="doctorfamily.svg"
                alt="Medical Centre Family"
                width={500}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
            </div>
            <div className="absolute top-1/4 -right-4 z-0">
              <div className="grid grid-cols-6 gap-1">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00857c] opacity-20"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
