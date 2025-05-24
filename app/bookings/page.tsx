'use client'; 
import { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    dob: '',
    appointmentDate: '',
    passportIssueDate: '',
    passportExpiryDate: '',
    gender: '',
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
};


  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-[#00857c] mb-4">Book Your Medical Examination</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00857c] focus:border-[#00857c]"
            />
          </div>
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00857c] focus:border-[#00857c]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="passportIssueDate" className="block text-sm font-medium text-gray-700">Passport Issue Date</label>
            <input
              type="date"
              id="passportIssueDate"
              name="passportIssueDate"
              value={formData.passportIssueDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00857c] focus:border-[#00857c]"
            />
          </div>
          <div>
            <label htmlFor="passportExpiryDate" className="block text-sm font-medium text-gray-700">Passport Expiry Date</label>
            <input
              type="date"
              id="passportExpiryDate"
              name="passportExpiryDate"
              value={formData.passportExpiryDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00857c] focus:border-[#00857c]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00857c] focus:border-[#00857c]"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#00857c] text-white font-semibold rounded-md hover:bg-[#006e66] focus:outline-none focus:ring-2 focus:ring-[#006e66] focus:ring-opacity-50"
          >
            Submit Appointment
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingPage;
