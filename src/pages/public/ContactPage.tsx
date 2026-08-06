// src/pages/public/ContactPage.tsx
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this to the backend once contact endpoint exists
    console.log('Form submitted:', formData);
  };

  return (
    <main className="bg-white">
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-3">Get in touch</h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Questions about booking, a specialty, or your appointment?
            We're here to help.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Contact information
          </h2>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">📍</span>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-600">
                  Westlands Road, Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">📞</span>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-gray-600">+254 700 000 000</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✉️</span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-600">
                  support@nairobimedcare.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">🕒</span>
              <div>
                <p className="font-medium">Opening hours</p>
                <p className="text-sm text-gray-600">Mon – Sat: 8am – 6pm</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-red-50 border border-red-100 rounded-lg p-4">
            <p className="text-sm text-red-700">
              <span className="font-semibold">Emergency?</span> Call{' '}
              <span className="font-semibold">+254 700 111 111</span> — do not
              use this form.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Send a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Find us
        </h2>
      </section>
      <div className="border-8 border-blue-500 w-80 md:w-180 h-80 rounded-3xl mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8148811641645!2d36.82796427472433!3d-1.2850371987027427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11cc8721e3ed%3A0x112f7051153b5b90!2sWholesale%20Mall!5e0!3m2!1sen!2ske!4v1786004176602!5m2!1sen!2ske"
                 width="100%"
                  height="100%"
                  style={{border:0}} 
                 allowFullScreen
                 loading="lazy" 
                 referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
    </main>
  );
};

export default ContactPage;
