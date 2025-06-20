"use client";
import React from "react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Page() {
  const FaqData = [
    {
      question: "How do I book a tour?",
      answer:
        "You can book a tour directly through our website by selecting your desired destination and following the booking steps.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 7 days before the trip will receive a full refund. Cancellations within 7 days are non-refundable.",
    },
    {
      question: "Are tour guides included in the packages?",
      answer:
        "Yes, all our tours come with experienced and licensed local tour guides.",
    },
    {
      question: "Do you offer custom/private tours?",
      answer:
        "Absolutely! We offer custom and private tours tailored to your interests. Contact us to create your perfect itinerary.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and digital payments including eSewa and Khalti.",
    },
    {
      question: "Is transportation included in the package?",
      answer:
        "Yes, transportation to and from the destination is included in most of our packages. Please check individual tour details.",
    },
    {
      question: "What should I pack for the trip?",
      answer:
        "We recommend packing comfortable clothing, valid ID/passport, sunscreen, a water bottle, and any personal medications.",
    },
  ];

  const [isopen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center mh-screen px-4 py-10 rounded-2xl">
      <div className="bg-gray-100 ">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Here are some of the most common questions we receive. If you have any
          other questions, feel free to contact us!
        </p>
        {FaqData.map((item, index) => (
          <div
            className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg my-4"
            key={index}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold ">{item.question}</h2>
              <ChevronDown
                onClick={() => setIsOpen(!isopen)}
                className={`text-gray-500 cursor-pointer  ${
                  isopen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {isopen && <div className="text-gray-700">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
