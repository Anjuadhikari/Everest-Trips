"use client";
import React, { useEffect } from "react";
import {
  MapPinHouse,
  PersonStanding,
  CircleDollarSign,
  Timer,
  Calendar,
  Search,
  ChevronDown,
  IdCardLanyard,
} from "lucide-react";
import { useState } from "react";



export default function InfoSection() {
    
  const [destination, setDestination] = useState(false);  // boolean false
  const [activities, setActivities] = useState(false);
  const [price, setPrice] = useState(false);
  const [duration, setDuration] = useState(false);
  const [date, setDate] = useState(false);
  const[isopen , setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = () => {
        setIsOpen(false);
   
    };
    document.addEventListener("click",handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };


}, []);

  return (
   <div className="bg-white h-[100px] w-[70%] ml-40 border-2 rounded-2xl shadow absolute bottom-[-100px] flex justify-between items-center px-4">
  <div className="flex justify-around items-center h-full text-gray-500 w-full">
    <div className="flex items-center space-x-3">
          <MapPinHouse />
          <p>Destination</p>
          <ChevronDown
            onClick={() => setDestination(!destination)}  // toggle boolean
            className="text-gray-500 cursor-pointer"
          />
          <div className="h-5 w-[1.5px] bg-gray-400 "></div>
          <div>
            {destination ?  (   // boolean check
              <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-48">
                <ul>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    pokhara
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Mustang
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Manang
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Lumbini
                  </li>
                </ul>
              </div>
            ):null}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <PersonStanding />
          <p>Activities</p>
          <ChevronDown
            onClick={() => setActivities(!activities)}  // toggle
            className="text-gray-500 cursor-pointer"
          />
          <div className="h-5 w-[1.5px] bg-gray-400"></div>
          <div>
            {activities && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-48">
                <ul>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Trekking
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Camping
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Rafting
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Sightseeing
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <CircleDollarSign />
          <p>Price</p>
          <ChevronDown
            onClick={() => setPrice(!price)}  // toggle
            className="text-gray-500 cursor-pointer"
          />
          <div className="h-5 w-[1.5px] bg-gray-400"></div>
          <div>
            {price && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-48">
                <ul>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Under $500
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    $500 - $1000
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    $1000 - $1500
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Above $1500
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <Timer />
            <p>Duration</p>
            <ChevronDown
              onClick={() => setDuration(!duration)}  // toggle
              className="text-gray-500 cursor-pointer"
            />
            <div className="h-5 w-[1.5px] bg-gray-400"></div>
            <div>
              {duration && (
                <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-48">
                  <ul>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      1 Day
                    </li>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      2 Days
                    </li>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      3 Days
                    </li>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      More than 3 Days
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar />
            <p>Date</p>
            <ChevronDown
              onClick={() => setDate(!date)}  // toggle
              className="text-gray-500 cursor-pointer"
            />
            <div className="h-5 w-[1.5px] bg-gray-400"></div>
            <div>
              {date && (
                <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-48">
                  <ul>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      Date 1
                    </li>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      Date 2
                    </li>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      Date 3
                    </li>
                    <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                      Date 4
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className=" space-x-60 space-y-60 bg-blue-600 text-white px-4 py-2 flex items-center hover:bg-blue-700 transition-ease-in-out ">
            <Search className=" cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}
function setIsOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
}

