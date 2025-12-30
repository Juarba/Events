import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

const page = () => {
  return (
    <section id="home" className="flex flex-col items-center">
      <h1 className="text-center">
        The hub for every dev
        <br />
        Event you can&apos;t miss
      </h1>
      <p className="subheading">
        Hackatoons, conferences, and meetups
      </p>

      <ExploreBtn />
      
      <div id="events" className="mt-20 space-y-7 w-full">
        <h3>Featured events</h3>

        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))} 
        </ul>
      </div>
    </section>
  );
};

export default page;