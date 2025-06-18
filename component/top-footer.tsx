import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
export default function TopFooter() {
  return (
    <div className="bg-white text-black space-x-8 shadow-md ">
      <div className="flex justify-between items-center p-4">
        <div>
          <div className="flex space-x-4 text-gray-500 hover:text-black sm:text-center">
            
            <Instagram />
            <Facebook />
            <Twitter />
            <Linkedin />
          </div>
        </div>
        <div>
          <p className="text-gray-500 sm:text-center">Copyright © 2013-2025</p>
        </div>
      </div>
    </div>
  );
}
