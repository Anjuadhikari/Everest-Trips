"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Snowfall from "react-snowfall";

import { Button } from "@/components/ui/button";

const images = [
  {
    id: 1,
    name: "Discover the Himalayas",
    url: "/mountain.avif",
    desc: "Pack Your Bags,Lets Go For Aventures.",
  },
  {
    id: 2,
    name: "Explore Mountains",
    url: "/imag2.jpg",
    desc: "See The Real World Through Fresh Eyes",
  },
  {
    id: 3,
    name: "Aventure await",
    url: "/image3.jpg",
    desc: "Create Memories That Last A Lifetime.",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const { name, url, desc } = images[activeIndex];

  return (
    <div className="relative   bg-white  w-full h-[30vh] md:h-[75vh] overflow-hidden">
      <Image src={url} alt={name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/20">
        <Snowfall snowflakeCount={20} />
      </div>

      <div className="absolute bottom-10 left-5 md:left-12 text-white z-10 max-w-xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {name}
        </h2>
        <p className="mt-2 text-sm md:text-base">{desc}</p>

        <div className="mt-6 flex gap-4">
          <Link href="/faq">
            <Button>Get Started</Button>
          </Link>

          <div className="flex gap-2 z-20">
            <Button
              className="bg-white hover:bg-primary text-black rounded-full shadow-md "
              onClick={prevSlide}
            >
              <ChevronLeft />
            </Button>
            <Button
              className="bg-white hover:bg-primary text-black rounded-full shadow-md "
              onClick={nextSlide}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </div>
  );
};

export default Slider;
