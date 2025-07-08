import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; 
const ContactSection = () => {
  return (
    <section className="py-16 px-4 lg:px-28 font-poppins bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you. Please reach out for any inquiries or information.
        </p>
      </div>

      {/* Contact Form and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-primary text-white font-semibold text-lg rounded-lg shadow-md hover:bg-secondary hover:duration-300 hover:ease-linear hover:text-primary focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="md:text-3xl text-xl font-semibold mb-6">Our Location</h2>
          <div>
            <h3 className="md:text-xl font-semibold mb-2">Address:</h3>
            <p className="text-lg text-gray-600">
              Seat Of Wisdom,Adalemo Sango Ota, Ogun State, <br />Nigeria
            </p>
          </div>
          <div className="mt-6">
            <h3 className="md:text-xl font-semibold mb-2">Phone:</h3>
            <a
              href="tel:+123806807895"
              className="flex items-center md:text-lg text-sm text-primary hover:duration-300 ease-linear hover:text-secondary"
            >
              <FaPhoneAlt className="w-6 h-6 mr-2" />
              +123 806807895
            </a>
          </div>
          <div className="mt-6">
            <h3 className="md:text-xl font-semibold mb-2">Email:</h3>
            <a
              href="mailto:Seatofwisdomprivateschools@gmail.com"
              className="flex items-center md:text-lg text-sm text-primary hover:duration-300 ease-linear hover:text-secondary"
            >
              <FaEnvelope className="w-6 h-6 mr-2" />
             Seatofwisdomprivateschools@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
