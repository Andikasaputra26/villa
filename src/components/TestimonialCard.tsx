"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { motion } from "framer-motion";

export default function TestimonialCard() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="w-full dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="container mx-auto px-4 py-8"
        id="agents"
      >
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-6 dark:bg-gray-900">
          <div className="relative flex-shrink-0">
            <div className="relative z-10">
              <Image
                src="/banner.svg"
                width={300}
                height={400}
                alt="Happy Family"
                className="rounded-lg"
              />
            </div>
            <div className="absolute -left-5 -top-5 z-0 w-[280px] h-[380px] rounded-lg "></div>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
              Happy Family
            </h2>

            <div className="flex justify-center md:justify-start my-2">
              <Rating
                value={5}
                readOnly
                cancel={false}
                className="text-yellow-500"
              ></Rating>
            </div>

            <p className="w-full md:w-1/2 text-gray-700 text-lg md:text-2xl font-medium dark:text-white">
              What a trip with family and I should try again next time....
            </p>
            <p className="text-gray-500 mt-2 dark:text-white">
              Suryadi, UI Designer
            </p>

            <div className="mt-4">
              <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none transition">
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const SkeletonLoader = () => {
  return (
    <div className="w-full dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-6 animate-pulse">
          <div className="relative flex-shrink-0">
            <div className="w-[300px] h-[400px] bg-gray-300 rounded-lg"></div>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left w-full">
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="flex justify-center md:justify-start my-2">
              <div className="h-5 bg-gray-300 rounded w-24"></div>
            </div>
            <div className="h-8 bg-gray-300 rounded w-full md:w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-300 rounded w-1/4 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
