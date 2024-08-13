import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-16 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
                placeholder="Your Message"
                rows="6"
              ></textarea>
            </div>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Send Message
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>
            Or reach us directly via email at{" "}
            <a href="mailto:support@example.com" className="text-blue-500">
              support@example.com
            </a>
          </p>
          <p>
            Or call us at{" "}
            <a href="tel:+1234567890" className="text-blue-500">
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
