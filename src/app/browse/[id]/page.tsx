"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function HomeDetails({ params }: { params: { id: string } }) {
  const [nights, setNights] = useState(1);
  const pricePerNight = 280;
  const totalPrice = nights * pricePerNight;

  const handleNightsChange = (increment: any) => {
    setNights((prevNights) => Math.max(prevNights + increment, 1));
  };
  return (
    <div className="container mx-auto p-6 mt-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold"> Blue Origin Fams</h1>
        <p className="text-gray-500">Makassar, Indonesia</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-full">
          <Image
            src="/hero.jpeg"
            alt="House"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative h-64">
            <Image
              src="/villa1.png"
              alt="Interior"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative h-64">
            <Image
              src="/villa2.png"
              alt="Kitchen"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - About the Place */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">About the place</h2>
            <p className="text-gray-700 mb-4">
              Many minimalist houses have a simple, straightforward, efficient
              plan layout with stacked volumes of spaces. This creates clarity
              in the plan, where spaces are predictable and uncomplicated.
              Simple forms, open floor plans, minimal interior walls, modest
              storage areas, and an emphasis on views and daylight are defining
              characteristics of many minimalist floor plans.
            </p>
            <p className="text-gray-700 mb-4">
              Using a simple continuous exterior cladding material can easily
              provide visual appeal and articulation by expressing the physical
              characteristics of the materials and their texture.
            </p>
            <p className="text-gray-700 mb-4">
              Minimalism is one of the most significant design movements of the
              20th century. It is the most effective, powerful and influential
              design these days. It provides modesty to the house. As the name
              indicates, minimalist design is certainly not a splendid or lavish
              style{" "}
            </p>
            <div className="flex flex-wrap mt-6">
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">🛏️</span>
                <span>3 Bed rooms</span>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">🛋️</span>
                <span>1 Living Room</span>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">🚽</span>
                <span>2 Bath rooms</span>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">🍽️</span>
                <span>1 Dining room</span>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">📶</span>
                <span>10 mbp/s</span>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">🏢</span>
                <span>2 Units Ready</span>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">🥤</span>
                <span>2 Refrigerators</span>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="mr-2 text-blue-600">📺</span>
                <span>1 Television</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto items-center bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-center mb-2">
              Start Booking
            </h2>
            <p className="text-2xl font-semibold text-teal-600 p-4">
              ${pricePerNight} <span className="text-gray-500">/Night</span>
            </p>

            <div className="p-2">
              <p className="text-md">How long you will stay?</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleNightsChange(-1)}
                  className="bg-red-500 text-white font-bold rounded-l-md px-4 py-2"
                  disabled={nights === 1}
                >
                  -
                </button>
                <span className="border-t border-b text-lg font-semibold w-20 text-center">
                  {nights} night{nights > 1 ? "s" : ""}
                </span>
                <button
                  onClick={() => handleNightsChange(1)}
                  className="bg-blue-500 text-white font-bold rounded-r-md px-4 py-2"
                >
                  +
                </button>
              </div>
            </div>

            <div className="p-2">
              <label className="block text-md font-medium">Pick a date</label>
              <input
                type="date"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <p className="mt-4 text-sm text-gray-600">
              You will pay about
              <span className="font-bold">${totalPrice}</span> for {nights}
              night{nights > 1 ? "s" : ""}.
            </p>

            <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">
              Continue Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
