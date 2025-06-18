"use client";

import React from "react";
import { useState } from "react";

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
    <div>
      <div className="flex justify-center items-center space-x-4 mb-6">
        {Slide.map((slide, index) => (
          <button
            onClick={() => setActiveSlide(slide)}
            key={index}
            className={`px-4 py-2 rounded-lg ${
              activeSlide === slide
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {slide}
          </button>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        {currentContent.content.map((content, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-full shadow-xl w-[300px] flex flex-col items-center text-center space-y-2"
          >
            <img
              src={content.image}
              alt={content.title}
              className="w-24 h-24 object-contain rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-900">
              {content.title}
            </h2>
            <p className="text-yellow-500 text-lg">{content.rating}</p>
          </div>
        ))}
      </div>

      <div>
        {currentDetails.detail.map((detail, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 mb-4 rounded-lg shadow-md"
          >
            <h1>{detail.title}</h1>
            <p>{detail.description}</p>
            <a href={detail.link} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
            <p>{detail.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
