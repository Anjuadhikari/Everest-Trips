import React from "react";
import image from "@/public/mountain.avif";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function Hero() {
  return (
    <div className=" ">
      <Image
        src={image}
        alt="Mountain"
        width={500}
        height={300}
        className="w-full relative h-[85vh] object-cover"
      />

      <div className="absolute bottom-0 mt-50  text-white ">
        <h1 className="text-6xl font-bold text-center mt-4">
          Welcome to the Mountains
        </h1>
        <p className="text-center text-2xl mt-2">
          Experience the beauty of nature
        </p>

        <div className="flex items-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full mt-4 ml-70  pointer">
            Get Started
          </button>
          <div className="flex items-center ml-3 mt-2 gap-2">
            <p className=" py-1 px-1 rounded-full bg-white ho">
              <ChevronLeft
                size={16}
                className=" text-blue-600 w-8 h-8 mr-2 cursor-pointer "
              />
            </p>
            <p className=" py-1 px-1 rounded-full bg-white">
              <ChevronRight
                size={16}
                className="  text-blue-600 w-8 h-8 ml-2 cursor-pointer"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
