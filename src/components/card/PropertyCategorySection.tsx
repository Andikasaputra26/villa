"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Rating } from "primereact/rating";
import { motion } from "framer-motion";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  popular?: boolean;
}

const PropertyCategorySection: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  popular = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      id="stories"
      className="relative bg-white rounded-lg overflow-hidden shadow-md group dark:bg-gray-700"
    >
      {isLoading ? (
        <div className="relative cursor-pointer overflow-hidden">
          <div className="bg-gray-300 dark:bg-gray-600 h-250 w-full rounded-lg animate-pulse"></div>
          {popular && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              <div className="bg-gray-300 dark:bg-gray-600 h-6 w-16 rounded-lg animate-pulse inline-block"></div>
            </span>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative cursor-pointer overflow-hidden"
        >
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={400}
            height={250}
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {popular && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              Popular choice
            </span>
          )}
        </motion.div>
      )}
      <div className="p-4">
        {isLoading ? (
          <div className="space-y-4">
            <div className="bg-gray-300 dark:bg-gray-600 h-4 w-full rounded-lg animate-pulse"></div>
            <div className="bg-gray-300 dark:bg-gray-600 h-4 w-5/6 rounded-lg animate-pulse"></div>
          </div>
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex justify-between items-center"
            >
              <div className="flex flex-row">
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <Rating
                value={5}
                readOnly
                cancel={false}
                className="text-yellow-500"
              />
            </motion.div>
            <p className="text-gray-600 text-sm dark:text-white">{location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCategorySection;
