"use client";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

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
    <main className="min-h-screen w-full px-6 py-10 max-w-7xl mx-auto">
      <div className="flex justify-between gap-6">
        {/* Filter Section */}
        <div className="w-[22%] p-6 shadow-md border border-gray-200 rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Sort & Filter</h2>
            <span className="text-blue-500 cursor-pointer underline">
              Clear All
            </span>
          </div>

          {/* Duration */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Duration</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowRange(!showRange)}
            />
          </div>
          {showRange && (
            <input
              type="range"
              min="1"
              max="100"
              className="w-full h-2 bg-blue-500 rounded-lg cursor-pointer mb-4"
            />
          )}

          {/* Dates */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Dates</h2>
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Price</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowPrice(!showPrice)}
            />
          </div>
          {showPrice && (
            <input
              type="range"
              min="1"
              max="100"
              className="w-full h-2 bg-blue-500 rounded-lg cursor-pointer mb-4"
            />
          )}

          {/* Destination */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Destination</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowDestination(!showDestination)}
            />
          </div>
          {showDestination && (
            <RadioGroup defaultValue="option-one" className="text-blue-500">
              {["Kathmandu", "Pokhara", "Chitwan", "Lumbini"].map(
                (place, i) => (
                  <div key={place} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={`dest-${i}`} id={`dest-${i}`} />
                    <Label htmlFor={`dest-${i}`}>{place}</Label>
                  </div>
                )
              )}
            </RadioGroup>
          )}

          {/* Activities */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Activities</h2>
            <ChevronDown
              className="w-4 h-4 text-gray-500 cursor-pointer"
              onClick={() => setShowActivities(!showActivities)}
            />
          </div>
          {showActivities && (
            <RadioGroup defaultValue="option-one" className="text-blue-500">
              {["Trekking", "Adventure", "Wildlife"].map((act, i) => (
                <div key={act} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={`act-${i}`} id={`act-${i}`} />
                  <Label htmlFor={`act-${i}`}>{act}</Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {/* Difficulty */}
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Difficulty Level</h2>
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

        {/* Tour List Placeholder (for search results) */}
        <div className="w-[75%]">
          <div className="flex justify-end mb-4">
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Popular Tours */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Popular Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.slice(0, 3).map((tour) => (
            <div
              key={tour.id}
              className={`rounded-xl shadow-md overflow-hidden transition hover:shadow-lg border border-gray-200 ${tour.color}`}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{tour.title}</h3>
                <p className="text-gray-600 text-sm">{tour.location}</p>
                <p className="mt-2 text-gray-700 text-sm">{tour.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="my-12 bg-gray-100 p-8 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          What Our Travelers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Suman Thapa",
              review:
                "The Annapurna Base Camp trek was breathtaking! The team made everything smooth and enjoyable.",
              location: "Kathmandu",
            },
            {
              name: "Elina Gurung",
              review:
                "I loved my Langtang trip. Great support and amazing guides!",
              location: "Pokhara",
            },
            {
              name: "Rahul Lama",
              review:
                "Best trekking experience ever. Highly recommend the Mustang trail!",
              location: "Chitwan",
            },
          ].map((testi, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <p className="text-gray-700 mb-4 italic">"{testi.review}"</p>
              <div className="font-semibold text-blue-600">{testi.name}</div>
              <div className="text-sm text-gray-500">{testi.location}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
