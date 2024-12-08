"use client";

import React, { useEffect, useState } from "react";
import { Camera, Luggage, MapPin } from "lucide-react";
import Image from "next/image";
import Button from "./common/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const [number, setNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const category = [
    {
      name: "Traveller",
      count: 86533,
    },
    {
      name: "Cities",
      count: 1224,
    },
    {
      name: "Treasure",
      count: 5523,
    },
  ];

  const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * category.length);
  };

  useEffect(() => {
    setNumber(generateRandomNumber());

    const timer = setTimeout(() => {
      const randomIndex = generateRandomNumber();
      setNumber(category[randomIndex].count);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [category]);

  return (
    <div className="dark:bg-gray-900 p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start gap-4 text-black-primary dark:text-white mt-8 md:mt-0">
          {isLoading ? (
            <div className="w-full space-y-4">
              <div className="bg-gray-300 dark:bg-gray-600 h-8 w-3/4 rounded-lg animate-pulse"></div>
              <div className="bg-gray-300 dark:bg-gray-600 h-4 w-full rounded-lg animate-pulse"></div>
              <div className="bg-gray-300 dark:bg-gray-600 h-4 w-5/6 rounded-lg animate-pulse"></div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-sans font-bold md:text-5xl lg:text-6xl leading-tight text-center md:text-left">
                Forget Busy Work, <br /> Start Next Vacation
              </h1>

              <p className="text-gray-500 font-sans dark:text-gray-300 text-center md:text-left text-sm md:text-lg max-w-md md:max-w-lg">
                We provide what you need to enjoy your holiday with family. Time
                to make another memorable moment.
              </p>

              <Button
                onClick={() => console.log("click")}
                className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-black bg-blue-500 text-md text-white p-2 shadow-button shadow-black hover:shadow-black hover:scale md:p-4"
              >
                Show Me Now
              </Button>
            </>
          )}

          <div className="mt-6 flex justify-center md:justify-start space-x-8">
            <div className="flex items-center space-x-2">
              <Luggage width={24} height={24} className="text-blue-600" />
              <p className="text-gray-500 dark:text-gray-300 text-lg">
                {isLoading ? (
                  <span className="bg-gray-300 dark:bg-gray-600 h-6 w-16 rounded-lg animate-pulse inline-block"></span>
                ) : (
                  `${number} Traveller`
                )}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin width={24} height={24} className="text-blue-600" />
              <p className="text-gray-500 dark:text-gray-300 text-lg">
                {isLoading ? (
                  <span className="bg-gray-300 dark:bg-gray-600 h-6 w-16 rounded-lg animate-pulse inline-block"></span>
                ) : (
                  `${number} Cities`
                )}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Camera width={24} height={24} className="text-blue-600" />
              <p className="text-gray-500 dark:text-gray-300 text-lg">
                {isLoading ? (
                  <span className="bg-gray-300 dark:bg-gray-600 h-6 w-16 rounded-lg animate-pulse inline-block"></span>
                ) : (
                  `${number} Treasure`
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 p-4 bg-transparent">
          {isLoading ? (
            <div className="relative w-full h-64 md:h-auto bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg"></div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden mt-6"
            >
              <Image
                src={"/hero.svg"}
                width={1820}
                height={1080}
                alt="Vacation"
                className="object-contain w-full h-auto rounded-tl-[9rem] rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-[2rem]"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
