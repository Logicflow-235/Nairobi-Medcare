
import React from 'react';

interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const values: ValueCard[] = [
  {
    title: 'Patient-first care',
    description:
      'Every feature we build starts with one question: does this make it easier for a patient to get care?',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Trust and transparency',
    description:
      'Clear appointment status, honest availability, and doctors you can actually reach.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Accessible healthcare',
    description:
      'Booking a doctor should be as simple as booking a ride — anywhere in Nairobi.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { label: 'Registered doctors', value: '50+' },
  { label: 'Patients served', value: '2,000+' },
  { label: 'Specialties covered', value: '12' },
];

const AboutPage: React.FC = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Nairobi MedCare
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Connecting patients in Nairobi with trusted doctors — simple booking,
            clear communication, better care.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Nairobi MedCare was built to close the gap between patients and doctors.
          We give patients a fast, transparent way to find and book appointments,
          and give doctors a simple way to manage their schedules — no phone tag,
          no walk-in queues, no guesswork.
        </p>
      </section>
      <section className="bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-blue-800 text-center mb-10">
          What we stand for
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="border border-blue-100 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Ready to book your visit?</h2>
        <p className="text-blue-100 mb-6">
          Find a doctor and schedule an appointment in minutes.
        </p>
        
          href="/register"
          className="inline-block bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
       <a>
          Get started
        </a>
      </section>
    </main>
  );
};

export default AboutPage;