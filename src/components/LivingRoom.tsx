import React from "react";
import PropertyCategorySection from "./card/PropertyCategorySection";

interface Property {
  image: string;
  name: string;
  location: string;
  popular: boolean;
}

const LivingRoom: React.FC = () => {
  const houseWithBackyardProperties: Property[] = [
    {
      image: "/stark.png",
      name: "Green Park",
      location: "Tangerang, Indonesia",
      popular: true,
    },
    {
      image: "/stark.png",
      name: "Anggana",
      location: "Bogor, Indonesia",
      popular: false,
    },
    {
      image: "/stark.png",
      name: "Seattle Rain",
      location: "Jogjakarta, Indonesia",
      popular: true,
    },
    {
      image: "/stark.png",
      name: "Wodden Pit",
      location: "Wonosobo, Indonesia",
      popular: false,
    },
    {
      image: "/stark.png",
      name: "Cashville",
      location: "Kendari, Indonesia",
      popular: true,
    },
  ];

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left dark:text-white">
          Hotel With Large Living Room
        </h2>
        <div className="flex overflow-x-auto space-x-4 rounded-md cursor-pointer scrollbar-hide">
          {houseWithBackyardProperties.map((property, index) => (
            <div key={index} className="min-w-[300px] rounded-lg flex-shrink-0">
              <PropertyCategorySection
                image={property.image}
                title={property.name}
                location={property.location}
                popular={property.popular}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
