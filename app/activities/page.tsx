import React from "react";
import Image from "next/image";
import Slide from "@/component/slide";

export default function Activity() {
  const activities = [
    {
      src: "/activities-page/treekingg.avif",
      alt: "Trekking",
      title: "Trekking",
      time: "4 Days",
    },
    {
      src: "/activities-page/rafting.avif",
      alt: "Rafting",
      title: "Rafting",
      time: "1 Day",
    },
    {
      src: "/activities-page/bungee.jpg",
      alt: "Bungee Jump",
      title: "Bungee Jump",
      time: "1 Hour",
    },
    {
      src: "/activities-page/paraglyding.jpg",
      alt: "Paragliding",
      title: "Paragliding",
      time: "2 Hours",
    },
    {
      src: "/activities-page/zip-line.avif",
      alt: "Zipline",
      title: "Zipline",
      time: "30 Minutes",
    },
  ];
  return (
    <div>
      <div className="bg-gray-50 text-gray-800 py-15 px-6  shadow-md mb-8 text-center">
        <h2 className="text-4xl mb-2 font-lg">Activities</h2>
      </div>
      <div className="p-4 flex justify-center items-center bg-white ">
        <h1 className="text-5xl font-semibold">Most Popular Activities</h1>
      </div>
      <div className="p-6 flex justify-center items-center bg-white">
        <p className="text-xl text-gray-600">
          You can change this section from Website Settings - Website Builder -
          Activities.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-white border-b border-gray-400">
        {activities.map((activity, index) => (
          <div key={index} className="text-center">
            <Image
              src={activity.src}
              alt={activity.alt}
              width={500}
              height={300}
              className="h-[45vh] w-[35vh] object-cover rounded-full shadow-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
              {activity.title}
            </h3>
            <p className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300 underline cursor-pointer">{activity.time}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center p-6 bg-white">
        <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500  hover:text-white transition-ease-in-out duration-300 py-3 px-4 rounded-lg cursor-pointer shadow-lg">
          View All Activities
        </button>
        <div className="bg-blue-200"></div>
      </div>
        <Slide/>
    </div>
  
  );
}
