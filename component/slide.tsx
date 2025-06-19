"use client";

import React, { useState } from "react";

export default function Slide() {
  const Slide = ["TripAdvisor", "GoogleReviews"];
  const [activeSlide, setActiveSlide] = useState("TripAdvisor");

  const contents = {
    TripAdvisor: {
      content: [
        {
          title: "TripAdvisor",
          image: "/tripadvisior.png",
          rating: `⭐⭐⭐⭐ 4.5`,
        },
      ],
    },
    GoogleReviews: {
      content: [
        {
          title: "Google Reviews",
          image: "/google-review.png",
          rating: `⭐⭐⭐⭐ 4.5`,
        },
      ],
    },
  };

  const Details = {
    TripAdvisor: {
      detail: [
        {
          title: "TripAdvisor",
          description:
            "TripAdvisor is a travel and restaurant website that provides user-generated content, including reviews, ratings, and photos of various travel-related businesses.",
          link: "https://www.tripadvisor.com/",
          rating: `⭐⭐⭐⭐ 4.5`,
        },
        {
          title: "TripAdvisor",
          description:
            "TripAdvisor is a travel and restaurant website that provides user-generated content, including reviews, ratings, and photos of various travel-related businesses.",
          link: "https://www.tripadvisor.com/",
          rating: `⭐⭐⭐ 3.`,
        },
        {
          title: "TripAdvisor",
          description:
            "TripAdvisor is a travel and restaurant website that provides user-generated content, including reviews, ratings, and photos of various travel-related businesses.",
          link: "https://www.tripadvisor.com/",
          rating: `⭐⭐⭐⭐⭐ 5.0`,
        },
      ],
    },
    GoogleReviews: {
      detail: [
        {
          title: "Google Reviews",
          description:
            "Google Reviews is a feature of Google that allows users to leave reviews and ratings for businesses, helping others make informed decisions based on real customer experiences.",
          link: "https://www.google.com/maps",
          rating: `⭐⭐⭐⭐ 4.5`,
        },
        {
          title: "Google Reviews",
          description:
            "Google Reviews is a feature of Google that allows users to leave reviews and ratings for businesses, helping others make informed decisions based on real customer experiences.",
          link: "https://www.google.com/maps",
          rating: `⭐⭐⭐ 3.0`,
        },
        {
          title: "Google Reviews",
          description:
            "Google Reviews is a feature of Google that allows users to leave reviews and ratings for businesses, helping others make informed decisions based on real customer experiences.",
          link: "https://www.google.com/maps",
          rating: `⭐⭐⭐⭐⭐ 5.0`,
        },
      ],
    },
  };

  const currentDetails = Details[activeSlide as keyof typeof Details];
  const currentContent = contents[activeSlide as keyof typeof contents];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 mb-10">
        {Slide.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(slide)}
            className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
              activeSlide === slide
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {slide}
          </button>
        ))}
      </div>

      {/* Logo Card */}
      <div className="flex justify-center mb-10">
        {currentContent.content.map((content, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 w-[280px] flex flex-col items-center text-center space-y-4 border border-gray-200"
          >
            <img
              src={content.image}
              alt={content.title}
              className="w-20 h-20 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-900">
              {content.title}
            </h2>
            <p className="text-yellow-500 text-lg">{content.rating}</p>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="grid gap-6">
        {currentDetails.detail.map((detail, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
            <p className="text-gray-700 mb-2">{detail.description}</p>
            <a
              href={detail.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Visit
            </a>
            <p className="text-yellow-500 mt-2">{detail.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
