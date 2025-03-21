import EventCard from "@/components/EventCard";
import EventSchedule from "@/components/EventSchedule";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Sponsers from "@/components/Sponsers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <EventCard />
      <EventSchedule />
      <Gallery />
      <Sponsers />
    </div>
  );
}
