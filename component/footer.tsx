import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-600 grid grid-cols-4  p-4">
      <div>
        <div className="text-white font-bold text-2xl mb-4">Everest Trips</div>
        <p className="text-white w-80">
          Your trusted partner for unforgettable travel experiences around the
          world
        </p>

        <div className="flex space-x-2 space-y-1 text-white mt-4">
          <Mail />
          <p>example@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2 text-white mt-4">
          <Phone />
          <p>+977 1234567890</p>
        </div>
        <div className="flex items-center space-x-2 text-white mt-4">
          <MapPin />
          <p>Kathmandu, Nepal</p>
        </div>
      </div>
      <div className=" space-x-4 mt-4 ml-28">
        <div className="text-white ">Explore</div>
        <div className="flex flex-col text-white space-y-2 mt-3">
          <Link href="/">Home</Link>
          <Link href="/Tour">Tour</Link>
          <Link href="/Destination">Destination</Link>
          <Link href="/Activities">Activities</Link>
        </div>
      </div>

      <div>
        <div className="text-white  mt-4 mr-50">Company</div>
        <div className="flex flex-col text-white mt-3">
          <Link href="/About" className="text-white mt-3">
            About Us
          </Link>
          <Link href="/Blog" className="text-white mt-3">
            Blog
          </Link>
          <Link href="/Contact" className="text-white mt-3">
            Contact Us
          </Link>
          <p className="text-white mt-3">Terms & Conditions</p>
          <p className="text-white mt-3">Privacy Policy</p>
        </div>
      </div>
      <div>
        <div className="text-white  mt-4 ">NewsLetter</div>

        <p className="text-white mt-3">
          Subscribe to our newsletter for the latest updates
        </p>
        <div className="flex flex-col space-y-2 mt-3 max-w-xs">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md bg-black text-white mt-2 "
          />
          <button className="bg-blue-700 text-white p-2 rounded-md mt-2">
            Subscribe
          </button>
        </div>
      </div>
    
    </footer>
  );
}
