import Hero from "@/components/Hero";
import HouseWithBackyard from "@/components/HouseWithBackyard";
import KitchenSet from "@/components/KitchenSet";
import LivingRoom from "@/components/LivingRoom";
import PropertyList from "@/components/PropertyList";
// import Slick from "@/components/Slick";
import TestimonialCard from "@/components/TestimonialCard";
import { PrimeReactProvider } from "primereact/api";

export default function Home() {
  return (
    <PrimeReactProvider>
      <Hero />
      <PropertyList />
      {/* <Slick /> */}
      <HouseWithBackyard />
      <LivingRoom />
      <KitchenSet />
      <TestimonialCard />
    </PrimeReactProvider>
  );
}
