import React from "react";
import { Camera, UsersRound, Headphones, ShieldCheck } from "lucide-react";

export default function Information() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-16 mt-10">
      <div className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Why Choose Us?
      </div>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
        We offer the best services for your travel needs.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6 hover:shadow-lg transition w-[300px]">
          <div className="bg-blue-400 text-white rounded-full p-4 mb-4">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Best Price Guarantee
          </h3>
          <p className="text-sm text-gray-600">
            Enjoy the lowest prices on all your travel bookings, backed by our
            price match promise.
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6  hover:shadow-lg transition w-[300px]">
          <div className="bg-pink-400 text-white rounded-full p-4 mb-4">
            <UsersRound className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Expert Guidance
          </h3>
          <p className="text-sm text-gray-600">
            Our team of travel experts is here to provide personalized advice
            and support for your journey.
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6  hover:shadow-lg transition w-[300px]">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">
            <Headphones className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            24/7 Customer Support
          </h3>
          <p className="text-sm text-gray-600">
            We're here for you around the clock, ensuring your travel experience
            is smooth and hassle-free.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6  hover:shadow-lg transition w-[280px]">
          <div className="bg-green-400 text-white rounded-full p-4 mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Secure Payments
          </h3>
          <p className="text-sm text-gray-600">
            Your payments are safe with us, protected by industry-grade
            encryption and secure systems.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 text-center mt-20 gap-10">
        <h1 className="text-5xl font-bold text-black">
          OUR BEST SELLING TOURS
        </h1>
        <p className="text-gray-600 text-lg max-w-xl">
          You can change this section from Website Settings - Website Builder
          -Tour Packages.
        </p>
      </div>
      <div className="flex justify-center mt-15">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300  cursor-pointer">
          View All Articles
        </button>
      </div>
    </div>
  );
}
