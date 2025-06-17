import React from "react";
import Image from "next/image";
import ContactPic from "@/component/contact-pic";


export default function Page() {
  const trekingData = [{
    id: 1,
    title: "Complete Guide to Everest Trekking",
    description: "Located between the towering Himalayas and lush Indian plains, Nepal is a paradise for travelers seeking adventure and natural beauty.",
    image: "/treking.avif"
  },
{
    id: 2,
    title: "Langtang Circuit Trek",
    description: "Experience the diverse landscapes and rich culture of the Langtang region with this iconic trek.",
    image: "/langtang.avif"

},
{
  id: 3,
  title: "Mardi Base Camp Trek",
  description: "The Annapurna Base Camp Trek is a classic journey into the heart of the Annapurna massif, offering stunning views and rich cultural experiences.",
  image: "/mardi.avif"
}
];
  return (
    <>
    <div className="bg-gray-50 text-gray-800 py-15 px-6 shadow-md mb-8 text-center ">
            <h2 className="text-4xl mb-2 font-bold">Blog</h2>
          </div>
   <div className="grid grid-cols-3 gap-4 p-4">
     {
      trekingData.map((trek, index) => (
        
          

          <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white  ml-10 ">

            <Image
              src={trek.image}
              alt="Trekking in Annapurna"
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-2">
                Trekking
              </span>
              <h2 className="text-xl font-bold mb-2">
              {trek.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4">
                {trek.description}
              </p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        
      ))
    }
   </div>
   <ContactPic/>
    
    </>
  );
}
