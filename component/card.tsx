import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function CardDetails() {
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

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-10/12 mx-auto px-4  mb-4"
    >
      <CarouselContent>
        {details.map((detail) => (
          <CarouselItem key={detail.id} className="md:basis-1/2 lg:basis-1/3 ">
            <div >
              <Card className=" "
              >
                <CardContent >
                  <div
                    className={`shadow-lg rounded-xl overflow-hidden p-4 hover:shadow-xl transition duration-300 border-2 ${detail.color} border-solid h-[450px]`}
                  >
                    <Image
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

                      <Link href="/tour" >
                        <button
                          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors "
                        >
                          View More
                        </button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
