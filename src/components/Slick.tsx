import React from "react";
import PropertyCard from "./PropertyCard";

export default function Slick() {
  const properties = [
    {
      image: "hero.jpeg",
      title: "Blue Origin Fams",
      price: 50,
      location: "Bandung, Indonesia",
    },
    {
      image: "hero.jpeg",
      title: "Blue Origin Fams",
      price: 50,
      location: "Bandung, Indonesia",
    },
    {
      image: "hero.jpeg",
      title: "Blue Origin Fams",
      price: 50,
      location: "Bandung, Indonesia",
    },
    {
      image: "hero.jpeg",
      title: "Blue Origin Fams",
      price: 50,
      location: "Bandung, Indonesia",
    },
    {
      image: "hero.jpeg",
      title: "Blue Origin Fams",
      price: 50,
      location: "Bandung, Indonesia",
    },
    {
      image: "hero.jpeg",
      title: "Blue Origin Fams",
      price: 50,
      location: "Bandung, Indonesia",
    },
    {
      image: "hero.jpeg",
      title: "Blue Origin Fams",
      price: 50,
      location: "Bandung, Indonesia",
    },
  ];

  return (
    <>
      {[
        "House With Backyard",
        "Hotel With Large Living Room",
        "Apartment With Kitchen Set",
      ].map((sectionTitle, sectionIndex) => (
        <div key={sectionIndex} className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            {sectionTitle}
          </h2>
          <div className="flex overflow-x-auto space-x-4 rounded-md cursor-pointer scrollbar-hide">
            {properties.map((property, index) => (
              <div
                key={index}
                className="min-w-[250px] rounded-lg flex-shrink-0"
              >
                <PropertyCard
                  image={property.image}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          House With Backyard
        </h2>
        <div className="grid grid-flow-col gap-4 overflow-x-auto md:grid-rows-1 bg-slate-400">
          {properties.map((property, index) => (
            <div key={index} className="rounded-lg min-w-[250px]">
              {" "}
              <PropertyCard
                image={property.image}
                title={property.title}
                price={property.price}
                location={property.location}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          Hotel With Large Living Room
        </h2>
        <div className="grid grid-flow-col gap-4 overflow-x-auto md:grid-rows-1 bg-slate-400">
          {properties.map((property, index) => (
            <div key={index} className="rounded-lg min-w-[250px]">
              {" "}
              <PropertyCard
                image={property.image}
                title={property.title}
                price={property.price}
                location={property.location}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          Apartement With Kitchen Set
        </h2>
        <div className="grid grid-flow-col gap-4 overflow-x-auto md:grid-rows-1 bg-slate-400">
          {properties.map((property, index) => (
            <div key={index} className="rounded-lg min-w-[250px]">
              {" "}
              <PropertyCard
                image={property.image}
                title={property.title}
                price={property.price}
                location={property.location}
              />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
