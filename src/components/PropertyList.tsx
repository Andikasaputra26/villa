"use client";
import React from "react";
import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function PropertyList() {
  const properties = [
    {
      id: 1,
      image: "/villa1.png",
      title: "Blue Origin Fams",
      price: 50,
      location: "Jakarta, Indonesia",
    },
    {
      id: 2,
      image: "/villa2.png",
      title: "Ocean Land",
      price: 75,
      location: "Bandung, Indonesia",
    },
    {
      id: 3,
      image: "/vinnavil.png",
      title: "Vinna Vill",
      price: 69,
      location: "Malang, Indonesia",
    },
    {
      id: 4,
      image: "/stark.png",
      title: "Stark House",
      price: 35,
      location: "Makassar, Indonesia",
    },
    {
      id: 5,
      image: "/bobox.png",
      title: "Bobox",
      price: 40,
      location: "Medan, Indonesia",
    },
  ];

  const visibleProperties = properties.slice(0, 5);

  return (
    <div className="w-full dark:bg-gray-900">
      <div id="browse" className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left mt-2 dark:text-white">
            Most Picked
          </h2>
          <div className="text-center">
            <a
              href="/browse"
              className="flex items-center justify-center text-blue-500 hover:underline text-xl font-serif"
              aria-label="View all properties"
            >
              View All Properties
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleProperties.map((property, index) => (
            <div
              key={property.id}
              className={`${index === 3 ? "md:col-span-2" : "col-span-1"}`}
            >
              <Link href={`/browse/${property.id}`}>
                <PropertyCard
                  image={property.image}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
