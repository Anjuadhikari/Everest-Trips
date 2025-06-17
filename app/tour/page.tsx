"use client";
import { ChevronDown, Search } from "lucide-react";
import { useState, useRef } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TourPage() {
  const details = [
    {
      id: 1,
      title: "Phewa Lake",
      location: "Pokhara, Nepal",
      description:
        "A serene freshwater lake reflecting the Annapurna range, perfect for boating and sunset views.",
      image: "/phewa.avif",
      color: "bg-blue-100",
    },
    {
      id: 2,
      title: "Upper Mustang",
      location: "Mustang, Nepal",
      description:
        "A hidden Tibetan kingdom with desert landscapes, ancient caves, and walled cities like Lo Manthang.",
      image: "/uppermustang.jpg",
      color: "bg-pink-100",
    },
    {
      id: 3,
      title: "Annapurna Base Camp",
      location: "Kaski, Nepal",
      description:
        "A stunning trekking destination surrounded by snow-capped peaks, nestled in the heart of the Himalayas.",
      image: "/annapurna.jpg",
      color: "bg-green-100",
    },
    {
      id: 4,
      title: "Langtang Valley",
      location: "Rasuwa, Nepal",
      description:
        "A pristine valley near the Tibetan border, famous for its glaciers, yak pastures, and Tamang culture.",
      image: "/langtang.avif",
      color: "bg-purple-100",
    },
    {
      id: 5,
      title: "Mount Everest",
      location: "Solukhumbu, Nepal",
      description:
        "The tallest mountain on Earth, attracting climbers and trekkers from all over the world to its base camp.",
      image: "/mountain.avif",
      color: "bg-yellow-100",
    },
  ];

  const [showRange, setShowRange] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showDestination, setShowDestination] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full mx-auto flex justify-between items-start border border-gray-200 gap-6 px-6">
        {/* Filter Section */}
        <div className="w-[22%] p-6 shadow-md border border-gray-200 rounded-4xl mt-10 mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Sort & Filter</h2>
            <span className="text-blue-500 cursor-pointer underline">Clear All</span>
          </div>

          {/* Duration */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Duration</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowRange(!showRange)}
            />
          </div>
          {showRange && (
            <div className="mb-6">
              <input
                type="range"
                min="1"
                max="100"
                className="w-full h-2 bg-blue-500 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {/* Dates */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Dates</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowDate(!showDate)}
            />
          </div>
          {showDate && (
            <RadioGroup defaultValue="option-one" className="text-blue-500">
              {["June", "July", "August", "September"].map((month, i) => (
                <div key={month} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={`option-${i}`} id={`option-${i}`} />
                  <Label htmlFor={`option-${i}`}>{month} 5 2026</Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {/* Price */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Price</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowPrice(!showPrice)}
            />
          </div>
          {showPrice && (
            <div className="mb-6">
              <input
                type="range"
                min="1"
                max="100"
                className="w-full h-2 bg-blue-500 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {/* Destination */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Destination</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowDestination(!showDestination)}
            />
          </div>
          {showDestination && (
            <RadioGroup defaultValue="option-one" className="text-blue-500">
              {["Kathmandu", "Pokhara", "Chitwan", "Lumbini"].map((place, i) => (
                <div key={place} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={`dest-${i}`} id={`dest-${i}`} />
                  <Label htmlFor={`dest-${i}`}>{place}</Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {/* Activities */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Activities</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowActivities(!showActivities)}
            />
          </div>
          {showActivities && (
            <RadioGroup defaultValue="option-one" className="text-blue-500">
              {["Kathmandu", "Pokhara", "Mustang"].map((act, i) => (
                <div key={act} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={`act-${i}`} id={`act-${i}`} />
                  <Label htmlFor={`act-${i}`}>{act}</Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {/* Difficulty */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold mb-4">Difficulty Level</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowDifficulty(!showDifficulty)}
            />
          </div>
          {showDifficulty && (
            <RadioGroup defaultValue="option-one" className="text-blue-500">
              {["Easy", "Moderate", "Difficult"].map((level, i) => (
                <div key={level} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={`diff-${i}`} id={`diff-${i}`} />
                  <Label htmlFor={`diff-${i}`}>{level}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </div>

        {/* Tour Carousel Section */}
        <div className="w-[75%] p-6 shadow-md border border-gray-200 rounded-4xl mt-10 mb-20">
          <div className="flex justify-end mb-4">
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Search className="h-5 w-5" />
            </button>
          </div>

          <Carousel className="w-full mx-auto px-4">
            <CarouselContent>
              {details.map((detail) => (
                <CarouselItem
                  key={detail.id}
                  className="md:basis-1/2 lg:basis-1/3 px-2"
                >
                  <Card>
                    <CardContent className="p-0">
                      <div
                        className={`shadow-lg rounded-xl overflow-hidden p-4 hover:shadow-xl transition duration-300 border-2 ${detail.color} border-solid h-[450px]`}
                      >
                        <img
                          src={detail.image}
                          alt={detail.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div>
                          <div className="text-gray-800 font-semibold text-lg mb-2">
                            {detail.location}, {detail.title}{" "}
                            <span className="text-blue-600 text-sm">+1 More</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            {detail.description}
                          </p>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            View More
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
