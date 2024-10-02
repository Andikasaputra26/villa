"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
interface PropertyCardProps {
  image: string;
  title: string;
  price: number;
  location: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  price,
  location,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md ">
      {isLoading ? (
        // Skeleton loading effect
        <div className="relative cursor-pointer">
          <div className="bg-gray-300 dark:bg-gray-600 h-64 w-full rounded-lg animate-pulse"></div>
          <div className="absolute top-2 right-2 bg-gray-300 dark:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-semibold animate-pulse"></div>
          <div className="absolute w-full bottom-0 hover:top-35 hover:bg-black hover:bg-opacity-70 hover:text-gray-100 transition duration-500 ease-in-out">
            <div className="bg-gray-300 dark:bg-gray-600 p-4 animate-pulse">
              <div className="bg-gray-300 dark:bg-gray-600 h-4 w-full rounded-lg animate-pulse"></div>
              <div className="bg-gray-300 dark:bg-gray-600 h-4 w-5/6 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        // Actual content
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative cursor-pointer"
        >
          <Image
            src={image}
            alt="Vacation"
            width={400}
            height={500}
            className="object-cover bg-cover w-full h-64 hover:scale-125 transition duration-500 ease-in-out"
          />
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
            ${price}/Night
          </div>
          <div className="absolute w-full bottom-0 hover:top-35 hover:bg-black hover:bg-opacity-70 hover:text-gray-100 transition duration-500 ease-in-out">
            <div className="bg-black bg-opacity-35 p-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>{" "}
              <p className="text-gray-300 text-sm">{location}</p>{" "}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PropertyCard;
