import React from "react";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

export default function HomeDetails() {
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
    {
      id: 6,
      image: "/bobox.png",
      title: "Bobox",
      price: 40,
      location: "Medan, Indonesia",
    },
    {
      id: 7,
      image: "/bobox.png",
      title: "Bobox",
      price: 40,
      location: "Medan, Indonesia",
    },
  ];

  return (
    <div className="w-full dark:bg-gray-900">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-center md:text-left mt-2 dark:text-white">
            Most Picked
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link href={`/browse/${property.id}`} key={property.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
                <PropertyCard
                  image={property.image}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
