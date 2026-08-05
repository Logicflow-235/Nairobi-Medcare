import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white">Nairobi MedCare</h2>
            <p className="mt-4 text-sm leading-6">
              Providing trusted healthcare services with experienced doctors,
              modern facilities, and convenient online appointment booking.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

      
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-2">
              <li>General Consultation</li>
              <li>Emergency Care</li>
              <li>Laboratory </li>
              <li>Pharmacy</li>
              <li>Radiology</li>
              <li>Pediatrics</li>
              <li>Optical Care</li>
              <li>Gynecology</li>
            </ul>
          </div>

         
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MdLocationOn className="mt-1 text-xl text-blue-400" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-3">
                <MdPhone className="text-xl text-blue-400" />
                <span>+254 700 123 456</span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-xl text-blue-400" />
                <span>info@nairobimedcare.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-lg text-blue-400" />
                <span>Open 24/7</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="my-8 border-t border-slate-700" />

     
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Nairobi MedCare. All rights reserved.
          </p>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-blue-400">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>

            <a href="#" className="hover:text-blue-400">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}