import ContactPic from "@/component/contact-pic";
import React from "react";

export default function ContactPage() {
  return (
    <>
    
      <div className="bg-gray-50 text-gray-800 py-15 px-6  shadow-md mb-8 text-center">
        <h2 className="text-4xl mb-2 font-lg">Contact</h2>
      </div>
      <div>
        <p className="text-gray-500 text-lg mb-5 flex items-center justify-center">
          Have any questions or need help? We&apos;d love to hear from you. Fill out
          the form below, and we&apos;ll get back to you as soon as possible.
        </p>
        <form
          action=" "
          className="max-w-3xl mx-auto bg-gray-50  rounded-lg shadow-md mb-10 p-10"
        >
          <div className="mb">
            <label
              htmlFor="name"
              className=" text-gray-700 mb-2 font-semibold flex items-center gap-1"
            >
              Name
              <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              placeholder="Your Name"
              required
            />
            <label
              htmlFor="email"
              className=" text-gray-700 mb-2 font-semibold mt-4 flex items-center gap-1"
            >
              Email
              <p className="text-red-500">*</p>
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              placeholder="Your Email"
              required
            />
            <label
              htmlFor="subject"
              className=" text-gray-700 mb-2 font-semibold mt-4 flex items-center gap-1"
            >
              Subject
              <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              placeholder="Your Subject"
              required
            />
            <label
              htmlFor="message"
              className=" text-gray-700 mb-2 font-semibold mt-4 flex items-center gap-1"
            >
              Message
              <p className="text-red-500">*</p>
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              placeholder="Your Message"
              required
            ></textarea>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="mt-6  bg-blue-600 text-white py-3 px-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
       <ContactPic />
      
    </>
   
  );
}
