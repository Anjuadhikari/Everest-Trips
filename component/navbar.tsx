import React from "react";
import Image from "next/image";
// import image from "../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white w-full backdrop-blur-sm  p-2 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-5">
        <Image src="/logo.png" alt="Logo" className="h-10 w-10 ml-5" width={40} height={40} />
        <h1 className="text-3xl font-bold  text-blue-500">Everest Trips</h1>
      </div>

        <div className="space-x-25 mr-10 flex  justify-center items-center text-lg hover:text-blue-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/tour" className="hover:underline">
            Tours
          </Link>
          <Link href="/activities" className="hover:underline">
            Activities
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

    
    </div>
  );
}
