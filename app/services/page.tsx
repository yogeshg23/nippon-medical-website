import MedicalNav from "@/src/components/medical-nav";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MedicalNav />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Our Services</h1>
        <p>Explore the comprehensive healthcare services we offer.</p>
      </main>
    </div>
  )
}
