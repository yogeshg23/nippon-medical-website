import MedicalNav from "@/src/components/medical-nav";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MedicalNav />
      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">About Nippon Medical Centre</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing exceptional medical services with Japanese precision and Nepali hospitality
          </p>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2">Our History</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Established in 2010, Nippon Medical Centre has been serving the medical needs of the Global community and local residents in the Nepal for nearly two decades.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Founded by Nepalese medical professionals, our center combines professional medical expertise with an understanding of the local healthcare environment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we've grown from a small clinic to a comprehensive medical center serving thousands of patients annually.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
  <img
    src="Team.png" // Replace with your image path
    alt="Historical photo of Nippon Medical Centre"
    className="w-full h-full object-fill"
  />
</div>

          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Quality Care</h3>
              <p className="text-gray-700">
                Delivering medical services that meet both Global standards and local requirements with precision and attention to detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Cultural Understanding</h3>
              <p className="text-gray-700">
                Bridging the gap between Global and Nepali healthcare expectations with bilingual staff and culturally-sensitive care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Comprehensive Services</h3>
              <p className="text-gray-700">
                Offering a wide range of medical services from routine check-ups to specialized treatments under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2">Our Specialized Services</h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-5">
            <li className="mb-2 text-gray-700"> Comprehensive health checkups</li>
            <li className="mb-2 text-gray-700">Immigration medical examinations</li>
            <li className="mb-2 text-gray-700">Occupational health services</li>
            <li className="mb-2 text-gray-700">Vaccination programs</li>
            <li className="mb-2 text-gray-700">Telemedicine services</li>
            <li className="mb-2 text-gray-700">Specialist consultations</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2">Our Team</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our medical team consists of Japanese and Filipino healthcare professionals working together to provide the best possible care. All physicians are licensed both in Japan and the Philippines, ensuring understanding of medical standards in both countries.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Anuj Shrestha", position: "Medical Director", specialty: "Orthopaedic" },
              { name: "Dr. Sudhar Prasad Adhikari", position: "Chief Radiologist", specialty: "Diagnostic Imaging and Radiology" },
              { name: "Dr. Leesa Gauchan", position: "Pathologist", specialty: "{Pathology}" },
              { name: "Dr. Amit Tulachan ", position: "General Practioner", specialty: "General Practice" },
            ].map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="bg-gray-200 h-40 mb-4 rounded-md flex items-center justify-center text-gray-500">
                  Doctor Photo
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-teal-600 mb-1">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}