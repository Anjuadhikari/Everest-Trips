"use client";
import React from "react";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
// Use the image path as a string since it's in the public folder

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src="/mountain.avif"
        alt="Mountain"
        width={500}
        height={300}
        className="w-full h-[85vh] object-cover"
      />
      <div>
        <Snowfall />
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white">
        <h1 className="text-6xl font-bold">Welcome to the Mountains</h1>
        <p className="text-2xl mt-2">Experience the beauty of nature</p>

        <Link href="/faq">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full mt-6 hover:bg-blue-700 transition cursor-pointer">
            Get Started
          </button>
        </Link>

        <div className="flex justify-center mt-6 gap-4">
          <div className="bg-white rounded-full p-2 cursor-pointer">
            <ChevronLeft className="text-blue-600 w-6 h-6" />
          </div>
          <div className="bg-white rounded-full p-2 cursor-pointer">
            <ChevronRight className="text-blue-600 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
