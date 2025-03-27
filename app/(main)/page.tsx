import About from "@/components/About";
import EventCard from "@/components/EventCard";
import EventSchedule from "@/components/EventSchedule";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Sponsers from "@/components/Sponsers";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <EventCard />
      <EventSchedule />
      <Gallery />
      <Sponsers />
    </div>
  );
}
