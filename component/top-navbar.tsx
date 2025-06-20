import { ALargeSmall, Icon } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import React from "react";

export default function TopNavbar() {
  return (
    <div className="bg-blue-600 text-white p-0.5 flex justify-between items-center ">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Mail />
          <p>example@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <Phone />
          <p>+977 1234567890</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Instagram className="hover:opacity-50 cursor-pointer" />
        <Facebook className="hover:opacity-50 cursor-pointer" />
        <Twitter className="hover:opacity-50 cursor-pointer" />
        <Linkedin size={23} className="hover:opacity-50 cursor-pointer" />
      </div>
    </div>
   
  );
}
