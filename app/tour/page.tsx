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
        <div className="w-[22%] p-6 shadow-md border border-gray-200 rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Sort & Filter</h2>
            <span className="text-blue-500 cursor-pointer underline">
              Clear All
            </span>
          </div>

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

        <div className="w-[75%]">
          <div className="flex justify-end mb-4">
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Popular Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((tour) => (
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
      <div className="my-16 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-black mb-14">
          What Our Travelers Say
        </h2>
        <div className="grid gap-y-12 md:grid-cols-3 md:gap-x-12">
          {[
            {
              name: "Bandana Gurung",
              review:
                "The Annapurna Base Camp trek was breathtaking! The team made everything smooth and enjoyable.",
              location: "Kathmandu",
            },
            {
              name: "Anju Adhikari",
              review:
                "I loved my Langtang trip. Great support and amazing guides!",
              location: "Pokhara",
            },
            {
              name: "Subina Gurung",
              review:
                "Best trekking experience ever. Highly recommend the Mustang trail!",
              location: "Chitwan",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 border-b border-gray-400 b-6 last:border-0"
            >
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "{item.review}"
              </p>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-semibold text-indigo-700">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
