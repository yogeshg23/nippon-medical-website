import MedicalNav from "@/src/components/medical-nav";
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MedicalNav />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">About Nippon Medical Centre</h1>
        <p>Learn about our history, mission, and values.</p>
      </main>
    </div>
  )
}
