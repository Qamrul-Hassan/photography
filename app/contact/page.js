"use client";
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, 
  FaInstagram, FaFacebook, FaTwitter, FaLinkedin 
} from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-5xl font-extrabold text-gray-900">Contact Me</h1>
          <p className="text-xl text-gray-600 mt-3">
            Let's connect! Feel free to reach out for collaborations, inquiries, or just to say hello.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-7 h-7 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Photography Lane, Creative City, CC 45678</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <FaPhone className="w-7 h-7 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <FaEnvelope className="w-7 h-7 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@qamrulhassan.com</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Me</h3>
                <div className="flex space-x-5">
                  <a href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-pink-600 transition-all">
                    <FaInstagram className="w-7 h-7" />
                  </a>
                  <a href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-blue-600 transition-all">
                    <FaFacebook className="w-7 h-7" />
                  </a>
                  <a href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-blue-400 transition-all">
                    <FaTwitter className="w-7 h-7" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-blue-700 transition-all">
                    <FaLinkedin className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
