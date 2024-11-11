import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCity, FaBuilding, FaCommentDots } from 'react-icons/fa'; // Import icons

function ContactUsMain() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8 bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Please fill out the form below and our team will get back to you promptly.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Name Field */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaUser className="text-gray-500 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaEnvelope className="text-gray-500 mr-3 text-xl" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaPhone className="text-gray-500 mr-3 text-xl" />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* City Field */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaCity className="text-gray-500 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Your City"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Company Name Field */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaBuilding className="text-gray-500 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Message Field */}
          <div className="flex items-start border-b border-gray-300 py-2">
            <FaCommentDots className="text-gray-500 mr-3 text-xl mt-1" />
            <textarea
              placeholder="Your Message"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400 resize-none h-32"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsMain;
