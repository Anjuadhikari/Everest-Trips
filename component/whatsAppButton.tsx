"use client";
import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function WhatsappButton() {
  return (
    <Link href="https://wa.me/9816094840">
      <div className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg">
        <span className="text-lg font-bold">
          <Phone />
        </span>
      </div>
    </Link>
  );
}
